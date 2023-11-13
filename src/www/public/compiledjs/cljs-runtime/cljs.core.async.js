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
cljs.core.async.t_cljs$core$async17054 = (function (f,blockable,meta17055){
this.f = f;
this.blockable = blockable;
this.meta17055 = meta17055;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17056,meta17055__$1){
var self__ = this;
var _17056__$1 = this;
return (new cljs.core.async.t_cljs$core$async17054(self__.f,self__.blockable,meta17055__$1));
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17056){
var self__ = this;
var _17056__$1 = this;
return self__.meta17055;
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17054.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17055","meta17055",453017073,null)], null);
}));

(cljs.core.async.t_cljs$core$async17054.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17054.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17054");

(cljs.core.async.t_cljs$core$async17054.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17054");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17054.
 */
cljs.core.async.__GT_t_cljs$core$async17054 = (function cljs$core$async$__GT_t_cljs$core$async17054(f,blockable,meta17055){
return (new cljs.core.async.t_cljs$core$async17054(f,blockable,meta17055));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17053 = arguments.length;
switch (G__17053) {
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
return (new cljs.core.async.t_cljs$core$async17054(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__17065 = arguments.length;
switch (G__17065) {
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
var G__17071 = arguments.length;
switch (G__17071) {
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
var G__17077 = arguments.length;
switch (G__17077) {
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
var val_19141 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19141) : fn1.call(null,val_19141));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19141) : fn1.call(null,val_19141));
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
var G__17103 = arguments.length;
switch (G__17103) {
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
var n__5636__auto___19144 = n;
var x_19146 = (0);
while(true){
if((x_19146 < n__5636__auto___19144)){
(a[x_19146] = x_19146);

var G__19148 = (x_19146 + (1));
x_19146 = G__19148;
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
cljs.core.async.t_cljs$core$async17156 = (function (flag,meta17157){
this.flag = flag;
this.meta17157 = meta17157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17158,meta17157__$1){
var self__ = this;
var _17158__$1 = this;
return (new cljs.core.async.t_cljs$core$async17156(self__.flag,meta17157__$1));
}));

(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17158){
var self__ = this;
var _17158__$1 = this;
return self__.meta17157;
}));

(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17157","meta17157",-210253932,null)], null);
}));

(cljs.core.async.t_cljs$core$async17156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17156");

(cljs.core.async.t_cljs$core$async17156.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17156.
 */
cljs.core.async.__GT_t_cljs$core$async17156 = (function cljs$core$async$__GT_t_cljs$core$async17156(flag,meta17157){
return (new cljs.core.async.t_cljs$core$async17156(flag,meta17157));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async17156(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17172 = (function (flag,cb,meta17173){
this.flag = flag;
this.cb = cb;
this.meta17173 = meta17173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17174,meta17173__$1){
var self__ = this;
var _17174__$1 = this;
return (new cljs.core.async.t_cljs$core$async17172(self__.flag,self__.cb,meta17173__$1));
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17174){
var self__ = this;
var _17174__$1 = this;
return self__.meta17173;
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17173","meta17173",527995641,null)], null);
}));

(cljs.core.async.t_cljs$core$async17172.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17172");

(cljs.core.async.t_cljs$core$async17172.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17172");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17172.
 */
cljs.core.async.__GT_t_cljs$core$async17172 = (function cljs$core$async$__GT_t_cljs$core$async17172(flag,cb,meta17173){
return (new cljs.core.async.t_cljs$core$async17172(flag,cb,meta17173));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async17172(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__17192_SHARP_){
var G__17198 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17192_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17198) : fret.call(null,G__17198));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17193_SHARP_){
var G__17200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17193_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17200) : fret.call(null,G__17200));
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
var G__19161 = (i + (1));
i = G__19161;
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
var len__5769__auto___19166 = arguments.length;
var i__5770__auto___19167 = (0);
while(true){
if((i__5770__auto___19167 < len__5769__auto___19166)){
args__5775__auto__.push((arguments[i__5770__auto___19167]));

var G__19168 = (i__5770__auto___19167 + (1));
i__5770__auto___19167 = G__19168;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17209){
var map__17210 = p__17209;
var map__17210__$1 = cljs.core.__destructure_map(map__17210);
var opts = map__17210__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17206){
var G__17207 = cljs.core.first(seq17206);
var seq17206__$1 = cljs.core.next(seq17206);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17207,seq17206__$1);
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
var G__17225 = arguments.length;
switch (G__17225) {
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
var c__16994__auto___19202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17257){
var state_val_17258 = (state_17257[(1)]);
if((state_val_17258 === (7))){
var inst_17253 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17259_19203 = state_17257__$1;
(statearr_17259_19203[(2)] = inst_17253);

(statearr_17259_19203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (1))){
var state_17257__$1 = state_17257;
var statearr_17260_19204 = state_17257__$1;
(statearr_17260_19204[(2)] = null);

(statearr_17260_19204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (4))){
var inst_17233 = (state_17257[(7)]);
var inst_17233__$1 = (state_17257[(2)]);
var inst_17234 = (inst_17233__$1 == null);
var state_17257__$1 = (function (){var statearr_17261 = state_17257;
(statearr_17261[(7)] = inst_17233__$1);

return statearr_17261;
})();
if(cljs.core.truth_(inst_17234)){
var statearr_17262_19205 = state_17257__$1;
(statearr_17262_19205[(1)] = (5));

} else {
var statearr_17263_19206 = state_17257__$1;
(statearr_17263_19206[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (13))){
var state_17257__$1 = state_17257;
var statearr_17264_19207 = state_17257__$1;
(statearr_17264_19207[(2)] = null);

(statearr_17264_19207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (6))){
var inst_17233 = (state_17257[(7)]);
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17257__$1,(11),to,inst_17233);
} else {
if((state_val_17258 === (3))){
var inst_17255 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17257__$1,inst_17255);
} else {
if((state_val_17258 === (12))){
var state_17257__$1 = state_17257;
var statearr_17267_19209 = state_17257__$1;
(statearr_17267_19209[(2)] = null);

(statearr_17267_19209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (2))){
var state_17257__$1 = state_17257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17257__$1,(4),from);
} else {
if((state_val_17258 === (11))){
var inst_17245 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
if(cljs.core.truth_(inst_17245)){
var statearr_17268_19212 = state_17257__$1;
(statearr_17268_19212[(1)] = (12));

} else {
var statearr_17269_19214 = state_17257__$1;
(statearr_17269_19214[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (9))){
var state_17257__$1 = state_17257;
var statearr_17270_19215 = state_17257__$1;
(statearr_17270_19215[(2)] = null);

(statearr_17270_19215[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (5))){
var state_17257__$1 = state_17257;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17271_19216 = state_17257__$1;
(statearr_17271_19216[(1)] = (8));

} else {
var statearr_17272_19217 = state_17257__$1;
(statearr_17272_19217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (14))){
var inst_17251 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17275_19218 = state_17257__$1;
(statearr_17275_19218[(2)] = inst_17251);

(statearr_17275_19218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (10))){
var inst_17242 = (state_17257[(2)]);
var state_17257__$1 = state_17257;
var statearr_17276_19219 = state_17257__$1;
(statearr_17276_19219[(2)] = inst_17242);

(statearr_17276_19219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17258 === (8))){
var inst_17238 = cljs.core.async.close_BANG_(to);
var state_17257__$1 = state_17257;
var statearr_17277_19220 = state_17257__$1;
(statearr_17277_19220[(2)] = inst_17238);

(statearr_17277_19220[(1)] = (10));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_17278 = [null,null,null,null,null,null,null,null];
(statearr_17278[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_17278[(1)] = (1));

return statearr_17278;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_17257){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17257);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17279){var ex__16859__auto__ = e17279;
var statearr_17280_19221 = state_17257;
(statearr_17280_19221[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17257[(4)]))){
var statearr_17281_19222 = state_17257;
(statearr_17281_19222[(1)] = cljs.core.first((state_17257[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19223 = state_17257;
state_17257 = G__19223;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_17257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_17257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17282 = f__16995__auto__();
(statearr_17282[(6)] = c__16994__auto___19202);

return statearr_17282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var process__$1 = (function (p__17283){
var vec__17284 = p__17283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(1),null);
var job = vec__17284;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16994__auto___19226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17291){
var state_val_17292 = (state_17291[(1)]);
if((state_val_17292 === (1))){
var state_17291__$1 = state_17291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17291__$1,(2),res,v);
} else {
if((state_val_17292 === (2))){
var inst_17288 = (state_17291[(2)]);
var inst_17289 = cljs.core.async.close_BANG_(res);
var state_17291__$1 = (function (){var statearr_17294 = state_17291;
(statearr_17294[(7)] = inst_17288);

return statearr_17294;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17291__$1,inst_17289);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1 = (function (state_17291){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17291);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17297){var ex__16859__auto__ = e17297;
var statearr_17298_19230 = state_17291;
(statearr_17298_19230[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17291[(4)]))){
var statearr_17302_19231 = state_17291;
(statearr_17302_19231[(1)] = cljs.core.first((state_17291[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19232 = state_17291;
state_17291 = G__19232;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = function(state_17291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1.call(this,state_17291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17304 = f__16995__auto__();
(statearr_17304[(6)] = c__16994__auto___19226);

return statearr_17304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17305){
var vec__17307 = p__17305;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17307,(1),null);
var job = vec__17307;
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
var n__5636__auto___19234 = n;
var __19235 = (0);
while(true){
if((__19235 < n__5636__auto___19234)){
var G__17313_19236 = type;
var G__17313_19237__$1 = (((G__17313_19236 instanceof cljs.core.Keyword))?G__17313_19236.fqn:null);
switch (G__17313_19237__$1) {
case "compute":
var c__16994__auto___19239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19235,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = ((function (__19235,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function (state_17331){
var state_val_17332 = (state_17331[(1)]);
if((state_val_17332 === (1))){
var state_17331__$1 = state_17331;
var statearr_17341_19240 = state_17331__$1;
(statearr_17341_19240[(2)] = null);

(statearr_17341_19240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17332 === (2))){
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17331__$1,(4),jobs);
} else {
if((state_val_17332 === (3))){
var inst_17329 = (state_17331[(2)]);
var state_17331__$1 = state_17331;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17331__$1,inst_17329);
} else {
if((state_val_17332 === (4))){
var inst_17320 = (state_17331[(2)]);
var inst_17321 = process__$1(inst_17320);
var state_17331__$1 = state_17331;
if(cljs.core.truth_(inst_17321)){
var statearr_17349_19242 = state_17331__$1;
(statearr_17349_19242[(1)] = (5));

} else {
var statearr_17351_19243 = state_17331__$1;
(statearr_17351_19243[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17332 === (5))){
var state_17331__$1 = state_17331;
var statearr_17353_19244 = state_17331__$1;
(statearr_17353_19244[(2)] = null);

(statearr_17353_19244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17332 === (6))){
var state_17331__$1 = state_17331;
var statearr_17355_19245 = state_17331__$1;
(statearr_17355_19245[(2)] = null);

(statearr_17355_19245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17332 === (7))){
var inst_17327 = (state_17331[(2)]);
var state_17331__$1 = state_17331;
var statearr_17358_19246 = state_17331__$1;
(statearr_17358_19246[(2)] = inst_17327);

(statearr_17358_19246[(1)] = (3));


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
});})(__19235,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
;
return ((function (__19235,switch__16855__auto__,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_17368 = [null,null,null,null,null,null,null];
(statearr_17368[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__);

(statearr_17368[(1)] = (1));

return statearr_17368;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1 = (function (state_17331){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17331);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17375){var ex__16859__auto__ = e17375;
var statearr_17378_19247 = state_17331;
(statearr_17378_19247[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17331[(4)]))){
var statearr_17379_19248 = state_17331;
(statearr_17379_19248[(1)] = cljs.core.first((state_17331[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19250 = state_17331;
state_17331 = G__19250;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = function(state_17331){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1.call(this,state_17331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__;
})()
;})(__19235,switch__16855__auto__,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
})();
var state__16996__auto__ = (function (){var statearr_17381 = f__16995__auto__();
(statearr_17381[(6)] = c__16994__auto___19239);

return statearr_17381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
});})(__19235,c__16994__auto___19239,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
);


break;
case "async":
var c__16994__auto___19251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19235,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = ((function (__19235,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function (state_17399){
var state_val_17400 = (state_17399[(1)]);
if((state_val_17400 === (1))){
var state_17399__$1 = state_17399;
var statearr_17406_19252 = state_17399__$1;
(statearr_17406_19252[(2)] = null);

(statearr_17406_19252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17400 === (2))){
var state_17399__$1 = state_17399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17399__$1,(4),jobs);
} else {
if((state_val_17400 === (3))){
var inst_17397 = (state_17399[(2)]);
var state_17399__$1 = state_17399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17399__$1,inst_17397);
} else {
if((state_val_17400 === (4))){
var inst_17389 = (state_17399[(2)]);
var inst_17390 = async(inst_17389);
var state_17399__$1 = state_17399;
if(cljs.core.truth_(inst_17390)){
var statearr_17414_19253 = state_17399__$1;
(statearr_17414_19253[(1)] = (5));

} else {
var statearr_17417_19254 = state_17399__$1;
(statearr_17417_19254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17400 === (5))){
var state_17399__$1 = state_17399;
var statearr_17418_19255 = state_17399__$1;
(statearr_17418_19255[(2)] = null);

(statearr_17418_19255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17400 === (6))){
var state_17399__$1 = state_17399;
var statearr_17420_19256 = state_17399__$1;
(statearr_17420_19256[(2)] = null);

(statearr_17420_19256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17400 === (7))){
var inst_17395 = (state_17399[(2)]);
var state_17399__$1 = state_17399;
var statearr_17421_19257 = state_17399__$1;
(statearr_17421_19257[(2)] = inst_17395);

(statearr_17421_19257[(1)] = (3));


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
});})(__19235,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
;
return ((function (__19235,switch__16855__auto__,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_17423 = [null,null,null,null,null,null,null];
(statearr_17423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__);

(statearr_17423[(1)] = (1));

return statearr_17423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1 = (function (state_17399){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17399);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17425){var ex__16859__auto__ = e17425;
var statearr_17427_19258 = state_17399;
(statearr_17427_19258[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17399[(4)]))){
var statearr_17430_19259 = state_17399;
(statearr_17430_19259[(1)] = cljs.core.first((state_17399[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19260 = state_17399;
state_17399 = G__19260;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = function(state_17399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1.call(this,state_17399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__;
})()
;})(__19235,switch__16855__auto__,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
})();
var state__16996__auto__ = (function (){var statearr_17431 = f__16995__auto__();
(statearr_17431[(6)] = c__16994__auto___19251);

return statearr_17431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
});})(__19235,c__16994__auto___19251,G__17313_19236,G__17313_19237__$1,n__5636__auto___19234,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17313_19237__$1)].join('')));

}

var G__19261 = (__19235 + (1));
__19235 = G__19261;
continue;
} else {
}
break;
}

var c__16994__auto___19262 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17466){
var state_val_17467 = (state_17466[(1)]);
if((state_val_17467 === (7))){
var inst_17462 = (state_17466[(2)]);
var state_17466__$1 = state_17466;
var statearr_17473_19263 = state_17466__$1;
(statearr_17473_19263[(2)] = inst_17462);

(statearr_17473_19263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17467 === (1))){
var state_17466__$1 = state_17466;
var statearr_17474_19264 = state_17466__$1;
(statearr_17474_19264[(2)] = null);

(statearr_17474_19264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17467 === (4))){
var inst_17445 = (state_17466[(7)]);
var inst_17445__$1 = (state_17466[(2)]);
var inst_17448 = (inst_17445__$1 == null);
var state_17466__$1 = (function (){var statearr_17475 = state_17466;
(statearr_17475[(7)] = inst_17445__$1);

return statearr_17475;
})();
if(cljs.core.truth_(inst_17448)){
var statearr_17476_19266 = state_17466__$1;
(statearr_17476_19266[(1)] = (5));

} else {
var statearr_17477_19267 = state_17466__$1;
(statearr_17477_19267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17467 === (6))){
var inst_17452 = (state_17466[(8)]);
var inst_17445 = (state_17466[(7)]);
var inst_17452__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17454 = [inst_17445,inst_17452__$1];
var inst_17455 = (new cljs.core.PersistentVector(null,2,(5),inst_17453,inst_17454,null));
var state_17466__$1 = (function (){var statearr_17478 = state_17466;
(statearr_17478[(8)] = inst_17452__$1);

return statearr_17478;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17466__$1,(8),jobs,inst_17455);
} else {
if((state_val_17467 === (3))){
var inst_17464 = (state_17466[(2)]);
var state_17466__$1 = state_17466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17466__$1,inst_17464);
} else {
if((state_val_17467 === (2))){
var state_17466__$1 = state_17466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17466__$1,(4),from);
} else {
if((state_val_17467 === (9))){
var inst_17459 = (state_17466[(2)]);
var state_17466__$1 = (function (){var statearr_17481 = state_17466;
(statearr_17481[(9)] = inst_17459);

return statearr_17481;
})();
var statearr_17483_19269 = state_17466__$1;
(statearr_17483_19269[(2)] = null);

(statearr_17483_19269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17467 === (5))){
var inst_17450 = cljs.core.async.close_BANG_(jobs);
var state_17466__$1 = state_17466;
var statearr_17486_19270 = state_17466__$1;
(statearr_17486_19270[(2)] = inst_17450);

(statearr_17486_19270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17467 === (8))){
var inst_17452 = (state_17466[(8)]);
var inst_17457 = (state_17466[(2)]);
var state_17466__$1 = (function (){var statearr_17487 = state_17466;
(statearr_17487[(10)] = inst_17457);

return statearr_17487;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17466__$1,(9),results,inst_17452);
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
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_17488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17488[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__);

(statearr_17488[(1)] = (1));

return statearr_17488;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1 = (function (state_17466){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17466);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17489){var ex__16859__auto__ = e17489;
var statearr_17490_19273 = state_17466;
(statearr_17490_19273[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17466[(4)]))){
var statearr_17491_19274 = state_17466;
(statearr_17491_19274[(1)] = cljs.core.first((state_17466[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19275 = state_17466;
state_17466 = G__19275;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = function(state_17466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1.call(this,state_17466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17493 = f__16995__auto__();
(statearr_17493[(6)] = c__16994__auto___19262);

return statearr_17493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


var c__16994__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17535){
var state_val_17536 = (state_17535[(1)]);
if((state_val_17536 === (7))){
var inst_17531 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17539_19276 = state_17535__$1;
(statearr_17539_19276[(2)] = inst_17531);

(statearr_17539_19276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (20))){
var state_17535__$1 = state_17535;
var statearr_17541_19277 = state_17535__$1;
(statearr_17541_19277[(2)] = null);

(statearr_17541_19277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (1))){
var state_17535__$1 = state_17535;
var statearr_17545_19278 = state_17535__$1;
(statearr_17545_19278[(2)] = null);

(statearr_17545_19278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (4))){
var inst_17498 = (state_17535[(7)]);
var inst_17498__$1 = (state_17535[(2)]);
var inst_17499 = (inst_17498__$1 == null);
var state_17535__$1 = (function (){var statearr_17549 = state_17535;
(statearr_17549[(7)] = inst_17498__$1);

return statearr_17549;
})();
if(cljs.core.truth_(inst_17499)){
var statearr_17551_19279 = state_17535__$1;
(statearr_17551_19279[(1)] = (5));

} else {
var statearr_17552_19280 = state_17535__$1;
(statearr_17552_19280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (15))){
var inst_17513 = (state_17535[(8)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17535__$1,(18),to,inst_17513);
} else {
if((state_val_17536 === (21))){
var inst_17526 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17555_19281 = state_17535__$1;
(statearr_17555_19281[(2)] = inst_17526);

(statearr_17555_19281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (13))){
var inst_17528 = (state_17535[(2)]);
var state_17535__$1 = (function (){var statearr_17557 = state_17535;
(statearr_17557[(9)] = inst_17528);

return statearr_17557;
})();
var statearr_17558_19284 = state_17535__$1;
(statearr_17558_19284[(2)] = null);

(statearr_17558_19284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (6))){
var inst_17498 = (state_17535[(7)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17535__$1,(11),inst_17498);
} else {
if((state_val_17536 === (17))){
var inst_17521 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
if(cljs.core.truth_(inst_17521)){
var statearr_17561_19285 = state_17535__$1;
(statearr_17561_19285[(1)] = (19));

} else {
var statearr_17562_19286 = state_17535__$1;
(statearr_17562_19286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (3))){
var inst_17533 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17535__$1,inst_17533);
} else {
if((state_val_17536 === (12))){
var inst_17510 = (state_17535[(10)]);
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17535__$1,(14),inst_17510);
} else {
if((state_val_17536 === (2))){
var state_17535__$1 = state_17535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17535__$1,(4),results);
} else {
if((state_val_17536 === (19))){
var state_17535__$1 = state_17535;
var statearr_17569_19287 = state_17535__$1;
(statearr_17569_19287[(2)] = null);

(statearr_17569_19287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (11))){
var inst_17510 = (state_17535[(2)]);
var state_17535__$1 = (function (){var statearr_17571 = state_17535;
(statearr_17571[(10)] = inst_17510);

return statearr_17571;
})();
var statearr_17572_19288 = state_17535__$1;
(statearr_17572_19288[(2)] = null);

(statearr_17572_19288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (9))){
var state_17535__$1 = state_17535;
var statearr_17573_19289 = state_17535__$1;
(statearr_17573_19289[(2)] = null);

(statearr_17573_19289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (5))){
var state_17535__$1 = state_17535;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17574_19290 = state_17535__$1;
(statearr_17574_19290[(1)] = (8));

} else {
var statearr_17575_19291 = state_17535__$1;
(statearr_17575_19291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (14))){
var inst_17515 = (state_17535[(11)]);
var inst_17513 = (state_17535[(8)]);
var inst_17513__$1 = (state_17535[(2)]);
var inst_17514 = (inst_17513__$1 == null);
var inst_17515__$1 = cljs.core.not(inst_17514);
var state_17535__$1 = (function (){var statearr_17577 = state_17535;
(statearr_17577[(11)] = inst_17515__$1);

(statearr_17577[(8)] = inst_17513__$1);

return statearr_17577;
})();
if(inst_17515__$1){
var statearr_17578_19298 = state_17535__$1;
(statearr_17578_19298[(1)] = (15));

} else {
var statearr_17579_19299 = state_17535__$1;
(statearr_17579_19299[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (16))){
var inst_17515 = (state_17535[(11)]);
var state_17535__$1 = state_17535;
var statearr_17580_19300 = state_17535__$1;
(statearr_17580_19300[(2)] = inst_17515);

(statearr_17580_19300[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (10))){
var inst_17507 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17581_19301 = state_17535__$1;
(statearr_17581_19301[(2)] = inst_17507);

(statearr_17581_19301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (18))){
var inst_17518 = (state_17535[(2)]);
var state_17535__$1 = state_17535;
var statearr_17582_19302 = state_17535__$1;
(statearr_17582_19302[(2)] = inst_17518);

(statearr_17582_19302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17536 === (8))){
var inst_17504 = cljs.core.async.close_BANG_(to);
var state_17535__$1 = state_17535;
var statearr_17583_19303 = state_17535__$1;
(statearr_17583_19303[(2)] = inst_17504);

(statearr_17583_19303[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_17586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17586[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__);

(statearr_17586[(1)] = (1));

return statearr_17586;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1 = (function (state_17535){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17535);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17588){var ex__16859__auto__ = e17588;
var statearr_17589_19306 = state_17535;
(statearr_17589_19306[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17535[(4)]))){
var statearr_17591_19307 = state_17535;
(statearr_17591_19307[(1)] = cljs.core.first((state_17535[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19308 = state_17535;
state_17535 = G__19308;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__ = function(state_17535){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1.call(this,state_17535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17592 = f__16995__auto__();
(statearr_17592[(6)] = c__16994__auto__);

return statearr_17592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

return c__16994__auto__;
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
var G__17595 = arguments.length;
switch (G__17595) {
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
var G__17615 = arguments.length;
switch (G__17615) {
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
var G__17629 = arguments.length;
switch (G__17629) {
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
var c__16994__auto___19318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17655){
var state_val_17656 = (state_17655[(1)]);
if((state_val_17656 === (7))){
var inst_17651 = (state_17655[(2)]);
var state_17655__$1 = state_17655;
var statearr_17661_19320 = state_17655__$1;
(statearr_17661_19320[(2)] = inst_17651);

(statearr_17661_19320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (1))){
var state_17655__$1 = state_17655;
var statearr_17662_19322 = state_17655__$1;
(statearr_17662_19322[(2)] = null);

(statearr_17662_19322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (4))){
var inst_17632 = (state_17655[(7)]);
var inst_17632__$1 = (state_17655[(2)]);
var inst_17633 = (inst_17632__$1 == null);
var state_17655__$1 = (function (){var statearr_17663 = state_17655;
(statearr_17663[(7)] = inst_17632__$1);

return statearr_17663;
})();
if(cljs.core.truth_(inst_17633)){
var statearr_17664_19323 = state_17655__$1;
(statearr_17664_19323[(1)] = (5));

} else {
var statearr_17665_19324 = state_17655__$1;
(statearr_17665_19324[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (13))){
var state_17655__$1 = state_17655;
var statearr_17666_19325 = state_17655__$1;
(statearr_17666_19325[(2)] = null);

(statearr_17666_19325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (6))){
var inst_17632 = (state_17655[(7)]);
var inst_17638 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17632) : p.call(null,inst_17632));
var state_17655__$1 = state_17655;
if(cljs.core.truth_(inst_17638)){
var statearr_17667_19326 = state_17655__$1;
(statearr_17667_19326[(1)] = (9));

} else {
var statearr_17669_19327 = state_17655__$1;
(statearr_17669_19327[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (3))){
var inst_17653 = (state_17655[(2)]);
var state_17655__$1 = state_17655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17655__$1,inst_17653);
} else {
if((state_val_17656 === (12))){
var state_17655__$1 = state_17655;
var statearr_17673_19329 = state_17655__$1;
(statearr_17673_19329[(2)] = null);

(statearr_17673_19329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (2))){
var state_17655__$1 = state_17655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17655__$1,(4),ch);
} else {
if((state_val_17656 === (11))){
var inst_17632 = (state_17655[(7)]);
var inst_17642 = (state_17655[(2)]);
var state_17655__$1 = state_17655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17655__$1,(8),inst_17642,inst_17632);
} else {
if((state_val_17656 === (9))){
var state_17655__$1 = state_17655;
var statearr_17674_19331 = state_17655__$1;
(statearr_17674_19331[(2)] = tc);

(statearr_17674_19331[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (5))){
var inst_17635 = cljs.core.async.close_BANG_(tc);
var inst_17636 = cljs.core.async.close_BANG_(fc);
var state_17655__$1 = (function (){var statearr_17675 = state_17655;
(statearr_17675[(8)] = inst_17635);

return statearr_17675;
})();
var statearr_17676_19332 = state_17655__$1;
(statearr_17676_19332[(2)] = inst_17636);

(statearr_17676_19332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (14))){
var inst_17649 = (state_17655[(2)]);
var state_17655__$1 = state_17655;
var statearr_17677_19333 = state_17655__$1;
(statearr_17677_19333[(2)] = inst_17649);

(statearr_17677_19333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (10))){
var state_17655__$1 = state_17655;
var statearr_17679_19334 = state_17655__$1;
(statearr_17679_19334[(2)] = fc);

(statearr_17679_19334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17656 === (8))){
var inst_17644 = (state_17655[(2)]);
var state_17655__$1 = state_17655;
if(cljs.core.truth_(inst_17644)){
var statearr_17681_19335 = state_17655__$1;
(statearr_17681_19335[(1)] = (12));

} else {
var statearr_17682_19336 = state_17655__$1;
(statearr_17682_19336[(1)] = (13));

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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_17683 = [null,null,null,null,null,null,null,null,null];
(statearr_17683[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_17683[(1)] = (1));

return statearr_17683;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_17655){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17655);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17684){var ex__16859__auto__ = e17684;
var statearr_17685_19337 = state_17655;
(statearr_17685_19337[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17655[(4)]))){
var statearr_17686_19338 = state_17655;
(statearr_17686_19338[(1)] = cljs.core.first((state_17655[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19339 = state_17655;
state_17655 = G__19339;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_17655){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_17655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17687 = f__16995__auto__();
(statearr_17687[(6)] = c__16994__auto___19318);

return statearr_17687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var c__16994__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17715){
var state_val_17716 = (state_17715[(1)]);
if((state_val_17716 === (7))){
var inst_17710 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17719_19341 = state_17715__$1;
(statearr_17719_19341[(2)] = inst_17710);

(statearr_17719_19341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (1))){
var inst_17692 = init;
var inst_17693 = inst_17692;
var state_17715__$1 = (function (){var statearr_17721 = state_17715;
(statearr_17721[(7)] = inst_17693);

return statearr_17721;
})();
var statearr_17722_19342 = state_17715__$1;
(statearr_17722_19342[(2)] = null);

(statearr_17722_19342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (4))){
var inst_17696 = (state_17715[(8)]);
var inst_17696__$1 = (state_17715[(2)]);
var inst_17698 = (inst_17696__$1 == null);
var state_17715__$1 = (function (){var statearr_17724 = state_17715;
(statearr_17724[(8)] = inst_17696__$1);

return statearr_17724;
})();
if(cljs.core.truth_(inst_17698)){
var statearr_17725_19343 = state_17715__$1;
(statearr_17725_19343[(1)] = (5));

} else {
var statearr_17726_19344 = state_17715__$1;
(statearr_17726_19344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (6))){
var inst_17696 = (state_17715[(8)]);
var inst_17693 = (state_17715[(7)]);
var inst_17701 = (state_17715[(9)]);
var inst_17701__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17693,inst_17696) : f.call(null,inst_17693,inst_17696));
var inst_17702 = cljs.core.reduced_QMARK_(inst_17701__$1);
var state_17715__$1 = (function (){var statearr_17727 = state_17715;
(statearr_17727[(9)] = inst_17701__$1);

return statearr_17727;
})();
if(inst_17702){
var statearr_17728_19349 = state_17715__$1;
(statearr_17728_19349[(1)] = (8));

} else {
var statearr_17729_19350 = state_17715__$1;
(statearr_17729_19350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (3))){
var inst_17712 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17715__$1,inst_17712);
} else {
if((state_val_17716 === (2))){
var state_17715__$1 = state_17715;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17715__$1,(4),ch);
} else {
if((state_val_17716 === (9))){
var inst_17701 = (state_17715[(9)]);
var inst_17693 = inst_17701;
var state_17715__$1 = (function (){var statearr_17731 = state_17715;
(statearr_17731[(7)] = inst_17693);

return statearr_17731;
})();
var statearr_17732_19354 = state_17715__$1;
(statearr_17732_19354[(2)] = null);

(statearr_17732_19354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (5))){
var inst_17693 = (state_17715[(7)]);
var state_17715__$1 = state_17715;
var statearr_17733_19355 = state_17715__$1;
(statearr_17733_19355[(2)] = inst_17693);

(statearr_17733_19355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (10))){
var inst_17708 = (state_17715[(2)]);
var state_17715__$1 = state_17715;
var statearr_17735_19357 = state_17715__$1;
(statearr_17735_19357[(2)] = inst_17708);

(statearr_17735_19357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17716 === (8))){
var inst_17701 = (state_17715[(9)]);
var inst_17704 = cljs.core.deref(inst_17701);
var state_17715__$1 = state_17715;
var statearr_17737_19360 = state_17715__$1;
(statearr_17737_19360[(2)] = inst_17704);

(statearr_17737_19360[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__16856__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16856__auto____0 = (function (){
var statearr_17741 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17741[(0)] = cljs$core$async$reduce_$_state_machine__16856__auto__);

(statearr_17741[(1)] = (1));

return statearr_17741;
});
var cljs$core$async$reduce_$_state_machine__16856__auto____1 = (function (state_17715){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17715);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17742){var ex__16859__auto__ = e17742;
var statearr_17743_19364 = state_17715;
(statearr_17743_19364[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17715[(4)]))){
var statearr_17744_19365 = state_17715;
(statearr_17744_19365[(1)] = cljs.core.first((state_17715[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19366 = state_17715;
state_17715 = G__19366;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16856__auto__ = function(state_17715){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16856__auto____1.call(this,state_17715);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16856__auto____0;
cljs$core$async$reduce_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16856__auto____1;
return cljs$core$async$reduce_$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17745 = f__16995__auto__();
(statearr_17745[(6)] = c__16994__auto__);

return statearr_17745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

return c__16994__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16994__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17752){
var state_val_17753 = (state_17752[(1)]);
if((state_val_17753 === (1))){
var inst_17747 = cljs.core.async.reduce(f__$1,init,ch);
var state_17752__$1 = state_17752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17752__$1,(2),inst_17747);
} else {
if((state_val_17753 === (2))){
var inst_17749 = (state_17752[(2)]);
var inst_17750 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17749) : f__$1.call(null,inst_17749));
var state_17752__$1 = state_17752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17752__$1,inst_17750);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16856__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16856__auto____0 = (function (){
var statearr_17754 = [null,null,null,null,null,null,null];
(statearr_17754[(0)] = cljs$core$async$transduce_$_state_machine__16856__auto__);

(statearr_17754[(1)] = (1));

return statearr_17754;
});
var cljs$core$async$transduce_$_state_machine__16856__auto____1 = (function (state_17752){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17752);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17756){var ex__16859__auto__ = e17756;
var statearr_17757_19377 = state_17752;
(statearr_17757_19377[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17752[(4)]))){
var statearr_17758_19381 = state_17752;
(statearr_17758_19381[(1)] = cljs.core.first((state_17752[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19382 = state_17752;
state_17752 = G__19382;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16856__auto__ = function(state_17752){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16856__auto____1.call(this,state_17752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16856__auto____0;
cljs$core$async$transduce_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16856__auto____1;
return cljs$core$async$transduce_$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17762 = f__16995__auto__();
(statearr_17762[(6)] = c__16994__auto__);

return statearr_17762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

return c__16994__auto__;
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
var G__17765 = arguments.length;
switch (G__17765) {
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
var c__16994__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17793){
var state_val_17794 = (state_17793[(1)]);
if((state_val_17794 === (7))){
var inst_17775 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17795_19390 = state_17793__$1;
(statearr_17795_19390[(2)] = inst_17775);

(statearr_17795_19390[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (1))){
var inst_17769 = cljs.core.seq(coll);
var inst_17770 = inst_17769;
var state_17793__$1 = (function (){var statearr_17796 = state_17793;
(statearr_17796[(7)] = inst_17770);

return statearr_17796;
})();
var statearr_17797_19393 = state_17793__$1;
(statearr_17797_19393[(2)] = null);

(statearr_17797_19393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (4))){
var inst_17770 = (state_17793[(7)]);
var inst_17773 = cljs.core.first(inst_17770);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17793__$1,(7),ch,inst_17773);
} else {
if((state_val_17794 === (13))){
var inst_17787 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17798_19397 = state_17793__$1;
(statearr_17798_19397[(2)] = inst_17787);

(statearr_17798_19397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (6))){
var inst_17778 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17778)){
var statearr_17799_19398 = state_17793__$1;
(statearr_17799_19398[(1)] = (8));

} else {
var statearr_17800_19399 = state_17793__$1;
(statearr_17800_19399[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (3))){
var inst_17791 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17793__$1,inst_17791);
} else {
if((state_val_17794 === (12))){
var state_17793__$1 = state_17793;
var statearr_17802_19401 = state_17793__$1;
(statearr_17802_19401[(2)] = null);

(statearr_17802_19401[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (2))){
var inst_17770 = (state_17793[(7)]);
var state_17793__$1 = state_17793;
if(cljs.core.truth_(inst_17770)){
var statearr_17803_19402 = state_17793__$1;
(statearr_17803_19402[(1)] = (4));

} else {
var statearr_17804_19406 = state_17793__$1;
(statearr_17804_19406[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (11))){
var inst_17784 = cljs.core.async.close_BANG_(ch);
var state_17793__$1 = state_17793;
var statearr_17808_19407 = state_17793__$1;
(statearr_17808_19407[(2)] = inst_17784);

(statearr_17808_19407[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (9))){
var state_17793__$1 = state_17793;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17809_19409 = state_17793__$1;
(statearr_17809_19409[(1)] = (11));

} else {
var statearr_17810_19410 = state_17793__$1;
(statearr_17810_19410[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (5))){
var inst_17770 = (state_17793[(7)]);
var state_17793__$1 = state_17793;
var statearr_17811_19412 = state_17793__$1;
(statearr_17811_19412[(2)] = inst_17770);

(statearr_17811_19412[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (10))){
var inst_17789 = (state_17793[(2)]);
var state_17793__$1 = state_17793;
var statearr_17812_19414 = state_17793__$1;
(statearr_17812_19414[(2)] = inst_17789);

(statearr_17812_19414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17794 === (8))){
var inst_17770 = (state_17793[(7)]);
var inst_17780 = cljs.core.next(inst_17770);
var inst_17770__$1 = inst_17780;
var state_17793__$1 = (function (){var statearr_17813 = state_17793;
(statearr_17813[(7)] = inst_17770__$1);

return statearr_17813;
})();
var statearr_17814_19421 = state_17793__$1;
(statearr_17814_19421[(2)] = null);

(statearr_17814_19421[(1)] = (2));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_17815 = [null,null,null,null,null,null,null,null];
(statearr_17815[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_17815[(1)] = (1));

return statearr_17815;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_17793){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17793);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e17816){var ex__16859__auto__ = e17816;
var statearr_17817_19426 = state_17793;
(statearr_17817_19426[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17793[(4)]))){
var statearr_17818_19428 = state_17793;
(statearr_17818_19428[(1)] = cljs.core.first((state_17793[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_17793;
state_17793 = G__19431;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_17793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_17793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_17819 = f__16995__auto__();
(statearr_17819[(6)] = c__16994__auto__);

return statearr_17819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

return c__16994__auto__;
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
var G__17823 = arguments.length;
switch (G__17823) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_19437 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_19437(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_19441 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_19441(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_19442 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_19442(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_19446 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_19446(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17834 = (function (ch,cs,meta17835){
this.ch = ch;
this.cs = cs;
this.meta17835 = meta17835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17836,meta17835__$1){
var self__ = this;
var _17836__$1 = this;
return (new cljs.core.async.t_cljs$core$async17834(self__.ch,self__.cs,meta17835__$1));
}));

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17836){
var self__ = this;
var _17836__$1 = this;
return self__.meta17835;
}));

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async17834.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async17834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17835","meta17835",-1718643672,null)], null);
}));

(cljs.core.async.t_cljs$core$async17834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17834");

(cljs.core.async.t_cljs$core$async17834.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17834.
 */
cljs.core.async.__GT_t_cljs$core$async17834 = (function cljs$core$async$__GT_t_cljs$core$async17834(ch,cs,meta17835){
return (new cljs.core.async.t_cljs$core$async17834(ch,cs,meta17835));
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
var m = (new cljs.core.async.t_cljs$core$async17834(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__16994__auto___19461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_17981){
var state_val_17982 = (state_17981[(1)]);
if((state_val_17982 === (7))){
var inst_17977 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_17985_19466 = state_17981__$1;
(statearr_17985_19466[(2)] = inst_17977);

(statearr_17985_19466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (20))){
var inst_17878 = (state_17981[(7)]);
var inst_17891 = cljs.core.first(inst_17878);
var inst_17893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17891,(0),null);
var inst_17894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17891,(1),null);
var state_17981__$1 = (function (){var statearr_17988 = state_17981;
(statearr_17988[(8)] = inst_17893);

return statearr_17988;
})();
if(cljs.core.truth_(inst_17894)){
var statearr_17990_19471 = state_17981__$1;
(statearr_17990_19471[(1)] = (22));

} else {
var statearr_17991_19476 = state_17981__$1;
(statearr_17991_19476[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (27))){
var inst_17923 = (state_17981[(9)]);
var inst_17925 = (state_17981[(10)]);
var inst_17845 = (state_17981[(11)]);
var inst_17930 = (state_17981[(12)]);
var inst_17930__$1 = cljs.core._nth(inst_17923,inst_17925);
var inst_17931 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17930__$1,inst_17845,done);
var state_17981__$1 = (function (){var statearr_17992 = state_17981;
(statearr_17992[(12)] = inst_17930__$1);

return statearr_17992;
})();
if(cljs.core.truth_(inst_17931)){
var statearr_17993_19477 = state_17981__$1;
(statearr_17993_19477[(1)] = (30));

} else {
var statearr_17994_19478 = state_17981__$1;
(statearr_17994_19478[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (1))){
var state_17981__$1 = state_17981;
var statearr_17996_19479 = state_17981__$1;
(statearr_17996_19479[(2)] = null);

(statearr_17996_19479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (24))){
var inst_17878 = (state_17981[(7)]);
var inst_17900 = (state_17981[(2)]);
var inst_17901 = cljs.core.next(inst_17878);
var inst_17856 = inst_17901;
var inst_17857 = null;
var inst_17858 = (0);
var inst_17859 = (0);
var state_17981__$1 = (function (){var statearr_17998 = state_17981;
(statearr_17998[(13)] = inst_17858);

(statearr_17998[(14)] = inst_17856);

(statearr_17998[(15)] = inst_17900);

(statearr_17998[(16)] = inst_17857);

(statearr_17998[(17)] = inst_17859);

return statearr_17998;
})();
var statearr_17999_19480 = state_17981__$1;
(statearr_17999_19480[(2)] = null);

(statearr_17999_19480[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (39))){
var state_17981__$1 = state_17981;
var statearr_18003_19481 = state_17981__$1;
(statearr_18003_19481[(2)] = null);

(statearr_18003_19481[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (4))){
var inst_17845 = (state_17981[(11)]);
var inst_17845__$1 = (state_17981[(2)]);
var inst_17846 = (inst_17845__$1 == null);
var state_17981__$1 = (function (){var statearr_18004 = state_17981;
(statearr_18004[(11)] = inst_17845__$1);

return statearr_18004;
})();
if(cljs.core.truth_(inst_17846)){
var statearr_18005_19482 = state_17981__$1;
(statearr_18005_19482[(1)] = (5));

} else {
var statearr_18006_19483 = state_17981__$1;
(statearr_18006_19483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (15))){
var inst_17858 = (state_17981[(13)]);
var inst_17856 = (state_17981[(14)]);
var inst_17857 = (state_17981[(16)]);
var inst_17859 = (state_17981[(17)]);
var inst_17874 = (state_17981[(2)]);
var inst_17875 = (inst_17859 + (1));
var tmp18000 = inst_17858;
var tmp18001 = inst_17856;
var tmp18002 = inst_17857;
var inst_17856__$1 = tmp18001;
var inst_17857__$1 = tmp18002;
var inst_17858__$1 = tmp18000;
var inst_17859__$1 = inst_17875;
var state_17981__$1 = (function (){var statearr_18007 = state_17981;
(statearr_18007[(13)] = inst_17858__$1);

(statearr_18007[(14)] = inst_17856__$1);

(statearr_18007[(18)] = inst_17874);

(statearr_18007[(16)] = inst_17857__$1);

(statearr_18007[(17)] = inst_17859__$1);

return statearr_18007;
})();
var statearr_18008_19487 = state_17981__$1;
(statearr_18008_19487[(2)] = null);

(statearr_18008_19487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (21))){
var inst_17904 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18012_19488 = state_17981__$1;
(statearr_18012_19488[(2)] = inst_17904);

(statearr_18012_19488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (31))){
var inst_17930 = (state_17981[(12)]);
var inst_17934 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17930);
var state_17981__$1 = state_17981;
var statearr_18013_19489 = state_17981__$1;
(statearr_18013_19489[(2)] = inst_17934);

(statearr_18013_19489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (32))){
var inst_17923 = (state_17981[(9)]);
var inst_17925 = (state_17981[(10)]);
var inst_17924 = (state_17981[(19)]);
var inst_17922 = (state_17981[(20)]);
var inst_17936 = (state_17981[(2)]);
var inst_17937 = (inst_17925 + (1));
var tmp18009 = inst_17923;
var tmp18010 = inst_17924;
var tmp18011 = inst_17922;
var inst_17922__$1 = tmp18011;
var inst_17923__$1 = tmp18009;
var inst_17924__$1 = tmp18010;
var inst_17925__$1 = inst_17937;
var state_17981__$1 = (function (){var statearr_18014 = state_17981;
(statearr_18014[(21)] = inst_17936);

(statearr_18014[(9)] = inst_17923__$1);

(statearr_18014[(10)] = inst_17925__$1);

(statearr_18014[(19)] = inst_17924__$1);

(statearr_18014[(20)] = inst_17922__$1);

return statearr_18014;
})();
var statearr_18015_19490 = state_17981__$1;
(statearr_18015_19490[(2)] = null);

(statearr_18015_19490[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (40))){
var inst_17950 = (state_17981[(22)]);
var inst_17954 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17950);
var state_17981__$1 = state_17981;
var statearr_18016_19491 = state_17981__$1;
(statearr_18016_19491[(2)] = inst_17954);

(statearr_18016_19491[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (33))){
var inst_17940 = (state_17981[(23)]);
var inst_17943 = cljs.core.chunked_seq_QMARK_(inst_17940);
var state_17981__$1 = state_17981;
if(inst_17943){
var statearr_18017_19492 = state_17981__$1;
(statearr_18017_19492[(1)] = (36));

} else {
var statearr_18018_19493 = state_17981__$1;
(statearr_18018_19493[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (13))){
var inst_17868 = (state_17981[(24)]);
var inst_17871 = cljs.core.async.close_BANG_(inst_17868);
var state_17981__$1 = state_17981;
var statearr_18019_19494 = state_17981__$1;
(statearr_18019_19494[(2)] = inst_17871);

(statearr_18019_19494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (22))){
var inst_17893 = (state_17981[(8)]);
var inst_17897 = cljs.core.async.close_BANG_(inst_17893);
var state_17981__$1 = state_17981;
var statearr_18020_19496 = state_17981__$1;
(statearr_18020_19496[(2)] = inst_17897);

(statearr_18020_19496[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (36))){
var inst_17940 = (state_17981[(23)]);
var inst_17945 = cljs.core.chunk_first(inst_17940);
var inst_17946 = cljs.core.chunk_rest(inst_17940);
var inst_17947 = cljs.core.count(inst_17945);
var inst_17922 = inst_17946;
var inst_17923 = inst_17945;
var inst_17924 = inst_17947;
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18021 = state_17981;
(statearr_18021[(9)] = inst_17923);

(statearr_18021[(10)] = inst_17925);

(statearr_18021[(19)] = inst_17924);

(statearr_18021[(20)] = inst_17922);

return statearr_18021;
})();
var statearr_18023_19497 = state_17981__$1;
(statearr_18023_19497[(2)] = null);

(statearr_18023_19497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (41))){
var inst_17940 = (state_17981[(23)]);
var inst_17956 = (state_17981[(2)]);
var inst_17957 = cljs.core.next(inst_17940);
var inst_17922 = inst_17957;
var inst_17923 = null;
var inst_17924 = (0);
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18024 = state_17981;
(statearr_18024[(9)] = inst_17923);

(statearr_18024[(10)] = inst_17925);

(statearr_18024[(19)] = inst_17924);

(statearr_18024[(20)] = inst_17922);

(statearr_18024[(25)] = inst_17956);

return statearr_18024;
})();
var statearr_18025_19498 = state_17981__$1;
(statearr_18025_19498[(2)] = null);

(statearr_18025_19498[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (43))){
var state_17981__$1 = state_17981;
var statearr_18026_19499 = state_17981__$1;
(statearr_18026_19499[(2)] = null);

(statearr_18026_19499[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (29))){
var inst_17965 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18027_19500 = state_17981__$1;
(statearr_18027_19500[(2)] = inst_17965);

(statearr_18027_19500[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (44))){
var inst_17974 = (state_17981[(2)]);
var state_17981__$1 = (function (){var statearr_18028 = state_17981;
(statearr_18028[(26)] = inst_17974);

return statearr_18028;
})();
var statearr_18029_19501 = state_17981__$1;
(statearr_18029_19501[(2)] = null);

(statearr_18029_19501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (6))){
var inst_17914 = (state_17981[(27)]);
var inst_17913 = cljs.core.deref(cs);
var inst_17914__$1 = cljs.core.keys(inst_17913);
var inst_17915 = cljs.core.count(inst_17914__$1);
var inst_17916 = cljs.core.reset_BANG_(dctr,inst_17915);
var inst_17921 = cljs.core.seq(inst_17914__$1);
var inst_17922 = inst_17921;
var inst_17923 = null;
var inst_17924 = (0);
var inst_17925 = (0);
var state_17981__$1 = (function (){var statearr_18031 = state_17981;
(statearr_18031[(9)] = inst_17923);

(statearr_18031[(10)] = inst_17925);

(statearr_18031[(19)] = inst_17924);

(statearr_18031[(28)] = inst_17916);

(statearr_18031[(27)] = inst_17914__$1);

(statearr_18031[(20)] = inst_17922);

return statearr_18031;
})();
var statearr_18032_19502 = state_17981__$1;
(statearr_18032_19502[(2)] = null);

(statearr_18032_19502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (28))){
var inst_17940 = (state_17981[(23)]);
var inst_17922 = (state_17981[(20)]);
var inst_17940__$1 = cljs.core.seq(inst_17922);
var state_17981__$1 = (function (){var statearr_18034 = state_17981;
(statearr_18034[(23)] = inst_17940__$1);

return statearr_18034;
})();
if(inst_17940__$1){
var statearr_18035_19507 = state_17981__$1;
(statearr_18035_19507[(1)] = (33));

} else {
var statearr_18036_19508 = state_17981__$1;
(statearr_18036_19508[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (25))){
var inst_17925 = (state_17981[(10)]);
var inst_17924 = (state_17981[(19)]);
var inst_17927 = (inst_17925 < inst_17924);
var inst_17928 = inst_17927;
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17928)){
var statearr_18037_19513 = state_17981__$1;
(statearr_18037_19513[(1)] = (27));

} else {
var statearr_18038_19514 = state_17981__$1;
(statearr_18038_19514[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (34))){
var state_17981__$1 = state_17981;
var statearr_18039_19515 = state_17981__$1;
(statearr_18039_19515[(2)] = null);

(statearr_18039_19515[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (17))){
var state_17981__$1 = state_17981;
var statearr_18043_19520 = state_17981__$1;
(statearr_18043_19520[(2)] = null);

(statearr_18043_19520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (3))){
var inst_17979 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17981__$1,inst_17979);
} else {
if((state_val_17982 === (12))){
var inst_17909 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18044_19521 = state_17981__$1;
(statearr_18044_19521[(2)] = inst_17909);

(statearr_18044_19521[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (2))){
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17981__$1,(4),ch);
} else {
if((state_val_17982 === (23))){
var state_17981__$1 = state_17981;
var statearr_18045_19522 = state_17981__$1;
(statearr_18045_19522[(2)] = null);

(statearr_18045_19522[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (35))){
var inst_17963 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18046_19523 = state_17981__$1;
(statearr_18046_19523[(2)] = inst_17963);

(statearr_18046_19523[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (19))){
var inst_17878 = (state_17981[(7)]);
var inst_17882 = cljs.core.chunk_first(inst_17878);
var inst_17883 = cljs.core.chunk_rest(inst_17878);
var inst_17884 = cljs.core.count(inst_17882);
var inst_17856 = inst_17883;
var inst_17857 = inst_17882;
var inst_17858 = inst_17884;
var inst_17859 = (0);
var state_17981__$1 = (function (){var statearr_18047 = state_17981;
(statearr_18047[(13)] = inst_17858);

(statearr_18047[(14)] = inst_17856);

(statearr_18047[(16)] = inst_17857);

(statearr_18047[(17)] = inst_17859);

return statearr_18047;
})();
var statearr_18048_19525 = state_17981__$1;
(statearr_18048_19525[(2)] = null);

(statearr_18048_19525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (11))){
var inst_17856 = (state_17981[(14)]);
var inst_17878 = (state_17981[(7)]);
var inst_17878__$1 = cljs.core.seq(inst_17856);
var state_17981__$1 = (function (){var statearr_18049 = state_17981;
(statearr_18049[(7)] = inst_17878__$1);

return statearr_18049;
})();
if(inst_17878__$1){
var statearr_18050_19526 = state_17981__$1;
(statearr_18050_19526[(1)] = (16));

} else {
var statearr_18051_19528 = state_17981__$1;
(statearr_18051_19528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (9))){
var inst_17911 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18052_19531 = state_17981__$1;
(statearr_18052_19531[(2)] = inst_17911);

(statearr_18052_19531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (5))){
var inst_17854 = cljs.core.deref(cs);
var inst_17855 = cljs.core.seq(inst_17854);
var inst_17856 = inst_17855;
var inst_17857 = null;
var inst_17858 = (0);
var inst_17859 = (0);
var state_17981__$1 = (function (){var statearr_18053 = state_17981;
(statearr_18053[(13)] = inst_17858);

(statearr_18053[(14)] = inst_17856);

(statearr_18053[(16)] = inst_17857);

(statearr_18053[(17)] = inst_17859);

return statearr_18053;
})();
var statearr_18054_19532 = state_17981__$1;
(statearr_18054_19532[(2)] = null);

(statearr_18054_19532[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (14))){
var state_17981__$1 = state_17981;
var statearr_18055_19534 = state_17981__$1;
(statearr_18055_19534[(2)] = null);

(statearr_18055_19534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (45))){
var inst_17971 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18056_19537 = state_17981__$1;
(statearr_18056_19537[(2)] = inst_17971);

(statearr_18056_19537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (26))){
var inst_17914 = (state_17981[(27)]);
var inst_17967 = (state_17981[(2)]);
var inst_17968 = cljs.core.seq(inst_17914);
var state_17981__$1 = (function (){var statearr_18057 = state_17981;
(statearr_18057[(29)] = inst_17967);

return statearr_18057;
})();
if(inst_17968){
var statearr_18058_19538 = state_17981__$1;
(statearr_18058_19538[(1)] = (42));

} else {
var statearr_18059_19539 = state_17981__$1;
(statearr_18059_19539[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (16))){
var inst_17878 = (state_17981[(7)]);
var inst_17880 = cljs.core.chunked_seq_QMARK_(inst_17878);
var state_17981__$1 = state_17981;
if(inst_17880){
var statearr_18060_19542 = state_17981__$1;
(statearr_18060_19542[(1)] = (19));

} else {
var statearr_18061_19543 = state_17981__$1;
(statearr_18061_19543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (38))){
var inst_17960 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18062_19545 = state_17981__$1;
(statearr_18062_19545[(2)] = inst_17960);

(statearr_18062_19545[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (30))){
var state_17981__$1 = state_17981;
var statearr_18063_19546 = state_17981__$1;
(statearr_18063_19546[(2)] = null);

(statearr_18063_19546[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (10))){
var inst_17857 = (state_17981[(16)]);
var inst_17859 = (state_17981[(17)]);
var inst_17867 = cljs.core._nth(inst_17857,inst_17859);
var inst_17868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17867,(0),null);
var inst_17869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17867,(1),null);
var state_17981__$1 = (function (){var statearr_18064 = state_17981;
(statearr_18064[(24)] = inst_17868);

return statearr_18064;
})();
if(cljs.core.truth_(inst_17869)){
var statearr_18065_19547 = state_17981__$1;
(statearr_18065_19547[(1)] = (13));

} else {
var statearr_18066_19548 = state_17981__$1;
(statearr_18066_19548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (18))){
var inst_17907 = (state_17981[(2)]);
var state_17981__$1 = state_17981;
var statearr_18067_19551 = state_17981__$1;
(statearr_18067_19551[(2)] = inst_17907);

(statearr_18067_19551[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (42))){
var state_17981__$1 = state_17981;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17981__$1,(45),dchan);
} else {
if((state_val_17982 === (37))){
var inst_17950 = (state_17981[(22)]);
var inst_17940 = (state_17981[(23)]);
var inst_17845 = (state_17981[(11)]);
var inst_17950__$1 = cljs.core.first(inst_17940);
var inst_17951 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17950__$1,inst_17845,done);
var state_17981__$1 = (function (){var statearr_18069 = state_17981;
(statearr_18069[(22)] = inst_17950__$1);

return statearr_18069;
})();
if(cljs.core.truth_(inst_17951)){
var statearr_18070_19555 = state_17981__$1;
(statearr_18070_19555[(1)] = (39));

} else {
var statearr_18071_19556 = state_17981__$1;
(statearr_18071_19556[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17982 === (8))){
var inst_17858 = (state_17981[(13)]);
var inst_17859 = (state_17981[(17)]);
var inst_17861 = (inst_17859 < inst_17858);
var inst_17862 = inst_17861;
var state_17981__$1 = state_17981;
if(cljs.core.truth_(inst_17862)){
var statearr_18072_19557 = state_17981__$1;
(statearr_18072_19557[(1)] = (10));

} else {
var statearr_18073_19558 = state_17981__$1;
(statearr_18073_19558[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__16856__auto__ = null;
var cljs$core$async$mult_$_state_machine__16856__auto____0 = (function (){
var statearr_18079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18079[(0)] = cljs$core$async$mult_$_state_machine__16856__auto__);

(statearr_18079[(1)] = (1));

return statearr_18079;
});
var cljs$core$async$mult_$_state_machine__16856__auto____1 = (function (state_17981){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_17981);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18080){var ex__16859__auto__ = e18080;
var statearr_18081_19562 = state_17981;
(statearr_18081_19562[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_17981[(4)]))){
var statearr_18083_19563 = state_17981;
(statearr_18083_19563[(1)] = cljs.core.first((state_17981[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19564 = state_17981;
state_17981 = G__19564;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16856__auto__ = function(state_17981){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16856__auto____1.call(this,state_17981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16856__auto____0;
cljs$core$async$mult_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16856__auto____1;
return cljs$core$async$mult_$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18084 = f__16995__auto__();
(statearr_18084[(6)] = c__16994__auto___19461);

return statearr_18084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var G__18086 = arguments.length;
switch (G__18086) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_19569 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_19569(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19573 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_19573(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19574 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19574(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19575 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_19575(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19579 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19579(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19586 = arguments.length;
var i__5770__auto___19587 = (0);
while(true){
if((i__5770__auto___19587 < len__5769__auto___19586)){
args__5775__auto__.push((arguments[i__5770__auto___19587]));

var G__19588 = (i__5770__auto___19587 + (1));
i__5770__auto___19587 = G__19588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18098){
var map__18099 = p__18098;
var map__18099__$1 = cljs.core.__destructure_map(map__18099);
var opts = map__18099__$1;
var statearr_18100_19589 = state;
(statearr_18100_19589[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18101_19590 = state;
(statearr_18101_19590[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18102_19591 = state;
(statearr_18102_19591[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18092){
var G__18093 = cljs.core.first(seq18092);
var seq18092__$1 = cljs.core.next(seq18092);
var G__18094 = cljs.core.first(seq18092__$1);
var seq18092__$2 = cljs.core.next(seq18092__$1);
var G__18095 = cljs.core.first(seq18092__$2);
var seq18092__$3 = cljs.core.next(seq18092__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18093,G__18094,G__18095,seq18092__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18106 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18107){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18107 = meta18107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18108,meta18107__$1){
var self__ = this;
var _18108__$1 = this;
return (new cljs.core.async.t_cljs$core$async18106(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18107__$1));
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18108){
var self__ = this;
var _18108__$1 = this;
return self__.meta18107;
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18106.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18107","meta18107",716191918,null)], null);
}));

(cljs.core.async.t_cljs$core$async18106.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18106");

(cljs.core.async.t_cljs$core$async18106.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18106");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18106.
 */
cljs.core.async.__GT_t_cljs$core$async18106 = (function cljs$core$async$__GT_t_cljs$core$async18106(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18107){
return (new cljs.core.async.t_cljs$core$async18106(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18107));
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
var m = (new cljs.core.async.t_cljs$core$async18106(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__16994__auto___19592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18184){
var state_val_18186 = (state_18184[(1)]);
if((state_val_18186 === (7))){
var inst_18143 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
if(cljs.core.truth_(inst_18143)){
var statearr_18188_19593 = state_18184__$1;
(statearr_18188_19593[(1)] = (8));

} else {
var statearr_18190_19594 = state_18184__$1;
(statearr_18190_19594[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (20))){
var inst_18136 = (state_18184[(7)]);
var state_18184__$1 = state_18184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18184__$1,(23),out,inst_18136);
} else {
if((state_val_18186 === (1))){
var inst_18118 = calc_state();
var inst_18119 = cljs.core.__destructure_map(inst_18118);
var inst_18120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18119,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18119,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18119,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18123 = inst_18118;
var state_18184__$1 = (function (){var statearr_18193 = state_18184;
(statearr_18193[(8)] = inst_18123);

(statearr_18193[(9)] = inst_18120);

(statearr_18193[(10)] = inst_18122);

(statearr_18193[(11)] = inst_18121);

return statearr_18193;
})();
var statearr_18194_19595 = state_18184__$1;
(statearr_18194_19595[(2)] = null);

(statearr_18194_19595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (24))){
var inst_18126 = (state_18184[(12)]);
var inst_18123 = inst_18126;
var state_18184__$1 = (function (){var statearr_18196 = state_18184;
(statearr_18196[(8)] = inst_18123);

return statearr_18196;
})();
var statearr_18198_19596 = state_18184__$1;
(statearr_18198_19596[(2)] = null);

(statearr_18198_19596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (4))){
var inst_18138 = (state_18184[(13)]);
var inst_18136 = (state_18184[(7)]);
var inst_18135 = (state_18184[(2)]);
var inst_18136__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18135,(0),null);
var inst_18137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18135,(1),null);
var inst_18138__$1 = (inst_18136__$1 == null);
var state_18184__$1 = (function (){var statearr_18200 = state_18184;
(statearr_18200[(14)] = inst_18137);

(statearr_18200[(13)] = inst_18138__$1);

(statearr_18200[(7)] = inst_18136__$1);

return statearr_18200;
})();
if(cljs.core.truth_(inst_18138__$1)){
var statearr_18201_19599 = state_18184__$1;
(statearr_18201_19599[(1)] = (5));

} else {
var statearr_18202_19600 = state_18184__$1;
(statearr_18202_19600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (15))){
var inst_18158 = (state_18184[(15)]);
var inst_18127 = (state_18184[(16)]);
var inst_18158__$1 = cljs.core.empty_QMARK_(inst_18127);
var state_18184__$1 = (function (){var statearr_18203 = state_18184;
(statearr_18203[(15)] = inst_18158__$1);

return statearr_18203;
})();
if(inst_18158__$1){
var statearr_18204_19604 = state_18184__$1;
(statearr_18204_19604[(1)] = (17));

} else {
var statearr_18205_19605 = state_18184__$1;
(statearr_18205_19605[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (21))){
var inst_18126 = (state_18184[(12)]);
var inst_18123 = inst_18126;
var state_18184__$1 = (function (){var statearr_18206 = state_18184;
(statearr_18206[(8)] = inst_18123);

return statearr_18206;
})();
var statearr_18207_19606 = state_18184__$1;
(statearr_18207_19606[(2)] = null);

(statearr_18207_19606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (13))){
var inst_18150 = (state_18184[(2)]);
var inst_18151 = calc_state();
var inst_18123 = inst_18151;
var state_18184__$1 = (function (){var statearr_18208 = state_18184;
(statearr_18208[(8)] = inst_18123);

(statearr_18208[(17)] = inst_18150);

return statearr_18208;
})();
var statearr_18209_19608 = state_18184__$1;
(statearr_18209_19608[(2)] = null);

(statearr_18209_19608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (22))){
var inst_18178 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
var statearr_18210_19609 = state_18184__$1;
(statearr_18210_19609[(2)] = inst_18178);

(statearr_18210_19609[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (6))){
var inst_18137 = (state_18184[(14)]);
var inst_18141 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18137,change);
var state_18184__$1 = state_18184;
var statearr_18212_19610 = state_18184__$1;
(statearr_18212_19610[(2)] = inst_18141);

(statearr_18212_19610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (25))){
var state_18184__$1 = state_18184;
var statearr_18213_19612 = state_18184__$1;
(statearr_18213_19612[(2)] = null);

(statearr_18213_19612[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (17))){
var inst_18128 = (state_18184[(18)]);
var inst_18137 = (state_18184[(14)]);
var inst_18160 = (inst_18128.cljs$core$IFn$_invoke$arity$1 ? inst_18128.cljs$core$IFn$_invoke$arity$1(inst_18137) : inst_18128.call(null,inst_18137));
var inst_18161 = cljs.core.not(inst_18160);
var state_18184__$1 = state_18184;
var statearr_18214_19614 = state_18184__$1;
(statearr_18214_19614[(2)] = inst_18161);

(statearr_18214_19614[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (3))){
var inst_18182 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18184__$1,inst_18182);
} else {
if((state_val_18186 === (12))){
var state_18184__$1 = state_18184;
var statearr_18216_19615 = state_18184__$1;
(statearr_18216_19615[(2)] = null);

(statearr_18216_19615[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (2))){
var inst_18123 = (state_18184[(8)]);
var inst_18126 = (state_18184[(12)]);
var inst_18126__$1 = cljs.core.__destructure_map(inst_18123);
var inst_18127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18126__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18126__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18126__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18184__$1 = (function (){var statearr_18218 = state_18184;
(statearr_18218[(18)] = inst_18128);

(statearr_18218[(12)] = inst_18126__$1);

(statearr_18218[(16)] = inst_18127);

return statearr_18218;
})();
return cljs.core.async.ioc_alts_BANG_(state_18184__$1,(4),inst_18129);
} else {
if((state_val_18186 === (23))){
var inst_18169 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
if(cljs.core.truth_(inst_18169)){
var statearr_18219_19616 = state_18184__$1;
(statearr_18219_19616[(1)] = (24));

} else {
var statearr_18220_19617 = state_18184__$1;
(statearr_18220_19617[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (19))){
var inst_18164 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
var statearr_18221_19618 = state_18184__$1;
(statearr_18221_19618[(2)] = inst_18164);

(statearr_18221_19618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (11))){
var inst_18137 = (state_18184[(14)]);
var inst_18147 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18137);
var state_18184__$1 = state_18184;
var statearr_18222_19619 = state_18184__$1;
(statearr_18222_19619[(2)] = inst_18147);

(statearr_18222_19619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (9))){
var inst_18137 = (state_18184[(14)]);
var inst_18155 = (state_18184[(19)]);
var inst_18127 = (state_18184[(16)]);
var inst_18155__$1 = (inst_18127.cljs$core$IFn$_invoke$arity$1 ? inst_18127.cljs$core$IFn$_invoke$arity$1(inst_18137) : inst_18127.call(null,inst_18137));
var state_18184__$1 = (function (){var statearr_18223 = state_18184;
(statearr_18223[(19)] = inst_18155__$1);

return statearr_18223;
})();
if(cljs.core.truth_(inst_18155__$1)){
var statearr_18224_19620 = state_18184__$1;
(statearr_18224_19620[(1)] = (14));

} else {
var statearr_18225_19621 = state_18184__$1;
(statearr_18225_19621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (5))){
var inst_18138 = (state_18184[(13)]);
var state_18184__$1 = state_18184;
var statearr_18226_19622 = state_18184__$1;
(statearr_18226_19622[(2)] = inst_18138);

(statearr_18226_19622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (14))){
var inst_18155 = (state_18184[(19)]);
var state_18184__$1 = state_18184;
var statearr_18227_19623 = state_18184__$1;
(statearr_18227_19623[(2)] = inst_18155);

(statearr_18227_19623[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (26))){
var inst_18174 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
var statearr_18228_19625 = state_18184__$1;
(statearr_18228_19625[(2)] = inst_18174);

(statearr_18228_19625[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (16))){
var inst_18166 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
if(cljs.core.truth_(inst_18166)){
var statearr_18229_19629 = state_18184__$1;
(statearr_18229_19629[(1)] = (20));

} else {
var statearr_18230_19630 = state_18184__$1;
(statearr_18230_19630[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (10))){
var inst_18180 = (state_18184[(2)]);
var state_18184__$1 = state_18184;
var statearr_18231_19631 = state_18184__$1;
(statearr_18231_19631[(2)] = inst_18180);

(statearr_18231_19631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (18))){
var inst_18158 = (state_18184[(15)]);
var state_18184__$1 = state_18184;
var statearr_18232_19632 = state_18184__$1;
(statearr_18232_19632[(2)] = inst_18158);

(statearr_18232_19632[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18186 === (8))){
var inst_18136 = (state_18184[(7)]);
var inst_18145 = (inst_18136 == null);
var state_18184__$1 = state_18184;
if(cljs.core.truth_(inst_18145)){
var statearr_18233_19633 = state_18184__$1;
(statearr_18233_19633[(1)] = (11));

} else {
var statearr_18234_19634 = state_18184__$1;
(statearr_18234_19634[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__16856__auto__ = null;
var cljs$core$async$mix_$_state_machine__16856__auto____0 = (function (){
var statearr_18243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18243[(0)] = cljs$core$async$mix_$_state_machine__16856__auto__);

(statearr_18243[(1)] = (1));

return statearr_18243;
});
var cljs$core$async$mix_$_state_machine__16856__auto____1 = (function (state_18184){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18184);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18248){var ex__16859__auto__ = e18248;
var statearr_18249_19639 = state_18184;
(statearr_18249_19639[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18184[(4)]))){
var statearr_18250_19640 = state_18184;
(statearr_18250_19640[(1)] = cljs.core.first((state_18184[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19641 = state_18184;
state_18184 = G__19641;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16856__auto__ = function(state_18184){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16856__auto____1.call(this,state_18184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16856__auto____0;
cljs$core$async$mix_$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16856__auto____1;
return cljs$core$async$mix_$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18253 = f__16995__auto__();
(statearr_18253[(6)] = c__16994__auto___19592);

return statearr_18253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_19645 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_19645(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19656 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_19656(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19657 = (function() {
var G__19658 = null;
var G__19658__1 = (function (p){
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
var G__19658__2 = (function (p,v){
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
G__19658 = function(p,v){
switch(arguments.length){
case 1:
return G__19658__1.call(this,p);
case 2:
return G__19658__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19658.cljs$core$IFn$_invoke$arity$1 = G__19658__1;
G__19658.cljs$core$IFn$_invoke$arity$2 = G__19658__2;
return G__19658;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18273 = arguments.length;
switch (G__18273) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19657(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19657(p,v);
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
cljs.core.async.t_cljs$core$async18295 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18296){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18296 = meta18296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18297,meta18296__$1){
var self__ = this;
var _18297__$1 = this;
return (new cljs.core.async.t_cljs$core$async18295(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18296__$1));
}));

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18297){
var self__ = this;
var _18297__$1 = this;
return self__.meta18296;
}));

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18295.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18296","meta18296",-457243419,null)], null);
}));

(cljs.core.async.t_cljs$core$async18295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18295");

(cljs.core.async.t_cljs$core$async18295.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18295.
 */
cljs.core.async.__GT_t_cljs$core$async18295 = (function cljs$core$async$__GT_t_cljs$core$async18295(ch,topic_fn,buf_fn,mults,ensure_mult,meta18296){
return (new cljs.core.async.t_cljs$core$async18295(ch,topic_fn,buf_fn,mults,ensure_mult,meta18296));
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
var G__18284 = arguments.length;
switch (G__18284) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18280_SHARP_){
if(cljs.core.truth_((p1__18280_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18280_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18280_SHARP_.call(null,topic)))){
return p1__18280_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18280_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async18295(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__16994__auto___19667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18376){
var state_val_18377 = (state_18376[(1)]);
if((state_val_18377 === (7))){
var inst_18371 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18378_19668 = state_18376__$1;
(statearr_18378_19668[(2)] = inst_18371);

(statearr_18378_19668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (20))){
var state_18376__$1 = state_18376;
var statearr_18379_19669 = state_18376__$1;
(statearr_18379_19669[(2)] = null);

(statearr_18379_19669[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (1))){
var state_18376__$1 = state_18376;
var statearr_18380_19670 = state_18376__$1;
(statearr_18380_19670[(2)] = null);

(statearr_18380_19670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (24))){
var inst_18354 = (state_18376[(7)]);
var inst_18363 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18354);
var state_18376__$1 = state_18376;
var statearr_18382_19671 = state_18376__$1;
(statearr_18382_19671[(2)] = inst_18363);

(statearr_18382_19671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (4))){
var inst_18304 = (state_18376[(8)]);
var inst_18304__$1 = (state_18376[(2)]);
var inst_18305 = (inst_18304__$1 == null);
var state_18376__$1 = (function (){var statearr_18383 = state_18376;
(statearr_18383[(8)] = inst_18304__$1);

return statearr_18383;
})();
if(cljs.core.truth_(inst_18305)){
var statearr_18384_19674 = state_18376__$1;
(statearr_18384_19674[(1)] = (5));

} else {
var statearr_18385_19675 = state_18376__$1;
(statearr_18385_19675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (15))){
var inst_18348 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18386_19677 = state_18376__$1;
(statearr_18386_19677[(2)] = inst_18348);

(statearr_18386_19677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (21))){
var inst_18368 = (state_18376[(2)]);
var state_18376__$1 = (function (){var statearr_18387 = state_18376;
(statearr_18387[(9)] = inst_18368);

return statearr_18387;
})();
var statearr_18388_19678 = state_18376__$1;
(statearr_18388_19678[(2)] = null);

(statearr_18388_19678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (13))){
var inst_18328 = (state_18376[(10)]);
var inst_18332 = cljs.core.chunked_seq_QMARK_(inst_18328);
var state_18376__$1 = state_18376;
if(inst_18332){
var statearr_18389_19679 = state_18376__$1;
(statearr_18389_19679[(1)] = (16));

} else {
var statearr_18390_19680 = state_18376__$1;
(statearr_18390_19680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (22))){
var inst_18360 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
if(cljs.core.truth_(inst_18360)){
var statearr_18393_19681 = state_18376__$1;
(statearr_18393_19681[(1)] = (23));

} else {
var statearr_18394_19682 = state_18376__$1;
(statearr_18394_19682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (6))){
var inst_18304 = (state_18376[(8)]);
var inst_18356 = (state_18376[(11)]);
var inst_18354 = (state_18376[(7)]);
var inst_18354__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18304) : topic_fn.call(null,inst_18304));
var inst_18355 = cljs.core.deref(mults);
var inst_18356__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18355,inst_18354__$1);
var state_18376__$1 = (function (){var statearr_18395 = state_18376;
(statearr_18395[(11)] = inst_18356__$1);

(statearr_18395[(7)] = inst_18354__$1);

return statearr_18395;
})();
if(cljs.core.truth_(inst_18356__$1)){
var statearr_18396_19684 = state_18376__$1;
(statearr_18396_19684[(1)] = (19));

} else {
var statearr_18397_19685 = state_18376__$1;
(statearr_18397_19685[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (25))){
var inst_18365 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18398_19686 = state_18376__$1;
(statearr_18398_19686[(2)] = inst_18365);

(statearr_18398_19686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (17))){
var inst_18328 = (state_18376[(10)]);
var inst_18339 = cljs.core.first(inst_18328);
var inst_18340 = cljs.core.async.muxch_STAR_(inst_18339);
var inst_18341 = cljs.core.async.close_BANG_(inst_18340);
var inst_18342 = cljs.core.next(inst_18328);
var inst_18314 = inst_18342;
var inst_18315 = null;
var inst_18316 = (0);
var inst_18317 = (0);
var state_18376__$1 = (function (){var statearr_18399 = state_18376;
(statearr_18399[(12)] = inst_18315);

(statearr_18399[(13)] = inst_18317);

(statearr_18399[(14)] = inst_18314);

(statearr_18399[(15)] = inst_18316);

(statearr_18399[(16)] = inst_18341);

return statearr_18399;
})();
var statearr_18400_19687 = state_18376__$1;
(statearr_18400_19687[(2)] = null);

(statearr_18400_19687[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (3))){
var inst_18373 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18376__$1,inst_18373);
} else {
if((state_val_18377 === (12))){
var inst_18350 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18401_19688 = state_18376__$1;
(statearr_18401_19688[(2)] = inst_18350);

(statearr_18401_19688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (2))){
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18376__$1,(4),ch);
} else {
if((state_val_18377 === (23))){
var state_18376__$1 = state_18376;
var statearr_18402_19695 = state_18376__$1;
(statearr_18402_19695[(2)] = null);

(statearr_18402_19695[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (19))){
var inst_18304 = (state_18376[(8)]);
var inst_18356 = (state_18376[(11)]);
var inst_18358 = cljs.core.async.muxch_STAR_(inst_18356);
var state_18376__$1 = state_18376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18376__$1,(22),inst_18358,inst_18304);
} else {
if((state_val_18377 === (11))){
var inst_18328 = (state_18376[(10)]);
var inst_18314 = (state_18376[(14)]);
var inst_18328__$1 = cljs.core.seq(inst_18314);
var state_18376__$1 = (function (){var statearr_18403 = state_18376;
(statearr_18403[(10)] = inst_18328__$1);

return statearr_18403;
})();
if(inst_18328__$1){
var statearr_18404_19696 = state_18376__$1;
(statearr_18404_19696[(1)] = (13));

} else {
var statearr_18405_19697 = state_18376__$1;
(statearr_18405_19697[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (9))){
var inst_18352 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18406_19698 = state_18376__$1;
(statearr_18406_19698[(2)] = inst_18352);

(statearr_18406_19698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (5))){
var inst_18311 = cljs.core.deref(mults);
var inst_18312 = cljs.core.vals(inst_18311);
var inst_18313 = cljs.core.seq(inst_18312);
var inst_18314 = inst_18313;
var inst_18315 = null;
var inst_18316 = (0);
var inst_18317 = (0);
var state_18376__$1 = (function (){var statearr_18407 = state_18376;
(statearr_18407[(12)] = inst_18315);

(statearr_18407[(13)] = inst_18317);

(statearr_18407[(14)] = inst_18314);

(statearr_18407[(15)] = inst_18316);

return statearr_18407;
})();
var statearr_18408_19700 = state_18376__$1;
(statearr_18408_19700[(2)] = null);

(statearr_18408_19700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (14))){
var state_18376__$1 = state_18376;
var statearr_18412_19701 = state_18376__$1;
(statearr_18412_19701[(2)] = null);

(statearr_18412_19701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (16))){
var inst_18328 = (state_18376[(10)]);
var inst_18334 = cljs.core.chunk_first(inst_18328);
var inst_18335 = cljs.core.chunk_rest(inst_18328);
var inst_18336 = cljs.core.count(inst_18334);
var inst_18314 = inst_18335;
var inst_18315 = inst_18334;
var inst_18316 = inst_18336;
var inst_18317 = (0);
var state_18376__$1 = (function (){var statearr_18413 = state_18376;
(statearr_18413[(12)] = inst_18315);

(statearr_18413[(13)] = inst_18317);

(statearr_18413[(14)] = inst_18314);

(statearr_18413[(15)] = inst_18316);

return statearr_18413;
})();
var statearr_18414_19704 = state_18376__$1;
(statearr_18414_19704[(2)] = null);

(statearr_18414_19704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (10))){
var inst_18315 = (state_18376[(12)]);
var inst_18317 = (state_18376[(13)]);
var inst_18314 = (state_18376[(14)]);
var inst_18316 = (state_18376[(15)]);
var inst_18322 = cljs.core._nth(inst_18315,inst_18317);
var inst_18323 = cljs.core.async.muxch_STAR_(inst_18322);
var inst_18324 = cljs.core.async.close_BANG_(inst_18323);
var inst_18325 = (inst_18317 + (1));
var tmp18409 = inst_18315;
var tmp18410 = inst_18314;
var tmp18411 = inst_18316;
var inst_18314__$1 = tmp18410;
var inst_18315__$1 = tmp18409;
var inst_18316__$1 = tmp18411;
var inst_18317__$1 = inst_18325;
var state_18376__$1 = (function (){var statearr_18415 = state_18376;
(statearr_18415[(12)] = inst_18315__$1);

(statearr_18415[(17)] = inst_18324);

(statearr_18415[(13)] = inst_18317__$1);

(statearr_18415[(14)] = inst_18314__$1);

(statearr_18415[(15)] = inst_18316__$1);

return statearr_18415;
})();
var statearr_18416_19705 = state_18376__$1;
(statearr_18416_19705[(2)] = null);

(statearr_18416_19705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (18))){
var inst_18345 = (state_18376[(2)]);
var state_18376__$1 = state_18376;
var statearr_18417_19706 = state_18376__$1;
(statearr_18417_19706[(2)] = inst_18345);

(statearr_18417_19706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18377 === (8))){
var inst_18317 = (state_18376[(13)]);
var inst_18316 = (state_18376[(15)]);
var inst_18319 = (inst_18317 < inst_18316);
var inst_18320 = inst_18319;
var state_18376__$1 = state_18376;
if(cljs.core.truth_(inst_18320)){
var statearr_18418_19707 = state_18376__$1;
(statearr_18418_19707[(1)] = (10));

} else {
var statearr_18419_19708 = state_18376__$1;
(statearr_18419_19708[(1)] = (11));

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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18420[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18420[(1)] = (1));

return statearr_18420;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18376){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18376);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18421){var ex__16859__auto__ = e18421;
var statearr_18422_19711 = state_18376;
(statearr_18422_19711[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18376[(4)]))){
var statearr_18423_19712 = state_18376;
(statearr_18423_19712[(1)] = cljs.core.first((state_18376[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19713 = state_18376;
state_18376 = G__19713;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18426 = f__16995__auto__();
(statearr_18426[(6)] = c__16994__auto___19667);

return statearr_18426;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var G__18432 = arguments.length;
switch (G__18432) {
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
var G__18434 = arguments.length;
switch (G__18434) {
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
var G__18442 = arguments.length;
switch (G__18442) {
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
var c__16994__auto___19726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18491){
var state_val_18492 = (state_18491[(1)]);
if((state_val_18492 === (7))){
var state_18491__$1 = state_18491;
var statearr_18493_19727 = state_18491__$1;
(statearr_18493_19727[(2)] = null);

(statearr_18493_19727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (1))){
var state_18491__$1 = state_18491;
var statearr_18498_19730 = state_18491__$1;
(statearr_18498_19730[(2)] = null);

(statearr_18498_19730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (4))){
var inst_18446 = (state_18491[(7)]);
var inst_18445 = (state_18491[(8)]);
var inst_18448 = (inst_18446 < inst_18445);
var state_18491__$1 = state_18491;
if(cljs.core.truth_(inst_18448)){
var statearr_18499_19732 = state_18491__$1;
(statearr_18499_19732[(1)] = (6));

} else {
var statearr_18500_19733 = state_18491__$1;
(statearr_18500_19733[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (15))){
var inst_18477 = (state_18491[(9)]);
var inst_18482 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18477);
var state_18491__$1 = state_18491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18491__$1,(17),out,inst_18482);
} else {
if((state_val_18492 === (13))){
var inst_18477 = (state_18491[(9)]);
var inst_18477__$1 = (state_18491[(2)]);
var inst_18478 = cljs.core.some(cljs.core.nil_QMARK_,inst_18477__$1);
var state_18491__$1 = (function (){var statearr_18501 = state_18491;
(statearr_18501[(9)] = inst_18477__$1);

return statearr_18501;
})();
if(cljs.core.truth_(inst_18478)){
var statearr_18502_19734 = state_18491__$1;
(statearr_18502_19734[(1)] = (14));

} else {
var statearr_18503_19735 = state_18491__$1;
(statearr_18503_19735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (6))){
var state_18491__$1 = state_18491;
var statearr_18504_19736 = state_18491__$1;
(statearr_18504_19736[(2)] = null);

(statearr_18504_19736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (17))){
var inst_18484 = (state_18491[(2)]);
var state_18491__$1 = (function (){var statearr_18507 = state_18491;
(statearr_18507[(10)] = inst_18484);

return statearr_18507;
})();
var statearr_18508_19737 = state_18491__$1;
(statearr_18508_19737[(2)] = null);

(statearr_18508_19737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (3))){
var inst_18489 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18491__$1,inst_18489);
} else {
if((state_val_18492 === (12))){
var _ = (function (){var statearr_18509 = state_18491;
(statearr_18509[(4)] = cljs.core.rest((state_18491[(4)])));

return statearr_18509;
})();
var state_18491__$1 = state_18491;
var ex18506 = (state_18491__$1[(2)]);
var statearr_18510_19738 = state_18491__$1;
(statearr_18510_19738[(5)] = ex18506);


if((ex18506 instanceof Object)){
var statearr_18511_19739 = state_18491__$1;
(statearr_18511_19739[(1)] = (11));

(statearr_18511_19739[(5)] = null);

} else {
throw ex18506;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (2))){
var inst_18444 = cljs.core.reset_BANG_(dctr,cnt);
var inst_18445 = cnt;
var inst_18446 = (0);
var state_18491__$1 = (function (){var statearr_18512 = state_18491;
(statearr_18512[(7)] = inst_18446);

(statearr_18512[(8)] = inst_18445);

(statearr_18512[(11)] = inst_18444);

return statearr_18512;
})();
var statearr_18513_19740 = state_18491__$1;
(statearr_18513_19740[(2)] = null);

(statearr_18513_19740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (11))){
var inst_18456 = (state_18491[(2)]);
var inst_18457 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18491__$1 = (function (){var statearr_18514 = state_18491;
(statearr_18514[(12)] = inst_18456);

return statearr_18514;
})();
var statearr_18515_19743 = state_18491__$1;
(statearr_18515_19743[(2)] = inst_18457);

(statearr_18515_19743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (9))){
var inst_18446 = (state_18491[(7)]);
var _ = (function (){var statearr_18516 = state_18491;
(statearr_18516[(4)] = cljs.core.cons((12),(state_18491[(4)])));

return statearr_18516;
})();
var inst_18463 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18446) : chs__$1.call(null,inst_18446));
var inst_18464 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18446) : done.call(null,inst_18446));
var inst_18465 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18463,inst_18464);
var ___$1 = (function (){var statearr_18517 = state_18491;
(statearr_18517[(4)] = cljs.core.rest((state_18491[(4)])));

return statearr_18517;
})();
var state_18491__$1 = state_18491;
var statearr_18518_19746 = state_18491__$1;
(statearr_18518_19746[(2)] = inst_18465);

(statearr_18518_19746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (5))){
var inst_18475 = (state_18491[(2)]);
var state_18491__$1 = (function (){var statearr_18519 = state_18491;
(statearr_18519[(13)] = inst_18475);

return statearr_18519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18491__$1,(13),dchan);
} else {
if((state_val_18492 === (14))){
var inst_18480 = cljs.core.async.close_BANG_(out);
var state_18491__$1 = state_18491;
var statearr_18520_19748 = state_18491__$1;
(statearr_18520_19748[(2)] = inst_18480);

(statearr_18520_19748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (16))){
var inst_18487 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
var statearr_18521_19749 = state_18491__$1;
(statearr_18521_19749[(2)] = inst_18487);

(statearr_18521_19749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (10))){
var inst_18446 = (state_18491[(7)]);
var inst_18468 = (state_18491[(2)]);
var inst_18469 = (inst_18446 + (1));
var inst_18446__$1 = inst_18469;
var state_18491__$1 = (function (){var statearr_18522 = state_18491;
(statearr_18522[(7)] = inst_18446__$1);

(statearr_18522[(14)] = inst_18468);

return statearr_18522;
})();
var statearr_18523_19750 = state_18491__$1;
(statearr_18523_19750[(2)] = null);

(statearr_18523_19750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18492 === (8))){
var inst_18473 = (state_18491[(2)]);
var state_18491__$1 = state_18491;
var statearr_18524_19752 = state_18491__$1;
(statearr_18524_19752[(2)] = inst_18473);

(statearr_18524_19752[(1)] = (5));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18525 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18525[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18525[(1)] = (1));

return statearr_18525;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18491){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18491);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18527){var ex__16859__auto__ = e18527;
var statearr_18528_19753 = state_18491;
(statearr_18528_19753[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18491[(4)]))){
var statearr_18529_19755 = state_18491;
(statearr_18529_19755[(1)] = cljs.core.first((state_18491[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19756 = state_18491;
state_18491 = G__19756;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18530 = f__16995__auto__();
(statearr_18530[(6)] = c__16994__auto___19726);

return statearr_18530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var G__18533 = arguments.length;
switch (G__18533) {
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
var c__16994__auto___19759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18567){
var state_val_18568 = (state_18567[(1)]);
if((state_val_18568 === (7))){
var inst_18545 = (state_18567[(7)]);
var inst_18546 = (state_18567[(8)]);
var inst_18545__$1 = (state_18567[(2)]);
var inst_18546__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18545__$1,(0),null);
var inst_18547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18545__$1,(1),null);
var inst_18548 = (inst_18546__$1 == null);
var state_18567__$1 = (function (){var statearr_18569 = state_18567;
(statearr_18569[(9)] = inst_18547);

(statearr_18569[(7)] = inst_18545__$1);

(statearr_18569[(8)] = inst_18546__$1);

return statearr_18569;
})();
if(cljs.core.truth_(inst_18548)){
var statearr_18570_19762 = state_18567__$1;
(statearr_18570_19762[(1)] = (8));

} else {
var statearr_18571_19764 = state_18567__$1;
(statearr_18571_19764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (1))){
var inst_18535 = cljs.core.vec(chs);
var inst_18536 = inst_18535;
var state_18567__$1 = (function (){var statearr_18572 = state_18567;
(statearr_18572[(10)] = inst_18536);

return statearr_18572;
})();
var statearr_18573_19765 = state_18567__$1;
(statearr_18573_19765[(2)] = null);

(statearr_18573_19765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (4))){
var inst_18536 = (state_18567[(10)]);
var state_18567__$1 = state_18567;
return cljs.core.async.ioc_alts_BANG_(state_18567__$1,(7),inst_18536);
} else {
if((state_val_18568 === (6))){
var inst_18563 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18574_19766 = state_18567__$1;
(statearr_18574_19766[(2)] = inst_18563);

(statearr_18574_19766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (3))){
var inst_18565 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18567__$1,inst_18565);
} else {
if((state_val_18568 === (2))){
var inst_18536 = (state_18567[(10)]);
var inst_18538 = cljs.core.count(inst_18536);
var inst_18539 = (inst_18538 > (0));
var state_18567__$1 = state_18567;
if(cljs.core.truth_(inst_18539)){
var statearr_18576_19775 = state_18567__$1;
(statearr_18576_19775[(1)] = (4));

} else {
var statearr_18577_19776 = state_18567__$1;
(statearr_18577_19776[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (11))){
var inst_18536 = (state_18567[(10)]);
var inst_18556 = (state_18567[(2)]);
var tmp18575 = inst_18536;
var inst_18536__$1 = tmp18575;
var state_18567__$1 = (function (){var statearr_18578 = state_18567;
(statearr_18578[(10)] = inst_18536__$1);

(statearr_18578[(11)] = inst_18556);

return statearr_18578;
})();
var statearr_18579_19788 = state_18567__$1;
(statearr_18579_19788[(2)] = null);

(statearr_18579_19788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (9))){
var inst_18546 = (state_18567[(8)]);
var state_18567__$1 = state_18567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18567__$1,(11),out,inst_18546);
} else {
if((state_val_18568 === (5))){
var inst_18561 = cljs.core.async.close_BANG_(out);
var state_18567__$1 = state_18567;
var statearr_18580_19800 = state_18567__$1;
(statearr_18580_19800[(2)] = inst_18561);

(statearr_18580_19800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (10))){
var inst_18559 = (state_18567[(2)]);
var state_18567__$1 = state_18567;
var statearr_18582_19805 = state_18567__$1;
(statearr_18582_19805[(2)] = inst_18559);

(statearr_18582_19805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18568 === (8))){
var inst_18547 = (state_18567[(9)]);
var inst_18536 = (state_18567[(10)]);
var inst_18545 = (state_18567[(7)]);
var inst_18546 = (state_18567[(8)]);
var inst_18551 = (function (){var cs = inst_18536;
var vec__18541 = inst_18545;
var v = inst_18546;
var c = inst_18547;
return (function (p1__18531_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18531_SHARP_);
});
})();
var inst_18552 = cljs.core.filterv(inst_18551,inst_18536);
var inst_18536__$1 = inst_18552;
var state_18567__$1 = (function (){var statearr_18583 = state_18567;
(statearr_18583[(10)] = inst_18536__$1);

return statearr_18583;
})();
var statearr_18584_19823 = state_18567__$1;
(statearr_18584_19823[(2)] = null);

(statearr_18584_19823[(1)] = (2));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18586 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18586[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18586[(1)] = (1));

return statearr_18586;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18567){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18567);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18588){var ex__16859__auto__ = e18588;
var statearr_18589_19825 = state_18567;
(statearr_18589_19825[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18567[(4)]))){
var statearr_18590_19826 = state_18567;
(statearr_18590_19826[(1)] = cljs.core.first((state_18567[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19827 = state_18567;
state_18567 = G__19827;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18592 = f__16995__auto__();
(statearr_18592[(6)] = c__16994__auto___19759);

return statearr_18592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
var G__18595 = arguments.length;
switch (G__18595) {
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
var c__16994__auto___19833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18619){
var state_val_18620 = (state_18619[(1)]);
if((state_val_18620 === (7))){
var inst_18601 = (state_18619[(7)]);
var inst_18601__$1 = (state_18619[(2)]);
var inst_18602 = (inst_18601__$1 == null);
var inst_18603 = cljs.core.not(inst_18602);
var state_18619__$1 = (function (){var statearr_18621 = state_18619;
(statearr_18621[(7)] = inst_18601__$1);

return statearr_18621;
})();
if(inst_18603){
var statearr_18622_19834 = state_18619__$1;
(statearr_18622_19834[(1)] = (8));

} else {
var statearr_18623_19835 = state_18619__$1;
(statearr_18623_19835[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (1))){
var inst_18596 = (0);
var state_18619__$1 = (function (){var statearr_18624 = state_18619;
(statearr_18624[(8)] = inst_18596);

return statearr_18624;
})();
var statearr_18625_19836 = state_18619__$1;
(statearr_18625_19836[(2)] = null);

(statearr_18625_19836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (4))){
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18619__$1,(7),ch);
} else {
if((state_val_18620 === (6))){
var inst_18614 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18627_19838 = state_18619__$1;
(statearr_18627_19838[(2)] = inst_18614);

(statearr_18627_19838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (3))){
var inst_18616 = (state_18619[(2)]);
var inst_18617 = cljs.core.async.close_BANG_(out);
var state_18619__$1 = (function (){var statearr_18628 = state_18619;
(statearr_18628[(9)] = inst_18616);

return statearr_18628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18619__$1,inst_18617);
} else {
if((state_val_18620 === (2))){
var inst_18596 = (state_18619[(8)]);
var inst_18598 = (inst_18596 < n);
var state_18619__$1 = state_18619;
if(cljs.core.truth_(inst_18598)){
var statearr_18629_19841 = state_18619__$1;
(statearr_18629_19841[(1)] = (4));

} else {
var statearr_18630_19842 = state_18619__$1;
(statearr_18630_19842[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (11))){
var inst_18596 = (state_18619[(8)]);
var inst_18606 = (state_18619[(2)]);
var inst_18607 = (inst_18596 + (1));
var inst_18596__$1 = inst_18607;
var state_18619__$1 = (function (){var statearr_18631 = state_18619;
(statearr_18631[(10)] = inst_18606);

(statearr_18631[(8)] = inst_18596__$1);

return statearr_18631;
})();
var statearr_18633_19846 = state_18619__$1;
(statearr_18633_19846[(2)] = null);

(statearr_18633_19846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (9))){
var state_18619__$1 = state_18619;
var statearr_18635_19850 = state_18619__$1;
(statearr_18635_19850[(2)] = null);

(statearr_18635_19850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (5))){
var state_18619__$1 = state_18619;
var statearr_18636_19851 = state_18619__$1;
(statearr_18636_19851[(2)] = null);

(statearr_18636_19851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (10))){
var inst_18611 = (state_18619[(2)]);
var state_18619__$1 = state_18619;
var statearr_18637_19853 = state_18619__$1;
(statearr_18637_19853[(2)] = inst_18611);

(statearr_18637_19853[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18620 === (8))){
var inst_18601 = (state_18619[(7)]);
var state_18619__$1 = state_18619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18619__$1,(11),out,inst_18601);
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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18638[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18638[(1)] = (1));

return statearr_18638;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18619){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18619);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18639){var ex__16859__auto__ = e18639;
var statearr_18640_19856 = state_18619;
(statearr_18640_19856[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18619[(4)]))){
var statearr_18641_19858 = state_18619;
(statearr_18641_19858[(1)] = cljs.core.first((state_18619[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19859 = state_18619;
state_18619 = G__19859;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18642 = f__16995__auto__();
(statearr_18642[(6)] = c__16994__auto___19833);

return statearr_18642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
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
cljs.core.async.t_cljs$core$async18659 = (function (f,ch,meta18645,_,fn1,meta18660){
this.f = f;
this.ch = ch;
this.meta18645 = meta18645;
this._ = _;
this.fn1 = fn1;
this.meta18660 = meta18660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18661,meta18660__$1){
var self__ = this;
var _18661__$1 = this;
return (new cljs.core.async.t_cljs$core$async18659(self__.f,self__.ch,self__.meta18645,self__._,self__.fn1,meta18660__$1));
}));

(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18661){
var self__ = this;
var _18661__$1 = this;
return self__.meta18660;
}));

(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18659.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__18643_SHARP_){
var G__18662 = (((p1__18643_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18643_SHARP_) : self__.f.call(null,p1__18643_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18662) : f1.call(null,G__18662));
});
}));

(cljs.core.async.t_cljs$core$async18659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18645","meta18645",417495600,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18644","cljs.core.async/t_cljs$core$async18644",417323043,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18660","meta18660",-115025160,null)], null);
}));

(cljs.core.async.t_cljs$core$async18659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18659");

(cljs.core.async.t_cljs$core$async18659.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18659.
 */
cljs.core.async.__GT_t_cljs$core$async18659 = (function cljs$core$async$__GT_t_cljs$core$async18659(f,ch,meta18645,_,fn1,meta18660){
return (new cljs.core.async.t_cljs$core$async18659(f,ch,meta18645,_,fn1,meta18660));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18644 = (function (f,ch,meta18645){
this.f = f;
this.ch = ch;
this.meta18645 = meta18645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18646,meta18645__$1){
var self__ = this;
var _18646__$1 = this;
return (new cljs.core.async.t_cljs$core$async18644(self__.f,self__.ch,meta18645__$1));
}));

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18646){
var self__ = this;
var _18646__$1 = this;
return self__.meta18645;
}));

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async18659(self__.f,self__.ch,self__.meta18645,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18663 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18663) : self__.f.call(null,G__18663));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async18644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18645","meta18645",417495600,null)], null);
}));

(cljs.core.async.t_cljs$core$async18644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18644");

(cljs.core.async.t_cljs$core$async18644.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18644.
 */
cljs.core.async.__GT_t_cljs$core$async18644 = (function cljs$core$async$__GT_t_cljs$core$async18644(f,ch,meta18645){
return (new cljs.core.async.t_cljs$core$async18644(f,ch,meta18645));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18644(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18664 = (function (f,ch,meta18665){
this.f = f;
this.ch = ch;
this.meta18665 = meta18665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18666,meta18665__$1){
var self__ = this;
var _18666__$1 = this;
return (new cljs.core.async.t_cljs$core$async18664(self__.f,self__.ch,meta18665__$1));
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18666){
var self__ = this;
var _18666__$1 = this;
return self__.meta18665;
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18664.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async18664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18665","meta18665",-484934098,null)], null);
}));

(cljs.core.async.t_cljs$core$async18664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18664");

(cljs.core.async.t_cljs$core$async18664.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18664.
 */
cljs.core.async.__GT_t_cljs$core$async18664 = (function cljs$core$async$__GT_t_cljs$core$async18664(f,ch,meta18665){
return (new cljs.core.async.t_cljs$core$async18664(f,ch,meta18665));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async18664(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18670 = (function (p,ch,meta18671){
this.p = p;
this.ch = ch;
this.meta18671 = meta18671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18672,meta18671__$1){
var self__ = this;
var _18672__$1 = this;
return (new cljs.core.async.t_cljs$core$async18670(self__.p,self__.ch,meta18671__$1));
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18672){
var self__ = this;
var _18672__$1 = this;
return self__.meta18671;
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18670.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async18670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18671","meta18671",1826801100,null)], null);
}));

(cljs.core.async.t_cljs$core$async18670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18670");

(cljs.core.async.t_cljs$core$async18670.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18670.
 */
cljs.core.async.__GT_t_cljs$core$async18670 = (function cljs$core$async$__GT_t_cljs$core$async18670(p,ch,meta18671){
return (new cljs.core.async.t_cljs$core$async18670(p,ch,meta18671));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async18670(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__18682 = arguments.length;
switch (G__18682) {
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
var c__16994__auto___19873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18703){
var state_val_18704 = (state_18703[(1)]);
if((state_val_18704 === (7))){
var inst_18699 = (state_18703[(2)]);
var state_18703__$1 = state_18703;
var statearr_18705_19874 = state_18703__$1;
(statearr_18705_19874[(2)] = inst_18699);

(statearr_18705_19874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (1))){
var state_18703__$1 = state_18703;
var statearr_18706_19875 = state_18703__$1;
(statearr_18706_19875[(2)] = null);

(statearr_18706_19875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (4))){
var inst_18685 = (state_18703[(7)]);
var inst_18685__$1 = (state_18703[(2)]);
var inst_18686 = (inst_18685__$1 == null);
var state_18703__$1 = (function (){var statearr_18707 = state_18703;
(statearr_18707[(7)] = inst_18685__$1);

return statearr_18707;
})();
if(cljs.core.truth_(inst_18686)){
var statearr_18708_19876 = state_18703__$1;
(statearr_18708_19876[(1)] = (5));

} else {
var statearr_18710_19877 = state_18703__$1;
(statearr_18710_19877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (6))){
var inst_18685 = (state_18703[(7)]);
var inst_18690 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18685) : p.call(null,inst_18685));
var state_18703__$1 = state_18703;
if(cljs.core.truth_(inst_18690)){
var statearr_18711_19878 = state_18703__$1;
(statearr_18711_19878[(1)] = (8));

} else {
var statearr_18712_19879 = state_18703__$1;
(statearr_18712_19879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (3))){
var inst_18701 = (state_18703[(2)]);
var state_18703__$1 = state_18703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18703__$1,inst_18701);
} else {
if((state_val_18704 === (2))){
var state_18703__$1 = state_18703;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18703__$1,(4),ch);
} else {
if((state_val_18704 === (11))){
var inst_18693 = (state_18703[(2)]);
var state_18703__$1 = state_18703;
var statearr_18713_19881 = state_18703__$1;
(statearr_18713_19881[(2)] = inst_18693);

(statearr_18713_19881[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (9))){
var state_18703__$1 = state_18703;
var statearr_18714_19882 = state_18703__$1;
(statearr_18714_19882[(2)] = null);

(statearr_18714_19882[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (5))){
var inst_18688 = cljs.core.async.close_BANG_(out);
var state_18703__$1 = state_18703;
var statearr_18715_19883 = state_18703__$1;
(statearr_18715_19883[(2)] = inst_18688);

(statearr_18715_19883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (10))){
var inst_18696 = (state_18703[(2)]);
var state_18703__$1 = (function (){var statearr_18718 = state_18703;
(statearr_18718[(8)] = inst_18696);

return statearr_18718;
})();
var statearr_18719_19884 = state_18703__$1;
(statearr_18719_19884[(2)] = null);

(statearr_18719_19884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18704 === (8))){
var inst_18685 = (state_18703[(7)]);
var state_18703__$1 = state_18703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18703__$1,(11),out,inst_18685);
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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18721 = [null,null,null,null,null,null,null,null,null];
(statearr_18721[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18721[(1)] = (1));

return statearr_18721;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18703){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18703);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18722){var ex__16859__auto__ = e18722;
var statearr_18723_19885 = state_18703;
(statearr_18723_19885[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18703[(4)]))){
var statearr_18725_19886 = state_18703;
(statearr_18725_19886[(1)] = cljs.core.first((state_18703[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19887 = state_18703;
state_18703 = G__19887;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18726 = f__16995__auto__();
(statearr_18726[(6)] = c__16994__auto___19873);

return statearr_18726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__18728 = arguments.length;
switch (G__18728) {
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
var c__16994__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18790){
var state_val_18791 = (state_18790[(1)]);
if((state_val_18791 === (7))){
var inst_18786 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18792_19891 = state_18790__$1;
(statearr_18792_19891[(2)] = inst_18786);

(statearr_18792_19891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (20))){
var inst_18756 = (state_18790[(7)]);
var inst_18767 = (state_18790[(2)]);
var inst_18768 = cljs.core.next(inst_18756);
var inst_18742 = inst_18768;
var inst_18743 = null;
var inst_18744 = (0);
var inst_18745 = (0);
var state_18790__$1 = (function (){var statearr_18793 = state_18790;
(statearr_18793[(8)] = inst_18744);

(statearr_18793[(9)] = inst_18742);

(statearr_18793[(10)] = inst_18745);

(statearr_18793[(11)] = inst_18767);

(statearr_18793[(12)] = inst_18743);

return statearr_18793;
})();
var statearr_18794_19892 = state_18790__$1;
(statearr_18794_19892[(2)] = null);

(statearr_18794_19892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (1))){
var state_18790__$1 = state_18790;
var statearr_18795_19893 = state_18790__$1;
(statearr_18795_19893[(2)] = null);

(statearr_18795_19893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (4))){
var inst_18731 = (state_18790[(13)]);
var inst_18731__$1 = (state_18790[(2)]);
var inst_18732 = (inst_18731__$1 == null);
var state_18790__$1 = (function (){var statearr_18796 = state_18790;
(statearr_18796[(13)] = inst_18731__$1);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18732)){
var statearr_18797_19894 = state_18790__$1;
(statearr_18797_19894[(1)] = (5));

} else {
var statearr_18798_19895 = state_18790__$1;
(statearr_18798_19895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (15))){
var state_18790__$1 = state_18790;
var statearr_18802_19896 = state_18790__$1;
(statearr_18802_19896[(2)] = null);

(statearr_18802_19896[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (21))){
var state_18790__$1 = state_18790;
var statearr_18803_19898 = state_18790__$1;
(statearr_18803_19898[(2)] = null);

(statearr_18803_19898[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (13))){
var inst_18744 = (state_18790[(8)]);
var inst_18742 = (state_18790[(9)]);
var inst_18745 = (state_18790[(10)]);
var inst_18743 = (state_18790[(12)]);
var inst_18752 = (state_18790[(2)]);
var inst_18753 = (inst_18745 + (1));
var tmp18799 = inst_18744;
var tmp18800 = inst_18742;
var tmp18801 = inst_18743;
var inst_18742__$1 = tmp18800;
var inst_18743__$1 = tmp18801;
var inst_18744__$1 = tmp18799;
var inst_18745__$1 = inst_18753;
var state_18790__$1 = (function (){var statearr_18804 = state_18790;
(statearr_18804[(8)] = inst_18744__$1);

(statearr_18804[(9)] = inst_18742__$1);

(statearr_18804[(10)] = inst_18745__$1);

(statearr_18804[(14)] = inst_18752);

(statearr_18804[(12)] = inst_18743__$1);

return statearr_18804;
})();
var statearr_18805_19900 = state_18790__$1;
(statearr_18805_19900[(2)] = null);

(statearr_18805_19900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (22))){
var state_18790__$1 = state_18790;
var statearr_18806_19901 = state_18790__$1;
(statearr_18806_19901[(2)] = null);

(statearr_18806_19901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (6))){
var inst_18731 = (state_18790[(13)]);
var inst_18740 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18731) : f.call(null,inst_18731));
var inst_18741 = cljs.core.seq(inst_18740);
var inst_18742 = inst_18741;
var inst_18743 = null;
var inst_18744 = (0);
var inst_18745 = (0);
var state_18790__$1 = (function (){var statearr_18808 = state_18790;
(statearr_18808[(8)] = inst_18744);

(statearr_18808[(9)] = inst_18742);

(statearr_18808[(10)] = inst_18745);

(statearr_18808[(12)] = inst_18743);

return statearr_18808;
})();
var statearr_18810_19903 = state_18790__$1;
(statearr_18810_19903[(2)] = null);

(statearr_18810_19903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (17))){
var inst_18756 = (state_18790[(7)]);
var inst_18760 = cljs.core.chunk_first(inst_18756);
var inst_18761 = cljs.core.chunk_rest(inst_18756);
var inst_18762 = cljs.core.count(inst_18760);
var inst_18742 = inst_18761;
var inst_18743 = inst_18760;
var inst_18744 = inst_18762;
var inst_18745 = (0);
var state_18790__$1 = (function (){var statearr_18812 = state_18790;
(statearr_18812[(8)] = inst_18744);

(statearr_18812[(9)] = inst_18742);

(statearr_18812[(10)] = inst_18745);

(statearr_18812[(12)] = inst_18743);

return statearr_18812;
})();
var statearr_18813_19909 = state_18790__$1;
(statearr_18813_19909[(2)] = null);

(statearr_18813_19909[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (3))){
var inst_18788 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18790__$1,inst_18788);
} else {
if((state_val_18791 === (12))){
var inst_18776 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18814_19910 = state_18790__$1;
(statearr_18814_19910[(2)] = inst_18776);

(statearr_18814_19910[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (2))){
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18790__$1,(4),in$);
} else {
if((state_val_18791 === (23))){
var inst_18784 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18815_19911 = state_18790__$1;
(statearr_18815_19911[(2)] = inst_18784);

(statearr_18815_19911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (19))){
var inst_18771 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18816_19912 = state_18790__$1;
(statearr_18816_19912[(2)] = inst_18771);

(statearr_18816_19912[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (11))){
var inst_18742 = (state_18790[(9)]);
var inst_18756 = (state_18790[(7)]);
var inst_18756__$1 = cljs.core.seq(inst_18742);
var state_18790__$1 = (function (){var statearr_18817 = state_18790;
(statearr_18817[(7)] = inst_18756__$1);

return statearr_18817;
})();
if(inst_18756__$1){
var statearr_18818_19914 = state_18790__$1;
(statearr_18818_19914[(1)] = (14));

} else {
var statearr_18819_19915 = state_18790__$1;
(statearr_18819_19915[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (9))){
var inst_18778 = (state_18790[(2)]);
var inst_18779 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18790__$1 = (function (){var statearr_18820 = state_18790;
(statearr_18820[(15)] = inst_18778);

return statearr_18820;
})();
if(cljs.core.truth_(inst_18779)){
var statearr_18821_19916 = state_18790__$1;
(statearr_18821_19916[(1)] = (21));

} else {
var statearr_18822_19917 = state_18790__$1;
(statearr_18822_19917[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (5))){
var inst_18734 = cljs.core.async.close_BANG_(out);
var state_18790__$1 = state_18790;
var statearr_18823_19919 = state_18790__$1;
(statearr_18823_19919[(2)] = inst_18734);

(statearr_18823_19919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (14))){
var inst_18756 = (state_18790[(7)]);
var inst_18758 = cljs.core.chunked_seq_QMARK_(inst_18756);
var state_18790__$1 = state_18790;
if(inst_18758){
var statearr_18824_19920 = state_18790__$1;
(statearr_18824_19920[(1)] = (17));

} else {
var statearr_18825_19921 = state_18790__$1;
(statearr_18825_19921[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (16))){
var inst_18774 = (state_18790[(2)]);
var state_18790__$1 = state_18790;
var statearr_18826_19922 = state_18790__$1;
(statearr_18826_19922[(2)] = inst_18774);

(statearr_18826_19922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18791 === (10))){
var inst_18745 = (state_18790[(10)]);
var inst_18743 = (state_18790[(12)]);
var inst_18750 = cljs.core._nth(inst_18743,inst_18745);
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18790__$1,(13),out,inst_18750);
} else {
if((state_val_18791 === (18))){
var inst_18756 = (state_18790[(7)]);
var inst_18765 = cljs.core.first(inst_18756);
var state_18790__$1 = state_18790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18790__$1,(20),out,inst_18765);
} else {
if((state_val_18791 === (8))){
var inst_18744 = (state_18790[(8)]);
var inst_18745 = (state_18790[(10)]);
var inst_18747 = (inst_18745 < inst_18744);
var inst_18748 = inst_18747;
var state_18790__$1 = state_18790;
if(cljs.core.truth_(inst_18748)){
var statearr_18827_19925 = state_18790__$1;
(statearr_18827_19925[(1)] = (10));

} else {
var statearr_18828_19926 = state_18790__$1;
(statearr_18828_19926[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____0 = (function (){
var statearr_18829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18829[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__);

(statearr_18829[(1)] = (1));

return statearr_18829;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____1 = (function (state_18790){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18790);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18830){var ex__16859__auto__ = e18830;
var statearr_18831_19928 = state_18790;
(statearr_18831_19928[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18790[(4)]))){
var statearr_18832_19929 = state_18790;
(statearr_18832_19929[(1)] = cljs.core.first((state_18790[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19930 = state_18790;
state_18790 = G__19930;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__ = function(state_18790){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____1.call(this,state_18790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16856__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18833 = f__16995__auto__();
(statearr_18833[(6)] = c__16994__auto__);

return statearr_18833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

return c__16994__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__18836 = arguments.length;
switch (G__18836) {
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
var G__18838 = arguments.length;
switch (G__18838) {
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
var G__18843 = arguments.length;
switch (G__18843) {
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
var c__16994__auto___19940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18867){
var state_val_18868 = (state_18867[(1)]);
if((state_val_18868 === (7))){
var inst_18862 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18869_19944 = state_18867__$1;
(statearr_18869_19944[(2)] = inst_18862);

(statearr_18869_19944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (1))){
var inst_18844 = null;
var state_18867__$1 = (function (){var statearr_18870 = state_18867;
(statearr_18870[(7)] = inst_18844);

return statearr_18870;
})();
var statearr_18871_19945 = state_18867__$1;
(statearr_18871_19945[(2)] = null);

(statearr_18871_19945[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (4))){
var inst_18847 = (state_18867[(8)]);
var inst_18847__$1 = (state_18867[(2)]);
var inst_18848 = (inst_18847__$1 == null);
var inst_18849 = cljs.core.not(inst_18848);
var state_18867__$1 = (function (){var statearr_18872 = state_18867;
(statearr_18872[(8)] = inst_18847__$1);

return statearr_18872;
})();
if(inst_18849){
var statearr_18873_19949 = state_18867__$1;
(statearr_18873_19949[(1)] = (5));

} else {
var statearr_18874_19950 = state_18867__$1;
(statearr_18874_19950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (6))){
var state_18867__$1 = state_18867;
var statearr_18875_19951 = state_18867__$1;
(statearr_18875_19951[(2)] = null);

(statearr_18875_19951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (3))){
var inst_18864 = (state_18867[(2)]);
var inst_18865 = cljs.core.async.close_BANG_(out);
var state_18867__$1 = (function (){var statearr_18876 = state_18867;
(statearr_18876[(9)] = inst_18864);

return statearr_18876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18867__$1,inst_18865);
} else {
if((state_val_18868 === (2))){
var state_18867__$1 = state_18867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18867__$1,(4),ch);
} else {
if((state_val_18868 === (11))){
var inst_18847 = (state_18867[(8)]);
var inst_18856 = (state_18867[(2)]);
var inst_18844 = inst_18847;
var state_18867__$1 = (function (){var statearr_18878 = state_18867;
(statearr_18878[(10)] = inst_18856);

(statearr_18878[(7)] = inst_18844);

return statearr_18878;
})();
var statearr_18879_19955 = state_18867__$1;
(statearr_18879_19955[(2)] = null);

(statearr_18879_19955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (9))){
var inst_18847 = (state_18867[(8)]);
var state_18867__$1 = state_18867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18867__$1,(11),out,inst_18847);
} else {
if((state_val_18868 === (5))){
var inst_18844 = (state_18867[(7)]);
var inst_18847 = (state_18867[(8)]);
var inst_18851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18847,inst_18844);
var state_18867__$1 = state_18867;
if(inst_18851){
var statearr_18881_19956 = state_18867__$1;
(statearr_18881_19956[(1)] = (8));

} else {
var statearr_18882_19957 = state_18867__$1;
(statearr_18882_19957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (10))){
var inst_18859 = (state_18867[(2)]);
var state_18867__$1 = state_18867;
var statearr_18883_19961 = state_18867__$1;
(statearr_18883_19961[(2)] = inst_18859);

(statearr_18883_19961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18868 === (8))){
var inst_18844 = (state_18867[(7)]);
var tmp18880 = inst_18844;
var inst_18844__$1 = tmp18880;
var state_18867__$1 = (function (){var statearr_18884 = state_18867;
(statearr_18884[(7)] = inst_18844__$1);

return statearr_18884;
})();
var statearr_18885_19962 = state_18867__$1;
(statearr_18885_19962[(2)] = null);

(statearr_18885_19962[(1)] = (2));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18886[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18886[(1)] = (1));

return statearr_18886;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18867){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18867);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18887){var ex__16859__auto__ = e18887;
var statearr_18888_19967 = state_18867;
(statearr_18888_19967[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18867[(4)]))){
var statearr_18889_19968 = state_18867;
(statearr_18889_19968[(1)] = cljs.core.first((state_18867[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19969 = state_18867;
state_18867 = G__19969;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18890 = f__16995__auto__();
(statearr_18890[(6)] = c__16994__auto___19940);

return statearr_18890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18892 = arguments.length;
switch (G__18892) {
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
var c__16994__auto___19971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_18930){
var state_val_18931 = (state_18930[(1)]);
if((state_val_18931 === (7))){
var inst_18926 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18932_19972 = state_18930__$1;
(statearr_18932_19972[(2)] = inst_18926);

(statearr_18932_19972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (1))){
var inst_18893 = (new Array(n));
var inst_18894 = inst_18893;
var inst_18895 = (0);
var state_18930__$1 = (function (){var statearr_18933 = state_18930;
(statearr_18933[(7)] = inst_18894);

(statearr_18933[(8)] = inst_18895);

return statearr_18933;
})();
var statearr_18934_19973 = state_18930__$1;
(statearr_18934_19973[(2)] = null);

(statearr_18934_19973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (4))){
var inst_18898 = (state_18930[(9)]);
var inst_18898__$1 = (state_18930[(2)]);
var inst_18899 = (inst_18898__$1 == null);
var inst_18900 = cljs.core.not(inst_18899);
var state_18930__$1 = (function (){var statearr_18935 = state_18930;
(statearr_18935[(9)] = inst_18898__$1);

return statearr_18935;
})();
if(inst_18900){
var statearr_18936_19974 = state_18930__$1;
(statearr_18936_19974[(1)] = (5));

} else {
var statearr_18937_19975 = state_18930__$1;
(statearr_18937_19975[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (15))){
var inst_18920 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18938_19976 = state_18930__$1;
(statearr_18938_19976[(2)] = inst_18920);

(statearr_18938_19976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (13))){
var state_18930__$1 = state_18930;
var statearr_18939_19977 = state_18930__$1;
(statearr_18939_19977[(2)] = null);

(statearr_18939_19977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (6))){
var inst_18895 = (state_18930[(8)]);
var inst_18916 = (inst_18895 > (0));
var state_18930__$1 = state_18930;
if(cljs.core.truth_(inst_18916)){
var statearr_18940_19978 = state_18930__$1;
(statearr_18940_19978[(1)] = (12));

} else {
var statearr_18941_19979 = state_18930__$1;
(statearr_18941_19979[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (3))){
var inst_18928 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18930__$1,inst_18928);
} else {
if((state_val_18931 === (12))){
var inst_18894 = (state_18930[(7)]);
var inst_18918 = cljs.core.vec(inst_18894);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18930__$1,(15),out,inst_18918);
} else {
if((state_val_18931 === (2))){
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18930__$1,(4),ch);
} else {
if((state_val_18931 === (11))){
var inst_18910 = (state_18930[(2)]);
var inst_18911 = (new Array(n));
var inst_18894 = inst_18911;
var inst_18895 = (0);
var state_18930__$1 = (function (){var statearr_18946 = state_18930;
(statearr_18946[(7)] = inst_18894);

(statearr_18946[(10)] = inst_18910);

(statearr_18946[(8)] = inst_18895);

return statearr_18946;
})();
var statearr_18951_19980 = state_18930__$1;
(statearr_18951_19980[(2)] = null);

(statearr_18951_19980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (9))){
var inst_18894 = (state_18930[(7)]);
var inst_18908 = cljs.core.vec(inst_18894);
var state_18930__$1 = state_18930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18930__$1,(11),out,inst_18908);
} else {
if((state_val_18931 === (5))){
var inst_18898 = (state_18930[(9)]);
var inst_18903 = (state_18930[(11)]);
var inst_18894 = (state_18930[(7)]);
var inst_18895 = (state_18930[(8)]);
var inst_18902 = (inst_18894[inst_18895] = inst_18898);
var inst_18903__$1 = (inst_18895 + (1));
var inst_18904 = (inst_18903__$1 < n);
var state_18930__$1 = (function (){var statearr_18956 = state_18930;
(statearr_18956[(12)] = inst_18902);

(statearr_18956[(11)] = inst_18903__$1);

return statearr_18956;
})();
if(cljs.core.truth_(inst_18904)){
var statearr_18957_19982 = state_18930__$1;
(statearr_18957_19982[(1)] = (8));

} else {
var statearr_18958_19983 = state_18930__$1;
(statearr_18958_19983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (14))){
var inst_18923 = (state_18930[(2)]);
var inst_18924 = cljs.core.async.close_BANG_(out);
var state_18930__$1 = (function (){var statearr_18960 = state_18930;
(statearr_18960[(13)] = inst_18923);

return statearr_18960;
})();
var statearr_18961_19985 = state_18930__$1;
(statearr_18961_19985[(2)] = inst_18924);

(statearr_18961_19985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (10))){
var inst_18914 = (state_18930[(2)]);
var state_18930__$1 = state_18930;
var statearr_18962_19986 = state_18930__$1;
(statearr_18962_19986[(2)] = inst_18914);

(statearr_18962_19986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18931 === (8))){
var inst_18903 = (state_18930[(11)]);
var inst_18894 = (state_18930[(7)]);
var tmp18959 = inst_18894;
var inst_18894__$1 = tmp18959;
var inst_18895 = inst_18903;
var state_18930__$1 = (function (){var statearr_18963 = state_18930;
(statearr_18963[(7)] = inst_18894__$1);

(statearr_18963[(8)] = inst_18895);

return statearr_18963;
})();
var statearr_18964_19987 = state_18930__$1;
(statearr_18964_19987[(2)] = null);

(statearr_18964_19987[(1)] = (2));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_18967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18967[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_18967[(1)] = (1));

return statearr_18967;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_18930){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_18930);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e18968){var ex__16859__auto__ = e18968;
var statearr_18969_19988 = state_18930;
(statearr_18969_19988[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_18930[(4)]))){
var statearr_18970_19989 = state_18930;
(statearr_18970_19989[(1)] = cljs.core.first((state_18930[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19990 = state_18930;
state_18930 = G__19990;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_18930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_18930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_18971 = f__16995__auto__();
(statearr_18971[(6)] = c__16994__auto___19971);

return statearr_18971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18973 = arguments.length;
switch (G__18973) {
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
var c__16994__auto___19992 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_19018){
var state_val_19019 = (state_19018[(1)]);
if((state_val_19019 === (7))){
var inst_19014 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19023_19993 = state_19018__$1;
(statearr_19023_19993[(2)] = inst_19014);

(statearr_19023_19993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (1))){
var inst_18974 = [];
var inst_18975 = inst_18974;
var inst_18976 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19018__$1 = (function (){var statearr_19024 = state_19018;
(statearr_19024[(7)] = inst_18976);

(statearr_19024[(8)] = inst_18975);

return statearr_19024;
})();
var statearr_19025_19994 = state_19018__$1;
(statearr_19025_19994[(2)] = null);

(statearr_19025_19994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (4))){
var inst_18979 = (state_19018[(9)]);
var inst_18979__$1 = (state_19018[(2)]);
var inst_18980 = (inst_18979__$1 == null);
var inst_18981 = cljs.core.not(inst_18980);
var state_19018__$1 = (function (){var statearr_19030 = state_19018;
(statearr_19030[(9)] = inst_18979__$1);

return statearr_19030;
})();
if(inst_18981){
var statearr_19035_19995 = state_19018__$1;
(statearr_19035_19995[(1)] = (5));

} else {
var statearr_19036_19996 = state_19018__$1;
(statearr_19036_19996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (15))){
var inst_18975 = (state_19018[(8)]);
var inst_19006 = cljs.core.vec(inst_18975);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19018__$1,(18),out,inst_19006);
} else {
if((state_val_19019 === (13))){
var inst_19001 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19037_19997 = state_19018__$1;
(statearr_19037_19997[(2)] = inst_19001);

(statearr_19037_19997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (6))){
var inst_18975 = (state_19018[(8)]);
var inst_19003 = inst_18975.length;
var inst_19004 = (inst_19003 > (0));
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_19004)){
var statearr_19038_19998 = state_19018__$1;
(statearr_19038_19998[(1)] = (15));

} else {
var statearr_19039_19999 = state_19018__$1;
(statearr_19039_19999[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (17))){
var inst_19011 = (state_19018[(2)]);
var inst_19012 = cljs.core.async.close_BANG_(out);
var state_19018__$1 = (function (){var statearr_19040 = state_19018;
(statearr_19040[(10)] = inst_19011);

return statearr_19040;
})();
var statearr_19043_20000 = state_19018__$1;
(statearr_19043_20000[(2)] = inst_19012);

(statearr_19043_20000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (3))){
var inst_19016 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19018__$1,inst_19016);
} else {
if((state_val_19019 === (12))){
var inst_18975 = (state_19018[(8)]);
var inst_18994 = cljs.core.vec(inst_18975);
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19018__$1,(14),out,inst_18994);
} else {
if((state_val_19019 === (2))){
var state_19018__$1 = state_19018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19018__$1,(4),ch);
} else {
if((state_val_19019 === (11))){
var inst_18975 = (state_19018[(8)]);
var inst_18983 = (state_19018[(11)]);
var inst_18979 = (state_19018[(9)]);
var inst_18991 = inst_18975.push(inst_18979);
var tmp19045 = inst_18975;
var inst_18975__$1 = tmp19045;
var inst_18976 = inst_18983;
var state_19018__$1 = (function (){var statearr_19051 = state_19018;
(statearr_19051[(7)] = inst_18976);

(statearr_19051[(8)] = inst_18975__$1);

(statearr_19051[(12)] = inst_18991);

return statearr_19051;
})();
var statearr_19052_20001 = state_19018__$1;
(statearr_19052_20001[(2)] = null);

(statearr_19052_20001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (9))){
var inst_18976 = (state_19018[(7)]);
var inst_18987 = cljs.core.keyword_identical_QMARK_(inst_18976,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19018__$1 = state_19018;
var statearr_19055_20002 = state_19018__$1;
(statearr_19055_20002[(2)] = inst_18987);

(statearr_19055_20002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (5))){
var inst_18976 = (state_19018[(7)]);
var inst_18984 = (state_19018[(13)]);
var inst_18983 = (state_19018[(11)]);
var inst_18979 = (state_19018[(9)]);
var inst_18983__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18979) : f.call(null,inst_18979));
var inst_18984__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18983__$1,inst_18976);
var state_19018__$1 = (function (){var statearr_19058 = state_19018;
(statearr_19058[(13)] = inst_18984__$1);

(statearr_19058[(11)] = inst_18983__$1);

return statearr_19058;
})();
if(inst_18984__$1){
var statearr_19059_20003 = state_19018__$1;
(statearr_19059_20003[(1)] = (8));

} else {
var statearr_19060_20004 = state_19018__$1;
(statearr_19060_20004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (14))){
var inst_18983 = (state_19018[(11)]);
var inst_18979 = (state_19018[(9)]);
var inst_18996 = (state_19018[(2)]);
var inst_18997 = [];
var inst_18998 = inst_18997.push(inst_18979);
var inst_18975 = inst_18997;
var inst_18976 = inst_18983;
var state_19018__$1 = (function (){var statearr_19064 = state_19018;
(statearr_19064[(7)] = inst_18976);

(statearr_19064[(14)] = inst_18996);

(statearr_19064[(8)] = inst_18975);

(statearr_19064[(15)] = inst_18998);

return statearr_19064;
})();
var statearr_19067_20009 = state_19018__$1;
(statearr_19067_20009[(2)] = null);

(statearr_19067_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (16))){
var state_19018__$1 = state_19018;
var statearr_19069_20010 = state_19018__$1;
(statearr_19069_20010[(2)] = null);

(statearr_19069_20010[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (10))){
var inst_18989 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
if(cljs.core.truth_(inst_18989)){
var statearr_19072_20011 = state_19018__$1;
(statearr_19072_20011[(1)] = (11));

} else {
var statearr_19075_20012 = state_19018__$1;
(statearr_19075_20012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (18))){
var inst_19008 = (state_19018[(2)]);
var state_19018__$1 = state_19018;
var statearr_19076_20013 = state_19018__$1;
(statearr_19076_20013[(2)] = inst_19008);

(statearr_19076_20013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19019 === (8))){
var inst_18984 = (state_19018[(13)]);
var state_19018__$1 = state_19018;
var statearr_19077_20014 = state_19018__$1;
(statearr_19077_20014[(2)] = inst_18984);

(statearr_19077_20014[(1)] = (10));


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
var cljs$core$async$state_machine__16856__auto__ = null;
var cljs$core$async$state_machine__16856__auto____0 = (function (){
var statearr_19080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19080[(0)] = cljs$core$async$state_machine__16856__auto__);

(statearr_19080[(1)] = (1));

return statearr_19080;
});
var cljs$core$async$state_machine__16856__auto____1 = (function (state_19018){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_19018);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e19081){var ex__16859__auto__ = e19081;
var statearr_19082_20015 = state_19018;
(statearr_19082_20015[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_19018[(4)]))){
var statearr_19083_20016 = state_19018;
(statearr_19083_20016[(1)] = cljs.core.first((state_19018[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20017 = state_19018;
state_19018 = G__20017;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
cljs$core$async$state_machine__16856__auto__ = function(state_19018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16856__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16856__auto____1.call(this,state_19018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16856__auto____0;
cljs$core$async$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16856__auto____1;
return cljs$core$async$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_19084 = f__16995__auto__();
(statearr_19084[(6)] = c__16994__auto___19992);

return statearr_19084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
