(ns ^:figwheel-hooks hello-world.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]
   [cljs.core.async :refer [<! >! chan timeout]]
   [cljs-http.client :as http]
   [clojure.string :as str]))

;; This command will cause our printlns to also show up in the console's log,
;; which can sometimes be useful.
(enable-console-print!)

;;;;  AJAX, or asynchronous javascript XmlHttpRequest
;;;;  or making our SPA's "live".

;; First we need an endpoint: see app_server.clj

;; Now, a manual example
(def resp (atom nil))
#_
(go
  (let [r (<! (http/get "http://localhost:9500/api/random"))]
    (reset! resp r)))


#_
resp
(declare dispatch-event!)

;; Wrap this in a nice asynchronous function
(defn fetch-remote-data []
  (go
    (let [resp (<! (http/get "http://localhost:9500/api/random"))]
      ;; Ignore error handling for the moment
      (dispatch-event! {:type :reset :number (get-in resp [:body :lucky-number])}))))

(defonce typed-word (reagent/atom ""))
(defonce the-word-list (reagent/atom []))

(defn fetch-remote-data2 []
  (go
    (if (empty? @typed-word)
      (js/alert "no word supplied")
      (let [req-str (str "http://localhost:9500/api/" @typed-word "/add-word")
            resp (<! (http/get req-str))]
        (println @typed-word)
        
      ;; Ignore error handling for the moment
        (dispatch-event! {:type :reset-words :words (get-in resp [:body :word-list])})))))


#_
(fetch-remote-data)





;; Let us declare our state globally:
(defonce the-counter (reagent/atom 0))

;; Now let us create a communication channel which our
;; UI can sent event to.

(defonce event-channel (chan 10))

(defn send-event! [e]
  (go (>! event-channel e)))

;; And imagine there is a global event handler
;; which knows how to route events around.
(declare dispatch-event!)

(defonce global-handler
  (go
    (while true
      (let [e (<! event-channel)]
        (dispatch-event! e)))))


;; Now let's write the dispatcher:
(defn dispatch-event! [e]
  (condp = (:type e)
    :fetch       (fetch-remote-data)
    :fetch-words (fetch-remote-data2)
    :reset       (reset! the-counter (:number e))
    :reset-words (do
                   (reset! the-word-list (:words e))
                   (reset! typed-word ""))
    :print-word  (println @typed-word)
    (println "Don't know how to handle event: " e)))


;; helper function

(defn add-letter
  [letter]
  (reset! typed-word (str @typed-word letter)))

(defn rem-letter
  []
  (let [popped-word  (reduce str (take (- (count @typed-word) 1) @typed-word))]
    (reset! typed-word popped-word)))

(defn clear-input
  []
  (reset! typed-word ""))

(def letter-list
  ["A"
    "D"
    "G"
    "L"
    "N"
    "R"
    "U"])

;; Now we can add an event handler with SEMANTIC meaning to our component:
(defn simple-button []
  [:div
   [:center
    [:h1 "Spelling Bee"]
    [:input {:type :text :class :text :value @typed-word
             :on-change #(reset! typed-word (str/upper-case (-> % .-target .-value)))
             ;:on-key-down #(dispatch-event! {:type :fetch})
             }]
    ;[:div#the-text @the-word-list]
    ]
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth letter-list 1)
              :on-click #(add-letter (-> % .-target .-value))}]
     [:input {:type :button :class :button2 :value (nth letter-list 2)
              :on-click #(add-letter (-> % .-target .-value))}]]]
   [:div
    [:center
     [:input {:type :button :class :button2 :value (nth letter-list 3)
              :on-click #(add-letter (-> % .-target .-value))}]
      ;; The middle letter
     [:input {:type :button :class :button3 :value (first letter-list)
              :on-click #(add-letter (-> % .-target .-value))}]
     [:input {:type :button :class :button2 :value (nth letter-list 4)
              :on-click #(add-letter (-> % .-target .-value))}]]]
   [:div
    [:center

     [:input {:type :button :class :button2 :value (nth letter-list 5)
              :on-click #(add-letter (-> % .-target .-value))}]
     [:input {:type :button :class :button2 :value (nth letter-list 6)
              :on-click #(add-letter (-> % .-target .-value))}]]]
   [:div
    [:center
     [:input {:type :button :class :button4 :value "refresh"
             ;:on-click #(dispatch-event! {:type :fetch})
              :on-click #(clear-input)}]
     [:input {:type :button :class :button4 :value "backspace"
             ;:on-click #(dispatch-event! {:type :fetch})
              :on-click #(rem-letter)}]
     [:input {:type :button :class :button :value "enter"
             ;:on-click #(dispatch-event! {:type :fetch})
              :on-click #(dispatch-event! {:type :fetch-words})}]]]
   [:div ;{:class :column}
    [:center
     [:h1 (str "You have found " (count (apply sorted-set @the-word-list)) " words")]
     [:ul
      [:li
       (for [item (apply sorted-set @the-word-list)]
         ^{:key item} [:li item])]]]]])


;; This is the basic idea behind RE-FRAME, which we'll see next time.
;;





;;;; Mounting boilerplate below.
(defn mount [el]
  (reagent/render-component [simple-button] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
