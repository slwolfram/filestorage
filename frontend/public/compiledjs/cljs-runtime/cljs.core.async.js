goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37385 = arguments.length;
switch (G__37385) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37386 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37386 = (function (f,blockable,meta37387){
this.f = f;
this.blockable = blockable;
this.meta37387 = meta37387;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37388,meta37387__$1){
var self__ = this;
var _37388__$1 = this;
return (new cljs.core.async.t_cljs$core$async37386(self__.f,self__.blockable,meta37387__$1));
}));

(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37388){
var self__ = this;
var _37388__$1 = this;
return self__.meta37387;
}));

(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37386.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37386.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37387","meta37387",960872301,null)], null);
}));

(cljs.core.async.t_cljs$core$async37386.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37386.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37386");

(cljs.core.async.t_cljs$core$async37386.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37386");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37386.
 */
cljs.core.async.__GT_t_cljs$core$async37386 = (function cljs$core$async$__GT_t_cljs$core$async37386(f__$1,blockable__$1,meta37387){
return (new cljs.core.async.t_cljs$core$async37386(f__$1,blockable__$1,meta37387));
});

}

return (new cljs.core.async.t_cljs$core$async37386(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37403 = arguments.length;
switch (G__37403) {
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
var G__37405 = arguments.length;
switch (G__37405) {
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
var G__37407 = arguments.length;
switch (G__37407) {
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
var val_39398 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39398) : fn1.call(null,val_39398));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39398) : fn1.call(null,val_39398));
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
var G__37409 = arguments.length;
switch (G__37409) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___39400 = n;
var x_39401 = (0);
while(true){
if((x_39401 < n__4613__auto___39400)){
(a[x_39401] = x_39401);

var G__39402 = (x_39401 + (1));
x_39401 = G__39402;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37420 = (function (flag,meta37421){
this.flag = flag;
this.meta37421 = meta37421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37422,meta37421__$1){
var self__ = this;
var _37422__$1 = this;
return (new cljs.core.async.t_cljs$core$async37420(self__.flag,meta37421__$1));
}));

(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37422){
var self__ = this;
var _37422__$1 = this;
return self__.meta37421;
}));

(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37420.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37421","meta37421",1734498032,null)], null);
}));

(cljs.core.async.t_cljs$core$async37420.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37420.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37420");

(cljs.core.async.t_cljs$core$async37420.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37420");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37420.
 */
cljs.core.async.__GT_t_cljs$core$async37420 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37420(flag__$1,meta37421){
return (new cljs.core.async.t_cljs$core$async37420(flag__$1,meta37421));
});

}

return (new cljs.core.async.t_cljs$core$async37420(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37450 = (function (flag,cb,meta37451){
this.flag = flag;
this.cb = cb;
this.meta37451 = meta37451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37452,meta37451__$1){
var self__ = this;
var _37452__$1 = this;
return (new cljs.core.async.t_cljs$core$async37450(self__.flag,self__.cb,meta37451__$1));
}));

(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37452){
var self__ = this;
var _37452__$1 = this;
return self__.meta37451;
}));

(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37451","meta37451",642540,null)], null);
}));

(cljs.core.async.t_cljs$core$async37450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37450");

(cljs.core.async.t_cljs$core$async37450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37450.
 */
cljs.core.async.__GT_t_cljs$core$async37450 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37450(flag__$1,cb__$1,meta37451){
return (new cljs.core.async.t_cljs$core$async37450(flag__$1,cb__$1,meta37451));
});

}

