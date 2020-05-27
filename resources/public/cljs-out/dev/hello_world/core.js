// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('clojure.string');
goog.require('re_frame.core');
goog.require('reagent.dom');
goog.require('clojure.edn');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.event_channel !== 'undefined')){
} else {
hello_world.core.event_channel = cljs.core.async.chan.call(null,(10));
}
hello_world.core.send_event_BANG_ = (function hello_world$core$send_event_BANG_(e){
var c__17513__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17513__auto__){
return (function (){
var f__17514__auto__ = (function (){var switch__17490__auto__ = ((function (c__17513__auto__){
return (function (state_21270){
var state_val_21271 = (state_21270[(1)]);
if((state_val_21271 === (1))){
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21270__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_21271 === (2))){
var inst_21268 = (state_21270[(2)]);
var state_21270__$1 = state_21270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21270__$1,inst_21268);
} else {
return null;
}
}
});})(c__17513__auto__))
;
return ((function (switch__17490__auto__,c__17513__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__17491__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__17491__auto____0 = (function (){
var statearr_21272 = [null,null,null,null,null,null,null];
(statearr_21272[(0)] = hello_world$core$send_event_BANG__$_state_machine__17491__auto__);

(statearr_21272[(1)] = (1));

return statearr_21272;
});
var hello_world$core$send_event_BANG__$_state_machine__17491__auto____1 = (function (state_21270){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_21270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e21273){var ex__17494__auto__ = e21273;
var statearr_21274_21277 = state_21270;
(statearr_21274_21277[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_21270[(4)]))){
var statearr_21275_21278 = state_21270;
(statearr_21275_21278[(1)] = cljs.core.first.call(null,(state_21270[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21279 = state_21270;
state_21270 = G__21279;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__17491__auto__ = function(state_21270){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__17491__auto____1.call(this,state_21270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__17491__auto____0;
hello_world$core$send_event_BANG__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__17491__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto__))
})();
var state__17515__auto__ = (function (){var statearr_21276 = f__17514__auto__.call(null);
(statearr_21276[(6)] = c__17513__auto__);

return statearr_21276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto__))
);

return c__17513__auto__;
});
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
/**
 * Hard coded to max of 3 games for now. I will update this to querry server for number of games.
 */
hello_world.core.change_game = (function hello_world$core$change_game(game_no){
if(cljs.core._EQ_.call(null,(3),game_no)){
return (1);
} else {
return (game_no + (1));
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"",new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"point-score","point-score",-397384391),(0),new cljs.core.Keyword(null,"game-no","game-no",-1002959240),(1)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),(function (db,p__21280){
var vec__21281 = p__21280;
var _ = cljs.core.nth.call(null,vec__21281,(0),null);
var new_word = cljs.core.nth.call(null,vec__21281,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-letter","add-letter",628821393),(function (db,p__21284){
var vec__21285 = p__21284;
var _ = cljs.core.nth.call(null,vec__21285,(0),null);
var new_letter = cljs.core.nth.call(null,vec__21285,(1),null);
var curr_word = new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_letter)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),(function (db,p__21288){
var vec__21289 = p__21288;
var _ = cljs.core.nth.call(null,vec__21289,(0),null);
var new_letter = cljs.core.nth.call(null,vec__21289,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_letter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),(function (db,p__21292){
var vec__21293 = p__21292;
var _ = cljs.core.nth.call(null,vec__21293,(0),null);
var new_letter = cljs.core.nth.call(null,vec__21293,(1),null);
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,new_letter) - (1)),new_letter));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),popped_word);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"check-word","check-word",676184091),(function (p__21296,p__21297){
var map__21298 = p__21296;
var map__21298__$1 = (((((!((map__21298 == null))))?(((((map__21298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21298):map__21298);
var db = cljs.core.get.call(null,map__21298__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21299 = p__21297;
var _ = cljs.core.nth.call(null,vec__21299,(0),null);
var word = cljs.core.nth.call(null,vec__21299,(1),null);
var c__17513__auto___21334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word){
return (function (){
var f__17514__auto__ = (function (){var switch__17490__auto__ = ((function (c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word){
return (function (state_21323){
var state_val_21324 = (state_21323[(1)]);
if((state_val_21324 === (1))){
var inst_21303 = cljs.core.empty_QMARK_.call(null,word);
var state_21323__$1 = state_21323;
if(inst_21303){
var statearr_21325_21335 = state_21323__$1;
(statearr_21325_21335[(1)] = (2));

} else {
var statearr_21326_21336 = state_21323__$1;
(statearr_21326_21336[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (2))){
var inst_21305 = alert("No word supplied! Try again...");
var state_21323__$1 = state_21323;
var statearr_21327_21337 = state_21323__$1;
(statearr_21327_21337[(2)] = inst_21305);

(statearr_21327_21337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21324 === (3))){
var inst_21307 = db.call(null,new cljs.core.Keyword(null,"game-no","game-no",-1002959240));
var inst_21308 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21307),"/check-word"].join('');
var inst_21309 = cljs_http.client.get.call(null,inst_21308);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21323__$1,(5),inst_21309);
} else {
if((state_val_21324 === (4))){
var inst_21321 = (state_21323[(2)]);
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21323__$1,inst_21321);
} else {
if((state_val_21324 === (5))){
var inst_21311 = (state_21323[(2)]);
var inst_21312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21313 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21314 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"correct-word","correct-word",-1698341709)];
var inst_21315 = (new cljs.core.PersistentVector(null,2,(5),inst_21313,inst_21314,null));
var inst_21316 = cljs.core.get_in.call(null,inst_21311,inst_21315);
var inst_21317 = [new cljs.core.Keyword(null,"process-word","process-word",1607432301),inst_21316];
var inst_21318 = (new cljs.core.PersistentVector(null,2,(5),inst_21312,inst_21317,null));
var inst_21319 = re_frame.core.dispatch.call(null,inst_21318);
var state_21323__$1 = state_21323;
var statearr_21328_21338 = state_21323__$1;
(statearr_21328_21338[(2)] = inst_21319);

(statearr_21328_21338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word))
;
return ((function (switch__17490__auto__,c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word){
return (function() {
var hello_world$core$state_machine__17491__auto__ = null;
var hello_world$core$state_machine__17491__auto____0 = (function (){
var statearr_21329 = [null,null,null,null,null,null,null];
(statearr_21329[(0)] = hello_world$core$state_machine__17491__auto__);

(statearr_21329[(1)] = (1));

return statearr_21329;
});
var hello_world$core$state_machine__17491__auto____1 = (function (state_21323){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_21323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e21330){var ex__17494__auto__ = e21330;
var statearr_21331_21339 = state_21323;
(statearr_21331_21339[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_21323[(4)]))){
var statearr_21332_21340 = state_21323;
(statearr_21332_21340[(1)] = cljs.core.first.call(null,(state_21323[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21341 = state_21323;
state_21323 = G__21341;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$state_machine__17491__auto__ = function(state_21323){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$state_machine__17491__auto____1.call(this,state_21323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__17491__auto____0;
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__17491__auto____1;
return hello_world$core$state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word))
})();
var state__17515__auto__ = (function (){var statearr_21333 = f__17514__auto__.call(null);
(statearr_21333[(6)] = c__17513__auto___21334);

return statearr_21333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto___21334,map__21298,map__21298__$1,db,vec__21299,_,word))
);


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-word","process-word",1607432301),(function (db,p__21342){
var vec__21343 = p__21342;
var _ = cljs.core.nth.call(null,vec__21343,(0),null);
var word = cljs.core.nth.call(null,vec__21343,(1),null);
if(cljs.core.empty_QMARK_.call(null,word)){
alert("Sorry, incorrect answer!");

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"");
} else {
var curr_word_list = new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255).cljs$core$IFn$_invoke$arity$1(db);
var new_list = cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.conj.call(null,curr_word_list,word));
var score = cljs.core.reduce.call(null,cljs.core._PLUS_,hello_world.core.calc_points.call(null,new_list));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),new_list),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),""),new cljs.core.Keyword(null,"point-score","point-score",-397384391),score);
}
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-letters","request-letters",-567267497),(function (p__21346,p__21347){
var map__21348 = p__21346;
var map__21348__$1 = (((((!((map__21348 == null))))?(((((map__21348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21348):map__21348);
var db = cljs.core.get.call(null,map__21348__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__21349 = p__21347;
var _ = cljs.core.nth.call(null,vec__21349,(0),null);
var game_no = cljs.core.nth.call(null,vec__21349,(1),null);
var c__17513__auto___21376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no){
return (function (){
var f__17514__auto__ = (function (){var switch__17490__auto__ = ((function (c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no){
return (function (state_21369){
var state_val_21370 = (state_21369[(1)]);
if((state_val_21370 === (1))){
var inst_21353 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_no),"/letter-list"].join('');
var inst_21354 = cljs_http.client.get.call(null,inst_21353);
var state_21369__$1 = state_21369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21369__$1,(2),inst_21354);
} else {
if((state_val_21370 === (2))){
var inst_21356 = (state_21369[(2)]);
var inst_21357 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21358 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"letter-list","letter-list",-1430475077)];
var inst_21359 = (new cljs.core.PersistentVector(null,2,(5),inst_21357,inst_21358,null));
var inst_21360 = cljs.core.get_in.call(null,inst_21356,inst_21359);
var inst_21361 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21363 = [inst_21360,game_no];
var inst_21364 = (new cljs.core.PersistentVector(null,2,(5),inst_21362,inst_21363,null));
var inst_21365 = [new cljs.core.Keyword(null,"process-letters","process-letters",1403723328),inst_21364];
var inst_21366 = (new cljs.core.PersistentVector(null,2,(5),inst_21361,inst_21365,null));
var inst_21367 = re_frame.core.dispatch.call(null,inst_21366);
var state_21369__$1 = state_21369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21369__$1,inst_21367);
} else {
return null;
}
}
});})(c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no))
;
return ((function (switch__17490__auto__,c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no){
return (function() {
var hello_world$core$state_machine__17491__auto__ = null;
var hello_world$core$state_machine__17491__auto____0 = (function (){
var statearr_21371 = [null,null,null,null,null,null,null];
(statearr_21371[(0)] = hello_world$core$state_machine__17491__auto__);

(statearr_21371[(1)] = (1));

return statearr_21371;
});
var hello_world$core$state_machine__17491__auto____1 = (function (state_21369){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_21369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e21372){var ex__17494__auto__ = e21372;
var statearr_21373_21377 = state_21369;
(statearr_21373_21377[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_21369[(4)]))){
var statearr_21374_21378 = state_21369;
(statearr_21374_21378[(1)] = cljs.core.first.call(null,(state_21369[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21379 = state_21369;
state_21369 = G__21379;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$state_machine__17491__auto__ = function(state_21369){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$state_machine__17491__auto____1.call(this,state_21369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__17491__auto____0;
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__17491__auto____1;
return hello_world$core$state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no))
})();
var state__17515__auto__ = (function (){var statearr_21375 = f__17514__auto__.call(null);
(statearr_21375[(6)] = c__17513__auto___21376);

return statearr_21375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto___21376,map__21348,map__21348__$1,db,vec__21349,_,game_no))
);


return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"game-no","game-no",-1002959240),game_no),new cljs.core.Keyword(null,"point-score","point-score",-397384391),(10));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-letters","process-letters",1403723328),(function (db,p__21380){
var vec__21381 = p__21380;
var _ = cljs.core.nth.call(null,vec__21381,(0),null);
var vec__21384 = cljs.core.nth.call(null,vec__21381,(1),null);
var letters = cljs.core.nth.call(null,vec__21384,(0),null);
var game = cljs.core.nth.call(null,vec__21384,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),letters),new cljs.core.Keyword(null,"game-no","game-no",-1002959240),game),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),""),new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"point-score","point-score",-397384391),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"shuffle-buttons","shuffle-buttons",1463659004),(function (db,p__21387){
var vec__21388 = p__21387;
var _ = cljs.core.nth.call(null,vec__21388,(0),null);
var letter = cljs.core.nth.call(null,vec__21388,(1),null);
var mid_letter = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,letter)], null);
var bod = cljs.core.shuffle.call(null,cljs.core.rest.call(null,letter));
var output = cljs.core.into.call(null,mid_letter,bod);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),output);
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),(function (db,_){
return new cljs.core.Keyword(null,"button-letters","button-letters",457120602).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"game-no","game-no",-1002959240),(function (db,_){
return new cljs.core.Keyword(null,"game-no","game-no",-1002959240).cljs$core$IFn$_invoke$arity$1(db);
}));
hello_world.core.text_entry = (function hello_world$core$text_entry(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),"Spelling Bee Challenge"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#inp-text","input#inp-text",-1030934786),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21391_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),clojure.string.upper_case.call(null,p1__21391_SHARP_.target.value)], null));
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__21392_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__21392_SHARP_.charCode)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-word","check-word",676184091),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button6","button6",1979149860),new cljs.core.Keyword(null,"value","value",305978217),"Refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),""], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.button_entry = (function hello_world$core$button_entry(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21393_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21393_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21394_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21394_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21395_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21395_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21396_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21396_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21397_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21397_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21398_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21398_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__21399_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__21399_SHARP_.target.value)], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.action_buttons = (function hello_world$core$action_buttons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"Backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button6","button6",1979149860),new cljs.core.Keyword(null,"value","value",305978217),"# Shuffle Letters",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shuffle-buttons","shuffle-buttons",1463659004),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null)))], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-word","check-word",676184091),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
})], null)], null)], null)], null);
});
hello_world.core.accrued_list = (function hello_world$core$accrued_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null))))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#the-text","h2#the-text",398723717),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))))," points!"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#list-text","li#list-text",1156845976),(function (){var iter__4523__auto__ = (function hello_world$core$accrued_list_$_iter__21400(s__21401){
return (new cljs.core.LazySeq(null,(function (){
var s__21401__$1 = s__21401;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__21401__$1);
if(temp__5457__auto__){
var s__21401__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21401__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__21401__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__21403 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__21402 = (0);
while(true){
if((i__21402 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__21402);
cljs.core.chunk_append.call(null,b__21403,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__21404 = (i__21402 + (1));
i__21402 = G__21404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21403),hello_world$core$accrued_list_$_iter__21400.call(null,cljs.core.chunk_rest.call(null,s__21401__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21403),null);
}
} else {
var item = cljs.core.first.call(null,s__21401__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$accrued_list_$_iter__21400.call(null,cljs.core.rest.call(null,s__21401__$2)));
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
hello_world.core.game_selection = (function hello_world$core$game_selection(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"column","column",2078222095)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button5","button5",-964896221),new cljs.core.Keyword(null,"value","value",305978217),"New Game",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-letters","request-letters",-567267497),hello_world.core.change_game.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-no","game-no",-1002959240)], null))))], null));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"column","column",2078222095)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),["Game No:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-no","game-no",-1002959240)], null))))].join('')], null)], null)], null)], null);
});
hello_world.core.ui = (function hello_world$core$ui(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnl","columnl",-593925269)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.text_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.button_entry], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.action_buttons], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"columnr","columnr",-14597535)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.game_selection], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.accrued_list], null)], null)], null);
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
hello_world.core.on_reload = (function hello_world$core$on_reload(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

cljs.core.println.call(null,"reloading...");

return hello_world.core.mount_app_element.call(null);
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.run !== 'undefined')){
} else {
hello_world.core.run = (function (){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-letters","request-letters",-567267497),(1)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return hello_world.core.mount_app_element.call(null);
})()
;
}

//# sourceMappingURL=core.js.map
