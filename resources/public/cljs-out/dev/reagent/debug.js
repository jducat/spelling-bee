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
var G__10752__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10753__i = 0, G__10753__a = new Array(arguments.length -  0);
while (G__10753__i < G__10753__a.length) {G__10753__a[G__10753__i] = arguments[G__10753__i + 0]; ++G__10753__i;}
  args = new cljs.core.IndexedSeq(G__10753__a,0,null);
} 
return G__10752__delegate.call(this,args);};
G__10752.cljs$lang$maxFixedArity = 0;
G__10752.cljs$lang$applyTo = (function (arglist__10754){
var args = cljs.core.seq(arglist__10754);
return G__10752__delegate(args);
});
G__10752.cljs$core$IFn$_invoke$arity$variadic = G__10752__delegate;
return G__10752;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__10755__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__10755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10756__i = 0, G__10756__a = new Array(arguments.length -  0);
while (G__10756__i < G__10756__a.length) {G__10756__a[G__10756__i] = arguments[G__10756__i + 0]; ++G__10756__i;}
  args = new cljs.core.IndexedSeq(G__10756__a,0,null);
} 
return G__10755__delegate.call(this,args);};
G__10755.cljs$lang$maxFixedArity = 0;
G__10755.cljs$lang$applyTo = (function (arglist__10757){
var args = cljs.core.seq(arglist__10757);
return G__10755__delegate(args);
});
G__10755.cljs$core$IFn$_invoke$arity$variadic = G__10755__delegate;
return G__10755;
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
