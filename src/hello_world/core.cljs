(ns ^:figwheel-hooks hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<! >! chan timeout]]
   [cljs-http.client :as http]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.dom]
   [clojure.edn]))

;; AP: I noticed you checked in resources/public/cljs-out directory in your git
;; repo.  These are "output files" which just add noise to diffs and make the
;; repo hard to use.  You would typically ignore these in your .gitignore.
;;

;; -- Helper functions ------------------------------------------------
;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

(defonce event-channel (chan 10))

(defn send-event! [e]
  (go (>! event-channel e)))

;; Scoring rules
;; --------------------------------------
;; Words must contain at least 4 letters.
;; Words must include the center letter.
;; Letters can be used more than once.
;; 4-letter words are worth 1 point each.
;; Longer words earn 1 point per letter.
;; Each puzzle includes at least one “pangram” which uses every letter. These are worth 7 extra points!

(defn calc-word-score
  [word]
  (let [count-word (count word)]
    (if (= count-word 4)
      4
      (if (= 7 count-word) 14 count-word))))

(defn calc-points
  [word-list]
  (map calc-word-score word-list))

(defn inc-game-no
  "Hard coded to max of 3 games for now. I will update this to querry server for number of games."
  [game-no]
  (if (= 3 game-no)
    1
    (inc game-no)))

;; -- Domino 1 - Event Dispatch -----------------------------------------------

;; N/A - Event dispatch occurs from user input

;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db             ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
                             ;; Don't init :button-letters - init with server call for :request-letters
   {:typed-word ""
    :the-word-list []
    :point-score 0
    :game-no 1}              ;; What it returns becomes the new application state
   ))                        ;; so the application state will initially be a map with four keys

(rf/reg-event-db
 :typed-word-change
 (fn [db [_ new-word]]
   (assoc db :typed-word new-word)))

(rf/reg-event-db
 :add-letter
 (fn [db [_ new-letter]]
   (let [curr-word (:typed-word db)]
     (assoc db :typed-word (str curr-word new-letter)))))

(rf/reg-event-db
 :clear-input
 (fn [db [_ new-letter]]
   (assoc db :typed-word new-letter)))

(rf/reg-event-db
 :rem-letter
 (fn [db [_ new-letter]]
   (let [popped-word  (reduce str (take (- (count new-letter) 1) new-letter))]
     (assoc db :typed-word popped-word))))

(rf/reg-event-fx        ;; <-- note the `-fx` extension
 :check-word        ;; <-- the event id
 (fn                ;; <-- the handler function
   [{db :db} [_ word]]     ;; <-- 1st argument is coeffect, from which we extract db
   ;; AP:
   ;; You are doing a side effect directly from your event handler.
   ;; While I think this may work, it is not the recommended way to do this:
   ;; re-frame wants you to return a DATA DESCRIPTION of the side effect you
   ;; want to perform, then register effects handlers via reg-fx.
   ;;
   ;; Reread this section: https://day8.github.io/re-frame/Effects/#where-effects-come-from
   ;; specially the paragraph under "Extensible Side Effects".
   ;;
   ;; In any case, I've written a solution which does this that I'll present
   ;; tonight, so you'll get to see the "official" way of doing it soon.
   (go
    (if (empty? word)
      (js/alert "No word supplied! Try again...")
      (let [game-no (db :game-no)
            req-str (str "http://localhost:9500/api/" word "/" game-no "/check-word")
            resp (<! (http/get req-str))]
      ;; Ignore error handling for the moment
      (rf/dispatch [:process-word (get-in resp [:body :correct-word])]))))
   (assoc db :typed-word word)))

(rf/reg-event-db
 :process-word
 (fn [db [_ word]]
   (if (empty? word)
     (do
       ;; AP: This, as I'm sure you know, is awful UI because it requires
       ;; user to then go and click to dismiss the modal.  A pleasant popup
       ;; is actually kinda hard to do; I've done a solution which I'll present.
       (js/alert "Sorry, incorrect answer!")
       (-> db
           (assoc :typed-word "")))
     (let [curr-word-list (:the-word-list db)
           new-list (apply sorted-set (conj curr-word-list word))
           score (reduce + (calc-points new-list))]
       (-> db
           (assoc :the-word-list new-list)
           (assoc :typed-word "")
           (assoc :point-score score))))))

;; AP: Note that the point of using reg-event-fx instead of reg-event-db
;; is to return coeffects, which you're not doing here.
;; So this would be simpler as reg-event-db.
(rf/reg-event-fx               ;; <-- note the `-fx` extension
 :request-letters              ;; <-- the event id
 (fn                           ;; <-- the handler function
   [{db :db} [_ game-no]]      ;; <-- 1st argument is coeffect, from which we extract db
   ;; AP: Same comment as above re: stateful event handlers.
   (go
     (let [req-str (str "http://localhost:9500/api/" game-no "/letter-list")
           resp (<! (http/get req-str))
           new-letters (get-in resp [:body :letter-list])]
      ;; Ignore error handling for the moment
       (rf/dispatch [:process-letters [new-letters game-no]])))
     (-> db
         (assoc :game-no game-no)
         (assoc :point-score 10))))

(rf/reg-event-db
 :process-letters
 (fn
   [db [_ [letters game]]]
   (-> db
       ;; AP: You can assoc a whole bunch at a time: e.g.
       ;; (assoc :foo 1 :bar 2 :blah 3 ...)
       ;;
       ;; But if this is trying to reset all game state,
       ;; it might be simpler to make that explicit: e.g.
       (assoc :button-letters letters) ;; reset all game state
       (assoc :game-no game)
       (assoc :typed-word "")
       (assoc :the-word-list [])
       (assoc :point-score 0))))

