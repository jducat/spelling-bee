// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__11401 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__11402 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__11402;

try{try{var seq__11403 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11404 = null;
var count__11405 = (0);
var i__11406 = (0);
while(true){
if((i__11406 < count__11405)){
var vec__11413 = cljs.core._nth.call(null,chunk__11404,i__11406);
var effect_key = cljs.core.nth.call(null,vec__11413,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11413,(1),null);
var temp__5455__auto___11435 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11435)){
var effect_fn_11436 = temp__5455__auto___11435;
effect_fn_11436.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11437 = seq__11403;
var G__11438 = chunk__11404;
var G__11439 = count__11405;
var G__11440 = (i__11406 + (1));
seq__11403 = G__11437;
chunk__11404 = G__11438;
count__11405 = G__11439;
i__11406 = G__11440;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11403);
if(temp__5457__auto__){
var seq__11403__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11403__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11403__$1);
var G__11441 = cljs.core.chunk_rest.call(null,seq__11403__$1);
var G__11442 = c__4550__auto__;
var G__11443 = cljs.core.count.call(null,c__4550__auto__);
var G__11444 = (0);
seq__11403 = G__11441;
chunk__11404 = G__11442;
count__11405 = G__11443;
i__11406 = G__11444;
continue;
} else {
var vec__11416 = cljs.core.first.call(null,seq__11403__$1);
var effect_key = cljs.core.nth.call(null,vec__11416,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11416,(1),null);
var temp__5455__auto___11445 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11445)){
var effect_fn_11446 = temp__5455__auto___11445;
effect_fn_11446.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11447 = cljs.core.next.call(null,seq__11403__$1);
var G__11448 = null;
var G__11449 = (0);
var G__11450 = (0);
seq__11403 = G__11447;
chunk__11404 = G__11448;
count__11405 = G__11449;
i__11406 = G__11450;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11223__auto___11451 = re_frame.interop.now.call(null);
var duration__11224__auto___11452 = (end__11223__auto___11451 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11224__auto___11452,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__11223__auto___11451);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__11401;
}} else {
var seq__11419 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11420 = null;
var count__11421 = (0);
var i__11422 = (0);
while(true){
if((i__11422 < count__11421)){
var vec__11429 = cljs.core._nth.call(null,chunk__11420,i__11422);
var effect_key = cljs.core.nth.call(null,vec__11429,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11429,(1),null);
var temp__5455__auto___11453 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11453)){
var effect_fn_11454 = temp__5455__auto___11453;
effect_fn_11454.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11455 = seq__11419;
var G__11456 = chunk__11420;
var G__11457 = count__11421;
var G__11458 = (i__11422 + (1));
seq__11419 = G__11455;
chunk__11420 = G__11456;
count__11421 = G__11457;
i__11422 = G__11458;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11419);
if(temp__5457__auto__){
var seq__11419__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11419__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11419__$1);
var G__11459 = cljs.core.chunk_rest.call(null,seq__11419__$1);
var G__11460 = c__4550__auto__;
var G__11461 = cljs.core.count.call(null,c__4550__auto__);
var G__11462 = (0);
seq__11419 = G__11459;
chunk__11420 = G__11460;
count__11421 = G__11461;
i__11422 = G__11462;
continue;
} else {
var vec__11432 = cljs.core.first.call(null,seq__11419__$1);
var effect_key = cljs.core.nth.call(null,vec__11432,(0),null);
var effect_value = cljs.core.nth.call(null,vec__11432,(1),null);
var temp__5455__auto___11463 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___11463)){
var effect_fn_11464 = temp__5455__auto___11463;
effect_fn_11464.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__11465 = cljs.core.next.call(null,seq__11419__$1);
var G__11466 = null;
var G__11467 = (0);
var G__11468 = (0);
seq__11419 = G__11465;
chunk__11420 = G__11466;
count__11421 = G__11467;
i__11422 = G__11468;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11469 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11470 = null;
var count__11471 = (0);
var i__11472 = (0);
while(true){
if((i__11472 < count__11471)){
var map__11477 = cljs.core._nth.call(null,chunk__11470,i__11472);
var map__11477__$1 = (((((!((map__11477 == null))))?(((((map__11477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11477):map__11477);
var effect = map__11477__$1;
var ms = cljs.core.get.call(null,map__11477__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11477__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11469,chunk__11470,count__11471,i__11472,map__11477,map__11477__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11469,chunk__11470,count__11471,i__11472,map__11477,map__11477__$1,effect,ms,dispatch))
,ms);
}


var G__11481 = seq__11469;
var G__11482 = chunk__11470;
var G__11483 = count__11471;
var G__11484 = (i__11472 + (1));
seq__11469 = G__11481;
chunk__11470 = G__11482;
count__11471 = G__11483;
i__11472 = G__11484;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11469);
if(temp__5457__auto__){
var seq__11469__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11469__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11469__$1);
var G__11485 = cljs.core.chunk_rest.call(null,seq__11469__$1);
var G__11486 = c__4550__auto__;
var G__11487 = cljs.core.count.call(null,c__4550__auto__);
var G__11488 = (0);
seq__11469 = G__11485;
chunk__11470 = G__11486;
count__11471 = G__11487;
i__11472 = G__11488;
continue;
} else {
var map__11479 = cljs.core.first.call(null,seq__11469__$1);
var map__11479__$1 = (((((!((map__11479 == null))))?(((((map__11479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11479):map__11479);
var effect = map__11479__$1;
var ms = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11479__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11469,chunk__11470,count__11471,i__11472,map__11479,map__11479__$1,effect,ms,dispatch,seq__11469__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11469,chunk__11470,count__11471,i__11472,map__11479,map__11479__$1,effect,ms,dispatch,seq__11469__$1,temp__5457__auto__))
,ms);
}


var G__11489 = cljs.core.next.call(null,seq__11469__$1);
var G__11490 = null;
var G__11491 = (0);
var G__11492 = (0);
seq__11469 = G__11489;
chunk__11470 = G__11490;
count__11471 = G__11491;
i__11472 = G__11492;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__11493 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__11494 = null;
var count__11495 = (0);
var i__11496 = (0);
while(true){
if((i__11496 < count__11495)){
var event = cljs.core._nth.call(null,chunk__11494,i__11496);
re_frame.router.dispatch.call(null,event);


var G__11497 = seq__11493;
var G__11498 = chunk__11494;
var G__11499 = count__11495;
var G__11500 = (i__11496 + (1));
seq__11493 = G__11497;
chunk__11494 = G__11498;
count__11495 = G__11499;
i__11496 = G__11500;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11493);
if(temp__5457__auto__){
var seq__11493__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11493__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11493__$1);
var G__11501 = cljs.core.chunk_rest.call(null,seq__11493__$1);
var G__11502 = c__4550__auto__;
var G__11503 = cljs.core.count.call(null,c__4550__auto__);
var G__11504 = (0);
seq__11493 = G__11501;
chunk__11494 = G__11502;
count__11495 = G__11503;
i__11496 = G__11504;
continue;
} else {
var event = cljs.core.first.call(null,seq__11493__$1);
re_frame.router.dispatch.call(null,event);


var G__11505 = cljs.core.next.call(null,seq__11493__$1);
var G__11506 = null;
var G__11507 = (0);
var G__11508 = (0);
seq__11493 = G__11505;
chunk__11494 = G__11506;
count__11495 = G__11507;
i__11496 = G__11508;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11509 = cljs.core.seq.call(null,value);
var chunk__11510 = null;
var count__11511 = (0);
var i__11512 = (0);
while(true){
if((i__11512 < count__11511)){
var event = cljs.core._nth.call(null,chunk__11510,i__11512);
clear_event.call(null,event);


var G__11513 = seq__11509;
var G__11514 = chunk__11510;
var G__11515 = count__11511;
var G__11516 = (i__11512 + (1));
seq__11509 = G__11513;
chunk__11510 = G__11514;
count__11511 = G__11515;
i__11512 = G__11516;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11509);
if(temp__5457__auto__){
var seq__11509__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11509__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11509__$1);
var G__11517 = cljs.core.chunk_rest.call(null,seq__11509__$1);
var G__11518 = c__4550__auto__;
var G__11519 = cljs.core.count.call(null,c__4550__auto__);
var G__11520 = (0);
seq__11509 = G__11517;
chunk__11510 = G__11518;
count__11511 = G__11519;
i__11512 = G__11520;
continue;
} else {
var event = cljs.core.first.call(null,seq__11509__$1);
clear_event.call(null,event);


var G__11521 = cljs.core.next.call(null,seq__11509__$1);
var G__11522 = null;
var G__11523 = (0);
var G__11524 = (0);
seq__11509 = G__11521;
chunk__11510 = G__11522;
count__11511 = G__11523;
i__11512 = G__11524;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
