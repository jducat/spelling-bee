// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34975){
var map__34976 = p__34975;
var map__34976__$1 = (((((!((map__34976 == null))))?(((((map__34976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34976.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34976):map__34976);
var m = map__34976__$1;
var n = cljs.core.get.call(null,map__34976__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__34978_35010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34979_35011 = null;
var count__34980_35012 = (0);
var i__34981_35013 = (0);
while(true){
if((i__34981_35013 < count__34980_35012)){
var f_35014 = cljs.core._nth.call(null,chunk__34979_35011,i__34981_35013);
cljs.core.println.call(null,"  ",f_35014);


var G__35015 = seq__34978_35010;
var G__35016 = chunk__34979_35011;
var G__35017 = count__34980_35012;
var G__35018 = (i__34981_35013 + (1));
seq__34978_35010 = G__35015;
chunk__34979_35011 = G__35016;
count__34980_35012 = G__35017;
i__34981_35013 = G__35018;
continue;
} else {
var temp__5457__auto___35019 = cljs.core.seq.call(null,seq__34978_35010);
if(temp__5457__auto___35019){
var seq__34978_35020__$1 = temp__5457__auto___35019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34978_35020__$1)){
var c__4550__auto___35021 = cljs.core.chunk_first.call(null,seq__34978_35020__$1);
var G__35022 = cljs.core.chunk_rest.call(null,seq__34978_35020__$1);
var G__35023 = c__4550__auto___35021;
var G__35024 = cljs.core.count.call(null,c__4550__auto___35021);
var G__35025 = (0);
seq__34978_35010 = G__35022;
chunk__34979_35011 = G__35023;
count__34980_35012 = G__35024;
i__34981_35013 = G__35025;
continue;
} else {
var f_35026 = cljs.core.first.call(null,seq__34978_35020__$1);
cljs.core.println.call(null,"  ",f_35026);


var G__35027 = cljs.core.next.call(null,seq__34978_35020__$1);
var G__35028 = null;
var G__35029 = (0);
var G__35030 = (0);
seq__34978_35010 = G__35027;
chunk__34979_35011 = G__35028;
count__34980_35012 = G__35029;
i__34981_35013 = G__35030;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35031 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35031);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35031)))?cljs.core.second.call(null,arglists_35031):arglists_35031));
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
var seq__34982_35032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34983_35033 = null;
var count__34984_35034 = (0);
var i__34985_35035 = (0);
while(true){
if((i__34985_35035 < count__34984_35034)){
var vec__34996_35036 = cljs.core._nth.call(null,chunk__34983_35033,i__34985_35035);
var name_35037 = cljs.core.nth.call(null,vec__34996_35036,(0),null);
var map__34999_35038 = cljs.core.nth.call(null,vec__34996_35036,(1),null);
var map__34999_35039__$1 = (((((!((map__34999_35038 == null))))?(((((map__34999_35038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34999_35038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34999_35038):map__34999_35038);
var doc_35040 = cljs.core.get.call(null,map__34999_35039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35041 = cljs.core.get.call(null,map__34999_35039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35037);

cljs.core.println.call(null," ",arglists_35041);

if(cljs.core.truth_(doc_35040)){
cljs.core.println.call(null," ",doc_35040);
} else {
}


var G__35042 = seq__34982_35032;
var G__35043 = chunk__34983_35033;
var G__35044 = count__34984_35034;
var G__35045 = (i__34985_35035 + (1));
seq__34982_35032 = G__35042;
chunk__34983_35033 = G__35043;
count__34984_35034 = G__35044;
i__34985_35035 = G__35045;
continue;
} else {
var temp__5457__auto___35046 = cljs.core.seq.call(null,seq__34982_35032);
if(temp__5457__auto___35046){
var seq__34982_35047__$1 = temp__5457__auto___35046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34982_35047__$1)){
var c__4550__auto___35048 = cljs.core.chunk_first.call(null,seq__34982_35047__$1);
var G__35049 = cljs.core.chunk_rest.call(null,seq__34982_35047__$1);
var G__35050 = c__4550__auto___35048;
var G__35051 = cljs.core.count.call(null,c__4550__auto___35048);
var G__35052 = (0);
seq__34982_35032 = G__35049;
chunk__34983_35033 = G__35050;
count__34984_35034 = G__35051;
i__34985_35035 = G__35052;
continue;
} else {
var vec__35001_35053 = cljs.core.first.call(null,seq__34982_35047__$1);
var name_35054 = cljs.core.nth.call(null,vec__35001_35053,(0),null);
var map__35004_35055 = cljs.core.nth.call(null,vec__35001_35053,(1),null);
var map__35004_35056__$1 = (((((!((map__35004_35055 == null))))?(((((map__35004_35055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35004_35055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35004_35055):map__35004_35055);
var doc_35057 = cljs.core.get.call(null,map__35004_35056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35058 = cljs.core.get.call(null,map__35004_35056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35054);

cljs.core.println.call(null," ",arglists_35058);

if(cljs.core.truth_(doc_35057)){
cljs.core.println.call(null," ",doc_35057);
} else {
}


var G__35059 = cljs.core.next.call(null,seq__34982_35047__$1);
var G__35060 = null;
var G__35061 = (0);
var G__35062 = (0);
seq__34982_35032 = G__35059;
chunk__34983_35033 = G__35060;
count__34984_35034 = G__35061;
i__34985_35035 = G__35062;
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

var seq__35006 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35007 = null;
var count__35008 = (0);
var i__35009 = (0);
while(true){
if((i__35009 < count__35008)){
var role = cljs.core._nth.call(null,chunk__35007,i__35009);
var temp__5457__auto___35063__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35063__$1)){
var spec_35064 = temp__5457__auto___35063__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35064));
} else {
}


var G__35065 = seq__35006;
var G__35066 = chunk__35007;
var G__35067 = count__35008;
var G__35068 = (i__35009 + (1));
seq__35006 = G__35065;
chunk__35007 = G__35066;
count__35008 = G__35067;
i__35009 = G__35068;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__35006);
if(temp__5457__auto____$1){
var seq__35006__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35006__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35006__$1);
var G__35069 = cljs.core.chunk_rest.call(null,seq__35006__$1);
var G__35070 = c__4550__auto__;
var G__35071 = cljs.core.count.call(null,c__4550__auto__);
var G__35072 = (0);
seq__35006 = G__35069;
chunk__35007 = G__35070;
count__35008 = G__35071;
i__35009 = G__35072;
continue;
} else {
var role = cljs.core.first.call(null,seq__35006__$1);
var temp__5457__auto___35073__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___35073__$2)){
var spec_35074 = temp__5457__auto___35073__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_35074));
} else {
}


var G__35075 = cljs.core.next.call(null,seq__35006__$1);
var G__35076 = null;
var G__35077 = (0);
var G__35078 = (0);
seq__35006 = G__35075;
chunk__35007 = G__35076;
count__35008 = G__35077;
i__35009 = G__35078;
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
var G__35079 = cljs.core.conj.call(null,via,t);
var G__35080 = cljs.core.ex_cause.call(null,t);
via = G__35079;
t = G__35080;
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
var map__35083 = datafied_throwable;
var map__35083__$1 = (((((!((map__35083 == null))))?(((((map__35083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35083):map__35083);
var via = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__35083__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35084 = cljs.core.last.call(null,via);
var map__35084__$1 = (((((!((map__35084 == null))))?(((((map__35084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35084):map__35084);
var type = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__35084__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35085 = data;
var map__35085__$1 = (((((!((map__35085 == null))))?(((((map__35085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35085):map__35085);
var problems = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__35085__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35086 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__35086__$1 = (((((!((map__35086 == null))))?(((((map__35086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35086):map__35086);
var top_data = map__35086__$1;
var source = cljs.core.get.call(null,map__35086__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__35091 = phase;
var G__35091__$1 = (((G__35091 instanceof cljs.core.Keyword))?G__35091.fqn:null);
switch (G__35091__$1) {
case "read-source":
var map__35092 = data;
var map__35092__$1 = (((((!((map__35092 == null))))?(((((map__35092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35092):map__35092);
var line = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35092__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35094 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__35094__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35094,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35094);
var G__35094__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35094__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35094__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35094__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35094__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35095 = top_data;
var G__35095__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__35095,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35095);
var G__35095__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__35095__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35095__$1);
var G__35095__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35095__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35095__$2);
var G__35095__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35095__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35095__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35095__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35095__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35096 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35096,(0),null);
var method = cljs.core.nth.call(null,vec__35096,(1),null);
var file = cljs.core.nth.call(null,vec__35096,(2),null);
var line = cljs.core.nth.call(null,vec__35096,(3),null);
var G__35099 = top_data;
var G__35099__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__35099,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35099);
var G__35099__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__35099__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35099__$1);
var G__35099__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__35099__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35099__$2);
var G__35099__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__35099__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35099__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__35099__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35099__$4;
}

break;
case "execution":
var vec__35100 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__35100,(0),null);
var method = cljs.core.nth.call(null,vec__35100,(1),null);
var file = cljs.core.nth.call(null,vec__35100,(2),null);
var line = cljs.core.nth.call(null,vec__35100,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__35100,source__$1,method,file,line,G__35091,G__35091__$1,map__35083,map__35083__$1,via,trace,phase,map__35084,map__35084__$1,type,message,data,map__35085,map__35085__$1,problems,fn,caller,map__35086,map__35086__$1,top_data,source){
return (function (p1__35082_SHARP_){
var or__4131__auto__ = (p1__35082_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__35082_SHARP_);
}
});})(vec__35100,source__$1,method,file,line,G__35091,G__35091__$1,map__35083,map__35083__$1,via,trace,phase,map__35084,map__35084__$1,type,message,data,map__35085,map__35085__$1,problems,fn,caller,map__35086,map__35086__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__35103 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35103__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__35103,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35103);
var G__35103__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__35103__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35103__$1);
var G__35103__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__35103__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35103__$2);
var G__35103__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__35103__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35103__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__35103__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35103__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35091__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35107){
var map__35108 = p__35107;
var map__35108__$1 = (((((!((map__35108 == null))))?(((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var triage_data = map__35108__$1;
var phase = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__35110 = phase;
var G__35110__$1 = (((G__35110 instanceof cljs.core.Keyword))?G__35110.fqn:null);
switch (G__35110__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35111_35120 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35112_35121 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35113_35122 = true;
var _STAR_print_fn_STAR__temp_val__35114_35123 = ((function (_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35113_35122;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35114_35123;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,_STAR_print_fn_STAR__temp_val__35114_35123,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,_STAR_print_fn_STAR__temp_val__35114_35123,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35105_SHARP_){
return cljs.core.dissoc.call(null,p1__35105_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,_STAR_print_fn_STAR__temp_val__35114_35123,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35111_35120,_STAR_print_fn_STAR__orig_val__35112_35121,_STAR_print_newline_STAR__temp_val__35113_35122,_STAR_print_fn_STAR__temp_val__35114_35123,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35112_35121;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35111_35120;
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
var _STAR_print_newline_STAR__orig_val__35115_35124 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35116_35125 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35117_35126 = true;
var _STAR_print_fn_STAR__temp_val__35118_35127 = ((function (_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35117_35126;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35118_35127;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,_STAR_print_fn_STAR__temp_val__35118_35127,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,_STAR_print_fn_STAR__temp_val__35118_35127,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__35106_SHARP_){
return cljs.core.dissoc.call(null,p1__35106_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,_STAR_print_fn_STAR__temp_val__35118_35127,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__35115_35124,_STAR_print_fn_STAR__orig_val__35116_35125,_STAR_print_newline_STAR__temp_val__35117_35126,_STAR_print_fn_STAR__temp_val__35118_35127,sb__4661__auto__,G__35110,G__35110__$1,loc,class_name,simple_class,cause_type,format,map__35108,map__35108__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35116_35125;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35115_35124;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35110__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