(comment ; AP: Example simplification

  (def empty-game
    {:typed-word ""
     :the-word-list []
     :point-score 0})

  (rf/reg-event-db
      :process-letters
      (fn [_ [_ [letters game-num]]]
        (-> empty-game
            (assoc :button-letters letters
                   :game-no game-num)))))


(rf/reg-event-db
 :shuffle-buttons
 (fn
   [db [_ letter]]
   (let [mid-letter [(first letter)]
         bod (shuffle (rest letter))
         output (into mid-letter bod)]
     ;; AP: I guess I'm not thrilled that the special letter
     ;; is the first letter by convention, but that's a nitpick.
     (-> db
         (assoc :button-letters output)))))

;; -- Domino 4 - Query  -------------------------------------------------------

(rf/reg-sub
 :typed-word
 (fn [db _]
   (:typed-word db)))

(rf/reg-sub
 :the-word-list
 (fn [db _]
   (:the-word-list db)))

(rf/reg-sub
 :point-score
 (fn [db _]
   (:point-score db)))

(rf/reg-sub
 :button-letters
 (fn [db _]
   (:button-letters db)))

(rf/reg-sub
 :game-no
 (fn [db _]
   (:game-no db)))


;; -- Domino 5 - View Functions ----------------------------------------------

(defn text-entry
  []
  [:div
   [:div {:class :row}
    [:center
     [:h1#the-text "Spelling Bee Challenge"]]]
   [:div {:class :row}
    [:center
     ;[:div {:class :columnt}
     [:input#inp-text {:type :text :class :text
              :value @(rf/subscribe [:typed-word])
              :on-change #(rf/dispatch [:typed-word-change (str/upper-case (-> % .-target .-value))])
              :on-key-press #(if (= 13 (.-charCode %)) (rf/dispatch [:check-word @(rf/subscribe [:typed-word])]))}]
     ;[:div {:class :columnt}
     [:input {:type :button :class :button6 :value "Refresh"
              :on-click #(rf/dispatch [:clear-input ""])}]]]])

(defn button-entry
  []
  [:div
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 1)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 2)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 3)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
      ;; The middle letter
     [:input {:type :button :class :button3 :value (nth @(rf/subscribe [:button-letters]) 0)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 4)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]
   [:div
    [:center

     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 5)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth @(rf/subscribe [:button-letters]) 6)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]])

(defn action-buttons
  []
  [:div
   [:center
    [:input {:type :button :class :button4 :value "Backspace"
             :on-click #(rf/dispatch [:rem-letter @(rf/subscribe [:typed-word])])}]
    [:input {:type :button :class :button6 :value "# Shuffle Letters"
             :on-click #(rf/dispatch [:shuffle-buttons @(rf/subscribe [:button-letters])])}]
    [:input {:type :button :class :button :value "Submit"
             :on-click #(rf/dispatch [:check-word @(rf/subscribe [:typed-word])])
             }]]])

(defn accrued-list
  []
  [:div
   [:center
    [:h1#the-text (str "You have found " (count (apply sorted-set  @(rf/subscribe [:the-word-list]))) " words")]
    [:h2#the-text (str "Score: " @(rf/subscribe [:point-score]) " points!")]
    [:ul
     [:li#list-text
      (for [item (apply sorted-set @(rf/subscribe [:the-word-list]))]
        ^{:key item} [:li item])]]]])

(defn slider
  []
  [:div
   [:center
    ;; AP:                              \/ this value is wrong, of course.
    [:input {:type :range :min "1" :max "100" :value @(rf/subscribe [:point-score]) :class "slider"}]]])

(defn game-selection
  []
  [:div {:class :row}
   [:center
   [:div {:class :column}
    [:input {:type :button :class :button5 :value "New Game"
             :on-click #(rf/dispatch [:request-letters (inc-game-no @(rf/subscribe [:game-no]))])}]]
   [:div {:class :column}
    [:h1#the-text (str "Game No:" @(rf/subscribe [:game-no]))]]]])



(defn ui
  []
  [:div {:class :row}
   [:div {:class :columnl}
    [text-entry]
    [button-entry]
    [action-buttons]]
   [:div {:class :columnr}
    [game-selection]
    [slider]
    [accrued-list]]])


;; -- Mount UI and run init ----------------------------------------------

(defn get-app-element []
  (.getElementById js/document "app"))

(defn mount [el]
  (reagent.dom/render [ui] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))


(defn ^:after-load on-reload []
  ;; The `:dev/after-load` metadata causes this function to be called
  ;; after shadow-cljs hot-reloads code. We force a UI update by clearing
  ;; the Reframe subscription cache.
  (rf/clear-subscription-cache!)
  (println "reloading...")
  (mount-app-element))


;; AP: You should always indent; I did a double-take, wondering
;; why mount-app-element was being done both in the file and in
;; the do form which follows until I noticed the strangely formatted comment.
(comment
(rf/dispatch-sync [:initialize])
(rf/dispatch-sync [:request-letters 1])
(mount-app-element))


(defonce run
  (do
    (rf/dispatch-sync [:request-letters 1]) ; do this first to get letters from server
    (rf/dispatch-sync [:initialize]) ;; put a value into application state
    (mount-app-element)))

#_(defn run
  []
   (rf/dispatch-sync [:initialize]) ;; put a value into application state
   (mount-app-element)            ;; mount the application's ui into '<div id="app" />'
  )
