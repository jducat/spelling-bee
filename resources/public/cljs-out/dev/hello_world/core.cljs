(ns ^:figwheel-hooks hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   #_[goog.dom :as gdom]
   #_[reagent.core :as reagent :refer [atom]]
   [cljs.core.async :refer [<! >! chan timeout]]
   [cljs-http.client :as http]
   [clojure.string :as str]
   [re-frame.core :as rf]
   [reagent.dom]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [clojure.edn]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

(def letter-list
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

#_(defn fetch-remote-data []
    (if (empty? @(rf/subscribe [:typed-word]))
      (js/alert (str "word supplied:" @(rf/subscribe [:typed-word])))
      (let [req-str (str "http://localhost:8280/api/" @(rf/subscribe [:typed-word]) "/add-word")
            resp (http/get req-str)]
        (js/alert (str req-str " ----  " resp))
        (js/alert @(rf/subscribe [:typed-word]))

      ;; Ignore error handling for the moment
        #(rf/dispatch [:fetch-words (get-in resp [:body :word-list])]))))

(defn fetch-remote-data []
  (print "in the fetch remote data")
  (go
    (if (empty? @(rf/subscribe [:typed-word]))
      (js/alert (str "word supplied:" @(rf/subscribe [:typed-word])))
      (let [req-str (str "http://localhost:9500/api/" @(rf/subscribe [:typed-word]) "/add-word")
            resp (<! (http/get req-str))]
        ;(js/alert (str req-str " ----  " resp))
        ;(js/alert @(rf/subscribe [:typed-word]))

        (print "in the fetch remote data in go")
        (print (get-in resp [:body :word-list]))
      ;; Ignore error handling for the moment
        #(rf/dispatch [:process-fetched-words (get-in resp [:body :word-list])])))))

;; -- Domino 1 - Event Dispatch -----------------------------------------------

#_(defn dispatch-timer-event
    []
    (let [now (js/Date.)]
      (rf/dispatch [:timer now])))  ;; <-- dispatch used

;; Call the dispatching function every second.
;; `defonce` is like `def` but it ensures only one instance is ever
;; created in the face of figwheel hot-reloading of this file.
#_(defonce do-timer (js/setInterval dispatch-timer-event 1000))



(defn dispatch-add-letter
  []
  (rf/dispatch [:add-letter "blank"]))


#_(defn dispatch-fetch-words
    [in]
    (rf/dispatch [:fetch-words in]))


;; -- Domino 2 - Event Handlers -----------------------------------------------

(rf/reg-event-db              ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
   {:time (js/Date.)         ;; What it returns becomes the new application state
    :time-color "#f88"}))    ;; so the application state will initially be a map with two keys


(rf/reg-event-db                ;; usage:  (dispatch [:time-color-change 34562])
 :time-color-change            ;; dispatched when the user enters a new colour into the UI text field
 (fn [db [_ new-color-value]]  ;; -db event handlers given 2 parameters:  current application state and event (a vector)
   (assoc db :time-color new-color-value)))   ;; compute and return the new application state


(rf/reg-event-db                 ;; usage:  (dispatch [:timer a-js-Date])
 :timer                         ;; every second an event of this kind will be dispatched
 (fn [db [_ new-time]]          ;; note how the 2nd parameter is destructured to obtain the data value
   (assoc db :time new-time)))  ;; compute and return the new application state


(rf/reg-event-db
 :typed-word-change
 (fn [db [_ new-word]]
   ;(js/alert (:typed-word db))
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

(rf/reg-event-db
 :fetch-words
 (fn [db [_ new-word]]
   (print "called :fetch-words")
   (let [curr-words (:the-word-list db)
         all-words (conj curr-words new-word)]
     (print "called :fetch-words")
     (print curr-words all-words)
     (assoc db :the-word-list all-words :typed-word ""))))

(rf/reg-event-db
 :process-fetched-words
 (fn [db [_ new-word]]
   (print "in the :process-fetched-words")
   (assoc db :typed-word "WORKED")))
  
(rf/reg-event-db
 :remote-call
 (fn [db [_ word]]
   (print "run :remote-call on:" word)
   (print "in the fetch remote data")
   (go
     (if (empty? @(rf/subscribe [:typed-word]))
       (js/alert (str "word supplied:" @(rf/subscribe [:typed-word])))
       (let [req-str (str "http://localhost:9500/api/" @(rf/subscribe [:typed-word]) "/add-word")
             resp (<! (http/get req-str))]
        ;(js/alert (str req-str " ----  " resp))
        ;(js/alert @(rf/subscribe [:typed-word]))
         
         (print "in the remote-call in go")
         (print (get-in resp [:body :word-list]))
      ;; Ignore error handling for the moment
         #(rf/dispatch [:process-fetched-words (get-in resp [:body :word-list])])
         (print "in the remote-call in go after rf/disp")
         ;(assoc db :typed-word "Test")
         )))
   (assoc db :typed-word word)))
   
   #_(fetch-remote-data)
   #_(let [req-str (str "http://localhost:9500/api/" word "/add-word")
        curr-word (:typed-word db)
         resp (http/get
          req-str
          {:serv-handler       #(rf/dispatch [:process-response %1])   ;; <2> further dispatch !!
           :serv-error-handler #(rf/dispatch [:bad-response %1])})]
        (print "output: "(get-in resp [:body :word-list]))
       
       #(rf/dispatch [:process-response "test"])
       
       (assoc db :typed-word curr-word))
   ;(assoc db :typed-word word)))

(rf/reg-event-fx        ;; <-- note the `-fx` extension
 :request-it        ;; <-- the event id
 (fn                ;; <-- the handler function
   [{db :db} [_ word]]     ;; <-- 1st argument is coeffect, from which we extract db 
   (print "in requet-it: " word)
   (let [req-str (str "http://localhost:9500/api/" word "/add-word")]
    (print req-str)
     ;; we return a map of (side) effects
   {:http-xhrio {:method          :get
                 :uri             req-str
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [:process-response]
                 :on-failure      [:bad-response]}
    :db  (assoc db :loading? true)})))
   
(rf/reg-event-db                   
  :process-response             
  (fn
    [db [_ response]]           ;; destructure the response from the event vector
    (print "in :process-response")
    (print response)
    (-> db
        ;(assoc :loading? false) ;; take away that "Loading ..." UI 
        (assoc :the-word-list (get-in response [:body :word-list])))))  ;; fairly lame processing
 
(rf/reg-event-db
 :bad-response
 (fn
   [db [_ response]]           ;; destructure the response from the event vector
   (print "in :bad-response")
   ;(js/alert response)
   (let [form-resp (clojure.edn/read-string (get-in response [:original-text]))
         fin-resp (get-in form-resp [:word-list])]
     (print form-resp)
     (print fin-resp)
   (-> db
        ;(assoc :loading? false) ;; take away that "Loading ..." UI 
       (assoc :the-word-list fin-resp)
       (assoc :typed-word "")))))  ;; fairly lame processing

;; -- Domino 4 - Query  -------------------------------------------------------


(rf/reg-sub
 :time
 (fn [db _]     ;; db is current app state. 2nd unused param is query vector
   (:time db))) ;; return a query computation over the application state

(rf/reg-sub
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

;; -- Domino 5 - View Functions ----------------------------------------------

#_(defonce typed-word (atom ""))
#_(defonce the-word-list (atom []))


(defn clock
  []
  [:div.example-clock
   {:style {:color @(rf/subscribe [:time-color])}}
   (-> @(rf/subscribe [:time])
       .toTimeString
       (str/split " ")
       first)])

(defn color-input
  []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @(rf/subscribe [:time-color])
            :on-change #(rf/dispatch [:time-color-change (-> % .-target .-value)])}]])  ;; <---

;; spelling bee------------------------

(defn text-entry
  []
  [:div
   [:h1 "Spelling Bee Game"]
   [:input {:type :text :class :text
            :value @(rf/subscribe [:typed-word])
            :on-change #(rf/dispatch [:typed-word-change (str/upper-case (-> % .-target .-value))])}]])

(defn button-entry
  []
  [:div
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth letter-list 1)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth letter-list 2)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth letter-list 3)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
      ;; The middle letter
     [:input {:type :button :class :button3 :value (first letter-list)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth letter-list 4)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]
   [:div
    [:center

     [:input {:type :button :class :button2 :value (nth letter-list 5)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]
     [:input {:type :button :class :button2 :value (nth letter-list 6)
              :on-click #(rf/dispatch [:add-letter (str/upper-case (-> % .-target .-value))])}]]]])

(defn action-buttons
  []
  [:div
   [:center
    [:input {:type :button :class :button4 :value "refresh"
             :on-click #(rf/dispatch [:clear-input ""])}]
    [:input {:type :button :class :button4 :value "backspace"
             :on-click #(rf/dispatch [:rem-letter @(rf/subscribe [:typed-word])])}]
    [:input {:type :button :class :button :value "enter"
             :on-click #(rf/dispatch [:request-it @(rf/subscribe [:typed-word])])
             ;:on-click #(dispatch-event! {:type :fetch-words})
             }]]])

(defn accrued-list
  []
  [:div ;{:class :column}
   [:center
    [:h1 (str "You have found " (count (apply sorted-set @(rf/subscribe [:the-word-list]))) " words")]
    [:ul
     [:li
      (for [item (apply sorted-set @(rf/subscribe [:the-word-list]))]
        ^{:key item} [:li item])]]]])

(defn ui
  []
  [:div
   [:center
    [text-entry]
    [button-entry]
    [action-buttons]
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