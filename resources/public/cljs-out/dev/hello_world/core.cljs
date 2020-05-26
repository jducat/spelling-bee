(ns ^:figwheel-hooks hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<! >! chan timeout]]
   [cljs-http.client :as http]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.dom]
   #_[day8.re-frame.http-fx]
   #_[ajax.core :as ajax]
   [clojure.edn]))


;; To-do's
;; 
;; shuffle words
;; play multiple games
;; slider
;; 

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

(defonce letter-list
  ["A"
   "D"
   "G"
   "L"
   "N"
   "R"
   "U"])

(defonce event-channel (chan 10))

(defn send-event! [e]
  (go (>! event-channel e)))

(defn word-score
  [word]
  (let [count-word (count word)]
    (if (= count-word 4)
      4
      (if (= 7 count-word) 14 count-word))))

(defn calc-points
  [word-list]
  (map word-score word-list))

;; Scoring rules
;;Words must contain at least 4 letters.
;;Words must include the center letter.
;;Letters can be used more than once.
;;4-letter words are worth 1 point each.
;;Longer words earn 1 point per letter.
;;Each puzzle includes at least one “pangram” which uses every letter. These are worth 7 extra points!

(def shuffle-list
  (let [mid-letter [(first letter-list)]
        bod (shuffle (rest letter-list))]
    (into mid-letter bod)))

;(js/alert shuffle-list)

#_(def default-db           ;; what gets put into app-db by default.
  {:shuffle-buttons letter-list})        ;; show all todos

;; -- Domino 1 - Event Dispatch -----------------------------------------------

;; all event dispatch occurs from user input
#_(defn dispatch-add-letter
  []
  (rf/dispatch [:add-letter "blank"]))


#_(defn dispatch-fetch-words
    [in]
    (rf/dispatch [:fetch-words in]))

#_(defn init-db
  []
  (rf/dispatch [:initialize "blank"]))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
   {:button-letters letter-list
    :typed-word ""
    :the-word-list []
    :point-score 0}         ;; What it returns becomes the new application state
   ))    ;; so the application state will initially be a map with two keys

#_(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
 :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
 (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
   (assoc db :time-color new-color-value)))   ;; compute and return the new application state


#_(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))  ;; compute and return the new application state


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
 :request-it        ;; <-- the event id
 (fn                ;; <-- the handler function
   [{db :db} [_ word]]     ;; <-- 1st argument is coeffect, from which we extract db 
   (go
    (if (empty? word)
      (js/alert (str "word supplied:" word))
      (let [req-str (str "http://localhost:9500/api/" word "/add-word")
            resp (<! (http/get req-str))]
        (print (str req-str " ----  " resp))
        (print word)

      ;; Ignore error handling for the moment
      (rf/dispatch [:fetch-words (get-in resp [:body :correct-word])]))))
   (assoc db :typed-word word)))
   
   #_(if (empty? word)
     (js/alert "no word supplied")
     (let [req-str (str "http://localhost:9500/api/" word "/add-word")]
     ;; we return a map of (side) effects
       {:http-xhrio {:method          :get
                     :uri             req-str
                     :format          (ajax/json-request-format)
                     :response-format (ajax/json-response-format {:keywords? true})
                     :on-success      [:process-response]
                     :on-failure      [:bad-response]}
        :db  (assoc db :loading? true)}))

(rf/reg-event-db
 :fetch-words
 (fn [db [_ word]]
   (print "in :fetch-words")
   (let [curr-word-list (:the-word-list db)
         new-list (apply sorted-set (conj curr-word-list word))
         score (reduce + (calc-points new-list))]
     (print "correct word in :fetch " word)
     (print "cur-word:" curr-word-list)
     (print "all entered words" new-list)
     (-> db
         (assoc :the-word-list new-list)
         (assoc :typed-word "")
         (assoc :point-score score))))) 

#_(rf/reg-event-db                   
  :process-response             
  (fn
    [db [_ response]]           ;; destructure the response from the event vector
    (print "in :process-response")
    (print response)
    (-> db
        ;(assoc :loading? false) ;; take away that "Loading ..." UI 
        (assoc :the-word-list (get-in response [:body :word-list])))))  ;; fairly lame processing
 
