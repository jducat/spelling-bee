// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
goog.require('goog.net.XhrIo');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__11667){
var vec__11668 = p__11667;
var success_QMARK_ = cljs.core.nth.call(null,vec__11668,(0),null);
var response = cljs.core.nth.call(null,vec__11668,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__11673){
var map__11674 = p__11673;
var map__11674__$1 = (((((!((map__11674 == null))))?(((((map__11674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11674):map__11674);
var request = map__11674__$1;
var on_success = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__11674__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__11674,map__11674__$1,request,on_success,on_failure){
return (function (p1__11671_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__11671_SHARP_));
});})(api,map__11674,map__11674__$1,request,on_success,on_failure))
,((function (api,map__11674,map__11674__$1,request,on_success,on_failure){
return (function (p1__11672_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__11672_SHARP_));
});})(api,map__11674,map__11674__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__11676 = cljs.core.seq.call(null,seq_request_maps);
var chunk__11677 = null;
var count__11678 = (0);
var i__11679 = (0);
while(true){
if((i__11679 < count__11678)){
var request__$1 = cljs.core._nth.call(null,chunk__11677,i__11679);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__11680 = seq__11676;
var G__11681 = chunk__11677;
var G__11682 = count__11678;
var G__11683 = (i__11679 + (1));
seq__11676 = G__11680;
chunk__11677 = G__11681;
count__11678 = G__11682;
i__11679 = G__11683;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__11676);
if(temp__5457__auto__){
var seq__11676__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11676__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__11676__$1);
var G__11684 = cljs.core.chunk_rest.call(null,seq__11676__$1);
var G__11685 = c__4550__auto__;
var G__11686 = cljs.core.count.call(null,c__4550__auto__);
var G__11687 = (0);
seq__11676 = G__11684;
chunk__11677 = G__11685;
count__11678 = G__11686;
i__11679 = G__11687;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__11676__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__11688 = cljs.core.next.call(null,seq__11676__$1);
var G__11689 = null;
var G__11690 = (0);
var G__11691 = (0);
seq__11676 = G__11688;
chunk__11677 = G__11689;
count__11678 = G__11690;
i__11679 = G__11691;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map
