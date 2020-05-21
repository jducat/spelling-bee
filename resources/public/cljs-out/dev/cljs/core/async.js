// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15901 = arguments.length;
switch (G__15901) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15902 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15902 = (function (f,blockable,meta15903){
this.f = f;
this.blockable = blockable;
this.meta15903 = meta15903;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15904,meta15903__$1){
var self__ = this;
var _15904__$1 = this;
return (new cljs.core.async.t_cljs$core$async15902(self__.f,self__.blockable,meta15903__$1));
});

cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15904){
var self__ = this;
var _15904__$1 = this;
return self__.meta15903;
});

cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async15902.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async15902.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15903","meta15903",1281756573,null)], null);
});

cljs.core.async.t_cljs$core$async15902.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15902.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15902";

cljs.core.async.t_cljs$core$async15902.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15902");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15902.
 */
cljs.core.async.__GT_t_cljs$core$async15902 = (function cljs$core$async$__GT_t_cljs$core$async15902(f__$1,blockable__$1,meta15903){
return (new cljs.core.async.t_cljs$core$async15902(f__$1,blockable__$1,meta15903));
});

}

return (new cljs.core.async.t_cljs$core$async15902(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15908 = arguments.length;
switch (G__15908) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15911 = arguments.length;
switch (G__15911) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15914 = arguments.length;
switch (G__15914) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_15916 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_15916);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_15916,ret){
return (function (){
return fn1.call(null,val_15916);
});})(val_15916,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15918 = arguments.length;
switch (G__15918) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___15920 = n;
var x_15921 = (0);
while(true){
if((x_15921 < n__4607__auto___15920)){
(a[x_15921] = x_15921);

var G__15922 = (x_15921 + (1));
x_15921 = G__15922;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15923 = (function (flag,meta15924){
this.flag = flag;
this.meta15924 = meta15924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15925,meta15924__$1){
var self__ = this;
var _15925__$1 = this;
return (new cljs.core.async.t_cljs$core$async15923(self__.flag,meta15924__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15925){
var self__ = this;
var _15925__$1 = this;
return self__.meta15924;
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15924","meta15924",-1107486375,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async15923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15923";

cljs.core.async.t_cljs$core$async15923.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15923");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15923.
 */
cljs.core.async.__GT_t_cljs$core$async15923 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async15923(flag__$1,meta15924){
return (new cljs.core.async.t_cljs$core$async15923(flag__$1,meta15924));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async15923(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15926 = (function (flag,cb,meta15927){
this.flag = flag;
this.cb = cb;
this.meta15927 = meta15927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15928,meta15927__$1){
var self__ = this;
var _15928__$1 = this;
return (new cljs.core.async.t_cljs$core$async15926(self__.flag,self__.cb,meta15927__$1));
});

cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15928){
var self__ = this;
var _15928__$1 = this;
return self__.meta15927;
});

cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async15926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async15926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15927","meta15927",-244975959,null)], null);
});

cljs.core.async.t_cljs$core$async15926.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15926";

cljs.core.async.t_cljs$core$async15926.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async15926");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15926.
 */
cljs.core.async.__GT_t_cljs$core$async15926 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async15926(flag__$1,cb__$1,meta15927){
return (new cljs.core.async.t_cljs$core$async15926(flag__$1,cb__$1,meta15927));
});

}

return (new cljs.core.async.t_cljs$core$async15926(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15929_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15929_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15930_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15930_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__15931 = (i + (1));
i = G__15931;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___15937 = arguments.length;
var i__4731__auto___15938 = (0);
while(true){
if((i__4731__auto___15938 < len__4730__auto___15937)){
args__4736__auto__.push((arguments[i__4731__auto___15938]));

var G__15939 = (i__4731__auto___15938 + (1));
i__4731__auto___15938 = G__15939;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15934){
var map__15935 = p__15934;
var map__15935__$1 = (((((!((map__15935 == null))))?(((((map__15935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15935):map__15935);
var opts = map__15935__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15932){
var G__15933 = cljs.core.first.call(null,seq15932);
var seq15932__$1 = cljs.core.next.call(null,seq15932);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15933,seq15932__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15941 = arguments.length;
switch (G__15941) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13924__auto___15988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___15988){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___15988){
return (function (state_15965){
var state_val_15966 = (state_15965[(1)]);
if((state_val_15966 === (7))){
var inst_15961 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15967_15989 = state_15965__$1;
(statearr_15967_15989[(2)] = inst_15961);

(statearr_15967_15989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (1))){
var state_15965__$1 = state_15965;
var statearr_15968_15990 = state_15965__$1;
(statearr_15968_15990[(2)] = null);

(statearr_15968_15990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (4))){
var inst_15944 = (state_15965[(7)]);
var inst_15944__$1 = (state_15965[(2)]);
var inst_15945 = (inst_15944__$1 == null);
var state_15965__$1 = (function (){var statearr_15969 = state_15965;
(statearr_15969[(7)] = inst_15944__$1);

return statearr_15969;
})();
if(cljs.core.truth_(inst_15945)){
var statearr_15970_15991 = state_15965__$1;
(statearr_15970_15991[(1)] = (5));

} else {
var statearr_15971_15992 = state_15965__$1;
(statearr_15971_15992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (13))){
var state_15965__$1 = state_15965;
var statearr_15972_15993 = state_15965__$1;
(statearr_15972_15993[(2)] = null);

(statearr_15972_15993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (6))){
var inst_15944 = (state_15965[(7)]);
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15965__$1,(11),to,inst_15944);
} else {
if((state_val_15966 === (3))){
var inst_15963 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15965__$1,inst_15963);
} else {
if((state_val_15966 === (12))){
var state_15965__$1 = state_15965;
var statearr_15973_15994 = state_15965__$1;
(statearr_15973_15994[(2)] = null);

(statearr_15973_15994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (2))){
var state_15965__$1 = state_15965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15965__$1,(4),from);
} else {
if((state_val_15966 === (11))){
var inst_15954 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
if(cljs.core.truth_(inst_15954)){
var statearr_15974_15995 = state_15965__$1;
(statearr_15974_15995[(1)] = (12));

} else {
var statearr_15975_15996 = state_15965__$1;
(statearr_15975_15996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (9))){
var state_15965__$1 = state_15965;
var statearr_15976_15997 = state_15965__$1;
(statearr_15976_15997[(2)] = null);

(statearr_15976_15997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (5))){
var state_15965__$1 = state_15965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15977_15998 = state_15965__$1;
(statearr_15977_15998[(1)] = (8));

} else {
var statearr_15978_15999 = state_15965__$1;
(statearr_15978_15999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (14))){
var inst_15959 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15979_16000 = state_15965__$1;
(statearr_15979_16000[(2)] = inst_15959);

(statearr_15979_16000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (10))){
var inst_15951 = (state_15965[(2)]);
var state_15965__$1 = state_15965;
var statearr_15980_16001 = state_15965__$1;
(statearr_15980_16001[(2)] = inst_15951);

(statearr_15980_16001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15966 === (8))){
var inst_15948 = cljs.core.async.close_BANG_.call(null,to);
var state_15965__$1 = state_15965;
var statearr_15981_16002 = state_15965__$1;
(statearr_15981_16002[(2)] = inst_15948);

(statearr_15981_16002[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__13924__auto___15988))
;
return ((function (switch__13799__auto__,c__13924__auto___15988){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_15982 = [null,null,null,null,null,null,null,null];
(statearr_15982[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_15982[(1)] = (1));

return statearr_15982;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_15965){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_15965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e15983){var ex__13803__auto__ = e15983;
var statearr_15984_16003 = state_15965;
(statearr_15984_16003[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_15965[(4)]))){
var statearr_15985_16004 = state_15965;
(statearr_15985_16004[(1)] = cljs.core.first.call(null,(state_15965[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16005 = state_15965;
state_15965 = G__16005;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_15965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_15965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___15988))
})();
var state__13926__auto__ = (function (){var statearr_15986 = f__13925__auto__.call(null);
(statearr_15986[(6)] = c__13924__auto___15988);

return statearr_15986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___15988))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__16006){
var vec__16007 = p__16006;
var v = cljs.core.nth.call(null,vec__16007,(0),null);
var p = cljs.core.nth.call(null,vec__16007,(1),null);
var job = vec__16007;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__13924__auto___16183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results){
return (function (state_16014){
var state_val_16015 = (state_16014[(1)]);
if((state_val_16015 === (1))){
var state_16014__$1 = state_16014;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16014__$1,(2),res,v);
} else {
if((state_val_16015 === (2))){
var inst_16011 = (state_16014[(2)]);
var inst_16012 = cljs.core.async.close_BANG_.call(null,res);
var state_16014__$1 = (function (){var statearr_16016 = state_16014;
(statearr_16016[(7)] = inst_16011);

return statearr_16016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16014__$1,inst_16012);
} else {
return null;
}
}
});})(c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results))
;
return ((function (switch__13799__auto__,c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_16017 = [null,null,null,null,null,null,null,null];
(statearr_16017[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__);

(statearr_16017[(1)] = (1));

return statearr_16017;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1 = (function (state_16014){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16014);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16018){var ex__13803__auto__ = e16018;
var statearr_16019_16184 = state_16014;
(statearr_16019_16184[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16014[(4)]))){
var statearr_16020_16185 = state_16014;
(statearr_16020_16185[(1)] = cljs.core.first.call(null,(state_16014[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16186 = state_16014;
state_16014 = G__16186;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = function(state_16014){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1.call(this,state_16014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results))
})();
var state__13926__auto__ = (function (){var statearr_16021 = f__13925__auto__.call(null);
(statearr_16021[(6)] = c__13924__auto___16183);

return statearr_16021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___16183,res,vec__16007,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16022){
var vec__16023 = p__16022;
var v = cljs.core.nth.call(null,vec__16023,(0),null);
var p = cljs.core.nth.call(null,vec__16023,(1),null);
var job = vec__16023;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___16187 = n;
var __16188 = (0);
while(true){
if((__16188 < n__4607__auto___16187)){
var G__16026_16189 = type;
var G__16026_16190__$1 = (((G__16026_16189 instanceof cljs.core.Keyword))?G__16026_16189.fqn:null);
switch (G__16026_16190__$1) {
case "compute":
var c__13924__auto___16192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16188,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (__16188,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function (state_16039){
var state_val_16040 = (state_16039[(1)]);
if((state_val_16040 === (1))){
var state_16039__$1 = state_16039;
var statearr_16041_16193 = state_16039__$1;
(statearr_16041_16193[(2)] = null);

(statearr_16041_16193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (2))){
var state_16039__$1 = state_16039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16039__$1,(4),jobs);
} else {
if((state_val_16040 === (3))){
var inst_16037 = (state_16039[(2)]);
var state_16039__$1 = state_16039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16039__$1,inst_16037);
} else {
if((state_val_16040 === (4))){
var inst_16029 = (state_16039[(2)]);
var inst_16030 = process.call(null,inst_16029);
var state_16039__$1 = state_16039;
if(cljs.core.truth_(inst_16030)){
var statearr_16042_16194 = state_16039__$1;
(statearr_16042_16194[(1)] = (5));

} else {
var statearr_16043_16195 = state_16039__$1;
(statearr_16043_16195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (5))){
var state_16039__$1 = state_16039;
var statearr_16044_16196 = state_16039__$1;
(statearr_16044_16196[(2)] = null);

(statearr_16044_16196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (6))){
var state_16039__$1 = state_16039;
var statearr_16045_16197 = state_16039__$1;
(statearr_16045_16197[(2)] = null);

(statearr_16045_16197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16040 === (7))){
var inst_16035 = (state_16039[(2)]);
var state_16039__$1 = state_16039;
var statearr_16046_16198 = state_16039__$1;
(statearr_16046_16198[(2)] = inst_16035);

(statearr_16046_16198[(1)] = (3));


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
});})(__16188,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
;
return ((function (__16188,switch__13799__auto__,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_16047 = [null,null,null,null,null,null,null];
(statearr_16047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__);

(statearr_16047[(1)] = (1));

return statearr_16047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1 = (function (state_16039){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16048){var ex__13803__auto__ = e16048;
var statearr_16049_16199 = state_16039;
(statearr_16049_16199[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16039[(4)]))){
var statearr_16050_16200 = state_16039;
(statearr_16050_16200[(1)] = cljs.core.first.call(null,(state_16039[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16201 = state_16039;
state_16039 = G__16201;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = function(state_16039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1.call(this,state_16039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__;
})()
;})(__16188,switch__13799__auto__,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
})();
var state__13926__auto__ = (function (){var statearr_16051 = f__13925__auto__.call(null);
(statearr_16051[(6)] = c__13924__auto___16192);

return statearr_16051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(__16188,c__13924__auto___16192,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
);


break;
case "async":
var c__13924__auto___16202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16188,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (__16188,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function (state_16064){
var state_val_16065 = (state_16064[(1)]);
if((state_val_16065 === (1))){
var state_16064__$1 = state_16064;
var statearr_16066_16203 = state_16064__$1;
(statearr_16066_16203[(2)] = null);

(statearr_16066_16203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (2))){
var state_16064__$1 = state_16064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16064__$1,(4),jobs);
} else {
if((state_val_16065 === (3))){
var inst_16062 = (state_16064[(2)]);
var state_16064__$1 = state_16064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16064__$1,inst_16062);
} else {
if((state_val_16065 === (4))){
var inst_16054 = (state_16064[(2)]);
var inst_16055 = async.call(null,inst_16054);
var state_16064__$1 = state_16064;
if(cljs.core.truth_(inst_16055)){
var statearr_16067_16204 = state_16064__$1;
(statearr_16067_16204[(1)] = (5));

} else {
var statearr_16068_16205 = state_16064__$1;
(statearr_16068_16205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (5))){
var state_16064__$1 = state_16064;
var statearr_16069_16206 = state_16064__$1;
(statearr_16069_16206[(2)] = null);

(statearr_16069_16206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (6))){
var state_16064__$1 = state_16064;
var statearr_16070_16207 = state_16064__$1;
(statearr_16070_16207[(2)] = null);

(statearr_16070_16207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16065 === (7))){
var inst_16060 = (state_16064[(2)]);
var state_16064__$1 = state_16064;
var statearr_16071_16208 = state_16064__$1;
(statearr_16071_16208[(2)] = inst_16060);

(statearr_16071_16208[(1)] = (3));


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
});})(__16188,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
;
return ((function (__16188,switch__13799__auto__,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_16072 = [null,null,null,null,null,null,null];
(statearr_16072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__);

(statearr_16072[(1)] = (1));

return statearr_16072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1 = (function (state_16064){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16073){var ex__13803__auto__ = e16073;
var statearr_16074_16209 = state_16064;
(statearr_16074_16209[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16064[(4)]))){
var statearr_16075_16210 = state_16064;
(statearr_16075_16210[(1)] = cljs.core.first.call(null,(state_16064[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16211 = state_16064;
state_16064 = G__16211;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = function(state_16064){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1.call(this,state_16064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__;
})()
;})(__16188,switch__13799__auto__,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
})();
var state__13926__auto__ = (function (){var statearr_16076 = f__13925__auto__.call(null);
(statearr_16076[(6)] = c__13924__auto___16202);

return statearr_16076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(__16188,c__13924__auto___16202,G__16026_16189,G__16026_16190__$1,n__4607__auto___16187,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16026_16190__$1)].join('')));

}

var G__16212 = (__16188 + (1));
__16188 = G__16212;
continue;
} else {
}
break;
}

var c__13924__auto___16213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___16213,jobs,results,process,async){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___16213,jobs,results,process,async){
return (function (state_16098){
var state_val_16099 = (state_16098[(1)]);
if((state_val_16099 === (1))){
var state_16098__$1 = state_16098;
var statearr_16100_16214 = state_16098__$1;
(statearr_16100_16214[(2)] = null);

(statearr_16100_16214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (2))){
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16098__$1,(4),from);
} else {
if((state_val_16099 === (3))){
var inst_16096 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16098__$1,inst_16096);
} else {
if((state_val_16099 === (4))){
var inst_16079 = (state_16098[(7)]);
var inst_16079__$1 = (state_16098[(2)]);
var inst_16080 = (inst_16079__$1 == null);
var state_16098__$1 = (function (){var statearr_16101 = state_16098;
(statearr_16101[(7)] = inst_16079__$1);

return statearr_16101;
})();
if(cljs.core.truth_(inst_16080)){
var statearr_16102_16215 = state_16098__$1;
(statearr_16102_16215[(1)] = (5));

} else {
var statearr_16103_16216 = state_16098__$1;
(statearr_16103_16216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (5))){
var inst_16082 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16098__$1 = state_16098;
var statearr_16104_16217 = state_16098__$1;
(statearr_16104_16217[(2)] = inst_16082);

(statearr_16104_16217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (6))){
var inst_16079 = (state_16098[(7)]);
var inst_16084 = (state_16098[(8)]);
var inst_16084__$1 = cljs.core.async.chan.call(null,(1));
var inst_16085 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16086 = [inst_16079,inst_16084__$1];
var inst_16087 = (new cljs.core.PersistentVector(null,2,(5),inst_16085,inst_16086,null));
var state_16098__$1 = (function (){var statearr_16105 = state_16098;
(statearr_16105[(8)] = inst_16084__$1);

return statearr_16105;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16098__$1,(8),jobs,inst_16087);
} else {
if((state_val_16099 === (7))){
var inst_16094 = (state_16098[(2)]);
var state_16098__$1 = state_16098;
var statearr_16106_16218 = state_16098__$1;
(statearr_16106_16218[(2)] = inst_16094);

(statearr_16106_16218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16099 === (8))){
var inst_16084 = (state_16098[(8)]);
var inst_16089 = (state_16098[(2)]);
var state_16098__$1 = (function (){var statearr_16107 = state_16098;
(statearr_16107[(9)] = inst_16089);

return statearr_16107;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16098__$1,(9),results,inst_16084);
} else {
if((state_val_16099 === (9))){
var inst_16091 = (state_16098[(2)]);
var state_16098__$1 = (function (){var statearr_16108 = state_16098;
(statearr_16108[(10)] = inst_16091);

return statearr_16108;
})();
var statearr_16109_16219 = state_16098__$1;
(statearr_16109_16219[(2)] = null);

(statearr_16109_16219[(1)] = (2));


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
}
}
});})(c__13924__auto___16213,jobs,results,process,async))
;
return ((function (switch__13799__auto__,c__13924__auto___16213,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_16110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__);

(statearr_16110[(1)] = (1));

return statearr_16110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1 = (function (state_16098){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16098);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16111){var ex__13803__auto__ = e16111;
var statearr_16112_16220 = state_16098;
(statearr_16112_16220[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16098[(4)]))){
var statearr_16113_16221 = state_16098;
(statearr_16113_16221[(1)] = cljs.core.first.call(null,(state_16098[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16222 = state_16098;
state_16098 = G__16222;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = function(state_16098){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1.call(this,state_16098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___16213,jobs,results,process,async))
})();
var state__13926__auto__ = (function (){var statearr_16114 = f__13925__auto__.call(null);
(statearr_16114[(6)] = c__13924__auto___16213);

return statearr_16114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___16213,jobs,results,process,async))
);


var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__,jobs,results,process,async){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__,jobs,results,process,async){
return (function (state_16152){
var state_val_16153 = (state_16152[(1)]);
if((state_val_16153 === (7))){
var inst_16148 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
var statearr_16154_16223 = state_16152__$1;
(statearr_16154_16223[(2)] = inst_16148);

(statearr_16154_16223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (20))){
var state_16152__$1 = state_16152;
var statearr_16155_16224 = state_16152__$1;
(statearr_16155_16224[(2)] = null);

(statearr_16155_16224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (1))){
var state_16152__$1 = state_16152;
var statearr_16156_16225 = state_16152__$1;
(statearr_16156_16225[(2)] = null);

(statearr_16156_16225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (4))){
var inst_16117 = (state_16152[(7)]);
var inst_16117__$1 = (state_16152[(2)]);
var inst_16118 = (inst_16117__$1 == null);
var state_16152__$1 = (function (){var statearr_16157 = state_16152;
(statearr_16157[(7)] = inst_16117__$1);

return statearr_16157;
})();
if(cljs.core.truth_(inst_16118)){
var statearr_16158_16226 = state_16152__$1;
(statearr_16158_16226[(1)] = (5));

} else {
var statearr_16159_16227 = state_16152__$1;
(statearr_16159_16227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (15))){
var inst_16130 = (state_16152[(8)]);
var state_16152__$1 = state_16152;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16152__$1,(18),to,inst_16130);
} else {
if((state_val_16153 === (21))){
var inst_16143 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
var statearr_16160_16228 = state_16152__$1;
(statearr_16160_16228[(2)] = inst_16143);

(statearr_16160_16228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (13))){
var inst_16145 = (state_16152[(2)]);
var state_16152__$1 = (function (){var statearr_16161 = state_16152;
(statearr_16161[(9)] = inst_16145);

return statearr_16161;
})();
var statearr_16162_16229 = state_16152__$1;
(statearr_16162_16229[(2)] = null);

(statearr_16162_16229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (6))){
var inst_16117 = (state_16152[(7)]);
var state_16152__$1 = state_16152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16152__$1,(11),inst_16117);
} else {
if((state_val_16153 === (17))){
var inst_16138 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
if(cljs.core.truth_(inst_16138)){
var statearr_16163_16230 = state_16152__$1;
(statearr_16163_16230[(1)] = (19));

} else {
var statearr_16164_16231 = state_16152__$1;
(statearr_16164_16231[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (3))){
var inst_16150 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16152__$1,inst_16150);
} else {
if((state_val_16153 === (12))){
var inst_16127 = (state_16152[(10)]);
var state_16152__$1 = state_16152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16152__$1,(14),inst_16127);
} else {
if((state_val_16153 === (2))){
var state_16152__$1 = state_16152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16152__$1,(4),results);
} else {
if((state_val_16153 === (19))){
var state_16152__$1 = state_16152;
var statearr_16165_16232 = state_16152__$1;
(statearr_16165_16232[(2)] = null);

(statearr_16165_16232[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (11))){
var inst_16127 = (state_16152[(2)]);
var state_16152__$1 = (function (){var statearr_16166 = state_16152;
(statearr_16166[(10)] = inst_16127);

return statearr_16166;
})();
var statearr_16167_16233 = state_16152__$1;
(statearr_16167_16233[(2)] = null);

(statearr_16167_16233[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (9))){
var state_16152__$1 = state_16152;
var statearr_16168_16234 = state_16152__$1;
(statearr_16168_16234[(2)] = null);

(statearr_16168_16234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (5))){
var state_16152__$1 = state_16152;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16169_16235 = state_16152__$1;
(statearr_16169_16235[(1)] = (8));

} else {
var statearr_16170_16236 = state_16152__$1;
(statearr_16170_16236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (14))){
var inst_16130 = (state_16152[(8)]);
var inst_16132 = (state_16152[(11)]);
var inst_16130__$1 = (state_16152[(2)]);
var inst_16131 = (inst_16130__$1 == null);
var inst_16132__$1 = cljs.core.not.call(null,inst_16131);
var state_16152__$1 = (function (){var statearr_16171 = state_16152;
(statearr_16171[(8)] = inst_16130__$1);

(statearr_16171[(11)] = inst_16132__$1);

return statearr_16171;
})();
if(inst_16132__$1){
var statearr_16172_16237 = state_16152__$1;
(statearr_16172_16237[(1)] = (15));

} else {
var statearr_16173_16238 = state_16152__$1;
(statearr_16173_16238[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (16))){
var inst_16132 = (state_16152[(11)]);
var state_16152__$1 = state_16152;
var statearr_16174_16239 = state_16152__$1;
(statearr_16174_16239[(2)] = inst_16132);

(statearr_16174_16239[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (10))){
var inst_16124 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
var statearr_16175_16240 = state_16152__$1;
(statearr_16175_16240[(2)] = inst_16124);

(statearr_16175_16240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (18))){
var inst_16135 = (state_16152[(2)]);
var state_16152__$1 = state_16152;
var statearr_16176_16241 = state_16152__$1;
(statearr_16176_16241[(2)] = inst_16135);

(statearr_16176_16241[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16153 === (8))){
var inst_16121 = cljs.core.async.close_BANG_.call(null,to);
var state_16152__$1 = state_16152;
var statearr_16177_16242 = state_16152__$1;
(statearr_16177_16242[(2)] = inst_16121);

(statearr_16177_16242[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto__,jobs,results,process,async))
;
return ((function (switch__13799__auto__,c__13924__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_16178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__);

(statearr_16178[(1)] = (1));

return statearr_16178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1 = (function (state_16152){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16179){var ex__13803__auto__ = e16179;
var statearr_16180_16243 = state_16152;
(statearr_16180_16243[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16152[(4)]))){
var statearr_16181_16244 = state_16152;
(statearr_16181_16244[(1)] = cljs.core.first.call(null,(state_16152[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16245 = state_16152;
state_16152 = G__16245;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__ = function(state_16152){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1.call(this,state_16152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__,jobs,results,process,async))
})();
var state__13926__auto__ = (function (){var statearr_16182 = f__13925__auto__.call(null);
(statearr_16182[(6)] = c__13924__auto__);

return statearr_16182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__,jobs,results,process,async))
);

return c__13924__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__16247 = arguments.length;
switch (G__16247) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__16250 = arguments.length;
switch (G__16250) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__16253 = arguments.length;
switch (G__16253) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__13924__auto___16303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___16303,tc,fc){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___16303,tc,fc){
return (function (state_16279){
var state_val_16280 = (state_16279[(1)]);
if((state_val_16280 === (7))){
var inst_16275 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16281_16304 = state_16279__$1;
(statearr_16281_16304[(2)] = inst_16275);

(statearr_16281_16304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (1))){
var state_16279__$1 = state_16279;
var statearr_16282_16305 = state_16279__$1;
(statearr_16282_16305[(2)] = null);

(statearr_16282_16305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (4))){
var inst_16256 = (state_16279[(7)]);
var inst_16256__$1 = (state_16279[(2)]);
var inst_16257 = (inst_16256__$1 == null);
var state_16279__$1 = (function (){var statearr_16283 = state_16279;
(statearr_16283[(7)] = inst_16256__$1);

return statearr_16283;
})();
if(cljs.core.truth_(inst_16257)){
var statearr_16284_16306 = state_16279__$1;
(statearr_16284_16306[(1)] = (5));

} else {
var statearr_16285_16307 = state_16279__$1;
(statearr_16285_16307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (13))){
var state_16279__$1 = state_16279;
var statearr_16286_16308 = state_16279__$1;
(statearr_16286_16308[(2)] = null);

(statearr_16286_16308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (6))){
var inst_16256 = (state_16279[(7)]);
var inst_16262 = p.call(null,inst_16256);
var state_16279__$1 = state_16279;
if(cljs.core.truth_(inst_16262)){
var statearr_16287_16309 = state_16279__$1;
(statearr_16287_16309[(1)] = (9));

} else {
var statearr_16288_16310 = state_16279__$1;
(statearr_16288_16310[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (3))){
var inst_16277 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16279__$1,inst_16277);
} else {
if((state_val_16280 === (12))){
var state_16279__$1 = state_16279;
var statearr_16289_16311 = state_16279__$1;
(statearr_16289_16311[(2)] = null);

(statearr_16289_16311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (2))){
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16279__$1,(4),ch);
} else {
if((state_val_16280 === (11))){
var inst_16256 = (state_16279[(7)]);
var inst_16266 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16279__$1,(8),inst_16266,inst_16256);
} else {
if((state_val_16280 === (9))){
var state_16279__$1 = state_16279;
var statearr_16290_16312 = state_16279__$1;
(statearr_16290_16312[(2)] = tc);

(statearr_16290_16312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (5))){
var inst_16259 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16260 = cljs.core.async.close_BANG_.call(null,fc);
var state_16279__$1 = (function (){var statearr_16291 = state_16279;
(statearr_16291[(8)] = inst_16259);

return statearr_16291;
})();
var statearr_16292_16313 = state_16279__$1;
(statearr_16292_16313[(2)] = inst_16260);

(statearr_16292_16313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (14))){
var inst_16273 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
var statearr_16293_16314 = state_16279__$1;
(statearr_16293_16314[(2)] = inst_16273);

(statearr_16293_16314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (10))){
var state_16279__$1 = state_16279;
var statearr_16294_16315 = state_16279__$1;
(statearr_16294_16315[(2)] = fc);

(statearr_16294_16315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16280 === (8))){
var inst_16268 = (state_16279[(2)]);
var state_16279__$1 = state_16279;
if(cljs.core.truth_(inst_16268)){
var statearr_16295_16316 = state_16279__$1;
(statearr_16295_16316[(1)] = (12));

} else {
var statearr_16296_16317 = state_16279__$1;
(statearr_16296_16317[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__13924__auto___16303,tc,fc))
;
return ((function (switch__13799__auto__,c__13924__auto___16303,tc,fc){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_16297 = [null,null,null,null,null,null,null,null,null];
(statearr_16297[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_16297[(1)] = (1));

return statearr_16297;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_16279){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16279);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16298){var ex__13803__auto__ = e16298;
var statearr_16299_16318 = state_16279;
(statearr_16299_16318[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16279[(4)]))){
var statearr_16300_16319 = state_16279;
(statearr_16300_16319[(1)] = cljs.core.first.call(null,(state_16279[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16320 = state_16279;
state_16279 = G__16320;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_16279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_16279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___16303,tc,fc))
})();
var state__13926__auto__ = (function (){var statearr_16301 = f__13925__auto__.call(null);
(statearr_16301[(6)] = c__13924__auto___16303);

return statearr_16301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___16303,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_16342){
var state_val_16343 = (state_16342[(1)]);
if((state_val_16343 === (7))){
var inst_16338 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
var statearr_16344_16363 = state_16342__$1;
(statearr_16344_16363[(2)] = inst_16338);

(statearr_16344_16363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (1))){
var inst_16321 = init;
var inst_16322 = inst_16321;
var state_16342__$1 = (function (){var statearr_16345 = state_16342;
(statearr_16345[(7)] = inst_16322);

return statearr_16345;
})();
var statearr_16346_16364 = state_16342__$1;
(statearr_16346_16364[(2)] = null);

(statearr_16346_16364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (4))){
var inst_16325 = (state_16342[(8)]);
var inst_16325__$1 = (state_16342[(2)]);
var inst_16326 = (inst_16325__$1 == null);
var state_16342__$1 = (function (){var statearr_16347 = state_16342;
(statearr_16347[(8)] = inst_16325__$1);

return statearr_16347;
})();
if(cljs.core.truth_(inst_16326)){
var statearr_16348_16365 = state_16342__$1;
(statearr_16348_16365[(1)] = (5));

} else {
var statearr_16349_16366 = state_16342__$1;
(statearr_16349_16366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (6))){
var inst_16329 = (state_16342[(9)]);
var inst_16325 = (state_16342[(8)]);
var inst_16322 = (state_16342[(7)]);
var inst_16329__$1 = f.call(null,inst_16322,inst_16325);
var inst_16330 = cljs.core.reduced_QMARK_.call(null,inst_16329__$1);
var state_16342__$1 = (function (){var statearr_16350 = state_16342;
(statearr_16350[(9)] = inst_16329__$1);

return statearr_16350;
})();
if(inst_16330){
var statearr_16351_16367 = state_16342__$1;
(statearr_16351_16367[(1)] = (8));

} else {
var statearr_16352_16368 = state_16342__$1;
(statearr_16352_16368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (3))){
var inst_16340 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16342__$1,inst_16340);
} else {
if((state_val_16343 === (2))){
var state_16342__$1 = state_16342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16342__$1,(4),ch);
} else {
if((state_val_16343 === (9))){
var inst_16329 = (state_16342[(9)]);
var inst_16322 = inst_16329;
var state_16342__$1 = (function (){var statearr_16353 = state_16342;
(statearr_16353[(7)] = inst_16322);

return statearr_16353;
})();
var statearr_16354_16369 = state_16342__$1;
(statearr_16354_16369[(2)] = null);

(statearr_16354_16369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (5))){
var inst_16322 = (state_16342[(7)]);
var state_16342__$1 = state_16342;
var statearr_16355_16370 = state_16342__$1;
(statearr_16355_16370[(2)] = inst_16322);

(statearr_16355_16370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (10))){
var inst_16336 = (state_16342[(2)]);
var state_16342__$1 = state_16342;
var statearr_16356_16371 = state_16342__$1;
(statearr_16356_16371[(2)] = inst_16336);

(statearr_16356_16371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16343 === (8))){
var inst_16329 = (state_16342[(9)]);
var inst_16332 = cljs.core.deref.call(null,inst_16329);
var state_16342__$1 = state_16342;
var statearr_16357_16372 = state_16342__$1;
(statearr_16357_16372[(2)] = inst_16332);

(statearr_16357_16372[(1)] = (10));


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
}
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13800__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13800__auto____0 = (function (){
var statearr_16358 = [null,null,null,null,null,null,null,null,null,null];
(statearr_16358[(0)] = cljs$core$async$reduce_$_state_machine__13800__auto__);

(statearr_16358[(1)] = (1));

return statearr_16358;
});
var cljs$core$async$reduce_$_state_machine__13800__auto____1 = (function (state_16342){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16359){var ex__13803__auto__ = e16359;
var statearr_16360_16373 = state_16342;
(statearr_16360_16373[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16342[(4)]))){
var statearr_16361_16374 = state_16342;
(statearr_16361_16374[(1)] = cljs.core.first.call(null,(state_16342[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16375 = state_16342;
state_16342 = G__16375;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13800__auto__ = function(state_16342){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13800__auto____1.call(this,state_16342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13800__auto____0;
cljs$core$async$reduce_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13800__auto____1;
return cljs$core$async$reduce_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_16362 = f__13925__auto__.call(null);
(statearr_16362[(6)] = c__13924__auto__);

return statearr_16362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__,f__$1){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__,f__$1){
return (function (state_16381){
var state_val_16382 = (state_16381[(1)]);
if((state_val_16382 === (1))){
var inst_16376 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16381__$1,(2),inst_16376);
} else {
if((state_val_16382 === (2))){
var inst_16378 = (state_16381[(2)]);
var inst_16379 = f__$1.call(null,inst_16378);
var state_16381__$1 = state_16381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16381__$1,inst_16379);
} else {
return null;
}
}
});})(c__13924__auto__,f__$1))
;
return ((function (switch__13799__auto__,c__13924__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13800__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13800__auto____0 = (function (){
var statearr_16383 = [null,null,null,null,null,null,null];
(statearr_16383[(0)] = cljs$core$async$transduce_$_state_machine__13800__auto__);

(statearr_16383[(1)] = (1));

return statearr_16383;
});
var cljs$core$async$transduce_$_state_machine__13800__auto____1 = (function (state_16381){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16384){var ex__13803__auto__ = e16384;
var statearr_16385_16388 = state_16381;
(statearr_16385_16388[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16381[(4)]))){
var statearr_16386_16389 = state_16381;
(statearr_16386_16389[(1)] = cljs.core.first.call(null,(state_16381[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16390 = state_16381;
state_16381 = G__16390;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13800__auto__ = function(state_16381){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13800__auto____1.call(this,state_16381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13800__auto____0;
cljs$core$async$transduce_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13800__auto____1;
return cljs$core$async$transduce_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__,f__$1))
})();
var state__13926__auto__ = (function (){var statearr_16387 = f__13925__auto__.call(null);
(statearr_16387[(6)] = c__13924__auto__);

return statearr_16387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__,f__$1))
);

return c__13924__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16392 = arguments.length;
switch (G__16392) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_16417){
var state_val_16418 = (state_16417[(1)]);
if((state_val_16418 === (7))){
var inst_16399 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
var statearr_16419_16441 = state_16417__$1;
(statearr_16419_16441[(2)] = inst_16399);

(statearr_16419_16441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (1))){
var inst_16393 = cljs.core.seq.call(null,coll);
var inst_16394 = inst_16393;
var state_16417__$1 = (function (){var statearr_16420 = state_16417;
(statearr_16420[(7)] = inst_16394);

return statearr_16420;
})();
var statearr_16421_16442 = state_16417__$1;
(statearr_16421_16442[(2)] = null);

(statearr_16421_16442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (4))){
var inst_16394 = (state_16417[(7)]);
var inst_16397 = cljs.core.first.call(null,inst_16394);
var state_16417__$1 = state_16417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16417__$1,(7),ch,inst_16397);
} else {
if((state_val_16418 === (13))){
var inst_16411 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
var statearr_16422_16443 = state_16417__$1;
(statearr_16422_16443[(2)] = inst_16411);

(statearr_16422_16443[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (6))){
var inst_16402 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
if(cljs.core.truth_(inst_16402)){
var statearr_16423_16444 = state_16417__$1;
(statearr_16423_16444[(1)] = (8));

} else {
var statearr_16424_16445 = state_16417__$1;
(statearr_16424_16445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (3))){
var inst_16415 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16417__$1,inst_16415);
} else {
if((state_val_16418 === (12))){
var state_16417__$1 = state_16417;
var statearr_16425_16446 = state_16417__$1;
(statearr_16425_16446[(2)] = null);

(statearr_16425_16446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (2))){
var inst_16394 = (state_16417[(7)]);
var state_16417__$1 = state_16417;
if(cljs.core.truth_(inst_16394)){
var statearr_16426_16447 = state_16417__$1;
(statearr_16426_16447[(1)] = (4));

} else {
var statearr_16427_16448 = state_16417__$1;
(statearr_16427_16448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (11))){
var inst_16408 = cljs.core.async.close_BANG_.call(null,ch);
var state_16417__$1 = state_16417;
var statearr_16428_16449 = state_16417__$1;
(statearr_16428_16449[(2)] = inst_16408);

(statearr_16428_16449[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (9))){
var state_16417__$1 = state_16417;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16429_16450 = state_16417__$1;
(statearr_16429_16450[(1)] = (11));

} else {
var statearr_16430_16451 = state_16417__$1;
(statearr_16430_16451[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (5))){
var inst_16394 = (state_16417[(7)]);
var state_16417__$1 = state_16417;
var statearr_16431_16452 = state_16417__$1;
(statearr_16431_16452[(2)] = inst_16394);

(statearr_16431_16452[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (10))){
var inst_16413 = (state_16417[(2)]);
var state_16417__$1 = state_16417;
var statearr_16432_16453 = state_16417__$1;
(statearr_16432_16453[(2)] = inst_16413);

(statearr_16432_16453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16418 === (8))){
var inst_16394 = (state_16417[(7)]);
var inst_16404 = cljs.core.next.call(null,inst_16394);
var inst_16394__$1 = inst_16404;
var state_16417__$1 = (function (){var statearr_16433 = state_16417;
(statearr_16433[(7)] = inst_16394__$1);

return statearr_16433;
})();
var statearr_16434_16454 = state_16417__$1;
(statearr_16434_16454[(2)] = null);

(statearr_16434_16454[(1)] = (2));


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
}
}
}
}
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_16435 = [null,null,null,null,null,null,null,null];
(statearr_16435[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_16435[(1)] = (1));

return statearr_16435;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_16417){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16436){var ex__13803__auto__ = e16436;
var statearr_16437_16455 = state_16417;
(statearr_16437_16455[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16417[(4)]))){
var statearr_16438_16456 = state_16417;
(statearr_16438_16456[(1)] = cljs.core.first.call(null,(state_16417[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16457 = state_16417;
state_16417 = G__16457;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_16417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_16417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_16439 = f__13925__auto__.call(null);
(statearr_16439[(6)] = c__13924__auto__);

return statearr_16439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});

cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16459 = arguments.length;
switch (G__16459) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16461 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16461 = (function (ch,cs,meta16462){
this.ch = ch;
this.cs = cs;
this.meta16462 = meta16462;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16463,meta16462__$1){
var self__ = this;
var _16463__$1 = this;
return (new cljs.core.async.t_cljs$core$async16461(self__.ch,self__.cs,meta16462__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16463){
var self__ = this;
var _16463__$1 = this;
return self__.meta16462;
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16462","meta16462",-724731518,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async16461.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16461.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16461";

cljs.core.async.t_cljs$core$async16461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16461");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16461.
 */
cljs.core.async.__GT_t_cljs$core$async16461 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async16461(ch__$1,cs__$1,meta16462){
return (new cljs.core.async.t_cljs$core$async16461(ch__$1,cs__$1,meta16462));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async16461(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__13924__auto___16680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___16680,cs,m,dchan,dctr,done){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___16680,cs,m,dchan,dctr,done){
return (function (state_16596){
var state_val_16597 = (state_16596[(1)]);
if((state_val_16597 === (7))){
var inst_16592 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16598_16681 = state_16596__$1;
(statearr_16598_16681[(2)] = inst_16592);

(statearr_16598_16681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (20))){
var inst_16497 = (state_16596[(7)]);
var inst_16509 = cljs.core.first.call(null,inst_16497);
var inst_16510 = cljs.core.nth.call(null,inst_16509,(0),null);
var inst_16511 = cljs.core.nth.call(null,inst_16509,(1),null);
var state_16596__$1 = (function (){var statearr_16599 = state_16596;
(statearr_16599[(8)] = inst_16510);

return statearr_16599;
})();
if(cljs.core.truth_(inst_16511)){
var statearr_16600_16682 = state_16596__$1;
(statearr_16600_16682[(1)] = (22));

} else {
var statearr_16601_16683 = state_16596__$1;
(statearr_16601_16683[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (27))){
var inst_16466 = (state_16596[(9)]);
var inst_16546 = (state_16596[(10)]);
var inst_16541 = (state_16596[(11)]);
var inst_16539 = (state_16596[(12)]);
var inst_16546__$1 = cljs.core._nth.call(null,inst_16539,inst_16541);
var inst_16547 = cljs.core.async.put_BANG_.call(null,inst_16546__$1,inst_16466,done);
var state_16596__$1 = (function (){var statearr_16602 = state_16596;
(statearr_16602[(10)] = inst_16546__$1);

return statearr_16602;
})();
if(cljs.core.truth_(inst_16547)){
var statearr_16603_16684 = state_16596__$1;
(statearr_16603_16684[(1)] = (30));

} else {
var statearr_16604_16685 = state_16596__$1;
(statearr_16604_16685[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (1))){
var state_16596__$1 = state_16596;
var statearr_16605_16686 = state_16596__$1;
(statearr_16605_16686[(2)] = null);

(statearr_16605_16686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (24))){
var inst_16497 = (state_16596[(7)]);
var inst_16516 = (state_16596[(2)]);
var inst_16517 = cljs.core.next.call(null,inst_16497);
var inst_16475 = inst_16517;
var inst_16476 = null;
var inst_16477 = (0);
var inst_16478 = (0);
var state_16596__$1 = (function (){var statearr_16606 = state_16596;
(statearr_16606[(13)] = inst_16476);

(statearr_16606[(14)] = inst_16475);

(statearr_16606[(15)] = inst_16478);

(statearr_16606[(16)] = inst_16477);

(statearr_16606[(17)] = inst_16516);

return statearr_16606;
})();
var statearr_16607_16687 = state_16596__$1;
(statearr_16607_16687[(2)] = null);

(statearr_16607_16687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (39))){
var state_16596__$1 = state_16596;
var statearr_16611_16688 = state_16596__$1;
(statearr_16611_16688[(2)] = null);

(statearr_16611_16688[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (4))){
var inst_16466 = (state_16596[(9)]);
var inst_16466__$1 = (state_16596[(2)]);
var inst_16467 = (inst_16466__$1 == null);
var state_16596__$1 = (function (){var statearr_16612 = state_16596;
(statearr_16612[(9)] = inst_16466__$1);

return statearr_16612;
})();
if(cljs.core.truth_(inst_16467)){
var statearr_16613_16689 = state_16596__$1;
(statearr_16613_16689[(1)] = (5));

} else {
var statearr_16614_16690 = state_16596__$1;
(statearr_16614_16690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (15))){
var inst_16476 = (state_16596[(13)]);
var inst_16475 = (state_16596[(14)]);
var inst_16478 = (state_16596[(15)]);
var inst_16477 = (state_16596[(16)]);
var inst_16493 = (state_16596[(2)]);
var inst_16494 = (inst_16478 + (1));
var tmp16608 = inst_16476;
var tmp16609 = inst_16475;
var tmp16610 = inst_16477;
var inst_16475__$1 = tmp16609;
var inst_16476__$1 = tmp16608;
var inst_16477__$1 = tmp16610;
var inst_16478__$1 = inst_16494;
var state_16596__$1 = (function (){var statearr_16615 = state_16596;
(statearr_16615[(13)] = inst_16476__$1);

(statearr_16615[(18)] = inst_16493);

(statearr_16615[(14)] = inst_16475__$1);

(statearr_16615[(15)] = inst_16478__$1);

(statearr_16615[(16)] = inst_16477__$1);

return statearr_16615;
})();
var statearr_16616_16691 = state_16596__$1;
(statearr_16616_16691[(2)] = null);

(statearr_16616_16691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (21))){
var inst_16520 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16620_16692 = state_16596__$1;
(statearr_16620_16692[(2)] = inst_16520);

(statearr_16620_16692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (31))){
var inst_16546 = (state_16596[(10)]);
var inst_16550 = cljs.core.async.untap_STAR_.call(null,m,inst_16546);
var state_16596__$1 = state_16596;
var statearr_16621_16693 = state_16596__$1;
(statearr_16621_16693[(2)] = inst_16550);

(statearr_16621_16693[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (32))){
var inst_16538 = (state_16596[(19)]);
var inst_16541 = (state_16596[(11)]);
var inst_16540 = (state_16596[(20)]);
var inst_16539 = (state_16596[(12)]);
var inst_16552 = (state_16596[(2)]);
var inst_16553 = (inst_16541 + (1));
var tmp16617 = inst_16538;
var tmp16618 = inst_16540;
var tmp16619 = inst_16539;
var inst_16538__$1 = tmp16617;
var inst_16539__$1 = tmp16619;
var inst_16540__$1 = tmp16618;
var inst_16541__$1 = inst_16553;
var state_16596__$1 = (function (){var statearr_16622 = state_16596;
(statearr_16622[(21)] = inst_16552);

(statearr_16622[(19)] = inst_16538__$1);

(statearr_16622[(11)] = inst_16541__$1);

(statearr_16622[(20)] = inst_16540__$1);

(statearr_16622[(12)] = inst_16539__$1);

return statearr_16622;
})();
var statearr_16623_16694 = state_16596__$1;
(statearr_16623_16694[(2)] = null);

(statearr_16623_16694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (40))){
var inst_16565 = (state_16596[(22)]);
var inst_16569 = cljs.core.async.untap_STAR_.call(null,m,inst_16565);
var state_16596__$1 = state_16596;
var statearr_16624_16695 = state_16596__$1;
(statearr_16624_16695[(2)] = inst_16569);

(statearr_16624_16695[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (33))){
var inst_16556 = (state_16596[(23)]);
var inst_16558 = cljs.core.chunked_seq_QMARK_.call(null,inst_16556);
var state_16596__$1 = state_16596;
if(inst_16558){
var statearr_16625_16696 = state_16596__$1;
(statearr_16625_16696[(1)] = (36));

} else {
var statearr_16626_16697 = state_16596__$1;
(statearr_16626_16697[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (13))){
var inst_16487 = (state_16596[(24)]);
var inst_16490 = cljs.core.async.close_BANG_.call(null,inst_16487);
var state_16596__$1 = state_16596;
var statearr_16627_16698 = state_16596__$1;
(statearr_16627_16698[(2)] = inst_16490);

(statearr_16627_16698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (22))){
var inst_16510 = (state_16596[(8)]);
var inst_16513 = cljs.core.async.close_BANG_.call(null,inst_16510);
var state_16596__$1 = state_16596;
var statearr_16628_16699 = state_16596__$1;
(statearr_16628_16699[(2)] = inst_16513);

(statearr_16628_16699[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (36))){
var inst_16556 = (state_16596[(23)]);
var inst_16560 = cljs.core.chunk_first.call(null,inst_16556);
var inst_16561 = cljs.core.chunk_rest.call(null,inst_16556);
var inst_16562 = cljs.core.count.call(null,inst_16560);
var inst_16538 = inst_16561;
var inst_16539 = inst_16560;
var inst_16540 = inst_16562;
var inst_16541 = (0);
var state_16596__$1 = (function (){var statearr_16629 = state_16596;
(statearr_16629[(19)] = inst_16538);

(statearr_16629[(11)] = inst_16541);

(statearr_16629[(20)] = inst_16540);

(statearr_16629[(12)] = inst_16539);

return statearr_16629;
})();
var statearr_16630_16700 = state_16596__$1;
(statearr_16630_16700[(2)] = null);

(statearr_16630_16700[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (41))){
var inst_16556 = (state_16596[(23)]);
var inst_16571 = (state_16596[(2)]);
var inst_16572 = cljs.core.next.call(null,inst_16556);
var inst_16538 = inst_16572;
var inst_16539 = null;
var inst_16540 = (0);
var inst_16541 = (0);
var state_16596__$1 = (function (){var statearr_16631 = state_16596;
(statearr_16631[(19)] = inst_16538);

(statearr_16631[(11)] = inst_16541);

(statearr_16631[(20)] = inst_16540);

(statearr_16631[(25)] = inst_16571);

(statearr_16631[(12)] = inst_16539);

return statearr_16631;
})();
var statearr_16632_16701 = state_16596__$1;
(statearr_16632_16701[(2)] = null);

(statearr_16632_16701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (43))){
var state_16596__$1 = state_16596;
var statearr_16633_16702 = state_16596__$1;
(statearr_16633_16702[(2)] = null);

(statearr_16633_16702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (29))){
var inst_16580 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16634_16703 = state_16596__$1;
(statearr_16634_16703[(2)] = inst_16580);

(statearr_16634_16703[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (44))){
var inst_16589 = (state_16596[(2)]);
var state_16596__$1 = (function (){var statearr_16635 = state_16596;
(statearr_16635[(26)] = inst_16589);

return statearr_16635;
})();
var statearr_16636_16704 = state_16596__$1;
(statearr_16636_16704[(2)] = null);

(statearr_16636_16704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (6))){
var inst_16530 = (state_16596[(27)]);
var inst_16529 = cljs.core.deref.call(null,cs);
var inst_16530__$1 = cljs.core.keys.call(null,inst_16529);
var inst_16531 = cljs.core.count.call(null,inst_16530__$1);
var inst_16532 = cljs.core.reset_BANG_.call(null,dctr,inst_16531);
var inst_16537 = cljs.core.seq.call(null,inst_16530__$1);
var inst_16538 = inst_16537;
var inst_16539 = null;
var inst_16540 = (0);
var inst_16541 = (0);
var state_16596__$1 = (function (){var statearr_16637 = state_16596;
(statearr_16637[(19)] = inst_16538);

(statearr_16637[(28)] = inst_16532);

(statearr_16637[(11)] = inst_16541);

(statearr_16637[(20)] = inst_16540);

(statearr_16637[(27)] = inst_16530__$1);

(statearr_16637[(12)] = inst_16539);

return statearr_16637;
})();
var statearr_16638_16705 = state_16596__$1;
(statearr_16638_16705[(2)] = null);

(statearr_16638_16705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (28))){
var inst_16538 = (state_16596[(19)]);
var inst_16556 = (state_16596[(23)]);
var inst_16556__$1 = cljs.core.seq.call(null,inst_16538);
var state_16596__$1 = (function (){var statearr_16639 = state_16596;
(statearr_16639[(23)] = inst_16556__$1);

return statearr_16639;
})();
if(inst_16556__$1){
var statearr_16640_16706 = state_16596__$1;
(statearr_16640_16706[(1)] = (33));

} else {
var statearr_16641_16707 = state_16596__$1;
(statearr_16641_16707[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (25))){
var inst_16541 = (state_16596[(11)]);
var inst_16540 = (state_16596[(20)]);
var inst_16543 = (inst_16541 < inst_16540);
var inst_16544 = inst_16543;
var state_16596__$1 = state_16596;
if(cljs.core.truth_(inst_16544)){
var statearr_16642_16708 = state_16596__$1;
(statearr_16642_16708[(1)] = (27));

} else {
var statearr_16643_16709 = state_16596__$1;
(statearr_16643_16709[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (34))){
var state_16596__$1 = state_16596;
var statearr_16644_16710 = state_16596__$1;
(statearr_16644_16710[(2)] = null);

(statearr_16644_16710[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (17))){
var state_16596__$1 = state_16596;
var statearr_16645_16711 = state_16596__$1;
(statearr_16645_16711[(2)] = null);

(statearr_16645_16711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (3))){
var inst_16594 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16596__$1,inst_16594);
} else {
if((state_val_16597 === (12))){
var inst_16525 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16646_16712 = state_16596__$1;
(statearr_16646_16712[(2)] = inst_16525);

(statearr_16646_16712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (2))){
var state_16596__$1 = state_16596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16596__$1,(4),ch);
} else {
if((state_val_16597 === (23))){
var state_16596__$1 = state_16596;
var statearr_16647_16713 = state_16596__$1;
(statearr_16647_16713[(2)] = null);

(statearr_16647_16713[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (35))){
var inst_16578 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16648_16714 = state_16596__$1;
(statearr_16648_16714[(2)] = inst_16578);

(statearr_16648_16714[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (19))){
var inst_16497 = (state_16596[(7)]);
var inst_16501 = cljs.core.chunk_first.call(null,inst_16497);
var inst_16502 = cljs.core.chunk_rest.call(null,inst_16497);
var inst_16503 = cljs.core.count.call(null,inst_16501);
var inst_16475 = inst_16502;
var inst_16476 = inst_16501;
var inst_16477 = inst_16503;
var inst_16478 = (0);
var state_16596__$1 = (function (){var statearr_16649 = state_16596;
(statearr_16649[(13)] = inst_16476);

(statearr_16649[(14)] = inst_16475);

(statearr_16649[(15)] = inst_16478);

(statearr_16649[(16)] = inst_16477);

return statearr_16649;
})();
var statearr_16650_16715 = state_16596__$1;
(statearr_16650_16715[(2)] = null);

(statearr_16650_16715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (11))){
var inst_16497 = (state_16596[(7)]);
var inst_16475 = (state_16596[(14)]);
var inst_16497__$1 = cljs.core.seq.call(null,inst_16475);
var state_16596__$1 = (function (){var statearr_16651 = state_16596;
(statearr_16651[(7)] = inst_16497__$1);

return statearr_16651;
})();
if(inst_16497__$1){
var statearr_16652_16716 = state_16596__$1;
(statearr_16652_16716[(1)] = (16));

} else {
var statearr_16653_16717 = state_16596__$1;
(statearr_16653_16717[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (9))){
var inst_16527 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16654_16718 = state_16596__$1;
(statearr_16654_16718[(2)] = inst_16527);

(statearr_16654_16718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (5))){
var inst_16473 = cljs.core.deref.call(null,cs);
var inst_16474 = cljs.core.seq.call(null,inst_16473);
var inst_16475 = inst_16474;
var inst_16476 = null;
var inst_16477 = (0);
var inst_16478 = (0);
var state_16596__$1 = (function (){var statearr_16655 = state_16596;
(statearr_16655[(13)] = inst_16476);

(statearr_16655[(14)] = inst_16475);

(statearr_16655[(15)] = inst_16478);

(statearr_16655[(16)] = inst_16477);

return statearr_16655;
})();
var statearr_16656_16719 = state_16596__$1;
(statearr_16656_16719[(2)] = null);

(statearr_16656_16719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (14))){
var state_16596__$1 = state_16596;
var statearr_16657_16720 = state_16596__$1;
(statearr_16657_16720[(2)] = null);

(statearr_16657_16720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (45))){
var inst_16586 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16658_16721 = state_16596__$1;
(statearr_16658_16721[(2)] = inst_16586);

(statearr_16658_16721[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (26))){
var inst_16530 = (state_16596[(27)]);
var inst_16582 = (state_16596[(2)]);
var inst_16583 = cljs.core.seq.call(null,inst_16530);
var state_16596__$1 = (function (){var statearr_16659 = state_16596;
(statearr_16659[(29)] = inst_16582);

return statearr_16659;
})();
if(inst_16583){
var statearr_16660_16722 = state_16596__$1;
(statearr_16660_16722[(1)] = (42));

} else {
var statearr_16661_16723 = state_16596__$1;
(statearr_16661_16723[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (16))){
var inst_16497 = (state_16596[(7)]);
var inst_16499 = cljs.core.chunked_seq_QMARK_.call(null,inst_16497);
var state_16596__$1 = state_16596;
if(inst_16499){
var statearr_16662_16724 = state_16596__$1;
(statearr_16662_16724[(1)] = (19));

} else {
var statearr_16663_16725 = state_16596__$1;
(statearr_16663_16725[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (38))){
var inst_16575 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16664_16726 = state_16596__$1;
(statearr_16664_16726[(2)] = inst_16575);

(statearr_16664_16726[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (30))){
var state_16596__$1 = state_16596;
var statearr_16665_16727 = state_16596__$1;
(statearr_16665_16727[(2)] = null);

(statearr_16665_16727[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (10))){
var inst_16476 = (state_16596[(13)]);
var inst_16478 = (state_16596[(15)]);
var inst_16486 = cljs.core._nth.call(null,inst_16476,inst_16478);
var inst_16487 = cljs.core.nth.call(null,inst_16486,(0),null);
var inst_16488 = cljs.core.nth.call(null,inst_16486,(1),null);
var state_16596__$1 = (function (){var statearr_16666 = state_16596;
(statearr_16666[(24)] = inst_16487);

return statearr_16666;
})();
if(cljs.core.truth_(inst_16488)){
var statearr_16667_16728 = state_16596__$1;
(statearr_16667_16728[(1)] = (13));

} else {
var statearr_16668_16729 = state_16596__$1;
(statearr_16668_16729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (18))){
var inst_16523 = (state_16596[(2)]);
var state_16596__$1 = state_16596;
var statearr_16669_16730 = state_16596__$1;
(statearr_16669_16730[(2)] = inst_16523);

(statearr_16669_16730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (42))){
var state_16596__$1 = state_16596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16596__$1,(45),dchan);
} else {
if((state_val_16597 === (37))){
var inst_16466 = (state_16596[(9)]);
var inst_16556 = (state_16596[(23)]);
var inst_16565 = (state_16596[(22)]);
var inst_16565__$1 = cljs.core.first.call(null,inst_16556);
var inst_16566 = cljs.core.async.put_BANG_.call(null,inst_16565__$1,inst_16466,done);
var state_16596__$1 = (function (){var statearr_16670 = state_16596;
(statearr_16670[(22)] = inst_16565__$1);

return statearr_16670;
})();
if(cljs.core.truth_(inst_16566)){
var statearr_16671_16731 = state_16596__$1;
(statearr_16671_16731[(1)] = (39));

} else {
var statearr_16672_16732 = state_16596__$1;
(statearr_16672_16732[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16597 === (8))){
var inst_16478 = (state_16596[(15)]);
var inst_16477 = (state_16596[(16)]);
var inst_16480 = (inst_16478 < inst_16477);
var inst_16481 = inst_16480;
var state_16596__$1 = state_16596;
if(cljs.core.truth_(inst_16481)){
var statearr_16673_16733 = state_16596__$1;
(statearr_16673_16733[(1)] = (10));

} else {
var statearr_16674_16734 = state_16596__$1;
(statearr_16674_16734[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___16680,cs,m,dchan,dctr,done))
;
return ((function (switch__13799__auto__,c__13924__auto___16680,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13800__auto__ = null;
var cljs$core$async$mult_$_state_machine__13800__auto____0 = (function (){
var statearr_16675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16675[(0)] = cljs$core$async$mult_$_state_machine__13800__auto__);

(statearr_16675[(1)] = (1));

return statearr_16675;
});
var cljs$core$async$mult_$_state_machine__13800__auto____1 = (function (state_16596){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16676){var ex__13803__auto__ = e16676;
var statearr_16677_16735 = state_16596;
(statearr_16677_16735[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16596[(4)]))){
var statearr_16678_16736 = state_16596;
(statearr_16678_16736[(1)] = cljs.core.first.call(null,(state_16596[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16737 = state_16596;
state_16596 = G__16737;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13800__auto__ = function(state_16596){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13800__auto____1.call(this,state_16596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13800__auto____0;
cljs$core$async$mult_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13800__auto____1;
return cljs$core$async$mult_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___16680,cs,m,dchan,dctr,done))
})();
var state__13926__auto__ = (function (){var statearr_16679 = f__13925__auto__.call(null);
(statearr_16679[(6)] = c__13924__auto___16680);

return statearr_16679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___16680,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16739 = arguments.length;
switch (G__16739) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16751 = arguments.length;
var i__4731__auto___16752 = (0);
while(true){
if((i__4731__auto___16752 < len__4730__auto___16751)){
args__4736__auto__.push((arguments[i__4731__auto___16752]));

var G__16753 = (i__4731__auto___16752 + (1));
i__4731__auto___16752 = G__16753;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16745){
var map__16746 = p__16745;
var map__16746__$1 = (((((!((map__16746 == null))))?(((((map__16746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16746):map__16746);
var opts = map__16746__$1;
var statearr_16748_16754 = state;
(statearr_16748_16754[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__16746,map__16746__$1,opts){
return (function (val){
var statearr_16749_16755 = state;
(statearr_16749_16755[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__16746,map__16746__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_16750_16756 = state;
(statearr_16750_16756[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16741){
var G__16742 = cljs.core.first.call(null,seq16741);
var seq16741__$1 = cljs.core.next.call(null,seq16741);
var G__16743 = cljs.core.first.call(null,seq16741__$1);
var seq16741__$2 = cljs.core.next.call(null,seq16741__$1);
var G__16744 = cljs.core.first.call(null,seq16741__$2);
var seq16741__$3 = cljs.core.next.call(null,seq16741__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16742,G__16743,G__16744,seq16741__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16757 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta16758){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta16758 = meta16758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16759,meta16758__$1){
var self__ = this;
var _16759__$1 = this;
return (new cljs.core.async.t_cljs$core$async16757(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta16758__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16759){
var self__ = this;
var _16759__$1 = this;
return self__.meta16758;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta16758","meta16758",-296592380,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async16757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16757";

cljs.core.async.t_cljs$core$async16757.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16757");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16757.
 */
cljs.core.async.__GT_t_cljs$core$async16757 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async16757(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16758){
return (new cljs.core.async.t_cljs$core$async16757(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta16758));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async16757(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13924__auto___16922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16861){
var state_val_16862 = (state_16861[(1)]);
if((state_val_16862 === (7))){
var inst_16776 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16863_16923 = state_16861__$1;
(statearr_16863_16923[(2)] = inst_16776);

(statearr_16863_16923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (20))){
var inst_16788 = (state_16861[(7)]);
var state_16861__$1 = state_16861;
var statearr_16864_16924 = state_16861__$1;
(statearr_16864_16924[(2)] = inst_16788);

(statearr_16864_16924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (27))){
var state_16861__$1 = state_16861;
var statearr_16865_16925 = state_16861__$1;
(statearr_16865_16925[(2)] = null);

(statearr_16865_16925[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (1))){
var inst_16763 = (state_16861[(8)]);
var inst_16763__$1 = calc_state.call(null);
var inst_16765 = (inst_16763__$1 == null);
var inst_16766 = cljs.core.not.call(null,inst_16765);
var state_16861__$1 = (function (){var statearr_16866 = state_16861;
(statearr_16866[(8)] = inst_16763__$1);

return statearr_16866;
})();
if(inst_16766){
var statearr_16867_16926 = state_16861__$1;
(statearr_16867_16926[(1)] = (2));

} else {
var statearr_16868_16927 = state_16861__$1;
(statearr_16868_16927[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (24))){
var inst_16821 = (state_16861[(9)]);
var inst_16835 = (state_16861[(10)]);
var inst_16812 = (state_16861[(11)]);
var inst_16835__$1 = inst_16812.call(null,inst_16821);
var state_16861__$1 = (function (){var statearr_16869 = state_16861;
(statearr_16869[(10)] = inst_16835__$1);

return statearr_16869;
})();
if(cljs.core.truth_(inst_16835__$1)){
var statearr_16870_16928 = state_16861__$1;
(statearr_16870_16928[(1)] = (29));

} else {
var statearr_16871_16929 = state_16861__$1;
(statearr_16871_16929[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (4))){
var inst_16779 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16779)){
var statearr_16872_16930 = state_16861__$1;
(statearr_16872_16930[(1)] = (8));

} else {
var statearr_16873_16931 = state_16861__$1;
(statearr_16873_16931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (15))){
var inst_16806 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16806)){
var statearr_16874_16932 = state_16861__$1;
(statearr_16874_16932[(1)] = (19));

} else {
var statearr_16875_16933 = state_16861__$1;
(statearr_16875_16933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (21))){
var inst_16811 = (state_16861[(12)]);
var inst_16811__$1 = (state_16861[(2)]);
var inst_16812 = cljs.core.get.call(null,inst_16811__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16813 = cljs.core.get.call(null,inst_16811__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16814 = cljs.core.get.call(null,inst_16811__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16861__$1 = (function (){var statearr_16876 = state_16861;
(statearr_16876[(11)] = inst_16812);

(statearr_16876[(12)] = inst_16811__$1);

(statearr_16876[(13)] = inst_16813);

return statearr_16876;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_16861__$1,(22),inst_16814);
} else {
if((state_val_16862 === (31))){
var inst_16843 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16843)){
var statearr_16877_16934 = state_16861__$1;
(statearr_16877_16934[(1)] = (32));

} else {
var statearr_16878_16935 = state_16861__$1;
(statearr_16878_16935[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (32))){
var inst_16820 = (state_16861[(14)]);
var state_16861__$1 = state_16861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16861__$1,(35),out,inst_16820);
} else {
if((state_val_16862 === (33))){
var inst_16811 = (state_16861[(12)]);
var inst_16788 = inst_16811;
var state_16861__$1 = (function (){var statearr_16879 = state_16861;
(statearr_16879[(7)] = inst_16788);

return statearr_16879;
})();
var statearr_16880_16936 = state_16861__$1;
(statearr_16880_16936[(2)] = null);

(statearr_16880_16936[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (13))){
var inst_16788 = (state_16861[(7)]);
var inst_16795 = inst_16788.cljs$lang$protocol_mask$partition0$;
var inst_16796 = (inst_16795 & (64));
var inst_16797 = inst_16788.cljs$core$ISeq$;
var inst_16798 = (cljs.core.PROTOCOL_SENTINEL === inst_16797);
var inst_16799 = ((inst_16796) || (inst_16798));
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16799)){
var statearr_16881_16937 = state_16861__$1;
(statearr_16881_16937[(1)] = (16));

} else {
var statearr_16882_16938 = state_16861__$1;
(statearr_16882_16938[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (22))){
var inst_16821 = (state_16861[(9)]);
var inst_16820 = (state_16861[(14)]);
var inst_16819 = (state_16861[(2)]);
var inst_16820__$1 = cljs.core.nth.call(null,inst_16819,(0),null);
var inst_16821__$1 = cljs.core.nth.call(null,inst_16819,(1),null);
var inst_16822 = (inst_16820__$1 == null);
var inst_16823 = cljs.core._EQ_.call(null,inst_16821__$1,change);
var inst_16824 = ((inst_16822) || (inst_16823));
var state_16861__$1 = (function (){var statearr_16883 = state_16861;
(statearr_16883[(9)] = inst_16821__$1);

(statearr_16883[(14)] = inst_16820__$1);

return statearr_16883;
})();
if(cljs.core.truth_(inst_16824)){
var statearr_16884_16939 = state_16861__$1;
(statearr_16884_16939[(1)] = (23));

} else {
var statearr_16885_16940 = state_16861__$1;
(statearr_16885_16940[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (36))){
var inst_16811 = (state_16861[(12)]);
var inst_16788 = inst_16811;
var state_16861__$1 = (function (){var statearr_16886 = state_16861;
(statearr_16886[(7)] = inst_16788);

return statearr_16886;
})();
var statearr_16887_16941 = state_16861__$1;
(statearr_16887_16941[(2)] = null);

(statearr_16887_16941[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (29))){
var inst_16835 = (state_16861[(10)]);
var state_16861__$1 = state_16861;
var statearr_16888_16942 = state_16861__$1;
(statearr_16888_16942[(2)] = inst_16835);

(statearr_16888_16942[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (6))){
var state_16861__$1 = state_16861;
var statearr_16889_16943 = state_16861__$1;
(statearr_16889_16943[(2)] = false);

(statearr_16889_16943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (28))){
var inst_16831 = (state_16861[(2)]);
var inst_16832 = calc_state.call(null);
var inst_16788 = inst_16832;
var state_16861__$1 = (function (){var statearr_16890 = state_16861;
(statearr_16890[(7)] = inst_16788);

(statearr_16890[(15)] = inst_16831);

return statearr_16890;
})();
var statearr_16891_16944 = state_16861__$1;
(statearr_16891_16944[(2)] = null);

(statearr_16891_16944[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (25))){
var inst_16857 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16892_16945 = state_16861__$1;
(statearr_16892_16945[(2)] = inst_16857);

(statearr_16892_16945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (34))){
var inst_16855 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16893_16946 = state_16861__$1;
(statearr_16893_16946[(2)] = inst_16855);

(statearr_16893_16946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (17))){
var state_16861__$1 = state_16861;
var statearr_16894_16947 = state_16861__$1;
(statearr_16894_16947[(2)] = false);

(statearr_16894_16947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (3))){
var state_16861__$1 = state_16861;
var statearr_16895_16948 = state_16861__$1;
(statearr_16895_16948[(2)] = false);

(statearr_16895_16948[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (12))){
var inst_16859 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16861__$1,inst_16859);
} else {
if((state_val_16862 === (2))){
var inst_16763 = (state_16861[(8)]);
var inst_16768 = inst_16763.cljs$lang$protocol_mask$partition0$;
var inst_16769 = (inst_16768 & (64));
var inst_16770 = inst_16763.cljs$core$ISeq$;
var inst_16771 = (cljs.core.PROTOCOL_SENTINEL === inst_16770);
var inst_16772 = ((inst_16769) || (inst_16771));
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16772)){
var statearr_16896_16949 = state_16861__$1;
(statearr_16896_16949[(1)] = (5));

} else {
var statearr_16897_16950 = state_16861__$1;
(statearr_16897_16950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (23))){
var inst_16820 = (state_16861[(14)]);
var inst_16826 = (inst_16820 == null);
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16826)){
var statearr_16898_16951 = state_16861__$1;
(statearr_16898_16951[(1)] = (26));

} else {
var statearr_16899_16952 = state_16861__$1;
(statearr_16899_16952[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (35))){
var inst_16846 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
if(cljs.core.truth_(inst_16846)){
var statearr_16900_16953 = state_16861__$1;
(statearr_16900_16953[(1)] = (36));

} else {
var statearr_16901_16954 = state_16861__$1;
(statearr_16901_16954[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (19))){
var inst_16788 = (state_16861[(7)]);
var inst_16808 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16788);
var state_16861__$1 = state_16861;
var statearr_16902_16955 = state_16861__$1;
(statearr_16902_16955[(2)] = inst_16808);

(statearr_16902_16955[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (11))){
var inst_16788 = (state_16861[(7)]);
var inst_16792 = (inst_16788 == null);
var inst_16793 = cljs.core.not.call(null,inst_16792);
var state_16861__$1 = state_16861;
if(inst_16793){
var statearr_16903_16956 = state_16861__$1;
(statearr_16903_16956[(1)] = (13));

} else {
var statearr_16904_16957 = state_16861__$1;
(statearr_16904_16957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (9))){
var inst_16763 = (state_16861[(8)]);
var state_16861__$1 = state_16861;
var statearr_16905_16958 = state_16861__$1;
(statearr_16905_16958[(2)] = inst_16763);

(statearr_16905_16958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (5))){
var state_16861__$1 = state_16861;
var statearr_16906_16959 = state_16861__$1;
(statearr_16906_16959[(2)] = true);

(statearr_16906_16959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (14))){
var state_16861__$1 = state_16861;
var statearr_16907_16960 = state_16861__$1;
(statearr_16907_16960[(2)] = false);

(statearr_16907_16960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (26))){
var inst_16821 = (state_16861[(9)]);
var inst_16828 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16821);
var state_16861__$1 = state_16861;
var statearr_16908_16961 = state_16861__$1;
(statearr_16908_16961[(2)] = inst_16828);

(statearr_16908_16961[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (16))){
var state_16861__$1 = state_16861;
var statearr_16909_16962 = state_16861__$1;
(statearr_16909_16962[(2)] = true);

(statearr_16909_16962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (38))){
var inst_16851 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16910_16963 = state_16861__$1;
(statearr_16910_16963[(2)] = inst_16851);

(statearr_16910_16963[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (30))){
var inst_16821 = (state_16861[(9)]);
var inst_16812 = (state_16861[(11)]);
var inst_16813 = (state_16861[(13)]);
var inst_16838 = cljs.core.empty_QMARK_.call(null,inst_16812);
var inst_16839 = inst_16813.call(null,inst_16821);
var inst_16840 = cljs.core.not.call(null,inst_16839);
var inst_16841 = ((inst_16838) && (inst_16840));
var state_16861__$1 = state_16861;
var statearr_16911_16964 = state_16861__$1;
(statearr_16911_16964[(2)] = inst_16841);

(statearr_16911_16964[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (10))){
var inst_16763 = (state_16861[(8)]);
var inst_16784 = (state_16861[(2)]);
var inst_16785 = cljs.core.get.call(null,inst_16784,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16786 = cljs.core.get.call(null,inst_16784,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16787 = cljs.core.get.call(null,inst_16784,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16788 = inst_16763;
var state_16861__$1 = (function (){var statearr_16912 = state_16861;
(statearr_16912[(7)] = inst_16788);

(statearr_16912[(16)] = inst_16787);

(statearr_16912[(17)] = inst_16786);

(statearr_16912[(18)] = inst_16785);

return statearr_16912;
})();
var statearr_16913_16965 = state_16861__$1;
(statearr_16913_16965[(2)] = null);

(statearr_16913_16965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (18))){
var inst_16803 = (state_16861[(2)]);
var state_16861__$1 = state_16861;
var statearr_16914_16966 = state_16861__$1;
(statearr_16914_16966[(2)] = inst_16803);

(statearr_16914_16966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (37))){
var state_16861__$1 = state_16861;
var statearr_16915_16967 = state_16861__$1;
(statearr_16915_16967[(2)] = null);

(statearr_16915_16967[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16862 === (8))){
var inst_16763 = (state_16861[(8)]);
var inst_16781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16763);
var state_16861__$1 = state_16861;
var statearr_16916_16968 = state_16861__$1;
(statearr_16916_16968[(2)] = inst_16781);

(statearr_16916_16968[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13799__auto__,c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13800__auto__ = null;
var cljs$core$async$mix_$_state_machine__13800__auto____0 = (function (){
var statearr_16917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16917[(0)] = cljs$core$async$mix_$_state_machine__13800__auto__);

(statearr_16917[(1)] = (1));

return statearr_16917;
});
var cljs$core$async$mix_$_state_machine__13800__auto____1 = (function (state_16861){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_16861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e16918){var ex__13803__auto__ = e16918;
var statearr_16919_16969 = state_16861;
(statearr_16919_16969[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_16861[(4)]))){
var statearr_16920_16970 = state_16861;
(statearr_16920_16970[(1)] = cljs.core.first.call(null,(state_16861[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16971 = state_16861;
state_16861 = G__16971;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13800__auto__ = function(state_16861){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13800__auto____1.call(this,state_16861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13800__auto____0;
cljs$core$async$mix_$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13800__auto____1;
return cljs$core$async$mix_$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__13926__auto__ = (function (){var statearr_16921 = f__13925__auto__.call(null);
(statearr_16921[(6)] = c__13924__auto___16922);

return statearr_16921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___16922,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16973 = arguments.length;
switch (G__16973) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16977 = arguments.length;
switch (G__16977) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__16975_SHARP_){
if(cljs.core.truth_(p1__16975_SHARP_.call(null,topic))){
return p1__16975_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16975_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16978 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16979){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16979 = meta16979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16980,meta16979__$1){
var self__ = this;
var _16980__$1 = this;
return (new cljs.core.async.t_cljs$core$async16978(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16979__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16980){
var self__ = this;
var _16980__$1 = this;
return self__.meta16979;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16979","meta16979",670675790,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16978";

cljs.core.async.t_cljs$core$async16978.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async16978");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16978.
 */
cljs.core.async.__GT_t_cljs$core$async16978 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16979){
return (new cljs.core.async.t_cljs$core$async16978(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16979));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16978(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__13924__auto___17099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17099,mults,ensure_mult,p){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17099,mults,ensure_mult,p){
return (function (state_17052){
var state_val_17053 = (state_17052[(1)]);
if((state_val_17053 === (7))){
var inst_17048 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17054_17100 = state_17052__$1;
(statearr_17054_17100[(2)] = inst_17048);

(statearr_17054_17100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (20))){
var state_17052__$1 = state_17052;
var statearr_17055_17101 = state_17052__$1;
(statearr_17055_17101[(2)] = null);

(statearr_17055_17101[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (1))){
var state_17052__$1 = state_17052;
var statearr_17056_17102 = state_17052__$1;
(statearr_17056_17102[(2)] = null);

(statearr_17056_17102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (24))){
var inst_17031 = (state_17052[(7)]);
var inst_17040 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17031);
var state_17052__$1 = state_17052;
var statearr_17057_17103 = state_17052__$1;
(statearr_17057_17103[(2)] = inst_17040);

(statearr_17057_17103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (4))){
var inst_16983 = (state_17052[(8)]);
var inst_16983__$1 = (state_17052[(2)]);
var inst_16984 = (inst_16983__$1 == null);
var state_17052__$1 = (function (){var statearr_17058 = state_17052;
(statearr_17058[(8)] = inst_16983__$1);

return statearr_17058;
})();
if(cljs.core.truth_(inst_16984)){
var statearr_17059_17104 = state_17052__$1;
(statearr_17059_17104[(1)] = (5));

} else {
var statearr_17060_17105 = state_17052__$1;
(statearr_17060_17105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (15))){
var inst_17025 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17061_17106 = state_17052__$1;
(statearr_17061_17106[(2)] = inst_17025);

(statearr_17061_17106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (21))){
var inst_17045 = (state_17052[(2)]);
var state_17052__$1 = (function (){var statearr_17062 = state_17052;
(statearr_17062[(9)] = inst_17045);

return statearr_17062;
})();
var statearr_17063_17107 = state_17052__$1;
(statearr_17063_17107[(2)] = null);

(statearr_17063_17107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (13))){
var inst_17007 = (state_17052[(10)]);
var inst_17009 = cljs.core.chunked_seq_QMARK_.call(null,inst_17007);
var state_17052__$1 = state_17052;
if(inst_17009){
var statearr_17064_17108 = state_17052__$1;
(statearr_17064_17108[(1)] = (16));

} else {
var statearr_17065_17109 = state_17052__$1;
(statearr_17065_17109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (22))){
var inst_17037 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
if(cljs.core.truth_(inst_17037)){
var statearr_17066_17110 = state_17052__$1;
(statearr_17066_17110[(1)] = (23));

} else {
var statearr_17067_17111 = state_17052__$1;
(statearr_17067_17111[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (6))){
var inst_17031 = (state_17052[(7)]);
var inst_16983 = (state_17052[(8)]);
var inst_17033 = (state_17052[(11)]);
var inst_17031__$1 = topic_fn.call(null,inst_16983);
var inst_17032 = cljs.core.deref.call(null,mults);
var inst_17033__$1 = cljs.core.get.call(null,inst_17032,inst_17031__$1);
var state_17052__$1 = (function (){var statearr_17068 = state_17052;
(statearr_17068[(7)] = inst_17031__$1);

(statearr_17068[(11)] = inst_17033__$1);

return statearr_17068;
})();
if(cljs.core.truth_(inst_17033__$1)){
var statearr_17069_17112 = state_17052__$1;
(statearr_17069_17112[(1)] = (19));

} else {
var statearr_17070_17113 = state_17052__$1;
(statearr_17070_17113[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (25))){
var inst_17042 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17071_17114 = state_17052__$1;
(statearr_17071_17114[(2)] = inst_17042);

(statearr_17071_17114[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (17))){
var inst_17007 = (state_17052[(10)]);
var inst_17016 = cljs.core.first.call(null,inst_17007);
var inst_17017 = cljs.core.async.muxch_STAR_.call(null,inst_17016);
var inst_17018 = cljs.core.async.close_BANG_.call(null,inst_17017);
var inst_17019 = cljs.core.next.call(null,inst_17007);
var inst_16993 = inst_17019;
var inst_16994 = null;
var inst_16995 = (0);
var inst_16996 = (0);
var state_17052__$1 = (function (){var statearr_17072 = state_17052;
(statearr_17072[(12)] = inst_16996);

(statearr_17072[(13)] = inst_16993);

(statearr_17072[(14)] = inst_17018);

(statearr_17072[(15)] = inst_16994);

(statearr_17072[(16)] = inst_16995);

return statearr_17072;
})();
var statearr_17073_17115 = state_17052__$1;
(statearr_17073_17115[(2)] = null);

(statearr_17073_17115[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (3))){
var inst_17050 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17052__$1,inst_17050);
} else {
if((state_val_17053 === (12))){
var inst_17027 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17074_17116 = state_17052__$1;
(statearr_17074_17116[(2)] = inst_17027);

(statearr_17074_17116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (2))){
var state_17052__$1 = state_17052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17052__$1,(4),ch);
} else {
if((state_val_17053 === (23))){
var state_17052__$1 = state_17052;
var statearr_17075_17117 = state_17052__$1;
(statearr_17075_17117[(2)] = null);

(statearr_17075_17117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (19))){
var inst_16983 = (state_17052[(8)]);
var inst_17033 = (state_17052[(11)]);
var inst_17035 = cljs.core.async.muxch_STAR_.call(null,inst_17033);
var state_17052__$1 = state_17052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17052__$1,(22),inst_17035,inst_16983);
} else {
if((state_val_17053 === (11))){
var inst_17007 = (state_17052[(10)]);
var inst_16993 = (state_17052[(13)]);
var inst_17007__$1 = cljs.core.seq.call(null,inst_16993);
var state_17052__$1 = (function (){var statearr_17076 = state_17052;
(statearr_17076[(10)] = inst_17007__$1);

return statearr_17076;
})();
if(inst_17007__$1){
var statearr_17077_17118 = state_17052__$1;
(statearr_17077_17118[(1)] = (13));

} else {
var statearr_17078_17119 = state_17052__$1;
(statearr_17078_17119[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (9))){
var inst_17029 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17079_17120 = state_17052__$1;
(statearr_17079_17120[(2)] = inst_17029);

(statearr_17079_17120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (5))){
var inst_16990 = cljs.core.deref.call(null,mults);
var inst_16991 = cljs.core.vals.call(null,inst_16990);
var inst_16992 = cljs.core.seq.call(null,inst_16991);
var inst_16993 = inst_16992;
var inst_16994 = null;
var inst_16995 = (0);
var inst_16996 = (0);
var state_17052__$1 = (function (){var statearr_17080 = state_17052;
(statearr_17080[(12)] = inst_16996);

(statearr_17080[(13)] = inst_16993);

(statearr_17080[(15)] = inst_16994);

(statearr_17080[(16)] = inst_16995);

return statearr_17080;
})();
var statearr_17081_17121 = state_17052__$1;
(statearr_17081_17121[(2)] = null);

(statearr_17081_17121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (14))){
var state_17052__$1 = state_17052;
var statearr_17085_17122 = state_17052__$1;
(statearr_17085_17122[(2)] = null);

(statearr_17085_17122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (16))){
var inst_17007 = (state_17052[(10)]);
var inst_17011 = cljs.core.chunk_first.call(null,inst_17007);
var inst_17012 = cljs.core.chunk_rest.call(null,inst_17007);
var inst_17013 = cljs.core.count.call(null,inst_17011);
var inst_16993 = inst_17012;
var inst_16994 = inst_17011;
var inst_16995 = inst_17013;
var inst_16996 = (0);
var state_17052__$1 = (function (){var statearr_17086 = state_17052;
(statearr_17086[(12)] = inst_16996);

(statearr_17086[(13)] = inst_16993);

(statearr_17086[(15)] = inst_16994);

(statearr_17086[(16)] = inst_16995);

return statearr_17086;
})();
var statearr_17087_17123 = state_17052__$1;
(statearr_17087_17123[(2)] = null);

(statearr_17087_17123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (10))){
var inst_16996 = (state_17052[(12)]);
var inst_16993 = (state_17052[(13)]);
var inst_16994 = (state_17052[(15)]);
var inst_16995 = (state_17052[(16)]);
var inst_17001 = cljs.core._nth.call(null,inst_16994,inst_16996);
var inst_17002 = cljs.core.async.muxch_STAR_.call(null,inst_17001);
var inst_17003 = cljs.core.async.close_BANG_.call(null,inst_17002);
var inst_17004 = (inst_16996 + (1));
var tmp17082 = inst_16993;
var tmp17083 = inst_16994;
var tmp17084 = inst_16995;
var inst_16993__$1 = tmp17082;
var inst_16994__$1 = tmp17083;
var inst_16995__$1 = tmp17084;
var inst_16996__$1 = inst_17004;
var state_17052__$1 = (function (){var statearr_17088 = state_17052;
(statearr_17088[(17)] = inst_17003);

(statearr_17088[(12)] = inst_16996__$1);

(statearr_17088[(13)] = inst_16993__$1);

(statearr_17088[(15)] = inst_16994__$1);

(statearr_17088[(16)] = inst_16995__$1);

return statearr_17088;
})();
var statearr_17089_17124 = state_17052__$1;
(statearr_17089_17124[(2)] = null);

(statearr_17089_17124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (18))){
var inst_17022 = (state_17052[(2)]);
var state_17052__$1 = state_17052;
var statearr_17090_17125 = state_17052__$1;
(statearr_17090_17125[(2)] = inst_17022);

(statearr_17090_17125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17053 === (8))){
var inst_16996 = (state_17052[(12)]);
var inst_16995 = (state_17052[(16)]);
var inst_16998 = (inst_16996 < inst_16995);
var inst_16999 = inst_16998;
var state_17052__$1 = state_17052;
if(cljs.core.truth_(inst_16999)){
var statearr_17091_17126 = state_17052__$1;
(statearr_17091_17126[(1)] = (10));

} else {
var statearr_17092_17127 = state_17052__$1;
(statearr_17092_17127[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___17099,mults,ensure_mult,p))
;
return ((function (switch__13799__auto__,c__13924__auto___17099,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17093[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17093[(1)] = (1));

return statearr_17093;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17052){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17094){var ex__13803__auto__ = e17094;
var statearr_17095_17128 = state_17052;
(statearr_17095_17128[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17052[(4)]))){
var statearr_17096_17129 = state_17052;
(statearr_17096_17129[(1)] = cljs.core.first.call(null,(state_17052[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17130 = state_17052;
state_17052 = G__17130;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17099,mults,ensure_mult,p))
})();
var state__13926__auto__ = (function (){var statearr_17097 = f__13925__auto__.call(null);
(statearr_17097[(6)] = c__13924__auto___17099);

return statearr_17097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17099,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17132 = arguments.length;
switch (G__17132) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17135 = arguments.length;
switch (G__17135) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17138 = arguments.length;
switch (G__17138) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__13924__auto___17216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17181){
var state_val_17182 = (state_17181[(1)]);
if((state_val_17182 === (7))){
var state_17181__$1 = state_17181;
var statearr_17183_17217 = state_17181__$1;
(statearr_17183_17217[(2)] = null);

(statearr_17183_17217[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (1))){
var state_17181__$1 = state_17181;
var statearr_17184_17218 = state_17181__$1;
(statearr_17184_17218[(2)] = null);

(statearr_17184_17218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (4))){
var inst_17142 = (state_17181[(7)]);
var inst_17141 = (state_17181[(8)]);
var inst_17144 = (inst_17142 < inst_17141);
var state_17181__$1 = state_17181;
if(cljs.core.truth_(inst_17144)){
var statearr_17185_17219 = state_17181__$1;
(statearr_17185_17219[(1)] = (6));

} else {
var statearr_17186_17220 = state_17181__$1;
(statearr_17186_17220[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (15))){
var inst_17167 = (state_17181[(9)]);
var inst_17172 = cljs.core.apply.call(null,f,inst_17167);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,(17),out,inst_17172);
} else {
if((state_val_17182 === (13))){
var inst_17167 = (state_17181[(9)]);
var inst_17167__$1 = (state_17181[(2)]);
var inst_17168 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17167__$1);
var state_17181__$1 = (function (){var statearr_17187 = state_17181;
(statearr_17187[(9)] = inst_17167__$1);

return statearr_17187;
})();
if(cljs.core.truth_(inst_17168)){
var statearr_17188_17221 = state_17181__$1;
(statearr_17188_17221[(1)] = (14));

} else {
var statearr_17189_17222 = state_17181__$1;
(statearr_17189_17222[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (6))){
var state_17181__$1 = state_17181;
var statearr_17190_17223 = state_17181__$1;
(statearr_17190_17223[(2)] = null);

(statearr_17190_17223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (17))){
var inst_17174 = (state_17181[(2)]);
var state_17181__$1 = (function (){var statearr_17192 = state_17181;
(statearr_17192[(10)] = inst_17174);

return statearr_17192;
})();
var statearr_17193_17224 = state_17181__$1;
(statearr_17193_17224[(2)] = null);

(statearr_17193_17224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (3))){
var inst_17179 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17181__$1,inst_17179);
} else {
if((state_val_17182 === (12))){
var _ = (function (){var statearr_17194 = state_17181;
(statearr_17194[(4)] = cljs.core.rest.call(null,(state_17181[(4)])));

return statearr_17194;
})();
var state_17181__$1 = state_17181;
var ex17191 = (state_17181__$1[(2)]);
var statearr_17195_17225 = state_17181__$1;
(statearr_17195_17225[(5)] = ex17191);


if((ex17191 instanceof Object)){
var statearr_17196_17226 = state_17181__$1;
(statearr_17196_17226[(1)] = (11));

(statearr_17196_17226[(5)] = null);

} else {
throw ex17191;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (2))){
var inst_17140 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_17141 = cnt;
var inst_17142 = (0);
var state_17181__$1 = (function (){var statearr_17197 = state_17181;
(statearr_17197[(11)] = inst_17140);

(statearr_17197[(7)] = inst_17142);

(statearr_17197[(8)] = inst_17141);

return statearr_17197;
})();
var statearr_17198_17227 = state_17181__$1;
(statearr_17198_17227[(2)] = null);

(statearr_17198_17227[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (11))){
var inst_17146 = (state_17181[(2)]);
var inst_17147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_17181__$1 = (function (){var statearr_17199 = state_17181;
(statearr_17199[(12)] = inst_17146);

return statearr_17199;
})();
var statearr_17200_17228 = state_17181__$1;
(statearr_17200_17228[(2)] = inst_17147);

(statearr_17200_17228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (9))){
var inst_17142 = (state_17181[(7)]);
var _ = (function (){var statearr_17201 = state_17181;
(statearr_17201[(4)] = cljs.core.cons.call(null,(12),(state_17181[(4)])));

return statearr_17201;
})();
var inst_17153 = chs__$1.call(null,inst_17142);
var inst_17154 = done.call(null,inst_17142);
var inst_17155 = cljs.core.async.take_BANG_.call(null,inst_17153,inst_17154);
var ___$1 = (function (){var statearr_17202 = state_17181;
(statearr_17202[(4)] = cljs.core.rest.call(null,(state_17181[(4)])));

return statearr_17202;
})();
var state_17181__$1 = state_17181;
var statearr_17203_17229 = state_17181__$1;
(statearr_17203_17229[(2)] = inst_17155);

(statearr_17203_17229[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (5))){
var inst_17165 = (state_17181[(2)]);
var state_17181__$1 = (function (){var statearr_17204 = state_17181;
(statearr_17204[(13)] = inst_17165);

return statearr_17204;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17181__$1,(13),dchan);
} else {
if((state_val_17182 === (14))){
var inst_17170 = cljs.core.async.close_BANG_.call(null,out);
var state_17181__$1 = state_17181;
var statearr_17205_17230 = state_17181__$1;
(statearr_17205_17230[(2)] = inst_17170);

(statearr_17205_17230[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (16))){
var inst_17177 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17206_17231 = state_17181__$1;
(statearr_17206_17231[(2)] = inst_17177);

(statearr_17206_17231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (10))){
var inst_17142 = (state_17181[(7)]);
var inst_17158 = (state_17181[(2)]);
var inst_17159 = (inst_17142 + (1));
var inst_17142__$1 = inst_17159;
var state_17181__$1 = (function (){var statearr_17207 = state_17181;
(statearr_17207[(14)] = inst_17158);

(statearr_17207[(7)] = inst_17142__$1);

return statearr_17207;
})();
var statearr_17208_17232 = state_17181__$1;
(statearr_17208_17232[(2)] = null);

(statearr_17208_17232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (8))){
var inst_17163 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17209_17233 = state_17181__$1;
(statearr_17209_17233[(2)] = inst_17163);

(statearr_17209_17233[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13799__auto__,c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17210[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17210[(1)] = (1));

return statearr_17210;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17181){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17211){var ex__13803__auto__ = e17211;
var statearr_17212_17234 = state_17181;
(statearr_17212_17234[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17181[(4)]))){
var statearr_17213_17235 = state_17181;
(statearr_17213_17235[(1)] = cljs.core.first.call(null,(state_17181[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17236 = state_17181;
state_17181 = G__17236;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17181){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__13926__auto__ = (function (){var statearr_17214 = f__13925__auto__.call(null);
(statearr_17214[(6)] = c__13924__auto___17216);

return statearr_17214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17216,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17239 = arguments.length;
switch (G__17239) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17294 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17294,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17294,out){
return (function (state_17271){
var state_val_17272 = (state_17271[(1)]);
if((state_val_17272 === (7))){
var inst_17251 = (state_17271[(7)]);
var inst_17250 = (state_17271[(8)]);
var inst_17250__$1 = (state_17271[(2)]);
var inst_17251__$1 = cljs.core.nth.call(null,inst_17250__$1,(0),null);
var inst_17252 = cljs.core.nth.call(null,inst_17250__$1,(1),null);
var inst_17253 = (inst_17251__$1 == null);
var state_17271__$1 = (function (){var statearr_17273 = state_17271;
(statearr_17273[(7)] = inst_17251__$1);

(statearr_17273[(8)] = inst_17250__$1);

(statearr_17273[(9)] = inst_17252);

return statearr_17273;
})();
if(cljs.core.truth_(inst_17253)){
var statearr_17274_17295 = state_17271__$1;
(statearr_17274_17295[(1)] = (8));

} else {
var statearr_17275_17296 = state_17271__$1;
(statearr_17275_17296[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (1))){
var inst_17240 = cljs.core.vec.call(null,chs);
var inst_17241 = inst_17240;
var state_17271__$1 = (function (){var statearr_17276 = state_17271;
(statearr_17276[(10)] = inst_17241);

return statearr_17276;
})();
var statearr_17277_17297 = state_17271__$1;
(statearr_17277_17297[(2)] = null);

(statearr_17277_17297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (4))){
var inst_17241 = (state_17271[(10)]);
var state_17271__$1 = state_17271;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17271__$1,(7),inst_17241);
} else {
if((state_val_17272 === (6))){
var inst_17267 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17278_17298 = state_17271__$1;
(statearr_17278_17298[(2)] = inst_17267);

(statearr_17278_17298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (3))){
var inst_17269 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17271__$1,inst_17269);
} else {
if((state_val_17272 === (2))){
var inst_17241 = (state_17271[(10)]);
var inst_17243 = cljs.core.count.call(null,inst_17241);
var inst_17244 = (inst_17243 > (0));
var state_17271__$1 = state_17271;
if(cljs.core.truth_(inst_17244)){
var statearr_17280_17299 = state_17271__$1;
(statearr_17280_17299[(1)] = (4));

} else {
var statearr_17281_17300 = state_17271__$1;
(statearr_17281_17300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (11))){
var inst_17241 = (state_17271[(10)]);
var inst_17260 = (state_17271[(2)]);
var tmp17279 = inst_17241;
var inst_17241__$1 = tmp17279;
var state_17271__$1 = (function (){var statearr_17282 = state_17271;
(statearr_17282[(11)] = inst_17260);

(statearr_17282[(10)] = inst_17241__$1);

return statearr_17282;
})();
var statearr_17283_17301 = state_17271__$1;
(statearr_17283_17301[(2)] = null);

(statearr_17283_17301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (9))){
var inst_17251 = (state_17271[(7)]);
var state_17271__$1 = state_17271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17271__$1,(11),out,inst_17251);
} else {
if((state_val_17272 === (5))){
var inst_17265 = cljs.core.async.close_BANG_.call(null,out);
var state_17271__$1 = state_17271;
var statearr_17284_17302 = state_17271__$1;
(statearr_17284_17302[(2)] = inst_17265);

(statearr_17284_17302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (10))){
var inst_17263 = (state_17271[(2)]);
var state_17271__$1 = state_17271;
var statearr_17285_17303 = state_17271__$1;
(statearr_17285_17303[(2)] = inst_17263);

(statearr_17285_17303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17272 === (8))){
var inst_17251 = (state_17271[(7)]);
var inst_17250 = (state_17271[(8)]);
var inst_17241 = (state_17271[(10)]);
var inst_17252 = (state_17271[(9)]);
var inst_17255 = (function (){var cs = inst_17241;
var vec__17246 = inst_17250;
var v = inst_17251;
var c = inst_17252;
return ((function (cs,vec__17246,v,c,inst_17251,inst_17250,inst_17241,inst_17252,state_val_17272,c__13924__auto___17294,out){
return (function (p1__17237_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__17237_SHARP_);
});
;})(cs,vec__17246,v,c,inst_17251,inst_17250,inst_17241,inst_17252,state_val_17272,c__13924__auto___17294,out))
})();
var inst_17256 = cljs.core.filterv.call(null,inst_17255,inst_17241);
var inst_17241__$1 = inst_17256;
var state_17271__$1 = (function (){var statearr_17286 = state_17271;
(statearr_17286[(10)] = inst_17241__$1);

return statearr_17286;
})();
var statearr_17287_17304 = state_17271__$1;
(statearr_17287_17304[(2)] = null);

(statearr_17287_17304[(1)] = (2));


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
}
}
}
}
});})(c__13924__auto___17294,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17294,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17288[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17288[(1)] = (1));

return statearr_17288;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17271){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17289){var ex__13803__auto__ = e17289;
var statearr_17290_17305 = state_17271;
(statearr_17290_17305[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17271[(4)]))){
var statearr_17291_17306 = state_17271;
(statearr_17291_17306[(1)] = cljs.core.first.call(null,(state_17271[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17307 = state_17271;
state_17271 = G__17307;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17294,out))
})();
var state__13926__auto__ = (function (){var statearr_17292 = f__13925__auto__.call(null);
(statearr_17292[(6)] = c__13924__auto___17294);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17294,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17309 = arguments.length;
switch (G__17309) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17355,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17355,out){
return (function (state_17333){
var state_val_17334 = (state_17333[(1)]);
if((state_val_17334 === (7))){
var inst_17315 = (state_17333[(7)]);
var inst_17315__$1 = (state_17333[(2)]);
var inst_17316 = (inst_17315__$1 == null);
var inst_17317 = cljs.core.not.call(null,inst_17316);
var state_17333__$1 = (function (){var statearr_17335 = state_17333;
(statearr_17335[(7)] = inst_17315__$1);

return statearr_17335;
})();
if(inst_17317){
var statearr_17336_17356 = state_17333__$1;
(statearr_17336_17356[(1)] = (8));

} else {
var statearr_17337_17357 = state_17333__$1;
(statearr_17337_17357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (1))){
var inst_17310 = (0);
var state_17333__$1 = (function (){var statearr_17338 = state_17333;
(statearr_17338[(8)] = inst_17310);

return statearr_17338;
})();
var statearr_17339_17358 = state_17333__$1;
(statearr_17339_17358[(2)] = null);

(statearr_17339_17358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (4))){
var state_17333__$1 = state_17333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17333__$1,(7),ch);
} else {
if((state_val_17334 === (6))){
var inst_17328 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
var statearr_17340_17359 = state_17333__$1;
(statearr_17340_17359[(2)] = inst_17328);

(statearr_17340_17359[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (3))){
var inst_17330 = (state_17333[(2)]);
var inst_17331 = cljs.core.async.close_BANG_.call(null,out);
var state_17333__$1 = (function (){var statearr_17341 = state_17333;
(statearr_17341[(9)] = inst_17330);

return statearr_17341;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17333__$1,inst_17331);
} else {
if((state_val_17334 === (2))){
var inst_17310 = (state_17333[(8)]);
var inst_17312 = (inst_17310 < n);
var state_17333__$1 = state_17333;
if(cljs.core.truth_(inst_17312)){
var statearr_17342_17360 = state_17333__$1;
(statearr_17342_17360[(1)] = (4));

} else {
var statearr_17343_17361 = state_17333__$1;
(statearr_17343_17361[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (11))){
var inst_17310 = (state_17333[(8)]);
var inst_17320 = (state_17333[(2)]);
var inst_17321 = (inst_17310 + (1));
var inst_17310__$1 = inst_17321;
var state_17333__$1 = (function (){var statearr_17344 = state_17333;
(statearr_17344[(8)] = inst_17310__$1);

(statearr_17344[(10)] = inst_17320);

return statearr_17344;
})();
var statearr_17345_17362 = state_17333__$1;
(statearr_17345_17362[(2)] = null);

(statearr_17345_17362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (9))){
var state_17333__$1 = state_17333;
var statearr_17346_17363 = state_17333__$1;
(statearr_17346_17363[(2)] = null);

(statearr_17346_17363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (5))){
var state_17333__$1 = state_17333;
var statearr_17347_17364 = state_17333__$1;
(statearr_17347_17364[(2)] = null);

(statearr_17347_17364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (10))){
var inst_17325 = (state_17333[(2)]);
var state_17333__$1 = state_17333;
var statearr_17348_17365 = state_17333__$1;
(statearr_17348_17365[(2)] = inst_17325);

(statearr_17348_17365[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17334 === (8))){
var inst_17315 = (state_17333[(7)]);
var state_17333__$1 = state_17333;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17333__$1,(11),out,inst_17315);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___17355,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17355,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17349 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17349[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17349[(1)] = (1));

return statearr_17349;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17333){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17350){var ex__13803__auto__ = e17350;
var statearr_17351_17366 = state_17333;
(statearr_17351_17366[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17333[(4)]))){
var statearr_17352_17367 = state_17333;
(statearr_17352_17367[(1)] = cljs.core.first.call(null,(state_17333[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17368 = state_17333;
state_17333 = G__17368;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17333){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17355,out))
})();
var state__13926__auto__ = (function (){var statearr_17353 = f__13925__auto__.call(null);
(statearr_17353[(6)] = c__13924__auto___17355);

return statearr_17353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17355,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17370 = (function (f,ch,meta17371){
this.f = f;
this.ch = ch;
this.meta17371 = meta17371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17372,meta17371__$1){
var self__ = this;
var _17372__$1 = this;
return (new cljs.core.async.t_cljs$core$async17370(self__.f,self__.ch,meta17371__$1));
});

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17372){
var self__ = this;
var _17372__$1 = this;
return self__.meta17371;
});

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17373 = (function (f,ch,meta17371,_,fn1,meta17374){
this.f = f;
this.ch = ch;
this.meta17371 = meta17371;
this._ = _;
this.fn1 = fn1;
this.meta17374 = meta17374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_17375,meta17374__$1){
var self__ = this;
var _17375__$1 = this;
return (new cljs.core.async.t_cljs$core$async17373(self__.f,self__.ch,self__.meta17371,self__._,self__.fn1,meta17374__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_17375){
var self__ = this;
var _17375__$1 = this;
return self__.meta17374;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__17369_SHARP_){
return f1.call(null,(((p1__17369_SHARP_ == null))?null:self__.f.call(null,p1__17369_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17371","meta17371",-1938820986,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17370","cljs.core.async/t_cljs$core$async17370",604959774,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17374","meta17374",848223145,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async17373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17373";

cljs.core.async.t_cljs$core$async17373.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17373");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17373.
 */
cljs.core.async.__GT_t_cljs$core$async17373 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17373(f__$1,ch__$1,meta17371__$1,___$2,fn1__$1,meta17374){
return (new cljs.core.async.t_cljs$core$async17373(f__$1,ch__$1,meta17371__$1,___$2,fn1__$1,meta17374));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async17373(self__.f,self__.ch,self__.meta17371,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async17370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17371","meta17371",-1938820986,null)], null);
});

cljs.core.async.t_cljs$core$async17370.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17370";

cljs.core.async.t_cljs$core$async17370.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17370");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17370.
 */
cljs.core.async.__GT_t_cljs$core$async17370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17370(f__$1,ch__$1,meta17371){
return (new cljs.core.async.t_cljs$core$async17370(f__$1,ch__$1,meta17371));
});

}

return (new cljs.core.async.t_cljs$core$async17370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17376 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17376 = (function (f,ch,meta17377){
this.f = f;
this.ch = ch;
this.meta17377 = meta17377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17378,meta17377__$1){
var self__ = this;
var _17378__$1 = this;
return (new cljs.core.async.t_cljs$core$async17376(self__.f,self__.ch,meta17377__$1));
});

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17378){
var self__ = this;
var _17378__$1 = this;
return self__.meta17377;
});

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17376.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async17376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17377","meta17377",-2011930949,null)], null);
});

cljs.core.async.t_cljs$core$async17376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17376";

cljs.core.async.t_cljs$core$async17376.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17376");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17376.
 */
cljs.core.async.__GT_t_cljs$core$async17376 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17376(f__$1,ch__$1,meta17377){
return (new cljs.core.async.t_cljs$core$async17376(f__$1,ch__$1,meta17377));
});

}

return (new cljs.core.async.t_cljs$core$async17376(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17379 = (function (p,ch,meta17380){
this.p = p;
this.ch = ch;
this.meta17380 = meta17380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17381,meta17380__$1){
var self__ = this;
var _17381__$1 = this;
return (new cljs.core.async.t_cljs$core$async17379(self__.p,self__.ch,meta17380__$1));
});

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17381){
var self__ = this;
var _17381__$1 = this;
return self__.meta17380;
});

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17379.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async17379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17380","meta17380",1519493132,null)], null);
});

cljs.core.async.t_cljs$core$async17379.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17379";

cljs.core.async.t_cljs$core$async17379.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async17379");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17379.
 */
cljs.core.async.__GT_t_cljs$core$async17379 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17379(p__$1,ch__$1,meta17380){
return (new cljs.core.async.t_cljs$core$async17379(p__$1,ch__$1,meta17380));
});

}

return (new cljs.core.async.t_cljs$core$async17379(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17383 = arguments.length;
switch (G__17383) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17424,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17424,out){
return (function (state_17404){
var state_val_17405 = (state_17404[(1)]);
if((state_val_17405 === (7))){
var inst_17400 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17406_17425 = state_17404__$1;
(statearr_17406_17425[(2)] = inst_17400);

(statearr_17406_17425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (1))){
var state_17404__$1 = state_17404;
var statearr_17407_17426 = state_17404__$1;
(statearr_17407_17426[(2)] = null);

(statearr_17407_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (4))){
var inst_17386 = (state_17404[(7)]);
var inst_17386__$1 = (state_17404[(2)]);
var inst_17387 = (inst_17386__$1 == null);
var state_17404__$1 = (function (){var statearr_17408 = state_17404;
(statearr_17408[(7)] = inst_17386__$1);

return statearr_17408;
})();
if(cljs.core.truth_(inst_17387)){
var statearr_17409_17427 = state_17404__$1;
(statearr_17409_17427[(1)] = (5));

} else {
var statearr_17410_17428 = state_17404__$1;
(statearr_17410_17428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (6))){
var inst_17386 = (state_17404[(7)]);
var inst_17391 = p.call(null,inst_17386);
var state_17404__$1 = state_17404;
if(cljs.core.truth_(inst_17391)){
var statearr_17411_17429 = state_17404__$1;
(statearr_17411_17429[(1)] = (8));

} else {
var statearr_17412_17430 = state_17404__$1;
(statearr_17412_17430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (3))){
var inst_17402 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17404__$1,inst_17402);
} else {
if((state_val_17405 === (2))){
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17404__$1,(4),ch);
} else {
if((state_val_17405 === (11))){
var inst_17394 = (state_17404[(2)]);
var state_17404__$1 = state_17404;
var statearr_17413_17431 = state_17404__$1;
(statearr_17413_17431[(2)] = inst_17394);

(statearr_17413_17431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (9))){
var state_17404__$1 = state_17404;
var statearr_17414_17432 = state_17404__$1;
(statearr_17414_17432[(2)] = null);

(statearr_17414_17432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (5))){
var inst_17389 = cljs.core.async.close_BANG_.call(null,out);
var state_17404__$1 = state_17404;
var statearr_17415_17433 = state_17404__$1;
(statearr_17415_17433[(2)] = inst_17389);

(statearr_17415_17433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (10))){
var inst_17397 = (state_17404[(2)]);
var state_17404__$1 = (function (){var statearr_17416 = state_17404;
(statearr_17416[(8)] = inst_17397);

return statearr_17416;
})();
var statearr_17417_17434 = state_17404__$1;
(statearr_17417_17434[(2)] = null);

(statearr_17417_17434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17405 === (8))){
var inst_17386 = (state_17404[(7)]);
var state_17404__$1 = state_17404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17404__$1,(11),out,inst_17386);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto___17424,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17424,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17418 = [null,null,null,null,null,null,null,null,null];
(statearr_17418[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17418[(1)] = (1));

return statearr_17418;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17404){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17419){var ex__13803__auto__ = e17419;
var statearr_17420_17435 = state_17404;
(statearr_17420_17435[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17404[(4)]))){
var statearr_17421_17436 = state_17404;
(statearr_17421_17436[(1)] = cljs.core.first.call(null,(state_17404[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17437 = state_17404;
state_17404 = G__17437;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17424,out))
})();
var state__13926__auto__ = (function (){var statearr_17422 = f__13925__auto__.call(null);
(statearr_17422[(6)] = c__13924__auto___17424);

return statearr_17422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17424,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17439 = arguments.length;
switch (G__17439) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13924__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto__){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto__){
return (function (state_17502){
var state_val_17503 = (state_17502[(1)]);
if((state_val_17503 === (7))){
var inst_17498 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17504_17543 = state_17502__$1;
(statearr_17504_17543[(2)] = inst_17498);

(statearr_17504_17543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (20))){
var inst_17468 = (state_17502[(7)]);
var inst_17479 = (state_17502[(2)]);
var inst_17480 = cljs.core.next.call(null,inst_17468);
var inst_17454 = inst_17480;
var inst_17455 = null;
var inst_17456 = (0);
var inst_17457 = (0);
var state_17502__$1 = (function (){var statearr_17505 = state_17502;
(statearr_17505[(8)] = inst_17456);

(statearr_17505[(9)] = inst_17457);

(statearr_17505[(10)] = inst_17455);

(statearr_17505[(11)] = inst_17479);

(statearr_17505[(12)] = inst_17454);

return statearr_17505;
})();
var statearr_17506_17544 = state_17502__$1;
(statearr_17506_17544[(2)] = null);

(statearr_17506_17544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (1))){
var state_17502__$1 = state_17502;
var statearr_17507_17545 = state_17502__$1;
(statearr_17507_17545[(2)] = null);

(statearr_17507_17545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (4))){
var inst_17443 = (state_17502[(13)]);
var inst_17443__$1 = (state_17502[(2)]);
var inst_17444 = (inst_17443__$1 == null);
var state_17502__$1 = (function (){var statearr_17508 = state_17502;
(statearr_17508[(13)] = inst_17443__$1);

return statearr_17508;
})();
if(cljs.core.truth_(inst_17444)){
var statearr_17509_17546 = state_17502__$1;
(statearr_17509_17546[(1)] = (5));

} else {
var statearr_17510_17547 = state_17502__$1;
(statearr_17510_17547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (15))){
var state_17502__$1 = state_17502;
var statearr_17514_17548 = state_17502__$1;
(statearr_17514_17548[(2)] = null);

(statearr_17514_17548[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (21))){
var state_17502__$1 = state_17502;
var statearr_17515_17549 = state_17502__$1;
(statearr_17515_17549[(2)] = null);

(statearr_17515_17549[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (13))){
var inst_17456 = (state_17502[(8)]);
var inst_17457 = (state_17502[(9)]);
var inst_17455 = (state_17502[(10)]);
var inst_17454 = (state_17502[(12)]);
var inst_17464 = (state_17502[(2)]);
var inst_17465 = (inst_17457 + (1));
var tmp17511 = inst_17456;
var tmp17512 = inst_17455;
var tmp17513 = inst_17454;
var inst_17454__$1 = tmp17513;
var inst_17455__$1 = tmp17512;
var inst_17456__$1 = tmp17511;
var inst_17457__$1 = inst_17465;
var state_17502__$1 = (function (){var statearr_17516 = state_17502;
(statearr_17516[(8)] = inst_17456__$1);

(statearr_17516[(14)] = inst_17464);

(statearr_17516[(9)] = inst_17457__$1);

(statearr_17516[(10)] = inst_17455__$1);

(statearr_17516[(12)] = inst_17454__$1);

return statearr_17516;
})();
var statearr_17517_17550 = state_17502__$1;
(statearr_17517_17550[(2)] = null);

(statearr_17517_17550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (22))){
var state_17502__$1 = state_17502;
var statearr_17518_17551 = state_17502__$1;
(statearr_17518_17551[(2)] = null);

(statearr_17518_17551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (6))){
var inst_17443 = (state_17502[(13)]);
var inst_17452 = f.call(null,inst_17443);
var inst_17453 = cljs.core.seq.call(null,inst_17452);
var inst_17454 = inst_17453;
var inst_17455 = null;
var inst_17456 = (0);
var inst_17457 = (0);
var state_17502__$1 = (function (){var statearr_17519 = state_17502;
(statearr_17519[(8)] = inst_17456);

(statearr_17519[(9)] = inst_17457);

(statearr_17519[(10)] = inst_17455);

(statearr_17519[(12)] = inst_17454);

return statearr_17519;
})();
var statearr_17520_17552 = state_17502__$1;
(statearr_17520_17552[(2)] = null);

(statearr_17520_17552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (17))){
var inst_17468 = (state_17502[(7)]);
var inst_17472 = cljs.core.chunk_first.call(null,inst_17468);
var inst_17473 = cljs.core.chunk_rest.call(null,inst_17468);
var inst_17474 = cljs.core.count.call(null,inst_17472);
var inst_17454 = inst_17473;
var inst_17455 = inst_17472;
var inst_17456 = inst_17474;
var inst_17457 = (0);
var state_17502__$1 = (function (){var statearr_17521 = state_17502;
(statearr_17521[(8)] = inst_17456);

(statearr_17521[(9)] = inst_17457);

(statearr_17521[(10)] = inst_17455);

(statearr_17521[(12)] = inst_17454);

return statearr_17521;
})();
var statearr_17522_17553 = state_17502__$1;
(statearr_17522_17553[(2)] = null);

(statearr_17522_17553[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (3))){
var inst_17500 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17502__$1,inst_17500);
} else {
if((state_val_17503 === (12))){
var inst_17488 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17523_17554 = state_17502__$1;
(statearr_17523_17554[(2)] = inst_17488);

(statearr_17523_17554[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (2))){
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17502__$1,(4),in$);
} else {
if((state_val_17503 === (23))){
var inst_17496 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17524_17555 = state_17502__$1;
(statearr_17524_17555[(2)] = inst_17496);

(statearr_17524_17555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (19))){
var inst_17483 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17525_17556 = state_17502__$1;
(statearr_17525_17556[(2)] = inst_17483);

(statearr_17525_17556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (11))){
var inst_17468 = (state_17502[(7)]);
var inst_17454 = (state_17502[(12)]);
var inst_17468__$1 = cljs.core.seq.call(null,inst_17454);
var state_17502__$1 = (function (){var statearr_17526 = state_17502;
(statearr_17526[(7)] = inst_17468__$1);

return statearr_17526;
})();
if(inst_17468__$1){
var statearr_17527_17557 = state_17502__$1;
(statearr_17527_17557[(1)] = (14));

} else {
var statearr_17528_17558 = state_17502__$1;
(statearr_17528_17558[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (9))){
var inst_17490 = (state_17502[(2)]);
var inst_17491 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_17502__$1 = (function (){var statearr_17529 = state_17502;
(statearr_17529[(15)] = inst_17490);

return statearr_17529;
})();
if(cljs.core.truth_(inst_17491)){
var statearr_17530_17559 = state_17502__$1;
(statearr_17530_17559[(1)] = (21));

} else {
var statearr_17531_17560 = state_17502__$1;
(statearr_17531_17560[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (5))){
var inst_17446 = cljs.core.async.close_BANG_.call(null,out);
var state_17502__$1 = state_17502;
var statearr_17532_17561 = state_17502__$1;
(statearr_17532_17561[(2)] = inst_17446);

(statearr_17532_17561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (14))){
var inst_17468 = (state_17502[(7)]);
var inst_17470 = cljs.core.chunked_seq_QMARK_.call(null,inst_17468);
var state_17502__$1 = state_17502;
if(inst_17470){
var statearr_17533_17562 = state_17502__$1;
(statearr_17533_17562[(1)] = (17));

} else {
var statearr_17534_17563 = state_17502__$1;
(statearr_17534_17563[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (16))){
var inst_17486 = (state_17502[(2)]);
var state_17502__$1 = state_17502;
var statearr_17535_17564 = state_17502__$1;
(statearr_17535_17564[(2)] = inst_17486);

(statearr_17535_17564[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17503 === (10))){
var inst_17457 = (state_17502[(9)]);
var inst_17455 = (state_17502[(10)]);
var inst_17462 = cljs.core._nth.call(null,inst_17455,inst_17457);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17502__$1,(13),out,inst_17462);
} else {
if((state_val_17503 === (18))){
var inst_17468 = (state_17502[(7)]);
var inst_17477 = cljs.core.first.call(null,inst_17468);
var state_17502__$1 = state_17502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17502__$1,(20),out,inst_17477);
} else {
if((state_val_17503 === (8))){
var inst_17456 = (state_17502[(8)]);
var inst_17457 = (state_17502[(9)]);
var inst_17459 = (inst_17457 < inst_17456);
var inst_17460 = inst_17459;
var state_17502__$1 = state_17502;
if(cljs.core.truth_(inst_17460)){
var statearr_17536_17565 = state_17502__$1;
(statearr_17536_17565[(1)] = (10));

} else {
var statearr_17537_17566 = state_17502__$1;
(statearr_17537_17566[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__13924__auto__))
;
return ((function (switch__13799__auto__,c__13924__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____0 = (function (){
var statearr_17538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17538[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__);

(statearr_17538[(1)] = (1));

return statearr_17538;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____1 = (function (state_17502){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17539){var ex__13803__auto__ = e17539;
var statearr_17540_17567 = state_17502;
(statearr_17540_17567[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17502[(4)]))){
var statearr_17541_17568 = state_17502;
(statearr_17541_17568[(1)] = cljs.core.first.call(null,(state_17502[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17569 = state_17502;
state_17502 = G__17569;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__ = function(state_17502){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____1.call(this,state_17502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13800__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto__))
})();
var state__13926__auto__ = (function (){var statearr_17542 = f__13925__auto__.call(null);
(statearr_17542[(6)] = c__13924__auto__);

return statearr_17542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto__))
);

return c__13924__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17571 = arguments.length;
switch (G__17571) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17574 = arguments.length;
switch (G__17574) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17577 = arguments.length;
switch (G__17577) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17625,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17625,out){
return (function (state_17601){
var state_val_17602 = (state_17601[(1)]);
if((state_val_17602 === (7))){
var inst_17596 = (state_17601[(2)]);
var state_17601__$1 = state_17601;
var statearr_17603_17626 = state_17601__$1;
(statearr_17603_17626[(2)] = inst_17596);

(statearr_17603_17626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (1))){
var inst_17578 = null;
var state_17601__$1 = (function (){var statearr_17604 = state_17601;
(statearr_17604[(7)] = inst_17578);

return statearr_17604;
})();
var statearr_17605_17627 = state_17601__$1;
(statearr_17605_17627[(2)] = null);

(statearr_17605_17627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (4))){
var inst_17581 = (state_17601[(8)]);
var inst_17581__$1 = (state_17601[(2)]);
var inst_17582 = (inst_17581__$1 == null);
var inst_17583 = cljs.core.not.call(null,inst_17582);
var state_17601__$1 = (function (){var statearr_17606 = state_17601;
(statearr_17606[(8)] = inst_17581__$1);

return statearr_17606;
})();
if(inst_17583){
var statearr_17607_17628 = state_17601__$1;
(statearr_17607_17628[(1)] = (5));

} else {
var statearr_17608_17629 = state_17601__$1;
(statearr_17608_17629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (6))){
var state_17601__$1 = state_17601;
var statearr_17609_17630 = state_17601__$1;
(statearr_17609_17630[(2)] = null);

(statearr_17609_17630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (3))){
var inst_17598 = (state_17601[(2)]);
var inst_17599 = cljs.core.async.close_BANG_.call(null,out);
var state_17601__$1 = (function (){var statearr_17610 = state_17601;
(statearr_17610[(9)] = inst_17598);

return statearr_17610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17601__$1,inst_17599);
} else {
if((state_val_17602 === (2))){
var state_17601__$1 = state_17601;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17601__$1,(4),ch);
} else {
if((state_val_17602 === (11))){
var inst_17581 = (state_17601[(8)]);
var inst_17590 = (state_17601[(2)]);
var inst_17578 = inst_17581;
var state_17601__$1 = (function (){var statearr_17611 = state_17601;
(statearr_17611[(7)] = inst_17578);

(statearr_17611[(10)] = inst_17590);

return statearr_17611;
})();
var statearr_17612_17631 = state_17601__$1;
(statearr_17612_17631[(2)] = null);

(statearr_17612_17631[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (9))){
var inst_17581 = (state_17601[(8)]);
var state_17601__$1 = state_17601;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17601__$1,(11),out,inst_17581);
} else {
if((state_val_17602 === (5))){
var inst_17581 = (state_17601[(8)]);
var inst_17578 = (state_17601[(7)]);
var inst_17585 = cljs.core._EQ_.call(null,inst_17581,inst_17578);
var state_17601__$1 = state_17601;
if(inst_17585){
var statearr_17614_17632 = state_17601__$1;
(statearr_17614_17632[(1)] = (8));

} else {
var statearr_17615_17633 = state_17601__$1;
(statearr_17615_17633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (10))){
var inst_17593 = (state_17601[(2)]);
var state_17601__$1 = state_17601;
var statearr_17616_17634 = state_17601__$1;
(statearr_17616_17634[(2)] = inst_17593);

(statearr_17616_17634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17602 === (8))){
var inst_17578 = (state_17601[(7)]);
var tmp17613 = inst_17578;
var inst_17578__$1 = tmp17613;
var state_17601__$1 = (function (){var statearr_17617 = state_17601;
(statearr_17617[(7)] = inst_17578__$1);

return statearr_17617;
})();
var statearr_17618_17635 = state_17601__$1;
(statearr_17618_17635[(2)] = null);

(statearr_17618_17635[(1)] = (2));


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
}
}
}
}
});})(c__13924__auto___17625,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17625,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17619 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17619[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17619[(1)] = (1));

return statearr_17619;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17601){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17601);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17620){var ex__13803__auto__ = e17620;
var statearr_17621_17636 = state_17601;
(statearr_17621_17636[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17601[(4)]))){
var statearr_17622_17637 = state_17601;
(statearr_17622_17637[(1)] = cljs.core.first.call(null,(state_17601[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17638 = state_17601;
state_17601 = G__17638;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17625,out))
})();
var state__13926__auto__ = (function (){var statearr_17623 = f__13925__auto__.call(null);
(statearr_17623[(6)] = c__13924__auto___17625);

return statearr_17623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17625,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17640 = arguments.length;
switch (G__17640) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17707,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17707,out){
return (function (state_17678){
var state_val_17679 = (state_17678[(1)]);
if((state_val_17679 === (7))){
var inst_17674 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17680_17708 = state_17678__$1;
(statearr_17680_17708[(2)] = inst_17674);

(statearr_17680_17708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (1))){
var inst_17641 = (new Array(n));
var inst_17642 = inst_17641;
var inst_17643 = (0);
var state_17678__$1 = (function (){var statearr_17681 = state_17678;
(statearr_17681[(7)] = inst_17643);

(statearr_17681[(8)] = inst_17642);

return statearr_17681;
})();
var statearr_17682_17709 = state_17678__$1;
(statearr_17682_17709[(2)] = null);

(statearr_17682_17709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (4))){
var inst_17646 = (state_17678[(9)]);
var inst_17646__$1 = (state_17678[(2)]);
var inst_17647 = (inst_17646__$1 == null);
var inst_17648 = cljs.core.not.call(null,inst_17647);
var state_17678__$1 = (function (){var statearr_17683 = state_17678;
(statearr_17683[(9)] = inst_17646__$1);

return statearr_17683;
})();
if(inst_17648){
var statearr_17684_17710 = state_17678__$1;
(statearr_17684_17710[(1)] = (5));

} else {
var statearr_17685_17711 = state_17678__$1;
(statearr_17685_17711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (15))){
var inst_17668 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17686_17712 = state_17678__$1;
(statearr_17686_17712[(2)] = inst_17668);

(statearr_17686_17712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (13))){
var state_17678__$1 = state_17678;
var statearr_17687_17713 = state_17678__$1;
(statearr_17687_17713[(2)] = null);

(statearr_17687_17713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (6))){
var inst_17643 = (state_17678[(7)]);
var inst_17664 = (inst_17643 > (0));
var state_17678__$1 = state_17678;
if(cljs.core.truth_(inst_17664)){
var statearr_17688_17714 = state_17678__$1;
(statearr_17688_17714[(1)] = (12));

} else {
var statearr_17689_17715 = state_17678__$1;
(statearr_17689_17715[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (3))){
var inst_17676 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17678__$1,inst_17676);
} else {
if((state_val_17679 === (12))){
var inst_17642 = (state_17678[(8)]);
var inst_17666 = cljs.core.vec.call(null,inst_17642);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17678__$1,(15),out,inst_17666);
} else {
if((state_val_17679 === (2))){
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17678__$1,(4),ch);
} else {
if((state_val_17679 === (11))){
var inst_17658 = (state_17678[(2)]);
var inst_17659 = (new Array(n));
var inst_17642 = inst_17659;
var inst_17643 = (0);
var state_17678__$1 = (function (){var statearr_17690 = state_17678;
(statearr_17690[(7)] = inst_17643);

(statearr_17690[(8)] = inst_17642);

(statearr_17690[(10)] = inst_17658);

return statearr_17690;
})();
var statearr_17691_17716 = state_17678__$1;
(statearr_17691_17716[(2)] = null);

(statearr_17691_17716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (9))){
var inst_17642 = (state_17678[(8)]);
var inst_17656 = cljs.core.vec.call(null,inst_17642);
var state_17678__$1 = state_17678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17678__$1,(11),out,inst_17656);
} else {
if((state_val_17679 === (5))){
var inst_17643 = (state_17678[(7)]);
var inst_17642 = (state_17678[(8)]);
var inst_17651 = (state_17678[(11)]);
var inst_17646 = (state_17678[(9)]);
var inst_17650 = (inst_17642[inst_17643] = inst_17646);
var inst_17651__$1 = (inst_17643 + (1));
var inst_17652 = (inst_17651__$1 < n);
var state_17678__$1 = (function (){var statearr_17692 = state_17678;
(statearr_17692[(11)] = inst_17651__$1);

(statearr_17692[(12)] = inst_17650);

return statearr_17692;
})();
if(cljs.core.truth_(inst_17652)){
var statearr_17693_17717 = state_17678__$1;
(statearr_17693_17717[(1)] = (8));

} else {
var statearr_17694_17718 = state_17678__$1;
(statearr_17694_17718[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (14))){
var inst_17671 = (state_17678[(2)]);
var inst_17672 = cljs.core.async.close_BANG_.call(null,out);
var state_17678__$1 = (function (){var statearr_17696 = state_17678;
(statearr_17696[(13)] = inst_17671);

return statearr_17696;
})();
var statearr_17697_17719 = state_17678__$1;
(statearr_17697_17719[(2)] = inst_17672);

(statearr_17697_17719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (10))){
var inst_17662 = (state_17678[(2)]);
var state_17678__$1 = state_17678;
var statearr_17698_17720 = state_17678__$1;
(statearr_17698_17720[(2)] = inst_17662);

(statearr_17698_17720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17679 === (8))){
var inst_17642 = (state_17678[(8)]);
var inst_17651 = (state_17678[(11)]);
var tmp17695 = inst_17642;
var inst_17642__$1 = tmp17695;
var inst_17643 = inst_17651;
var state_17678__$1 = (function (){var statearr_17699 = state_17678;
(statearr_17699[(7)] = inst_17643);

(statearr_17699[(8)] = inst_17642__$1);

return statearr_17699;
})();
var statearr_17700_17721 = state_17678__$1;
(statearr_17700_17721[(2)] = null);

(statearr_17700_17721[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__13924__auto___17707,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17707,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17701[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17701[(1)] = (1));

return statearr_17701;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17678){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17702){var ex__13803__auto__ = e17702;
var statearr_17703_17722 = state_17678;
(statearr_17703_17722[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17678[(4)]))){
var statearr_17704_17723 = state_17678;
(statearr_17704_17723[(1)] = cljs.core.first.call(null,(state_17678[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17724 = state_17678;
state_17678 = G__17724;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17707,out))
})();
var state__13926__auto__ = (function (){var statearr_17705 = f__13925__auto__.call(null);
(statearr_17705[(6)] = c__13924__auto___17707);

return statearr_17705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17707,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17726 = arguments.length;
switch (G__17726) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__13924__auto___17797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__13924__auto___17797,out){
return (function (){
var f__13925__auto__ = (function (){var switch__13799__auto__ = ((function (c__13924__auto___17797,out){
return (function (state_17768){
var state_val_17769 = (state_17768[(1)]);
if((state_val_17769 === (7))){
var inst_17764 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
var statearr_17770_17798 = state_17768__$1;
(statearr_17770_17798[(2)] = inst_17764);

(statearr_17770_17798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (1))){
var inst_17727 = [];
var inst_17728 = inst_17727;
var inst_17729 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17768__$1 = (function (){var statearr_17771 = state_17768;
(statearr_17771[(7)] = inst_17728);

(statearr_17771[(8)] = inst_17729);

return statearr_17771;
})();
var statearr_17772_17799 = state_17768__$1;
(statearr_17772_17799[(2)] = null);

(statearr_17772_17799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (4))){
var inst_17732 = (state_17768[(9)]);
var inst_17732__$1 = (state_17768[(2)]);
var inst_17733 = (inst_17732__$1 == null);
var inst_17734 = cljs.core.not.call(null,inst_17733);
var state_17768__$1 = (function (){var statearr_17773 = state_17768;
(statearr_17773[(9)] = inst_17732__$1);

return statearr_17773;
})();
if(inst_17734){
var statearr_17774_17800 = state_17768__$1;
(statearr_17774_17800[(1)] = (5));

} else {
var statearr_17775_17801 = state_17768__$1;
(statearr_17775_17801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (15))){
var inst_17758 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
var statearr_17776_17802 = state_17768__$1;
(statearr_17776_17802[(2)] = inst_17758);

(statearr_17776_17802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (13))){
var state_17768__$1 = state_17768;
var statearr_17777_17803 = state_17768__$1;
(statearr_17777_17803[(2)] = null);

(statearr_17777_17803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (6))){
var inst_17728 = (state_17768[(7)]);
var inst_17753 = inst_17728.length;
var inst_17754 = (inst_17753 > (0));
var state_17768__$1 = state_17768;
if(cljs.core.truth_(inst_17754)){
var statearr_17778_17804 = state_17768__$1;
(statearr_17778_17804[(1)] = (12));

} else {
var statearr_17779_17805 = state_17768__$1;
(statearr_17779_17805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (3))){
var inst_17766 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17768__$1,inst_17766);
} else {
if((state_val_17769 === (12))){
var inst_17728 = (state_17768[(7)]);
var inst_17756 = cljs.core.vec.call(null,inst_17728);
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17768__$1,(15),out,inst_17756);
} else {
if((state_val_17769 === (2))){
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17768__$1,(4),ch);
} else {
if((state_val_17769 === (11))){
var inst_17732 = (state_17768[(9)]);
var inst_17736 = (state_17768[(10)]);
var inst_17746 = (state_17768[(2)]);
var inst_17747 = [];
var inst_17748 = inst_17747.push(inst_17732);
var inst_17728 = inst_17747;
var inst_17729 = inst_17736;
var state_17768__$1 = (function (){var statearr_17780 = state_17768;
(statearr_17780[(7)] = inst_17728);

(statearr_17780[(11)] = inst_17746);

(statearr_17780[(8)] = inst_17729);

(statearr_17780[(12)] = inst_17748);

return statearr_17780;
})();
var statearr_17781_17806 = state_17768__$1;
(statearr_17781_17806[(2)] = null);

(statearr_17781_17806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (9))){
var inst_17728 = (state_17768[(7)]);
var inst_17744 = cljs.core.vec.call(null,inst_17728);
var state_17768__$1 = state_17768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17768__$1,(11),out,inst_17744);
} else {
if((state_val_17769 === (5))){
var inst_17732 = (state_17768[(9)]);
var inst_17736 = (state_17768[(10)]);
var inst_17729 = (state_17768[(8)]);
var inst_17736__$1 = f.call(null,inst_17732);
var inst_17737 = cljs.core._EQ_.call(null,inst_17736__$1,inst_17729);
var inst_17738 = cljs.core.keyword_identical_QMARK_.call(null,inst_17729,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_17739 = ((inst_17737) || (inst_17738));
var state_17768__$1 = (function (){var statearr_17782 = state_17768;
(statearr_17782[(10)] = inst_17736__$1);

return statearr_17782;
})();
if(cljs.core.truth_(inst_17739)){
var statearr_17783_17807 = state_17768__$1;
(statearr_17783_17807[(1)] = (8));

} else {
var statearr_17784_17808 = state_17768__$1;
(statearr_17784_17808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (14))){
var inst_17761 = (state_17768[(2)]);
var inst_17762 = cljs.core.async.close_BANG_.call(null,out);
var state_17768__$1 = (function (){var statearr_17786 = state_17768;
(statearr_17786[(13)] = inst_17761);

return statearr_17786;
})();
var statearr_17787_17809 = state_17768__$1;
(statearr_17787_17809[(2)] = inst_17762);

(statearr_17787_17809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (10))){
var inst_17751 = (state_17768[(2)]);
var state_17768__$1 = state_17768;
var statearr_17788_17810 = state_17768__$1;
(statearr_17788_17810[(2)] = inst_17751);

(statearr_17788_17810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17769 === (8))){
var inst_17732 = (state_17768[(9)]);
var inst_17728 = (state_17768[(7)]);
var inst_17736 = (state_17768[(10)]);
var inst_17741 = inst_17728.push(inst_17732);
var tmp17785 = inst_17728;
var inst_17728__$1 = tmp17785;
var inst_17729 = inst_17736;
var state_17768__$1 = (function (){var statearr_17789 = state_17768;
(statearr_17789[(7)] = inst_17728__$1);

(statearr_17789[(8)] = inst_17729);

(statearr_17789[(14)] = inst_17741);

return statearr_17789;
})();
var statearr_17790_17811 = state_17768__$1;
(statearr_17790_17811[(2)] = null);

(statearr_17790_17811[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__13924__auto___17797,out))
;
return ((function (switch__13799__auto__,c__13924__auto___17797,out){
return (function() {
var cljs$core$async$state_machine__13800__auto__ = null;
var cljs$core$async$state_machine__13800__auto____0 = (function (){
var statearr_17791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17791[(0)] = cljs$core$async$state_machine__13800__auto__);

(statearr_17791[(1)] = (1));

return statearr_17791;
});
var cljs$core$async$state_machine__13800__auto____1 = (function (state_17768){
while(true){
var ret_value__13801__auto__ = (function (){try{while(true){
var result__13802__auto__ = switch__13799__auto__.call(null,state_17768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__13802__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13802__auto__;
}
break;
}
}catch (e17792){var ex__13803__auto__ = e17792;
var statearr_17793_17812 = state_17768;
(statearr_17793_17812[(2)] = ex__13803__auto__);


if(cljs.core.seq.call(null,(state_17768[(4)]))){
var statearr_17794_17813 = state_17768;
(statearr_17794_17813[(1)] = cljs.core.first.call(null,(state_17768[(4)])));

} else {
throw ex__13803__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__13801__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17814 = state_17768;
state_17768 = G__17814;
continue;
} else {
return ret_value__13801__auto__;
}
break;
}
});
cljs$core$async$state_machine__13800__auto__ = function(state_17768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13800__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13800__auto____1.call(this,state_17768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13800__auto____0;
cljs$core$async$state_machine__13800__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13800__auto____1;
return cljs$core$async$state_machine__13800__auto__;
})()
;})(switch__13799__auto__,c__13924__auto___17797,out))
})();
var state__13926__auto__ = (function (){var statearr_17795 = f__13925__auto__.call(null);
(statearr_17795[(6)] = c__13924__auto___17797);

return statearr_17795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__13926__auto__);
});})(c__13924__auto___17797,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
