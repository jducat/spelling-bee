// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.resp = reagent.core.atom.call(null,null);
hello_world.core.fetch_remote_data = (function hello_world$core$fetch_remote_data(){
var c__12495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12495__auto__){
return (function (){
var f__12496__auto__ = (function (){var switch__12472__auto__ = ((function (c__12495__auto__){
return (function (state_20432){
var state_val_20433 = (state_20432[(1)]);
if((state_val_20433 === (1))){
var inst_20420 = cljs_http.client.get.call(null,"http://localhost:9500/api/random");
var state_20432__$1 = state_20432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20432__$1,(2),inst_20420);
} else {
if((state_val_20433 === (2))){
var inst_20422 = (state_20432[(2)]);
var inst_20423 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)];
var inst_20424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20425 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"lucky-number","lucky-number",-357574696)];
var inst_20426 = (new cljs.core.PersistentVector(null,2,(5),inst_20424,inst_20425,null));
var inst_20427 = cljs.core.get_in.call(null,inst_20422,inst_20426);
var inst_20428 = [new cljs.core.Keyword(null,"reset","reset",-800929946),inst_20427];
var inst_20429 = cljs.core.PersistentHashMap.fromArrays(inst_20423,inst_20428);
var inst_20430 = hello_world.core.dispatch_event_BANG_.call(null,inst_20429);
var state_20432__$1 = state_20432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20432__$1,inst_20430);
} else {
return null;
}
}
});})(c__12495__auto__))
;
return ((function (switch__12472__auto__,c__12495__auto__){
return (function() {
var hello_world$core$fetch_remote_data_$_state_machine__12473__auto__ = null;
var hello_world$core$fetch_remote_data_$_state_machine__12473__auto____0 = (function (){
var statearr_20434 = [null,null,null,null,null,null,null];
(statearr_20434[(0)] = hello_world$core$fetch_remote_data_$_state_machine__12473__auto__);

(statearr_20434[(1)] = (1));

return statearr_20434;
});
var hello_world$core$fetch_remote_data_$_state_machine__12473__auto____1 = (function (state_20432){
while(true){
var ret_value__12474__auto__ = (function (){try{while(true){
var result__12475__auto__ = switch__12472__auto__.call(null,state_20432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12475__auto__;
}
break;
}
}catch (e20435){var ex__12476__auto__ = e20435;
var statearr_20436_20439 = state_20432;
(statearr_20436_20439[(2)] = ex__12476__auto__);


if(cljs.core.seq.call(null,(state_20432[(4)]))){
var statearr_20437_20440 = state_20432;
(statearr_20437_20440[(1)] = cljs.core.first.call(null,(state_20432[(4)])));

} else {
throw ex__12476__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20441 = state_20432;
state_20432 = G__20441;
continue;
} else {
return ret_value__12474__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data_$_state_machine__12473__auto__ = function(state_20432){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data_$_state_machine__12473__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data_$_state_machine__12473__auto____1.call(this,state_20432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data_$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data_$_state_machine__12473__auto____0;
hello_world$core$fetch_remote_data_$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data_$_state_machine__12473__auto____1;
return hello_world$core$fetch_remote_data_$_state_machine__12473__auto__;
})()
;})(switch__12472__auto__,c__12495__auto__))
})();
var state__12497__auto__ = (function (){var statearr_20438 = f__12496__auto__.call(null);
(statearr_20438[(6)] = c__12495__auto__);

return statearr_20438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12497__auto__);
});})(c__12495__auto__))
);

return c__12495__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.typed_word !== 'undefined')){
} else {
hello_world.core.typed_word = reagent.core.atom.call(null,"");
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.the_word_list !== 'undefined')){
} else {
hello_world.core.the_word_list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
hello_world.core.fetch_remote_data2 = (function hello_world$core$fetch_remote_data2(){
var c__12495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12495__auto__){
return (function (){
var f__12496__auto__ = (function (){var switch__12472__auto__ = ((function (c__12495__auto__){
return (function (state_20465){
var state_val_20466 = (state_20465[(1)]);
if((state_val_20466 === (1))){
var inst_20442 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_20443 = cljs.core.empty_QMARK_.call(null,inst_20442);
var state_20465__$1 = state_20465;
if(inst_20443){
var statearr_20467_20477 = state_20465__$1;
(statearr_20467_20477[(1)] = (2));

} else {
var statearr_20468_20478 = state_20465__$1;
(statearr_20468_20478[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20466 === (2))){
var inst_20445 = alert("no word supplied");
var state_20465__$1 = state_20465;
var statearr_20469_20479 = state_20465__$1;
(statearr_20469_20479[(2)] = inst_20445);

(statearr_20469_20479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20466 === (3))){
var inst_20447 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_20448 = ["http://localhost:9500/api/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_20447),"/add-word"].join('');
var inst_20449 = cljs_http.client.get.call(null,inst_20448);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20465__$1,(5),inst_20449);
} else {
if((state_val_20466 === (4))){
var inst_20463 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20465__$1,inst_20463);
} else {
if((state_val_20466 === (5))){
var inst_20451 = (state_20465[(2)]);
var inst_20452 = cljs.core.deref.call(null,hello_world.core.typed_word);
var inst_20453 = cljs.core.println.call(null,inst_20452);
var inst_20454 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"words","words",1924933001)];
var inst_20455 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20456 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"word-list","word-list",-230183462)];
var inst_20457 = (new cljs.core.PersistentVector(null,2,(5),inst_20455,inst_20456,null));
var inst_20458 = cljs.core.get_in.call(null,inst_20451,inst_20457);
var inst_20459 = [new cljs.core.Keyword(null,"reset-words","reset-words",1138309019),inst_20458];
var inst_20460 = cljs.core.PersistentHashMap.fromArrays(inst_20454,inst_20459);
var inst_20461 = hello_world.core.dispatch_event_BANG_.call(null,inst_20460);
var state_20465__$1 = (function (){var statearr_20470 = state_20465;
(statearr_20470[(7)] = inst_20453);

return statearr_20470;
})();
var statearr_20471_20480 = state_20465__$1;
(statearr_20471_20480[(2)] = inst_20461);

(statearr_20471_20480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__12495__auto__))
;
return ((function (switch__12472__auto__,c__12495__auto__){
return (function() {
var hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__ = null;
var hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____0 = (function (){
var statearr_20472 = [null,null,null,null,null,null,null,null];
(statearr_20472[(0)] = hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__);

(statearr_20472[(1)] = (1));

return statearr_20472;
});
var hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____1 = (function (state_20465){
while(true){
var ret_value__12474__auto__ = (function (){try{while(true){
var result__12475__auto__ = switch__12472__auto__.call(null,state_20465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12475__auto__;
}
break;
}
}catch (e20473){var ex__12476__auto__ = e20473;
var statearr_20474_20481 = state_20465;
(statearr_20474_20481[(2)] = ex__12476__auto__);


if(cljs.core.seq.call(null,(state_20465[(4)]))){
var statearr_20475_20482 = state_20465;
(statearr_20475_20482[(1)] = cljs.core.first.call(null,(state_20465[(4)])));

} else {
throw ex__12476__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20483 = state_20465;
state_20465 = G__20483;
continue;
} else {
return ret_value__12474__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__ = function(state_20465){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____1.call(this,state_20465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____0;
hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data2_$_state_machine__12473__auto____1;
return hello_world$core$fetch_remote_data2_$_state_machine__12473__auto__;
})()
;})(switch__12472__auto__,c__12495__auto__))
})();
var state__12497__auto__ = (function (){var statearr_20476 = f__12496__auto__.call(null);
(statearr_20476[(6)] = c__12495__auto__);

return statearr_20476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12497__auto__);
});})(c__12495__auto__))
);

return c__12495__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.the_counter !== 'undefined')){
} else {
hello_world.core.the_counter = reagent.core.atom.call(null,(0));
}
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.event_channel !== 'undefined')){
} else {
hello_world.core.event_channel = cljs.core.async.chan.call(null,(10));
}
hello_world.core.send_event_BANG_ = (function hello_world$core$send_event_BANG_(e){
var c__12495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12495__auto__){
return (function (){
var f__12496__auto__ = (function (){var switch__12472__auto__ = ((function (c__12495__auto__){
return (function (state_20487){
var state_val_20488 = (state_20487[(1)]);
if((state_val_20488 === (1))){
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20487__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_20488 === (2))){
var inst_20485 = (state_20487[(2)]);
var state_20487__$1 = state_20487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20487__$1,inst_20485);
} else {
return null;
}
}
});})(c__12495__auto__))
;
return ((function (switch__12472__auto__,c__12495__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__12473__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__12473__auto____0 = (function (){
var statearr_20489 = [null,null,null,null,null,null,null];
(statearr_20489[(0)] = hello_world$core$send_event_BANG__$_state_machine__12473__auto__);

(statearr_20489[(1)] = (1));

return statearr_20489;
});
var hello_world$core$send_event_BANG__$_state_machine__12473__auto____1 = (function (state_20487){
while(true){
var ret_value__12474__auto__ = (function (){try{while(true){
var result__12475__auto__ = switch__12472__auto__.call(null,state_20487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12475__auto__;
}
break;
}
}catch (e20490){var ex__12476__auto__ = e20490;
var statearr_20491_20494 = state_20487;
(statearr_20491_20494[(2)] = ex__12476__auto__);


if(cljs.core.seq.call(null,(state_20487[(4)]))){
var statearr_20492_20495 = state_20487;
(statearr_20492_20495[(1)] = cljs.core.first.call(null,(state_20487[(4)])));

} else {
throw ex__12476__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20496 = state_20487;
state_20487 = G__20496;
continue;
} else {
return ret_value__12474__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__12473__auto__ = function(state_20487){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__12473__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__12473__auto____1.call(this,state_20487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__12473__auto____0;
hello_world$core$send_event_BANG__$_state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__12473__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__12473__auto__;
})()
;})(switch__12472__auto__,c__12495__auto__))
})();
var state__12497__auto__ = (function (){var statearr_20493 = f__12496__auto__.call(null);
(statearr_20493[(6)] = c__12495__auto__);

return statearr_20493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12497__auto__);
});})(c__12495__auto__))
);

return c__12495__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.global_handler !== 'undefined')){
} else {
hello_world.core.global_handler = (function (){var c__12495__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12495__auto__){
return (function (){
var f__12496__auto__ = (function (){var switch__12472__auto__ = ((function (c__12495__auto__){
return (function (state_20509){
var state_val_20510 = (state_20509[(1)]);
if((state_val_20510 === (1))){
var state_20509__$1 = state_20509;
var statearr_20511_20523 = state_20509__$1;
(statearr_20511_20523[(2)] = null);

(statearr_20511_20523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (2))){
var state_20509__$1 = state_20509;
var statearr_20512_20524 = state_20509__$1;
(statearr_20512_20524[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (3))){
var inst_20507 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20509__$1,inst_20507);
} else {
if((state_val_20510 === (4))){
var state_20509__$1 = state_20509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20509__$1,(7),hello_world.core.event_channel);
} else {
if((state_val_20510 === (5))){
var state_20509__$1 = state_20509;
var statearr_20514_20525 = state_20509__$1;
(statearr_20514_20525[(2)] = null);

(statearr_20514_20525[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (6))){
var inst_20505 = (state_20509[(2)]);
var state_20509__$1 = state_20509;
var statearr_20515_20526 = state_20509__$1;
(statearr_20515_20526[(2)] = inst_20505);

(statearr_20515_20526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20510 === (7))){
var inst_20500 = (state_20509[(2)]);
var inst_20501 = hello_world.core.dispatch_event_BANG_.call(null,inst_20500);
var state_20509__$1 = (function (){var statearr_20516 = state_20509;
(statearr_20516[(7)] = inst_20501);

return statearr_20516;
})();
var statearr_20517_20527 = state_20509__$1;
(statearr_20517_20527[(2)] = null);

(statearr_20517_20527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12495__auto__))
;
return ((function (switch__12472__auto__,c__12495__auto__){
return (function() {
var hello_world$core$state_machine__12473__auto__ = null;
var hello_world$core$state_machine__12473__auto____0 = (function (){
var statearr_20518 = [null,null,null,null,null,null,null,null];
(statearr_20518[(0)] = hello_world$core$state_machine__12473__auto__);

(statearr_20518[(1)] = (1));

return statearr_20518;
});
var hello_world$core$state_machine__12473__auto____1 = (function (state_20509){
while(true){
var ret_value__12474__auto__ = (function (){try{while(true){
var result__12475__auto__ = switch__12472__auto__.call(null,state_20509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12475__auto__;
}
break;
}
}catch (e20519){var ex__12476__auto__ = e20519;
var statearr_20520_20528 = state_20509;
(statearr_20520_20528[(2)] = ex__12476__auto__);


if(cljs.core.seq.call(null,(state_20509[(4)]))){
var statearr_20521_20529 = state_20509;
(statearr_20521_20529[(1)] = cljs.core.first.call(null,(state_20509[(4)])));

} else {
throw ex__12476__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20530 = state_20509;
state_20509 = G__20530;
continue;
} else {
return ret_value__12474__auto__;
}
break;
}
});
hello_world$core$state_machine__12473__auto__ = function(state_20509){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__12473__auto____0.call(this);
case 1:
return hello_world$core$state_machine__12473__auto____1.call(this,state_20509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__12473__auto____0;
hello_world$core$state_machine__12473__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__12473__auto____1;
return hello_world$core$state_machine__12473__auto__;
})()
;})(switch__12472__auto__,c__12495__auto__))
})();
var state__12497__auto__ = (function (){var statearr_20522 = f__12496__auto__.call(null);
(statearr_20522[(6)] = c__12495__auto__);

return statearr_20522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12497__auto__);
});})(c__12495__auto__))
);

return c__12495__auto__;
})();
}
hello_world.core.dispatch_event_BANG_ = (function hello_world$core$dispatch_event_BANG_(e){
var pred__20531 = cljs.core._EQ_;
var expr__20532 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),expr__20532))){
return hello_world.core.fetch_remote_data.call(null);
} else {
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409),expr__20532))){
return hello_world.core.fetch_remote_data2.call(null);
} else {
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),expr__20532))){
return cljs.core.reset_BANG_.call(null,hello_world.core.the_counter,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(e));
} else {
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"reset-words","reset-words",1138309019),expr__20532))){
cljs.core.reset_BANG_.call(null,hello_world.core.the_word_list,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(e));

return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,"");
} else {
if(cljs.core.truth_(pred__20531.call(null,new cljs.core.Keyword(null,"print-word","print-word",-1287602519),expr__20532))){
return cljs.core.println.call(null,cljs.core.deref.call(null,hello_world.core.typed_word));
} else {
return cljs.core.println.call(null,"Don't know how to handle event: ",e);
}
}
}
}
}
});
hello_world.core.add_letter = (function hello_world$core$add_letter(letter){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,hello_world.core.typed_word)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(letter)].join(''));
});
hello_world.core.rem_letter = (function hello_world$core$rem_letter(){
var popped_word = cljs.core.reduce.call(null,cljs.core.str,cljs.core.take.call(null,(cljs.core.count.call(null,cljs.core.deref.call(null,hello_world.core.typed_word)) - (1)),cljs.core.deref.call(null,hello_world.core.typed_word)));
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,popped_word);
});
hello_world.core.clear_input = (function hello_world$core$clear_input(){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,"");
});
hello_world.core.letter_list = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","D","G","L","N","R","U"], null);
hello_world.core.simple_button = (function hello_world$core$simple_button(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Spelling Bee"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,hello_world.core.typed_word),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__20534_SHARP_){
return cljs.core.reset_BANG_.call(null,hello_world.core.typed_word,clojure.string.upper_case.call(null,p1__20534_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(1)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20535_SHARP_){
return hello_world.core.add_letter.call(null,p1__20535_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(2)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20536_SHARP_){
return hello_world.core.add_letter.call(null,p1__20536_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(3)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20537_SHARP_){
return hello_world.core.add_letter.call(null,p1__20537_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button3","button3",1634593692),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.first.call(null,hello_world.core.letter_list),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20538_SHARP_){
return hello_world.core.add_letter.call(null,p1__20538_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(4)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20539_SHARP_){
return hello_world.core.add_letter.call(null,p1__20539_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(5)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20540_SHARP_){
return hello_world.core.add_letter.call(null,p1__20540_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button2","button2",-421782063),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.call(null,hello_world.core.letter_list,(6)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__20541_SHARP_){
return hello_world.core.add_letter.call(null,p1__20541_SHARP_.target.value);
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"refresh",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.clear_input.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button4","button4",825781426),new cljs.core.Keyword(null,"value","value",305978217),"backspace",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.rem_letter.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"enter",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.dispatch_event_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fetch-words","fetch-words",-2040947409)], null));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["You have found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,hello_world.core.the_word_list))))," words"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),(function (){var iter__4523__auto__ = (function hello_world$core$simple_button_$_iter__20542(s__20543){
return (new cljs.core.LazySeq(null,(function (){
var s__20543__$1 = s__20543;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__20543__$1);
if(temp__5457__auto__){
var s__20543__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20543__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__20543__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__20545 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__20544 = (0);
while(true){
if((i__20544 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__20544);
cljs.core.chunk_append.call(null,b__20545,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__20546 = (i__20544 + (1));
i__20544 = G__20546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20545),hello_world$core$simple_button_$_iter__20542.call(null,cljs.core.chunk_rest.call(null,s__20543__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20545),null);
}
} else {
var item = cljs.core.first.call(null,s__20543__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),item], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),hello_world$core$simple_button_$_iter__20542.call(null,cljs.core.rest.call(null,s__20543__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.apply.call(null,cljs.core.sorted_set,cljs.core.deref.call(null,hello_world.core.the_word_list)));
})()], null)], null)], null)], null)], null);
});
hello_world.core.mount = (function hello_world$core$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_world.core.simple_button], null),el);
});
hello_world.core.get_app_element = (function hello_world$core$get_app_element(){
return goog.dom.getElement("app");
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
return hello_world.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
