goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40070 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40070(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40071 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40071(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39403 = coll;
var G__39404 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39403,G__39404) : shadow.dom.lazy_native_coll_seq.call(null,G__39403,G__39404));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__39413 = arguments.length;
switch (G__39413) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39420 = arguments.length;
switch (G__39420) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39428 = arguments.length;
switch (G__39428) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39435 = arguments.length;
switch (G__39435) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39439 = arguments.length;
switch (G__39439) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39451 = arguments.length;
switch (G__39451) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39458){if((e39458 instanceof Object)){
var e = e39458;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39458;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39470 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39471 = null;
var count__39472 = (0);
var i__39473 = (0);
while(true){
if((i__39473 < count__39472)){
var el = chunk__39471.cljs$core$IIndexed$_nth$arity$2(null,i__39473);
var handler_40097__$1 = ((function (seq__39470,chunk__39471,count__39472,i__39473,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39470,chunk__39471,count__39472,i__39473,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40097__$1);


var G__40099 = seq__39470;
var G__40100 = chunk__39471;
var G__40101 = count__39472;
var G__40102 = (i__39473 + (1));
seq__39470 = G__40099;
chunk__39471 = G__40100;
count__39472 = G__40101;
i__39473 = G__40102;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39470);
if(temp__5735__auto__){
var seq__39470__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39470__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39470__$1);
var G__40105 = cljs.core.chunk_rest(seq__39470__$1);
var G__40106 = c__4556__auto__;
var G__40107 = cljs.core.count(c__4556__auto__);
var G__40108 = (0);
seq__39470 = G__40105;
chunk__39471 = G__40106;
count__39472 = G__40107;
i__39473 = G__40108;
continue;
} else {
var el = cljs.core.first(seq__39470__$1);
var handler_40109__$1 = ((function (seq__39470,chunk__39471,count__39472,i__39473,el,seq__39470__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39470,chunk__39471,count__39472,i__39473,el,seq__39470__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40109__$1);


var G__40110 = cljs.core.next(seq__39470__$1);
var G__40111 = null;
var G__40112 = (0);
var G__40113 = (0);
seq__39470 = G__40110;
chunk__39471 = G__40111;
count__39472 = G__40112;
i__39473 = G__40113;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__39484 = arguments.length;
switch (G__39484) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39491 = cljs.core.seq(events);
var chunk__39492 = null;
var count__39493 = (0);
var i__39494 = (0);
while(true){
if((i__39494 < count__39493)){
var vec__39507 = chunk__39492.cljs$core$IIndexed$_nth$arity$2(null,i__39494);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39507,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39507,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40119 = seq__39491;
var G__40120 = chunk__39492;
var G__40121 = count__39493;
var G__40122 = (i__39494 + (1));
seq__39491 = G__40119;
chunk__39492 = G__40120;
count__39493 = G__40121;
i__39494 = G__40122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39491);
if(temp__5735__auto__){
var seq__39491__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39491__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39491__$1);
var G__40125 = cljs.core.chunk_rest(seq__39491__$1);
var G__40126 = c__4556__auto__;
var G__40127 = cljs.core.count(c__4556__auto__);
var G__40128 = (0);
seq__39491 = G__40125;
chunk__39492 = G__40126;
count__39493 = G__40127;
i__39494 = G__40128;
continue;
} else {
var vec__39513 = cljs.core.first(seq__39491__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39513,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40130 = cljs.core.next(seq__39491__$1);
var G__40131 = null;
var G__40132 = (0);
var G__40133 = (0);
seq__39491 = G__40130;
chunk__39492 = G__40131;
count__39493 = G__40132;
i__39494 = G__40133;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__39520 = cljs.core.seq(styles);
var chunk__39521 = null;
var count__39522 = (0);
var i__39523 = (0);
while(true){
if((i__39523 < count__39522)){
var vec__39534 = chunk__39521.cljs$core$IIndexed$_nth$arity$2(null,i__39523);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39534,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40135 = seq__39520;
var G__40136 = chunk__39521;
var G__40137 = count__39522;
var G__40138 = (i__39523 + (1));
seq__39520 = G__40135;
chunk__39521 = G__40136;
count__39522 = G__40137;
i__39523 = G__40138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39520);
if(temp__5735__auto__){
var seq__39520__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39520__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39520__$1);
var G__40139 = cljs.core.chunk_rest(seq__39520__$1);
var G__40140 = c__4556__auto__;
var G__40141 = cljs.core.count(c__4556__auto__);
var G__40142 = (0);
seq__39520 = G__40139;
chunk__39521 = G__40140;
count__39522 = G__40141;
i__39523 = G__40142;
continue;
} else {
var vec__39540 = cljs.core.first(seq__39520__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40143 = cljs.core.next(seq__39520__$1);
var G__40144 = null;
var G__40145 = (0);
var G__40146 = (0);
seq__39520 = G__40143;
chunk__39521 = G__40144;
count__39522 = G__40145;
i__39523 = G__40146;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__39545_40147 = key;
var G__39545_40148__$1 = (((G__39545_40147 instanceof cljs.core.Keyword))?G__39545_40147.fqn:null);
switch (G__39545_40148__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_40152 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_40152,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_40152,"aria-");
}
})())){
el.setAttribute(ks_40152,value);
} else {
(el[ks_40152] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39572){
var map__39573 = p__39572;
var map__39573__$1 = (((((!((map__39573 == null))))?(((((map__39573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39573.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39573):map__39573);
var props = map__39573__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39573__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39578 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39578,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39578,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39578,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39581 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39581,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39581;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39586 = arguments.length;
switch (G__39586) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39591){
var vec__39593 = p__39591;
var seq__39594 = cljs.core.seq(vec__39593);
var first__39595 = cljs.core.first(seq__39594);
var seq__39594__$1 = cljs.core.next(seq__39594);
var nn = first__39595;
var first__39595__$1 = cljs.core.first(seq__39594__$1);
var seq__39594__$2 = cljs.core.next(seq__39594__$1);
var np = first__39595__$1;
var nc = seq__39594__$2;
var node = vec__39593;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39597 = nn;
var G__39598 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39597,G__39598) : create_fn.call(null,G__39597,G__39598));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39600 = nn;
var G__39601 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39600,G__39601) : create_fn.call(null,G__39600,G__39601));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39604 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39604,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39604,(1),null);
var seq__39608_40162 = cljs.core.seq(node_children);
var chunk__39609_40163 = null;
var count__39610_40164 = (0);
var i__39611_40165 = (0);
while(true){
if((i__39611_40165 < count__39610_40164)){
var child_struct_40166 = chunk__39609_40163.cljs$core$IIndexed$_nth$arity$2(null,i__39611_40165);
var children_40167 = shadow.dom.dom_node(child_struct_40166);
if(cljs.core.seq_QMARK_(children_40167)){
var seq__39638_40168 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40167));
var chunk__39640_40169 = null;
var count__39641_40170 = (0);
var i__39642_40171 = (0);
while(true){
if((i__39642_40171 < count__39641_40170)){
var child_40172 = chunk__39640_40169.cljs$core$IIndexed$_nth$arity$2(null,i__39642_40171);
if(cljs.core.truth_(child_40172)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40172);


var G__40173 = seq__39638_40168;
var G__40174 = chunk__39640_40169;
var G__40175 = count__39641_40170;
var G__40176 = (i__39642_40171 + (1));
seq__39638_40168 = G__40173;
chunk__39640_40169 = G__40174;
count__39641_40170 = G__40175;
i__39642_40171 = G__40176;
continue;
} else {
var G__40177 = seq__39638_40168;
var G__40178 = chunk__39640_40169;
var G__40179 = count__39641_40170;
var G__40180 = (i__39642_40171 + (1));
seq__39638_40168 = G__40177;
chunk__39640_40169 = G__40178;
count__39641_40170 = G__40179;
i__39642_40171 = G__40180;
continue;
}
} else {
var temp__5735__auto___40181 = cljs.core.seq(seq__39638_40168);
if(temp__5735__auto___40181){
var seq__39638_40182__$1 = temp__5735__auto___40181;
if(cljs.core.chunked_seq_QMARK_(seq__39638_40182__$1)){
var c__4556__auto___40183 = cljs.core.chunk_first(seq__39638_40182__$1);
var G__40184 = cljs.core.chunk_rest(seq__39638_40182__$1);
var G__40185 = c__4556__auto___40183;
var G__40186 = cljs.core.count(c__4556__auto___40183);
var G__40187 = (0);
seq__39638_40168 = G__40184;
chunk__39640_40169 = G__40185;
count__39641_40170 = G__40186;
i__39642_40171 = G__40187;
continue;
} else {
var child_40189 = cljs.core.first(seq__39638_40182__$1);
if(cljs.core.truth_(child_40189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40189);


var G__40191 = cljs.core.next(seq__39638_40182__$1);
var G__40192 = null;
var G__40193 = (0);
var G__40194 = (0);
seq__39638_40168 = G__40191;
chunk__39640_40169 = G__40192;
count__39641_40170 = G__40193;
i__39642_40171 = G__40194;
continue;
} else {
var G__40195 = cljs.core.next(seq__39638_40182__$1);
var G__40196 = null;
var G__40197 = (0);
var G__40198 = (0);
seq__39638_40168 = G__40195;
chunk__39640_40169 = G__40196;
count__39641_40170 = G__40197;
i__39642_40171 = G__40198;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40167);
}


var G__40199 = seq__39608_40162;
var G__40200 = chunk__39609_40163;
var G__40201 = count__39610_40164;
var G__40202 = (i__39611_40165 + (1));
seq__39608_40162 = G__40199;
chunk__39609_40163 = G__40200;
count__39610_40164 = G__40201;
i__39611_40165 = G__40202;
continue;
} else {
var temp__5735__auto___40203 = cljs.core.seq(seq__39608_40162);
if(temp__5735__auto___40203){
var seq__39608_40204__$1 = temp__5735__auto___40203;
if(cljs.core.chunked_seq_QMARK_(seq__39608_40204__$1)){
var c__4556__auto___40205 = cljs.core.chunk_first(seq__39608_40204__$1);
var G__40206 = cljs.core.chunk_rest(seq__39608_40204__$1);
var G__40207 = c__4556__auto___40205;
var G__40208 = cljs.core.count(c__4556__auto___40205);
var G__40209 = (0);
seq__39608_40162 = G__40206;
chunk__39609_40163 = G__40207;
count__39610_40164 = G__40208;
i__39611_40165 = G__40209;
continue;
} else {
var child_struct_40210 = cljs.core.first(seq__39608_40204__$1);
var children_40211 = shadow.dom.dom_node(child_struct_40210);
if(cljs.core.seq_QMARK_(children_40211)){
var seq__39646_40212 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40211));
var chunk__39648_40213 = null;
var count__39649_40214 = (0);
var i__39650_40215 = (0);
while(true){
if((i__39650_40215 < count__39649_40214)){
var child_40217 = chunk__39648_40213.cljs$core$IIndexed$_nth$arity$2(null,i__39650_40215);
if(cljs.core.truth_(child_40217)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40217);


var G__40218 = seq__39646_40212;
var G__40219 = chunk__39648_40213;
var G__40220 = count__39649_40214;
var G__40221 = (i__39650_40215 + (1));
seq__39646_40212 = G__40218;
chunk__39648_40213 = G__40219;
count__39649_40214 = G__40220;
i__39650_40215 = G__40221;
continue;
} else {
var G__40222 = seq__39646_40212;
var G__40223 = chunk__39648_40213;
var G__40224 = count__39649_40214;
var G__40225 = (i__39650_40215 + (1));
seq__39646_40212 = G__40222;
chunk__39648_40213 = G__40223;
count__39649_40214 = G__40224;
i__39650_40215 = G__40225;
continue;
}
} else {
var temp__5735__auto___40226__$1 = cljs.core.seq(seq__39646_40212);
if(temp__5735__auto___40226__$1){
var seq__39646_40227__$1 = temp__5735__auto___40226__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39646_40227__$1)){
var c__4556__auto___40228 = cljs.core.chunk_first(seq__39646_40227__$1);
var G__40229 = cljs.core.chunk_rest(seq__39646_40227__$1);
var G__40230 = c__4556__auto___40228;
var G__40231 = cljs.core.count(c__4556__auto___40228);
var G__40232 = (0);
seq__39646_40212 = G__40229;
chunk__39648_40213 = G__40230;
count__39649_40214 = G__40231;
i__39650_40215 = G__40232;
continue;
} else {
var child_40233 = cljs.core.first(seq__39646_40227__$1);
if(cljs.core.truth_(child_40233)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40233);


var G__40234 = cljs.core.next(seq__39646_40227__$1);
var G__40235 = null;
var G__40236 = (0);
var G__40237 = (0);
seq__39646_40212 = G__40234;
chunk__39648_40213 = G__40235;
count__39649_40214 = G__40236;
i__39650_40215 = G__40237;
continue;
} else {
var G__40238 = cljs.core.next(seq__39646_40227__$1);
var G__40239 = null;
var G__40240 = (0);
var G__40241 = (0);
seq__39646_40212 = G__40238;
chunk__39648_40213 = G__40239;
count__39649_40214 = G__40240;
i__39650_40215 = G__40241;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40211);
}


var G__40242 = cljs.core.next(seq__39608_40204__$1);
var G__40243 = null;
var G__40244 = (0);
var G__40245 = (0);
seq__39608_40162 = G__40242;
chunk__39609_40163 = G__40243;
count__39610_40164 = G__40244;
i__39611_40165 = G__40245;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39668 = cljs.core.seq(node);
var chunk__39669 = null;
var count__39670 = (0);
var i__39671 = (0);
while(true){
if((i__39671 < count__39670)){
var n = chunk__39669.cljs$core$IIndexed$_nth$arity$2(null,i__39671);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40252 = seq__39668;
var G__40253 = chunk__39669;
var G__40254 = count__39670;
var G__40255 = (i__39671 + (1));
seq__39668 = G__40252;
chunk__39669 = G__40253;
count__39670 = G__40254;
i__39671 = G__40255;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39668);
if(temp__5735__auto__){
var seq__39668__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39668__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39668__$1);
var G__40256 = cljs.core.chunk_rest(seq__39668__$1);
var G__40257 = c__4556__auto__;
var G__40258 = cljs.core.count(c__4556__auto__);
var G__40259 = (0);
seq__39668 = G__40256;
chunk__39669 = G__40257;
count__39670 = G__40258;
i__39671 = G__40259;
continue;
} else {
var n = cljs.core.first(seq__39668__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40260 = cljs.core.next(seq__39668__$1);
var G__40261 = null;
var G__40262 = (0);
var G__40263 = (0);
seq__39668 = G__40260;
chunk__39669 = G__40261;
count__39670 = G__40262;
i__39671 = G__40263;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39681 = arguments.length;
switch (G__39681) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__39685 = arguments.length;
switch (G__39685) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__39723 = arguments.length;
switch (G__39723) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40285 = arguments.length;
var i__4737__auto___40286 = (0);
while(true){
if((i__4737__auto___40286 < len__4736__auto___40285)){
args__4742__auto__.push((arguments[i__4737__auto___40286]));

var G__40287 = (i__4737__auto___40286 + (1));
i__4737__auto___40286 = G__40287;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39734_40289 = cljs.core.seq(nodes);
var chunk__39735_40290 = null;
var count__39736_40291 = (0);
var i__39737_40292 = (0);
while(true){
if((i__39737_40292 < count__39736_40291)){
var node_40293 = chunk__39735_40290.cljs$core$IIndexed$_nth$arity$2(null,i__39737_40292);
fragment.appendChild(shadow.dom._to_dom(node_40293));


var G__40294 = seq__39734_40289;
var G__40295 = chunk__39735_40290;
var G__40296 = count__39736_40291;
var G__40297 = (i__39737_40292 + (1));
seq__39734_40289 = G__40294;
chunk__39735_40290 = G__40295;
count__39736_40291 = G__40296;
i__39737_40292 = G__40297;
continue;
} else {
var temp__5735__auto___40298 = cljs.core.seq(seq__39734_40289);
if(temp__5735__auto___40298){
var seq__39734_40299__$1 = temp__5735__auto___40298;
if(cljs.core.chunked_seq_QMARK_(seq__39734_40299__$1)){
var c__4556__auto___40300 = cljs.core.chunk_first(seq__39734_40299__$1);
var G__40301 = cljs.core.chunk_rest(seq__39734_40299__$1);
var G__40302 = c__4556__auto___40300;
var G__40303 = cljs.core.count(c__4556__auto___40300);
var G__40304 = (0);
seq__39734_40289 = G__40301;
chunk__39735_40290 = G__40302;
count__39736_40291 = G__40303;
i__39737_40292 = G__40304;
continue;
} else {
var node_40306 = cljs.core.first(seq__39734_40299__$1);
fragment.appendChild(shadow.dom._to_dom(node_40306));


var G__40308 = cljs.core.next(seq__39734_40299__$1);
var G__40309 = null;
var G__40310 = (0);
var G__40311 = (0);
seq__39734_40289 = G__40308;
chunk__39735_40290 = G__40309;
count__39736_40291 = G__40310;
i__39737_40292 = G__40311;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39733){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39733));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39738_40313 = cljs.core.seq(scripts);
var chunk__39739_40314 = null;
var count__39740_40315 = (0);
var i__39741_40316 = (0);
while(true){
if((i__39741_40316 < count__39740_40315)){
var vec__39748_40317 = chunk__39739_40314.cljs$core$IIndexed$_nth$arity$2(null,i__39741_40316);
var script_tag_40318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39748_40317,(0),null);
var script_body_40319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39748_40317,(1),null);
eval(script_body_40319);


var G__40320 = seq__39738_40313;
var G__40321 = chunk__39739_40314;
var G__40322 = count__39740_40315;
var G__40323 = (i__39741_40316 + (1));
seq__39738_40313 = G__40320;
chunk__39739_40314 = G__40321;
count__39740_40315 = G__40322;
i__39741_40316 = G__40323;
continue;
} else {
var temp__5735__auto___40324 = cljs.core.seq(seq__39738_40313);
if(temp__5735__auto___40324){
var seq__39738_40325__$1 = temp__5735__auto___40324;
if(cljs.core.chunked_seq_QMARK_(seq__39738_40325__$1)){
var c__4556__auto___40326 = cljs.core.chunk_first(seq__39738_40325__$1);
var G__40327 = cljs.core.chunk_rest(seq__39738_40325__$1);
var G__40328 = c__4556__auto___40326;
var G__40329 = cljs.core.count(c__4556__auto___40326);
var G__40330 = (0);
seq__39738_40313 = G__40327;
chunk__39739_40314 = G__40328;
count__39740_40315 = G__40329;
i__39741_40316 = G__40330;
continue;
} else {
var vec__39751_40331 = cljs.core.first(seq__39738_40325__$1);
var script_tag_40332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751_40331,(0),null);
var script_body_40333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39751_40331,(1),null);
eval(script_body_40333);


var G__40334 = cljs.core.next(seq__39738_40325__$1);
var G__40335 = null;
var G__40336 = (0);
var G__40337 = (0);
seq__39738_40313 = G__40334;
chunk__39739_40314 = G__40335;
count__39740_40315 = G__40336;
i__39741_40316 = G__40337;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39754){
var vec__39756 = p__39754;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39756,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39756,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39797 = arguments.length;
switch (G__39797) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__39803 = cljs.core.seq(style_keys);
var chunk__39804 = null;
var count__39805 = (0);
var i__39806 = (0);
while(true){
if((i__39806 < count__39805)){
var it = chunk__39804.cljs$core$IIndexed$_nth$arity$2(null,i__39806);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40342 = seq__39803;
var G__40343 = chunk__39804;
var G__40344 = count__39805;
var G__40345 = (i__39806 + (1));
seq__39803 = G__40342;
chunk__39804 = G__40343;
count__39805 = G__40344;
i__39806 = G__40345;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39803);
if(temp__5735__auto__){
var seq__39803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39803__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39803__$1);
var G__40349 = cljs.core.chunk_rest(seq__39803__$1);
var G__40350 = c__4556__auto__;
var G__40351 = cljs.core.count(c__4556__auto__);
var G__40352 = (0);
seq__39803 = G__40349;
chunk__39804 = G__40350;
count__39805 = G__40351;
i__39806 = G__40352;
continue;
} else {
var it = cljs.core.first(seq__39803__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40353 = cljs.core.next(seq__39803__$1);
var G__40354 = null;
var G__40355 = (0);
var G__40356 = (0);
seq__39803 = G__40353;
chunk__39804 = G__40354;
count__39805 = G__40355;
i__39806 = G__40356;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k39810,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__39817 = k39810;
var G__39817__$1 = (((G__39817 instanceof cljs.core.Keyword))?G__39817.fqn:null);
switch (G__39817__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39810,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__39820){
var vec__39821 = p__39820;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39821,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39821,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39809){
var self__ = this;
var G__39809__$1 = this;
return (new cljs.core.RecordIter((0),G__39809__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39811,other39812){
var self__ = this;
var this39811__$1 = this;
return (((!((other39812 == null)))) && ((this39811__$1.constructor === other39812.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39811__$1.x,other39812.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39811__$1.y,other39812.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39811__$1.__extmap,other39812.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__39809){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__39830 = cljs.core.keyword_identical_QMARK_;
var expr__39831 = k__4388__auto__;
if(cljs.core.truth_((pred__39830.cljs$core$IFn$_invoke$arity$2 ? pred__39830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39831) : pred__39830.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39831)))){
return (new shadow.dom.Coordinate(G__39809,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39830.cljs$core$IFn$_invoke$arity$2 ? pred__39830.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39831) : pred__39830.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39831)))){
return (new shadow.dom.Coordinate(self__.x,G__39809,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__39809),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__39809){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39809,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39814){
var extmap__4419__auto__ = (function (){var G__39838 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39814,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39814)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39838);
} else {
return G__39838;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39814),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39814),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k39848,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__39856 = k39848;
var G__39856__$1 = (((G__39856 instanceof cljs.core.Keyword))?G__39856.fqn:null);
switch (G__39856__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39848,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__39858){
var vec__39860 = p__39858;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39860,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39860,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39847){
var self__ = this;
var G__39847__$1 = this;
return (new cljs.core.RecordIter((0),G__39847__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39849,other39850){
var self__ = this;
var this39849__$1 = this;
return (((!((other39850 == null)))) && ((this39849__$1.constructor === other39850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39849__$1.w,other39850.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39849__$1.h,other39850.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39849__$1.__extmap,other39850.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__39847){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__39872 = cljs.core.keyword_identical_QMARK_;
var expr__39873 = k__4388__auto__;
if(cljs.core.truth_((pred__39872.cljs$core$IFn$_invoke$arity$2 ? pred__39872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__39873) : pred__39872.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__39873)))){
return (new shadow.dom.Size(G__39847,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39872.cljs$core$IFn$_invoke$arity$2 ? pred__39872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__39873) : pred__39872.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__39873)))){
return (new shadow.dom.Size(self__.w,G__39847,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__39847),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__39847){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39847,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39852){
var extmap__4419__auto__ = (function (){var G__39914 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39852,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39914);
} else {
return G__39914;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39852),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39852),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__40379 = (i + (1));
var G__40380 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40379;
ret = G__40380;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39931){
var vec__39932 = p__39931;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39932,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39932,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39938 = arguments.length;
switch (G__39938) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__40382 = ps;
var G__40383 = (i + (1));
el__$1 = G__40382;
i = G__40383;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39944 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39944,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39944,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39944,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39947_40384 = cljs.core.seq(props);
var chunk__39948_40385 = null;
var count__39949_40386 = (0);
var i__39950_40387 = (0);
while(true){
if((i__39950_40387 < count__39949_40386)){
var vec__39957_40388 = chunk__39948_40385.cljs$core$IIndexed$_nth$arity$2(null,i__39950_40387);
var k_40389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39957_40388,(0),null);
var v_40390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39957_40388,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40389);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40389),v_40390);


var G__40391 = seq__39947_40384;
var G__40392 = chunk__39948_40385;
var G__40393 = count__39949_40386;
var G__40394 = (i__39950_40387 + (1));
seq__39947_40384 = G__40391;
chunk__39948_40385 = G__40392;
count__39949_40386 = G__40393;
i__39950_40387 = G__40394;
continue;
} else {
var temp__5735__auto___40395 = cljs.core.seq(seq__39947_40384);
if(temp__5735__auto___40395){
var seq__39947_40396__$1 = temp__5735__auto___40395;
if(cljs.core.chunked_seq_QMARK_(seq__39947_40396__$1)){
var c__4556__auto___40397 = cljs.core.chunk_first(seq__39947_40396__$1);
var G__40398 = cljs.core.chunk_rest(seq__39947_40396__$1);
var G__40399 = c__4556__auto___40397;
var G__40400 = cljs.core.count(c__4556__auto___40397);
var G__40401 = (0);
seq__39947_40384 = G__40398;
chunk__39948_40385 = G__40399;
count__39949_40386 = G__40400;
i__39950_40387 = G__40401;
continue;
} else {
var vec__39960_40402 = cljs.core.first(seq__39947_40396__$1);
var k_40403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39960_40402,(0),null);
var v_40404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39960_40402,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40403);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40403),v_40404);


var G__40405 = cljs.core.next(seq__39947_40396__$1);
var G__40406 = null;
var G__40407 = (0);
var G__40408 = (0);
seq__39947_40384 = G__40405;
chunk__39948_40385 = G__40406;
count__39949_40386 = G__40407;
i__39950_40387 = G__40408;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__39965 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39965,(1),null);
var seq__39969_40409 = cljs.core.seq(node_children);
var chunk__39971_40410 = null;
var count__39972_40411 = (0);
var i__39973_40412 = (0);
while(true){
if((i__39973_40412 < count__39972_40411)){
var child_struct_40413 = chunk__39971_40410.cljs$core$IIndexed$_nth$arity$2(null,i__39973_40412);
if((!((child_struct_40413 == null)))){
if(typeof child_struct_40413 === 'string'){
var text_40414 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40414),child_struct_40413].join(''));
} else {
var children_40415 = shadow.dom.svg_node(child_struct_40413);
if(cljs.core.seq_QMARK_(children_40415)){
var seq__40015_40417 = cljs.core.seq(children_40415);
var chunk__40017_40418 = null;
var count__40018_40419 = (0);
var i__40019_40420 = (0);
while(true){
if((i__40019_40420 < count__40018_40419)){
var child_40424 = chunk__40017_40418.cljs$core$IIndexed$_nth$arity$2(null,i__40019_40420);
if(cljs.core.truth_(child_40424)){
node.appendChild(child_40424);


var G__40425 = seq__40015_40417;
var G__40426 = chunk__40017_40418;
var G__40427 = count__40018_40419;
var G__40428 = (i__40019_40420 + (1));
seq__40015_40417 = G__40425;
chunk__40017_40418 = G__40426;
count__40018_40419 = G__40427;
i__40019_40420 = G__40428;
continue;
} else {
var G__40429 = seq__40015_40417;
var G__40430 = chunk__40017_40418;
var G__40431 = count__40018_40419;
var G__40432 = (i__40019_40420 + (1));
seq__40015_40417 = G__40429;
chunk__40017_40418 = G__40430;
count__40018_40419 = G__40431;
i__40019_40420 = G__40432;
continue;
}
} else {
var temp__5735__auto___40433 = cljs.core.seq(seq__40015_40417);
if(temp__5735__auto___40433){
var seq__40015_40434__$1 = temp__5735__auto___40433;
if(cljs.core.chunked_seq_QMARK_(seq__40015_40434__$1)){
var c__4556__auto___40435 = cljs.core.chunk_first(seq__40015_40434__$1);
var G__40436 = cljs.core.chunk_rest(seq__40015_40434__$1);
var G__40437 = c__4556__auto___40435;
var G__40438 = cljs.core.count(c__4556__auto___40435);
var G__40439 = (0);
seq__40015_40417 = G__40436;
chunk__40017_40418 = G__40437;
count__40018_40419 = G__40438;
i__40019_40420 = G__40439;
continue;
} else {
var child_40440 = cljs.core.first(seq__40015_40434__$1);
if(cljs.core.truth_(child_40440)){
node.appendChild(child_40440);


var G__40441 = cljs.core.next(seq__40015_40434__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40015_40417 = G__40441;
chunk__40017_40418 = G__40442;
count__40018_40419 = G__40443;
i__40019_40420 = G__40444;
continue;
} else {
var G__40445 = cljs.core.next(seq__40015_40434__$1);
var G__40446 = null;
var G__40447 = (0);
var G__40448 = (0);
seq__40015_40417 = G__40445;
chunk__40017_40418 = G__40446;
count__40018_40419 = G__40447;
i__40019_40420 = G__40448;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40415);
}
}


var G__40449 = seq__39969_40409;
var G__40450 = chunk__39971_40410;
var G__40451 = count__39972_40411;
var G__40452 = (i__39973_40412 + (1));
seq__39969_40409 = G__40449;
chunk__39971_40410 = G__40450;
count__39972_40411 = G__40451;
i__39973_40412 = G__40452;
continue;
} else {
var G__40453 = seq__39969_40409;
var G__40454 = chunk__39971_40410;
var G__40455 = count__39972_40411;
var G__40456 = (i__39973_40412 + (1));
seq__39969_40409 = G__40453;
chunk__39971_40410 = G__40454;
count__39972_40411 = G__40455;
i__39973_40412 = G__40456;
continue;
}
} else {
var temp__5735__auto___40457 = cljs.core.seq(seq__39969_40409);
if(temp__5735__auto___40457){
var seq__39969_40458__$1 = temp__5735__auto___40457;
if(cljs.core.chunked_seq_QMARK_(seq__39969_40458__$1)){
var c__4556__auto___40459 = cljs.core.chunk_first(seq__39969_40458__$1);
var G__40460 = cljs.core.chunk_rest(seq__39969_40458__$1);
var G__40461 = c__4556__auto___40459;
var G__40462 = cljs.core.count(c__4556__auto___40459);
var G__40463 = (0);
seq__39969_40409 = G__40460;
chunk__39971_40410 = G__40461;
count__39972_40411 = G__40462;
i__39973_40412 = G__40463;
continue;
} else {
var child_struct_40464 = cljs.core.first(seq__39969_40458__$1);
if((!((child_struct_40464 == null)))){
if(typeof child_struct_40464 === 'string'){
var text_40465 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40465),child_struct_40464].join(''));
} else {
var children_40466 = shadow.dom.svg_node(child_struct_40464);
if(cljs.core.seq_QMARK_(children_40466)){
var seq__40026_40467 = cljs.core.seq(children_40466);
var chunk__40028_40468 = null;
var count__40029_40469 = (0);
var i__40030_40470 = (0);
while(true){
if((i__40030_40470 < count__40029_40469)){
var child_40471 = chunk__40028_40468.cljs$core$IIndexed$_nth$arity$2(null,i__40030_40470);
if(cljs.core.truth_(child_40471)){
node.appendChild(child_40471);


var G__40472 = seq__40026_40467;
var G__40473 = chunk__40028_40468;
var G__40474 = count__40029_40469;
var G__40475 = (i__40030_40470 + (1));
seq__40026_40467 = G__40472;
chunk__40028_40468 = G__40473;
count__40029_40469 = G__40474;
i__40030_40470 = G__40475;
continue;
} else {
var G__40476 = seq__40026_40467;
var G__40477 = chunk__40028_40468;
var G__40478 = count__40029_40469;
var G__40479 = (i__40030_40470 + (1));
seq__40026_40467 = G__40476;
chunk__40028_40468 = G__40477;
count__40029_40469 = G__40478;
i__40030_40470 = G__40479;
continue;
}
} else {
var temp__5735__auto___40480__$1 = cljs.core.seq(seq__40026_40467);
if(temp__5735__auto___40480__$1){
var seq__40026_40481__$1 = temp__5735__auto___40480__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40026_40481__$1)){
var c__4556__auto___40482 = cljs.core.chunk_first(seq__40026_40481__$1);
var G__40483 = cljs.core.chunk_rest(seq__40026_40481__$1);
var G__40484 = c__4556__auto___40482;
var G__40485 = cljs.core.count(c__4556__auto___40482);
var G__40486 = (0);
seq__40026_40467 = G__40483;
chunk__40028_40468 = G__40484;
count__40029_40469 = G__40485;
i__40030_40470 = G__40486;
continue;
} else {
var child_40487 = cljs.core.first(seq__40026_40481__$1);
if(cljs.core.truth_(child_40487)){
node.appendChild(child_40487);


var G__40488 = cljs.core.next(seq__40026_40481__$1);
var G__40489 = null;
var G__40490 = (0);
var G__40491 = (0);
seq__40026_40467 = G__40488;
chunk__40028_40468 = G__40489;
count__40029_40469 = G__40490;
i__40030_40470 = G__40491;
continue;
} else {
var G__40492 = cljs.core.next(seq__40026_40481__$1);
var G__40493 = null;
var G__40494 = (0);
var G__40495 = (0);
seq__40026_40467 = G__40492;
chunk__40028_40468 = G__40493;
count__40029_40469 = G__40494;
i__40030_40470 = G__40495;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40466);
}
}


var G__40496 = cljs.core.next(seq__39969_40458__$1);
var G__40497 = null;
var G__40498 = (0);
var G__40499 = (0);
seq__39969_40409 = G__40496;
chunk__39971_40410 = G__40497;
count__39972_40411 = G__40498;
i__39973_40412 = G__40499;
continue;
} else {
var G__40500 = cljs.core.next(seq__39969_40458__$1);
var G__40501 = null;
var G__40502 = (0);
var G__40503 = (0);
seq__39969_40409 = G__40500;
chunk__39971_40410 = G__40501;
count__39972_40411 = G__40502;
i__39973_40412 = G__40503;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___40504 = arguments.length;
var i__4737__auto___40505 = (0);
while(true){
if((i__4737__auto___40505 < len__4736__auto___40504)){
args__4742__auto__.push((arguments[i__4737__auto___40505]));

var G__40506 = (i__4737__auto___40505 + (1));
i__4737__auto___40505 = G__40506;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40036){
var G__40037 = cljs.core.first(seq40036);
var seq40036__$1 = cljs.core.next(seq40036);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40037,seq40036__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40039 = arguments.length;
switch (G__40039) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__37274__auto___40510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37275__auto__ = (function (){var switch__37148__auto__ = (function (state_40047){
var state_val_40048 = (state_40047[(1)]);
if((state_val_40048 === (1))){
var state_40047__$1 = state_40047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40047__$1,(2),once_or_cleanup);
} else {
if((state_val_40048 === (2))){
var inst_40044 = (state_40047[(2)]);
var inst_40045 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40047__$1 = (function (){var statearr_40055 = state_40047;
(statearr_40055[(7)] = inst_40044);

return statearr_40055;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40047__$1,inst_40045);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37149__auto__ = null;
var shadow$dom$state_machine__37149__auto____0 = (function (){
var statearr_40056 = [null,null,null,null,null,null,null,null];
(statearr_40056[(0)] = shadow$dom$state_machine__37149__auto__);

(statearr_40056[(1)] = (1));

return statearr_40056;
});
var shadow$dom$state_machine__37149__auto____1 = (function (state_40047){
while(true){
var ret_value__37150__auto__ = (function (){try{while(true){
var result__37151__auto__ = switch__37148__auto__(state_40047);
if(cljs.core.keyword_identical_QMARK_(result__37151__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37151__auto__;
}
break;
}
}catch (e40058){var ex__37152__auto__ = e40058;
var statearr_40059_40512 = state_40047;
(statearr_40059_40512[(2)] = ex__37152__auto__);


if(cljs.core.seq((state_40047[(4)]))){
var statearr_40060_40513 = state_40047;
(statearr_40060_40513[(1)] = cljs.core.first((state_40047[(4)])));

} else {
throw ex__37152__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37150__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40514 = state_40047;
state_40047 = G__40514;
continue;
} else {
return ret_value__37150__auto__;
}
break;
}
});
shadow$dom$state_machine__37149__auto__ = function(state_40047){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37149__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37149__auto____1.call(this,state_40047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37149__auto____0;
shadow$dom$state_machine__37149__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37149__auto____1;
return shadow$dom$state_machine__37149__auto__;
})()
})();
var state__37276__auto__ = (function (){var statearr_40063 = f__37275__auto__();
(statearr_40063[(6)] = c__37274__auto___40510);

return statearr_40063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37276__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
