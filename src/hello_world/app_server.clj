(ns hello-world.app-server
  (:require
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]
   [hiccup.page :refer [html5 include-js include-css]]))

(defonce word-list (atom []))
(def correct-words
  ["GLANDULAR"
   "AGAR"
   "ALGA"
   "ALGAL"
   "ANAL"
   "ANGULAR"
   "ANNAL"
   "ANNUAL"
   "ANNUL"
   "ANNULAR"
   "ARUGULA"
   "AUGUR"
   "AUGURAL"
   "AURA"
   "AURAL"
   "DANG"
   "DARN"
   "DRAG"
   "DUAD"
   "DUAL"
   "DULLARD"
   "GAGA"
   "GALA"
   "GALL"
   "GANG"
   "GANGLAND"
   "GARLAND"
   "GLAD"
   "GLAND"
   "GNARL"
   "GRAD"
   "GRADUAL"
   "GRAN"
   "GRAND"
   "GRANDAD"
   "GRANDDAD"
   "GRANULAR"
   "GUAR"
   "GUARD"
   "GULAG"
   "LAGGARD"
   "LAND"
   "LANDAU"
   "LARD"
   "LAUD"
   "LUAU"
   "LUNA"
   "LUNAR"
   "LUNULA"
   "NAAN"
   "NADA"
   "NANA"
   "RADAR"
   "RAGA"
   "RAGLAN"
   "RAND"
   "RANG"
   "RURAL"
   "ULNA"
   "ULNAR"
   "UNGAG"])

(defn index-html []
  (html5
   [:head
    [:meta {:charset "UTF-8"}]
    [:meta {:name "viewport"
            :content "width=device-width, initial-scale=1"}]
    (include-css "/css/style.css")]
   [:body
    [:h2 "Text being served by the app-server Ring handler."]
    [:div {:id "app"}]
    (include-js "/cljs-out/dev-main.js")]))


(defn random-api []
  {:status 200
   :body (pr-str {:lucky-number (rand-int 1000)})
   :headers {"Content-Type" "application/edn"}})

(defn add-word
  ([]
   {:status 200
    :body (pr-str {:word-list @word-list})
    :headers {"Content-Type" "application/edn"}})
  ([new-word]
   {:status 200
    :body (pr-str {:word-list (swap! word-list conj new-word)})
    :headers {"Content-Type" "application/edn"}}))

(defn parse-word [word]
  ;; check if the word meets the requirements
  (println word)
  (if (empty? (filter #(= % word) correct-words))
    (add-word)
    (add-word word)))

(defroutes handler
  (GET "/" [] (index-html))
  (GET "/api/random" [] (random-api))
  (GET "/api/:name/add-word" [name] (parse-word name))
  (GET "/api//add-word" [] "<h1>Page not found</h1>")
  (route/not-found "<h1>Page not found</h1>"))
