// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__10796__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10796 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10797__i = 0, G__10797__a = new Array(arguments.length -  0);
while (G__10797__i < G__10797__a.length) {G__10797__a[G__10797__i] = arguments[G__10797__i + 0]; ++G__10797__i;}
  args = new cljs.core.IndexedSeq(G__10797__a,0,null);
} 
return G__10796__delegate.call(this,args);};
G__10796.cljs$lang$maxFixedArity = 0;
G__10796.cljs$lang$applyTo = (function (arglist__10798){
var args = cljs.core.seq(arglist__10798);
return G__10796__delegate(args);
});
G__10796.cljs$core$IFn$_invoke$arity$variadic = G__10796__delegate;
return G__10796;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10799__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10800__i = 0, G__10800__a = new Array(arguments.length -  0);
while (G__10800__i < G__10800__a.length) {G__10800__a[G__10800__i] = arguments[G__10800__i + 0]; ++G__10800__i;}
  args = new cljs.core.IndexedSeq(G__10800__a,0,null);
} 
return G__10799__delegate.call(this,args);};
G__10799.cljs$lang$maxFixedArity = 0;
G__10799.cljs$lang$applyTo = (function (arglist__10801){
var args = cljs.core.seq(arglist__10801);
return G__10799__delegate(args);
});
G__10799.cljs$core$IFn$_invoke$arity$variadic = G__10799__delegate;
return G__10799;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map
