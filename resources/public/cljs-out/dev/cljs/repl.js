// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26361){
var map__26362 = p__26361;
var map__26362__$1 = (((((!((map__26362 == null))))?(((((map__26362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26362):map__26362);
var m = map__26362__$1;
var n = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26362__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26364_26396 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26365_26397 = null;
var count__26366_26398 = (0);
var i__26367_26399 = (0);
while(true){
if((i__26367_26399 < count__26366_26398)){
var f_26400 = cljs.core._nth.call(null,chunk__26365_26397,i__26367_26399);
cljs.core.println.call(null,"  ",f_26400);


var G__26401 = seq__26364_26396;
var G__26402 = chunk__26365_26397;
var G__26403 = count__26366_26398;
var G__26404 = (i__26367_26399 + (1));
seq__26364_26396 = G__26401;
chunk__26365_26397 = G__26402;
count__26366_26398 = G__26403;
i__26367_26399 = G__26404;
continue;
} else {
var temp__5457__auto___26405 = cljs.core.seq.call(null,seq__26364_26396);
if(temp__5457__auto___26405){
var seq__26364_26406__$1 = temp__5457__auto___26405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26364_26406__$1)){
var c__4550__auto___26407 = cljs.core.chunk_first.call(null,seq__26364_26406__$1);
var G__26408 = cljs.core.chunk_rest.call(null,seq__26364_26406__$1);
var G__26409 = c__4550__auto___26407;
var G__26410 = cljs.core.count.call(null,c__4550__auto___26407);
var G__26411 = (0);
seq__26364_26396 = G__26408;
chunk__26365_26397 = G__26409;
count__26366_26398 = G__26410;
i__26367_26399 = G__26411;
continue;
} else {
var f_26412 = cljs.core.first.call(null,seq__26364_26406__$1);
cljs.core.println.call(null,"  ",f_26412);


var G__26413 = cljs.core.next.call(null,seq__26364_26406__$1);
var G__26414 = null;
var G__26415 = (0);
var G__26416 = (0);
seq__26364_26396 = G__26413;
chunk__26365_26397 = G__26414;
count__26366_26398 = G__26415;
i__26367_26399 = G__26416;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26417 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26417);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26417)))?cljs.core.second.call(null,arglists_26417):arglists_26417));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26368_26418 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26369_26419 = null;
var count__26370_26420 = (0);
var i__26371_26421 = (0);
while(true){
if((i__26371_26421 < count__26370_26420)){
var vec__26382_26422 = cljs.core._nth.call(null,chunk__26369_26419,i__26371_26421);
var name_26423 = cljs.core.nth.call(null,vec__26382_26422,(0),null);
var map__26385_26424 = cljs.core.nth.call(null,vec__26382_26422,(1),null);
var map__26385_26425__$1 = (((((!((map__26385_26424 == null))))?(((((map__26385_26424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26385_26424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385_26424):map__26385_26424);
var doc_26426 = cljs.core.get.call(null,map__26385_26425__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26427 = cljs.core.get.call(null,map__26385_26425__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26423);

cljs.core.println.call(null," ",arglists_26427);

if(cljs.core.truth_(doc_26426)){
cljs.core.println.call(null," ",doc_26426);
} else {
}


var G__26428 = seq__26368_26418;
var G__26429 = chunk__26369_26419;
var G__26430 = count__26370_26420;
var G__26431 = (i__26371_26421 + (1));
seq__26368_26418 = G__26428;
chunk__26369_26419 = G__26429;
count__26370_26420 = G__26430;
i__26371_26421 = G__26431;
continue;
} else {
var temp__5457__auto___26432 = cljs.core.seq.call(null,seq__26368_26418);
if(temp__5457__auto___26432){
var seq__26368_26433__$1 = temp__5457__auto___26432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26368_26433__$1)){
var c__4550__auto___26434 = cljs.core.chunk_first.call(null,seq__26368_26433__$1);
var G__26435 = cljs.core.chunk_rest.call(null,seq__26368_26433__$1);
var G__26436 = c__4550__auto___26434;
var G__26437 = cljs.core.count.call(null,c__4550__auto___26434);
var G__26438 = (0);
seq__26368_26418 = G__26435;
chunk__26369_26419 = G__26436;
count__26370_26420 = G__26437;
i__26371_26421 = G__26438;
continue;
} else {
var vec__26387_26439 = cljs.core.first.call(null,seq__26368_26433__$1);
var name_26440 = cljs.core.nth.call(null,vec__26387_26439,(0),null);
var map__26390_26441 = cljs.core.nth.call(null,vec__26387_26439,(1),null);
var map__26390_26442__$1 = (((((!((map__26390_26441 == null))))?(((((map__26390_26441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26390_26441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26390_26441):map__26390_26441);
var doc_26443 = cljs.core.get.call(null,map__26390_26442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26444 = cljs.core.get.call(null,map__26390_26442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26440);

cljs.core.println.call(null," ",arglists_26444);

if(cljs.core.truth_(doc_26443)){
cljs.core.println.call(null," ",doc_26443);
} else {
}


var G__26445 = cljs.core.next.call(null,seq__26368_26433__$1);
var G__26446 = null;
var G__26447 = (0);
var G__26448 = (0);
seq__26368_26418 = G__26445;
chunk__26369_26419 = G__26446;
count__26370_26420 = G__26447;
i__26371_26421 = G__26448;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__26392 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26393 = null;
var count__26394 = (0);
var i__26395 = (0);
while(true){
if((i__26395 < count__26394)){
var role = cljs.core._nth.call(null,chunk__26393,i__26395);
var temp__5457__auto___26449__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26449__$1)){
var spec_26450 = temp__5457__auto___26449__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26450));
} else {
}


var G__26451 = seq__26392;
var G__26452 = chunk__26393;
var G__26453 = count__26394;
var G__26454 = (i__26395 + (1));
seq__26392 = G__26451;
chunk__26393 = G__26452;
count__26394 = G__26453;
i__26395 = G__26454;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__26392);
if(temp__5457__auto____$1){
var seq__26392__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26392__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26392__$1);
var G__26455 = cljs.core.chunk_rest.call(null,seq__26392__$1);
var G__26456 = c__4550__auto__;
var G__26457 = cljs.core.count.call(null,c__4550__auto__);
var G__26458 = (0);
seq__26392 = G__26455;
chunk__26393 = G__26456;
count__26394 = G__26457;
i__26395 = G__26458;
continue;
} else {
var role = cljs.core.first.call(null,seq__26392__$1);
var temp__5457__auto___26459__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___26459__$2)){
var spec_26460 = temp__5457__auto___26459__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26460));
} else {
}


var G__26461 = cljs.core.next.call(null,seq__26392__$1);
var G__26462 = null;
var G__26463 = (0);
var G__26464 = (0);
seq__26392 = G__26461;
chunk__26393 = G__26462;
count__26394 = G__26463;
i__26395 = G__26464;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26465 = cljs.core.conj.call(null,via,t);
var G__26466 = cljs.core.ex_cause.call(null,t);
via = G__26465;
t = G__26466;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26469 = datafied_throwable;
var map__26469__$1 = (((((!((map__26469 == null))))?(((((map__26469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26469):map__26469);
var via = cljs.core.get.call(null,map__26469__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26469__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26469__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26470 = cljs.core.last.call(null,via);
var map__26470__$1 = (((((!((map__26470 == null))))?(((((map__26470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26470):map__26470);
var type = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26470__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26471 = data;
var map__26471__$1 = (((((!((map__26471 == null))))?(((((map__26471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26471):map__26471);
var problems = cljs.core.get.call(null,map__26471__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26471__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26471__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26472 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26472__$1 = (((((!((map__26472 == null))))?(((((map__26472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26472):map__26472);
var top_data = map__26472__$1;
var source = cljs.core.get.call(null,map__26472__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26477 = phase;
var G__26477__$1 = (((G__26477 instanceof cljs.core.Keyword))?G__26477.fqn:null);
switch (G__26477__$1) {
case "read-source":
var map__26478 = data;
var map__26478__$1 = (((((!((map__26478 == null))))?(((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var line = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26480 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26480__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26480,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26480);
var G__26480__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26480__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26480__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26480__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26481 = top_data;
var G__26481__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26481,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26481);
var G__26481__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26481__$1);
var G__26481__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26481__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26481__$2);
var G__26481__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26481__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26481__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26481__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26481__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26482 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26482,(0),null);
var method = cljs.core.nth.call(null,vec__26482,(1),null);
var file = cljs.core.nth.call(null,vec__26482,(2),null);
var line = cljs.core.nth.call(null,vec__26482,(3),null);
var G__26485 = top_data;
var G__26485__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26485,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26485);
var G__26485__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26485__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26485__$1);
var G__26485__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__26485__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26485__$2);
var G__26485__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26485__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26485__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26485__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26485__$4;
}

break;
case "execution":
var vec__26486 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26486,(0),null);
var method = cljs.core.nth.call(null,vec__26486,(1),null);
var file = cljs.core.nth.call(null,vec__26486,(2),null);
var line = cljs.core.nth.call(null,vec__26486,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__26486,source__$1,method,file,line,G__26477,G__26477__$1,map__26469,map__26469__$1,via,trace,phase,map__26470,map__26470__$1,type,message,data,map__26471,map__26471__$1,problems,fn,caller,map__26472,map__26472__$1,top_data,source){
return (function (p1__26468_SHARP_){
var or__4131__auto__ = (p1__26468_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26468_SHARP_);
}
});})(vec__26486,source__$1,method,file,line,G__26477,G__26477__$1,map__26469,map__26469__$1,via,trace,phase,map__26470,map__26470__$1,type,message,data,map__26471,map__26471__$1,problems,fn,caller,map__26472,map__26472__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26489 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26489__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26489,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26489);
var G__26489__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26489__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26489__$1);
var G__26489__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26489__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26489__$2);
var G__26489__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26489__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26489__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26489__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26489__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26477__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26493){
var map__26494 = p__26493;
var map__26494__$1 = (((((!((map__26494 == null))))?(((((map__26494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26494):map__26494);
var triage_data = map__26494__$1;
var phase = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26494__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26496 = phase;
var G__26496__$1 = (((G__26496 instanceof cljs.core.Keyword))?G__26496.fqn:null);
switch (G__26496__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26497_26506 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26498_26507 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26499_26508 = true;
var _STAR_print_fn_STAR__temp_val__26500_26509 = ((function (_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26499_26508;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26500_26509;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,_STAR_print_fn_STAR__temp_val__26500_26509,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,_STAR_print_fn_STAR__temp_val__26500_26509,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26491_SHARP_){
return cljs.core.dissoc.call(null,p1__26491_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,_STAR_print_fn_STAR__temp_val__26500_26509,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26497_26506,_STAR_print_fn_STAR__orig_val__26498_26507,_STAR_print_newline_STAR__temp_val__26499_26508,_STAR_print_fn_STAR__temp_val__26500_26509,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26498_26507;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26497_26506;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26501_26510 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26502_26511 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26503_26512 = true;
var _STAR_print_fn_STAR__temp_val__26504_26513 = ((function (_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26503_26512;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26504_26513;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,_STAR_print_fn_STAR__temp_val__26504_26513,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,_STAR_print_fn_STAR__temp_val__26504_26513,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26492_SHARP_){
return cljs.core.dissoc.call(null,p1__26492_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,_STAR_print_fn_STAR__temp_val__26504_26513,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26501_26510,_STAR_print_fn_STAR__orig_val__26502_26511,_STAR_print_newline_STAR__temp_val__26503_26512,_STAR_print_fn_STAR__temp_val__26504_26513,sb__4661__auto__,G__26496,G__26496__$1,loc,class_name,simple_class,cause_type,format,map__26494,map__26494__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26502_26511;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26501_26510;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26496__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map