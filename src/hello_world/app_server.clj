(ns hello-world.app-server
  (:require
   [compojure.core :refer [defroutes GET]]
   [compojure.route :as route]
   [hiccup.page :refer [html5 include-js include-css]]))


;; AP:
;; Since these concepts only make sense together, I think it's better to
;; wrap them together, e.g.

(def games
  {1 {:letters ["A" "D" "G" "L" "N" "R" "U"]
      :words   ["GLANDULAR" "AGAR" "ALGA" "ALGAL"]}})  ; /etc.

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

;; AP: This is an anti-pattern I see over and over and over again in
;; the industry.  I very much dislike getting a status 200 for what is
;; ostensibly an error; and here you're (I assume) going to interpret
;; later on the empty correct word as meaning "your word was wrong".
;; Do not do things "by convention" if there is a more explicit way.
;; Here you could do one of 3 things, each of which would be better:
;; 1) return 200 with body (pr-str {:invalid-word word))
;; 2) return 204 with empty body (Status No Content, see HTTP codes at https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_errors)
;; 3) return 404, arguably, though I think that's also ambiguous
;; 4) return a game specific code: e.g. 422? Or a new 400 class number you make up,
;;    like 499 "No such word"
;; Then the client can just check status codes.  (I would probably opt for (2) above, personally.
(defn add-word
  ([]
   {:status 200
    :body (pr-str {:correct-word []})
    :headers {"Content-Type" "application/edn"}})
  ([new-word]
   {:status 200
    :body (pr-str {:correct-word new-word})
    :headers {"Content-Type" "application/edn"}}))

;; AP: All of these conversions can be done
;; automatically via the middleware, as we discussed
;; in one of the lectures.

(defn convert-to-int [s]
  (->> (re-seq #"\d" s)
       (apply str)
       (Integer.)))


;; AP: parsing is a transformation, which turns one data form
;; into another (e.g. a compiler parsing source text into intermediate
;; representation, or compojure parsing the HTTP header lines into that map
;; representation)  Here you're not doing this, and you're actually going to
;; return an HTTP response!
;; Perhaps this should really be called  check-word-handler ?
;; Naming is important.  Old computer joke: There are only 2 hard
;; problems in computer science; naming and cache invalidation.
(defn parse-word [word game-no]
  ;; check if the word meets the requirements
  (let [game-int (convert-to-int game-no)
        game-words (correct-words game-int)]
  (if (empty? (filter #(= % word) game-words))
    (add-word)
    (add-word word))))


(defn request-letters
  ;; AP: Why is this called GAME, when you've called it NAME in the handler below?
  ;; I'm assuming this is really the :game-id (i.e. the key in those word maps above?
  [game]
  (let [game-int (convert-to-int game)
        game-letters (letter-list game-int)]
    {:status 200
     :body (pr-str {:letter-list game-letters :game game})
     :headers {"Content-Type" "application/edn"}}))

(defroutes handler
  (GET "/" [] (index-html))
  (GET "/api/:name/:number/check-word" [name number] (parse-word name number)) ;update this to include the game-no.
  (GET "/api//check-word" [] "<h1>Page not found</h1>") ; AP: this makes no sense?  Just omit?
  (GET "/api/:name/letter-list" [name] (request-letters name))
  (route/not-found "<h1>Page not found</h1>"))