#_(rf/reg-event-db
 :bad-response
 (fn
   [db [_ response]]           ;; destructure the response from the event vector
   (print "in :bad-response")
   (let [form-resp (clojure.edn/read-string (get-in response [:original-text]))
         fin-resp (apply sorted-set (get-in form-resp [:word-list]))
         score (reduce + (calc-points fin-resp))]
     (print form-resp)
     (print fin-resp)
     (print (calc-points fin-resp))
     (print (reduce + (calc-points fin-resp)))
   (-> db
        ;(assoc :loading? false) ;; take away that "Loading ..." UI 
       (assoc :the-word-list fin-resp)
       (assoc :typed-word "")
       (assoc :point-score score)))))  ;; fairly lame processing

(rf/reg-event-db
 :shuffle-buttons
 (fn
   [db [_ letter]]
   (let [mid-letter [(first letter-list)]
         bod (shuffle (rest letter-list))
         output (into mid-letter bod)]
     (print "shuffle output: " output ", letters" letter-list)
     (-> db
        ;(assoc :loading? false) ;; take away that "Loading ..." UI 
         (assoc :button-letters output)))))


;; -- Domino 4 - Query  -------------------------------------------------------

#_(rf/reg-sub
 :time
 (fn [db _]     ;; db is current app state. 2nd unused param is query vector
   (:time db))) ;; return a query computation over the application state

#_(rf/reg-sub
 :time-color
 (fn [db _]
   (:time-color db)))

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


;; -- Domino 5 - View Functions ----------------------------------------------

(defonce init (rf/dispatch [:initialize "blank"]))

(defn text-entry
  []
  [:div
   [:center
   [:h1#the-text "Spelling Bee Game"]
   [:input {:type :text :class :text
            :value @(rf/subscribe [:typed-word])
            :on-change #(rf/dispatch [:typed-word-change (str/upper-case (-> % .-target .-value))])
            :on-key-press #(if (= 13 (.-charCode %)) (rf/dispatch [:request-it @(rf/subscribe [:typed-word])]))}]]])

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
     [:input {:type :button :class :button3 :value (first letter-list)
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
    [:input {:type :button :class :button4 :value "refresh"
             :on-click #(rf/dispatch [:clear-input ""])}]
    [:input {:type :button :class :button4 :value "backspace"
             :on-click #(rf/dispatch [:rem-letter @(rf/subscribe [:typed-word])])}]
    [:input {:type :button :class :button4 :value "Shuffle"
             :on-click #(rf/dispatch [:shuffle-buttons @(rf/subscribe [:button-letters])])}]
    [:input {:type :button :class :button :value "enter"
             :on-click #(rf/dispatch [:request-it @(rf/subscribe [:typed-word])])
             }]]])

(defn accrued-list
  []
  [:div ;{:class :column}
   [:center
    [:h1#the-text (str "You have found " (count (apply sorted-set  @(rf/subscribe [:the-word-list]))) " words")]
    [:h2#the-text (str "Score: " @(rf/subscribe [:point-score]) " points!")]
    [:ul
     [:li#list-text
      (for [item (apply sorted-set @(rf/subscribe [:the-word-list]))]
        ^{:key item} [:li item])]]]])

(defn slider
  []
  [:div ;{:class "slidecontainer"}
   [:center
    [:input {:type :range :min "1" :max "100" :value @(rf/subscribe [:point-score]) :class "slider"}]]])

(defn ui
  []
  [:div {:class :row}
   [:div {:class :columnl}
    [text-entry]
    [button-entry]
    [action-buttons]]
   [:div {:class :columnr}
    [slider]
    [accrued-list]]])

;; Mount the UI

(defn get-app-element []
  (.getElementById js/document "app"))

(defn mount [el]
  (reagent.dom/render [ui] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  ;; The `:dev/after-load` metadata causes this function to be called
  ;; after shadow-cljs hot-reloads code. We force a UI update by clearing
  ;; the Reframe subscription cache.
  (rf/clear-subscription-cache!)
  (println "reloading...")
  (mount-app-element))