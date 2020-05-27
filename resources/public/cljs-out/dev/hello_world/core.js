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
return (function (state_18420){
var state_val_18421 = (state_18420[(1)]);
if((state_val_18421 === (1))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18420__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_18421 === (2))){
var inst_18418 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18420__$1,inst_18418);
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
var statearr_18422 = [null,null,null,null,null,null,null];
(statearr_18422[(0)] = hello_world$core$send_event_BANG__$_state_machine__17491__auto__);

(statearr_18422[(1)] = (1));

return statearr_18422;
});
var hello_world$core$send_event_BANG__$_state_machine__17491__auto____1 = (function (state_18420){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_18420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18423){var ex__17494__auto__ = e18423;
var statearr_18424_18427 = state_18420;
(statearr_18424_18427[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_18420[(4)]))){
var statearr_18425_18428 = state_18420;
(statearr_18425_18428[(1)] = cljs.core.first.call(null,(state_18420[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18429 = state_18420;
state_18420 = G__18429;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__17491__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__17491__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__17491__auto____0;
hello_world$core$send_event_BANG__$_state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__17491__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto__))
})();
var state__17515__auto__ = (function (){var statearr_18426 = f__17514__auto__.call(null);
(statearr_18426[(6)] = c__17513__auto__);

return statearr_18426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto__))
);

return c__17513__auto__;
});
hello_world.core.calc_word_score = (function hello_world$core$calc_word_score(word){
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
return cljs.core.map.call(null,hello_world.core.calc_word_score,word_list);
});
/**
 * Hard coded to max of 3 games for now. I will update this to querry server for number of games.
 */