return (new cljs.core.async.t_cljs$core$async37450(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37476_SHARP_){
var G__37491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37476_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37491) : fret.call(null,G__37491));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37481_SHARP_){
var G__37495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37481_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37495) : fret.call(null,G__37495));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39405 = (i + (1));
i = G__39405;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___39406 = arguments.length;
var i__4737__auto___39407 = (0);
while(true){
if((i__4737__auto___39407 < len__4736__auto___39406)){
args__4742__auto__.push((arguments[i__4737__auto___39407]));

var G__39408 = (i__4737__auto___39407 + (1));
i__4737__auto___39407 = G__39408;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37507){
var map__37509 = p__37507;
var map__37509__$1 = (((((!((map__37509 == null))))?(((((map__37509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37509):map__37509);
var opts = map__37509__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37498){
var G__37499 = cljs.core.first(seq37498);
var seq37498__$1 = cljs.core.next(seq37498);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37499,seq37498__$1);
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
var G__37549 = arguments.length;
switch (G__37549) {
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
var c__37274__auto___39412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37632){
var state_val_37633 = (state_37632[(1)]);
if((state_val_37633 === (7))){
var inst_37628 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
var statearr_37641_39414 = state_37632__$1;
(statearr_37641_39414[(2)] = inst_37628);

(statearr_37641_39414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (1))){
var state_37632__$1 = state_37632;
var statearr_37642_39415 = state_37632__$1;
(statearr_37642_39415[(2)] = null);

(statearr_37642_39415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (4))){
var inst_37608 = (state_37632[(7)]);
var inst_37608__$1 = (state_37632[(2)]);
var inst_37612 = (inst_37608__$1 == null);
var state_37632__$1 = (function (){var statearr_37644 = state_37632;
(statearr_37644[(7)] = inst_37608__$1);

return statearr_37644;
})();
if(cljs.core.truth_(inst_37612)){
var statearr_37646_39416 = state_37632__$1;
(statearr_37646_39416[(1)] = (5));

} else {
var statearr_37647_39417 = state_37632__$1;
(statearr_37647_39417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (13))){
var state_37632__$1 = state_37632;
var statearr_37648_39419 = state_37632__$1;
(statearr_37648_39419[(2)] = null);

(statearr_37648_39419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (6))){
var inst_37608 = (state_37632[(7)]);
var state_37632__$1 = state_37632;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37632__$1,(11),to,inst_37608);
} else {
if((state_val_37633 === (3))){
var inst_37630 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37632__$1,inst_37630);
} else {
if((state_val_37633 === (12))){
var state_37632__$1 = state_37632;
var statearr_37649_39421 = state_37632__$1;
(statearr_37649_39421[(2)] = null);

(statearr_37649_39421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (2))){
var state_37632__$1 = state_37632;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37632__$1,(4),from);
} else {
if((state_val_37633 === (11))){
var inst_37621 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
if(cljs.core.truth_(inst_37621)){
var statearr_37653_39422 = state_37632__$1;
(statearr_37653_39422[(1)] = (12));

} else {
var statearr_37654_39423 = state_37632__$1;
(statearr_37654_39423[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (9))){
var state_37632__$1 = state_37632;
var statearr_37655_39424 = state_37632__$1;
(statearr_37655_39424[(2)] = null);

(statearr_37655_39424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (5))){
var state_37632__$1 = state_37632;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37656_39426 = state_37632__$1;
(statearr_37656_39426[(1)] = (8));

} else {
var statearr_37658_39427 = state_37632__$1;
(statearr_37658_39427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (14))){
var inst_37626 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
var statearr_37659_39429 = state_37632__$1;
(statearr_37659_39429[(2)] = inst_37626);

(statearr_37659_39429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (10))){
var inst_37618 = (state_37632[(2)]);
var state_37632__$1 = state_37632;
var statearr_37660_39430 = state_37632__$1;
(statearr_37660_39430[(2)] = inst_37618);

(statearr_37660_39430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37633 === (8))){
var inst_37615 = cljs.core.async.close_BANG_(to);
var state_37632__$1 = state_37632;
var statearr_37661_39431 = state_37632__$1;
(statearr_37661_39431[(2)] = inst_37615);

(statearr_37661_39431[(1)] = (10));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null,null];
(statearr_37665[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_37632){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37632);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37666){var ex__37152__auto__ = e37666;
var statearr_37667_39432 = state_37632;
(statearr_37667_39432[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37632[(4)]))){
var statearr_37668_39434 = state_37632;
(statearr_37668_39434[(1)] = cljs.core.first((state_37632[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39436 = state_37632;
state_37632 = G__39436;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_37632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_37632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37670 = f__37275__auto__();
(statearr_37670[(6)] = c__37274__auto___39412);

return statearr_37670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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
var process = (function (p__37674){
var vec__37675 = p__37674;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37675,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37675,(1),null);
var job = vec__37675;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37274__auto___39437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37682){
var state_val_37683 = (state_37682[(1)]);
if((state_val_37683 === (1))){
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37682__$1,(2),res,v);
} else {
if((state_val_37683 === (2))){
var inst_37679 = (state_37682[(2)]);
var inst_37680 = cljs.core.async.close_BANG_(res);
var state_37682__$1 = (function (){var statearr_37685 = state_37682;
(statearr_37685[(7)] = inst_37679);

return statearr_37685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37682__$1,inst_37680);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_37686 = [null,null,null,null,null,null,null,null];
(statearr_37686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__);

(statearr_37686[(1)] = (1));

return statearr_37686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1 = (function (state_37682){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37682);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37687){var ex__37152__auto__ = e37687;
var statearr_37688_39440 = state_37682;
(statearr_37688_39440[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37682[(4)]))){
var statearr_37689_39441 = state_37682;
(statearr_37689_39441[(1)] = cljs.core.first((state_37682[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_37682;
state_37682 = G__39442;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = function(state_37682){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1.call(this,state_37682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37695 = f__37275__auto__();
(statearr_37695[(6)] = c__37274__auto___39437);

return statearr_37695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37700){
var vec__37705 = p__37700;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37705,(1),null);
var job = vec__37705;
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
var n__4613__auto___39443 = n;
var __39444 = (0);
while(true){
if((__39444 < n__4613__auto___39443)){
var G__37708_39445 = type;
var G__37708_39446__$1 = (((G__37708_39445 instanceof cljs.core.Keyword))?G__37708_39445.fqn:null);
switch (G__37708_39446__$1) {
case "compute":
var c__37274__auto___39448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39444,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = ((function (__39444,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function (state_37721){
var state_val_37722 = (state_37721[(1)]);
if((state_val_37722 === (1))){
var state_37721__$1 = state_37721;
var statearr_37724_39449 = state_37721__$1;
(statearr_37724_39449[(2)] = null);

(statearr_37724_39449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (2))){
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37721__$1,(4),jobs);
} else {
if((state_val_37722 === (3))){
var inst_37719 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37721__$1,inst_37719);
} else {
if((state_val_37722 === (4))){
var inst_37711 = (state_37721[(2)]);
var inst_37712 = process(inst_37711);
var state_37721__$1 = state_37721;
if(cljs.core.truth_(inst_37712)){
var statearr_37726_39452 = state_37721__$1;
(statearr_37726_39452[(1)] = (5));

} else {
var statearr_37727_39453 = state_37721__$1;
(statearr_37727_39453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (5))){
var state_37721__$1 = state_37721;
var statearr_37728_39454 = state_37721__$1;
(statearr_37728_39454[(2)] = null);

(statearr_37728_39454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (6))){
var state_37721__$1 = state_37721;
var statearr_37729_39455 = state_37721__$1;
(statearr_37729_39455[(2)] = null);

(statearr_37729_39455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37722 === (7))){
var inst_37717 = (state_37721[(2)]);
var state_37721__$1 = state_37721;
var statearr_37730_39456 = state_37721__$1;
(statearr_37730_39456[(2)] = inst_37717);

(statearr_37730_39456[(1)] = (3));


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
});})(__39444,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
;
return ((function (__39444,switch__37148__auto__,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_37731 = [null,null,null,null,null,null,null];
(statearr_37731[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__);

(statearr_37731[(1)] = (1));

return statearr_37731;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1 = (function (state_37721){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37721);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37732){var ex__37152__auto__ = e37732;
var statearr_37733_39457 = state_37721;
(statearr_37733_39457[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37721[(4)]))){
var statearr_37734_39459 = state_37721;
(statearr_37734_39459[(1)] = cljs.core.first((state_37721[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39460 = state_37721;
state_37721 = G__39460;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = function(state_37721){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1.call(this,state_37721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__;
})()
;})(__39444,switch__37148__auto__,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
})();
var state__37276__auto__ = (function (){var statearr_37735 = f__37275__auto__();
(statearr_37735[(6)] = c__37274__auto___39448);

return statearr_37735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
});})(__39444,c__37274__auto___39448,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
);


break;
case "async":
var c__37274__auto___39461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39444,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = ((function (__39444,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function (state_37748){
var state_val_37749 = (state_37748[(1)]);
if((state_val_37749 === (1))){
var state_37748__$1 = state_37748;
var statearr_37751_39462 = state_37748__$1;
(statearr_37751_39462[(2)] = null);

(statearr_37751_39462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37749 === (2))){
var state_37748__$1 = state_37748;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37748__$1,(4),jobs);
} else {
if((state_val_37749 === (3))){
var inst_37746 = (state_37748[(2)]);
var state_37748__$1 = state_37748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37748__$1,inst_37746);
} else {
if((state_val_37749 === (4))){
var inst_37738 = (state_37748[(2)]);
var inst_37739 = async(inst_37738);
var state_37748__$1 = state_37748;
if(cljs.core.truth_(inst_37739)){
var statearr_37753_39463 = state_37748__$1;
(statearr_37753_39463[(1)] = (5));

} else {
var statearr_37754_39464 = state_37748__$1;
(statearr_37754_39464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37749 === (5))){
var state_37748__$1 = state_37748;
var statearr_37755_39465 = state_37748__$1;
(statearr_37755_39465[(2)] = null);

(statearr_37755_39465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37749 === (6))){
var state_37748__$1 = state_37748;
var statearr_37757_39466 = state_37748__$1;
(statearr_37757_39466[(2)] = null);

(statearr_37757_39466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37749 === (7))){
var inst_37744 = (state_37748[(2)]);
var state_37748__$1 = state_37748;
var statearr_37758_39467 = state_37748__$1;
(statearr_37758_39467[(2)] = inst_37744);

(statearr_37758_39467[(1)] = (3));


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
});})(__39444,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
;
return ((function (__39444,switch__37148__auto__,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_37760 = [null,null,null,null,null,null,null];
(statearr_37760[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__);

(statearr_37760[(1)] = (1));

return statearr_37760;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1 = (function (state_37748){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37748);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37761){var ex__37152__auto__ = e37761;
var statearr_37762_39468 = state_37748;
(statearr_37762_39468[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37748[(4)]))){
var statearr_37764_39469 = state_37748;
(statearr_37764_39469[(1)] = cljs.core.first((state_37748[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39474 = state_37748;
state_37748 = G__39474;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = function(state_37748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1.call(this,state_37748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__;
})()
;})(__39444,switch__37148__auto__,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
})();
var state__37276__auto__ = (function (){var statearr_37765 = f__37275__auto__();
(statearr_37765[(6)] = c__37274__auto___39461);

return statearr_37765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
});})(__39444,c__37274__auto___39461,G__37708_39445,G__37708_39446__$1,n__4613__auto___39443,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37708_39446__$1)].join('')));

}

var G__39475 = (__39444 + (1));
__39444 = G__39475;
continue;
} else {
}
break;
}

var c__37274__auto___39476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37787){
var state_val_37788 = (state_37787[(1)]);
if((state_val_37788 === (7))){
var inst_37783 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
var statearr_37790_39477 = state_37787__$1;
(statearr_37790_39477[(2)] = inst_37783);

(statearr_37790_39477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (1))){
var state_37787__$1 = state_37787;
var statearr_37791_39478 = state_37787__$1;
(statearr_37791_39478[(2)] = null);

(statearr_37791_39478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (4))){
var inst_37768 = (state_37787[(7)]);
var inst_37768__$1 = (state_37787[(2)]);
var inst_37769 = (inst_37768__$1 == null);
var state_37787__$1 = (function (){var statearr_37793 = state_37787;
(statearr_37793[(7)] = inst_37768__$1);

return statearr_37793;
})();
if(cljs.core.truth_(inst_37769)){
var statearr_37794_39479 = state_37787__$1;
(statearr_37794_39479[(1)] = (5));

} else {
var statearr_37795_39480 = state_37787__$1;
(statearr_37795_39480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (6))){
var inst_37773 = (state_37787[(8)]);
var inst_37768 = (state_37787[(7)]);
var inst_37773__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37775 = [inst_37768,inst_37773__$1];
var inst_37776 = (new cljs.core.PersistentVector(null,2,(5),inst_37774,inst_37775,null));
var state_37787__$1 = (function (){var statearr_37797 = state_37787;
(statearr_37797[(8)] = inst_37773__$1);

return statearr_37797;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37787__$1,(8),jobs,inst_37776);
} else {
if((state_val_37788 === (3))){
var inst_37785 = (state_37787[(2)]);
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37787__$1,inst_37785);
} else {
if((state_val_37788 === (2))){
var state_37787__$1 = state_37787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37787__$1,(4),from);
} else {
if((state_val_37788 === (9))){
var inst_37780 = (state_37787[(2)]);
var state_37787__$1 = (function (){var statearr_37799 = state_37787;
(statearr_37799[(9)] = inst_37780);

return statearr_37799;
})();
var statearr_37800_39481 = state_37787__$1;
(statearr_37800_39481[(2)] = null);

(statearr_37800_39481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (5))){
var inst_37771 = cljs.core.async.close_BANG_(jobs);
var state_37787__$1 = state_37787;
var statearr_37801_39482 = state_37787__$1;
(statearr_37801_39482[(2)] = inst_37771);

(statearr_37801_39482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37788 === (8))){
var inst_37773 = (state_37787[(8)]);
var inst_37778 = (state_37787[(2)]);
var state_37787__$1 = (function (){var statearr_37802 = state_37787;
(statearr_37802[(10)] = inst_37778);

return statearr_37802;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37787__$1,(9),results,inst_37773);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_37804 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__);

(statearr_37804[(1)] = (1));

return statearr_37804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1 = (function (state_37787){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37787);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37805){var ex__37152__auto__ = e37805;
var statearr_37806_39485 = state_37787;
(statearr_37806_39485[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37787[(4)]))){
var statearr_37807_39486 = state_37787;
(statearr_37807_39486[(1)] = cljs.core.first((state_37787[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39487 = state_37787;
state_37787 = G__39487;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = function(state_37787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1.call(this,state_37787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37808 = f__37275__auto__();
(statearr_37808[(6)] = c__37274__auto___39476);

return statearr_37808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


var c__37274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37846){
var state_val_37847 = (state_37846[(1)]);
if((state_val_37847 === (7))){
var inst_37842 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
var statearr_37848_39488 = state_37846__$1;
(statearr_37848_39488[(2)] = inst_37842);

(statearr_37848_39488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (20))){
var state_37846__$1 = state_37846;
var statearr_37849_39489 = state_37846__$1;
(statearr_37849_39489[(2)] = null);

(statearr_37849_39489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (1))){
var state_37846__$1 = state_37846;
var statearr_37850_39490 = state_37846__$1;
(statearr_37850_39490[(2)] = null);

(statearr_37850_39490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (4))){
var inst_37811 = (state_37846[(7)]);
var inst_37811__$1 = (state_37846[(2)]);
var inst_37812 = (inst_37811__$1 == null);
var state_37846__$1 = (function (){var statearr_37851 = state_37846;
(statearr_37851[(7)] = inst_37811__$1);

return statearr_37851;
})();
if(cljs.core.truth_(inst_37812)){
var statearr_37852_39495 = state_37846__$1;
(statearr_37852_39495[(1)] = (5));

} else {
var statearr_37853_39496 = state_37846__$1;
(statearr_37853_39496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (15))){
var inst_37824 = (state_37846[(8)]);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37846__$1,(18),to,inst_37824);
} else {
if((state_val_37847 === (21))){
var inst_37837 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
var statearr_37854_39500 = state_37846__$1;
(statearr_37854_39500[(2)] = inst_37837);

(statearr_37854_39500[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (13))){
var inst_37839 = (state_37846[(2)]);
var state_37846__$1 = (function (){var statearr_37855 = state_37846;
(statearr_37855[(9)] = inst_37839);

return statearr_37855;
})();
var statearr_37856_39501 = state_37846__$1;
(statearr_37856_39501[(2)] = null);

(statearr_37856_39501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (6))){
var inst_37811 = (state_37846[(7)]);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37846__$1,(11),inst_37811);
} else {
if((state_val_37847 === (17))){
var inst_37832 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
if(cljs.core.truth_(inst_37832)){
var statearr_37857_39502 = state_37846__$1;
(statearr_37857_39502[(1)] = (19));

} else {
var statearr_37858_39503 = state_37846__$1;
(statearr_37858_39503[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (3))){
var inst_37844 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37846__$1,inst_37844);
} else {
if((state_val_37847 === (12))){
var inst_37821 = (state_37846[(10)]);
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37846__$1,(14),inst_37821);
} else {
if((state_val_37847 === (2))){
var state_37846__$1 = state_37846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37846__$1,(4),results);
} else {
if((state_val_37847 === (19))){
var state_37846__$1 = state_37846;
var statearr_37859_39510 = state_37846__$1;
(statearr_37859_39510[(2)] = null);

(statearr_37859_39510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (11))){
var inst_37821 = (state_37846[(2)]);
var state_37846__$1 = (function (){var statearr_37860 = state_37846;
(statearr_37860[(10)] = inst_37821);

return statearr_37860;
})();
var statearr_37861_39511 = state_37846__$1;
(statearr_37861_39511[(2)] = null);

(statearr_37861_39511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (9))){
var state_37846__$1 = state_37846;
var statearr_37862_39512 = state_37846__$1;
(statearr_37862_39512[(2)] = null);

(statearr_37862_39512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (5))){
var state_37846__$1 = state_37846;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37863_39516 = state_37846__$1;
(statearr_37863_39516[(1)] = (8));

} else {
var statearr_37864_39517 = state_37846__$1;
(statearr_37864_39517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (14))){
var inst_37824 = (state_37846[(8)]);
var inst_37824__$1 = (state_37846[(2)]);
var inst_37825 = (inst_37824__$1 == null);
var inst_37826 = cljs.core.not(inst_37825);
var state_37846__$1 = (function (){var statearr_37865 = state_37846;
(statearr_37865[(8)] = inst_37824__$1);

return statearr_37865;
})();
if(inst_37826){
var statearr_37866_39518 = state_37846__$1;
(statearr_37866_39518[(1)] = (15));

} else {
var statearr_37867_39519 = state_37846__$1;
(statearr_37867_39519[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (16))){
var state_37846__$1 = state_37846;
var statearr_37868_39524 = state_37846__$1;
(statearr_37868_39524[(2)] = false);

(statearr_37868_39524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (10))){
var inst_37818 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
var statearr_37869_39528 = state_37846__$1;
(statearr_37869_39528[(2)] = inst_37818);

(statearr_37869_39528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (18))){
var inst_37829 = (state_37846[(2)]);
var state_37846__$1 = state_37846;
var statearr_37870_39529 = state_37846__$1;
(statearr_37870_39529[(2)] = inst_37829);

(statearr_37870_39529[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37847 === (8))){
var inst_37815 = cljs.core.async.close_BANG_(to);
var state_37846__$1 = state_37846;
var statearr_37871_39530 = state_37846__$1;
(statearr_37871_39530[(2)] = inst_37815);

(statearr_37871_39530[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_37872 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__);

(statearr_37872[(1)] = (1));

return statearr_37872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1 = (function (state_37846){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37846);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37873){var ex__37152__auto__ = e37873;
var statearr_37874_39537 = state_37846;
(statearr_37874_39537[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37846[(4)]))){
var statearr_37875_39538 = state_37846;
(statearr_37875_39538[(1)] = cljs.core.first((state_37846[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39539 = state_37846;
state_37846 = G__39539;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__ = function(state_37846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1.call(this,state_37846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37876 = f__37275__auto__();
(statearr_37876[(6)] = c__37274__auto__);

return statearr_37876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

return c__37274__auto__;
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
var G__37878 = arguments.length;
switch (G__37878) {
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
var G__37880 = arguments.length;
switch (G__37880) {
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
var G__37882 = arguments.length;
switch (G__37882) {
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
var c__37274__auto___39547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37908){
var state_val_37909 = (state_37908[(1)]);
if((state_val_37909 === (7))){
var inst_37904 = (state_37908[(2)]);
var state_37908__$1 = state_37908;
var statearr_37910_39548 = state_37908__$1;
(statearr_37910_39548[(2)] = inst_37904);

(statearr_37910_39548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (1))){
var state_37908__$1 = state_37908;
var statearr_37911_39549 = state_37908__$1;
(statearr_37911_39549[(2)] = null);

(statearr_37911_39549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (4))){
var inst_37885 = (state_37908[(7)]);
var inst_37885__$1 = (state_37908[(2)]);
var inst_37886 = (inst_37885__$1 == null);
var state_37908__$1 = (function (){var statearr_37912 = state_37908;
(statearr_37912[(7)] = inst_37885__$1);

return statearr_37912;
})();
if(cljs.core.truth_(inst_37886)){
var statearr_37913_39550 = state_37908__$1;
(statearr_37913_39550[(1)] = (5));

} else {
var statearr_37914_39551 = state_37908__$1;
(statearr_37914_39551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (13))){
var state_37908__$1 = state_37908;
var statearr_37915_39552 = state_37908__$1;
(statearr_37915_39552[(2)] = null);

(statearr_37915_39552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (6))){
var inst_37885 = (state_37908[(7)]);
var inst_37891 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37885) : p.call(null,inst_37885));
var state_37908__$1 = state_37908;
if(cljs.core.truth_(inst_37891)){
var statearr_37916_39553 = state_37908__$1;
(statearr_37916_39553[(1)] = (9));

} else {
var statearr_37917_39554 = state_37908__$1;
(statearr_37917_39554[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (3))){
var inst_37906 = (state_37908[(2)]);
var state_37908__$1 = state_37908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37908__$1,inst_37906);
} else {
if((state_val_37909 === (12))){
var state_37908__$1 = state_37908;
var statearr_37918_39555 = state_37908__$1;
(statearr_37918_39555[(2)] = null);

(statearr_37918_39555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (2))){
var state_37908__$1 = state_37908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37908__$1,(4),ch);
} else {
if((state_val_37909 === (11))){
var inst_37885 = (state_37908[(7)]);
var inst_37895 = (state_37908[(2)]);
var state_37908__$1 = state_37908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37908__$1,(8),inst_37895,inst_37885);
} else {
if((state_val_37909 === (9))){
var state_37908__$1 = state_37908;
var statearr_37919_39556 = state_37908__$1;
(statearr_37919_39556[(2)] = tc);

(statearr_37919_39556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (5))){
var inst_37888 = cljs.core.async.close_BANG_(tc);
var inst_37889 = cljs.core.async.close_BANG_(fc);
var state_37908__$1 = (function (){var statearr_37920 = state_37908;
(statearr_37920[(8)] = inst_37888);

return statearr_37920;
})();
var statearr_37921_39557 = state_37908__$1;
(statearr_37921_39557[(2)] = inst_37889);

(statearr_37921_39557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (14))){
var inst_37902 = (state_37908[(2)]);
var state_37908__$1 = state_37908;
var statearr_37922_39558 = state_37908__$1;
(statearr_37922_39558[(2)] = inst_37902);

(statearr_37922_39558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (10))){
var state_37908__$1 = state_37908;
var statearr_37923_39559 = state_37908__$1;
(statearr_37923_39559[(2)] = fc);

(statearr_37923_39559[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37909 === (8))){
var inst_37897 = (state_37908[(2)]);
var state_37908__$1 = state_37908;
if(cljs.core.truth_(inst_37897)){
var statearr_37924_39560 = state_37908__$1;
(statearr_37924_39560[(1)] = (12));

} else {
var statearr_37925_39561 = state_37908__$1;
(statearr_37925_39561[(1)] = (13));

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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_37926 = [null,null,null,null,null,null,null,null,null];
(statearr_37926[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_37926[(1)] = (1));

return statearr_37926;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_37908){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37908);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37927){var ex__37152__auto__ = e37927;
var statearr_37928_39562 = state_37908;
(statearr_37928_39562[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37908[(4)]))){
var statearr_37929_39563 = state_37908;
(statearr_37929_39563[(1)] = cljs.core.first((state_37908[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39564 = state_37908;
state_37908 = G__39564;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_37908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_37908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37930 = f__37275__auto__();
(statearr_37930[(6)] = c__37274__auto___39547);

return statearr_37930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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
var c__37274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37952){
var state_val_37953 = (state_37952[(1)]);
if((state_val_37953 === (7))){
var inst_37948 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_37954_39565 = state_37952__$1;
(statearr_37954_39565[(2)] = inst_37948);

(statearr_37954_39565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (1))){
var inst_37931 = init;
var inst_37932 = inst_37931;
var state_37952__$1 = (function (){var statearr_37955 = state_37952;
(statearr_37955[(7)] = inst_37932);

return statearr_37955;
})();
var statearr_37956_39566 = state_37952__$1;
(statearr_37956_39566[(2)] = null);

(statearr_37956_39566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (4))){
var inst_37935 = (state_37952[(8)]);
var inst_37935__$1 = (state_37952[(2)]);
var inst_37936 = (inst_37935__$1 == null);
var state_37952__$1 = (function (){var statearr_37957 = state_37952;
(statearr_37957[(8)] = inst_37935__$1);

return statearr_37957;
})();
if(cljs.core.truth_(inst_37936)){
var statearr_37958_39567 = state_37952__$1;
(statearr_37958_39567[(1)] = (5));

} else {
var statearr_37959_39568 = state_37952__$1;
(statearr_37959_39568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (6))){
var inst_37935 = (state_37952[(8)]);
var inst_37939 = (state_37952[(9)]);
var inst_37932 = (state_37952[(7)]);
var inst_37939__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37932,inst_37935) : f.call(null,inst_37932,inst_37935));
var inst_37940 = cljs.core.reduced_QMARK_(inst_37939__$1);
var state_37952__$1 = (function (){var statearr_37960 = state_37952;
(statearr_37960[(9)] = inst_37939__$1);

return statearr_37960;
})();
if(inst_37940){
var statearr_37961_39569 = state_37952__$1;
(statearr_37961_39569[(1)] = (8));

} else {
var statearr_37962_39570 = state_37952__$1;
(statearr_37962_39570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (3))){
var inst_37950 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37952__$1,inst_37950);
} else {
if((state_val_37953 === (2))){
var state_37952__$1 = state_37952;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37952__$1,(4),ch);
} else {
if((state_val_37953 === (9))){
var inst_37939 = (state_37952[(9)]);
var inst_37932 = inst_37939;
var state_37952__$1 = (function (){var statearr_37963 = state_37952;
(statearr_37963[(7)] = inst_37932);

return statearr_37963;
})();
var statearr_37964_39571 = state_37952__$1;
(statearr_37964_39571[(2)] = null);

(statearr_37964_39571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (5))){
var inst_37932 = (state_37952[(7)]);
var state_37952__$1 = state_37952;
var statearr_37965_39574 = state_37952__$1;
(statearr_37965_39574[(2)] = inst_37932);

(statearr_37965_39574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (10))){
var inst_37946 = (state_37952[(2)]);
var state_37952__$1 = state_37952;
var statearr_37966_39576 = state_37952__$1;
(statearr_37966_39576[(2)] = inst_37946);

(statearr_37966_39576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37953 === (8))){
var inst_37939 = (state_37952[(9)]);
var inst_37942 = cljs.core.deref(inst_37939);
var state_37952__$1 = state_37952;
var statearr_37967_39577 = state_37952__$1;
(statearr_37967_39577[(2)] = inst_37942);

(statearr_37967_39577[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37149__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37149__auto____0 = (function (){
var statearr_37968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37968[(0)] = cljs$core$async$reduce_$_state_machine__37149__auto__);

(statearr_37968[(1)] = (1));

return statearr_37968;
});
var cljs$core$async$reduce_$_state_machine__37149__auto____1 = (function (state_37952){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37952);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37969){var ex__37152__auto__ = e37969;
var statearr_37970_39582 = state_37952;
(statearr_37970_39582[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37952[(4)]))){
var statearr_37971_39583 = state_37952;
(statearr_37971_39583[(1)] = cljs.core.first((state_37952[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39584 = state_37952;
state_37952 = G__39584;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37149__auto__ = function(state_37952){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37149__auto____1.call(this,state_37952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37149__auto____0;
cljs$core$async$reduce_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37149__auto____1;
return cljs$core$async$reduce_$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37972 = f__37275__auto__();
(statearr_37972[(6)] = c__37274__auto__);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

return c__37274__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_37978){
var state_val_37979 = (state_37978[(1)]);
if((state_val_37979 === (1))){
var inst_37973 = cljs.core.async.reduce(f__$1,init,ch);
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37978__$1,(2),inst_37973);
} else {
if((state_val_37979 === (2))){
var inst_37975 = (state_37978[(2)]);
var inst_37976 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37975) : f__$1.call(null,inst_37975));
var state_37978__$1 = state_37978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37978__$1,inst_37976);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37149__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37149__auto____0 = (function (){
var statearr_37980 = [null,null,null,null,null,null,null];
(statearr_37980[(0)] = cljs$core$async$transduce_$_state_machine__37149__auto__);

(statearr_37980[(1)] = (1));

return statearr_37980;
});
var cljs$core$async$transduce_$_state_machine__37149__auto____1 = (function (state_37978){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_37978);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e37981){var ex__37152__auto__ = e37981;
var statearr_37982_39587 = state_37978;
(statearr_37982_39587[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_37978[(4)]))){
var statearr_37983_39588 = state_37978;
(statearr_37983_39588[(1)] = cljs.core.first((state_37978[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39589 = state_37978;
state_37978 = G__39589;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37149__auto__ = function(state_37978){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37149__auto____1.call(this,state_37978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37149__auto____0;
cljs$core$async$transduce_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37149__auto____1;
return cljs$core$async$transduce_$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_37984 = f__37275__auto__();
(statearr_37984[(6)] = c__37274__auto__);

return statearr_37984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

return c__37274__auto__;
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
var G__37986 = arguments.length;
switch (G__37986) {
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
var c__37274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38011){
var state_val_38012 = (state_38011[(1)]);
if((state_val_38012 === (7))){
var inst_37993 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38013_39592 = state_38011__$1;
(statearr_38013_39592[(2)] = inst_37993);

(statearr_38013_39592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (1))){
var inst_37987 = cljs.core.seq(coll);
var inst_37988 = inst_37987;
var state_38011__$1 = (function (){var statearr_38014 = state_38011;
(statearr_38014[(7)] = inst_37988);

return statearr_38014;
})();
var statearr_38015_39596 = state_38011__$1;
(statearr_38015_39596[(2)] = null);

(statearr_38015_39596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (4))){
var inst_37988 = (state_38011[(7)]);
var inst_37991 = cljs.core.first(inst_37988);
var state_38011__$1 = state_38011;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38011__$1,(7),ch,inst_37991);
} else {
if((state_val_38012 === (13))){
var inst_38005 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38016_39599 = state_38011__$1;
(statearr_38016_39599[(2)] = inst_38005);

(statearr_38016_39599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (6))){
var inst_37996 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37996)){
var statearr_38017_39602 = state_38011__$1;
(statearr_38017_39602[(1)] = (8));

} else {
var statearr_38018_39603 = state_38011__$1;
(statearr_38018_39603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (3))){
var inst_38009 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38011__$1,inst_38009);
} else {
if((state_val_38012 === (12))){
var state_38011__$1 = state_38011;
var statearr_38019_39607 = state_38011__$1;
(statearr_38019_39607[(2)] = null);

(statearr_38019_39607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (2))){
var inst_37988 = (state_38011[(7)]);
var state_38011__$1 = state_38011;
if(cljs.core.truth_(inst_37988)){
var statearr_38020_39612 = state_38011__$1;
(statearr_38020_39612[(1)] = (4));

} else {
var statearr_38021_39613 = state_38011__$1;
(statearr_38021_39613[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (11))){
var inst_38002 = cljs.core.async.close_BANG_(ch);
var state_38011__$1 = state_38011;
var statearr_38022_39620 = state_38011__$1;
(statearr_38022_39620[(2)] = inst_38002);

(statearr_38022_39620[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (9))){
var state_38011__$1 = state_38011;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38023_39621 = state_38011__$1;
(statearr_38023_39621[(1)] = (11));

} else {
var statearr_38024_39622 = state_38011__$1;
(statearr_38024_39622[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (5))){
var inst_37988 = (state_38011[(7)]);
var state_38011__$1 = state_38011;
var statearr_38025_39623 = state_38011__$1;
(statearr_38025_39623[(2)] = inst_37988);

(statearr_38025_39623[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (10))){
var inst_38007 = (state_38011[(2)]);
var state_38011__$1 = state_38011;
var statearr_38026_39624 = state_38011__$1;
(statearr_38026_39624[(2)] = inst_38007);

(statearr_38026_39624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38012 === (8))){
var inst_37988 = (state_38011[(7)]);
var inst_37998 = cljs.core.next(inst_37988);
var inst_37988__$1 = inst_37998;
var state_38011__$1 = (function (){var statearr_38027 = state_38011;
(statearr_38027[(7)] = inst_37988__$1);

return statearr_38027;
})();
var statearr_38028_39625 = state_38011__$1;
(statearr_38028_39625[(2)] = null);

(statearr_38028_39625[(1)] = (2));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_38029 = [null,null,null,null,null,null,null,null];
(statearr_38029[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_38029[(1)] = (1));

return statearr_38029;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38011){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38011);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38030){var ex__37152__auto__ = e38030;
var statearr_38031_39626 = state_38011;
(statearr_38031_39626[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38011[(4)]))){
var statearr_38032_39627 = state_38011;
(statearr_38032_39627[(1)] = cljs.core.first((state_38011[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39628 = state_38011;
state_38011 = G__39628;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38033 = f__37275__auto__();
(statearr_38033[(6)] = c__37274__auto__);

return statearr_38033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

return c__37274__auto__;
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
var G__38035 = arguments.length;
switch (G__38035) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39636 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39636(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39637 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39637(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39644 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39644(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39645 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39645(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38036 = (function (ch,cs,meta38037){
this.ch = ch;
this.cs = cs;
this.meta38037 = meta38037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38038,meta38037__$1){
var self__ = this;
var _38038__$1 = this;
return (new cljs.core.async.t_cljs$core$async38036(self__.ch,self__.cs,meta38037__$1));
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38038){
var self__ = this;
var _38038__$1 = this;
return self__.meta38037;
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38037","meta38037",2032867209,null)], null);
}));

(cljs.core.async.t_cljs$core$async38036.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38036");

(cljs.core.async.t_cljs$core$async38036.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38036");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38036.
 */
cljs.core.async.__GT_t_cljs$core$async38036 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38036(ch__$1,cs__$1,meta38037){
return (new cljs.core.async.t_cljs$core$async38036(ch__$1,cs__$1,meta38037));
});

}

return (new cljs.core.async.t_cljs$core$async38036(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37274__auto___39652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38179){
var state_val_38180 = (state_38179[(1)]);
if((state_val_38180 === (7))){
var inst_38175 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38181_39653 = state_38179__$1;
(statearr_38181_39653[(2)] = inst_38175);

(statearr_38181_39653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (20))){
var inst_38080 = (state_38179[(7)]);
var inst_38092 = cljs.core.first(inst_38080);
var inst_38093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38092,(0),null);
var inst_38094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38092,(1),null);
var state_38179__$1 = (function (){var statearr_38182 = state_38179;
(statearr_38182[(8)] = inst_38093);

return statearr_38182;
})();
if(cljs.core.truth_(inst_38094)){
var statearr_38183_39654 = state_38179__$1;
(statearr_38183_39654[(1)] = (22));

} else {
var statearr_38184_39655 = state_38179__$1;
(statearr_38184_39655[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (27))){
var inst_38041 = (state_38179[(9)]);
var inst_38122 = (state_38179[(10)]);
var inst_38129 = (state_38179[(11)]);
var inst_38124 = (state_38179[(12)]);
var inst_38129__$1 = cljs.core._nth(inst_38122,inst_38124);
var inst_38130 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38129__$1,inst_38041,done);
var state_38179__$1 = (function (){var statearr_38185 = state_38179;
(statearr_38185[(11)] = inst_38129__$1);

return statearr_38185;
})();
if(cljs.core.truth_(inst_38130)){
var statearr_38188_39656 = state_38179__$1;
(statearr_38188_39656[(1)] = (30));

} else {
var statearr_38189_39657 = state_38179__$1;
(statearr_38189_39657[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (1))){
var state_38179__$1 = state_38179;
var statearr_38190_39658 = state_38179__$1;
(statearr_38190_39658[(2)] = null);

(statearr_38190_39658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (24))){
var inst_38080 = (state_38179[(7)]);
var inst_38099 = (state_38179[(2)]);
var inst_38100 = cljs.core.next(inst_38080);
var inst_38058 = inst_38100;
var inst_38059 = null;
var inst_38060 = (0);
var inst_38061 = (0);
var state_38179__$1 = (function (){var statearr_38191 = state_38179;
(statearr_38191[(13)] = inst_38058);

(statearr_38191[(14)] = inst_38060);

(statearr_38191[(15)] = inst_38061);

(statearr_38191[(16)] = inst_38099);

(statearr_38191[(17)] = inst_38059);

return statearr_38191;
})();
var statearr_38192_39659 = state_38179__$1;
(statearr_38192_39659[(2)] = null);

(statearr_38192_39659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (39))){
var state_38179__$1 = state_38179;
var statearr_38196_39660 = state_38179__$1;
(statearr_38196_39660[(2)] = null);

(statearr_38196_39660[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (4))){
var inst_38041 = (state_38179[(9)]);
var inst_38041__$1 = (state_38179[(2)]);
var inst_38042 = (inst_38041__$1 == null);
var state_38179__$1 = (function (){var statearr_38202 = state_38179;
(statearr_38202[(9)] = inst_38041__$1);

return statearr_38202;
})();
if(cljs.core.truth_(inst_38042)){
var statearr_38203_39661 = state_38179__$1;
(statearr_38203_39661[(1)] = (5));

} else {
var statearr_38208_39662 = state_38179__$1;
(statearr_38208_39662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (15))){
var inst_38058 = (state_38179[(13)]);
var inst_38060 = (state_38179[(14)]);
var inst_38061 = (state_38179[(15)]);
var inst_38059 = (state_38179[(17)]);
var inst_38076 = (state_38179[(2)]);
var inst_38077 = (inst_38061 + (1));
var tmp38193 = inst_38058;
var tmp38194 = inst_38060;
var tmp38195 = inst_38059;
var inst_38058__$1 = tmp38193;
var inst_38059__$1 = tmp38195;
var inst_38060__$1 = tmp38194;
var inst_38061__$1 = inst_38077;
var state_38179__$1 = (function (){var statearr_38214 = state_38179;
(statearr_38214[(13)] = inst_38058__$1);

(statearr_38214[(14)] = inst_38060__$1);

(statearr_38214[(15)] = inst_38061__$1);

(statearr_38214[(17)] = inst_38059__$1);

(statearr_38214[(18)] = inst_38076);

return statearr_38214;
})();
var statearr_38215_39663 = state_38179__$1;
(statearr_38215_39663[(2)] = null);

(statearr_38215_39663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (21))){
var inst_38103 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38219_39664 = state_38179__$1;
(statearr_38219_39664[(2)] = inst_38103);

(statearr_38219_39664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (31))){
var inst_38129 = (state_38179[(11)]);
var inst_38133 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38129);
var state_38179__$1 = state_38179;
var statearr_38220_39665 = state_38179__$1;
(statearr_38220_39665[(2)] = inst_38133);

(statearr_38220_39665[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (32))){
var inst_38122 = (state_38179[(10)]);
var inst_38123 = (state_38179[(19)]);
var inst_38121 = (state_38179[(20)]);
var inst_38124 = (state_38179[(12)]);
var inst_38135 = (state_38179[(2)]);
var inst_38136 = (inst_38124 + (1));
var tmp38216 = inst_38122;
var tmp38217 = inst_38123;
var tmp38218 = inst_38121;
var inst_38121__$1 = tmp38218;
var inst_38122__$1 = tmp38216;
var inst_38123__$1 = tmp38217;
var inst_38124__$1 = inst_38136;
var state_38179__$1 = (function (){var statearr_38221 = state_38179;
(statearr_38221[(10)] = inst_38122__$1);

(statearr_38221[(21)] = inst_38135);

(statearr_38221[(19)] = inst_38123__$1);

(statearr_38221[(20)] = inst_38121__$1);

(statearr_38221[(12)] = inst_38124__$1);

return statearr_38221;
})();
var statearr_38222_39667 = state_38179__$1;
(statearr_38222_39667[(2)] = null);

(statearr_38222_39667[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (40))){
var inst_38148 = (state_38179[(22)]);
var inst_38152 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38148);
var state_38179__$1 = state_38179;
var statearr_38226_39672 = state_38179__$1;
(statearr_38226_39672[(2)] = inst_38152);

(statearr_38226_39672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (33))){
var inst_38139 = (state_38179[(23)]);
var inst_38141 = cljs.core.chunked_seq_QMARK_(inst_38139);
var state_38179__$1 = state_38179;
if(inst_38141){
var statearr_38227_39673 = state_38179__$1;
(statearr_38227_39673[(1)] = (36));

} else {
var statearr_38228_39674 = state_38179__$1;
(statearr_38228_39674[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (13))){
var inst_38070 = (state_38179[(24)]);
var inst_38073 = cljs.core.async.close_BANG_(inst_38070);
var state_38179__$1 = state_38179;
var statearr_38230_39675 = state_38179__$1;
(statearr_38230_39675[(2)] = inst_38073);

(statearr_38230_39675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (22))){
var inst_38093 = (state_38179[(8)]);
var inst_38096 = cljs.core.async.close_BANG_(inst_38093);
var state_38179__$1 = state_38179;
var statearr_38231_39676 = state_38179__$1;
(statearr_38231_39676[(2)] = inst_38096);

(statearr_38231_39676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (36))){
var inst_38139 = (state_38179[(23)]);
var inst_38143 = cljs.core.chunk_first(inst_38139);
var inst_38144 = cljs.core.chunk_rest(inst_38139);
var inst_38145 = cljs.core.count(inst_38143);
var inst_38121 = inst_38144;
var inst_38122 = inst_38143;
var inst_38123 = inst_38145;
var inst_38124 = (0);
var state_38179__$1 = (function (){var statearr_38232 = state_38179;
(statearr_38232[(10)] = inst_38122);

(statearr_38232[(19)] = inst_38123);

(statearr_38232[(20)] = inst_38121);

(statearr_38232[(12)] = inst_38124);

return statearr_38232;
})();
var statearr_38233_39677 = state_38179__$1;
(statearr_38233_39677[(2)] = null);

(statearr_38233_39677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (41))){
var inst_38139 = (state_38179[(23)]);
var inst_38154 = (state_38179[(2)]);
var inst_38155 = cljs.core.next(inst_38139);
var inst_38121 = inst_38155;
var inst_38122 = null;
var inst_38123 = (0);
var inst_38124 = (0);
var state_38179__$1 = (function (){var statearr_38234 = state_38179;
(statearr_38234[(10)] = inst_38122);

(statearr_38234[(25)] = inst_38154);

(statearr_38234[(19)] = inst_38123);

(statearr_38234[(20)] = inst_38121);

(statearr_38234[(12)] = inst_38124);

return statearr_38234;
})();
var statearr_38235_39678 = state_38179__$1;
(statearr_38235_39678[(2)] = null);

(statearr_38235_39678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (43))){
var state_38179__$1 = state_38179;
var statearr_38236_39680 = state_38179__$1;
(statearr_38236_39680[(2)] = null);

(statearr_38236_39680[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (29))){
var inst_38163 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38237_39682 = state_38179__$1;
(statearr_38237_39682[(2)] = inst_38163);

(statearr_38237_39682[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (44))){
var inst_38172 = (state_38179[(2)]);
var state_38179__$1 = (function (){var statearr_38238 = state_38179;
(statearr_38238[(26)] = inst_38172);

return statearr_38238;
})();
var statearr_38239_39683 = state_38179__$1;
(statearr_38239_39683[(2)] = null);

(statearr_38239_39683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (6))){
var inst_38113 = (state_38179[(27)]);
var inst_38112 = cljs.core.deref(cs);
var inst_38113__$1 = cljs.core.keys(inst_38112);
var inst_38114 = cljs.core.count(inst_38113__$1);
var inst_38115 = cljs.core.reset_BANG_(dctr,inst_38114);
var inst_38120 = cljs.core.seq(inst_38113__$1);
var inst_38121 = inst_38120;
var inst_38122 = null;
var inst_38123 = (0);
var inst_38124 = (0);
var state_38179__$1 = (function (){var statearr_38240 = state_38179;
(statearr_38240[(28)] = inst_38115);

(statearr_38240[(27)] = inst_38113__$1);

(statearr_38240[(10)] = inst_38122);

(statearr_38240[(19)] = inst_38123);

(statearr_38240[(20)] = inst_38121);

(statearr_38240[(12)] = inst_38124);

return statearr_38240;
})();
var statearr_38241_39686 = state_38179__$1;
(statearr_38241_39686[(2)] = null);

(statearr_38241_39686[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (28))){
var inst_38139 = (state_38179[(23)]);
var inst_38121 = (state_38179[(20)]);
var inst_38139__$1 = cljs.core.seq(inst_38121);
var state_38179__$1 = (function (){var statearr_38242 = state_38179;
(statearr_38242[(23)] = inst_38139__$1);

return statearr_38242;
})();
if(inst_38139__$1){
var statearr_38243_39687 = state_38179__$1;
(statearr_38243_39687[(1)] = (33));

} else {
var statearr_38244_39688 = state_38179__$1;
(statearr_38244_39688[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (25))){
var inst_38123 = (state_38179[(19)]);
var inst_38124 = (state_38179[(12)]);
var inst_38126 = (inst_38124 < inst_38123);
var inst_38127 = inst_38126;
var state_38179__$1 = state_38179;
if(cljs.core.truth_(inst_38127)){
var statearr_38245_39689 = state_38179__$1;
(statearr_38245_39689[(1)] = (27));

} else {
var statearr_38246_39690 = state_38179__$1;
(statearr_38246_39690[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (34))){
var state_38179__$1 = state_38179;
var statearr_38247_39691 = state_38179__$1;
(statearr_38247_39691[(2)] = null);

(statearr_38247_39691[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (17))){
var state_38179__$1 = state_38179;
var statearr_38248_39692 = state_38179__$1;
(statearr_38248_39692[(2)] = null);

(statearr_38248_39692[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (3))){
var inst_38177 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38179__$1,inst_38177);
} else {
if((state_val_38180 === (12))){
var inst_38108 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38249_39693 = state_38179__$1;
(statearr_38249_39693[(2)] = inst_38108);

(statearr_38249_39693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (2))){
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38179__$1,(4),ch);
} else {
if((state_val_38180 === (23))){
var state_38179__$1 = state_38179;
var statearr_38250_39694 = state_38179__$1;
(statearr_38250_39694[(2)] = null);

(statearr_38250_39694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (35))){
var inst_38161 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38251_39695 = state_38179__$1;
(statearr_38251_39695[(2)] = inst_38161);

(statearr_38251_39695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (19))){
var inst_38080 = (state_38179[(7)]);
var inst_38084 = cljs.core.chunk_first(inst_38080);
var inst_38085 = cljs.core.chunk_rest(inst_38080);
var inst_38086 = cljs.core.count(inst_38084);
var inst_38058 = inst_38085;
var inst_38059 = inst_38084;
var inst_38060 = inst_38086;
var inst_38061 = (0);
var state_38179__$1 = (function (){var statearr_38252 = state_38179;
(statearr_38252[(13)] = inst_38058);

(statearr_38252[(14)] = inst_38060);

(statearr_38252[(15)] = inst_38061);

(statearr_38252[(17)] = inst_38059);

return statearr_38252;
})();
var statearr_38253_39696 = state_38179__$1;
(statearr_38253_39696[(2)] = null);

(statearr_38253_39696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (11))){
var inst_38058 = (state_38179[(13)]);
var inst_38080 = (state_38179[(7)]);
var inst_38080__$1 = cljs.core.seq(inst_38058);
var state_38179__$1 = (function (){var statearr_38254 = state_38179;
(statearr_38254[(7)] = inst_38080__$1);

return statearr_38254;
})();
if(inst_38080__$1){
var statearr_38255_39697 = state_38179__$1;
(statearr_38255_39697[(1)] = (16));

} else {
var statearr_38256_39698 = state_38179__$1;
(statearr_38256_39698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (9))){
var inst_38110 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38257_39699 = state_38179__$1;
(statearr_38257_39699[(2)] = inst_38110);

(statearr_38257_39699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (5))){
var inst_38056 = cljs.core.deref(cs);
var inst_38057 = cljs.core.seq(inst_38056);
var inst_38058 = inst_38057;
var inst_38059 = null;
var inst_38060 = (0);
var inst_38061 = (0);
var state_38179__$1 = (function (){var statearr_38258 = state_38179;
(statearr_38258[(13)] = inst_38058);

(statearr_38258[(14)] = inst_38060);

(statearr_38258[(15)] = inst_38061);

(statearr_38258[(17)] = inst_38059);

return statearr_38258;
})();
var statearr_38259_39700 = state_38179__$1;
(statearr_38259_39700[(2)] = null);

(statearr_38259_39700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (14))){
var state_38179__$1 = state_38179;
var statearr_38260_39701 = state_38179__$1;
(statearr_38260_39701[(2)] = null);

(statearr_38260_39701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (45))){
var inst_38169 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38261_39702 = state_38179__$1;
(statearr_38261_39702[(2)] = inst_38169);

(statearr_38261_39702[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (26))){
var inst_38113 = (state_38179[(27)]);
var inst_38165 = (state_38179[(2)]);
var inst_38166 = cljs.core.seq(inst_38113);
var state_38179__$1 = (function (){var statearr_38262 = state_38179;
(statearr_38262[(29)] = inst_38165);

return statearr_38262;
})();
if(inst_38166){
var statearr_38263_39703 = state_38179__$1;
(statearr_38263_39703[(1)] = (42));

} else {
var statearr_38264_39704 = state_38179__$1;
(statearr_38264_39704[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (16))){
var inst_38080 = (state_38179[(7)]);
var inst_38082 = cljs.core.chunked_seq_QMARK_(inst_38080);
var state_38179__$1 = state_38179;
if(inst_38082){
var statearr_38265_39705 = state_38179__$1;
(statearr_38265_39705[(1)] = (19));

} else {
var statearr_38266_39706 = state_38179__$1;
(statearr_38266_39706[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (38))){
var inst_38158 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38267_39707 = state_38179__$1;
(statearr_38267_39707[(2)] = inst_38158);

(statearr_38267_39707[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (30))){
var state_38179__$1 = state_38179;
var statearr_38268_39708 = state_38179__$1;
(statearr_38268_39708[(2)] = null);

(statearr_38268_39708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (10))){
var inst_38061 = (state_38179[(15)]);
var inst_38059 = (state_38179[(17)]);
var inst_38069 = cljs.core._nth(inst_38059,inst_38061);
var inst_38070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38069,(0),null);
var inst_38071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38069,(1),null);
var state_38179__$1 = (function (){var statearr_38269 = state_38179;
(statearr_38269[(24)] = inst_38070);

return statearr_38269;
})();
if(cljs.core.truth_(inst_38071)){
var statearr_38270_39709 = state_38179__$1;
(statearr_38270_39709[(1)] = (13));

} else {
var statearr_38271_39710 = state_38179__$1;
(statearr_38271_39710[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (18))){
var inst_38106 = (state_38179[(2)]);
var state_38179__$1 = state_38179;
var statearr_38272_39711 = state_38179__$1;
(statearr_38272_39711[(2)] = inst_38106);

(statearr_38272_39711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (42))){
var state_38179__$1 = state_38179;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38179__$1,(45),dchan);
} else {
if((state_val_38180 === (37))){
var inst_38041 = (state_38179[(9)]);
var inst_38139 = (state_38179[(23)]);
var inst_38148 = (state_38179[(22)]);
var inst_38148__$1 = cljs.core.first(inst_38139);
var inst_38149 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38148__$1,inst_38041,done);
var state_38179__$1 = (function (){var statearr_38273 = state_38179;
(statearr_38273[(22)] = inst_38148__$1);

return statearr_38273;
})();
if(cljs.core.truth_(inst_38149)){
var statearr_38274_39712 = state_38179__$1;
(statearr_38274_39712[(1)] = (39));

} else {
var statearr_38275_39713 = state_38179__$1;
(statearr_38275_39713[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38180 === (8))){
var inst_38060 = (state_38179[(14)]);
var inst_38061 = (state_38179[(15)]);
var inst_38063 = (inst_38061 < inst_38060);
var inst_38064 = inst_38063;
var state_38179__$1 = state_38179;
if(cljs.core.truth_(inst_38064)){
var statearr_38276_39714 = state_38179__$1;
(statearr_38276_39714[(1)] = (10));

} else {
var statearr_38277_39715 = state_38179__$1;
(statearr_38277_39715[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37149__auto__ = null;
var cljs$core$async$mult_$_state_machine__37149__auto____0 = (function (){
var statearr_38278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38278[(0)] = cljs$core$async$mult_$_state_machine__37149__auto__);

(statearr_38278[(1)] = (1));

return statearr_38278;
});
var cljs$core$async$mult_$_state_machine__37149__auto____1 = (function (state_38179){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38179);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38279){var ex__37152__auto__ = e38279;
var statearr_38280_39716 = state_38179;
(statearr_38280_39716[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38179[(4)]))){
var statearr_38281_39717 = state_38179;
(statearr_38281_39717[(1)] = cljs.core.first((state_38179[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39718 = state_38179;
state_38179 = G__39718;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37149__auto__ = function(state_38179){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37149__auto____1.call(this,state_38179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37149__auto____0;
cljs$core$async$mult_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37149__auto____1;
return cljs$core$async$mult_$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38282 = f__37275__auto__();
(statearr_38282[(6)] = c__37274__auto___39652);

return statearr_38282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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
var G__38284 = arguments.length;
switch (G__38284) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39720 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39720(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39721 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39721(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39724 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39724(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39725 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39725(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39726 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39726(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39727 = arguments.length;
var i__4737__auto___39728 = (0);
while(true){
if((i__4737__auto___39728 < len__4736__auto___39727)){
args__4742__auto__.push((arguments[i__4737__auto___39728]));

var G__39729 = (i__4737__auto___39728 + (1));
i__4737__auto___39728 = G__39729;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38296){
var map__38297 = p__38296;
var map__38297__$1 = (((((!((map__38297 == null))))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38297):map__38297);
var opts = map__38297__$1;
var statearr_38299_39730 = state;
(statearr_38299_39730[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38300_39731 = state;
(statearr_38300_39731[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38303_39732 = state;
(statearr_38303_39732[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38288){
var G__38289 = cljs.core.first(seq38288);
var seq38288__$1 = cljs.core.next(seq38288);
var G__38290 = cljs.core.first(seq38288__$1);
var seq38288__$2 = cljs.core.next(seq38288__$1);
var G__38291 = cljs.core.first(seq38288__$2);
var seq38288__$3 = cljs.core.next(seq38288__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38289,G__38290,G__38291,seq38288__$3);
}));

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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38304 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38304 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38305){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38305 = meta38305;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38306,meta38305__$1){
var self__ = this;
var _38306__$1 = this;
return (new cljs.core.async.t_cljs$core$async38304(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38305__$1));
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38306){
var self__ = this;
var _38306__$1 = this;
return self__.meta38305;
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38304.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38304.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38305","meta38305",449937080,null)], null);
}));

(cljs.core.async.t_cljs$core$async38304.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38304.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38304");

(cljs.core.async.t_cljs$core$async38304.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38304");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38304.
 */
cljs.core.async.__GT_t_cljs$core$async38304 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38304(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38305){
return (new cljs.core.async.t_cljs$core$async38304(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38305));
});

}

return (new cljs.core.async.t_cljs$core$async38304(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37274__auto___39755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38408){
var state_val_38409 = (state_38408[(1)]);
if((state_val_38409 === (7))){
var inst_38323 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38410_39759 = state_38408__$1;
(statearr_38410_39759[(2)] = inst_38323);

(statearr_38410_39759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (20))){
var inst_38335 = (state_38408[(7)]);
var state_38408__$1 = state_38408;
var statearr_38411_39760 = state_38408__$1;
(statearr_38411_39760[(2)] = inst_38335);

(statearr_38411_39760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (27))){
var state_38408__$1 = state_38408;
var statearr_38412_39761 = state_38408__$1;
(statearr_38412_39761[(2)] = null);

(statearr_38412_39761[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (1))){
var inst_38310 = (state_38408[(8)]);
var inst_38310__$1 = calc_state();
var inst_38312 = (inst_38310__$1 == null);
var inst_38313 = cljs.core.not(inst_38312);
var state_38408__$1 = (function (){var statearr_38413 = state_38408;
(statearr_38413[(8)] = inst_38310__$1);

return statearr_38413;
})();
if(inst_38313){
var statearr_38414_39762 = state_38408__$1;
(statearr_38414_39762[(1)] = (2));

} else {
var statearr_38415_39763 = state_38408__$1;
(statearr_38415_39763[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (24))){
var inst_38368 = (state_38408[(9)]);
var inst_38382 = (state_38408[(10)]);
var inst_38359 = (state_38408[(11)]);
var inst_38382__$1 = (inst_38359.cljs$core$IFn$_invoke$arity$1 ? inst_38359.cljs$core$IFn$_invoke$arity$1(inst_38368) : inst_38359.call(null,inst_38368));
var state_38408__$1 = (function (){var statearr_38416 = state_38408;
(statearr_38416[(10)] = inst_38382__$1);

return statearr_38416;
})();
if(cljs.core.truth_(inst_38382__$1)){
var statearr_38417_39764 = state_38408__$1;
(statearr_38417_39764[(1)] = (29));

} else {
var statearr_38418_39765 = state_38408__$1;
(statearr_38418_39765[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (4))){
var inst_38326 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38326)){
var statearr_38419_39766 = state_38408__$1;
(statearr_38419_39766[(1)] = (8));

} else {
var statearr_38420_39767 = state_38408__$1;
(statearr_38420_39767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (15))){
var inst_38353 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38353)){
var statearr_38421_39768 = state_38408__$1;
(statearr_38421_39768[(1)] = (19));

} else {
var statearr_38422_39769 = state_38408__$1;
(statearr_38422_39769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (21))){
var inst_38358 = (state_38408[(12)]);
var inst_38358__$1 = (state_38408[(2)]);
var inst_38359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38358__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38358__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38358__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38408__$1 = (function (){var statearr_38423 = state_38408;
(statearr_38423[(12)] = inst_38358__$1);

(statearr_38423[(11)] = inst_38359);

(statearr_38423[(13)] = inst_38360);

return statearr_38423;
})();
return cljs.core.async.ioc_alts_BANG_(state_38408__$1,(22),inst_38361);
} else {
if((state_val_38409 === (31))){
var inst_38390 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38390)){
var statearr_38424_39770 = state_38408__$1;
(statearr_38424_39770[(1)] = (32));

} else {
var statearr_38425_39771 = state_38408__$1;
(statearr_38425_39771[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (32))){
var inst_38367 = (state_38408[(14)]);
var state_38408__$1 = state_38408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38408__$1,(35),out,inst_38367);
} else {
if((state_val_38409 === (33))){
var inst_38358 = (state_38408[(12)]);
var inst_38335 = inst_38358;
var state_38408__$1 = (function (){var statearr_38426 = state_38408;
(statearr_38426[(7)] = inst_38335);

return statearr_38426;
})();
var statearr_38427_39772 = state_38408__$1;
(statearr_38427_39772[(2)] = null);

(statearr_38427_39772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (13))){
var inst_38335 = (state_38408[(7)]);
var inst_38342 = inst_38335.cljs$lang$protocol_mask$partition0$;
var inst_38343 = (inst_38342 & (64));
var inst_38344 = inst_38335.cljs$core$ISeq$;
var inst_38345 = (cljs.core.PROTOCOL_SENTINEL === inst_38344);
var inst_38346 = ((inst_38343) || (inst_38345));
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38346)){
var statearr_38428_39773 = state_38408__$1;
(statearr_38428_39773[(1)] = (16));

} else {
var statearr_38429_39774 = state_38408__$1;
(statearr_38429_39774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (22))){
var inst_38368 = (state_38408[(9)]);
var inst_38367 = (state_38408[(14)]);
var inst_38366 = (state_38408[(2)]);
var inst_38367__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38366,(0),null);
var inst_38368__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38366,(1),null);
var inst_38369 = (inst_38367__$1 == null);
var inst_38370 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38368__$1,change);
var inst_38371 = ((inst_38369) || (inst_38370));
var state_38408__$1 = (function (){var statearr_38430 = state_38408;
(statearr_38430[(9)] = inst_38368__$1);

(statearr_38430[(14)] = inst_38367__$1);

return statearr_38430;
})();
if(cljs.core.truth_(inst_38371)){
var statearr_38431_39775 = state_38408__$1;
(statearr_38431_39775[(1)] = (23));

} else {
var statearr_38432_39776 = state_38408__$1;
(statearr_38432_39776[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (36))){
var inst_38358 = (state_38408[(12)]);
var inst_38335 = inst_38358;
var state_38408__$1 = (function (){var statearr_38436 = state_38408;
(statearr_38436[(7)] = inst_38335);

return statearr_38436;
})();
var statearr_38437_39777 = state_38408__$1;
(statearr_38437_39777[(2)] = null);

(statearr_38437_39777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (29))){
var inst_38382 = (state_38408[(10)]);
var state_38408__$1 = state_38408;
var statearr_38438_39778 = state_38408__$1;
(statearr_38438_39778[(2)] = inst_38382);

(statearr_38438_39778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (6))){
var state_38408__$1 = state_38408;
var statearr_38439_39779 = state_38408__$1;
(statearr_38439_39779[(2)] = false);

(statearr_38439_39779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (28))){
var inst_38378 = (state_38408[(2)]);
var inst_38379 = calc_state();
var inst_38335 = inst_38379;
var state_38408__$1 = (function (){var statearr_38444 = state_38408;
(statearr_38444[(15)] = inst_38378);

(statearr_38444[(7)] = inst_38335);

return statearr_38444;
})();
var statearr_38446_39780 = state_38408__$1;
(statearr_38446_39780[(2)] = null);

(statearr_38446_39780[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (25))){
var inst_38404 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38447_39781 = state_38408__$1;
(statearr_38447_39781[(2)] = inst_38404);

(statearr_38447_39781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (34))){
var inst_38402 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38448_39782 = state_38408__$1;
(statearr_38448_39782[(2)] = inst_38402);

(statearr_38448_39782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (17))){
var state_38408__$1 = state_38408;
var statearr_38449_39783 = state_38408__$1;
(statearr_38449_39783[(2)] = false);

(statearr_38449_39783[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (3))){
var state_38408__$1 = state_38408;
var statearr_38450_39784 = state_38408__$1;
(statearr_38450_39784[(2)] = false);

(statearr_38450_39784[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (12))){
var inst_38406 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38408__$1,inst_38406);
} else {
if((state_val_38409 === (2))){
var inst_38310 = (state_38408[(8)]);
var inst_38315 = inst_38310.cljs$lang$protocol_mask$partition0$;
var inst_38316 = (inst_38315 & (64));
var inst_38317 = inst_38310.cljs$core$ISeq$;
var inst_38318 = (cljs.core.PROTOCOL_SENTINEL === inst_38317);
var inst_38319 = ((inst_38316) || (inst_38318));
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38319)){
var statearr_38451_39785 = state_38408__$1;
(statearr_38451_39785[(1)] = (5));

} else {
var statearr_38452_39786 = state_38408__$1;
(statearr_38452_39786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (23))){
var inst_38367 = (state_38408[(14)]);
var inst_38373 = (inst_38367 == null);
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38373)){
var statearr_38456_39787 = state_38408__$1;
(statearr_38456_39787[(1)] = (26));

} else {
var statearr_38457_39788 = state_38408__$1;
(statearr_38457_39788[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (35))){
var inst_38393 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
if(cljs.core.truth_(inst_38393)){
var statearr_38458_39789 = state_38408__$1;
(statearr_38458_39789[(1)] = (36));

} else {
var statearr_38459_39790 = state_38408__$1;
(statearr_38459_39790[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (19))){
var inst_38335 = (state_38408[(7)]);
var inst_38355 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38335);
var state_38408__$1 = state_38408;
var statearr_38460_39791 = state_38408__$1;
(statearr_38460_39791[(2)] = inst_38355);

(statearr_38460_39791[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (11))){
var inst_38335 = (state_38408[(7)]);
var inst_38339 = (inst_38335 == null);
var inst_38340 = cljs.core.not(inst_38339);
var state_38408__$1 = state_38408;
if(inst_38340){
var statearr_38462_39792 = state_38408__$1;
(statearr_38462_39792[(1)] = (13));

} else {
var statearr_38463_39793 = state_38408__$1;
(statearr_38463_39793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (9))){
var inst_38310 = (state_38408[(8)]);
var state_38408__$1 = state_38408;
var statearr_38464_39794 = state_38408__$1;
(statearr_38464_39794[(2)] = inst_38310);

(statearr_38464_39794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (5))){
var state_38408__$1 = state_38408;
var statearr_38465_39796 = state_38408__$1;
(statearr_38465_39796[(2)] = true);

(statearr_38465_39796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (14))){
var state_38408__$1 = state_38408;
var statearr_38467_39798 = state_38408__$1;
(statearr_38467_39798[(2)] = false);

(statearr_38467_39798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (26))){
var inst_38368 = (state_38408[(9)]);
var inst_38375 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38368);
var state_38408__$1 = state_38408;
var statearr_38468_39799 = state_38408__$1;
(statearr_38468_39799[(2)] = inst_38375);

(statearr_38468_39799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (16))){
var state_38408__$1 = state_38408;
var statearr_38469_39800 = state_38408__$1;
(statearr_38469_39800[(2)] = true);

(statearr_38469_39800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (38))){
var inst_38398 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38471_39801 = state_38408__$1;
(statearr_38471_39801[(2)] = inst_38398);

(statearr_38471_39801[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (30))){
var inst_38368 = (state_38408[(9)]);
var inst_38359 = (state_38408[(11)]);
var inst_38360 = (state_38408[(13)]);
var inst_38385 = cljs.core.empty_QMARK_(inst_38359);
var inst_38386 = (inst_38360.cljs$core$IFn$_invoke$arity$1 ? inst_38360.cljs$core$IFn$_invoke$arity$1(inst_38368) : inst_38360.call(null,inst_38368));
var inst_38387 = cljs.core.not(inst_38386);
var inst_38388 = ((inst_38385) && (inst_38387));
var state_38408__$1 = state_38408;
var statearr_38472_39802 = state_38408__$1;
(statearr_38472_39802[(2)] = inst_38388);

(statearr_38472_39802[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (10))){
var inst_38310 = (state_38408[(8)]);
var inst_38331 = (state_38408[(2)]);
var inst_38332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38331,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38331,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38331,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38335 = inst_38310;
var state_38408__$1 = (function (){var statearr_38475 = state_38408;
(statearr_38475[(16)] = inst_38334);

(statearr_38475[(17)] = inst_38332);

(statearr_38475[(18)] = inst_38333);

(statearr_38475[(7)] = inst_38335);

return statearr_38475;
})();
var statearr_38476_39807 = state_38408__$1;
(statearr_38476_39807[(2)] = null);

(statearr_38476_39807[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (18))){
var inst_38350 = (state_38408[(2)]);
var state_38408__$1 = state_38408;
var statearr_38478_39808 = state_38408__$1;
(statearr_38478_39808[(2)] = inst_38350);

(statearr_38478_39808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (37))){
var state_38408__$1 = state_38408;
var statearr_38479_39813 = state_38408__$1;
(statearr_38479_39813[(2)] = null);

(statearr_38479_39813[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38409 === (8))){
var inst_38310 = (state_38408[(8)]);
var inst_38328 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38310);
var state_38408__$1 = state_38408;
var statearr_38480_39815 = state_38408__$1;
(statearr_38480_39815[(2)] = inst_38328);

(statearr_38480_39815[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__37149__auto__ = null;
var cljs$core$async$mix_$_state_machine__37149__auto____0 = (function (){
var statearr_38482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38482[(0)] = cljs$core$async$mix_$_state_machine__37149__auto__);

(statearr_38482[(1)] = (1));

return statearr_38482;
});
var cljs$core$async$mix_$_state_machine__37149__auto____1 = (function (state_38408){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38408);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38483){var ex__37152__auto__ = e38483;
var statearr_38484_39816 = state_38408;
(statearr_38484_39816[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38408[(4)]))){
var statearr_38485_39818 = state_38408;
(statearr_38485_39818[(1)] = cljs.core.first((state_38408[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39819 = state_38408;
state_38408 = G__39819;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37149__auto__ = function(state_38408){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37149__auto____1.call(this,state_38408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37149__auto____0;
cljs$core$async$mix_$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37149__auto____1;
return cljs$core$async$mix_$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38486 = f__37275__auto__();
(statearr_38486[(6)] = c__37274__auto___39755);

return statearr_38486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39824 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_39824(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39825 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_39825(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39826 = (function() {
var G__39827 = null;
var G__39827__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__39827__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__39827 = function(p,v){
switch(arguments.length){
case 1:
return G__39827__1.call(this,p);
case 2:
return G__39827__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39827.cljs$core$IFn$_invoke$arity$1 = G__39827__1;
G__39827.cljs$core$IFn$_invoke$arity$2 = G__39827__2;
return G__39827;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38492 = arguments.length;
switch (G__38492) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39826(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39826(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__38495 = arguments.length;
switch (G__38495) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38493_SHARP_){
if(cljs.core.truth_((p1__38493_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38493_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38493_SHARP_.call(null,topic)))){
return p1__38493_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38493_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38496 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38497){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38497 = meta38497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38498,meta38497__$1){
var self__ = this;
var _38498__$1 = this;
return (new cljs.core.async.t_cljs$core$async38496(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38497__$1));
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38498){
var self__ = this;
var _38498__$1 = this;
return self__.meta38497;
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38496.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38497","meta38497",-1378376723,null)], null);
}));

(cljs.core.async.t_cljs$core$async38496.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38496");

(cljs.core.async.t_cljs$core$async38496.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38496");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38496.
 */
cljs.core.async.__GT_t_cljs$core$async38496 = (function cljs$core$async$__GT_t_cljs$core$async38496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38497){
return (new cljs.core.async.t_cljs$core$async38496(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38497));
});

}

return (new cljs.core.async.t_cljs$core$async38496(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37274__auto___39833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38590){
var state_val_38591 = (state_38590[(1)]);
if((state_val_38591 === (7))){
var inst_38586 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38596_39834 = state_38590__$1;
(statearr_38596_39834[(2)] = inst_38586);

(statearr_38596_39834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (20))){
var state_38590__$1 = state_38590;
var statearr_38597_39835 = state_38590__$1;
(statearr_38597_39835[(2)] = null);

(statearr_38597_39835[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (1))){
var state_38590__$1 = state_38590;
var statearr_38601_39836 = state_38590__$1;
(statearr_38601_39836[(2)] = null);

(statearr_38601_39836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (24))){
var inst_38565 = (state_38590[(7)]);
var inst_38578 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38565);
var state_38590__$1 = state_38590;
var statearr_38603_39837 = state_38590__$1;
(statearr_38603_39837[(2)] = inst_38578);

(statearr_38603_39837[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (4))){
var inst_38516 = (state_38590[(8)]);
var inst_38516__$1 = (state_38590[(2)]);
var inst_38517 = (inst_38516__$1 == null);
var state_38590__$1 = (function (){var statearr_38605 = state_38590;
(statearr_38605[(8)] = inst_38516__$1);

return statearr_38605;
})();
if(cljs.core.truth_(inst_38517)){
var statearr_38606_39839 = state_38590__$1;
(statearr_38606_39839[(1)] = (5));

} else {
var statearr_38607_39840 = state_38590__$1;
(statearr_38607_39840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (15))){
var inst_38559 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38610_39841 = state_38590__$1;
(statearr_38610_39841[(2)] = inst_38559);

(statearr_38610_39841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (21))){
var inst_38583 = (state_38590[(2)]);
var state_38590__$1 = (function (){var statearr_38615 = state_38590;
(statearr_38615[(9)] = inst_38583);

return statearr_38615;
})();
var statearr_38616_39842 = state_38590__$1;
(statearr_38616_39842[(2)] = null);

(statearr_38616_39842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (13))){
var inst_38540 = (state_38590[(10)]);
var inst_38543 = cljs.core.chunked_seq_QMARK_(inst_38540);
var state_38590__$1 = state_38590;
if(inst_38543){
var statearr_38618_39843 = state_38590__$1;
(statearr_38618_39843[(1)] = (16));

} else {
var statearr_38619_39844 = state_38590__$1;
(statearr_38619_39844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (22))){
var inst_38573 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
if(cljs.core.truth_(inst_38573)){
var statearr_38622_39845 = state_38590__$1;
(statearr_38622_39845[(1)] = (23));

} else {
var statearr_38623_39846 = state_38590__$1;
(statearr_38623_39846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (6))){
var inst_38565 = (state_38590[(7)]);
var inst_38516 = (state_38590[(8)]);
var inst_38567 = (state_38590[(11)]);
var inst_38565__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38516) : topic_fn.call(null,inst_38516));
var inst_38566 = cljs.core.deref(mults);
var inst_38567__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38566,inst_38565__$1);
var state_38590__$1 = (function (){var statearr_38627 = state_38590;
(statearr_38627[(7)] = inst_38565__$1);

(statearr_38627[(11)] = inst_38567__$1);

return statearr_38627;
})();
if(cljs.core.truth_(inst_38567__$1)){
var statearr_38628_39851 = state_38590__$1;
(statearr_38628_39851[(1)] = (19));

} else {
var statearr_38630_39853 = state_38590__$1;
(statearr_38630_39853[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (25))){
var inst_38580 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38631_39854 = state_38590__$1;
(statearr_38631_39854[(2)] = inst_38580);

(statearr_38631_39854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (17))){
var inst_38540 = (state_38590[(10)]);
var inst_38550 = cljs.core.first(inst_38540);
var inst_38551 = cljs.core.async.muxch_STAR_(inst_38550);
var inst_38552 = cljs.core.async.close_BANG_(inst_38551);
var inst_38553 = cljs.core.next(inst_38540);
var inst_38526 = inst_38553;
var inst_38527 = null;
var inst_38528 = (0);
var inst_38529 = (0);
var state_38590__$1 = (function (){var statearr_38632 = state_38590;
(statearr_38632[(12)] = inst_38552);

(statearr_38632[(13)] = inst_38526);

(statearr_38632[(14)] = inst_38527);

(statearr_38632[(15)] = inst_38528);

(statearr_38632[(16)] = inst_38529);

return statearr_38632;
})();
var statearr_38633_39855 = state_38590__$1;
(statearr_38633_39855[(2)] = null);

(statearr_38633_39855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (3))){
var inst_38588 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38590__$1,inst_38588);
} else {
if((state_val_38591 === (12))){
var inst_38561 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38634_39857 = state_38590__$1;
(statearr_38634_39857[(2)] = inst_38561);

(statearr_38634_39857[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (2))){
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38590__$1,(4),ch);
} else {
if((state_val_38591 === (23))){
var state_38590__$1 = state_38590;
var statearr_38635_39859 = state_38590__$1;
(statearr_38635_39859[(2)] = null);

(statearr_38635_39859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (19))){
var inst_38516 = (state_38590[(8)]);
var inst_38567 = (state_38590[(11)]);
var inst_38570 = cljs.core.async.muxch_STAR_(inst_38567);
var state_38590__$1 = state_38590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38590__$1,(22),inst_38570,inst_38516);
} else {
if((state_val_38591 === (11))){
var inst_38526 = (state_38590[(13)]);
var inst_38540 = (state_38590[(10)]);
var inst_38540__$1 = cljs.core.seq(inst_38526);
var state_38590__$1 = (function (){var statearr_38639 = state_38590;
(statearr_38639[(10)] = inst_38540__$1);

return statearr_38639;
})();
if(inst_38540__$1){
var statearr_38640_39863 = state_38590__$1;
(statearr_38640_39863[(1)] = (13));

} else {
var statearr_38641_39864 = state_38590__$1;
(statearr_38641_39864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (9))){
var inst_38563 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38642_39865 = state_38590__$1;
(statearr_38642_39865[(2)] = inst_38563);

(statearr_38642_39865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (5))){
var inst_38523 = cljs.core.deref(mults);
var inst_38524 = cljs.core.vals(inst_38523);
var inst_38525 = cljs.core.seq(inst_38524);
var inst_38526 = inst_38525;
var inst_38527 = null;
var inst_38528 = (0);
var inst_38529 = (0);
var state_38590__$1 = (function (){var statearr_38647 = state_38590;
(statearr_38647[(13)] = inst_38526);

(statearr_38647[(14)] = inst_38527);

(statearr_38647[(15)] = inst_38528);

(statearr_38647[(16)] = inst_38529);

return statearr_38647;
})();
var statearr_38649_39866 = state_38590__$1;
(statearr_38649_39866[(2)] = null);

(statearr_38649_39866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (14))){
var state_38590__$1 = state_38590;
var statearr_38653_39867 = state_38590__$1;
(statearr_38653_39867[(2)] = null);

(statearr_38653_39867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (16))){
var inst_38540 = (state_38590[(10)]);
var inst_38545 = cljs.core.chunk_first(inst_38540);
var inst_38546 = cljs.core.chunk_rest(inst_38540);
var inst_38547 = cljs.core.count(inst_38545);
var inst_38526 = inst_38546;
var inst_38527 = inst_38545;
var inst_38528 = inst_38547;
var inst_38529 = (0);
var state_38590__$1 = (function (){var statearr_38654 = state_38590;
(statearr_38654[(13)] = inst_38526);

(statearr_38654[(14)] = inst_38527);

(statearr_38654[(15)] = inst_38528);

(statearr_38654[(16)] = inst_38529);

return statearr_38654;
})();
var statearr_38655_39868 = state_38590__$1;
(statearr_38655_39868[(2)] = null);

(statearr_38655_39868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (10))){
var inst_38526 = (state_38590[(13)]);
var inst_38527 = (state_38590[(14)]);
var inst_38528 = (state_38590[(15)]);
var inst_38529 = (state_38590[(16)]);
var inst_38534 = cljs.core._nth(inst_38527,inst_38529);
var inst_38535 = cljs.core.async.muxch_STAR_(inst_38534);
var inst_38536 = cljs.core.async.close_BANG_(inst_38535);
var inst_38537 = (inst_38529 + (1));
var tmp38650 = inst_38526;
var tmp38651 = inst_38527;
var tmp38652 = inst_38528;
var inst_38526__$1 = tmp38650;
var inst_38527__$1 = tmp38651;
var inst_38528__$1 = tmp38652;
var inst_38529__$1 = inst_38537;
var state_38590__$1 = (function (){var statearr_38656 = state_38590;
(statearr_38656[(13)] = inst_38526__$1);

(statearr_38656[(14)] = inst_38527__$1);

(statearr_38656[(15)] = inst_38528__$1);

(statearr_38656[(16)] = inst_38529__$1);

(statearr_38656[(17)] = inst_38536);

return statearr_38656;
})();
var statearr_38657_39869 = state_38590__$1;
(statearr_38657_39869[(2)] = null);

(statearr_38657_39869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (18))){
var inst_38556 = (state_38590[(2)]);
var state_38590__$1 = state_38590;
var statearr_38661_39870 = state_38590__$1;
(statearr_38661_39870[(2)] = inst_38556);

(statearr_38661_39870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38591 === (8))){
var inst_38528 = (state_38590[(15)]);
var inst_38529 = (state_38590[(16)]);
var inst_38531 = (inst_38529 < inst_38528);
var inst_38532 = inst_38531;
var state_38590__$1 = state_38590;
if(cljs.core.truth_(inst_38532)){
var statearr_38662_39871 = state_38590__$1;
(statearr_38662_39871[(1)] = (10));

} else {
var statearr_38663_39875 = state_38590__$1;
(statearr_38663_39875[(1)] = (11));

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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_38664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38664[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_38664[(1)] = (1));

return statearr_38664;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38590){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38590);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38665){var ex__37152__auto__ = e38665;
var statearr_38666_39876 = state_38590;
(statearr_38666_39876[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38590[(4)]))){
var statearr_38667_39877 = state_38590;
(statearr_38667_39877[(1)] = cljs.core.first((state_38590[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39878 = state_38590;
state_38590 = G__39878;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38668 = f__37275__auto__();
(statearr_38668[(6)] = c__37274__auto___39833);

return statearr_38668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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
var G__38670 = arguments.length;
switch (G__38670) {
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
var G__38677 = arguments.length;
switch (G__38677) {
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
var G__38684 = arguments.length;
switch (G__38684) {
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
var c__37274__auto___39882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38753){
var state_val_38754 = (state_38753[(1)]);
if((state_val_38754 === (7))){
var state_38753__$1 = state_38753;
var statearr_38755_39883 = state_38753__$1;
(statearr_38755_39883[(2)] = null);

(statearr_38755_39883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (1))){
var state_38753__$1 = state_38753;
var statearr_38756_39884 = state_38753__$1;
(statearr_38756_39884[(2)] = null);

(statearr_38756_39884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (4))){
var inst_38696 = (state_38753[(7)]);
var inst_38697 = (state_38753[(8)]);
var inst_38699 = (inst_38697 < inst_38696);
var state_38753__$1 = state_38753;
if(cljs.core.truth_(inst_38699)){
var statearr_38757_39885 = state_38753__$1;
(statearr_38757_39885[(1)] = (6));

} else {
var statearr_38758_39886 = state_38753__$1;
(statearr_38758_39886[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (15))){
var inst_38739 = (state_38753[(9)]);
var inst_38744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38739);
var state_38753__$1 = state_38753;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38753__$1,(17),out,inst_38744);
} else {
if((state_val_38754 === (13))){
var inst_38739 = (state_38753[(9)]);
var inst_38739__$1 = (state_38753[(2)]);
var inst_38740 = cljs.core.some(cljs.core.nil_QMARK_,inst_38739__$1);
var state_38753__$1 = (function (){var statearr_38759 = state_38753;
(statearr_38759[(9)] = inst_38739__$1);

return statearr_38759;
})();
if(cljs.core.truth_(inst_38740)){
var statearr_38760_39887 = state_38753__$1;
(statearr_38760_39887[(1)] = (14));

} else {
var statearr_38761_39888 = state_38753__$1;
(statearr_38761_39888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (6))){
var state_38753__$1 = state_38753;
var statearr_38762_39889 = state_38753__$1;
(statearr_38762_39889[(2)] = null);

(statearr_38762_39889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (17))){
var inst_38746 = (state_38753[(2)]);
var state_38753__$1 = (function (){var statearr_38765 = state_38753;
(statearr_38765[(10)] = inst_38746);

return statearr_38765;
})();
var statearr_38768_39890 = state_38753__$1;
(statearr_38768_39890[(2)] = null);

(statearr_38768_39890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (3))){
var inst_38751 = (state_38753[(2)]);
var state_38753__$1 = state_38753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38753__$1,inst_38751);
} else {
if((state_val_38754 === (12))){
var _ = (function (){var statearr_38770 = state_38753;
(statearr_38770[(4)] = cljs.core.rest((state_38753[(4)])));

return statearr_38770;
})();
var state_38753__$1 = state_38753;
var ex38763 = (state_38753__$1[(2)]);
var statearr_38771_39891 = state_38753__$1;
(statearr_38771_39891[(5)] = ex38763);


if((ex38763 instanceof Object)){
var statearr_38772_39892 = state_38753__$1;
(statearr_38772_39892[(1)] = (11));

(statearr_38772_39892[(5)] = null);

} else {
throw ex38763;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (2))){
var inst_38695 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38696 = cnt;
var inst_38697 = (0);
var state_38753__$1 = (function (){var statearr_38776 = state_38753;
(statearr_38776[(11)] = inst_38695);

(statearr_38776[(7)] = inst_38696);

(statearr_38776[(8)] = inst_38697);

return statearr_38776;
})();
var statearr_38777_39893 = state_38753__$1;
(statearr_38777_39893[(2)] = null);

(statearr_38777_39893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (11))){
var inst_38718 = (state_38753[(2)]);
var inst_38719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38753__$1 = (function (){var statearr_38778 = state_38753;
(statearr_38778[(12)] = inst_38718);

return statearr_38778;
})();
var statearr_38779_39894 = state_38753__$1;
(statearr_38779_39894[(2)] = inst_38719);

(statearr_38779_39894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (9))){
var inst_38697 = (state_38753[(8)]);
var _ = (function (){var statearr_38780 = state_38753;
(statearr_38780[(4)] = cljs.core.cons((12),(state_38753[(4)])));

return statearr_38780;
})();
var inst_38725 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38697) : chs__$1.call(null,inst_38697));
var inst_38726 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38697) : done.call(null,inst_38697));
var inst_38727 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38725,inst_38726);
var ___$1 = (function (){var statearr_38781 = state_38753;
(statearr_38781[(4)] = cljs.core.rest((state_38753[(4)])));

return statearr_38781;
})();
var state_38753__$1 = state_38753;
var statearr_38782_39895 = state_38753__$1;
(statearr_38782_39895[(2)] = inst_38727);

(statearr_38782_39895[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (5))){
var inst_38737 = (state_38753[(2)]);
var state_38753__$1 = (function (){var statearr_38783 = state_38753;
(statearr_38783[(13)] = inst_38737);

return statearr_38783;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38753__$1,(13),dchan);
} else {
if((state_val_38754 === (14))){
var inst_38742 = cljs.core.async.close_BANG_(out);
var state_38753__$1 = state_38753;
var statearr_38784_39896 = state_38753__$1;
(statearr_38784_39896[(2)] = inst_38742);

(statearr_38784_39896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (16))){
var inst_38749 = (state_38753[(2)]);
var state_38753__$1 = state_38753;
var statearr_38786_39897 = state_38753__$1;
(statearr_38786_39897[(2)] = inst_38749);

(statearr_38786_39897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (10))){
var inst_38697 = (state_38753[(8)]);
var inst_38730 = (state_38753[(2)]);
var inst_38731 = (inst_38697 + (1));
var inst_38697__$1 = inst_38731;
var state_38753__$1 = (function (){var statearr_38788 = state_38753;
(statearr_38788[(14)] = inst_38730);

(statearr_38788[(8)] = inst_38697__$1);

return statearr_38788;
})();
var statearr_38789_39898 = state_38753__$1;
(statearr_38789_39898[(2)] = null);

(statearr_38789_39898[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38754 === (8))){
var inst_38735 = (state_38753[(2)]);
var state_38753__$1 = state_38753;
var statearr_38790_39899 = state_38753__$1;
(statearr_38790_39899[(2)] = inst_38735);

(statearr_38790_39899[(1)] = (5));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_38791 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38791[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_38791[(1)] = (1));

return statearr_38791;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38753){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38753);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38792){var ex__37152__auto__ = e38792;
var statearr_38793_39900 = state_38753;
(statearr_38793_39900[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38753[(4)]))){
var statearr_38794_39901 = state_38753;
(statearr_38794_39901[(1)] = cljs.core.first((state_38753[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39902 = state_38753;
state_38753 = G__39902;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38795 = f__37275__auto__();
(statearr_38795[(6)] = c__37274__auto___39882);

return statearr_38795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


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
var G__38798 = arguments.length;
switch (G__38798) {
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
var c__37274__auto___39904 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38830){
var state_val_38831 = (state_38830[(1)]);
if((state_val_38831 === (7))){
var inst_38809 = (state_38830[(7)]);
var inst_38810 = (state_38830[(8)]);
var inst_38809__$1 = (state_38830[(2)]);
var inst_38810__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38809__$1,(0),null);
var inst_38811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38809__$1,(1),null);
var inst_38812 = (inst_38810__$1 == null);
var state_38830__$1 = (function (){var statearr_38832 = state_38830;
(statearr_38832[(9)] = inst_38811);

(statearr_38832[(7)] = inst_38809__$1);

(statearr_38832[(8)] = inst_38810__$1);

return statearr_38832;
})();
if(cljs.core.truth_(inst_38812)){
var statearr_38833_39905 = state_38830__$1;
(statearr_38833_39905[(1)] = (8));

} else {
var statearr_38834_39906 = state_38830__$1;
(statearr_38834_39906[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (1))){
var inst_38799 = cljs.core.vec(chs);
var inst_38800 = inst_38799;
var state_38830__$1 = (function (){var statearr_38835 = state_38830;
(statearr_38835[(10)] = inst_38800);

return statearr_38835;
})();
var statearr_38836_39907 = state_38830__$1;
(statearr_38836_39907[(2)] = null);

(statearr_38836_39907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (4))){
var inst_38800 = (state_38830[(10)]);
var state_38830__$1 = state_38830;
return cljs.core.async.ioc_alts_BANG_(state_38830__$1,(7),inst_38800);
} else {
if((state_val_38831 === (6))){
var inst_38826 = (state_38830[(2)]);
var state_38830__$1 = state_38830;
var statearr_38838_39908 = state_38830__$1;
(statearr_38838_39908[(2)] = inst_38826);

(statearr_38838_39908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (3))){
var inst_38828 = (state_38830[(2)]);
var state_38830__$1 = state_38830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38830__$1,inst_38828);
} else {
if((state_val_38831 === (2))){
var inst_38800 = (state_38830[(10)]);
var inst_38802 = cljs.core.count(inst_38800);
var inst_38803 = (inst_38802 > (0));
var state_38830__$1 = state_38830;
if(cljs.core.truth_(inst_38803)){
var statearr_38842_39909 = state_38830__$1;
(statearr_38842_39909[(1)] = (4));

} else {
var statearr_38843_39910 = state_38830__$1;
(statearr_38843_39910[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (11))){
var inst_38800 = (state_38830[(10)]);
var inst_38819 = (state_38830[(2)]);
var tmp38840 = inst_38800;
var inst_38800__$1 = tmp38840;
var state_38830__$1 = (function (){var statearr_38845 = state_38830;
(statearr_38845[(11)] = inst_38819);

(statearr_38845[(10)] = inst_38800__$1);

return statearr_38845;
})();
var statearr_38846_39911 = state_38830__$1;
(statearr_38846_39911[(2)] = null);

(statearr_38846_39911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (9))){
var inst_38810 = (state_38830[(8)]);
var state_38830__$1 = state_38830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38830__$1,(11),out,inst_38810);
} else {
if((state_val_38831 === (5))){
var inst_38824 = cljs.core.async.close_BANG_(out);
var state_38830__$1 = state_38830;
var statearr_38847_39912 = state_38830__$1;
(statearr_38847_39912[(2)] = inst_38824);

(statearr_38847_39912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (10))){
var inst_38822 = (state_38830[(2)]);
var state_38830__$1 = state_38830;
var statearr_38848_39913 = state_38830__$1;
(statearr_38848_39913[(2)] = inst_38822);

(statearr_38848_39913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38831 === (8))){
var inst_38811 = (state_38830[(9)]);
var inst_38809 = (state_38830[(7)]);
var inst_38800 = (state_38830[(10)]);
var inst_38810 = (state_38830[(8)]);
var inst_38814 = (function (){var cs = inst_38800;
var vec__38805 = inst_38809;
var v = inst_38810;
var c = inst_38811;
return (function (p1__38796_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38796_SHARP_);
});
})();
var inst_38815 = cljs.core.filterv(inst_38814,inst_38800);
var inst_38800__$1 = inst_38815;
var state_38830__$1 = (function (){var statearr_38849 = state_38830;
(statearr_38849[(10)] = inst_38800__$1);

return statearr_38849;
})();
var statearr_38850_39915 = state_38830__$1;
(statearr_38850_39915[(2)] = null);

(statearr_38850_39915[(1)] = (2));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_38851 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38851[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_38851[(1)] = (1));

return statearr_38851;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38830){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38830);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38852){var ex__37152__auto__ = e38852;
var statearr_38853_39916 = state_38830;
(statearr_38853_39916[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38830[(4)]))){
var statearr_38854_39917 = state_38830;
(statearr_38854_39917[(1)] = cljs.core.first((state_38830[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39918 = state_38830;
state_38830 = G__39918;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38855 = f__37275__auto__();
(statearr_38855[(6)] = c__37274__auto___39904);

return statearr_38855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
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
var G__38865 = arguments.length;
switch (G__38865) {
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
var c__37274__auto___39920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38918){
var state_val_38919 = (state_38918[(1)]);
if((state_val_38919 === (7))){
var inst_38894 = (state_38918[(7)]);
var inst_38894__$1 = (state_38918[(2)]);
var inst_38895 = (inst_38894__$1 == null);
var inst_38896 = cljs.core.not(inst_38895);
var state_38918__$1 = (function (){var statearr_38932 = state_38918;
(statearr_38932[(7)] = inst_38894__$1);

return statearr_38932;
})();
if(inst_38896){
var statearr_38933_39921 = state_38918__$1;
(statearr_38933_39921[(1)] = (8));

} else {
var statearr_38934_39922 = state_38918__$1;
(statearr_38934_39922[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (1))){
var inst_38886 = (0);
var state_38918__$1 = (function (){var statearr_38936 = state_38918;
(statearr_38936[(8)] = inst_38886);

return statearr_38936;
})();
var statearr_38937_39923 = state_38918__$1;
(statearr_38937_39923[(2)] = null);

(statearr_38937_39923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (4))){
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38918__$1,(7),ch);
} else {
if((state_val_38919 === (6))){
var inst_38911 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38939_39924 = state_38918__$1;
(statearr_38939_39924[(2)] = inst_38911);

(statearr_38939_39924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (3))){
var inst_38913 = (state_38918[(2)]);
var inst_38915 = cljs.core.async.close_BANG_(out);
var state_38918__$1 = (function (){var statearr_38941 = state_38918;
(statearr_38941[(9)] = inst_38913);

return statearr_38941;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38918__$1,inst_38915);
} else {
if((state_val_38919 === (2))){
var inst_38886 = (state_38918[(8)]);
var inst_38891 = (inst_38886 < n);
var state_38918__$1 = state_38918;
if(cljs.core.truth_(inst_38891)){
var statearr_38942_39929 = state_38918__$1;
(statearr_38942_39929[(1)] = (4));

} else {
var statearr_38943_39930 = state_38918__$1;
(statearr_38943_39930[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (11))){
var inst_38886 = (state_38918[(8)]);
var inst_38903 = (state_38918[(2)]);
var inst_38904 = (inst_38886 + (1));
var inst_38886__$1 = inst_38904;
var state_38918__$1 = (function (){var statearr_38945 = state_38918;
(statearr_38945[(8)] = inst_38886__$1);

(statearr_38945[(10)] = inst_38903);

return statearr_38945;
})();
var statearr_38947_39935 = state_38918__$1;
(statearr_38947_39935[(2)] = null);

(statearr_38947_39935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (9))){
var state_38918__$1 = state_38918;
var statearr_38948_39937 = state_38918__$1;
(statearr_38948_39937[(2)] = null);

(statearr_38948_39937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (5))){
var state_38918__$1 = state_38918;
var statearr_38949_39939 = state_38918__$1;
(statearr_38949_39939[(2)] = null);

(statearr_38949_39939[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (10))){
var inst_38908 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38950_39940 = state_38918__$1;
(statearr_38950_39940[(2)] = inst_38908);

(statearr_38950_39940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (8))){
var inst_38894 = (state_38918[(7)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38918__$1,(11),out,inst_38894);
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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_38951 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38951[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_38951[(1)] = (1));

return statearr_38951;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38918){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38918);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e38952){var ex__37152__auto__ = e38952;
var statearr_38953_39941 = state_38918;
(statearr_38953_39941[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38918[(4)]))){
var statearr_38954_39942 = state_38918;
(statearr_38954_39942[(1)] = cljs.core.first((state_38918[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39943 = state_38918;
state_38918 = G__39943;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_38955 = f__37275__auto__();
(statearr_38955[(6)] = c__37274__auto___39920);

return statearr_38955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38957 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38957 = (function (f,ch,meta38958){
this.f = f;
this.ch = ch;
this.meta38958 = meta38958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38959,meta38958__$1){
var self__ = this;
var _38959__$1 = this;
return (new cljs.core.async.t_cljs$core$async38957(self__.f,self__.ch,meta38958__$1));
}));

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38959){
var self__ = this;
var _38959__$1 = this;
return self__.meta38958;
}));

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38961 = (function (f,ch,meta38958,_,fn1,meta38962){
this.f = f;
this.ch = ch;
this.meta38958 = meta38958;
this._ = _;
this.fn1 = fn1;
this.meta38962 = meta38962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38963,meta38962__$1){
var self__ = this;
var _38963__$1 = this;
return (new cljs.core.async.t_cljs$core$async38961(self__.f,self__.ch,self__.meta38958,self__._,self__.fn1,meta38962__$1));
}));

(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38963){
var self__ = this;
var _38963__$1 = this;
return self__.meta38962;
}));

(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38961.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38956_SHARP_){
var G__38964 = (((p1__38956_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38956_SHARP_) : self__.f.call(null,p1__38956_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38964) : f1.call(null,G__38964));
});
}));

(cljs.core.async.t_cljs$core$async38961.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38958","meta38958",1714558631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38957","cljs.core.async/t_cljs$core$async38957",-2062063183,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38962","meta38962",-1850236926,null)], null);
}));

(cljs.core.async.t_cljs$core$async38961.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38961");

(cljs.core.async.t_cljs$core$async38961.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38961");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38961.
 */
cljs.core.async.__GT_t_cljs$core$async38961 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38961(f__$1,ch__$1,meta38958__$1,___$2,fn1__$1,meta38962){
return (new cljs.core.async.t_cljs$core$async38961(f__$1,ch__$1,meta38958__$1,___$2,fn1__$1,meta38962));
});

}

return (new cljs.core.async.t_cljs$core$async38961(self__.f,self__.ch,self__.meta38958,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38965 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38965) : self__.f.call(null,G__38965));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38958","meta38958",1714558631,null)], null);
}));

(cljs.core.async.t_cljs$core$async38957.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38957");

(cljs.core.async.t_cljs$core$async38957.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38957");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38957.
 */
cljs.core.async.__GT_t_cljs$core$async38957 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38957(f__$1,ch__$1,meta38958){
return (new cljs.core.async.t_cljs$core$async38957(f__$1,ch__$1,meta38958));
});

}

return (new cljs.core.async.t_cljs$core$async38957(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38966 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38966 = (function (f,ch,meta38967){
this.f = f;
this.ch = ch;
this.meta38967 = meta38967;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38968,meta38967__$1){
var self__ = this;
var _38968__$1 = this;
return (new cljs.core.async.t_cljs$core$async38966(self__.f,self__.ch,meta38967__$1));
}));

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38968){
var self__ = this;
var _38968__$1 = this;
return self__.meta38967;
}));

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38966.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38967","meta38967",222236989,null)], null);
}));

(cljs.core.async.t_cljs$core$async38966.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38966.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38966");

(cljs.core.async.t_cljs$core$async38966.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38966");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38966.
 */
cljs.core.async.__GT_t_cljs$core$async38966 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38966(f__$1,ch__$1,meta38967){
return (new cljs.core.async.t_cljs$core$async38966(f__$1,ch__$1,meta38967));
});

}

return (new cljs.core.async.t_cljs$core$async38966(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38969 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38969 = (function (p,ch,meta38970){
this.p = p;
this.ch = ch;
this.meta38970 = meta38970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38971,meta38970__$1){
var self__ = this;
var _38971__$1 = this;
return (new cljs.core.async.t_cljs$core$async38969(self__.p,self__.ch,meta38970__$1));
}));

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38971){
var self__ = this;
var _38971__$1 = this;
return self__.meta38970;
}));

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38970","meta38970",1172968314,null)], null);
}));

(cljs.core.async.t_cljs$core$async38969.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38969");

(cljs.core.async.t_cljs$core$async38969.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38969");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38969.
 */
cljs.core.async.__GT_t_cljs$core$async38969 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38969(p__$1,ch__$1,meta38970){
return (new cljs.core.async.t_cljs$core$async38969(p__$1,ch__$1,meta38970));
});

}

return (new cljs.core.async.t_cljs$core$async38969(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38973 = arguments.length;
switch (G__38973) {
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
var c__37274__auto___39968 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_38994){
var state_val_38995 = (state_38994[(1)]);
if((state_val_38995 === (7))){
var inst_38990 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_38996_39975 = state_38994__$1;
(statearr_38996_39975[(2)] = inst_38990);

(statearr_38996_39975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (1))){
var state_38994__$1 = state_38994;
var statearr_38997_39976 = state_38994__$1;
(statearr_38997_39976[(2)] = null);

(statearr_38997_39976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (4))){
var inst_38976 = (state_38994[(7)]);
var inst_38976__$1 = (state_38994[(2)]);
var inst_38977 = (inst_38976__$1 == null);
var state_38994__$1 = (function (){var statearr_38998 = state_38994;
(statearr_38998[(7)] = inst_38976__$1);

return statearr_38998;
})();
if(cljs.core.truth_(inst_38977)){
var statearr_38999_39983 = state_38994__$1;
(statearr_38999_39983[(1)] = (5));

} else {
var statearr_39000_39984 = state_38994__$1;
(statearr_39000_39984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (6))){
var inst_38976 = (state_38994[(7)]);
var inst_38981 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38976) : p.call(null,inst_38976));
var state_38994__$1 = state_38994;
if(cljs.core.truth_(inst_38981)){
var statearr_39001_39985 = state_38994__$1;
(statearr_39001_39985[(1)] = (8));

} else {
var statearr_39002_39986 = state_38994__$1;
(statearr_39002_39986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (3))){
var inst_38992 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38994__$1,inst_38992);
} else {
if((state_val_38995 === (2))){
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38994__$1,(4),ch);
} else {
if((state_val_38995 === (11))){
var inst_38984 = (state_38994[(2)]);
var state_38994__$1 = state_38994;
var statearr_39003_39987 = state_38994__$1;
(statearr_39003_39987[(2)] = inst_38984);

(statearr_39003_39987[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (9))){
var state_38994__$1 = state_38994;
var statearr_39004_39988 = state_38994__$1;
(statearr_39004_39988[(2)] = null);

(statearr_39004_39988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (5))){
var inst_38979 = cljs.core.async.close_BANG_(out);
var state_38994__$1 = state_38994;
var statearr_39005_39989 = state_38994__$1;
(statearr_39005_39989[(2)] = inst_38979);

(statearr_39005_39989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (10))){
var inst_38987 = (state_38994[(2)]);
var state_38994__$1 = (function (){var statearr_39006 = state_38994;
(statearr_39006[(8)] = inst_38987);

return statearr_39006;
})();
var statearr_39007_39990 = state_38994__$1;
(statearr_39007_39990[(2)] = null);

(statearr_39007_39990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38995 === (8))){
var inst_38976 = (state_38994[(7)]);
var state_38994__$1 = state_38994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38994__$1,(11),out,inst_38976);
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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_39008 = [null,null,null,null,null,null,null,null,null];
(statearr_39008[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_39008[(1)] = (1));

return statearr_39008;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_38994){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_38994);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e39009){var ex__37152__auto__ = e39009;
var statearr_39010_39997 = state_38994;
(statearr_39010_39997[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_38994[(4)]))){
var statearr_39011_39998 = state_38994;
(statearr_39011_39998[(1)] = cljs.core.first((state_38994[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39999 = state_38994;
state_38994 = G__39999;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_38994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_38994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_39012 = f__37275__auto__();
(statearr_39012[(6)] = c__37274__auto___39968);

return statearr_39012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39014 = arguments.length;
switch (G__39014) {
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
var c__37274__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_39076){
var state_val_39077 = (state_39076[(1)]);
if((state_val_39077 === (7))){
var inst_39072 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39078_40001 = state_39076__$1;
(statearr_39078_40001[(2)] = inst_39072);

(statearr_39078_40001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (20))){
var inst_39042 = (state_39076[(7)]);
var inst_39053 = (state_39076[(2)]);
var inst_39054 = cljs.core.next(inst_39042);
var inst_39028 = inst_39054;
var inst_39029 = null;
var inst_39030 = (0);
var inst_39031 = (0);
var state_39076__$1 = (function (){var statearr_39079 = state_39076;
(statearr_39079[(8)] = inst_39028);

(statearr_39079[(9)] = inst_39031);

(statearr_39079[(10)] = inst_39030);

(statearr_39079[(11)] = inst_39029);

(statearr_39079[(12)] = inst_39053);

return statearr_39079;
})();
var statearr_39080_40002 = state_39076__$1;
(statearr_39080_40002[(2)] = null);

(statearr_39080_40002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (1))){
var state_39076__$1 = state_39076;
var statearr_39081_40003 = state_39076__$1;
(statearr_39081_40003[(2)] = null);

(statearr_39081_40003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (4))){
var inst_39017 = (state_39076[(13)]);
var inst_39017__$1 = (state_39076[(2)]);
var inst_39018 = (inst_39017__$1 == null);
var state_39076__$1 = (function (){var statearr_39082 = state_39076;
(statearr_39082[(13)] = inst_39017__$1);

return statearr_39082;
})();
if(cljs.core.truth_(inst_39018)){
var statearr_39083_40004 = state_39076__$1;
(statearr_39083_40004[(1)] = (5));

} else {
var statearr_39084_40005 = state_39076__$1;
(statearr_39084_40005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (15))){
var state_39076__$1 = state_39076;
var statearr_39088_40006 = state_39076__$1;
(statearr_39088_40006[(2)] = null);

(statearr_39088_40006[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (21))){
var state_39076__$1 = state_39076;
var statearr_39089_40007 = state_39076__$1;
(statearr_39089_40007[(2)] = null);

(statearr_39089_40007[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (13))){
var inst_39028 = (state_39076[(8)]);
var inst_39031 = (state_39076[(9)]);
var inst_39030 = (state_39076[(10)]);
var inst_39029 = (state_39076[(11)]);
var inst_39038 = (state_39076[(2)]);
var inst_39039 = (inst_39031 + (1));
var tmp39085 = inst_39028;
var tmp39086 = inst_39030;
var tmp39087 = inst_39029;
var inst_39028__$1 = tmp39085;
var inst_39029__$1 = tmp39087;
var inst_39030__$1 = tmp39086;
var inst_39031__$1 = inst_39039;
var state_39076__$1 = (function (){var statearr_39090 = state_39076;
(statearr_39090[(8)] = inst_39028__$1);

(statearr_39090[(9)] = inst_39031__$1);

(statearr_39090[(10)] = inst_39030__$1);

(statearr_39090[(11)] = inst_39029__$1);

(statearr_39090[(14)] = inst_39038);

return statearr_39090;
})();
var statearr_39091_40008 = state_39076__$1;
(statearr_39091_40008[(2)] = null);

(statearr_39091_40008[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (22))){
var state_39076__$1 = state_39076;
var statearr_39092_40009 = state_39076__$1;
(statearr_39092_40009[(2)] = null);

(statearr_39092_40009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (6))){
var inst_39017 = (state_39076[(13)]);
var inst_39026 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39017) : f.call(null,inst_39017));
var inst_39027 = cljs.core.seq(inst_39026);
var inst_39028 = inst_39027;
var inst_39029 = null;
var inst_39030 = (0);
var inst_39031 = (0);
var state_39076__$1 = (function (){var statearr_39093 = state_39076;
(statearr_39093[(8)] = inst_39028);

(statearr_39093[(9)] = inst_39031);

(statearr_39093[(10)] = inst_39030);

(statearr_39093[(11)] = inst_39029);

return statearr_39093;
})();
var statearr_39094_40010 = state_39076__$1;
(statearr_39094_40010[(2)] = null);

(statearr_39094_40010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (17))){
var inst_39042 = (state_39076[(7)]);
var inst_39046 = cljs.core.chunk_first(inst_39042);
var inst_39047 = cljs.core.chunk_rest(inst_39042);
var inst_39048 = cljs.core.count(inst_39046);
var inst_39028 = inst_39047;
var inst_39029 = inst_39046;
var inst_39030 = inst_39048;
var inst_39031 = (0);
var state_39076__$1 = (function (){var statearr_39095 = state_39076;
(statearr_39095[(8)] = inst_39028);

(statearr_39095[(9)] = inst_39031);

(statearr_39095[(10)] = inst_39030);

(statearr_39095[(11)] = inst_39029);

return statearr_39095;
})();
var statearr_39096_40011 = state_39076__$1;
(statearr_39096_40011[(2)] = null);

(statearr_39096_40011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (3))){
var inst_39074 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39076__$1,inst_39074);
} else {
if((state_val_39077 === (12))){
var inst_39062 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39097_40012 = state_39076__$1;
(statearr_39097_40012[(2)] = inst_39062);

(statearr_39097_40012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (2))){
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39076__$1,(4),in$);
} else {
if((state_val_39077 === (23))){
var inst_39070 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39098_40013 = state_39076__$1;
(statearr_39098_40013[(2)] = inst_39070);

(statearr_39098_40013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (19))){
var inst_39057 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39099_40014 = state_39076__$1;
(statearr_39099_40014[(2)] = inst_39057);

(statearr_39099_40014[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (11))){
var inst_39028 = (state_39076[(8)]);
var inst_39042 = (state_39076[(7)]);
var inst_39042__$1 = cljs.core.seq(inst_39028);
var state_39076__$1 = (function (){var statearr_39100 = state_39076;
(statearr_39100[(7)] = inst_39042__$1);

return statearr_39100;
})();
if(inst_39042__$1){
var statearr_39101_40021 = state_39076__$1;
(statearr_39101_40021[(1)] = (14));

} else {
var statearr_39102_40022 = state_39076__$1;
(statearr_39102_40022[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (9))){
var inst_39064 = (state_39076[(2)]);
var inst_39065 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39076__$1 = (function (){var statearr_39103 = state_39076;
(statearr_39103[(15)] = inst_39064);

return statearr_39103;
})();
if(cljs.core.truth_(inst_39065)){
var statearr_39104_40023 = state_39076__$1;
(statearr_39104_40023[(1)] = (21));

} else {
var statearr_39105_40024 = state_39076__$1;
(statearr_39105_40024[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (5))){
var inst_39020 = cljs.core.async.close_BANG_(out);
var state_39076__$1 = state_39076;
var statearr_39106_40025 = state_39076__$1;
(statearr_39106_40025[(2)] = inst_39020);

(statearr_39106_40025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (14))){
var inst_39042 = (state_39076[(7)]);
var inst_39044 = cljs.core.chunked_seq_QMARK_(inst_39042);
var state_39076__$1 = state_39076;
if(inst_39044){
var statearr_39107_40032 = state_39076__$1;
(statearr_39107_40032[(1)] = (17));

} else {
var statearr_39108_40033 = state_39076__$1;
(statearr_39108_40033[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (16))){
var inst_39060 = (state_39076[(2)]);
var state_39076__$1 = state_39076;
var statearr_39109_40034 = state_39076__$1;
(statearr_39109_40034[(2)] = inst_39060);

(statearr_39109_40034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39077 === (10))){
var inst_39031 = (state_39076[(9)]);
var inst_39029 = (state_39076[(11)]);
var inst_39036 = cljs.core._nth(inst_39029,inst_39031);
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39076__$1,(13),out,inst_39036);
} else {
if((state_val_39077 === (18))){
var inst_39042 = (state_39076[(7)]);
var inst_39051 = cljs.core.first(inst_39042);
var state_39076__$1 = state_39076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39076__$1,(20),out,inst_39051);
} else {
if((state_val_39077 === (8))){
var inst_39031 = (state_39076[(9)]);
var inst_39030 = (state_39076[(10)]);
var inst_39033 = (inst_39031 < inst_39030);
var inst_39034 = inst_39033;
var state_39076__$1 = state_39076;
if(cljs.core.truth_(inst_39034)){
var statearr_39110_40035 = state_39076__$1;
(statearr_39110_40035[(1)] = (10));

} else {
var statearr_39111_40040 = state_39076__$1;
(statearr_39111_40040[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____0 = (function (){
var statearr_39112 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39112[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__);

(statearr_39112[(1)] = (1));

return statearr_39112;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____1 = (function (state_39076){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_39076);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e39113){var ex__37152__auto__ = e39113;
var statearr_39114_40041 = state_39076;
(statearr_39114_40041[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_39076[(4)]))){
var statearr_39115_40042 = state_39076;
(statearr_39115_40042[(1)] = cljs.core.first((state_39076[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40049 = state_39076;
state_39076 = G__40049;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__ = function(state_39076){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____1.call(this,state_39076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37149__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_39116 = f__37275__auto__();
(statearr_39116[(6)] = c__37274__auto__);

return statearr_39116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

return c__37274__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39118 = arguments.length;
switch (G__39118) {
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
var G__39120 = arguments.length;
switch (G__39120) {
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
var G__39122 = arguments.length;
switch (G__39122) {
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
var c__37274__auto___40053 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_39146){
var state_val_39147 = (state_39146[(1)]);
if((state_val_39147 === (7))){
var inst_39141 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39148_40054 = state_39146__$1;
(statearr_39148_40054[(2)] = inst_39141);

(statearr_39148_40054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (1))){
var inst_39123 = null;
var state_39146__$1 = (function (){var statearr_39149 = state_39146;
(statearr_39149[(7)] = inst_39123);

return statearr_39149;
})();
var statearr_39150_40057 = state_39146__$1;
(statearr_39150_40057[(2)] = null);

(statearr_39150_40057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (4))){
var inst_39126 = (state_39146[(8)]);
var inst_39126__$1 = (state_39146[(2)]);
var inst_39127 = (inst_39126__$1 == null);
var inst_39128 = cljs.core.not(inst_39127);
var state_39146__$1 = (function (){var statearr_39151 = state_39146;
(statearr_39151[(8)] = inst_39126__$1);

return statearr_39151;
})();
if(inst_39128){
var statearr_39152_40061 = state_39146__$1;
(statearr_39152_40061[(1)] = (5));

} else {
var statearr_39153_40062 = state_39146__$1;
(statearr_39153_40062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (6))){
var state_39146__$1 = state_39146;
var statearr_39154_40064 = state_39146__$1;
(statearr_39154_40064[(2)] = null);

(statearr_39154_40064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (3))){
var inst_39143 = (state_39146[(2)]);
var inst_39144 = cljs.core.async.close_BANG_(out);
var state_39146__$1 = (function (){var statearr_39155 = state_39146;
(statearr_39155[(9)] = inst_39143);

return statearr_39155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39146__$1,inst_39144);
} else {
if((state_val_39147 === (2))){
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39146__$1,(4),ch);
} else {
if((state_val_39147 === (11))){
var inst_39126 = (state_39146[(8)]);
var inst_39135 = (state_39146[(2)]);
var inst_39123 = inst_39126;
var state_39146__$1 = (function (){var statearr_39156 = state_39146;
(statearr_39156[(7)] = inst_39123);

(statearr_39156[(10)] = inst_39135);

return statearr_39156;
})();
var statearr_39157_40065 = state_39146__$1;
(statearr_39157_40065[(2)] = null);

(statearr_39157_40065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (9))){
var inst_39126 = (state_39146[(8)]);
var state_39146__$1 = state_39146;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39146__$1,(11),out,inst_39126);
} else {
if((state_val_39147 === (5))){
var inst_39123 = (state_39146[(7)]);
var inst_39126 = (state_39146[(8)]);
var inst_39130 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39126,inst_39123);
var state_39146__$1 = state_39146;
if(inst_39130){
var statearr_39159_40066 = state_39146__$1;
(statearr_39159_40066[(1)] = (8));

} else {
var statearr_39160_40067 = state_39146__$1;
(statearr_39160_40067[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (10))){
var inst_39138 = (state_39146[(2)]);
var state_39146__$1 = state_39146;
var statearr_39161_40068 = state_39146__$1;
(statearr_39161_40068[(2)] = inst_39138);

(statearr_39161_40068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39147 === (8))){
var inst_39123 = (state_39146[(7)]);
var tmp39158 = inst_39123;
var inst_39123__$1 = tmp39158;
var state_39146__$1 = (function (){var statearr_39162 = state_39146;
(statearr_39162[(7)] = inst_39123__$1);

return statearr_39162;
})();
var statearr_39163_40069 = state_39146__$1;
(statearr_39163_40069[(2)] = null);

(statearr_39163_40069[(1)] = (2));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_39164 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39164[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_39164[(1)] = (1));

return statearr_39164;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_39146){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_39146);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e39165){var ex__37152__auto__ = e39165;
var statearr_39166_40077 = state_39146;
(statearr_39166_40077[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_39146[(4)]))){
var statearr_39167_40078 = state_39146;
(statearr_39167_40078[(1)] = cljs.core.first((state_39146[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40079 = state_39146;
state_39146 = G__40079;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_39146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_39146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_39168 = f__37275__auto__();
(statearr_39168[(6)] = c__37274__auto___40053);

return statearr_39168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39170 = arguments.length;
switch (G__39170) {
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
var c__37274__auto___40081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_39208){
var state_val_39209 = (state_39208[(1)]);
if((state_val_39209 === (7))){
var inst_39204 = (state_39208[(2)]);
var state_39208__$1 = state_39208;
var statearr_39210_40082 = state_39208__$1;
(statearr_39210_40082[(2)] = inst_39204);

(statearr_39210_40082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (1))){
var inst_39171 = (new Array(n));
var inst_39172 = inst_39171;
var inst_39173 = (0);
var state_39208__$1 = (function (){var statearr_39211 = state_39208;
(statearr_39211[(7)] = inst_39173);

(statearr_39211[(8)] = inst_39172);

return statearr_39211;
})();
var statearr_39212_40083 = state_39208__$1;
(statearr_39212_40083[(2)] = null);

(statearr_39212_40083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (4))){
var inst_39176 = (state_39208[(9)]);
var inst_39176__$1 = (state_39208[(2)]);
var inst_39177 = (inst_39176__$1 == null);
var inst_39178 = cljs.core.not(inst_39177);
var state_39208__$1 = (function (){var statearr_39213 = state_39208;
(statearr_39213[(9)] = inst_39176__$1);

return statearr_39213;
})();
if(inst_39178){
var statearr_39214_40084 = state_39208__$1;
(statearr_39214_40084[(1)] = (5));

} else {
var statearr_39215_40085 = state_39208__$1;
(statearr_39215_40085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (15))){
var inst_39198 = (state_39208[(2)]);
var state_39208__$1 = state_39208;
var statearr_39216_40086 = state_39208__$1;
(statearr_39216_40086[(2)] = inst_39198);

(statearr_39216_40086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (13))){
var state_39208__$1 = state_39208;
var statearr_39219_40087 = state_39208__$1;
(statearr_39219_40087[(2)] = null);

(statearr_39219_40087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (6))){
var inst_39173 = (state_39208[(7)]);
var inst_39194 = (inst_39173 > (0));
var state_39208__$1 = state_39208;
if(cljs.core.truth_(inst_39194)){
var statearr_39221_40088 = state_39208__$1;
(statearr_39221_40088[(1)] = (12));

} else {
var statearr_39223_40089 = state_39208__$1;
(statearr_39223_40089[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (3))){
var inst_39206 = (state_39208[(2)]);
var state_39208__$1 = state_39208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39208__$1,inst_39206);
} else {
if((state_val_39209 === (12))){
var inst_39172 = (state_39208[(8)]);
var inst_39196 = cljs.core.vec(inst_39172);
var state_39208__$1 = state_39208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39208__$1,(15),out,inst_39196);
} else {
if((state_val_39209 === (2))){
var state_39208__$1 = state_39208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39208__$1,(4),ch);
} else {
if((state_val_39209 === (11))){
var inst_39188 = (state_39208[(2)]);
var inst_39189 = (new Array(n));
var inst_39172 = inst_39189;
var inst_39173 = (0);
var state_39208__$1 = (function (){var statearr_39226 = state_39208;
(statearr_39226[(7)] = inst_39173);

(statearr_39226[(8)] = inst_39172);

(statearr_39226[(10)] = inst_39188);

return statearr_39226;
})();
var statearr_39230_40090 = state_39208__$1;
(statearr_39230_40090[(2)] = null);

(statearr_39230_40090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (9))){
var inst_39172 = (state_39208[(8)]);
var inst_39186 = cljs.core.vec(inst_39172);
var state_39208__$1 = state_39208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39208__$1,(11),out,inst_39186);
} else {
if((state_val_39209 === (5))){
var inst_39173 = (state_39208[(7)]);
var inst_39176 = (state_39208[(9)]);
var inst_39172 = (state_39208[(8)]);
var inst_39181 = (state_39208[(11)]);
var inst_39180 = (inst_39172[inst_39173] = inst_39176);
var inst_39181__$1 = (inst_39173 + (1));
var inst_39182 = (inst_39181__$1 < n);
var state_39208__$1 = (function (){var statearr_39238 = state_39208;
(statearr_39238[(12)] = inst_39180);

(statearr_39238[(11)] = inst_39181__$1);

return statearr_39238;
})();
if(cljs.core.truth_(inst_39182)){
var statearr_39240_40092 = state_39208__$1;
(statearr_39240_40092[(1)] = (8));

} else {
var statearr_39241_40093 = state_39208__$1;
(statearr_39241_40093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (14))){
var inst_39201 = (state_39208[(2)]);
var inst_39202 = cljs.core.async.close_BANG_(out);
var state_39208__$1 = (function (){var statearr_39256 = state_39208;
(statearr_39256[(13)] = inst_39201);

return statearr_39256;
})();
var statearr_39259_40094 = state_39208__$1;
(statearr_39259_40094[(2)] = inst_39202);

(statearr_39259_40094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (10))){
var inst_39192 = (state_39208[(2)]);
var state_39208__$1 = state_39208;
var statearr_39260_40095 = state_39208__$1;
(statearr_39260_40095[(2)] = inst_39192);

(statearr_39260_40095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39209 === (8))){
var inst_39172 = (state_39208[(8)]);
var inst_39181 = (state_39208[(11)]);
var tmp39243 = inst_39172;
var inst_39172__$1 = tmp39243;
var inst_39173 = inst_39181;
var state_39208__$1 = (function (){var statearr_39262 = state_39208;
(statearr_39262[(7)] = inst_39173);

(statearr_39262[(8)] = inst_39172__$1);

return statearr_39262;
})();
var statearr_39263_40096 = state_39208__$1;
(statearr_39263_40096[(2)] = null);

(statearr_39263_40096[(1)] = (2));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_39268 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39268[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_39268[(1)] = (1));

return statearr_39268;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_39208){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_39208);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e39270){var ex__37152__auto__ = e39270;
var statearr_39271_40098 = state_39208;
(statearr_39271_40098[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_39208[(4)]))){
var statearr_39273_40103 = state_39208;
(statearr_39273_40103[(1)] = cljs.core.first((state_39208[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40104 = state_39208;
state_39208 = G__40104;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_39208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_39208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_39278 = f__37275__auto__();
(statearr_39278[(6)] = c__37274__auto___40081);

return statearr_39278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39284 = arguments.length;
switch (G__39284) {
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
var c__37274__auto___40116 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_39327){
var state_val_39328 = (state_39327[(1)]);
if((state_val_39328 === (7))){
var inst_39323 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39338_40117 = state_39327__$1;
(statearr_39338_40117[(2)] = inst_39323);

(statearr_39338_40117[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (1))){
var inst_39286 = [];
var inst_39287 = inst_39286;
var inst_39288 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39327__$1 = (function (){var statearr_39339 = state_39327;
(statearr_39339[(7)] = inst_39287);

(statearr_39339[(8)] = inst_39288);

return statearr_39339;
})();
var statearr_39340_40118 = state_39327__$1;
(statearr_39340_40118[(2)] = null);

(statearr_39340_40118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (4))){
var inst_39291 = (state_39327[(9)]);
var inst_39291__$1 = (state_39327[(2)]);
var inst_39292 = (inst_39291__$1 == null);
var inst_39293 = cljs.core.not(inst_39292);
var state_39327__$1 = (function (){var statearr_39341 = state_39327;
(statearr_39341[(9)] = inst_39291__$1);

return statearr_39341;
})();
if(inst_39293){
var statearr_39342_40123 = state_39327__$1;
(statearr_39342_40123[(1)] = (5));

} else {
var statearr_39343_40124 = state_39327__$1;
(statearr_39343_40124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (15))){
var inst_39317 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39344_40129 = state_39327__$1;
(statearr_39344_40129[(2)] = inst_39317);

(statearr_39344_40129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (13))){
var state_39327__$1 = state_39327;
var statearr_39345_40134 = state_39327__$1;
(statearr_39345_40134[(2)] = null);

(statearr_39345_40134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (6))){
var inst_39287 = (state_39327[(7)]);
var inst_39312 = inst_39287.length;
var inst_39313 = (inst_39312 > (0));
var state_39327__$1 = state_39327;
if(cljs.core.truth_(inst_39313)){
var statearr_39346_40188 = state_39327__$1;
(statearr_39346_40188[(1)] = (12));

} else {
var statearr_39347_40190 = state_39327__$1;
(statearr_39347_40190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (3))){
var inst_39325 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39327__$1,inst_39325);
} else {
if((state_val_39328 === (12))){
var inst_39287 = (state_39327[(7)]);
var inst_39315 = cljs.core.vec(inst_39287);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39327__$1,(15),out,inst_39315);
} else {
if((state_val_39328 === (2))){
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39327__$1,(4),ch);
} else {
if((state_val_39328 === (11))){
var inst_39291 = (state_39327[(9)]);
var inst_39295 = (state_39327[(10)]);
var inst_39305 = (state_39327[(2)]);
var inst_39306 = [];
var inst_39307 = inst_39306.push(inst_39291);
var inst_39287 = inst_39306;
var inst_39288 = inst_39295;
var state_39327__$1 = (function (){var statearr_39348 = state_39327;
(statearr_39348[(11)] = inst_39305);

(statearr_39348[(7)] = inst_39287);

(statearr_39348[(8)] = inst_39288);

(statearr_39348[(12)] = inst_39307);

return statearr_39348;
})();
var statearr_39349_40216 = state_39327__$1;
(statearr_39349_40216[(2)] = null);

(statearr_39349_40216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (9))){
var inst_39287 = (state_39327[(7)]);
var inst_39303 = cljs.core.vec(inst_39287);
var state_39327__$1 = state_39327;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39327__$1,(11),out,inst_39303);
} else {
if((state_val_39328 === (5))){
var inst_39291 = (state_39327[(9)]);
var inst_39288 = (state_39327[(8)]);
var inst_39295 = (state_39327[(10)]);
var inst_39295__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39291) : f.call(null,inst_39291));
var inst_39296 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39295__$1,inst_39288);
var inst_39297 = cljs.core.keyword_identical_QMARK_(inst_39288,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39298 = ((inst_39296) || (inst_39297));
var state_39327__$1 = (function (){var statearr_39350 = state_39327;
(statearr_39350[(10)] = inst_39295__$1);

return statearr_39350;
})();
if(cljs.core.truth_(inst_39298)){
var statearr_39351_40281 = state_39327__$1;
(statearr_39351_40281[(1)] = (8));

} else {
var statearr_39352_40282 = state_39327__$1;
(statearr_39352_40282[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (14))){
var inst_39320 = (state_39327[(2)]);
var inst_39321 = cljs.core.async.close_BANG_(out);
var state_39327__$1 = (function (){var statearr_39354 = state_39327;
(statearr_39354[(13)] = inst_39320);

return statearr_39354;
})();
var statearr_39355_40283 = state_39327__$1;
(statearr_39355_40283[(2)] = inst_39321);

(statearr_39355_40283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (10))){
var inst_39310 = (state_39327[(2)]);
var state_39327__$1 = state_39327;
var statearr_39356_40284 = state_39327__$1;
(statearr_39356_40284[(2)] = inst_39310);

(statearr_39356_40284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39328 === (8))){
var inst_39291 = (state_39327[(9)]);
var inst_39287 = (state_39327[(7)]);
var inst_39295 = (state_39327[(10)]);
var inst_39300 = inst_39287.push(inst_39291);
var tmp39353 = inst_39287;
var inst_39287__$1 = tmp39353;
var inst_39288 = inst_39295;
var state_39327__$1 = (function (){var statearr_39357 = state_39327;
(statearr_39357[(14)] = inst_39300);

(statearr_39357[(7)] = inst_39287__$1);

(statearr_39357[(8)] = inst_39288);

return statearr_39357;
})();
var statearr_39358_40288 = state_39327__$1;
(statearr_39358_40288[(2)] = null);

(statearr_39358_40288[(1)] = (2));


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
var cljs$core$async$state_machine__37149__auto__ = null;
var cljs$core$async$state_machine__37149__auto____0 = (function (){
var statearr_39359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39359[(0)] = cljs$core$async$state_machine__37149__auto__);

(statearr_39359[(1)] = (1));

return statearr_39359;
});
var cljs$core$async$state_machine__37149__auto____1 = (function (state_39327){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_39327);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e39360){var ex__37152__auto__ = e39360;
var statearr_39361_40305 = state_39327;
(statearr_39361_40305[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_39327[(4)]))){
var statearr_39362_40307 = state_39327;
(statearr_39362_40307[(1)] = cljs.core.first((state_39327[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40312 = state_39327;
state_39327 = G__40312;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
cljs$core$async$state_machine__37149__auto__ = function(state_39327){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37149__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37149__auto____1.call(this,state_39327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37149__auto____0;
cljs$core$async$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37149__auto____1;
return cljs$core$async$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_39363 = f__37275__auto__();
(statearr_39363[(6)] = c__37274__auto___40116);

return statearr_39363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
