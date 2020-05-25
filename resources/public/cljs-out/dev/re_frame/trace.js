// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__11245){
var map__11246 = p__11245;
var map__11246__$1 = (((((!((map__11246 == null))))?(((((map__11246.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11246.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11246):map__11246);
var operation = cljs.core.get.call(null,map__11246__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__11246__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__11246__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__11246__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__11248_11268 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11249_11269 = null;
var count__11250_11270 = (0);
var i__11251_11271 = (0);
while(true){
if((i__11251_11271 < count__11250_11270)){
var vec__11260_11272 = cljs.core._nth.call(null,chunk__11249_11269,i__11251_11271);
var k_11273 = cljs.core.nth.call(null,vec__11260_11272,(0),null);
var cb_11274 = cljs.core.nth.call(null,vec__11260_11272,(1),null);
try{cb_11274.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11263){var e_11275 = e11263;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11273,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11275);
}

var G__11276 = seq__11248_11268;
var G__11277 = chunk__11249_11269;
var G__11278 = count__11250_11270;
var G__11279 = (i__11251_11271 + (1));
seq__11248_11268 = G__11276;
chunk__11249_11269 = G__11277;
count__11250_11270 = G__11278;
i__11251_11271 = G__11279;
continue;
} else {
var temp__5457__auto___11280 = cljs.core.seq.call(null,seq__11248_11268);
if(temp__5457__auto___11280){
var seq__11248_11281__$1 = temp__5457__auto___11280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11248_11281__$1)){
var c__4550__auto___11282 = cljs.core.chunk_first.call(null,seq__11248_11281__$1);
var G__11283 = cljs.core.chunk_rest.call(null,seq__11248_11281__$1);
var G__11284 = c__4550__auto___11282;
var G__11285 = cljs.core.count.call(null,c__4550__auto___11282);
var G__11286 = (0);
seq__11248_11268 = G__11283;
chunk__11249_11269 = G__11284;
count__11250_11270 = G__11285;
i__11251_11271 = G__11286;
continue;
} else {
var vec__11264_11287 = cljs.core.first.call(null,seq__11248_11281__$1);
var k_11288 = cljs.core.nth.call(null,vec__11264_11287,(0),null);
var cb_11289 = cljs.core.nth.call(null,vec__11264_11287,(1),null);
try{cb_11289.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e11267){var e_11290 = e11267;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_11288,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_11290);
}

var G__11291 = cljs.core.next.call(null,seq__11248_11281__$1);
var G__11292 = null;
var G__11293 = (0);
var G__11294 = (0);
seq__11248_11268 = G__11291;
chunk__11249_11269 = G__11292;
count__11250_11270 = G__11293;
i__11251_11271 = G__11294;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