hello_world.core.inc_game_no = (function hello_world$core$inc_game_no(game_no){
if(cljs.core._EQ_.call(null,(3),game_no)){
return (1);
} else {
return (game_no + (1));
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),"",new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"point-score","point-score",-397384391),(0),new cljs.core.Keyword(null,"game-no","game-no",-1002959240),(1)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),(function (db,p__18430){
var vec__18431 = p__18430;
var _ = cljs.core.nth.call(null,vec__18431,(0),null);
var new_word = cljs.core.nth.call(null,vec__18431,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-letter","add-letter",628821393),(function (db,p__18434){
var vec__18435 = p__18434;
var _ = cljs.core.nth.call(null,vec__18435,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18435,(1),null);
var curr_word = new cljs.core.Keyword(null,"typed-word","typed-word",1825014077).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(curr_word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_letter)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),(function (db,p__18438){
var vec__18439 = p__18438;
var _ = cljs.core.nth.call(null,vec__18439,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18439,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),new_letter);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"rem-letter","rem-letter",-552911757),(function (db,p__18442){
var vec__18443 = p__18442;
var _ = cljs.core.nth.call(null,vec__18443,(0),null);
var new_letter = cljs.core.nth.call(null,vec__18443,(1),null);
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,new_letter) - (1)),new_letter));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),popped_word);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"check-word","check-word",676184091),(function (p__18446,p__18447){
var map__18448 = p__18446;
var map__18448__$1 = (((((!((map__18448 == null))))?(((((map__18448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18448):map__18448);
var db = cljs.core.get.call(null,map__18448__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18449 = p__18447;
var _ = cljs.core.nth.call(null,vec__18449,(0),null);
var word = cljs.core.nth.call(null,vec__18449,(1),null);
var c__17513__auto___18484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word){
return (function (){
var f__17514__auto__ = (function (){var switch__17490__auto__ = ((function (c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word){
return (function (state_18473){
var state_val_18474 = (state_18473[(1)]);
if((state_val_18474 === (1))){
var inst_18453 = cljs.core.empty_QMARK_.call(null,word);
var state_18473__$1 = state_18473;
if(inst_18453){
var statearr_18475_18485 = state_18473__$1;
(statearr_18475_18485[(1)] = (2));

} else {
var statearr_18476_18486 = state_18473__$1;
(statearr_18476_18486[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18474 === (2))){
var inst_18455 = alert("No word supplied! Try again...");
var state_18473__$1 = state_18473;
var statearr_18477_18487 = state_18473__$1;
(statearr_18477_18487[(2)] = inst_18455);

(statearr_18477_18487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18474 === (3))){
var inst_18457 = db.call(null,new cljs.core.Keyword(null,"game-no","game-no",-1002959240));
var inst_18458 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18457),"/check-word"].join('');
var inst_18459 = cljs_http.client.get.call(null,inst_18458);
var state_18473__$1 = state_18473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18473__$1,(5),inst_18459);
} else {
if((state_val_18474 === (4))){
var inst_18471 = (state_18473[(2)]);
var state_18473__$1 = state_18473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18473__$1,inst_18471);
} else {
if((state_val_18474 === (5))){
var inst_18461 = (state_18473[(2)]);
var inst_18462 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18464 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"correct-word","correct-word",-1698341709)];
var inst_18465 = (new cljs.core.PersistentVector(null,2,(5),inst_18463,inst_18464,null));
var inst_18466 = cljs.core.get_in.call(null,inst_18461,inst_18465);
var inst_18467 = [new cljs.core.Keyword(null,"process-word","process-word",1607432301),inst_18466];
var inst_18468 = (new cljs.core.PersistentVector(null,2,(5),inst_18462,inst_18467,null));
var inst_18469 = re_frame.core.dispatch.call(null,inst_18468);
var state_18473__$1 = state_18473;
var statearr_18478_18488 = state_18473__$1;
(statearr_18478_18488[(2)] = inst_18469);

(statearr_18478_18488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word))
;
return ((function (switch__17490__auto__,c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word){
return (function() {
var hello_world$core$state_machine__17491__auto__ = null;
var hello_world$core$state_machine__17491__auto____0 = (function (){
var statearr_18479 = [null,null,null,null,null,null,null];
(statearr_18479[(0)] = hello_world$core$state_machine__17491__auto__);

(statearr_18479[(1)] = (1));

return statearr_18479;
});
var hello_world$core$state_machine__17491__auto____1 = (function (state_18473){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_18473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18480){var ex__17494__auto__ = e18480;
var statearr_18481_18489 = state_18473;
(statearr_18481_18489[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_18473[(4)]))){
var statearr_18482_18490 = state_18473;
(statearr_18482_18490[(1)] = cljs.core.first.call(null,(state_18473[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18491 = state_18473;
state_18473 = G__18491;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$state_machine__17491__auto__ = function(state_18473){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$state_machine__17491__auto____1.call(this,state_18473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__17491__auto____0;
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__17491__auto____1;
return hello_world$core$state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word))
})();
var state__17515__auto__ = (function (){var statearr_18483 = f__17514__auto__.call(null);
(statearr_18483[(6)] = c__17513__auto___18484);

return statearr_18483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto___18484,map__18448,map__18448__$1,db,vec__18449,_,word))
);


return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),word);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-word","process-word",1607432301),(function (db,p__18492){
var vec__18493 = p__18492;
var _ = cljs.core.nth.call(null,vec__18493,(0),null);
var word = cljs.core.nth.call(null,vec__18493,(1),null);
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
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"request-letters","request-letters",-567267497),(function (p__18496,p__18497){
var map__18498 = p__18496;
var map__18498__$1 = (((((!((map__18498 == null))))?(((((map__18498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18498):map__18498);
var db = cljs.core.get.call(null,map__18498__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__18499 = p__18497;
var _ = cljs.core.nth.call(null,vec__18499,(0),null);
var game_no = cljs.core.nth.call(null,vec__18499,(1),null);
var c__17513__auto___18526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no){
return (function (){
var f__17514__auto__ = (function (){var switch__17490__auto__ = ((function (c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no){
return (function (state_18519){
var state_val_18520 = (state_18519[(1)]);
if((state_val_18520 === (1))){
var inst_18503 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(game_no),"/letter-list"].join('');
var inst_18504 = cljs_http.client.get.call(null,inst_18503);
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18519__$1,(2),inst_18504);
} else {
if((state_val_18520 === (2))){
var inst_18506 = (state_18519[(2)]);
var inst_18507 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18508 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"letter-list","letter-list",-1430475077)];
var inst_18509 = (new cljs.core.PersistentVector(null,2,(5),inst_18507,inst_18508,null));
var inst_18510 = cljs.core.get_in.call(null,inst_18506,inst_18509);
var inst_18511 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18513 = [inst_18510,game_no];
var inst_18514 = (new cljs.core.PersistentVector(null,2,(5),inst_18512,inst_18513,null));
var inst_18515 = [new cljs.core.Keyword(null,"process-letters","process-letters",1403723328),inst_18514];
var inst_18516 = (new cljs.core.PersistentVector(null,2,(5),inst_18511,inst_18515,null));
var inst_18517 = re_frame.core.dispatch.call(null,inst_18516);
var state_18519__$1 = state_18519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18519__$1,inst_18517);
} else {
return null;
}
}
});})(c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no))
;
return ((function (switch__17490__auto__,c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no){
return (function() {
var hello_world$core$state_machine__17491__auto__ = null;
var hello_world$core$state_machine__17491__auto____0 = (function (){
var statearr_18521 = [null,null,null,null,null,null,null];
(statearr_18521[(0)] = hello_world$core$state_machine__17491__auto__);

(statearr_18521[(1)] = (1));

return statearr_18521;
});
var hello_world$core$state_machine__17491__auto____1 = (function (state_18519){
while(true){
var ret_value__17492__auto__ = (function (){try{while(true){
var result__17493__auto__ = switch__17490__auto__.call(null,state_18519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17493__auto__;
}
break;
}
}catch (e18522){var ex__17494__auto__ = e18522;
var statearr_18523_18527 = state_18519;
(statearr_18523_18527[(2)] = ex__17494__auto__);


if(cljs.core.seq.call(null,(state_18519[(4)]))){
var statearr_18524_18528 = state_18519;
(statearr_18524_18528[(1)] = cljs.core.first.call(null,(state_18519[(4)])));

} else {
throw ex__17494__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18529 = state_18519;
state_18519 = G__18529;
continue;
} else {
return ret_value__17492__auto__;
}
break;
}
});
hello_world$core$state_machine__17491__auto__ = function(state_18519){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__17491__auto____0.call(this);
case 1:
return hello_world$core$state_machine__17491__auto____1.call(this,state_18519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__17491__auto____0;
hello_world$core$state_machine__17491__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__17491__auto____1;
return hello_world$core$state_machine__17491__auto__;
})()
;})(switch__17490__auto__,c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no))
})();
var state__17515__auto__ = (function (){var statearr_18525 = f__17514__auto__.call(null);
(statearr_18525[(6)] = c__17513__auto___18526);

return statearr_18525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17515__auto__);
});})(c__17513__auto___18526,map__18498,map__18498__$1,db,vec__18499,_,game_no))
);


return cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"game-no","game-no",-1002959240),game_no),new cljs.core.Keyword(null,"point-score","point-score",-397384391),(10));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"process-letters","process-letters",1403723328),(function (db,p__18530){
var vec__18531 = p__18530;
var _ = cljs.core.nth.call(null,vec__18531,(0),null);
var vec__18534 = cljs.core.nth.call(null,vec__18531,(1),null);
var letters = cljs.core.nth.call(null,vec__18534,(0),null);
var game = cljs.core.nth.call(null,vec__18534,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"button-letters","button-letters",457120602),letters),new cljs.core.Keyword(null,"game-no","game-no",-1002959240),game),new cljs.core.Keyword(null,"typed-word","typed-word",1825014077),""),new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"point-score","point-score",-397384391),(0));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"shuffle-buttons","shuffle-buttons",1463659004),(function (db,p__18537){
var vec__18538 = p__18537;
var _ = cljs.core.nth.call(null,vec__18538,(0),null);
var letter = cljs.core.nth.call(null,vec__18538,(1),null);
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),"Spelling Bee Challenge"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"row","row",-570139521)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#inp-text","input#inp-text",-1030934786),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__18541_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word-change","typed-word-change",1884424595),clojure.string.upper_case.call(null,p1__18541_SHARP_.target.value)], null));
}),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (p1__18542_SHARP_){
if(cljs.core._EQ_.call(null,(13),p1__18542_SHARP_.charCode)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"check-word","check-word",676184091),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typed-word","typed-word",1825014077)], null)))], null));
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button6","button6",1979149860),new cljs.core.Keyword(null,"value","value",305978217),"Refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clear-input","clear-input",-561724207),""], null));
})], null)], null)], null)], null)], null);
});
hello_world.core.button_entry = (function hello_world$core$button_entry(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18543_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18543_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18544_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18544_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18545_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18545_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18546_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18546_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18547_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18547_SHARP_.target.value)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18548_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18548_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button-letters","button-letters",457120602)], null))),(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__18549_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-letter","add-letter",628821393),clojure.string.upper_case.call(null,p1__18549_SHARP_.target.value)], null));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1#the-text","h1#the-text",843399339),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"the-word-list","the-word-list",112033255)], null))))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2#the-text","h2#the-text",398723717),["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"point-score","point-score",-397384391)], null))))," points!"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li#list-text","li#list-text",1156845976),(function (){var iter__4523__auto__ = (function hello_world$core$accrued_list_$_iter__18550(s__18551){
return (new cljs.core.LazySeq(null,(function (){
var s__18551__$1 = s__18551;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__18551__$1);
if(temp__5457__auto__){
var s__18551__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18551__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__18551__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__18553 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__18552 = (0);
while(true){
if((i__18552 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__18552);
cljs.core.chunk_append.call(null,b__18553,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__18554 = (i__18552 + (1));
i__18552 = G__18554;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18553),hello_world$core$accrued_list_$_iter__18550.call(null,cljs.core.chunk_rest.call(null,s__18551__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18553),null);
}
} else {
var item = cljs.core.first.call(null,s__18551__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$accrued_list_$_iter__18550.call(null,cljs.core.rest.call(null,s__18551__$2)));
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
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request-letters","request-letters",-567267497),hello_world.core.inc_game_no.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-no","game-no",-1002959240)], null))))], null));
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
