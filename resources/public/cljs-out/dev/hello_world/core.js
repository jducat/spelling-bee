// Compiled by ClojureScript 1.10.520 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
hello_world.core.resp = reagent.core.atom.call(null,null);
hello_world.core.fetch_remote_data = (function hello_world$core$fetch_remote_data(){
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_16013){
var state_val_16014 = (state_16013[(1)]);
if((state_val_16014 === (1))){
var inst_16001 = cljs_http.client.get.call(null,"http://localhost:9500/api/random");
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16013__$1,(2),inst_16001);
} else {
if((state_val_16014 === (2))){
var inst_16003 = (state_16013[(2)]);
var inst_16004 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)];
var inst_16005 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16006 = [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"lucky-number","lucky-number",-357574696)];
var inst_16007 = (new cljs.core.PersistentVector(null,2,(5),inst_16005,inst_16006,null));
var inst_16008 = cljs.core.get_in.call(null,inst_16003,inst_16007);
var inst_16009 = [new cljs.core.Keyword(null,"reset","reset",-800929946),inst_16008];
var inst_16010 = cljs.core.PersistentHashMap.fromArrays(inst_16004,inst_16009);
var inst_16011 = hello_world.core.dispatch_event_BANG_.call(null,inst_16010);
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16013__$1,inst_16011);
} else {
return null;
}
}
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var hello_world$core$fetch_remote_data_$_state_machine__13218__auto__ = null;
var hello_world$core$fetch_remote_data_$_state_machine__13218__auto____0 = (function (){
var statearr_16015 = [null,null,null,null,null,null,null];
(statearr_16015[(0)] = hello_world$core$fetch_remote_data_$_state_machine__13218__auto__);

(statearr_16015[(1)] = (1));

return statearr_16015;
});
var hello_world$core$fetch_remote_data_$_state_machine__13218__auto____1 = (function (state_16013){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_16013);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e16016){var ex__13221__auto__ = e16016;
var statearr_16017_16020 = state_16013;
(statearr_16017_16020[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_16013[(4)]))){
var statearr_16018_16021 = state_16013;
(statearr_16018_16021[(1)] = cljs.core.first.call(null,(state_16013[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16022 = state_16013;
state_16013 = G__16022;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
hello_world$core$fetch_remote_data_$_state_machine__13218__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return hello_world$core$fetch_remote_data_$_state_machine__13218__auto____0.call(this);
case 1:
return hello_world$core$fetch_remote_data_$_state_machine__13218__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$fetch_remote_data_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$fetch_remote_data_$_state_machine__13218__auto____0;
hello_world$core$fetch_remote_data_$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$fetch_remote_data_$_state_machine__13218__auto____1;
return hello_world$core$fetch_remote_data_$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_16019 = f__13292__auto__.call(null);
(statearr_16019[(6)] = c__13291__auto__);

return statearr_16019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
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
var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_16026){
var state_val_16027 = (state_16026[(1)]);
if((state_val_16027 === (1))){
var state_16026__$1 = state_16026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16026__$1,(2),hello_world.core.event_channel,e);
} else {
if((state_val_16027 === (2))){
var inst_16024 = (state_16026[(2)]);
var state_16026__$1 = state_16026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16026__$1,inst_16024);
} else {
return null;
}
}
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var hello_world$core$send_event_BANG__$_state_machine__13218__auto__ = null;
var hello_world$core$send_event_BANG__$_state_machine__13218__auto____0 = (function (){
var statearr_16028 = [null,null,null,null,null,null,null];
(statearr_16028[(0)] = hello_world$core$send_event_BANG__$_state_machine__13218__auto__);

(statearr_16028[(1)] = (1));

return statearr_16028;
});
var hello_world$core$send_event_BANG__$_state_machine__13218__auto____1 = (function (state_16026){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_16026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e16029){var ex__13221__auto__ = e16029;
var statearr_16030_16033 = state_16026;
(statearr_16030_16033[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_16026[(4)]))){
var statearr_16031_16034 = state_16026;
(statearr_16031_16034[(1)] = cljs.core.first.call(null,(state_16026[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16035 = state_16026;
state_16026 = G__16035;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
hello_world$core$send_event_BANG__$_state_machine__13218__auto__ = function(state_16026){
switch(arguments.length){
case 0:
return hello_world$core$send_event_BANG__$_state_machine__13218__auto____0.call(this);
case 1:
return hello_world$core$send_event_BANG__$_state_machine__13218__auto____1.call(this,state_16026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$send_event_BANG__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$send_event_BANG__$_state_machine__13218__auto____0;
hello_world$core$send_event_BANG__$_state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$send_event_BANG__$_state_machine__13218__auto____1;
return hello_world$core$send_event_BANG__$_state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_16032 = f__13292__auto__.call(null);
(statearr_16032[(6)] = c__13291__auto__);

return statearr_16032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
});
if((typeof hello_world !== 'undefined') && (typeof hello_world.core !== 'undefined') && (typeof hello_world.core.global_handler !== 'undefined')){
} else {
hello_world.core.global_handler = (function (){var c__13291__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13291__auto__){
return (function (){
var f__13292__auto__ = (function (){var switch__13217__auto__ = ((function (c__13291__auto__){
return (function (state_16048){
var state_val_16049 = (state_16048[(1)]);
if((state_val_16049 === (1))){
var state_16048__$1 = state_16048;
var statearr_16050_16062 = state_16048__$1;
(statearr_16050_16062[(2)] = null);

(statearr_16050_16062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (2))){
var state_16048__$1 = state_16048;
var statearr_16051_16063 = state_16048__$1;
(statearr_16051_16063[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (3))){
var inst_16046 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16048__$1,inst_16046);
} else {
if((state_val_16049 === (4))){
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16048__$1,(7),hello_world.core.event_channel);
} else {
if((state_val_16049 === (5))){
var state_16048__$1 = state_16048;
var statearr_16053_16064 = state_16048__$1;
(statearr_16053_16064[(2)] = null);

(statearr_16053_16064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (6))){
var inst_16044 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16054_16065 = state_16048__$1;
(statearr_16054_16065[(2)] = inst_16044);

(statearr_16054_16065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (7))){
var inst_16039 = (state_16048[(2)]);
var inst_16040 = hello_world.core.dispatch_event_BANG_.call(null,inst_16039);
var state_16048__$1 = (function (){var statearr_16055 = state_16048;
(statearr_16055[(7)] = inst_16040);

return statearr_16055;
})();
var statearr_16056_16066 = state_16048__$1;
(statearr_16056_16066[(2)] = null);

(statearr_16056_16066[(1)] = (2));


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
});})(c__13291__auto__))
;
return ((function (switch__13217__auto__,c__13291__auto__){
return (function() {
var hello_world$core$state_machine__13218__auto__ = null;
var hello_world$core$state_machine__13218__auto____0 = (function (){
var statearr_16057 = [null,null,null,null,null,null,null,null];
(statearr_16057[(0)] = hello_world$core$state_machine__13218__auto__);

(statearr_16057[(1)] = (1));

return statearr_16057;
});
var hello_world$core$state_machine__13218__auto____1 = (function (state_16048){
while(true){
var ret_value__13219__auto__ = (function (){try{while(true){
var result__13220__auto__ = switch__13217__auto__.call(null,state_16048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13220__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13220__auto__;
}
break;
}
}catch (e16058){var ex__13221__auto__ = e16058;
var statearr_16059_16067 = state_16048;
(statearr_16059_16067[(2)] = ex__13221__auto__);


if(cljs.core.seq.call(null,(state_16048[(4)]))){
var statearr_16060_16068 = state_16048;
(statearr_16060_16068[(1)] = cljs.core.first.call(null,(state_16048[(4)])));

} else {
throw ex__13221__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13219__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16069 = state_16048;
state_16048 = G__16069;
continue;
} else {
return ret_value__13219__auto__;
}
break;
}
});
hello_world$core$state_machine__13218__auto__ = function(state_16048){
switch(arguments.length){
case 0:
return hello_world$core$state_machine__13218__auto____0.call(this);
case 1:
return hello_world$core$state_machine__13218__auto____1.call(this,state_16048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hello_world$core$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$0 = hello_world$core$state_machine__13218__auto____0;
hello_world$core$state_machine__13218__auto__.cljs$core$IFn$_invoke$arity$1 = hello_world$core$state_machine__13218__auto____1;
return hello_world$core$state_machine__13218__auto__;
})()
;})(switch__13217__auto__,c__13291__auto__))
})();
var state__13293__auto__ = (function (){var statearr_16061 = f__13292__auto__.call(null);
(statearr_16061[(6)] = c__13291__auto__);

return statearr_16061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13293__auto__);
});})(c__13291__auto__))
);

return c__13291__auto__;
})();
}
hello_world.core.dispatch_event_BANG_ = (function hello_world$core$dispatch_event_BANG_(e){
var pred__16070 = cljs.core._EQ_;
var expr__16071 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core.truth_(pred__16070.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),expr__16071))){
return hello_world.core.fetch_remote_data.call(null);
} else {
if(cljs.core.truth_(pred__16070.call(null,new cljs.core.Keyword(null,"reset","reset",-800929946),expr__16071))){
return cljs.core.reset_BANG_.call(null,hello_world.core.the_counter,new cljs.core.Keyword(null,"number","number",1570378438).cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs.core.println.call(null,"Don't know how to handle event: ",e);
}
}
});
hello_world.core.simple_button = (function hello_world$core$simple_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Timer component"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"value","value",305978217),"Push me!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return hello_world.core.dispatch_event_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fetch","fetch",-1081994244)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#the-text","div#the-text",-1961694387),cljs.core.deref.call(null,hello_world.core.the_counter)], null)], null)], null);
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
