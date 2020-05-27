(ns hello-world.app-server
  (:require
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]
   [hiccup.page :refer [html5 include-js include-css]]))

(def letter-list ; First letter is the letter that must be used in all words.
  {1 ["A" "D" "G" "L" "N" "R" "U"]
   2 ["N" "A" "C" "D" "H" "I" "P"]
   3 ["R""A" "B" "F" "O" "P" "Y"]})

(def correct-words
  {1 ["GLANDULAR" "AGAR" "ALGA" "ALGAL" "ANAL" "ANGULAR" "ANNAL" "ANNUAL" "ANNUL" "ANNULAR" "ARUGULA" "AUGUR" "AUGURAL" "AURA" "AURAL" "DANG" "DARN" "DRAG" "DUAD" "DUAL" "DULLARD" "GAGA" "GALA" "GALL" "GANG" "GANGLAND" "GARLAND" "GLAD" "GLAND" "GNARL" "GRAD" "GRADUAL" "GRAN" "GRAND" "GRANDAD" "GRANDDAD" "GRANULAR" "GUAR" "GUARD" "GULAG" "LAGGARD" "LAND" "LANDAU" "LARD" "LAUD" "LUAU" "LUNA" "LUNAR" "LUNULA" "NAAN" "NADA" "NANA" "RADAR" "RAGA" "RAGLAN" "RAND" "RANG" "RURAL" "ULNA" "ULNAR" "UNGAG"]
   2 ["HANDICAP" "APIAN" "CANCAN" "CANDID" "CANID" "CANNA" "CHAIN" "CHIN" "CHINA" "CINCH" "HAND" "HIND" "INCH" "INDICIA" "NAAN" "NADA" "NAIAD" "NANA" "NIACIN" "PAIN" "PANDA" "PANIC" "PANINI" "PICNIC"]
   3 ["BABYPROOF" "AFAR" "AFFRAY" "AFRO" "ARBOR" "ARRAY" "ARROYO" "BARB" "BARF" "BOAR" "BOOR" "BRAY" "FARRO" "FORA" "FORAY" "FRAY" "PARRY" "POOR" "PRAY" "PROOF" "PROP" "PYRO" "ROAR" "ROOF" "ROPY"]})


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

(defn add-word
  ([]
   {:status 200
    :body (pr-str {:correct-word []})
    :headers {"Content-Type" "application/edn"}})
  ([new-word]
   {:status 200
    :body (pr-str {:correct-word new-word})
    :headers {"Content-Type" "application/edn"}}))

(defn convert-to-int [s]
  (->> (re-seq #"\d" s)
       (apply str)
       (Integer.)))

(defn parse-word [word game-no]
  ;; check if the word meets the requirements
  (let [game-int (convert-to-int game-no)
        game-words (correct-words game-int)]
  (if (empty? (filter #(= % word) game-words))
    (add-word)
    (add-word word))))


(defn request-letters
  [game]
  (let [game-int (convert-to-int game)
        game-letters (letter-list game-int)]
    {:status 200
     :body (pr-str {:letter-list game-letters :game game})
     :headers {"Content-Type" "application/edn"}}))

(defroutes handler
  (GET "/" [] (index-html))
  (GET "/api/:name/:number/check-word" [name number] (parse-word name number)) ;update this to include the game-no.
  (GET "/api//check-word" [] "<h1>Page not found</h1>")
  (GET "/api/:name/letter-list" [name] (request-letters name))
  (route/not-found "<h1>Page not found</h1>"))
