// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
goog.require('clojure.edn');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.letter_list = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","D","G","L","N","R","U"], null);
hello_world.core.word_score = (function hello_world$core$word_score(word){
var count_word = cljs.core.count.call(null,word);
if(cljs.core._EQ_.call(null,count_word,(4))){
return (4);
} else {
if(cljs.core._EQ_.call(null,(7),count_word)){
return (14);
} else {
return count_word;
}
}
});
hello_world.core.calc_points = (function hello_world$core$calc_points(word_list){
return cljs.core.map.call(null,hello_world.core.word_score,word_list);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88"], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__19511){
var vec__19512 = p__19511;
var _ = cljs.core.nth.call(null,vec__19512,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__19512,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__19515){
var vec__19516 = p__19515;
var _ = cljs.core.nth.call(null,vec__19516,(0),null);
var new_time = cljs.core.nth.call(null,vec__19516,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),(function (db,p__19519){
var vec__19520 = p__19519;
var _ = cljs.core.nth.call(null,vec__19520,(0),null);
var new_word = cljs.core.nth.call(null,vec__19520,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-letter","add-letter",628821393),(function (db,p__19523){
var vec__19524 = p__19523;
var _ = cljs.core.nth.call(null,vec__19524,(0),null);
var new_letter = cljs.core.nth.call(null,vec__19524,(1),null);
var curr_word = new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_letter)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),(function (db,p__19527){
var vec__19528 = p__19527;
var _ = cljs.core.nth.call(null,vec__19528,(0),null);
var new_letter = cljs.core.nth.call(null,vec__19528,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_letter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),(function (db,p__19531){
var vec__19532 = p__19531;
var _ = cljs.core.nth.call(null,vec__19532,(0),null);
var new_letter = cljs.core.nth.call(null,vec__19532,(1),null);
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,new_letter) - (1)),new_letter));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),popped_word);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-it","request-it",-900096096),(function (p__19535,p__19536){
var map__19537 = p__19535;
var map__19537__$1 = (((((!((map__19537 == null))))?(((((map__19537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19537):map__19537);
var db = cljs.core.get.call(null,map__19537__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__19538 = p__19536;
var _ = cljs.core.nth.call(null,vec__19538,(0),null);
var word = cljs.core.nth.call(null,vec__19538,(1),null);
if(cljs.core.empty_QMARK_.call(null,word)){
return alert("no word supplied");
} else {
var req_str = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/add-word"].join('');
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),req_str,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"process-response","process-response",-26308683)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950)], null)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-response","process-response",-26308683),(function (db,p__19542){
var vec__19543 = p__19542;
var _ = cljs.core.nth.call(null,vec__19543,(0),null);
var response = cljs.core.nth.call(null,vec__19543,(1),null);
cljs.core.print.call(null,"in :process-response");

cljs.core.print.call(null,response);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__19546){
var vec__19547 = p__19546;
var _ = cljs.core.nth.call(null,vec__19547,(0),null);
var response = cljs.core.nth.call(null,vec__19547,(1),null);
cljs.core.print.call(null,"in :bad-response");

var form_resp = clojure.edn.read_string.call(null,cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"original-text","original-text",744448452)], null)));
var fin_resp = cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.get_in.call(null,form_resp,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"word-list","word-list",-230183462)], null)));
var score = cljs.core.reduce.call(null,cljs.core._PLUS_,hello_world.core.calc_points.call(null,fin_resp));
cljs.core.print.call(null,form_resp);

cljs.core.print.call(null,fin_resp);

cljs.core.print.call(null,hello_world.core.calc_points.call(null,fin_resp));

cljs.core.print.call(null,cljs.core.reduce.call(null,cljs.core._PLUS_,hello_world.core.calc_points.call(null,fin_resp)));

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),fin_resp),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),""),new cljs.core.Keyword(null,"point-score","point-score",-397384391),score);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),(function (db,_){
return new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),(function (db,_){
return new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"point-score","point-score",-397384391),(function (db,_){
return new cljs.core.Keyword(null,"point-score","point-score",-397384391).cljs$core$IFn$_invoke$arity$1(db);
}));
hello_world.core.text_entry = (function hello_world$core$text_entry(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),"Spelling Bee Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19550_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),clojure.string.upper_case.call(null,p1__19550_SHARP_.target.value)], null));
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__19551_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__19551_SHARP_.charCode)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
} else {
return null;
}
})], null)], null)], null)], null);
});
hello_world.core.button_entry = (function hello_world$core$button_entry(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19552_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19552_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19553_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19553_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19554_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19554_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,hello_world.core.letter_list),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19555_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19555_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19556_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19556_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19557_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19557_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__19558_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__19558_SHARP_.target.value)], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.action_buttons = (function hello_world$core$action_buttons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),""], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-it","request-it",-900096096),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null)], null)], null);
});
hello_world.core.accrued_list = (function hello_world$core$accrued_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null))))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#the-text","h2#the-text",398723717),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))))," points!"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#list-text","li#list-text",1156845976),(function (){var iter__4523__auto__ = (function hello_world$core$accrued_list_$_iter__19559(s__19560){
return (new cljs.core.LazySeq(null,(function (){
var s__19560__$1 = s__19560;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__19560__$1);
if(temp__5457__auto__){
var s__19560__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19560__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__19560__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__19562 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__19561 = (0);
while(true){
if((i__19561 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__19561);
cljs.core.chunk_append.call(null,b__19562,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__19563 = (i__19561 + (1));
i__19561 = G__19563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19562),hello_world$core$accrued_list_$_iter__19559.call(null,cljs.core.chunk_rest.call(null,s__19560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19562),null);
}
} else {
var item = cljs.core.first.call(null,s__19560__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$accrued_list_$_iter__19559.call(null,cljs.core.rest.call(null,s__19560__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null)))));
})()], null)], null)], null)], null);
});
hello_world.core.slider = (function hello_world$core$slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"min","min",444991522),"1",new cljs.core.Keyword(null,"max","max",61366548),"100",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),"slider"], null)], null)], null)], null);
});
hello_world.core.ui = (function hello_world$core$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnl","columnl",-593925269)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.text_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.button_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.action_buttons], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnr","columnr",-14597535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.accrued_list], null)], null)], null);
});
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return document.getElementById("app");
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.ui], null),el);
});
hello_world.core.mount_app_element = (function hello_world$core$mount_app_element(){
var temp__5457__auto__ = hello_world.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
return hello_world.core.mount.call(null,el);
} else {
return null;
}
});
hello_world.core.mount_app_element.call(null);
hello_world.core.on_reload = (function hello_world$core$on_reload(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

cljs.core.println.call(null,"reloading...");

return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
