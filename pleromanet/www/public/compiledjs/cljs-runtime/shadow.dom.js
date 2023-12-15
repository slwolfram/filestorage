goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20018 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_20018(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20019 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_20019(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19047 = coll;
var G__19048 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19047,G__19048) : shadow.dom.lazy_native_coll_seq.call(null,G__19047,G__19048));
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
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
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
var G__19089 = arguments.length;
switch (G__19089) {
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
var G__19092 = arguments.length;
switch (G__19092) {
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
var G__19094 = arguments.length;
switch (G__19094) {
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
var G__19097 = arguments.length;
switch (G__19097) {
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
var G__19110 = arguments.length;
switch (G__19110) {
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
var G__19122 = arguments.length;
switch (G__19122) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e19129){if((e19129 instanceof Object)){
var e = e19129;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19129;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__19138 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19139 = null;
var count__19140 = (0);
var i__19141 = (0);
while(true){
if((i__19141 < count__19140)){
var el = chunk__19139.cljs$core$IIndexed$_nth$arity$2(null,i__19141);
var handler_20026__$1 = ((function (seq__19138,chunk__19139,count__19140,i__19141,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19138,chunk__19139,count__19140,i__19141,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20026__$1);


var G__20027 = seq__19138;
var G__20028 = chunk__19139;
var G__20029 = count__19140;
var G__20030 = (i__19141 + (1));
seq__19138 = G__20027;
chunk__19139 = G__20028;
count__19140 = G__20029;
i__19141 = G__20030;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19138);
if(temp__5804__auto__){
var seq__19138__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19138__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19138__$1);
var G__20031 = cljs.core.chunk_rest(seq__19138__$1);
var G__20032 = c__5568__auto__;
var G__20033 = cljs.core.count(c__5568__auto__);
var G__20034 = (0);
seq__19138 = G__20031;
chunk__19139 = G__20032;
count__19140 = G__20033;
i__19141 = G__20034;
continue;
} else {
var el = cljs.core.first(seq__19138__$1);
var handler_20035__$1 = ((function (seq__19138,chunk__19139,count__19140,i__19141,el,seq__19138__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19138,chunk__19139,count__19140,i__19141,el,seq__19138__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20035__$1);


var G__20036 = cljs.core.next(seq__19138__$1);
var G__20037 = null;
var G__20038 = (0);
var G__20039 = (0);
seq__19138 = G__20036;
chunk__19139 = G__20037;
count__19140 = G__20038;
i__19141 = G__20039;
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
var G__19155 = arguments.length;
switch (G__19155) {
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
var seq__19165 = cljs.core.seq(events);
var chunk__19166 = null;
var count__19167 = (0);
var i__19168 = (0);
while(true){
if((i__19168 < count__19167)){
var vec__19182 = chunk__19166.cljs$core$IIndexed$_nth$arity$2(null,i__19168);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19182,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19182,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20045 = seq__19165;
var G__20046 = chunk__19166;
var G__20047 = count__19167;
var G__20048 = (i__19168 + (1));
seq__19165 = G__20045;
chunk__19166 = G__20046;
count__19167 = G__20047;
i__19168 = G__20048;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19165);
if(temp__5804__auto__){
var seq__19165__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19165__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19165__$1);
var G__20049 = cljs.core.chunk_rest(seq__19165__$1);
var G__20050 = c__5568__auto__;
var G__20051 = cljs.core.count(c__5568__auto__);
var G__20052 = (0);
seq__19165 = G__20049;
chunk__19166 = G__20050;
count__19167 = G__20051;
i__19168 = G__20052;
continue;
} else {
var vec__19186 = cljs.core.first(seq__19165__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19186,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20053 = cljs.core.next(seq__19165__$1);
var G__20054 = null;
var G__20055 = (0);
var G__20056 = (0);
seq__19165 = G__20053;
chunk__19166 = G__20054;
count__19167 = G__20055;
i__19168 = G__20056;
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
var seq__19190 = cljs.core.seq(styles);
var chunk__19191 = null;
var count__19192 = (0);
var i__19193 = (0);
while(true){
if((i__19193 < count__19192)){
var vec__19209 = chunk__19191.cljs$core$IIndexed$_nth$arity$2(null,i__19193);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19209,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20057 = seq__19190;
var G__20058 = chunk__19191;
var G__20059 = count__19192;
var G__20060 = (i__19193 + (1));
seq__19190 = G__20057;
chunk__19191 = G__20058;
count__19192 = G__20059;
i__19193 = G__20060;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19190);
if(temp__5804__auto__){
var seq__19190__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19190__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19190__$1);
var G__20061 = cljs.core.chunk_rest(seq__19190__$1);
var G__20062 = c__5568__auto__;
var G__20063 = cljs.core.count(c__5568__auto__);
var G__20064 = (0);
seq__19190 = G__20061;
chunk__19191 = G__20062;
count__19192 = G__20063;
i__19193 = G__20064;
continue;
} else {
var vec__19215 = cljs.core.first(seq__19190__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19215,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20065 = cljs.core.next(seq__19190__$1);
var G__20066 = null;
var G__20067 = (0);
var G__20068 = (0);
seq__19190 = G__20065;
chunk__19191 = G__20066;
count__19192 = G__20067;
i__19193 = G__20068;
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
var G__19224_20070 = key;
var G__19224_20071__$1 = (((G__19224_20070 instanceof cljs.core.Keyword))?G__19224_20070.fqn:null);
switch (G__19224_20071__$1) {
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
var ks_20076 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20076,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20076,"aria-");
}
})())){
el.setAttribute(ks_20076,value);
} else {
(el[ks_20076] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19247){
var map__19249 = p__19247;
var map__19249__$1 = cljs.core.__destructure_map(map__19249);
var props = map__19249__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19249__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19251 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19251,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19255 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19255,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19255;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19260 = arguments.length;
switch (G__19260) {
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19265){
var vec__19267 = p__19265;
var seq__19268 = cljs.core.seq(vec__19267);
var first__19269 = cljs.core.first(seq__19268);
var seq__19268__$1 = cljs.core.next(seq__19268);
var nn = first__19269;
var first__19269__$1 = cljs.core.first(seq__19268__$1);
var seq__19268__$2 = cljs.core.next(seq__19268__$1);
var np = first__19269__$1;
var nc = seq__19268__$2;
var node = vec__19267;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19272 = nn;
var G__19273 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19272,G__19273) : create_fn.call(null,G__19272,G__19273));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19276 = nn;
var G__19277 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19276,G__19277) : create_fn.call(null,G__19276,G__19277));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19282 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19282,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19282,(1),null);
var seq__19286_20087 = cljs.core.seq(node_children);
var chunk__19287_20088 = null;
var count__19288_20089 = (0);
var i__19289_20090 = (0);
while(true){
if((i__19289_20090 < count__19288_20089)){
var child_struct_20091 = chunk__19287_20088.cljs$core$IIndexed$_nth$arity$2(null,i__19289_20090);
var children_20092 = shadow.dom.dom_node(child_struct_20091);
if(cljs.core.seq_QMARK_(children_20092)){
var seq__19332_20093 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20092));
var chunk__19334_20094 = null;
var count__19335_20095 = (0);
var i__19336_20096 = (0);
while(true){
if((i__19336_20096 < count__19335_20095)){
var child_20097 = chunk__19334_20094.cljs$core$IIndexed$_nth$arity$2(null,i__19336_20096);
if(cljs.core.truth_(child_20097)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20097);


var G__20098 = seq__19332_20093;
var G__20099 = chunk__19334_20094;
var G__20100 = count__19335_20095;
var G__20101 = (i__19336_20096 + (1));
seq__19332_20093 = G__20098;
chunk__19334_20094 = G__20099;
count__19335_20095 = G__20100;
i__19336_20096 = G__20101;
continue;
} else {
var G__20102 = seq__19332_20093;
var G__20103 = chunk__19334_20094;
var G__20104 = count__19335_20095;
var G__20105 = (i__19336_20096 + (1));
seq__19332_20093 = G__20102;
chunk__19334_20094 = G__20103;
count__19335_20095 = G__20104;
i__19336_20096 = G__20105;
continue;
}
} else {
var temp__5804__auto___20106 = cljs.core.seq(seq__19332_20093);
if(temp__5804__auto___20106){
var seq__19332_20107__$1 = temp__5804__auto___20106;
if(cljs.core.chunked_seq_QMARK_(seq__19332_20107__$1)){
var c__5568__auto___20108 = cljs.core.chunk_first(seq__19332_20107__$1);
var G__20109 = cljs.core.chunk_rest(seq__19332_20107__$1);
var G__20110 = c__5568__auto___20108;
var G__20111 = cljs.core.count(c__5568__auto___20108);
var G__20112 = (0);
seq__19332_20093 = G__20109;
chunk__19334_20094 = G__20110;
count__19335_20095 = G__20111;
i__19336_20096 = G__20112;
continue;
} else {
var child_20113 = cljs.core.first(seq__19332_20107__$1);
if(cljs.core.truth_(child_20113)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20113);


var G__20114 = cljs.core.next(seq__19332_20107__$1);
var G__20115 = null;
var G__20116 = (0);
var G__20117 = (0);
seq__19332_20093 = G__20114;
chunk__19334_20094 = G__20115;
count__19335_20095 = G__20116;
i__19336_20096 = G__20117;
continue;
} else {
var G__20118 = cljs.core.next(seq__19332_20107__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__19332_20093 = G__20118;
chunk__19334_20094 = G__20119;
count__19335_20095 = G__20120;
i__19336_20096 = G__20121;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20092);
}


var G__20122 = seq__19286_20087;
var G__20123 = chunk__19287_20088;
var G__20124 = count__19288_20089;
var G__20125 = (i__19289_20090 + (1));
seq__19286_20087 = G__20122;
chunk__19287_20088 = G__20123;
count__19288_20089 = G__20124;
i__19289_20090 = G__20125;
continue;
} else {
var temp__5804__auto___20126 = cljs.core.seq(seq__19286_20087);
if(temp__5804__auto___20126){
var seq__19286_20127__$1 = temp__5804__auto___20126;
if(cljs.core.chunked_seq_QMARK_(seq__19286_20127__$1)){
var c__5568__auto___20128 = cljs.core.chunk_first(seq__19286_20127__$1);
var G__20129 = cljs.core.chunk_rest(seq__19286_20127__$1);
var G__20130 = c__5568__auto___20128;
var G__20131 = cljs.core.count(c__5568__auto___20128);
var G__20132 = (0);
seq__19286_20087 = G__20129;
chunk__19287_20088 = G__20130;
count__19288_20089 = G__20131;
i__19289_20090 = G__20132;
continue;
} else {
var child_struct_20133 = cljs.core.first(seq__19286_20127__$1);
var children_20134 = shadow.dom.dom_node(child_struct_20133);
if(cljs.core.seq_QMARK_(children_20134)){
var seq__19354_20135 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20134));
var chunk__19356_20136 = null;
var count__19357_20137 = (0);
var i__19358_20138 = (0);
while(true){
if((i__19358_20138 < count__19357_20137)){
var child_20139 = chunk__19356_20136.cljs$core$IIndexed$_nth$arity$2(null,i__19358_20138);
if(cljs.core.truth_(child_20139)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20139);


var G__20140 = seq__19354_20135;
var G__20141 = chunk__19356_20136;
var G__20142 = count__19357_20137;
var G__20143 = (i__19358_20138 + (1));
seq__19354_20135 = G__20140;
chunk__19356_20136 = G__20141;
count__19357_20137 = G__20142;
i__19358_20138 = G__20143;
continue;
} else {
var G__20146 = seq__19354_20135;
var G__20147 = chunk__19356_20136;
var G__20148 = count__19357_20137;
var G__20149 = (i__19358_20138 + (1));
seq__19354_20135 = G__20146;
chunk__19356_20136 = G__20147;
count__19357_20137 = G__20148;
i__19358_20138 = G__20149;
continue;
}
} else {
var temp__5804__auto___20150__$1 = cljs.core.seq(seq__19354_20135);
if(temp__5804__auto___20150__$1){
var seq__19354_20151__$1 = temp__5804__auto___20150__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19354_20151__$1)){
var c__5568__auto___20152 = cljs.core.chunk_first(seq__19354_20151__$1);
var G__20153 = cljs.core.chunk_rest(seq__19354_20151__$1);
var G__20154 = c__5568__auto___20152;
var G__20155 = cljs.core.count(c__5568__auto___20152);
var G__20156 = (0);
seq__19354_20135 = G__20153;
chunk__19356_20136 = G__20154;
count__19357_20137 = G__20155;
i__19358_20138 = G__20156;
continue;
} else {
var child_20157 = cljs.core.first(seq__19354_20151__$1);
if(cljs.core.truth_(child_20157)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20157);


var G__20158 = cljs.core.next(seq__19354_20151__$1);
var G__20159 = null;
var G__20160 = (0);
var G__20161 = (0);
seq__19354_20135 = G__20158;
chunk__19356_20136 = G__20159;
count__19357_20137 = G__20160;
i__19358_20138 = G__20161;
continue;
} else {
var G__20162 = cljs.core.next(seq__19354_20151__$1);
var G__20163 = null;
var G__20164 = (0);
var G__20165 = (0);
seq__19354_20135 = G__20162;
chunk__19356_20136 = G__20163;
count__19357_20137 = G__20164;
i__19358_20138 = G__20165;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20134);
}


var G__20168 = cljs.core.next(seq__19286_20127__$1);
var G__20169 = null;
var G__20170 = (0);
var G__20171 = (0);
seq__19286_20087 = G__20168;
chunk__19287_20088 = G__20169;
count__19288_20089 = G__20170;
i__19289_20090 = G__20171;
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
var seq__19384 = cljs.core.seq(node);
var chunk__19385 = null;
var count__19386 = (0);
var i__19387 = (0);
while(true){
if((i__19387 < count__19386)){
var n = chunk__19385.cljs$core$IIndexed$_nth$arity$2(null,i__19387);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20175 = seq__19384;
var G__20176 = chunk__19385;
var G__20177 = count__19386;
var G__20178 = (i__19387 + (1));
seq__19384 = G__20175;
chunk__19385 = G__20176;
count__19386 = G__20177;
i__19387 = G__20178;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19384);
if(temp__5804__auto__){
var seq__19384__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19384__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19384__$1);
var G__20180 = cljs.core.chunk_rest(seq__19384__$1);
var G__20181 = c__5568__auto__;
var G__20182 = cljs.core.count(c__5568__auto__);
var G__20183 = (0);
seq__19384 = G__20180;
chunk__19385 = G__20181;
count__19386 = G__20182;
i__19387 = G__20183;
continue;
} else {
var n = cljs.core.first(seq__19384__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20184 = cljs.core.next(seq__19384__$1);
var G__20185 = null;
var G__20186 = (0);
var G__20187 = (0);
seq__19384 = G__20184;
chunk__19385 = G__20185;
count__19386 = G__20186;
i__19387 = G__20187;
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
var G__19400 = arguments.length;
switch (G__19400) {
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
var G__19408 = arguments.length;
switch (G__19408) {
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
var G__19422 = arguments.length;
switch (G__19422) {
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
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
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
var args__5775__auto__ = [];
var len__5769__auto___20208 = arguments.length;
var i__5770__auto___20209 = (0);
while(true){
if((i__5770__auto___20209 < len__5769__auto___20208)){
args__5775__auto__.push((arguments[i__5770__auto___20209]));

var G__20215 = (i__5770__auto___20209 + (1));
i__5770__auto___20209 = G__20215;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__19467_20219 = cljs.core.seq(nodes);
var chunk__19468_20220 = null;
var count__19469_20221 = (0);
var i__19470_20222 = (0);
while(true){
if((i__19470_20222 < count__19469_20221)){
var node_20227 = chunk__19468_20220.cljs$core$IIndexed$_nth$arity$2(null,i__19470_20222);
fragment.appendChild(shadow.dom._to_dom(node_20227));


var G__20232 = seq__19467_20219;
var G__20233 = chunk__19468_20220;
var G__20234 = count__19469_20221;
var G__20235 = (i__19470_20222 + (1));
seq__19467_20219 = G__20232;
chunk__19468_20220 = G__20233;
count__19469_20221 = G__20234;
i__19470_20222 = G__20235;
continue;
} else {
var temp__5804__auto___20237 = cljs.core.seq(seq__19467_20219);
if(temp__5804__auto___20237){
var seq__19467_20242__$1 = temp__5804__auto___20237;
if(cljs.core.chunked_seq_QMARK_(seq__19467_20242__$1)){
var c__5568__auto___20244 = cljs.core.chunk_first(seq__19467_20242__$1);
var G__20246 = cljs.core.chunk_rest(seq__19467_20242__$1);
var G__20247 = c__5568__auto___20244;
var G__20248 = cljs.core.count(c__5568__auto___20244);
var G__20249 = (0);
seq__19467_20219 = G__20246;
chunk__19468_20220 = G__20247;
count__19469_20221 = G__20248;
i__19470_20222 = G__20249;
continue;
} else {
var node_20251 = cljs.core.first(seq__19467_20242__$1);
fragment.appendChild(shadow.dom._to_dom(node_20251));


var G__20256 = cljs.core.next(seq__19467_20242__$1);
var G__20257 = null;
var G__20258 = (0);
var G__20259 = (0);
seq__19467_20219 = G__20256;
chunk__19468_20220 = G__20257;
count__19469_20221 = G__20258;
i__19470_20222 = G__20259;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19464){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19464));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19476_20265 = cljs.core.seq(scripts);
var chunk__19478_20266 = null;
var count__19479_20267 = (0);
var i__19480_20268 = (0);
while(true){
if((i__19480_20268 < count__19479_20267)){
var vec__19499_20269 = chunk__19478_20266.cljs$core$IIndexed$_nth$arity$2(null,i__19480_20268);
var script_tag_20270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19499_20269,(0),null);
var script_body_20271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19499_20269,(1),null);
eval(script_body_20271);


var G__20273 = seq__19476_20265;
var G__20274 = chunk__19478_20266;
var G__20275 = count__19479_20267;
var G__20276 = (i__19480_20268 + (1));
seq__19476_20265 = G__20273;
chunk__19478_20266 = G__20274;
count__19479_20267 = G__20275;
i__19480_20268 = G__20276;
continue;
} else {
var temp__5804__auto___20277 = cljs.core.seq(seq__19476_20265);
if(temp__5804__auto___20277){
var seq__19476_20278__$1 = temp__5804__auto___20277;
if(cljs.core.chunked_seq_QMARK_(seq__19476_20278__$1)){
var c__5568__auto___20279 = cljs.core.chunk_first(seq__19476_20278__$1);
var G__20280 = cljs.core.chunk_rest(seq__19476_20278__$1);
var G__20281 = c__5568__auto___20279;
var G__20282 = cljs.core.count(c__5568__auto___20279);
var G__20283 = (0);
seq__19476_20265 = G__20280;
chunk__19478_20266 = G__20281;
count__19479_20267 = G__20282;
i__19480_20268 = G__20283;
continue;
} else {
var vec__19502_20284 = cljs.core.first(seq__19476_20278__$1);
var script_tag_20285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19502_20284,(0),null);
var script_body_20286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19502_20284,(1),null);
eval(script_body_20286);


var G__20287 = cljs.core.next(seq__19476_20278__$1);
var G__20288 = null;
var G__20289 = (0);
var G__20290 = (0);
seq__19476_20265 = G__20287;
chunk__19478_20266 = G__20288;
count__19479_20267 = G__20289;
i__19480_20268 = G__20290;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19505){
var vec__19506 = p__19505;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19506,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19506,(1),null);
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
var G__19514 = arguments.length;
switch (G__19514) {
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
var seq__19520 = cljs.core.seq(style_keys);
var chunk__19521 = null;
var count__19522 = (0);
var i__19523 = (0);
while(true){
if((i__19523 < count__19522)){
var it = chunk__19521.cljs$core$IIndexed$_nth$arity$2(null,i__19523);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20298 = seq__19520;
var G__20299 = chunk__19521;
var G__20300 = count__19522;
var G__20301 = (i__19523 + (1));
seq__19520 = G__20298;
chunk__19521 = G__20299;
count__19522 = G__20300;
i__19523 = G__20301;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19520);
if(temp__5804__auto__){
var seq__19520__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19520__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19520__$1);
var G__20303 = cljs.core.chunk_rest(seq__19520__$1);
var G__20304 = c__5568__auto__;
var G__20305 = cljs.core.count(c__5568__auto__);
var G__20306 = (0);
seq__19520 = G__20303;
chunk__19521 = G__20304;
count__19522 = G__20305;
i__19523 = G__20306;
continue;
} else {
var it = cljs.core.first(seq__19520__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20308 = cljs.core.next(seq__19520__$1);
var G__20310 = null;
var G__20311 = (0);
var G__20312 = (0);
seq__19520 = G__20308;
chunk__19521 = G__20310;
count__19522 = G__20311;
i__19523 = G__20312;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19526,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19549 = k19526;
var G__19549__$1 = (((G__19549 instanceof cljs.core.Keyword))?G__19549.fqn:null);
switch (G__19549__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19526,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19551){
var vec__19552 = p__19551;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19552,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19525){
var self__ = this;
var G__19525__$1 = this;
return (new cljs.core.RecordIter((0),G__19525__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19527,other19528){
var self__ = this;
var this19527__$1 = this;
return (((!((other19528 == null)))) && ((((this19527__$1.constructor === other19528.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19527__$1.x,other19528.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19527__$1.y,other19528.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19527__$1.__extmap,other19528.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19526){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19596 = k19526;
var G__19596__$1 = (((G__19596 instanceof cljs.core.Keyword))?G__19596.fqn:null);
switch (G__19596__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19526);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19525){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19600 = cljs.core.keyword_identical_QMARK_;
var expr__19601 = k__5352__auto__;
if(cljs.core.truth_((pred__19600.cljs$core$IFn$_invoke$arity$2 ? pred__19600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__19601) : pred__19600.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__19601)))){
return (new shadow.dom.Coordinate(G__19525,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19600.cljs$core$IFn$_invoke$arity$2 ? pred__19600.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__19601) : pred__19600.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__19601)))){
return (new shadow.dom.Coordinate(self__.x,G__19525,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19525),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19525){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__19525,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__19545){
var extmap__5385__auto__ = (function (){var G__19612 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19545,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__19545)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19612);
} else {
return G__19612;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__19545),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__19545),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19626,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19633 = k19626;
var G__19633__$1 = (((G__19633 instanceof cljs.core.Keyword))?G__19633.fqn:null);
switch (G__19633__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19626,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19637){
var vec__19638 = p__19637;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19638,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19638,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19625){
var self__ = this;
var G__19625__$1 = this;
return (new cljs.core.RecordIter((0),G__19625__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19627,other19628){
var self__ = this;
var this19627__$1 = this;
return (((!((other19628 == null)))) && ((((this19627__$1.constructor === other19628.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19627__$1.w,other19628.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19627__$1.h,other19628.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19627__$1.__extmap,other19628.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19626){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19666 = k19626;
var G__19666__$1 = (((G__19666 instanceof cljs.core.Keyword))?G__19666.fqn:null);
switch (G__19666__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19626);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19625){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19668 = cljs.core.keyword_identical_QMARK_;
var expr__19669 = k__5352__auto__;
if(cljs.core.truth_((pred__19668.cljs$core$IFn$_invoke$arity$2 ? pred__19668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__19669) : pred__19668.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__19669)))){
return (new shadow.dom.Size(G__19625,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19668.cljs$core$IFn$_invoke$arity$2 ? pred__19668.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__19669) : pred__19668.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__19669)))){
return (new shadow.dom.Size(self__.w,G__19625,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19625),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19625){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__19625,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__19630){
var extmap__5385__auto__ = (function (){var G__19687 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19630,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__19630)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19687);
} else {
return G__19687;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__19630),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__19630),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__20354 = (i + (1));
var G__20355 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20354;
ret = G__20355;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19725){
var vec__19726 = p__19725;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19726,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__19739 = arguments.length;
switch (G__19739) {
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
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
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
var G__20357 = ps;
var G__20358 = (i + (1));
el__$1 = G__20357;
i = G__20358;
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
var vec__19778 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19778,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__19784_20360 = cljs.core.seq(props);
var chunk__19785_20361 = null;
var count__19786_20362 = (0);
var i__19787_20363 = (0);
while(true){
if((i__19787_20363 < count__19786_20362)){
var vec__19823_20364 = chunk__19785_20361.cljs$core$IIndexed$_nth$arity$2(null,i__19787_20363);
var k_20365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19823_20364,(0),null);
var v_20366 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19823_20364,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20365);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20365),v_20366);


var G__20367 = seq__19784_20360;
var G__20368 = chunk__19785_20361;
var G__20369 = count__19786_20362;
var G__20370 = (i__19787_20363 + (1));
seq__19784_20360 = G__20367;
chunk__19785_20361 = G__20368;
count__19786_20362 = G__20369;
i__19787_20363 = G__20370;
continue;
} else {
var temp__5804__auto___20371 = cljs.core.seq(seq__19784_20360);
if(temp__5804__auto___20371){
var seq__19784_20372__$1 = temp__5804__auto___20371;
if(cljs.core.chunked_seq_QMARK_(seq__19784_20372__$1)){
var c__5568__auto___20373 = cljs.core.chunk_first(seq__19784_20372__$1);
var G__20374 = cljs.core.chunk_rest(seq__19784_20372__$1);
var G__20375 = c__5568__auto___20373;
var G__20376 = cljs.core.count(c__5568__auto___20373);
var G__20377 = (0);
seq__19784_20360 = G__20374;
chunk__19785_20361 = G__20375;
count__19786_20362 = G__20376;
i__19787_20363 = G__20377;
continue;
} else {
var vec__19832_20378 = cljs.core.first(seq__19784_20372__$1);
var k_20379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832_20378,(0),null);
var v_20380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19832_20378,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20379);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20379),v_20380);


var G__20384 = cljs.core.next(seq__19784_20372__$1);
var G__20385 = null;
var G__20386 = (0);
var G__20387 = (0);
seq__19784_20360 = G__20384;
chunk__19785_20361 = G__20385;
count__19786_20362 = G__20386;
i__19787_20363 = G__20387;
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
var vec__19849 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19849,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19849,(1),null);
var seq__19853_20388 = cljs.core.seq(node_children);
var chunk__19855_20389 = null;
var count__19856_20390 = (0);
var i__19857_20391 = (0);
while(true){
if((i__19857_20391 < count__19856_20390)){
var child_struct_20392 = chunk__19855_20389.cljs$core$IIndexed$_nth$arity$2(null,i__19857_20391);
if((!((child_struct_20392 == null)))){
if(typeof child_struct_20392 === 'string'){
var text_20393 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20393),child_struct_20392].join(''));
} else {
var children_20398 = shadow.dom.svg_node(child_struct_20392);
if(cljs.core.seq_QMARK_(children_20398)){
var seq__19936_20399 = cljs.core.seq(children_20398);
var chunk__19938_20400 = null;
var count__19939_20401 = (0);
var i__19940_20402 = (0);
while(true){
if((i__19940_20402 < count__19939_20401)){
var child_20403 = chunk__19938_20400.cljs$core$IIndexed$_nth$arity$2(null,i__19940_20402);
if(cljs.core.truth_(child_20403)){
node.appendChild(child_20403);


var G__20404 = seq__19936_20399;
var G__20405 = chunk__19938_20400;
var G__20406 = count__19939_20401;
var G__20407 = (i__19940_20402 + (1));
seq__19936_20399 = G__20404;
chunk__19938_20400 = G__20405;
count__19939_20401 = G__20406;
i__19940_20402 = G__20407;
continue;
} else {
var G__20408 = seq__19936_20399;
var G__20409 = chunk__19938_20400;
var G__20410 = count__19939_20401;
var G__20411 = (i__19940_20402 + (1));
seq__19936_20399 = G__20408;
chunk__19938_20400 = G__20409;
count__19939_20401 = G__20410;
i__19940_20402 = G__20411;
continue;
}
} else {
var temp__5804__auto___20412 = cljs.core.seq(seq__19936_20399);
if(temp__5804__auto___20412){
var seq__19936_20413__$1 = temp__5804__auto___20412;
if(cljs.core.chunked_seq_QMARK_(seq__19936_20413__$1)){
var c__5568__auto___20414 = cljs.core.chunk_first(seq__19936_20413__$1);
var G__20415 = cljs.core.chunk_rest(seq__19936_20413__$1);
var G__20416 = c__5568__auto___20414;
var G__20417 = cljs.core.count(c__5568__auto___20414);
var G__20418 = (0);
seq__19936_20399 = G__20415;
chunk__19938_20400 = G__20416;
count__19939_20401 = G__20417;
i__19940_20402 = G__20418;
continue;
} else {
var child_20419 = cljs.core.first(seq__19936_20413__$1);
if(cljs.core.truth_(child_20419)){
node.appendChild(child_20419);


var G__20420 = cljs.core.next(seq__19936_20413__$1);
var G__20421 = null;
var G__20422 = (0);
var G__20423 = (0);
seq__19936_20399 = G__20420;
chunk__19938_20400 = G__20421;
count__19939_20401 = G__20422;
i__19940_20402 = G__20423;
continue;
} else {
var G__20424 = cljs.core.next(seq__19936_20413__$1);
var G__20425 = null;
var G__20426 = (0);
var G__20427 = (0);
seq__19936_20399 = G__20424;
chunk__19938_20400 = G__20425;
count__19939_20401 = G__20426;
i__19940_20402 = G__20427;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20398);
}
}


var G__20428 = seq__19853_20388;
var G__20429 = chunk__19855_20389;
var G__20430 = count__19856_20390;
var G__20431 = (i__19857_20391 + (1));
seq__19853_20388 = G__20428;
chunk__19855_20389 = G__20429;
count__19856_20390 = G__20430;
i__19857_20391 = G__20431;
continue;
} else {
var G__20432 = seq__19853_20388;
var G__20433 = chunk__19855_20389;
var G__20434 = count__19856_20390;
var G__20435 = (i__19857_20391 + (1));
seq__19853_20388 = G__20432;
chunk__19855_20389 = G__20433;
count__19856_20390 = G__20434;
i__19857_20391 = G__20435;
continue;
}
} else {
var temp__5804__auto___20436 = cljs.core.seq(seq__19853_20388);
if(temp__5804__auto___20436){
var seq__19853_20437__$1 = temp__5804__auto___20436;
if(cljs.core.chunked_seq_QMARK_(seq__19853_20437__$1)){
var c__5568__auto___20438 = cljs.core.chunk_first(seq__19853_20437__$1);
var G__20439 = cljs.core.chunk_rest(seq__19853_20437__$1);
var G__20440 = c__5568__auto___20438;
var G__20441 = cljs.core.count(c__5568__auto___20438);
var G__20442 = (0);
seq__19853_20388 = G__20439;
chunk__19855_20389 = G__20440;
count__19856_20390 = G__20441;
i__19857_20391 = G__20442;
continue;
} else {
var child_struct_20443 = cljs.core.first(seq__19853_20437__$1);
if((!((child_struct_20443 == null)))){
if(typeof child_struct_20443 === 'string'){
var text_20444 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20444),child_struct_20443].join(''));
} else {
var children_20445 = shadow.dom.svg_node(child_struct_20443);
if(cljs.core.seq_QMARK_(children_20445)){
var seq__19964_20446 = cljs.core.seq(children_20445);
var chunk__19966_20447 = null;
var count__19967_20448 = (0);
var i__19968_20449 = (0);
while(true){
if((i__19968_20449 < count__19967_20448)){
var child_20450 = chunk__19966_20447.cljs$core$IIndexed$_nth$arity$2(null,i__19968_20449);
if(cljs.core.truth_(child_20450)){
node.appendChild(child_20450);


var G__20451 = seq__19964_20446;
var G__20452 = chunk__19966_20447;
var G__20453 = count__19967_20448;
var G__20454 = (i__19968_20449 + (1));
seq__19964_20446 = G__20451;
chunk__19966_20447 = G__20452;
count__19967_20448 = G__20453;
i__19968_20449 = G__20454;
continue;
} else {
var G__20455 = seq__19964_20446;
var G__20456 = chunk__19966_20447;
var G__20457 = count__19967_20448;
var G__20458 = (i__19968_20449 + (1));
seq__19964_20446 = G__20455;
chunk__19966_20447 = G__20456;
count__19967_20448 = G__20457;
i__19968_20449 = G__20458;
continue;
}
} else {
var temp__5804__auto___20459__$1 = cljs.core.seq(seq__19964_20446);
if(temp__5804__auto___20459__$1){
var seq__19964_20460__$1 = temp__5804__auto___20459__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19964_20460__$1)){
var c__5568__auto___20461 = cljs.core.chunk_first(seq__19964_20460__$1);
var G__20462 = cljs.core.chunk_rest(seq__19964_20460__$1);
var G__20463 = c__5568__auto___20461;
var G__20464 = cljs.core.count(c__5568__auto___20461);
var G__20465 = (0);
seq__19964_20446 = G__20462;
chunk__19966_20447 = G__20463;
count__19967_20448 = G__20464;
i__19968_20449 = G__20465;
continue;
} else {
var child_20466 = cljs.core.first(seq__19964_20460__$1);
if(cljs.core.truth_(child_20466)){
node.appendChild(child_20466);


var G__20467 = cljs.core.next(seq__19964_20460__$1);
var G__20468 = null;
var G__20469 = (0);
var G__20470 = (0);
seq__19964_20446 = G__20467;
chunk__19966_20447 = G__20468;
count__19967_20448 = G__20469;
i__19968_20449 = G__20470;
continue;
} else {
var G__20471 = cljs.core.next(seq__19964_20460__$1);
var G__20472 = null;
var G__20473 = (0);
var G__20474 = (0);
seq__19964_20446 = G__20471;
chunk__19966_20447 = G__20472;
count__19967_20448 = G__20473;
i__19968_20449 = G__20474;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20445);
}
}


var G__20475 = cljs.core.next(seq__19853_20437__$1);
var G__20476 = null;
var G__20477 = (0);
var G__20478 = (0);
seq__19853_20388 = G__20475;
chunk__19855_20389 = G__20476;
count__19856_20390 = G__20477;
i__19857_20391 = G__20478;
continue;
} else {
var G__20479 = cljs.core.next(seq__19853_20437__$1);
var G__20480 = null;
var G__20481 = (0);
var G__20482 = (0);
seq__19853_20388 = G__20479;
chunk__19855_20389 = G__20480;
count__19856_20390 = G__20481;
i__19857_20391 = G__20482;
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
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
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

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20483 = arguments.length;
var i__5770__auto___20484 = (0);
while(true){
if((i__5770__auto___20484 < len__5769__auto___20483)){
args__5775__auto__.push((arguments[i__5770__auto___20484]));

var G__20485 = (i__5770__auto___20484 + (1));
i__5770__auto___20484 = G__20485;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19986){
var G__19987 = cljs.core.first(seq19986);
var seq19986__$1 = cljs.core.next(seq19986);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19987,seq19986__$1);
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
var G__19997 = arguments.length;
switch (G__19997) {
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

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__16961__auto___20491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16962__auto__ = (function (){var switch__16845__auto__ = (function (state_20010){
var state_val_20011 = (state_20010[(1)]);
if((state_val_20011 === (1))){
var state_20010__$1 = state_20010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20010__$1,(2),once_or_cleanup);
} else {
if((state_val_20011 === (2))){
var inst_20007 = (state_20010[(2)]);
var inst_20008 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20010__$1 = (function (){var statearr_20012 = state_20010;
(statearr_20012[(7)] = inst_20007);

return statearr_20012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20010__$1,inst_20008);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16846__auto__ = null;
var shadow$dom$state_machine__16846__auto____0 = (function (){
var statearr_20013 = [null,null,null,null,null,null,null,null];
(statearr_20013[(0)] = shadow$dom$state_machine__16846__auto__);

(statearr_20013[(1)] = (1));

return statearr_20013;
});
var shadow$dom$state_machine__16846__auto____1 = (function (state_20010){
while(true){
var ret_value__16847__auto__ = (function (){try{while(true){
var result__16848__auto__ = switch__16845__auto__(state_20010);
if(cljs.core.keyword_identical_QMARK_(result__16848__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16848__auto__;
}
break;
}
}catch (e20014){var ex__16849__auto__ = e20014;
var statearr_20015_20492 = state_20010;
(statearr_20015_20492[(2)] = ex__16849__auto__);


if(cljs.core.seq((state_20010[(4)]))){
var statearr_20016_20493 = state_20010;
(statearr_20016_20493[(1)] = cljs.core.first((state_20010[(4)])));

} else {
throw ex__16849__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16847__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20494 = state_20010;
state_20010 = G__20494;
continue;
} else {
return ret_value__16847__auto__;
}
break;
}
});
shadow$dom$state_machine__16846__auto__ = function(state_20010){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16846__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16846__auto____1.call(this,state_20010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16846__auto____0;
shadow$dom$state_machine__16846__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16846__auto____1;
return shadow$dom$state_machine__16846__auto__;
})()
})();
var state__16963__auto__ = (function (){var statearr_20017 = f__16962__auto__();
(statearr_20017[(6)] = c__16961__auto___20491);

return statearr_20017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16963__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
