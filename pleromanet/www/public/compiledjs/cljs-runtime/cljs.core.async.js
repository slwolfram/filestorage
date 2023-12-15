goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17035 = (function (f,blockable,meta17036){
this.f = f;
this.blockable = blockable;
this.meta17036 = meta17036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17037,meta17036__$1){
var self__ = this;
var _17037__$1 = this;
return (new cljs.core.async.t_cljs$core$async17035(self__.f,self__.blockable,meta17036__$1));
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17037){
var self__ = this;
var _17037__$1 = this;
return self__.meta17036;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17035.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17035.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17036","meta17036",-1193831569,null)], null);
}));

(cljs.core.async.t_cljs$core$async17035.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17035.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17035");

(cljs.core.async.t_cljs$core$async17035.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17035");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17035.
 */
cljs.core.async.__GT_t_cljs$core$async17035 = (function cljs$core$async$__GT_t_cljs$core$async17035(f,blockable,meta17036){
return (new cljs.core.async.t_cljs$core$async17035(f,blockable,meta17036));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17034 = arguments.length;
switch (G__17034) {
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

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async17035(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__17068 = arguments.length;
switch (G__17068) {
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

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17070 = arguments.length;
switch (G__17070) {
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

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__17075 = arguments.length;
switch (G__17075) {
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

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19053 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19053) : fn1.call(null,val_19053));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19053) : fn1.call(null,val_19053));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__17083 = arguments.length;
switch (G__17083) {
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

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19055 = n;
var x_19056 = (0);
while(true){
if((x_19056 < n__5636__auto___19055)){
(a[x_19056] = x_19056);

var G__19057 = (x_19056 + (1));
x_19056 = G__19057;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17088 = (function (flag,meta17089){
this.flag = flag;
this.meta17089 = meta17089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17090,meta17089__$1){
var self__ = this;
var _17090__$1 = this;
return (new cljs.core.async.t_cljs$core$async17088(self__.flag,meta17089__$1));
}));

(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17090){
var self__ = this;
var _17090__$1 = this;
return self__.meta17089;
}));

(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17088.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17088.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17089","meta17089",-1517239505,null)], null);
}));

(cljs.core.async.t_cljs$core$async17088.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17088");

(cljs.core.async.t_cljs$core$async17088.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17088");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17088.
 */
cljs.core.async.__GT_t_cljs$core$async17088 = (function cljs$core$async$__GT_t_cljs$core$async17088(flag,meta17089){
return (new cljs.core.async.t_cljs$core$async17088(flag,meta17089));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17088(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17097 = (function (flag,cb,meta17098){
this.flag = flag;
this.cb = cb;
this.meta17098 = meta17098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17099,meta17098__$1){
var self__ = this;
var _17099__$1 = this;
return (new cljs.core.async.t_cljs$core$async17097(self__.flag,self__.cb,meta17098__$1));
}));

(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17099){
var self__ = this;
var _17099__$1 = this;
return self__.meta17098;
}));

(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17097.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17098","meta17098",333162825,null)], null);
}));

(cljs.core.async.t_cljs$core$async17097.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17097");

(cljs.core.async.t_cljs$core$async17097.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17097");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17097.
 */
cljs.core.async.__GT_t_cljs$core$async17097 = (function cljs$core$async$__GT_t_cljs$core$async17097(flag,cb,meta17098){
return (new cljs.core.async.t_cljs$core$async17097(flag,cb,meta17098));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17097(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17105_SHARP_){
var G__17107 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17105_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17107) : fret.call(null,G__17107));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17106_SHARP_){
var G__17108 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17106_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17108) : fret.call(null,G__17108));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19061 = (i + (1));
i = G__19061;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___19062 = arguments.length;
var i__5770__auto___19063 = (0);
while(true){
if((i__5770__auto___19063 < len__5769__auto___19062)){
args__5775__auto__.push((arguments[i__5770__auto___19063]));

var G__19064 = (i__5770__auto___19063 + (1));
i__5770__auto___19063 = G__19064;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17116){
var map__17117 = p__17116;
var map__17117__$1 = cljs.core.__destructure_map(map__17117);
var opts = map__17117__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17114){
var G__17115 = cljs.core.first(seq17114);
var seq17114__$1 = cljs.core.next(seq17114);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17115,seq17114__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__17138 = arguments.length;
switch (G__17138) {
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

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16961__auto___19067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17218){
var state_val_17220 = (state_17218[(1)]);
if((state_val_17220 === (7))){
var inst_17201 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17233_19068 = state_17218__$1;
(statearr_17233_19068[(2)] = inst_17201);

(statearr_17233_19068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (1))){
var state_17218__$1 = state_17218;
var statearr_17243_19069 = state_17218__$1;
(statearr_17243_19069[(2)] = null);

(statearr_17243_19069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (4))){
var inst_17173 = (state_17218[(7)]);
var inst_17173__$1 = (state_17218[(2)]);
var inst_17180 = (inst_17173__$1 == null);
var state_17218__$1 = (function (){var statearr_17247 = state_17218;
(statearr_17247[(7)] = inst_17173__$1);

return statearr_17247;
})();
if(cljs.core.truth_(inst_17180)){
var statearr_17248_19070 = state_17218__$1;
(statearr_17248_19070[(1)] = (5));

} else {
var statearr_17249_19071 = state_17218__$1;
(statearr_17249_19071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (13))){
var state_17218__$1 = state_17218;
var statearr_17253_19072 = state_17218__$1;
(statearr_17253_19072[(2)] = null);

(statearr_17253_19072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (6))){
var inst_17173 = (state_17218[(7)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17218__$1,(11),to,inst_17173);
} else {
if((state_val_17220 === (3))){
var inst_17204 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17218__$1,inst_17204);
} else {
if((state_val_17220 === (12))){
var state_17218__$1 = state_17218;
var statearr_17260_19073 = state_17218__$1;
(statearr_17260_19073[(2)] = null);

(statearr_17260_19073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (2))){
var state_17218__$1 = state_17218;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17218__$1,(4),from);
} else {
if((state_val_17220 === (11))){
var inst_17193 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
if(cljs.core.truth_(inst_17193)){
var statearr_17265_19074 = state_17218__$1;
(statearr_17265_19074[(1)] = (12));

} else {
var statearr_17266_19075 = state_17218__$1;
(statearr_17266_19075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (9))){
var state_17218__$1 = state_17218;
var statearr_17267_19076 = state_17218__$1;
(statearr_17267_19076[(2)] = null);

(statearr_17267_19076[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (5))){
var state_17218__$1 = state_17218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17270_19077 = state_17218__$1;
(statearr_17270_19077[(1)] = (8));

} else {
var statearr_17272_19079 = state_17218__$1;
(statearr_17272_19079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (14))){
var inst_17199 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17275_19080 = state_17218__$1;
(statearr_17275_19080[(2)] = inst_17199);

(statearr_17275_19080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (10))){
var inst_17190 = (state_17218[(2)]);
var state_17218__$1 = state_17218;
var statearr_17279_19081 = state_17218__$1;
(statearr_17279_19081[(2)] = inst_17190);

(statearr_17279_19081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17220 === (8))){
var inst_17187 = cljs.core.async.close_BANG_(to);
var state_17218__$1 = state_17218;
var statearr_17280_19082 = state_17218__$1;
(statearr_17280_19082[(2)] = inst_17187);

(statearr_17280_19082[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_17282 = [null,null,null,null,null,null,null,null];
(statearr_17282[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_17282[(1)] = (1));

return statearr_17282;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_17218){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17218);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17284){var ex__16849__auto__ = e17284;
var statearr_17285_19083 = state_17218;
(statearr_17285_19083[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17218[(4)]))){
var statearr_17286_19084 = state_17218;
(statearr_17286_19084[(1)] = cljs.core.first((state_17218[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19085 = state_17218;
state_17218 = G__19085;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_17218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_17218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17292 = f__16962__auto__();
(statearr_17292[(6)] = c__16961__auto___19067);

return statearr_17292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17306){
var vec__17308 = p__17306;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17308,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17308,(1),null);
var job = vec__17308;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16961__auto___19095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17319){
var state_val_17320 = (state_17319[(1)]);
if((state_val_17320 === (1))){
var state_17319__$1 = state_17319;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17319__$1,(2),res,v);
} else {
if((state_val_17320 === (2))){
var inst_17314 = (state_17319[(2)]);
var inst_17315 = cljs.core.async.close_BANG_(res);
var state_17319__$1 = (function (){var statearr_17323 = state_17319;
(statearr_17323[(7)] = inst_17314);

return statearr_17323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17319__$1,inst_17315);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_17325 = [null,null,null,null,null,null,null,null];
(statearr_17325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__);

(statearr_17325[(1)] = (1));

return statearr_17325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1 = (function (state_17319){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17319);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17326){var ex__16849__auto__ = e17326;
var statearr_17329_19098 = state_17319;
(statearr_17329_19098[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17319[(4)]))){
var statearr_17330_19099 = state_17319;
(statearr_17330_19099[(1)] = cljs.core.first((state_17319[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19100 = state_17319;
state_17319 = G__19100;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = function(state_17319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1.call(this,state_17319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17332 = f__16962__auto__();
(statearr_17332[(6)] = c__16961__auto___19095);

return statearr_17332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17335){
var vec__17336 = p__17335;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17336,(1),null);
var job = vec__17336;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19101 = n;
var __19102 = (0);
while(true){
if((__19102 < n__5636__auto___19101)){
var G__17341_19103 = type;
var G__17341_19104__$1 = (((G__17341_19103 instanceof cljs.core.Keyword))?G__17341_19103.fqn:null);
switch (G__17341_19104__$1) {
case "compute":
var c__16961__auto___19106 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19102,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = ((function (__19102,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function (state_17357){
var state_val_17358 = (state_17357[(1)]);
if((state_val_17358 === (1))){
var state_17357__$1 = state_17357;
var statearr_17362_19107 = state_17357__$1;
(statearr_17362_19107[(2)] = null);

(statearr_17362_19107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (2))){
var state_17357__$1 = state_17357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17357__$1,(4),jobs);
} else {
if((state_val_17358 === (3))){
var inst_17355 = (state_17357[(2)]);
var state_17357__$1 = state_17357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17357__$1,inst_17355);
} else {
if((state_val_17358 === (4))){
var inst_17347 = (state_17357[(2)]);
var inst_17348 = process__$1(inst_17347);
var state_17357__$1 = state_17357;
if(cljs.core.truth_(inst_17348)){
var statearr_17367_19109 = state_17357__$1;
(statearr_17367_19109[(1)] = (5));

} else {
var statearr_17368_19111 = state_17357__$1;
(statearr_17368_19111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (5))){
var state_17357__$1 = state_17357;
var statearr_17373_19112 = state_17357__$1;
(statearr_17373_19112[(2)] = null);

(statearr_17373_19112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (6))){
var state_17357__$1 = state_17357;
var statearr_17374_19113 = state_17357__$1;
(statearr_17374_19113[(2)] = null);

(statearr_17374_19113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17358 === (7))){
var inst_17353 = (state_17357[(2)]);
var state_17357__$1 = state_17357;
var statearr_17379_19114 = state_17357__$1;
(statearr_17379_19114[(2)] = inst_17353);

(statearr_17379_19114[(1)] = (3));


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
});})(__19102,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
;
return ((function (__19102,switch__16845__auto__,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_17380 = [null,null,null,null,null,null,null];
(statearr_17380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__);

(statearr_17380[(1)] = (1));

return statearr_17380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1 = (function (state_17357){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17357);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17381){var ex__16849__auto__ = e17381;
var statearr_17382_19115 = state_17357;
(statearr_17382_19115[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17357[(4)]))){
var statearr_17383_19116 = state_17357;
(statearr_17383_19116[(1)] = cljs.core.first((state_17357[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19117 = state_17357;
state_17357 = G__19117;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = function(state_17357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1.call(this,state_17357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__;
})()
;})(__19102,switch__16845__auto__,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
})();
var state__16963__auto__ = (function (){var statearr_17388 = f__16962__auto__();
(statearr_17388[(6)] = c__16961__auto___19106);

return statearr_17388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
});})(__19102,c__16961__auto___19106,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
);


break;
case "async":
var c__16961__auto___19118 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19102,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = ((function (__19102,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function (state_17401){
var state_val_17402 = (state_17401[(1)]);
if((state_val_17402 === (1))){
var state_17401__$1 = state_17401;
var statearr_17403_19121 = state_17401__$1;
(statearr_17403_19121[(2)] = null);

(statearr_17403_19121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17402 === (2))){
var state_17401__$1 = state_17401;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17401__$1,(4),jobs);
} else {
if((state_val_17402 === (3))){
var inst_17399 = (state_17401[(2)]);
var state_17401__$1 = state_17401;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17401__$1,inst_17399);
} else {
if((state_val_17402 === (4))){
var inst_17391 = (state_17401[(2)]);
var inst_17392 = async(inst_17391);
var state_17401__$1 = state_17401;
if(cljs.core.truth_(inst_17392)){
var statearr_17404_19123 = state_17401__$1;
(statearr_17404_19123[(1)] = (5));

} else {
var statearr_17405_19124 = state_17401__$1;
(statearr_17405_19124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17402 === (5))){
var state_17401__$1 = state_17401;
var statearr_17406_19125 = state_17401__$1;
(statearr_17406_19125[(2)] = null);

(statearr_17406_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17402 === (6))){
var state_17401__$1 = state_17401;
var statearr_17408_19126 = state_17401__$1;
(statearr_17408_19126[(2)] = null);

(statearr_17408_19126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17402 === (7))){
var inst_17397 = (state_17401[(2)]);
var state_17401__$1 = state_17401;
var statearr_17412_19127 = state_17401__$1;
(statearr_17412_19127[(2)] = inst_17397);

(statearr_17412_19127[(1)] = (3));


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
});})(__19102,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
;
return ((function (__19102,switch__16845__auto__,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_17413 = [null,null,null,null,null,null,null];
(statearr_17413[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__);

(statearr_17413[(1)] = (1));

return statearr_17413;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1 = (function (state_17401){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17401);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17414){var ex__16849__auto__ = e17414;
var statearr_17415_19128 = state_17401;
(statearr_17415_19128[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17401[(4)]))){
var statearr_17416_19130 = state_17401;
(statearr_17416_19130[(1)] = cljs.core.first((state_17401[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19131 = state_17401;
state_17401 = G__19131;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = function(state_17401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1.call(this,state_17401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__;
})()
;})(__19102,switch__16845__auto__,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
})();
var state__16963__auto__ = (function (){var statearr_17417 = f__16962__auto__();
(statearr_17417[(6)] = c__16961__auto___19118);

return statearr_17417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
});})(__19102,c__16961__auto___19118,G__17341_19103,G__17341_19104__$1,n__5636__auto___19101,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17341_19104__$1)].join('')));

}

var G__19132 = (__19102 + (1));
__19102 = G__19132;
continue;
} else {
}
break;
}

var c__16961__auto___19133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17443){
var state_val_17444 = (state_17443[(1)]);
if((state_val_17444 === (7))){
var inst_17439 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
var statearr_17445_19134 = state_17443__$1;
(statearr_17445_19134[(2)] = inst_17439);

(statearr_17445_19134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (1))){
var state_17443__$1 = state_17443;
var statearr_17446_19135 = state_17443__$1;
(statearr_17446_19135[(2)] = null);

(statearr_17446_19135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (4))){
var inst_17421 = (state_17443[(7)]);
var inst_17421__$1 = (state_17443[(2)]);
var inst_17422 = (inst_17421__$1 == null);
var state_17443__$1 = (function (){var statearr_17447 = state_17443;
(statearr_17447[(7)] = inst_17421__$1);

return statearr_17447;
})();
if(cljs.core.truth_(inst_17422)){
var statearr_17448_19136 = state_17443__$1;
(statearr_17448_19136[(1)] = (5));

} else {
var statearr_17449_19137 = state_17443__$1;
(statearr_17449_19137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (6))){
var inst_17426 = (state_17443[(8)]);
var inst_17421 = (state_17443[(7)]);
var inst_17426__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17429 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17431 = [inst_17421,inst_17426__$1];
var inst_17432 = (new cljs.core.PersistentVector(null,2,(5),inst_17429,inst_17431,null));
var state_17443__$1 = (function (){var statearr_17450 = state_17443;
(statearr_17450[(8)] = inst_17426__$1);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17443__$1,(8),jobs,inst_17432);
} else {
if((state_val_17444 === (3))){
var inst_17441 = (state_17443[(2)]);
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17443__$1,inst_17441);
} else {
if((state_val_17444 === (2))){
var state_17443__$1 = state_17443;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17443__$1,(4),from);
} else {
if((state_val_17444 === (9))){
var inst_17436 = (state_17443[(2)]);
var state_17443__$1 = (function (){var statearr_17451 = state_17443;
(statearr_17451[(9)] = inst_17436);

return statearr_17451;
})();
var statearr_17452_19142 = state_17443__$1;
(statearr_17452_19142[(2)] = null);

(statearr_17452_19142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (5))){
var inst_17424 = cljs.core.async.close_BANG_(jobs);
var state_17443__$1 = state_17443;
var statearr_17454_19143 = state_17443__$1;
(statearr_17454_19143[(2)] = inst_17424);

(statearr_17454_19143[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17444 === (8))){
var inst_17426 = (state_17443[(8)]);
var inst_17434 = (state_17443[(2)]);
var state_17443__$1 = (function (){var statearr_17455 = state_17443;
(statearr_17455[(10)] = inst_17434);

return statearr_17455;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17443__$1,(9),results,inst_17426);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_17456 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17456[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__);

(statearr_17456[(1)] = (1));

return statearr_17456;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1 = (function (state_17443){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17443);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17458){var ex__16849__auto__ = e17458;
var statearr_17459_19144 = state_17443;
(statearr_17459_19144[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17443[(4)]))){
var statearr_17460_19145 = state_17443;
(statearr_17460_19145[(1)] = cljs.core.first((state_17443[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19146 = state_17443;
state_17443 = G__19146;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = function(state_17443){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1.call(this,state_17443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17464 = f__16962__auto__();
(statearr_17464[(6)] = c__16961__auto___19133);

return statearr_17464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


var c__16961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17504){
var state_val_17505 = (state_17504[(1)]);
if((state_val_17505 === (7))){
var inst_17499 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17509_19147 = state_17504__$1;
(statearr_17509_19147[(2)] = inst_17499);

(statearr_17509_19147[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (20))){
var state_17504__$1 = state_17504;
var statearr_17510_19148 = state_17504__$1;
(statearr_17510_19148[(2)] = null);

(statearr_17510_19148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (1))){
var state_17504__$1 = state_17504;
var statearr_17511_19149 = state_17504__$1;
(statearr_17511_19149[(2)] = null);

(statearr_17511_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (4))){
var inst_17468 = (state_17504[(7)]);
var inst_17468__$1 = (state_17504[(2)]);
var inst_17469 = (inst_17468__$1 == null);
var state_17504__$1 = (function (){var statearr_17512 = state_17504;
(statearr_17512[(7)] = inst_17468__$1);

return statearr_17512;
})();
if(cljs.core.truth_(inst_17469)){
var statearr_17513_19150 = state_17504__$1;
(statearr_17513_19150[(1)] = (5));

} else {
var statearr_17514_19151 = state_17504__$1;
(statearr_17514_19151[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (15))){
var inst_17481 = (state_17504[(8)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17504__$1,(18),to,inst_17481);
} else {
if((state_val_17505 === (21))){
var inst_17494 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17516_19152 = state_17504__$1;
(statearr_17516_19152[(2)] = inst_17494);

(statearr_17516_19152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (13))){
var inst_17496 = (state_17504[(2)]);
var state_17504__$1 = (function (){var statearr_17519 = state_17504;
(statearr_17519[(9)] = inst_17496);

return statearr_17519;
})();
var statearr_17520_19154 = state_17504__$1;
(statearr_17520_19154[(2)] = null);

(statearr_17520_19154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (6))){
var inst_17468 = (state_17504[(7)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(11),inst_17468);
} else {
if((state_val_17505 === (17))){
var inst_17489 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
if(cljs.core.truth_(inst_17489)){
var statearr_17523_19156 = state_17504__$1;
(statearr_17523_19156[(1)] = (19));

} else {
var statearr_17524_19157 = state_17504__$1;
(statearr_17524_19157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (3))){
var inst_17501 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17504__$1,inst_17501);
} else {
if((state_val_17505 === (12))){
var inst_17478 = (state_17504[(10)]);
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(14),inst_17478);
} else {
if((state_val_17505 === (2))){
var state_17504__$1 = state_17504;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17504__$1,(4),results);
} else {
if((state_val_17505 === (19))){
var state_17504__$1 = state_17504;
var statearr_17525_19158 = state_17504__$1;
(statearr_17525_19158[(2)] = null);

(statearr_17525_19158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (11))){
var inst_17478 = (state_17504[(2)]);
var state_17504__$1 = (function (){var statearr_17526 = state_17504;
(statearr_17526[(10)] = inst_17478);

return statearr_17526;
})();
var statearr_17527_19159 = state_17504__$1;
(statearr_17527_19159[(2)] = null);

(statearr_17527_19159[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (9))){
var state_17504__$1 = state_17504;
var statearr_17528_19160 = state_17504__$1;
(statearr_17528_19160[(2)] = null);

(statearr_17528_19160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (5))){
var state_17504__$1 = state_17504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17529_19161 = state_17504__$1;
(statearr_17529_19161[(1)] = (8));

} else {
var statearr_17530_19162 = state_17504__$1;
(statearr_17530_19162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (14))){
var inst_17481 = (state_17504[(8)]);
var inst_17483 = (state_17504[(11)]);
var inst_17481__$1 = (state_17504[(2)]);
var inst_17482 = (inst_17481__$1 == null);
var inst_17483__$1 = cljs.core.not(inst_17482);
var state_17504__$1 = (function (){var statearr_17532 = state_17504;
(statearr_17532[(8)] = inst_17481__$1);

(statearr_17532[(11)] = inst_17483__$1);

return statearr_17532;
})();
if(inst_17483__$1){
var statearr_17533_19163 = state_17504__$1;
(statearr_17533_19163[(1)] = (15));

} else {
var statearr_17534_19164 = state_17504__$1;
(statearr_17534_19164[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (16))){
var inst_17483 = (state_17504[(11)]);
var state_17504__$1 = state_17504;
var statearr_17537_19169 = state_17504__$1;
(statearr_17537_19169[(2)] = inst_17483);

(statearr_17537_19169[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (10))){
var inst_17475 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17540_19173 = state_17504__$1;
(statearr_17540_19173[(2)] = inst_17475);

(statearr_17540_19173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (18))){
var inst_17486 = (state_17504[(2)]);
var state_17504__$1 = state_17504;
var statearr_17541_19174 = state_17504__$1;
(statearr_17541_19174[(2)] = inst_17486);

(statearr_17541_19174[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17505 === (8))){
var inst_17472 = cljs.core.async.close_BANG_(to);
var state_17504__$1 = state_17504;
var statearr_17542_19175 = state_17504__$1;
(statearr_17542_19175[(2)] = inst_17472);

(statearr_17542_19175[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_17543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__);

(statearr_17543[(1)] = (1));

return statearr_17543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1 = (function (state_17504){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17504);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17544){var ex__16849__auto__ = e17544;
var statearr_17545_19179 = state_17504;
(statearr_17545_19179[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17504[(4)]))){
var statearr_17546_19180 = state_17504;
(statearr_17546_19180[(1)] = cljs.core.first((state_17504[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19181 = state_17504;
state_17504 = G__19181;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__ = function(state_17504){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1.call(this,state_17504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17547 = f__16962__auto__();
(statearr_17547[(6)] = c__16961__auto__);

return statearr_17547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

return c__16961__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__17549 = arguments.length;
switch (G__17549) {
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

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__17556 = arguments.length;
switch (G__17556) {
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

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__17563 = arguments.length;
switch (G__17563) {
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

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16961__auto___19212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17593){
var state_val_17594 = (state_17593[(1)]);
if((state_val_17594 === (7))){
var inst_17589 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
var statearr_17596_19213 = state_17593__$1;
(statearr_17596_19213[(2)] = inst_17589);

(statearr_17596_19213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (1))){
var state_17593__$1 = state_17593;
var statearr_17599_19214 = state_17593__$1;
(statearr_17599_19214[(2)] = null);

(statearr_17599_19214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (4))){
var inst_17570 = (state_17593[(7)]);
var inst_17570__$1 = (state_17593[(2)]);
var inst_17571 = (inst_17570__$1 == null);
var state_17593__$1 = (function (){var statearr_17602 = state_17593;
(statearr_17602[(7)] = inst_17570__$1);

return statearr_17602;
})();
if(cljs.core.truth_(inst_17571)){
var statearr_17603_19218 = state_17593__$1;
(statearr_17603_19218[(1)] = (5));

} else {
var statearr_17604_19219 = state_17593__$1;
(statearr_17604_19219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (13))){
var state_17593__$1 = state_17593;
var statearr_17605_19220 = state_17593__$1;
(statearr_17605_19220[(2)] = null);

(statearr_17605_19220[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (6))){
var inst_17570 = (state_17593[(7)]);
var inst_17576 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17570) : p.call(null,inst_17570));
var state_17593__$1 = state_17593;
if(cljs.core.truth_(inst_17576)){
var statearr_17606_19221 = state_17593__$1;
(statearr_17606_19221[(1)] = (9));

} else {
var statearr_17607_19222 = state_17593__$1;
(statearr_17607_19222[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (3))){
var inst_17591 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17593__$1,inst_17591);
} else {
if((state_val_17594 === (12))){
var state_17593__$1 = state_17593;
var statearr_17608_19223 = state_17593__$1;
(statearr_17608_19223[(2)] = null);

(statearr_17608_19223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (2))){
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17593__$1,(4),ch);
} else {
if((state_val_17594 === (11))){
var inst_17570 = (state_17593[(7)]);
var inst_17580 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17593__$1,(8),inst_17580,inst_17570);
} else {
if((state_val_17594 === (9))){
var state_17593__$1 = state_17593;
var statearr_17610_19229 = state_17593__$1;
(statearr_17610_19229[(2)] = tc);

(statearr_17610_19229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (5))){
var inst_17573 = cljs.core.async.close_BANG_(tc);
var inst_17574 = cljs.core.async.close_BANG_(fc);
var state_17593__$1 = (function (){var statearr_17612 = state_17593;
(statearr_17612[(8)] = inst_17573);

return statearr_17612;
})();
var statearr_17614_19232 = state_17593__$1;
(statearr_17614_19232[(2)] = inst_17574);

(statearr_17614_19232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (14))){
var inst_17587 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
var statearr_17617_19233 = state_17593__$1;
(statearr_17617_19233[(2)] = inst_17587);

(statearr_17617_19233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (10))){
var state_17593__$1 = state_17593;
var statearr_17618_19234 = state_17593__$1;
(statearr_17618_19234[(2)] = fc);

(statearr_17618_19234[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17594 === (8))){
var inst_17582 = (state_17593[(2)]);
var state_17593__$1 = state_17593;
if(cljs.core.truth_(inst_17582)){
var statearr_17619_19235 = state_17593__$1;
(statearr_17619_19235[(1)] = (12));

} else {
var statearr_17620_19236 = state_17593__$1;
(statearr_17620_19236[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_17621 = [null,null,null,null,null,null,null,null,null];
(statearr_17621[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_17621[(1)] = (1));

return statearr_17621;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_17593){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17593);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17622){var ex__16849__auto__ = e17622;
var statearr_17623_19237 = state_17593;
(statearr_17623_19237[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17593[(4)]))){
var statearr_17624_19238 = state_17593;
(statearr_17624_19238[(1)] = cljs.core.first((state_17593[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19239 = state_17593;
state_17593 = G__19239;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_17593){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_17593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17625 = f__16962__auto__();
(statearr_17625[(6)] = c__16961__auto___19212);

return statearr_17625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17648){
var state_val_17649 = (state_17648[(1)]);
if((state_val_17649 === (7))){
var inst_17644 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
var statearr_17654_19240 = state_17648__$1;
(statearr_17654_19240[(2)] = inst_17644);

(statearr_17654_19240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (1))){
var inst_17626 = init;
var inst_17628 = inst_17626;
var state_17648__$1 = (function (){var statearr_17655 = state_17648;
(statearr_17655[(7)] = inst_17628);

return statearr_17655;
})();
var statearr_17656_19241 = state_17648__$1;
(statearr_17656_19241[(2)] = null);

(statearr_17656_19241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (4))){
var inst_17631 = (state_17648[(8)]);
var inst_17631__$1 = (state_17648[(2)]);
var inst_17632 = (inst_17631__$1 == null);
var state_17648__$1 = (function (){var statearr_17657 = state_17648;
(statearr_17657[(8)] = inst_17631__$1);

return statearr_17657;
})();
if(cljs.core.truth_(inst_17632)){
var statearr_17658_19242 = state_17648__$1;
(statearr_17658_19242[(1)] = (5));

} else {
var statearr_17659_19243 = state_17648__$1;
(statearr_17659_19243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (6))){
var inst_17631 = (state_17648[(8)]);
var inst_17628 = (state_17648[(7)]);
var inst_17635 = (state_17648[(9)]);
var inst_17635__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17628,inst_17631) : f.call(null,inst_17628,inst_17631));
var inst_17636 = cljs.core.reduced_QMARK_(inst_17635__$1);
var state_17648__$1 = (function (){var statearr_17661 = state_17648;
(statearr_17661[(9)] = inst_17635__$1);

return statearr_17661;
})();
if(inst_17636){
var statearr_17662_19244 = state_17648__$1;
(statearr_17662_19244[(1)] = (8));

} else {
var statearr_17664_19245 = state_17648__$1;
(statearr_17664_19245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (3))){
var inst_17646 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17648__$1,inst_17646);
} else {
if((state_val_17649 === (2))){
var state_17648__$1 = state_17648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17648__$1,(4),ch);
} else {
if((state_val_17649 === (9))){
var inst_17635 = (state_17648[(9)]);
var inst_17628 = inst_17635;
var state_17648__$1 = (function (){var statearr_17668 = state_17648;
(statearr_17668[(7)] = inst_17628);

return statearr_17668;
})();
var statearr_17669_19246 = state_17648__$1;
(statearr_17669_19246[(2)] = null);

(statearr_17669_19246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (5))){
var inst_17628 = (state_17648[(7)]);
var state_17648__$1 = state_17648;
var statearr_17671_19248 = state_17648__$1;
(statearr_17671_19248[(2)] = inst_17628);

(statearr_17671_19248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (10))){
var inst_17642 = (state_17648[(2)]);
var state_17648__$1 = state_17648;
var statearr_17672_19250 = state_17648__$1;
(statearr_17672_19250[(2)] = inst_17642);

(statearr_17672_19250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17649 === (8))){
var inst_17635 = (state_17648[(9)]);
var inst_17638 = cljs.core.deref(inst_17635);
var state_17648__$1 = state_17648;
var statearr_17676_19254 = state_17648__$1;
(statearr_17676_19254[(2)] = inst_17638);

(statearr_17676_19254[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16846__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16846__auto____0 = (function (){
var statearr_17678 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17678[(0)] = cljs$core$async$reduce_$_state_machine__16846__auto__);

(statearr_17678[(1)] = (1));

return statearr_17678;
});
var cljs$core$async$reduce_$_state_machine__16846__auto____1 = (function (state_17648){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17648);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17679){var ex__16849__auto__ = e17679;
var statearr_17681_19256 = state_17648;
(statearr_17681_19256[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17648[(4)]))){
var statearr_17682_19257 = state_17648;
(statearr_17682_19257[(1)] = cljs.core.first((state_17648[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19259 = state_17648;
state_17648 = G__19259;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16846__auto__ = function(state_17648){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16846__auto____1.call(this,state_17648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16846__auto____0;
cljs$core$async$reduce_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16846__auto____1;
return cljs$core$async$reduce_$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17687 = f__16962__auto__();
(statearr_17687[(6)] = c__16961__auto__);

return statearr_17687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

return c__16961__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17696){
var state_val_17697 = (state_17696[(1)]);
if((state_val_17697 === (1))){
var inst_17691 = cljs.core.async.reduce(f__$1,init,ch);
var state_17696__$1 = state_17696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17696__$1,(2),inst_17691);
} else {
if((state_val_17697 === (2))){
var inst_17693 = (state_17696[(2)]);
var inst_17694 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17693) : f__$1.call(null,inst_17693));
var state_17696__$1 = state_17696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17696__$1,inst_17694);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16846__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16846__auto____0 = (function (){
var statearr_17698 = [null,null,null,null,null,null,null];
(statearr_17698[(0)] = cljs$core$async$transduce_$_state_machine__16846__auto__);

(statearr_17698[(1)] = (1));

return statearr_17698;
});
var cljs$core$async$transduce_$_state_machine__16846__auto____1 = (function (state_17696){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17696);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17699){var ex__16849__auto__ = e17699;
var statearr_17700_19261 = state_17696;
(statearr_17700_19261[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17696[(4)]))){
var statearr_17701_19262 = state_17696;
(statearr_17701_19262[(1)] = cljs.core.first((state_17696[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19263 = state_17696;
state_17696 = G__19263;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16846__auto__ = function(state_17696){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16846__auto____1.call(this,state_17696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16846__auto____0;
cljs$core$async$transduce_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16846__auto____1;
return cljs$core$async$transduce_$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17702 = f__16962__auto__();
(statearr_17702[(6)] = c__16961__auto__);

return statearr_17702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

return c__16961__auto__;
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
var G__17704 = arguments.length;
switch (G__17704) {
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

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17729){
var state_val_17730 = (state_17729[(1)]);
if((state_val_17730 === (7))){
var inst_17711 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17731_19266 = state_17729__$1;
(statearr_17731_19266[(2)] = inst_17711);

(statearr_17731_19266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (1))){
var inst_17705 = cljs.core.seq(coll);
var inst_17706 = inst_17705;
var state_17729__$1 = (function (){var statearr_17732 = state_17729;
(statearr_17732[(7)] = inst_17706);

return statearr_17732;
})();
var statearr_17733_19270 = state_17729__$1;
(statearr_17733_19270[(2)] = null);

(statearr_17733_19270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (4))){
var inst_17706 = (state_17729[(7)]);
var inst_17709 = cljs.core.first(inst_17706);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17729__$1,(7),ch,inst_17709);
} else {
if((state_val_17730 === (13))){
var inst_17723 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17734_19271 = state_17729__$1;
(statearr_17734_19271[(2)] = inst_17723);

(statearr_17734_19271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (6))){
var inst_17714 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
if(cljs.core.truth_(inst_17714)){
var statearr_17735_19274 = state_17729__$1;
(statearr_17735_19274[(1)] = (8));

} else {
var statearr_17736_19275 = state_17729__$1;
(statearr_17736_19275[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (3))){
var inst_17727 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17729__$1,inst_17727);
} else {
if((state_val_17730 === (12))){
var state_17729__$1 = state_17729;
var statearr_17737_19278 = state_17729__$1;
(statearr_17737_19278[(2)] = null);

(statearr_17737_19278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (2))){
var inst_17706 = (state_17729[(7)]);
var state_17729__$1 = state_17729;
if(cljs.core.truth_(inst_17706)){
var statearr_17738_19279 = state_17729__$1;
(statearr_17738_19279[(1)] = (4));

} else {
var statearr_17739_19280 = state_17729__$1;
(statearr_17739_19280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (11))){
var inst_17720 = cljs.core.async.close_BANG_(ch);
var state_17729__$1 = state_17729;
var statearr_17740_19281 = state_17729__$1;
(statearr_17740_19281[(2)] = inst_17720);

(statearr_17740_19281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (9))){
var state_17729__$1 = state_17729;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17741_19285 = state_17729__$1;
(statearr_17741_19285[(1)] = (11));

} else {
var statearr_17742_19290 = state_17729__$1;
(statearr_17742_19290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (5))){
var inst_17706 = (state_17729[(7)]);
var state_17729__$1 = state_17729;
var statearr_17743_19291 = state_17729__$1;
(statearr_17743_19291[(2)] = inst_17706);

(statearr_17743_19291[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (10))){
var inst_17725 = (state_17729[(2)]);
var state_17729__$1 = state_17729;
var statearr_17744_19298 = state_17729__$1;
(statearr_17744_19298[(2)] = inst_17725);

(statearr_17744_19298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17730 === (8))){
var inst_17706 = (state_17729[(7)]);
var inst_17716 = cljs.core.next(inst_17706);
var inst_17706__$1 = inst_17716;
var state_17729__$1 = (function (){var statearr_17746 = state_17729;
(statearr_17746[(7)] = inst_17706__$1);

return statearr_17746;
})();
var statearr_17747_19299 = state_17729__$1;
(statearr_17747_19299[(2)] = null);

(statearr_17747_19299[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_17748 = [null,null,null,null,null,null,null,null];
(statearr_17748[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_17748[(1)] = (1));

return statearr_17748;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_17729){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17729);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e17749){var ex__16849__auto__ = e17749;
var statearr_17750_19300 = state_17729;
(statearr_17750_19300[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17729[(4)]))){
var statearr_17751_19301 = state_17729;
(statearr_17751_19301[(1)] = cljs.core.first((state_17729[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19302 = state_17729;
state_17729 = G__19302;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_17729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_17729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_17752 = f__16962__auto__();
(statearr_17752[(6)] = c__16961__auto__);

return statearr_17752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

return c__16961__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__17754 = arguments.length;
switch (G__17754) {
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

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_19307 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_19307(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19314 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_19314(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19323 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_19323(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19327 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_19327(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17769 = (function (ch,cs,meta17770){
this.ch = ch;
this.cs = cs;
this.meta17770 = meta17770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17771,meta17770__$1){
var self__ = this;
var _17771__$1 = this;
return (new cljs.core.async.t_cljs$core$async17769(self__.ch,self__.cs,meta17770__$1));
}));

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17771){
var self__ = this;
var _17771__$1 = this;
return self__.meta17770;
}));

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17769.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17770","meta17770",2138853361,null)], null);
}));

(cljs.core.async.t_cljs$core$async17769.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17769.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17769");

(cljs.core.async.t_cljs$core$async17769.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17769");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17769.
 */
cljs.core.async.__GT_t_cljs$core$async17769 = (function cljs$core$async$__GT_t_cljs$core$async17769(ch,cs,meta17770){
return (new cljs.core.async.t_cljs$core$async17769(ch,cs,meta17770));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async17769(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16961__auto___19341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_17910){
var state_val_17911 = (state_17910[(1)]);
if((state_val_17911 === (7))){
var inst_17906 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17913_19343 = state_17910__$1;
(statearr_17913_19343[(2)] = inst_17906);

(statearr_17913_19343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (20))){
var inst_17809 = (state_17910[(7)]);
var inst_17821 = cljs.core.first(inst_17809);
var inst_17823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17821,(0),null);
var inst_17824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17821,(1),null);
var state_17910__$1 = (function (){var statearr_17916 = state_17910;
(statearr_17916[(8)] = inst_17823);

return statearr_17916;
})();
if(cljs.core.truth_(inst_17824)){
var statearr_17917_19345 = state_17910__$1;
(statearr_17917_19345[(1)] = (22));

} else {
var statearr_17918_19346 = state_17910__$1;
(statearr_17918_19346[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (27))){
var inst_17778 = (state_17910[(9)]);
var inst_17852 = (state_17910[(10)]);
var inst_17854 = (state_17910[(11)]);
var inst_17860 = (state_17910[(12)]);
var inst_17860__$1 = cljs.core._nth(inst_17852,inst_17854);
var inst_17861 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17860__$1,inst_17778,done);
var state_17910__$1 = (function (){var statearr_17920 = state_17910;
(statearr_17920[(12)] = inst_17860__$1);

return statearr_17920;
})();
if(cljs.core.truth_(inst_17861)){
var statearr_17921_19350 = state_17910__$1;
(statearr_17921_19350[(1)] = (30));

} else {
var statearr_17922_19351 = state_17910__$1;
(statearr_17922_19351[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (1))){
var state_17910__$1 = state_17910;
var statearr_17925_19359 = state_17910__$1;
(statearr_17925_19359[(2)] = null);

(statearr_17925_19359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (24))){
var inst_17809 = (state_17910[(7)]);
var inst_17829 = (state_17910[(2)]);
var inst_17830 = cljs.core.next(inst_17809);
var inst_17787 = inst_17830;
var inst_17788 = null;
var inst_17789 = (0);
var inst_17790 = (0);
var state_17910__$1 = (function (){var statearr_17926 = state_17910;
(statearr_17926[(13)] = inst_17787);

(statearr_17926[(14)] = inst_17829);

(statearr_17926[(15)] = inst_17790);

(statearr_17926[(16)] = inst_17788);

(statearr_17926[(17)] = inst_17789);

return statearr_17926;
})();
var statearr_17927_19364 = state_17910__$1;
(statearr_17927_19364[(2)] = null);

(statearr_17927_19364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (39))){
var state_17910__$1 = state_17910;
var statearr_17931_19365 = state_17910__$1;
(statearr_17931_19365[(2)] = null);

(statearr_17931_19365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (4))){
var inst_17778 = (state_17910[(9)]);
var inst_17778__$1 = (state_17910[(2)]);
var inst_17779 = (inst_17778__$1 == null);
var state_17910__$1 = (function (){var statearr_17932 = state_17910;
(statearr_17932[(9)] = inst_17778__$1);

return statearr_17932;
})();
if(cljs.core.truth_(inst_17779)){
var statearr_17933_19368 = state_17910__$1;
(statearr_17933_19368[(1)] = (5));

} else {
var statearr_17934_19369 = state_17910__$1;
(statearr_17934_19369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (15))){
var inst_17787 = (state_17910[(13)]);
var inst_17790 = (state_17910[(15)]);
var inst_17788 = (state_17910[(16)]);
var inst_17789 = (state_17910[(17)]);
var inst_17805 = (state_17910[(2)]);
var inst_17806 = (inst_17790 + (1));
var tmp17928 = inst_17787;
var tmp17929 = inst_17788;
var tmp17930 = inst_17789;
var inst_17787__$1 = tmp17928;
var inst_17788__$1 = tmp17929;
var inst_17789__$1 = tmp17930;
var inst_17790__$1 = inst_17806;
var state_17910__$1 = (function (){var statearr_17936 = state_17910;
(statearr_17936[(13)] = inst_17787__$1);

(statearr_17936[(15)] = inst_17790__$1);

(statearr_17936[(16)] = inst_17788__$1);

(statearr_17936[(17)] = inst_17789__$1);

(statearr_17936[(18)] = inst_17805);

return statearr_17936;
})();
var statearr_17937_19371 = state_17910__$1;
(statearr_17937_19371[(2)] = null);

(statearr_17937_19371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (21))){
var inst_17833 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17941_19373 = state_17910__$1;
(statearr_17941_19373[(2)] = inst_17833);

(statearr_17941_19373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (31))){
var inst_17860 = (state_17910[(12)]);
var inst_17864 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17860);
var state_17910__$1 = state_17910;
var statearr_17943_19374 = state_17910__$1;
(statearr_17943_19374[(2)] = inst_17864);

(statearr_17943_19374[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (32))){
var inst_17853 = (state_17910[(19)]);
var inst_17851 = (state_17910[(20)]);
var inst_17852 = (state_17910[(10)]);
var inst_17854 = (state_17910[(11)]);
var inst_17866 = (state_17910[(2)]);
var inst_17867 = (inst_17854 + (1));
var tmp17938 = inst_17853;
var tmp17939 = inst_17851;
var tmp17940 = inst_17852;
var inst_17851__$1 = tmp17939;
var inst_17852__$1 = tmp17940;
var inst_17853__$1 = tmp17938;
var inst_17854__$1 = inst_17867;
var state_17910__$1 = (function (){var statearr_17944 = state_17910;
(statearr_17944[(19)] = inst_17853__$1);

(statearr_17944[(20)] = inst_17851__$1);

(statearr_17944[(10)] = inst_17852__$1);

(statearr_17944[(11)] = inst_17854__$1);

(statearr_17944[(21)] = inst_17866);

return statearr_17944;
})();
var statearr_17945_19375 = state_17910__$1;
(statearr_17945_19375[(2)] = null);

(statearr_17945_19375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (40))){
var inst_17879 = (state_17910[(22)]);
var inst_17883 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17879);
var state_17910__$1 = state_17910;
var statearr_17946_19376 = state_17910__$1;
(statearr_17946_19376[(2)] = inst_17883);

(statearr_17946_19376[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (33))){
var inst_17870 = (state_17910[(23)]);
var inst_17872 = cljs.core.chunked_seq_QMARK_(inst_17870);
var state_17910__$1 = state_17910;
if(inst_17872){
var statearr_17947_19377 = state_17910__$1;
(statearr_17947_19377[(1)] = (36));

} else {
var statearr_17948_19378 = state_17910__$1;
(statearr_17948_19378[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (13))){
var inst_17799 = (state_17910[(24)]);
var inst_17802 = cljs.core.async.close_BANG_(inst_17799);
var state_17910__$1 = state_17910;
var statearr_17949_19379 = state_17910__$1;
(statearr_17949_19379[(2)] = inst_17802);

(statearr_17949_19379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (22))){
var inst_17823 = (state_17910[(8)]);
var inst_17826 = cljs.core.async.close_BANG_(inst_17823);
var state_17910__$1 = state_17910;
var statearr_17952_19380 = state_17910__$1;
(statearr_17952_19380[(2)] = inst_17826);

(statearr_17952_19380[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (36))){
var inst_17870 = (state_17910[(23)]);
var inst_17874 = cljs.core.chunk_first(inst_17870);
var inst_17875 = cljs.core.chunk_rest(inst_17870);
var inst_17876 = cljs.core.count(inst_17874);
var inst_17851 = inst_17875;
var inst_17852 = inst_17874;
var inst_17853 = inst_17876;
var inst_17854 = (0);
var state_17910__$1 = (function (){var statearr_17955 = state_17910;
(statearr_17955[(19)] = inst_17853);

(statearr_17955[(20)] = inst_17851);

(statearr_17955[(10)] = inst_17852);

(statearr_17955[(11)] = inst_17854);

return statearr_17955;
})();
var statearr_17956_19381 = state_17910__$1;
(statearr_17956_19381[(2)] = null);

(statearr_17956_19381[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (41))){
var inst_17870 = (state_17910[(23)]);
var inst_17885 = (state_17910[(2)]);
var inst_17886 = cljs.core.next(inst_17870);
var inst_17851 = inst_17886;
var inst_17852 = null;
var inst_17853 = (0);
var inst_17854 = (0);
var state_17910__$1 = (function (){var statearr_17957 = state_17910;
(statearr_17957[(19)] = inst_17853);

(statearr_17957[(20)] = inst_17851);

(statearr_17957[(10)] = inst_17852);

(statearr_17957[(11)] = inst_17854);

(statearr_17957[(25)] = inst_17885);

return statearr_17957;
})();
var statearr_17958_19383 = state_17910__$1;
(statearr_17958_19383[(2)] = null);

(statearr_17958_19383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (43))){
var state_17910__$1 = state_17910;
var statearr_17959_19388 = state_17910__$1;
(statearr_17959_19388[(2)] = null);

(statearr_17959_19388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (29))){
var inst_17894 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17960_19390 = state_17910__$1;
(statearr_17960_19390[(2)] = inst_17894);

(statearr_17960_19390[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (44))){
var inst_17903 = (state_17910[(2)]);
var state_17910__$1 = (function (){var statearr_17961 = state_17910;
(statearr_17961[(26)] = inst_17903);

return statearr_17961;
})();
var statearr_17962_19392 = state_17910__$1;
(statearr_17962_19392[(2)] = null);

(statearr_17962_19392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (6))){
var inst_17843 = (state_17910[(27)]);
var inst_17842 = cljs.core.deref(cs);
var inst_17843__$1 = cljs.core.keys(inst_17842);
var inst_17844 = cljs.core.count(inst_17843__$1);
var inst_17845 = cljs.core.reset_BANG_(dctr,inst_17844);
var inst_17850 = cljs.core.seq(inst_17843__$1);
var inst_17851 = inst_17850;
var inst_17852 = null;
var inst_17853 = (0);
var inst_17854 = (0);
var state_17910__$1 = (function (){var statearr_17963 = state_17910;
(statearr_17963[(19)] = inst_17853);

(statearr_17963[(20)] = inst_17851);

(statearr_17963[(10)] = inst_17852);

(statearr_17963[(11)] = inst_17854);

(statearr_17963[(28)] = inst_17845);

(statearr_17963[(27)] = inst_17843__$1);

return statearr_17963;
})();
var statearr_17965_19393 = state_17910__$1;
(statearr_17965_19393[(2)] = null);

(statearr_17965_19393[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (28))){
var inst_17851 = (state_17910[(20)]);
var inst_17870 = (state_17910[(23)]);
var inst_17870__$1 = cljs.core.seq(inst_17851);
var state_17910__$1 = (function (){var statearr_17969 = state_17910;
(statearr_17969[(23)] = inst_17870__$1);

return statearr_17969;
})();
if(inst_17870__$1){
var statearr_17970_19394 = state_17910__$1;
(statearr_17970_19394[(1)] = (33));

} else {
var statearr_17971_19395 = state_17910__$1;
(statearr_17971_19395[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (25))){
var inst_17853 = (state_17910[(19)]);
var inst_17854 = (state_17910[(11)]);
var inst_17856 = (inst_17854 < inst_17853);
var inst_17857 = inst_17856;
var state_17910__$1 = state_17910;
if(cljs.core.truth_(inst_17857)){
var statearr_17972_19396 = state_17910__$1;
(statearr_17972_19396[(1)] = (27));

} else {
var statearr_17973_19397 = state_17910__$1;
(statearr_17973_19397[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (34))){
var state_17910__$1 = state_17910;
var statearr_17974_19399 = state_17910__$1;
(statearr_17974_19399[(2)] = null);

(statearr_17974_19399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (17))){
var state_17910__$1 = state_17910;
var statearr_17975_19401 = state_17910__$1;
(statearr_17975_19401[(2)] = null);

(statearr_17975_19401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (3))){
var inst_17908 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17910__$1,inst_17908);
} else {
if((state_val_17911 === (12))){
var inst_17838 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17976_19402 = state_17910__$1;
(statearr_17976_19402[(2)] = inst_17838);

(statearr_17976_19402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (2))){
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17910__$1,(4),ch);
} else {
if((state_val_17911 === (23))){
var state_17910__$1 = state_17910;
var statearr_17977_19403 = state_17910__$1;
(statearr_17977_19403[(2)] = null);

(statearr_17977_19403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (35))){
var inst_17892 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17979_19404 = state_17910__$1;
(statearr_17979_19404[(2)] = inst_17892);

(statearr_17979_19404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (19))){
var inst_17809 = (state_17910[(7)]);
var inst_17813 = cljs.core.chunk_first(inst_17809);
var inst_17814 = cljs.core.chunk_rest(inst_17809);
var inst_17815 = cljs.core.count(inst_17813);
var inst_17787 = inst_17814;
var inst_17788 = inst_17813;
var inst_17789 = inst_17815;
var inst_17790 = (0);
var state_17910__$1 = (function (){var statearr_17981 = state_17910;
(statearr_17981[(13)] = inst_17787);

(statearr_17981[(15)] = inst_17790);

(statearr_17981[(16)] = inst_17788);

(statearr_17981[(17)] = inst_17789);

return statearr_17981;
})();
var statearr_17982_19413 = state_17910__$1;
(statearr_17982_19413[(2)] = null);

(statearr_17982_19413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (11))){
var inst_17787 = (state_17910[(13)]);
var inst_17809 = (state_17910[(7)]);
var inst_17809__$1 = cljs.core.seq(inst_17787);
var state_17910__$1 = (function (){var statearr_17983 = state_17910;
(statearr_17983[(7)] = inst_17809__$1);

return statearr_17983;
})();
if(inst_17809__$1){
var statearr_17984_19414 = state_17910__$1;
(statearr_17984_19414[(1)] = (16));

} else {
var statearr_17985_19415 = state_17910__$1;
(statearr_17985_19415[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (9))){
var inst_17840 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17986_19416 = state_17910__$1;
(statearr_17986_19416[(2)] = inst_17840);

(statearr_17986_19416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (5))){
var inst_17785 = cljs.core.deref(cs);
var inst_17786 = cljs.core.seq(inst_17785);
var inst_17787 = inst_17786;
var inst_17788 = null;
var inst_17789 = (0);
var inst_17790 = (0);
var state_17910__$1 = (function (){var statearr_17987 = state_17910;
(statearr_17987[(13)] = inst_17787);

(statearr_17987[(15)] = inst_17790);

(statearr_17987[(16)] = inst_17788);

(statearr_17987[(17)] = inst_17789);

return statearr_17987;
})();
var statearr_17988_19419 = state_17910__$1;
(statearr_17988_19419[(2)] = null);

(statearr_17988_19419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (14))){
var state_17910__$1 = state_17910;
var statearr_17989_19421 = state_17910__$1;
(statearr_17989_19421[(2)] = null);

(statearr_17989_19421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (45))){
var inst_17900 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17990_19423 = state_17910__$1;
(statearr_17990_19423[(2)] = inst_17900);

(statearr_17990_19423[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (26))){
var inst_17843 = (state_17910[(27)]);
var inst_17896 = (state_17910[(2)]);
var inst_17897 = cljs.core.seq(inst_17843);
var state_17910__$1 = (function (){var statearr_17992 = state_17910;
(statearr_17992[(29)] = inst_17896);

return statearr_17992;
})();
if(inst_17897){
var statearr_17994_19424 = state_17910__$1;
(statearr_17994_19424[(1)] = (42));

} else {
var statearr_17996_19425 = state_17910__$1;
(statearr_17996_19425[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (16))){
var inst_17809 = (state_17910[(7)]);
var inst_17811 = cljs.core.chunked_seq_QMARK_(inst_17809);
var state_17910__$1 = state_17910;
if(inst_17811){
var statearr_17997_19426 = state_17910__$1;
(statearr_17997_19426[(1)] = (19));

} else {
var statearr_17998_19427 = state_17910__$1;
(statearr_17998_19427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (38))){
var inst_17889 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_17999_19428 = state_17910__$1;
(statearr_17999_19428[(2)] = inst_17889);

(statearr_17999_19428[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (30))){
var state_17910__$1 = state_17910;
var statearr_18000_19429 = state_17910__$1;
(statearr_18000_19429[(2)] = null);

(statearr_18000_19429[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (10))){
var inst_17790 = (state_17910[(15)]);
var inst_17788 = (state_17910[(16)]);
var inst_17798 = cljs.core._nth(inst_17788,inst_17790);
var inst_17799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17798,(0),null);
var inst_17800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17798,(1),null);
var state_17910__$1 = (function (){var statearr_18002 = state_17910;
(statearr_18002[(24)] = inst_17799);

return statearr_18002;
})();
if(cljs.core.truth_(inst_17800)){
var statearr_18003_19442 = state_17910__$1;
(statearr_18003_19442[(1)] = (13));

} else {
var statearr_18004_19443 = state_17910__$1;
(statearr_18004_19443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (18))){
var inst_17836 = (state_17910[(2)]);
var state_17910__$1 = state_17910;
var statearr_18005_19444 = state_17910__$1;
(statearr_18005_19444[(2)] = inst_17836);

(statearr_18005_19444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (42))){
var state_17910__$1 = state_17910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17910__$1,(45),dchan);
} else {
if((state_val_17911 === (37))){
var inst_17879 = (state_17910[(22)]);
var inst_17778 = (state_17910[(9)]);
var inst_17870 = (state_17910[(23)]);
var inst_17879__$1 = cljs.core.first(inst_17870);
var inst_17880 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17879__$1,inst_17778,done);
var state_17910__$1 = (function (){var statearr_18010 = state_17910;
(statearr_18010[(22)] = inst_17879__$1);

return statearr_18010;
})();
if(cljs.core.truth_(inst_17880)){
var statearr_18011_19445 = state_17910__$1;
(statearr_18011_19445[(1)] = (39));

} else {
var statearr_18012_19446 = state_17910__$1;
(statearr_18012_19446[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17911 === (8))){
var inst_17790 = (state_17910[(15)]);
var inst_17789 = (state_17910[(17)]);
var inst_17792 = (inst_17790 < inst_17789);
var inst_17793 = inst_17792;
var state_17910__$1 = state_17910;
if(cljs.core.truth_(inst_17793)){
var statearr_18013_19447 = state_17910__$1;
(statearr_18013_19447[(1)] = (10));

} else {
var statearr_18014_19448 = state_17910__$1;
(statearr_18014_19448[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__16846__auto__ = null;
var cljs$core$async$mult_$_state_machine__16846__auto____0 = (function (){
var statearr_18017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18017[(0)] = cljs$core$async$mult_$_state_machine__16846__auto__);

(statearr_18017[(1)] = (1));

return statearr_18017;
});
var cljs$core$async$mult_$_state_machine__16846__auto____1 = (function (state_17910){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_17910);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18018){var ex__16849__auto__ = e18018;
var statearr_18019_19450 = state_17910;
(statearr_18019_19450[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_17910[(4)]))){
var statearr_18020_19451 = state_17910;
(statearr_18020_19451[(1)] = cljs.core.first((state_17910[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19452 = state_17910;
state_17910 = G__19452;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16846__auto__ = function(state_17910){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16846__auto____1.call(this,state_17910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16846__auto____0;
cljs$core$async$mult_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16846__auto____1;
return cljs$core$async$mult_$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18022 = f__16962__auto__();
(statearr_18022[(6)] = c__16961__auto___19341);

return statearr_18022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18024 = arguments.length;
switch (G__18024) {
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

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19462 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19462(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19466 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19466(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19471 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19471(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19473 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19473(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19474 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19474(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19475 = arguments.length;
var i__5770__auto___19477 = (0);
while(true){
if((i__5770__auto___19477 < len__5769__auto___19475)){
args__5775__auto__.push((arguments[i__5770__auto___19477]));

var G__19481 = (i__5770__auto___19477 + (1));
i__5770__auto___19477 = G__19481;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18040){
var map__18041 = p__18040;
var map__18041__$1 = cljs.core.__destructure_map(map__18041);
var opts = map__18041__$1;
var statearr_18042_19493 = state;
(statearr_18042_19493[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18045_19494 = state;
(statearr_18045_19494[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18047_19498 = state;
(statearr_18047_19498[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18035){
var G__18036 = cljs.core.first(seq18035);
var seq18035__$1 = cljs.core.next(seq18035);
var G__18037 = cljs.core.first(seq18035__$1);
var seq18035__$2 = cljs.core.next(seq18035__$1);
var G__18038 = cljs.core.first(seq18035__$2);
var seq18035__$3 = cljs.core.next(seq18035__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18036,G__18037,G__18038,seq18035__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18058 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18059){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18059 = meta18059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18060,meta18059__$1){
var self__ = this;
var _18060__$1 = this;
return (new cljs.core.async.t_cljs$core$async18058(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18059__$1));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18060){
var self__ = this;
var _18060__$1 = this;
return self__.meta18059;
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18058.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18058.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18059","meta18059",-936167075,null)], null);
}));

(cljs.core.async.t_cljs$core$async18058.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18058.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18058");

(cljs.core.async.t_cljs$core$async18058.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18058");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18058.
 */
cljs.core.async.__GT_t_cljs$core$async18058 = (function cljs$core$async$__GT_t_cljs$core$async18058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18059){
return (new cljs.core.async.t_cljs$core$async18058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18059));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async18058(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16961__auto___19515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18142){
var state_val_18143 = (state_18142[(1)]);
if((state_val_18143 === (7))){
var inst_18098 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18098)){
var statearr_18144_19516 = state_18142__$1;
(statearr_18144_19516[(1)] = (8));

} else {
var statearr_18145_19517 = state_18142__$1;
(statearr_18145_19517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (20))){
var inst_18091 = (state_18142[(7)]);
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18142__$1,(23),out,inst_18091);
} else {
if((state_val_18143 === (1))){
var inst_18074 = calc_state();
var inst_18075 = cljs.core.__destructure_map(inst_18074);
var inst_18076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18075,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18075,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18075,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18079 = inst_18074;
var state_18142__$1 = (function (){var statearr_18146 = state_18142;
(statearr_18146[(8)] = inst_18076);

(statearr_18146[(9)] = inst_18078);

(statearr_18146[(10)] = inst_18077);

(statearr_18146[(11)] = inst_18079);

return statearr_18146;
})();
var statearr_18147_19518 = state_18142__$1;
(statearr_18147_19518[(2)] = null);

(statearr_18147_19518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (24))){
var inst_18082 = (state_18142[(12)]);
var inst_18079 = inst_18082;
var state_18142__$1 = (function (){var statearr_18150 = state_18142;
(statearr_18150[(11)] = inst_18079);

return statearr_18150;
})();
var statearr_18152_19519 = state_18142__$1;
(statearr_18152_19519[(2)] = null);

(statearr_18152_19519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (4))){
var inst_18091 = (state_18142[(7)]);
var inst_18093 = (state_18142[(13)]);
var inst_18090 = (state_18142[(2)]);
var inst_18091__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18090,(0),null);
var inst_18092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18090,(1),null);
var inst_18093__$1 = (inst_18091__$1 == null);
var state_18142__$1 = (function (){var statearr_18153 = state_18142;
(statearr_18153[(7)] = inst_18091__$1);

(statearr_18153[(13)] = inst_18093__$1);

(statearr_18153[(14)] = inst_18092);

return statearr_18153;
})();
if(cljs.core.truth_(inst_18093__$1)){
var statearr_18155_19531 = state_18142__$1;
(statearr_18155_19531[(1)] = (5));

} else {
var statearr_18156_19532 = state_18142__$1;
(statearr_18156_19532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (15))){
var inst_18114 = (state_18142[(15)]);
var inst_18083 = (state_18142[(16)]);
var inst_18114__$1 = cljs.core.empty_QMARK_(inst_18083);
var state_18142__$1 = (function (){var statearr_18157 = state_18142;
(statearr_18157[(15)] = inst_18114__$1);

return statearr_18157;
})();
if(inst_18114__$1){
var statearr_18158_19533 = state_18142__$1;
(statearr_18158_19533[(1)] = (17));

} else {
var statearr_18159_19536 = state_18142__$1;
(statearr_18159_19536[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (21))){
var inst_18082 = (state_18142[(12)]);
var inst_18079 = inst_18082;
var state_18142__$1 = (function (){var statearr_18160 = state_18142;
(statearr_18160[(11)] = inst_18079);

return statearr_18160;
})();
var statearr_18161_19538 = state_18142__$1;
(statearr_18161_19538[(2)] = null);

(statearr_18161_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (13))){
var inst_18105 = (state_18142[(2)]);
var inst_18106 = calc_state();
var inst_18079 = inst_18106;
var state_18142__$1 = (function (){var statearr_18162 = state_18142;
(statearr_18162[(17)] = inst_18105);

(statearr_18162[(11)] = inst_18079);

return statearr_18162;
})();
var statearr_18163_19555 = state_18142__$1;
(statearr_18163_19555[(2)] = null);

(statearr_18163_19555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (22))){
var inst_18136 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18166_19556 = state_18142__$1;
(statearr_18166_19556[(2)] = inst_18136);

(statearr_18166_19556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (6))){
var inst_18092 = (state_18142[(14)]);
var inst_18096 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18092,change);
var state_18142__$1 = state_18142;
var statearr_18167_19557 = state_18142__$1;
(statearr_18167_19557[(2)] = inst_18096);

(statearr_18167_19557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (25))){
var state_18142__$1 = state_18142;
var statearr_18168_19559 = state_18142__$1;
(statearr_18168_19559[(2)] = null);

(statearr_18168_19559[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (17))){
var inst_18084 = (state_18142[(18)]);
var inst_18092 = (state_18142[(14)]);
var inst_18116 = (inst_18084.cljs$core$IFn$_invoke$arity$1 ? inst_18084.cljs$core$IFn$_invoke$arity$1(inst_18092) : inst_18084.call(null,inst_18092));
var inst_18119 = cljs.core.not(inst_18116);
var state_18142__$1 = state_18142;
var statearr_18172_19561 = state_18142__$1;
(statearr_18172_19561[(2)] = inst_18119);

(statearr_18172_19561[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (3))){
var inst_18140 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18142__$1,inst_18140);
} else {
if((state_val_18143 === (12))){
var state_18142__$1 = state_18142;
var statearr_18173_19562 = state_18142__$1;
(statearr_18173_19562[(2)] = null);

(statearr_18173_19562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (2))){
var inst_18082 = (state_18142[(12)]);
var inst_18079 = (state_18142[(11)]);
var inst_18082__$1 = cljs.core.__destructure_map(inst_18079);
var inst_18083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18082__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18082__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18082__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18142__$1 = (function (){var statearr_18175 = state_18142;
(statearr_18175[(18)] = inst_18084);

(statearr_18175[(16)] = inst_18083);

(statearr_18175[(12)] = inst_18082__$1);

return statearr_18175;
})();
return cljs.core.async.ioc_alts_BANG_(state_18142__$1,(4),inst_18085);
} else {
if((state_val_18143 === (23))){
var inst_18127 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18127)){
var statearr_18177_19565 = state_18142__$1;
(statearr_18177_19565[(1)] = (24));

} else {
var statearr_18178_19566 = state_18142__$1;
(statearr_18178_19566[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (19))){
var inst_18122 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18179_19567 = state_18142__$1;
(statearr_18179_19567[(2)] = inst_18122);

(statearr_18179_19567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (11))){
var inst_18092 = (state_18142[(14)]);
var inst_18102 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18092);
var state_18142__$1 = state_18142;
var statearr_18180_19570 = state_18142__$1;
(statearr_18180_19570[(2)] = inst_18102);

(statearr_18180_19570[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (9))){
var inst_18083 = (state_18142[(16)]);
var inst_18109 = (state_18142[(19)]);
var inst_18092 = (state_18142[(14)]);
var inst_18109__$1 = (inst_18083.cljs$core$IFn$_invoke$arity$1 ? inst_18083.cljs$core$IFn$_invoke$arity$1(inst_18092) : inst_18083.call(null,inst_18092));
var state_18142__$1 = (function (){var statearr_18181 = state_18142;
(statearr_18181[(19)] = inst_18109__$1);

return statearr_18181;
})();
if(cljs.core.truth_(inst_18109__$1)){
var statearr_18182_19571 = state_18142__$1;
(statearr_18182_19571[(1)] = (14));

} else {
var statearr_18183_19572 = state_18142__$1;
(statearr_18183_19572[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (5))){
var inst_18093 = (state_18142[(13)]);
var state_18142__$1 = state_18142;
var statearr_18184_19580 = state_18142__$1;
(statearr_18184_19580[(2)] = inst_18093);

(statearr_18184_19580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (14))){
var inst_18109 = (state_18142[(19)]);
var state_18142__$1 = state_18142;
var statearr_18185_19581 = state_18142__$1;
(statearr_18185_19581[(2)] = inst_18109);

(statearr_18185_19581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (26))){
var inst_18132 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18186_19582 = state_18142__$1;
(statearr_18186_19582[(2)] = inst_18132);

(statearr_18186_19582[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (16))){
var inst_18124 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18124)){
var statearr_18187_19583 = state_18142__$1;
(statearr_18187_19583[(1)] = (20));

} else {
var statearr_18188_19584 = state_18142__$1;
(statearr_18188_19584[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (10))){
var inst_18138 = (state_18142[(2)]);
var state_18142__$1 = state_18142;
var statearr_18189_19585 = state_18142__$1;
(statearr_18189_19585[(2)] = inst_18138);

(statearr_18189_19585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (18))){
var inst_18114 = (state_18142[(15)]);
var state_18142__$1 = state_18142;
var statearr_18190_19586 = state_18142__$1;
(statearr_18190_19586[(2)] = inst_18114);

(statearr_18190_19586[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18143 === (8))){
var inst_18091 = (state_18142[(7)]);
var inst_18100 = (inst_18091 == null);
var state_18142__$1 = state_18142;
if(cljs.core.truth_(inst_18100)){
var statearr_18191_19588 = state_18142__$1;
(statearr_18191_19588[(1)] = (11));

} else {
var statearr_18192_19591 = state_18142__$1;
(statearr_18192_19591[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__16846__auto__ = null;
var cljs$core$async$mix_$_state_machine__16846__auto____0 = (function (){
var statearr_18193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18193[(0)] = cljs$core$async$mix_$_state_machine__16846__auto__);

(statearr_18193[(1)] = (1));

return statearr_18193;
});
var cljs$core$async$mix_$_state_machine__16846__auto____1 = (function (state_18142){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18142);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18194){var ex__16849__auto__ = e18194;
var statearr_18195_19593 = state_18142;
(statearr_18195_19593[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18142[(4)]))){
var statearr_18197_19594 = state_18142;
(statearr_18197_19594[(1)] = cljs.core.first((state_18142[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19595 = state_18142;
state_18142 = G__19595;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16846__auto__ = function(state_18142){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16846__auto____1.call(this,state_18142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16846__auto____0;
cljs$core$async$mix_$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16846__auto____1;
return cljs$core$async$mix_$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18198 = f__16962__auto__();
(statearr_18198[(6)] = c__16961__auto___19515);

return statearr_18198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19597 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19597(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19603 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19603(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19604 = (function() {
var G__19605 = null;
var G__19605__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19605__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19605 = function(p,v){
switch(arguments.length){
case 1:
return G__19605__1.call(this,p);
case 2:
return G__19605__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19605.cljs$core$IFn$_invoke$arity$1 = G__19605__1;
G__19605.cljs$core$IFn$_invoke$arity$2 = G__19605__2;
return G__19605;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18205 = arguments.length;
switch (G__18205) {
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

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19604(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19604(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18210 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18211){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18211 = meta18211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18212,meta18211__$1){
var self__ = this;
var _18212__$1 = this;
return (new cljs.core.async.t_cljs$core$async18210(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18211__$1));
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18212){
var self__ = this;
var _18212__$1 = this;
return self__.meta18211;
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18210.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18211","meta18211",-1170265559,null)], null);
}));

(cljs.core.async.t_cljs$core$async18210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18210");

(cljs.core.async.t_cljs$core$async18210.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18210.
 */
cljs.core.async.__GT_t_cljs$core$async18210 = (function cljs$core$async$__GT_t_cljs$core$async18210(ch,topic_fn,buf_fn,mults,ensure_mult,meta18211){
return (new cljs.core.async.t_cljs$core$async18210(ch,topic_fn,buf_fn,mults,ensure_mult,meta18211));
});


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
var G__18208 = arguments.length;
switch (G__18208) {
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

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18206_SHARP_){
if(cljs.core.truth_((p1__18206_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18206_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18206_SHARP_.call(null,topic)))){
return p1__18206_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18206_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18210(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16961__auto___19613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18290){
var state_val_18291 = (state_18290[(1)]);
if((state_val_18291 === (7))){
var inst_18286 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18294_19614 = state_18290__$1;
(statearr_18294_19614[(2)] = inst_18286);

(statearr_18294_19614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (20))){
var state_18290__$1 = state_18290;
var statearr_18295_19615 = state_18290__$1;
(statearr_18295_19615[(2)] = null);

(statearr_18295_19615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (1))){
var state_18290__$1 = state_18290;
var statearr_18296_19616 = state_18290__$1;
(statearr_18296_19616[(2)] = null);

(statearr_18296_19616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (24))){
var inst_18269 = (state_18290[(7)]);
var inst_18278 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18269);
var state_18290__$1 = state_18290;
var statearr_18297_19617 = state_18290__$1;
(statearr_18297_19617[(2)] = inst_18278);

(statearr_18297_19617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (4))){
var inst_18221 = (state_18290[(8)]);
var inst_18221__$1 = (state_18290[(2)]);
var inst_18222 = (inst_18221__$1 == null);
var state_18290__$1 = (function (){var statearr_18298 = state_18290;
(statearr_18298[(8)] = inst_18221__$1);

return statearr_18298;
})();
if(cljs.core.truth_(inst_18222)){
var statearr_18299_19618 = state_18290__$1;
(statearr_18299_19618[(1)] = (5));

} else {
var statearr_18300_19619 = state_18290__$1;
(statearr_18300_19619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (15))){
var inst_18263 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18301_19620 = state_18290__$1;
(statearr_18301_19620[(2)] = inst_18263);

(statearr_18301_19620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (21))){
var inst_18283 = (state_18290[(2)]);
var state_18290__$1 = (function (){var statearr_18302 = state_18290;
(statearr_18302[(9)] = inst_18283);

return statearr_18302;
})();
var statearr_18303_19621 = state_18290__$1;
(statearr_18303_19621[(2)] = null);

(statearr_18303_19621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (13))){
var inst_18245 = (state_18290[(10)]);
var inst_18247 = cljs.core.chunked_seq_QMARK_(inst_18245);
var state_18290__$1 = state_18290;
if(inst_18247){
var statearr_18304_19622 = state_18290__$1;
(statearr_18304_19622[(1)] = (16));

} else {
var statearr_18305_19623 = state_18290__$1;
(statearr_18305_19623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (22))){
var inst_18275 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
if(cljs.core.truth_(inst_18275)){
var statearr_18306_19624 = state_18290__$1;
(statearr_18306_19624[(1)] = (23));

} else {
var statearr_18307_19629 = state_18290__$1;
(statearr_18307_19629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (6))){
var inst_18221 = (state_18290[(8)]);
var inst_18269 = (state_18290[(7)]);
var inst_18271 = (state_18290[(11)]);
var inst_18269__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18221) : topic_fn.call(null,inst_18221));
var inst_18270 = cljs.core.deref(mults);
var inst_18271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18270,inst_18269__$1);
var state_18290__$1 = (function (){var statearr_18308 = state_18290;
(statearr_18308[(7)] = inst_18269__$1);

(statearr_18308[(11)] = inst_18271__$1);

return statearr_18308;
})();
if(cljs.core.truth_(inst_18271__$1)){
var statearr_18309_19634 = state_18290__$1;
(statearr_18309_19634[(1)] = (19));

} else {
var statearr_18310_19635 = state_18290__$1;
(statearr_18310_19635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (25))){
var inst_18280 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18311_19636 = state_18290__$1;
(statearr_18311_19636[(2)] = inst_18280);

(statearr_18311_19636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (17))){
var inst_18245 = (state_18290[(10)]);
var inst_18254 = cljs.core.first(inst_18245);
var inst_18255 = cljs.core.async.muxch_STAR_(inst_18254);
var inst_18256 = cljs.core.async.close_BANG_(inst_18255);
var inst_18257 = cljs.core.next(inst_18245);
var inst_18231 = inst_18257;
var inst_18232 = null;
var inst_18233 = (0);
var inst_18234 = (0);
var state_18290__$1 = (function (){var statearr_18312 = state_18290;
(statearr_18312[(12)] = inst_18231);

(statearr_18312[(13)] = inst_18233);

(statearr_18312[(14)] = inst_18234);

(statearr_18312[(15)] = inst_18256);

(statearr_18312[(16)] = inst_18232);

return statearr_18312;
})();
var statearr_18313_19641 = state_18290__$1;
(statearr_18313_19641[(2)] = null);

(statearr_18313_19641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (3))){
var inst_18288 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18290__$1,inst_18288);
} else {
if((state_val_18291 === (12))){
var inst_18265 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18314_19642 = state_18290__$1;
(statearr_18314_19642[(2)] = inst_18265);

(statearr_18314_19642[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (2))){
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18290__$1,(4),ch);
} else {
if((state_val_18291 === (23))){
var state_18290__$1 = state_18290;
var statearr_18315_19643 = state_18290__$1;
(statearr_18315_19643[(2)] = null);

(statearr_18315_19643[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (19))){
var inst_18221 = (state_18290[(8)]);
var inst_18271 = (state_18290[(11)]);
var inst_18273 = cljs.core.async.muxch_STAR_(inst_18271);
var state_18290__$1 = state_18290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18290__$1,(22),inst_18273,inst_18221);
} else {
if((state_val_18291 === (11))){
var inst_18231 = (state_18290[(12)]);
var inst_18245 = (state_18290[(10)]);
var inst_18245__$1 = cljs.core.seq(inst_18231);
var state_18290__$1 = (function (){var statearr_18317 = state_18290;
(statearr_18317[(10)] = inst_18245__$1);

return statearr_18317;
})();
if(inst_18245__$1){
var statearr_18318_19644 = state_18290__$1;
(statearr_18318_19644[(1)] = (13));

} else {
var statearr_18319_19647 = state_18290__$1;
(statearr_18319_19647[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (9))){
var inst_18267 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18320_19648 = state_18290__$1;
(statearr_18320_19648[(2)] = inst_18267);

(statearr_18320_19648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (5))){
var inst_18228 = cljs.core.deref(mults);
var inst_18229 = cljs.core.vals(inst_18228);
var inst_18230 = cljs.core.seq(inst_18229);
var inst_18231 = inst_18230;
var inst_18232 = null;
var inst_18233 = (0);
var inst_18234 = (0);
var state_18290__$1 = (function (){var statearr_18321 = state_18290;
(statearr_18321[(12)] = inst_18231);

(statearr_18321[(13)] = inst_18233);

(statearr_18321[(14)] = inst_18234);

(statearr_18321[(16)] = inst_18232);

return statearr_18321;
})();
var statearr_18322_19649 = state_18290__$1;
(statearr_18322_19649[(2)] = null);

(statearr_18322_19649[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (14))){
var state_18290__$1 = state_18290;
var statearr_18326_19650 = state_18290__$1;
(statearr_18326_19650[(2)] = null);

(statearr_18326_19650[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (16))){
var inst_18245 = (state_18290[(10)]);
var inst_18249 = cljs.core.chunk_first(inst_18245);
var inst_18250 = cljs.core.chunk_rest(inst_18245);
var inst_18251 = cljs.core.count(inst_18249);
var inst_18231 = inst_18250;
var inst_18232 = inst_18249;
var inst_18233 = inst_18251;
var inst_18234 = (0);
var state_18290__$1 = (function (){var statearr_18328 = state_18290;
(statearr_18328[(12)] = inst_18231);

(statearr_18328[(13)] = inst_18233);

(statearr_18328[(14)] = inst_18234);

(statearr_18328[(16)] = inst_18232);

return statearr_18328;
})();
var statearr_18329_19651 = state_18290__$1;
(statearr_18329_19651[(2)] = null);

(statearr_18329_19651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (10))){
var inst_18231 = (state_18290[(12)]);
var inst_18233 = (state_18290[(13)]);
var inst_18234 = (state_18290[(14)]);
var inst_18232 = (state_18290[(16)]);
var inst_18239 = cljs.core._nth(inst_18232,inst_18234);
var inst_18240 = cljs.core.async.muxch_STAR_(inst_18239);
var inst_18241 = cljs.core.async.close_BANG_(inst_18240);
var inst_18242 = (inst_18234 + (1));
var tmp18323 = inst_18231;
var tmp18324 = inst_18233;
var tmp18325 = inst_18232;
var inst_18231__$1 = tmp18323;
var inst_18232__$1 = tmp18325;
var inst_18233__$1 = tmp18324;
var inst_18234__$1 = inst_18242;
var state_18290__$1 = (function (){var statearr_18331 = state_18290;
(statearr_18331[(12)] = inst_18231__$1);

(statearr_18331[(13)] = inst_18233__$1);

(statearr_18331[(14)] = inst_18234__$1);

(statearr_18331[(17)] = inst_18241);

(statearr_18331[(16)] = inst_18232__$1);

return statearr_18331;
})();
var statearr_18332_19652 = state_18290__$1;
(statearr_18332_19652[(2)] = null);

(statearr_18332_19652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (18))){
var inst_18260 = (state_18290[(2)]);
var state_18290__$1 = state_18290;
var statearr_18333_19653 = state_18290__$1;
(statearr_18333_19653[(2)] = inst_18260);

(statearr_18333_19653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18291 === (8))){
var inst_18233 = (state_18290[(13)]);
var inst_18234 = (state_18290[(14)]);
var inst_18236 = (inst_18234 < inst_18233);
var inst_18237 = inst_18236;
var state_18290__$1 = state_18290;
if(cljs.core.truth_(inst_18237)){
var statearr_18334_19655 = state_18290__$1;
(statearr_18334_19655[(1)] = (10));

} else {
var statearr_18335_19656 = state_18290__$1;
(statearr_18335_19656[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18336[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18336[(1)] = (1));

return statearr_18336;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18290){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18290);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18337){var ex__16849__auto__ = e18337;
var statearr_18338_19657 = state_18290;
(statearr_18338_19657[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18290[(4)]))){
var statearr_18339_19658 = state_18290;
(statearr_18339_19658[(1)] = cljs.core.first((state_18290[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19659 = state_18290;
state_18290 = G__19659;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18340 = f__16962__auto__();
(statearr_18340[(6)] = c__16961__auto___19613);

return statearr_18340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__18344 = arguments.length;
switch (G__18344) {
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

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__18346 = arguments.length;
switch (G__18346) {
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

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__18348 = arguments.length;
switch (G__18348) {
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

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__16961__auto___19667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18391){
var state_val_18392 = (state_18391[(1)]);
if((state_val_18392 === (7))){
var state_18391__$1 = state_18391;
var statearr_18393_19671 = state_18391__$1;
(statearr_18393_19671[(2)] = null);

(statearr_18393_19671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (1))){
var state_18391__$1 = state_18391;
var statearr_18394_19672 = state_18391__$1;
(statearr_18394_19672[(2)] = null);

(statearr_18394_19672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (4))){
var inst_18351 = (state_18391[(7)]);
var inst_18352 = (state_18391[(8)]);
var inst_18354 = (inst_18352 < inst_18351);
var state_18391__$1 = state_18391;
if(cljs.core.truth_(inst_18354)){
var statearr_18395_19673 = state_18391__$1;
(statearr_18395_19673[(1)] = (6));

} else {
var statearr_18396_19674 = state_18391__$1;
(statearr_18396_19674[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (15))){
var inst_18377 = (state_18391[(9)]);
var inst_18382 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18377);
var state_18391__$1 = state_18391;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18391__$1,(17),out,inst_18382);
} else {
if((state_val_18392 === (13))){
var inst_18377 = (state_18391[(9)]);
var inst_18377__$1 = (state_18391[(2)]);
var inst_18378 = cljs.core.some(cljs.core.nil_QMARK_,inst_18377__$1);
var state_18391__$1 = (function (){var statearr_18397 = state_18391;
(statearr_18397[(9)] = inst_18377__$1);

return statearr_18397;
})();
if(cljs.core.truth_(inst_18378)){
var statearr_18398_19677 = state_18391__$1;
(statearr_18398_19677[(1)] = (14));

} else {
var statearr_18399_19678 = state_18391__$1;
(statearr_18399_19678[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (6))){
var state_18391__$1 = state_18391;
var statearr_18400_19679 = state_18391__$1;
(statearr_18400_19679[(2)] = null);

(statearr_18400_19679[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (17))){
var inst_18384 = (state_18391[(2)]);
var state_18391__$1 = (function (){var statearr_18402 = state_18391;
(statearr_18402[(10)] = inst_18384);

return statearr_18402;
})();
var statearr_18403_19680 = state_18391__$1;
(statearr_18403_19680[(2)] = null);

(statearr_18403_19680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (3))){
var inst_18389 = (state_18391[(2)]);
var state_18391__$1 = state_18391;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18391__$1,inst_18389);
} else {
if((state_val_18392 === (12))){
var _ = (function (){var statearr_18404 = state_18391;
(statearr_18404[(4)] = cljs.core.rest((state_18391[(4)])));

return statearr_18404;
})();
var state_18391__$1 = state_18391;
var ex18401 = (state_18391__$1[(2)]);
var statearr_18405_19681 = state_18391__$1;
(statearr_18405_19681[(5)] = ex18401);


if((ex18401 instanceof Object)){
var statearr_18406_19682 = state_18391__$1;
(statearr_18406_19682[(1)] = (11));

(statearr_18406_19682[(5)] = null);

} else {
throw ex18401;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (2))){
var inst_18350 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18351 = cnt;
var inst_18352 = (0);
var state_18391__$1 = (function (){var statearr_18407 = state_18391;
(statearr_18407[(11)] = inst_18350);

(statearr_18407[(7)] = inst_18351);

(statearr_18407[(8)] = inst_18352);

return statearr_18407;
})();
var statearr_18408_19683 = state_18391__$1;
(statearr_18408_19683[(2)] = null);

(statearr_18408_19683[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (11))){
var inst_18356 = (state_18391[(2)]);
var inst_18357 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18391__$1 = (function (){var statearr_18409 = state_18391;
(statearr_18409[(12)] = inst_18356);

return statearr_18409;
})();
var statearr_18410_19684 = state_18391__$1;
(statearr_18410_19684[(2)] = inst_18357);

(statearr_18410_19684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (9))){
var inst_18352 = (state_18391[(8)]);
var _ = (function (){var statearr_18411 = state_18391;
(statearr_18411[(4)] = cljs.core.cons((12),(state_18391[(4)])));

return statearr_18411;
})();
var inst_18363 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18352) : chs__$1.call(null,inst_18352));
var inst_18364 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18352) : done.call(null,inst_18352));
var inst_18365 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18363,inst_18364);
var ___$1 = (function (){var statearr_18412 = state_18391;
(statearr_18412[(4)] = cljs.core.rest((state_18391[(4)])));

return statearr_18412;
})();
var state_18391__$1 = state_18391;
var statearr_18413_19686 = state_18391__$1;
(statearr_18413_19686[(2)] = inst_18365);

(statearr_18413_19686[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (5))){
var inst_18375 = (state_18391[(2)]);
var state_18391__$1 = (function (){var statearr_18414 = state_18391;
(statearr_18414[(13)] = inst_18375);

return statearr_18414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18391__$1,(13),dchan);
} else {
if((state_val_18392 === (14))){
var inst_18380 = cljs.core.async.close_BANG_(out);
var state_18391__$1 = state_18391;
var statearr_18415_19688 = state_18391__$1;
(statearr_18415_19688[(2)] = inst_18380);

(statearr_18415_19688[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (16))){
var inst_18387 = (state_18391[(2)]);
var state_18391__$1 = state_18391;
var statearr_18416_19689 = state_18391__$1;
(statearr_18416_19689[(2)] = inst_18387);

(statearr_18416_19689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (10))){
var inst_18352 = (state_18391[(8)]);
var inst_18368 = (state_18391[(2)]);
var inst_18369 = (inst_18352 + (1));
var inst_18352__$1 = inst_18369;
var state_18391__$1 = (function (){var statearr_18417 = state_18391;
(statearr_18417[(14)] = inst_18368);

(statearr_18417[(8)] = inst_18352__$1);

return statearr_18417;
})();
var statearr_18418_19691 = state_18391__$1;
(statearr_18418_19691[(2)] = null);

(statearr_18418_19691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18392 === (8))){
var inst_18373 = (state_18391[(2)]);
var state_18391__$1 = state_18391;
var statearr_18419_19692 = state_18391__$1;
(statearr_18419_19692[(2)] = inst_18373);

(statearr_18419_19692[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18420[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18420[(1)] = (1));

return statearr_18420;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18391){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18391);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18421){var ex__16849__auto__ = e18421;
var statearr_18422_19694 = state_18391;
(statearr_18422_19694[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18391[(4)]))){
var statearr_18423_19695 = state_18391;
(statearr_18423_19695[(1)] = cljs.core.first((state_18391[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19696 = state_18391;
state_18391 = G__19696;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18424 = f__16962__auto__();
(statearr_18424[(6)] = c__16961__auto___19667);

return statearr_18424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__18427 = arguments.length;
switch (G__18427) {
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

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19700 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18459){
var state_val_18460 = (state_18459[(1)]);
if((state_val_18460 === (7))){
var inst_18439 = (state_18459[(7)]);
var inst_18438 = (state_18459[(8)]);
var inst_18438__$1 = (state_18459[(2)]);
var inst_18439__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18438__$1,(0),null);
var inst_18440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18438__$1,(1),null);
var inst_18441 = (inst_18439__$1 == null);
var state_18459__$1 = (function (){var statearr_18461 = state_18459;
(statearr_18461[(7)] = inst_18439__$1);

(statearr_18461[(8)] = inst_18438__$1);

(statearr_18461[(9)] = inst_18440);

return statearr_18461;
})();
if(cljs.core.truth_(inst_18441)){
var statearr_18463_19701 = state_18459__$1;
(statearr_18463_19701[(1)] = (8));

} else {
var statearr_18464_19702 = state_18459__$1;
(statearr_18464_19702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (1))){
var inst_18428 = cljs.core.vec(chs);
var inst_18429 = inst_18428;
var state_18459__$1 = (function (){var statearr_18465 = state_18459;
(statearr_18465[(10)] = inst_18429);

return statearr_18465;
})();
var statearr_18466_19703 = state_18459__$1;
(statearr_18466_19703[(2)] = null);

(statearr_18466_19703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (4))){
var inst_18429 = (state_18459[(10)]);
var state_18459__$1 = state_18459;
return cljs.core.async.ioc_alts_BANG_(state_18459__$1,(7),inst_18429);
} else {
if((state_val_18460 === (6))){
var inst_18455 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
var statearr_18469_19704 = state_18459__$1;
(statearr_18469_19704[(2)] = inst_18455);

(statearr_18469_19704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (3))){
var inst_18457 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18459__$1,inst_18457);
} else {
if((state_val_18460 === (2))){
var inst_18429 = (state_18459[(10)]);
var inst_18431 = cljs.core.count(inst_18429);
var inst_18432 = (inst_18431 > (0));
var state_18459__$1 = state_18459;
if(cljs.core.truth_(inst_18432)){
var statearr_18471_19705 = state_18459__$1;
(statearr_18471_19705[(1)] = (4));

} else {
var statearr_18472_19706 = state_18459__$1;
(statearr_18472_19706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (11))){
var inst_18429 = (state_18459[(10)]);
var inst_18448 = (state_18459[(2)]);
var tmp18470 = inst_18429;
var inst_18429__$1 = tmp18470;
var state_18459__$1 = (function (){var statearr_18473 = state_18459;
(statearr_18473[(10)] = inst_18429__$1);

(statearr_18473[(11)] = inst_18448);

return statearr_18473;
})();
var statearr_18476_19707 = state_18459__$1;
(statearr_18476_19707[(2)] = null);

(statearr_18476_19707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (9))){
var inst_18439 = (state_18459[(7)]);
var state_18459__$1 = state_18459;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18459__$1,(11),out,inst_18439);
} else {
if((state_val_18460 === (5))){
var inst_18453 = cljs.core.async.close_BANG_(out);
var state_18459__$1 = state_18459;
var statearr_18478_19709 = state_18459__$1;
(statearr_18478_19709[(2)] = inst_18453);

(statearr_18478_19709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (10))){
var inst_18451 = (state_18459[(2)]);
var state_18459__$1 = state_18459;
var statearr_18479_19710 = state_18459__$1;
(statearr_18479_19710[(2)] = inst_18451);

(statearr_18479_19710[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18460 === (8))){
var inst_18439 = (state_18459[(7)]);
var inst_18438 = (state_18459[(8)]);
var inst_18429 = (state_18459[(10)]);
var inst_18440 = (state_18459[(9)]);
var inst_18443 = (function (){var cs = inst_18429;
var vec__18434 = inst_18438;
var v = inst_18439;
var c = inst_18440;
return (function (p1__18425_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18425_SHARP_);
});
})();
var inst_18444 = cljs.core.filterv(inst_18443,inst_18429);
var inst_18429__$1 = inst_18444;
var state_18459__$1 = (function (){var statearr_18482 = state_18459;
(statearr_18482[(10)] = inst_18429__$1);

return statearr_18482;
})();
var statearr_18483_19711 = state_18459__$1;
(statearr_18483_19711[(2)] = null);

(statearr_18483_19711[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18484[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18484[(1)] = (1));

return statearr_18484;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18459){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18459);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18485){var ex__16849__auto__ = e18485;
var statearr_18486_19715 = state_18459;
(statearr_18486_19715[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18459[(4)]))){
var statearr_18487_19718 = state_18459;
(statearr_18487_19718[(1)] = cljs.core.first((state_18459[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19722 = state_18459;
state_18459 = G__19722;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18459){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18488 = f__16962__auto__();
(statearr_18488[(6)] = c__16961__auto___19700);

return statearr_18488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__18491 = arguments.length;
switch (G__18491) {
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

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18515){
var state_val_18516 = (state_18515[(1)]);
if((state_val_18516 === (7))){
var inst_18497 = (state_18515[(7)]);
var inst_18497__$1 = (state_18515[(2)]);
var inst_18498 = (inst_18497__$1 == null);
var inst_18499 = cljs.core.not(inst_18498);
var state_18515__$1 = (function (){var statearr_18517 = state_18515;
(statearr_18517[(7)] = inst_18497__$1);

return statearr_18517;
})();
if(inst_18499){
var statearr_18518_19735 = state_18515__$1;
(statearr_18518_19735[(1)] = (8));

} else {
var statearr_18519_19736 = state_18515__$1;
(statearr_18519_19736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (1))){
var inst_18492 = (0);
var state_18515__$1 = (function (){var statearr_18520 = state_18515;
(statearr_18520[(8)] = inst_18492);

return statearr_18520;
})();
var statearr_18522_19740 = state_18515__$1;
(statearr_18522_19740[(2)] = null);

(statearr_18522_19740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (4))){
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18515__$1,(7),ch);
} else {
if((state_val_18516 === (6))){
var inst_18510 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18528_19741 = state_18515__$1;
(statearr_18528_19741[(2)] = inst_18510);

(statearr_18528_19741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (3))){
var inst_18512 = (state_18515[(2)]);
var inst_18513 = cljs.core.async.close_BANG_(out);
var state_18515__$1 = (function (){var statearr_18530 = state_18515;
(statearr_18530[(9)] = inst_18512);

return statearr_18530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18515__$1,inst_18513);
} else {
if((state_val_18516 === (2))){
var inst_18492 = (state_18515[(8)]);
var inst_18494 = (inst_18492 < n);
var state_18515__$1 = state_18515;
if(cljs.core.truth_(inst_18494)){
var statearr_18532_19742 = state_18515__$1;
(statearr_18532_19742[(1)] = (4));

} else {
var statearr_18534_19743 = state_18515__$1;
(statearr_18534_19743[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (11))){
var inst_18492 = (state_18515[(8)]);
var inst_18502 = (state_18515[(2)]);
var inst_18503 = (inst_18492 + (1));
var inst_18492__$1 = inst_18503;
var state_18515__$1 = (function (){var statearr_18536 = state_18515;
(statearr_18536[(10)] = inst_18502);

(statearr_18536[(8)] = inst_18492__$1);

return statearr_18536;
})();
var statearr_18537_19745 = state_18515__$1;
(statearr_18537_19745[(2)] = null);

(statearr_18537_19745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (9))){
var state_18515__$1 = state_18515;
var statearr_18538_19748 = state_18515__$1;
(statearr_18538_19748[(2)] = null);

(statearr_18538_19748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (5))){
var state_18515__$1 = state_18515;
var statearr_18539_19750 = state_18515__$1;
(statearr_18539_19750[(2)] = null);

(statearr_18539_19750[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (10))){
var inst_18507 = (state_18515[(2)]);
var state_18515__$1 = state_18515;
var statearr_18540_19753 = state_18515__$1;
(statearr_18540_19753[(2)] = inst_18507);

(statearr_18540_19753[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18516 === (8))){
var inst_18497 = (state_18515[(7)]);
var state_18515__$1 = state_18515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18515__$1,(11),out,inst_18497);
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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18541 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18541[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18541[(1)] = (1));

return statearr_18541;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18515){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18515);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18542){var ex__16849__auto__ = e18542;
var statearr_18543_19754 = state_18515;
(statearr_18543_19754[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18515[(4)]))){
var statearr_18544_19755 = state_18515;
(statearr_18544_19755[(1)] = cljs.core.first((state_18515[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19756 = state_18515;
state_18515 = G__19756;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18545 = f__16962__auto__();
(statearr_18545[(6)] = c__16961__auto___19731);

return statearr_18545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18553 = (function (f,ch,meta18549,_,fn1,meta18554){
this.f = f;
this.ch = ch;
this.meta18549 = meta18549;
this._ = _;
this.fn1 = fn1;
this.meta18554 = meta18554;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18555,meta18554__$1){
var self__ = this;
var _18555__$1 = this;
return (new cljs.core.async.t_cljs$core$async18553(self__.f,self__.ch,self__.meta18549,self__._,self__.fn1,meta18554__$1));
}));

(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18555){
var self__ = this;
var _18555__$1 = this;
return self__.meta18554;
}));

(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18546_SHARP_){
var G__18570 = (((p1__18546_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18546_SHARP_) : self__.f.call(null,p1__18546_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18570) : f1.call(null,G__18570));
});
}));

(cljs.core.async.t_cljs$core$async18553.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18549","meta18549",-813842803,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18548","cljs.core.async/t_cljs$core$async18548",84071667,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18554","meta18554",1826636903,null)], null);
}));

(cljs.core.async.t_cljs$core$async18553.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18553.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18553");

(cljs.core.async.t_cljs$core$async18553.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18553");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18553.
 */
cljs.core.async.__GT_t_cljs$core$async18553 = (function cljs$core$async$__GT_t_cljs$core$async18553(f,ch,meta18549,_,fn1,meta18554){
return (new cljs.core.async.t_cljs$core$async18553(f,ch,meta18549,_,fn1,meta18554));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18548 = (function (f,ch,meta18549){
this.f = f;
this.ch = ch;
this.meta18549 = meta18549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18550,meta18549__$1){
var self__ = this;
var _18550__$1 = this;
return (new cljs.core.async.t_cljs$core$async18548(self__.f,self__.ch,meta18549__$1));
}));

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18550){
var self__ = this;
var _18550__$1 = this;
return self__.meta18549;
}));

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18553(self__.f,self__.ch,self__.meta18549,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18576 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18576) : self__.f.call(null,G__18576));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18549","meta18549",-813842803,null)], null);
}));

(cljs.core.async.t_cljs$core$async18548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18548");

(cljs.core.async.t_cljs$core$async18548.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18548.
 */
cljs.core.async.__GT_t_cljs$core$async18548 = (function cljs$core$async$__GT_t_cljs$core$async18548(f,ch,meta18549){
return (new cljs.core.async.t_cljs$core$async18548(f,ch,meta18549));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18548(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18593 = (function (f,ch,meta18594){
this.f = f;
this.ch = ch;
this.meta18594 = meta18594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18595,meta18594__$1){
var self__ = this;
var _18595__$1 = this;
return (new cljs.core.async.t_cljs$core$async18593(self__.f,self__.ch,meta18594__$1));
}));

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18595){
var self__ = this;
var _18595__$1 = this;
return self__.meta18594;
}));

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18594","meta18594",-1903127240,null)], null);
}));

(cljs.core.async.t_cljs$core$async18593.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18593");

(cljs.core.async.t_cljs$core$async18593.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18593");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18593.
 */
cljs.core.async.__GT_t_cljs$core$async18593 = (function cljs$core$async$__GT_t_cljs$core$async18593(f,ch,meta18594){
return (new cljs.core.async.t_cljs$core$async18593(f,ch,meta18594));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18593(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18613 = (function (p,ch,meta18614){
this.p = p;
this.ch = ch;
this.meta18614 = meta18614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18615,meta18614__$1){
var self__ = this;
var _18615__$1 = this;
return (new cljs.core.async.t_cljs$core$async18613(self__.p,self__.ch,meta18614__$1));
}));

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18615){
var self__ = this;
var _18615__$1 = this;
return self__.meta18614;
}));

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18614","meta18614",110598511,null)], null);
}));

(cljs.core.async.t_cljs$core$async18613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18613");

(cljs.core.async.t_cljs$core$async18613.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18613.
 */
cljs.core.async.__GT_t_cljs$core$async18613 = (function cljs$core$async$__GT_t_cljs$core$async18613(p,ch,meta18614){
return (new cljs.core.async.t_cljs$core$async18613(p,ch,meta18614));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18613(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__18622 = arguments.length;
switch (G__18622) {
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

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19774 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18643){
var state_val_18644 = (state_18643[(1)]);
if((state_val_18644 === (7))){
var inst_18639 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18646_19775 = state_18643__$1;
(statearr_18646_19775[(2)] = inst_18639);

(statearr_18646_19775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (1))){
var state_18643__$1 = state_18643;
var statearr_18647_19776 = state_18643__$1;
(statearr_18647_19776[(2)] = null);

(statearr_18647_19776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (4))){
var inst_18625 = (state_18643[(7)]);
var inst_18625__$1 = (state_18643[(2)]);
var inst_18626 = (inst_18625__$1 == null);
var state_18643__$1 = (function (){var statearr_18648 = state_18643;
(statearr_18648[(7)] = inst_18625__$1);

return statearr_18648;
})();
if(cljs.core.truth_(inst_18626)){
var statearr_18649_19777 = state_18643__$1;
(statearr_18649_19777[(1)] = (5));

} else {
var statearr_18650_19781 = state_18643__$1;
(statearr_18650_19781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (6))){
var inst_18625 = (state_18643[(7)]);
var inst_18630 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18625) : p.call(null,inst_18625));
var state_18643__$1 = state_18643;
if(cljs.core.truth_(inst_18630)){
var statearr_18651_19782 = state_18643__$1;
(statearr_18651_19782[(1)] = (8));

} else {
var statearr_18652_19783 = state_18643__$1;
(statearr_18652_19783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (3))){
var inst_18641 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18643__$1,inst_18641);
} else {
if((state_val_18644 === (2))){
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18643__$1,(4),ch);
} else {
if((state_val_18644 === (11))){
var inst_18633 = (state_18643[(2)]);
var state_18643__$1 = state_18643;
var statearr_18653_19788 = state_18643__$1;
(statearr_18653_19788[(2)] = inst_18633);

(statearr_18653_19788[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (9))){
var state_18643__$1 = state_18643;
var statearr_18654_19795 = state_18643__$1;
(statearr_18654_19795[(2)] = null);

(statearr_18654_19795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (5))){
var inst_18628 = cljs.core.async.close_BANG_(out);
var state_18643__$1 = state_18643;
var statearr_18655_19798 = state_18643__$1;
(statearr_18655_19798[(2)] = inst_18628);

(statearr_18655_19798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (10))){
var inst_18636 = (state_18643[(2)]);
var state_18643__$1 = (function (){var statearr_18656 = state_18643;
(statearr_18656[(8)] = inst_18636);

return statearr_18656;
})();
var statearr_18657_19802 = state_18643__$1;
(statearr_18657_19802[(2)] = null);

(statearr_18657_19802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18644 === (8))){
var inst_18625 = (state_18643[(7)]);
var state_18643__$1 = state_18643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18643__$1,(11),out,inst_18625);
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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18660 = [null,null,null,null,null,null,null,null,null];
(statearr_18660[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18660[(1)] = (1));

return statearr_18660;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18643){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18643);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18661){var ex__16849__auto__ = e18661;
var statearr_18662_19805 = state_18643;
(statearr_18662_19805[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18643[(4)]))){
var statearr_18663_19806 = state_18643;
(statearr_18663_19806[(1)] = cljs.core.first((state_18643[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19813 = state_18643;
state_18643 = G__19813;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18664 = f__16962__auto__();
(statearr_18664[(6)] = c__16961__auto___19774);

return statearr_18664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18666 = arguments.length;
switch (G__18666) {
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

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16961__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18728){
var state_val_18729 = (state_18728[(1)]);
if((state_val_18729 === (7))){
var inst_18724 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
var statearr_18730_19830 = state_18728__$1;
(statearr_18730_19830[(2)] = inst_18724);

(statearr_18730_19830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (20))){
var inst_18694 = (state_18728[(7)]);
var inst_18705 = (state_18728[(2)]);
var inst_18706 = cljs.core.next(inst_18694);
var inst_18680 = inst_18706;
var inst_18681 = null;
var inst_18682 = (0);
var inst_18683 = (0);
var state_18728__$1 = (function (){var statearr_18731 = state_18728;
(statearr_18731[(8)] = inst_18683);

(statearr_18731[(9)] = inst_18681);

(statearr_18731[(10)] = inst_18682);

(statearr_18731[(11)] = inst_18680);

(statearr_18731[(12)] = inst_18705);

return statearr_18731;
})();
var statearr_18732_19831 = state_18728__$1;
(statearr_18732_19831[(2)] = null);

(statearr_18732_19831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (1))){
var state_18728__$1 = state_18728;
var statearr_18733_19835 = state_18728__$1;
(statearr_18733_19835[(2)] = null);

(statearr_18733_19835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (4))){
var inst_18669 = (state_18728[(13)]);
var inst_18669__$1 = (state_18728[(2)]);
var inst_18670 = (inst_18669__$1 == null);
var state_18728__$1 = (function (){var statearr_18734 = state_18728;
(statearr_18734[(13)] = inst_18669__$1);

return statearr_18734;
})();
if(cljs.core.truth_(inst_18670)){
var statearr_18735_19836 = state_18728__$1;
(statearr_18735_19836[(1)] = (5));

} else {
var statearr_18736_19837 = state_18728__$1;
(statearr_18736_19837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (15))){
var state_18728__$1 = state_18728;
var statearr_18740_19841 = state_18728__$1;
(statearr_18740_19841[(2)] = null);

(statearr_18740_19841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (21))){
var state_18728__$1 = state_18728;
var statearr_18741_19842 = state_18728__$1;
(statearr_18741_19842[(2)] = null);

(statearr_18741_19842[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (13))){
var inst_18683 = (state_18728[(8)]);
var inst_18681 = (state_18728[(9)]);
var inst_18682 = (state_18728[(10)]);
var inst_18680 = (state_18728[(11)]);
var inst_18690 = (state_18728[(2)]);
var inst_18691 = (inst_18683 + (1));
var tmp18737 = inst_18681;
var tmp18738 = inst_18682;
var tmp18739 = inst_18680;
var inst_18680__$1 = tmp18739;
var inst_18681__$1 = tmp18737;
var inst_18682__$1 = tmp18738;
var inst_18683__$1 = inst_18691;
var state_18728__$1 = (function (){var statearr_18744 = state_18728;
(statearr_18744[(8)] = inst_18683__$1);

(statearr_18744[(9)] = inst_18681__$1);

(statearr_18744[(10)] = inst_18682__$1);

(statearr_18744[(11)] = inst_18680__$1);

(statearr_18744[(14)] = inst_18690);

return statearr_18744;
})();
var statearr_18747_19843 = state_18728__$1;
(statearr_18747_19843[(2)] = null);

(statearr_18747_19843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (22))){
var state_18728__$1 = state_18728;
var statearr_18750_19844 = state_18728__$1;
(statearr_18750_19844[(2)] = null);

(statearr_18750_19844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (6))){
var inst_18669 = (state_18728[(13)]);
var inst_18678 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18669) : f.call(null,inst_18669));
var inst_18679 = cljs.core.seq(inst_18678);
var inst_18680 = inst_18679;
var inst_18681 = null;
var inst_18682 = (0);
var inst_18683 = (0);
var state_18728__$1 = (function (){var statearr_18751 = state_18728;
(statearr_18751[(8)] = inst_18683);

(statearr_18751[(9)] = inst_18681);

(statearr_18751[(10)] = inst_18682);

(statearr_18751[(11)] = inst_18680);

return statearr_18751;
})();
var statearr_18752_19846 = state_18728__$1;
(statearr_18752_19846[(2)] = null);

(statearr_18752_19846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (17))){
var inst_18694 = (state_18728[(7)]);
var inst_18698 = cljs.core.chunk_first(inst_18694);
var inst_18699 = cljs.core.chunk_rest(inst_18694);
var inst_18700 = cljs.core.count(inst_18698);
var inst_18680 = inst_18699;
var inst_18681 = inst_18698;
var inst_18682 = inst_18700;
var inst_18683 = (0);
var state_18728__$1 = (function (){var statearr_18753 = state_18728;
(statearr_18753[(8)] = inst_18683);

(statearr_18753[(9)] = inst_18681);

(statearr_18753[(10)] = inst_18682);

(statearr_18753[(11)] = inst_18680);

return statearr_18753;
})();
var statearr_18754_19848 = state_18728__$1;
(statearr_18754_19848[(2)] = null);

(statearr_18754_19848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (3))){
var inst_18726 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18728__$1,inst_18726);
} else {
if((state_val_18729 === (12))){
var inst_18714 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
var statearr_18755_19852 = state_18728__$1;
(statearr_18755_19852[(2)] = inst_18714);

(statearr_18755_19852[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (2))){
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18728__$1,(4),in$);
} else {
if((state_val_18729 === (23))){
var inst_18722 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
var statearr_18760_19859 = state_18728__$1;
(statearr_18760_19859[(2)] = inst_18722);

(statearr_18760_19859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (19))){
var inst_18709 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
var statearr_18763_19860 = state_18728__$1;
(statearr_18763_19860[(2)] = inst_18709);

(statearr_18763_19860[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (11))){
var inst_18694 = (state_18728[(7)]);
var inst_18680 = (state_18728[(11)]);
var inst_18694__$1 = cljs.core.seq(inst_18680);
var state_18728__$1 = (function (){var statearr_18764 = state_18728;
(statearr_18764[(7)] = inst_18694__$1);

return statearr_18764;
})();
if(inst_18694__$1){
var statearr_18765_19861 = state_18728__$1;
(statearr_18765_19861[(1)] = (14));

} else {
var statearr_18766_19864 = state_18728__$1;
(statearr_18766_19864[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (9))){
var inst_18716 = (state_18728[(2)]);
var inst_18717 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18728__$1 = (function (){var statearr_18767 = state_18728;
(statearr_18767[(15)] = inst_18716);

return statearr_18767;
})();
if(cljs.core.truth_(inst_18717)){
var statearr_18768_19869 = state_18728__$1;
(statearr_18768_19869[(1)] = (21));

} else {
var statearr_18769_19870 = state_18728__$1;
(statearr_18769_19870[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (5))){
var inst_18672 = cljs.core.async.close_BANG_(out);
var state_18728__$1 = state_18728;
var statearr_18770_19871 = state_18728__$1;
(statearr_18770_19871[(2)] = inst_18672);

(statearr_18770_19871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (14))){
var inst_18694 = (state_18728[(7)]);
var inst_18696 = cljs.core.chunked_seq_QMARK_(inst_18694);
var state_18728__$1 = state_18728;
if(inst_18696){
var statearr_18771_19876 = state_18728__$1;
(statearr_18771_19876[(1)] = (17));

} else {
var statearr_18772_19881 = state_18728__$1;
(statearr_18772_19881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (16))){
var inst_18712 = (state_18728[(2)]);
var state_18728__$1 = state_18728;
var statearr_18773_19886 = state_18728__$1;
(statearr_18773_19886[(2)] = inst_18712);

(statearr_18773_19886[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18729 === (10))){
var inst_18683 = (state_18728[(8)]);
var inst_18681 = (state_18728[(9)]);
var inst_18688 = cljs.core._nth(inst_18681,inst_18683);
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18728__$1,(13),out,inst_18688);
} else {
if((state_val_18729 === (18))){
var inst_18694 = (state_18728[(7)]);
var inst_18703 = cljs.core.first(inst_18694);
var state_18728__$1 = state_18728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18728__$1,(20),out,inst_18703);
} else {
if((state_val_18729 === (8))){
var inst_18683 = (state_18728[(8)]);
var inst_18682 = (state_18728[(10)]);
var inst_18685 = (inst_18683 < inst_18682);
var inst_18686 = inst_18685;
var state_18728__$1 = state_18728;
if(cljs.core.truth_(inst_18686)){
var statearr_18780_19887 = state_18728__$1;
(statearr_18780_19887[(1)] = (10));

} else {
var statearr_18781_19888 = state_18728__$1;
(statearr_18781_19888[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____0 = (function (){
var statearr_18782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18782[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__);

(statearr_18782[(1)] = (1));

return statearr_18782;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____1 = (function (state_18728){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18728);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18783){var ex__16849__auto__ = e18783;
var statearr_18784_19890 = state_18728;
(statearr_18784_19890[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18728[(4)]))){
var statearr_18785_19893 = state_18728;
(statearr_18785_19893[(1)] = cljs.core.first((state_18728[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19895 = state_18728;
state_18728 = G__19895;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__ = function(state_18728){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____1.call(this,state_18728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16846__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18786 = f__16962__auto__();
(statearr_18786[(6)] = c__16961__auto__);

return statearr_18786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

return c__16961__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18788 = arguments.length;
switch (G__18788) {
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

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__18794 = arguments.length;
switch (G__18794) {
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

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18796 = arguments.length;
switch (G__18796) {
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

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18820){
var state_val_18821 = (state_18820[(1)]);
if((state_val_18821 === (7))){
var inst_18815 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18823_19917 = state_18820__$1;
(statearr_18823_19917[(2)] = inst_18815);

(statearr_18823_19917[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (1))){
var inst_18797 = null;
var state_18820__$1 = (function (){var statearr_18824 = state_18820;
(statearr_18824[(7)] = inst_18797);

return statearr_18824;
})();
var statearr_18825_19918 = state_18820__$1;
(statearr_18825_19918[(2)] = null);

(statearr_18825_19918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (4))){
var inst_18800 = (state_18820[(8)]);
var inst_18800__$1 = (state_18820[(2)]);
var inst_18801 = (inst_18800__$1 == null);
var inst_18802 = cljs.core.not(inst_18801);
var state_18820__$1 = (function (){var statearr_18826 = state_18820;
(statearr_18826[(8)] = inst_18800__$1);

return statearr_18826;
})();
if(inst_18802){
var statearr_18827_19922 = state_18820__$1;
(statearr_18827_19922[(1)] = (5));

} else {
var statearr_18828_19923 = state_18820__$1;
(statearr_18828_19923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (6))){
var state_18820__$1 = state_18820;
var statearr_18829_19924 = state_18820__$1;
(statearr_18829_19924[(2)] = null);

(statearr_18829_19924[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (3))){
var inst_18817 = (state_18820[(2)]);
var inst_18818 = cljs.core.async.close_BANG_(out);
var state_18820__$1 = (function (){var statearr_18830 = state_18820;
(statearr_18830[(9)] = inst_18817);

return statearr_18830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18820__$1,inst_18818);
} else {
if((state_val_18821 === (2))){
var state_18820__$1 = state_18820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18820__$1,(4),ch);
} else {
if((state_val_18821 === (11))){
var inst_18800 = (state_18820[(8)]);
var inst_18809 = (state_18820[(2)]);
var inst_18797 = inst_18800;
var state_18820__$1 = (function (){var statearr_18831 = state_18820;
(statearr_18831[(7)] = inst_18797);

(statearr_18831[(10)] = inst_18809);

return statearr_18831;
})();
var statearr_18832_19928 = state_18820__$1;
(statearr_18832_19928[(2)] = null);

(statearr_18832_19928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (9))){
var inst_18800 = (state_18820[(8)]);
var state_18820__$1 = state_18820;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18820__$1,(11),out,inst_18800);
} else {
if((state_val_18821 === (5))){
var inst_18800 = (state_18820[(8)]);
var inst_18797 = (state_18820[(7)]);
var inst_18804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18800,inst_18797);
var state_18820__$1 = state_18820;
if(inst_18804){
var statearr_18834_19932 = state_18820__$1;
(statearr_18834_19932[(1)] = (8));

} else {
var statearr_18835_19933 = state_18820__$1;
(statearr_18835_19933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (10))){
var inst_18812 = (state_18820[(2)]);
var state_18820__$1 = state_18820;
var statearr_18836_19934 = state_18820__$1;
(statearr_18836_19934[(2)] = inst_18812);

(statearr_18836_19934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18821 === (8))){
var inst_18797 = (state_18820[(7)]);
var tmp18833 = inst_18797;
var inst_18797__$1 = tmp18833;
var state_18820__$1 = (function (){var statearr_18837 = state_18820;
(statearr_18837[(7)] = inst_18797__$1);

return statearr_18837;
})();
var statearr_18838_19935 = state_18820__$1;
(statearr_18838_19935[(2)] = null);

(statearr_18838_19935[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18839[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18839[(1)] = (1));

return statearr_18839;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18820){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18820);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18840){var ex__16849__auto__ = e18840;
var statearr_18841_19942 = state_18820;
(statearr_18841_19942[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18820[(4)]))){
var statearr_18843_19943 = state_18820;
(statearr_18843_19943[(1)] = cljs.core.first((state_18820[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19947 = state_18820;
state_18820 = G__19947;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18820){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18844 = f__16962__auto__();
(statearr_18844[(6)] = c__16961__auto___19913);

return statearr_18844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18846 = arguments.length;
switch (G__18846) {
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

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18886){
var state_val_18887 = (state_18886[(1)]);
if((state_val_18887 === (7))){
var inst_18882 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18888_19956 = state_18886__$1;
(statearr_18888_19956[(2)] = inst_18882);

(statearr_18888_19956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (1))){
var inst_18849 = (new Array(n));
var inst_18850 = inst_18849;
var inst_18851 = (0);
var state_18886__$1 = (function (){var statearr_18889 = state_18886;
(statearr_18889[(7)] = inst_18851);

(statearr_18889[(8)] = inst_18850);

return statearr_18889;
})();
var statearr_18890_19957 = state_18886__$1;
(statearr_18890_19957[(2)] = null);

(statearr_18890_19957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (4))){
var inst_18854 = (state_18886[(9)]);
var inst_18854__$1 = (state_18886[(2)]);
var inst_18855 = (inst_18854__$1 == null);
var inst_18856 = cljs.core.not(inst_18855);
var state_18886__$1 = (function (){var statearr_18891 = state_18886;
(statearr_18891[(9)] = inst_18854__$1);

return statearr_18891;
})();
if(inst_18856){
var statearr_18892_19958 = state_18886__$1;
(statearr_18892_19958[(1)] = (5));

} else {
var statearr_18893_19959 = state_18886__$1;
(statearr_18893_19959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (15))){
var inst_18876 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18894_19960 = state_18886__$1;
(statearr_18894_19960[(2)] = inst_18876);

(statearr_18894_19960[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (13))){
var state_18886__$1 = state_18886;
var statearr_18895_19961 = state_18886__$1;
(statearr_18895_19961[(2)] = null);

(statearr_18895_19961[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (6))){
var inst_18851 = (state_18886[(7)]);
var inst_18872 = (inst_18851 > (0));
var state_18886__$1 = state_18886;
if(cljs.core.truth_(inst_18872)){
var statearr_18896_19962 = state_18886__$1;
(statearr_18896_19962[(1)] = (12));

} else {
var statearr_18897_19963 = state_18886__$1;
(statearr_18897_19963[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (3))){
var inst_18884 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18886__$1,inst_18884);
} else {
if((state_val_18887 === (12))){
var inst_18850 = (state_18886[(8)]);
var inst_18874 = cljs.core.vec(inst_18850);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18886__$1,(15),out,inst_18874);
} else {
if((state_val_18887 === (2))){
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18886__$1,(4),ch);
} else {
if((state_val_18887 === (11))){
var inst_18866 = (state_18886[(2)]);
var inst_18867 = (new Array(n));
var inst_18850 = inst_18867;
var inst_18851 = (0);
var state_18886__$1 = (function (){var statearr_18899 = state_18886;
(statearr_18899[(7)] = inst_18851);

(statearr_18899[(8)] = inst_18850);

(statearr_18899[(10)] = inst_18866);

return statearr_18899;
})();
var statearr_18900_19970 = state_18886__$1;
(statearr_18900_19970[(2)] = null);

(statearr_18900_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (9))){
var inst_18850 = (state_18886[(8)]);
var inst_18864 = cljs.core.vec(inst_18850);
var state_18886__$1 = state_18886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18886__$1,(11),out,inst_18864);
} else {
if((state_val_18887 === (5))){
var inst_18851 = (state_18886[(7)]);
var inst_18859 = (state_18886[(11)]);
var inst_18854 = (state_18886[(9)]);
var inst_18850 = (state_18886[(8)]);
var inst_18858 = (inst_18850[inst_18851] = inst_18854);
var inst_18859__$1 = (inst_18851 + (1));
var inst_18860 = (inst_18859__$1 < n);
var state_18886__$1 = (function (){var statearr_18901 = state_18886;
(statearr_18901[(12)] = inst_18858);

(statearr_18901[(11)] = inst_18859__$1);

return statearr_18901;
})();
if(cljs.core.truth_(inst_18860)){
var statearr_18904_19971 = state_18886__$1;
(statearr_18904_19971[(1)] = (8));

} else {
var statearr_18905_19972 = state_18886__$1;
(statearr_18905_19972[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (14))){
var inst_18879 = (state_18886[(2)]);
var inst_18880 = cljs.core.async.close_BANG_(out);
var state_18886__$1 = (function (){var statearr_18907 = state_18886;
(statearr_18907[(13)] = inst_18879);

return statearr_18907;
})();
var statearr_18908_19973 = state_18886__$1;
(statearr_18908_19973[(2)] = inst_18880);

(statearr_18908_19973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (10))){
var inst_18870 = (state_18886[(2)]);
var state_18886__$1 = state_18886;
var statearr_18910_19974 = state_18886__$1;
(statearr_18910_19974[(2)] = inst_18870);

(statearr_18910_19974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18887 === (8))){
var inst_18859 = (state_18886[(11)]);
var inst_18850 = (state_18886[(8)]);
var tmp18906 = inst_18850;
var inst_18850__$1 = tmp18906;
var inst_18851 = inst_18859;
var state_18886__$1 = (function (){var statearr_18912 = state_18886;
(statearr_18912[(7)] = inst_18851);

(statearr_18912[(8)] = inst_18850__$1);

return statearr_18912;
})();
var statearr_18913_19975 = state_18886__$1;
(statearr_18913_19975[(2)] = null);

(statearr_18913_19975[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_18914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18914[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_18914[(1)] = (1));

return statearr_18914;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18886){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18886);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e18915){var ex__16849__auto__ = e18915;
var statearr_18916_19976 = state_18886;
(statearr_18916_19976[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18886[(4)]))){
var statearr_18917_19977 = state_18886;
(statearr_18917_19977[(1)] = cljs.core.first((state_18886[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19978 = state_18886;
state_18886 = G__19978;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_18918 = f__16962__auto__();
(statearr_18918[(6)] = c__16961__auto___19955);

return statearr_18918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18920 = arguments.length;
switch (G__18920) {
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

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16961__auto___19980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_18968){
var state_val_18969 = (state_18968[(1)]);
if((state_val_18969 === (7))){
var inst_18964 = (state_18968[(2)]);
var state_18968__$1 = state_18968;
var statearr_18970_19981 = state_18968__$1;
(statearr_18970_19981[(2)] = inst_18964);

(statearr_18970_19981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (1))){
var inst_18924 = [];
var inst_18925 = inst_18924;
var inst_18926 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18968__$1 = (function (){var statearr_18971 = state_18968;
(statearr_18971[(7)] = inst_18926);

(statearr_18971[(8)] = inst_18925);

return statearr_18971;
})();
var statearr_18972_19982 = state_18968__$1;
(statearr_18972_19982[(2)] = null);

(statearr_18972_19982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (4))){
var inst_18929 = (state_18968[(9)]);
var inst_18929__$1 = (state_18968[(2)]);
var inst_18930 = (inst_18929__$1 == null);
var inst_18931 = cljs.core.not(inst_18930);
var state_18968__$1 = (function (){var statearr_18973 = state_18968;
(statearr_18973[(9)] = inst_18929__$1);

return statearr_18973;
})();
if(inst_18931){
var statearr_18974_19983 = state_18968__$1;
(statearr_18974_19983[(1)] = (5));

} else {
var statearr_18975_19984 = state_18968__$1;
(statearr_18975_19984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (15))){
var inst_18925 = (state_18968[(8)]);
var inst_18956 = cljs.core.vec(inst_18925);
var state_18968__$1 = state_18968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18968__$1,(18),out,inst_18956);
} else {
if((state_val_18969 === (13))){
var inst_18951 = (state_18968[(2)]);
var state_18968__$1 = state_18968;
var statearr_18976_19985 = state_18968__$1;
(statearr_18976_19985[(2)] = inst_18951);

(statearr_18976_19985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (6))){
var inst_18925 = (state_18968[(8)]);
var inst_18953 = inst_18925.length;
var inst_18954 = (inst_18953 > (0));
var state_18968__$1 = state_18968;
if(cljs.core.truth_(inst_18954)){
var statearr_18977_19988 = state_18968__$1;
(statearr_18977_19988[(1)] = (15));

} else {
var statearr_18982_19989 = state_18968__$1;
(statearr_18982_19989[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (17))){
var inst_18961 = (state_18968[(2)]);
var inst_18962 = cljs.core.async.close_BANG_(out);
var state_18968__$1 = (function (){var statearr_18987 = state_18968;
(statearr_18987[(10)] = inst_18961);

return statearr_18987;
})();
var statearr_18988_19990 = state_18968__$1;
(statearr_18988_19990[(2)] = inst_18962);

(statearr_18988_19990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (3))){
var inst_18966 = (state_18968[(2)]);
var state_18968__$1 = state_18968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18968__$1,inst_18966);
} else {
if((state_val_18969 === (12))){
var inst_18925 = (state_18968[(8)]);
var inst_18944 = cljs.core.vec(inst_18925);
var state_18968__$1 = state_18968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18968__$1,(14),out,inst_18944);
} else {
if((state_val_18969 === (2))){
var state_18968__$1 = state_18968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18968__$1,(4),ch);
} else {
if((state_val_18969 === (11))){
var inst_18925 = (state_18968[(8)]);
var inst_18929 = (state_18968[(9)]);
var inst_18933 = (state_18968[(11)]);
var inst_18941 = inst_18925.push(inst_18929);
var tmp18993 = inst_18925;
var inst_18925__$1 = tmp18993;
var inst_18926 = inst_18933;
var state_18968__$1 = (function (){var statearr_18994 = state_18968;
(statearr_18994[(7)] = inst_18926);

(statearr_18994[(12)] = inst_18941);

(statearr_18994[(8)] = inst_18925__$1);

return statearr_18994;
})();
var statearr_18995_19991 = state_18968__$1;
(statearr_18995_19991[(2)] = null);

(statearr_18995_19991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (9))){
var inst_18926 = (state_18968[(7)]);
var inst_18937 = cljs.core.keyword_identical_QMARK_(inst_18926,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18968__$1 = state_18968;
var statearr_18996_19992 = state_18968__$1;
(statearr_18996_19992[(2)] = inst_18937);

(statearr_18996_19992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (5))){
var inst_18926 = (state_18968[(7)]);
var inst_18929 = (state_18968[(9)]);
var inst_18934 = (state_18968[(13)]);
var inst_18933 = (state_18968[(11)]);
var inst_18933__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18929) : f.call(null,inst_18929));
var inst_18934__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18933__$1,inst_18926);
var state_18968__$1 = (function (){var statearr_18997 = state_18968;
(statearr_18997[(13)] = inst_18934__$1);

(statearr_18997[(11)] = inst_18933__$1);

return statearr_18997;
})();
if(inst_18934__$1){
var statearr_18998_19993 = state_18968__$1;
(statearr_18998_19993[(1)] = (8));

} else {
var statearr_18999_19994 = state_18968__$1;
(statearr_18999_19994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (14))){
var inst_18929 = (state_18968[(9)]);
var inst_18933 = (state_18968[(11)]);
var inst_18946 = (state_18968[(2)]);
var inst_18947 = [];
var inst_18948 = inst_18947.push(inst_18929);
var inst_18925 = inst_18947;
var inst_18926 = inst_18933;
var state_18968__$1 = (function (){var statearr_19000 = state_18968;
(statearr_19000[(7)] = inst_18926);

(statearr_19000[(14)] = inst_18948);

(statearr_19000[(15)] = inst_18946);

(statearr_19000[(8)] = inst_18925);

return statearr_19000;
})();
var statearr_19001_19996 = state_18968__$1;
(statearr_19001_19996[(2)] = null);

(statearr_19001_19996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (16))){
var state_18968__$1 = state_18968;
var statearr_19002_19998 = state_18968__$1;
(statearr_19002_19998[(2)] = null);

(statearr_19002_19998[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (10))){
var inst_18939 = (state_18968[(2)]);
var state_18968__$1 = state_18968;
if(cljs.core.truth_(inst_18939)){
var statearr_19003_19999 = state_18968__$1;
(statearr_19003_19999[(1)] = (11));

} else {
var statearr_19004_20000 = state_18968__$1;
(statearr_19004_20000[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (18))){
var inst_18958 = (state_18968[(2)]);
var state_18968__$1 = state_18968;
var statearr_19005_20001 = state_18968__$1;
(statearr_19005_20001[(2)] = inst_18958);

(statearr_19005_20001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18969 === (8))){
var inst_18934 = (state_18968[(13)]);
var state_18968__$1 = state_18968;
var statearr_19006_20002 = state_18968__$1;
(statearr_19006_20002[(2)] = inst_18934);

(statearr_19006_20002[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__16846__auto__ = null;
var cljs$core$async$state_machine__16846__auto____0 = (function (){
var statearr_19007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19007[(0)] = cljs$core$async$state_machine__16846__auto__);

(statearr_19007[(1)] = (1));

return statearr_19007;
});
var cljs$core$async$state_machine__16846__auto____1 = (function (state_18968){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_18968);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e19008){var ex__16849__auto__ = e19008;
var statearr_19009_20003 = state_18968;
(statearr_19009_20003[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_18968[(4)]))){
var statearr_19010_20004 = state_18968;
(statearr_19010_20004[(1)] = cljs.core.first((state_18968[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20005 = state_18968;
state_18968 = G__20005;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
cljs$core$async$state_machine__16846__auto__ = function(state_18968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16846__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16846__auto____1.call(this,state_18968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16846__auto____0;
cljs$core$async$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16846__auto____1;
return cljs$core$async$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_19013 = f__16962__auto__();
(statearr_19013[(6)] = c__16961__auto___19980);

return statearr_19013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
