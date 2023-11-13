goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_20156 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_20156(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_20157 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_20157(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19145 = coll;
var G__19147 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19145,G__19147) : shadow.dom.lazy_native_coll_seq.call(null,G__19145,G__19147));
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
var G__19172 = arguments.length;
switch (G__19172) {
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
var G__19187 = arguments.length;
switch (G__19187) {
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
var G__19199 = arguments.length;
switch (G__19199) {
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
var G__19229 = arguments.length;
switch (G__19229) {
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
var G__19272 = arguments.length;
switch (G__19272) {
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
var G__19295 = arguments.length;
switch (G__19295) {
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
}catch (e19309){if((e19309 instanceof Object)){
var e = e19309;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19309;

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
var seq__19314 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__19315 = null;
var count__19316 = (0);
var i__19317 = (0);
while(true){
if((i__19317 < count__19316)){
var el = chunk__19315.cljs$core$IIndexed$_nth$arity$2(null,i__19317);
var handler_20164__$1 = ((function (seq__19314,chunk__19315,count__19316,i__19317,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19314,chunk__19315,count__19316,i__19317,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20164__$1);


var G__20165 = seq__19314;
var G__20166 = chunk__19315;
var G__20167 = count__19316;
var G__20168 = (i__19317 + (1));
seq__19314 = G__20165;
chunk__19315 = G__20166;
count__19316 = G__20167;
i__19317 = G__20168;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19314);
if(temp__5804__auto__){
var seq__19314__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19314__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19314__$1);
var G__20169 = cljs.core.chunk_rest(seq__19314__$1);
var G__20170 = c__5568__auto__;
var G__20171 = cljs.core.count(c__5568__auto__);
var G__20172 = (0);
seq__19314 = G__20169;
chunk__19315 = G__20170;
count__19316 = G__20171;
i__19317 = G__20172;
continue;
} else {
var el = cljs.core.first(seq__19314__$1);
var handler_20173__$1 = ((function (seq__19314,chunk__19315,count__19316,i__19317,el,seq__19314__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__19314,chunk__19315,count__19316,i__19317,el,seq__19314__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_20173__$1);


var G__20174 = cljs.core.next(seq__19314__$1);
var G__20175 = null;
var G__20176 = (0);
var G__20177 = (0);
seq__19314 = G__20174;
chunk__19315 = G__20175;
count__19316 = G__20176;
i__19317 = G__20177;
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
var G__19352 = arguments.length;
switch (G__19352) {
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
var seq__19372 = cljs.core.seq(events);
var chunk__19373 = null;
var count__19374 = (0);
var i__19375 = (0);
while(true){
if((i__19375 < count__19374)){
var vec__19394 = chunk__19373.cljs$core$IIndexed$_nth$arity$2(null,i__19375);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19394,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19394,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20179 = seq__19372;
var G__20180 = chunk__19373;
var G__20181 = count__19374;
var G__20182 = (i__19375 + (1));
seq__19372 = G__20179;
chunk__19373 = G__20180;
count__19374 = G__20181;
i__19375 = G__20182;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19372);
if(temp__5804__auto__){
var seq__19372__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19372__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19372__$1);
var G__20183 = cljs.core.chunk_rest(seq__19372__$1);
var G__20184 = c__5568__auto__;
var G__20185 = cljs.core.count(c__5568__auto__);
var G__20186 = (0);
seq__19372 = G__20183;
chunk__19373 = G__20184;
count__19374 = G__20185;
i__19375 = G__20186;
continue;
} else {
var vec__19403 = cljs.core.first(seq__19372__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19403,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19403,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__20187 = cljs.core.next(seq__19372__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__19372 = G__20187;
chunk__19373 = G__20188;
count__19374 = G__20189;
i__19375 = G__20190;
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
var seq__19417 = cljs.core.seq(styles);
var chunk__19418 = null;
var count__19419 = (0);
var i__19420 = (0);
while(true){
if((i__19420 < count__19419)){
var vec__19438 = chunk__19418.cljs$core$IIndexed$_nth$arity$2(null,i__19420);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19438,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20191 = seq__19417;
var G__20192 = chunk__19418;
var G__20193 = count__19419;
var G__20194 = (i__19420 + (1));
seq__19417 = G__20191;
chunk__19418 = G__20192;
count__19419 = G__20193;
i__19420 = G__20194;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19417);
if(temp__5804__auto__){
var seq__19417__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19417__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19417__$1);
var G__20195 = cljs.core.chunk_rest(seq__19417__$1);
var G__20196 = c__5568__auto__;
var G__20197 = cljs.core.count(c__5568__auto__);
var G__20198 = (0);
seq__19417 = G__20195;
chunk__19418 = G__20196;
count__19419 = G__20197;
i__19420 = G__20198;
continue;
} else {
var vec__19443 = cljs.core.first(seq__19417__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19443,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__20199 = cljs.core.next(seq__19417__$1);
var G__20200 = null;
var G__20201 = (0);
var G__20202 = (0);
seq__19417 = G__20199;
chunk__19418 = G__20200;
count__19419 = G__20201;
i__19420 = G__20202;
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
var G__19457_20203 = key;
var G__19457_20204__$1 = (((G__19457_20203 instanceof cljs.core.Keyword))?G__19457_20203.fqn:null);
switch (G__19457_20204__$1) {
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
var ks_20206 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_20206,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_20206,"aria-");
}
})())){
el.setAttribute(ks_20206,value);
} else {
(el[ks_20206] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__19597){
var map__19598 = p__19597;
var map__19598__$1 = cljs.core.__destructure_map(map__19598);
var props = map__19598__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__19601 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19601,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__19607 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__19607,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__19607;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__19613 = arguments.length;
switch (G__19613) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__19624){
var vec__19626 = p__19624;
var seq__19627 = cljs.core.seq(vec__19626);
var first__19628 = cljs.core.first(seq__19627);
var seq__19627__$1 = cljs.core.next(seq__19627);
var nn = first__19628;
var first__19628__$1 = cljs.core.first(seq__19627__$1);
var seq__19627__$2 = cljs.core.next(seq__19627__$1);
var np = first__19628__$1;
var nc = seq__19627__$2;
var node = vec__19626;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19635 = nn;
var G__19636 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19635,G__19636) : create_fn.call(null,G__19635,G__19636));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19637 = nn;
var G__19638 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__19637,G__19638) : create_fn.call(null,G__19637,G__19638));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__19642 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19642,(1),null);
var seq__19646_20208 = cljs.core.seq(node_children);
var chunk__19647_20209 = null;
var count__19648_20210 = (0);
var i__19649_20211 = (0);
while(true){
if((i__19649_20211 < count__19648_20210)){
var child_struct_20212 = chunk__19647_20209.cljs$core$IIndexed$_nth$arity$2(null,i__19649_20211);
var children_20213 = shadow.dom.dom_node(child_struct_20212);
if(cljs.core.seq_QMARK_(children_20213)){
var seq__19689_20214 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20213));
var chunk__19691_20215 = null;
var count__19692_20216 = (0);
var i__19693_20217 = (0);
while(true){
if((i__19693_20217 < count__19692_20216)){
var child_20218 = chunk__19691_20215.cljs$core$IIndexed$_nth$arity$2(null,i__19693_20217);
if(cljs.core.truth_(child_20218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20218);


var G__20219 = seq__19689_20214;
var G__20220 = chunk__19691_20215;
var G__20221 = count__19692_20216;
var G__20222 = (i__19693_20217 + (1));
seq__19689_20214 = G__20219;
chunk__19691_20215 = G__20220;
count__19692_20216 = G__20221;
i__19693_20217 = G__20222;
continue;
} else {
var G__20223 = seq__19689_20214;
var G__20224 = chunk__19691_20215;
var G__20225 = count__19692_20216;
var G__20226 = (i__19693_20217 + (1));
seq__19689_20214 = G__20223;
chunk__19691_20215 = G__20224;
count__19692_20216 = G__20225;
i__19693_20217 = G__20226;
continue;
}
} else {
var temp__5804__auto___20227 = cljs.core.seq(seq__19689_20214);
if(temp__5804__auto___20227){
var seq__19689_20228__$1 = temp__5804__auto___20227;
if(cljs.core.chunked_seq_QMARK_(seq__19689_20228__$1)){
var c__5568__auto___20229 = cljs.core.chunk_first(seq__19689_20228__$1);
var G__20230 = cljs.core.chunk_rest(seq__19689_20228__$1);
var G__20231 = c__5568__auto___20229;
var G__20232 = cljs.core.count(c__5568__auto___20229);
var G__20233 = (0);
seq__19689_20214 = G__20230;
chunk__19691_20215 = G__20231;
count__19692_20216 = G__20232;
i__19693_20217 = G__20233;
continue;
} else {
var child_20234 = cljs.core.first(seq__19689_20228__$1);
if(cljs.core.truth_(child_20234)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20234);


var G__20235 = cljs.core.next(seq__19689_20228__$1);
var G__20236 = null;
var G__20237 = (0);
var G__20238 = (0);
seq__19689_20214 = G__20235;
chunk__19691_20215 = G__20236;
count__19692_20216 = G__20237;
i__19693_20217 = G__20238;
continue;
} else {
var G__20239 = cljs.core.next(seq__19689_20228__$1);
var G__20240 = null;
var G__20241 = (0);
var G__20242 = (0);
seq__19689_20214 = G__20239;
chunk__19691_20215 = G__20240;
count__19692_20216 = G__20241;
i__19693_20217 = G__20242;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20213);
}


var G__20243 = seq__19646_20208;
var G__20244 = chunk__19647_20209;
var G__20245 = count__19648_20210;
var G__20246 = (i__19649_20211 + (1));
seq__19646_20208 = G__20243;
chunk__19647_20209 = G__20244;
count__19648_20210 = G__20245;
i__19649_20211 = G__20246;
continue;
} else {
var temp__5804__auto___20247 = cljs.core.seq(seq__19646_20208);
if(temp__5804__auto___20247){
var seq__19646_20248__$1 = temp__5804__auto___20247;
if(cljs.core.chunked_seq_QMARK_(seq__19646_20248__$1)){
var c__5568__auto___20249 = cljs.core.chunk_first(seq__19646_20248__$1);
var G__20250 = cljs.core.chunk_rest(seq__19646_20248__$1);
var G__20251 = c__5568__auto___20249;
var G__20252 = cljs.core.count(c__5568__auto___20249);
var G__20253 = (0);
seq__19646_20208 = G__20250;
chunk__19647_20209 = G__20251;
count__19648_20210 = G__20252;
i__19649_20211 = G__20253;
continue;
} else {
var child_struct_20254 = cljs.core.first(seq__19646_20248__$1);
var children_20255 = shadow.dom.dom_node(child_struct_20254);
if(cljs.core.seq_QMARK_(children_20255)){
var seq__19716_20256 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_20255));
var chunk__19718_20257 = null;
var count__19719_20258 = (0);
var i__19720_20259 = (0);
while(true){
if((i__19720_20259 < count__19719_20258)){
var child_20260 = chunk__19718_20257.cljs$core$IIndexed$_nth$arity$2(null,i__19720_20259);
if(cljs.core.truth_(child_20260)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20260);


var G__20261 = seq__19716_20256;
var G__20262 = chunk__19718_20257;
var G__20263 = count__19719_20258;
var G__20264 = (i__19720_20259 + (1));
seq__19716_20256 = G__20261;
chunk__19718_20257 = G__20262;
count__19719_20258 = G__20263;
i__19720_20259 = G__20264;
continue;
} else {
var G__20265 = seq__19716_20256;
var G__20266 = chunk__19718_20257;
var G__20267 = count__19719_20258;
var G__20268 = (i__19720_20259 + (1));
seq__19716_20256 = G__20265;
chunk__19718_20257 = G__20266;
count__19719_20258 = G__20267;
i__19720_20259 = G__20268;
continue;
}
} else {
var temp__5804__auto___20269__$1 = cljs.core.seq(seq__19716_20256);
if(temp__5804__auto___20269__$1){
var seq__19716_20270__$1 = temp__5804__auto___20269__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19716_20270__$1)){
var c__5568__auto___20271 = cljs.core.chunk_first(seq__19716_20270__$1);
var G__20272 = cljs.core.chunk_rest(seq__19716_20270__$1);
var G__20273 = c__5568__auto___20271;
var G__20274 = cljs.core.count(c__5568__auto___20271);
var G__20275 = (0);
seq__19716_20256 = G__20272;
chunk__19718_20257 = G__20273;
count__19719_20258 = G__20274;
i__19720_20259 = G__20275;
continue;
} else {
var child_20276 = cljs.core.first(seq__19716_20270__$1);
if(cljs.core.truth_(child_20276)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_20276);


var G__20277 = cljs.core.next(seq__19716_20270__$1);
var G__20278 = null;
var G__20279 = (0);
var G__20280 = (0);
seq__19716_20256 = G__20277;
chunk__19718_20257 = G__20278;
count__19719_20258 = G__20279;
i__19720_20259 = G__20280;
continue;
} else {
var G__20281 = cljs.core.next(seq__19716_20270__$1);
var G__20282 = null;
var G__20283 = (0);
var G__20284 = (0);
seq__19716_20256 = G__20281;
chunk__19718_20257 = G__20282;
count__19719_20258 = G__20283;
i__19720_20259 = G__20284;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_20255);
}


var G__20285 = cljs.core.next(seq__19646_20248__$1);
var G__20286 = null;
var G__20287 = (0);
var G__20288 = (0);
seq__19646_20208 = G__20285;
chunk__19647_20209 = G__20286;
count__19648_20210 = G__20287;
i__19649_20211 = G__20288;
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
var seq__19782 = cljs.core.seq(node);
var chunk__19783 = null;
var count__19784 = (0);
var i__19785 = (0);
while(true){
if((i__19785 < count__19784)){
var n = chunk__19783.cljs$core$IIndexed$_nth$arity$2(null,i__19785);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20289 = seq__19782;
var G__20290 = chunk__19783;
var G__20291 = count__19784;
var G__20292 = (i__19785 + (1));
seq__19782 = G__20289;
chunk__19783 = G__20290;
count__19784 = G__20291;
i__19785 = G__20292;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19782);
if(temp__5804__auto__){
var seq__19782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19782__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19782__$1);
var G__20293 = cljs.core.chunk_rest(seq__19782__$1);
var G__20294 = c__5568__auto__;
var G__20295 = cljs.core.count(c__5568__auto__);
var G__20296 = (0);
seq__19782 = G__20293;
chunk__19783 = G__20294;
count__19784 = G__20295;
i__19785 = G__20296;
continue;
} else {
var n = cljs.core.first(seq__19782__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__20297 = cljs.core.next(seq__19782__$1);
var G__20298 = null;
var G__20299 = (0);
var G__20300 = (0);
seq__19782 = G__20297;
chunk__19783 = G__20298;
count__19784 = G__20299;
i__19785 = G__20300;
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
var G__19839 = arguments.length;
switch (G__19839) {
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
var G__19857 = arguments.length;
switch (G__19857) {
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
var G__19869 = arguments.length;
switch (G__19869) {
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
var len__5769__auto___20304 = arguments.length;
var i__5770__auto___20305 = (0);
while(true){
if((i__5770__auto___20305 < len__5769__auto___20304)){
args__5775__auto__.push((arguments[i__5770__auto___20305]));

var G__20306 = (i__5770__auto___20305 + (1));
i__5770__auto___20305 = G__20306;
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
var seq__19904_20307 = cljs.core.seq(nodes);
var chunk__19905_20308 = null;
var count__19906_20309 = (0);
var i__19907_20310 = (0);
while(true){
if((i__19907_20310 < count__19906_20309)){
var node_20311 = chunk__19905_20308.cljs$core$IIndexed$_nth$arity$2(null,i__19907_20310);
fragment.appendChild(shadow.dom._to_dom(node_20311));


var G__20312 = seq__19904_20307;
var G__20313 = chunk__19905_20308;
var G__20314 = count__19906_20309;
var G__20315 = (i__19907_20310 + (1));
seq__19904_20307 = G__20312;
chunk__19905_20308 = G__20313;
count__19906_20309 = G__20314;
i__19907_20310 = G__20315;
continue;
} else {
var temp__5804__auto___20316 = cljs.core.seq(seq__19904_20307);
if(temp__5804__auto___20316){
var seq__19904_20317__$1 = temp__5804__auto___20316;
if(cljs.core.chunked_seq_QMARK_(seq__19904_20317__$1)){
var c__5568__auto___20318 = cljs.core.chunk_first(seq__19904_20317__$1);
var G__20319 = cljs.core.chunk_rest(seq__19904_20317__$1);
var G__20320 = c__5568__auto___20318;
var G__20321 = cljs.core.count(c__5568__auto___20318);
var G__20322 = (0);
seq__19904_20307 = G__20319;
chunk__19905_20308 = G__20320;
count__19906_20309 = G__20321;
i__19907_20310 = G__20322;
continue;
} else {
var node_20324 = cljs.core.first(seq__19904_20317__$1);
fragment.appendChild(shadow.dom._to_dom(node_20324));


var G__20325 = cljs.core.next(seq__19904_20317__$1);
var G__20326 = null;
var G__20327 = (0);
var G__20328 = (0);
seq__19904_20307 = G__20325;
chunk__19905_20308 = G__20326;
count__19906_20309 = G__20327;
i__19907_20310 = G__20328;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq19897){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19897));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__19936_20330 = cljs.core.seq(scripts);
var chunk__19937_20331 = null;
var count__19938_20332 = (0);
var i__19939_20333 = (0);
while(true){
if((i__19939_20333 < count__19938_20332)){
var vec__19952_20334 = chunk__19937_20331.cljs$core$IIndexed$_nth$arity$2(null,i__19939_20333);
var script_tag_20335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19952_20334,(0),null);
var script_body_20336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19952_20334,(1),null);
eval(script_body_20336);


var G__20337 = seq__19936_20330;
var G__20338 = chunk__19937_20331;
var G__20339 = count__19938_20332;
var G__20340 = (i__19939_20333 + (1));
seq__19936_20330 = G__20337;
chunk__19937_20331 = G__20338;
count__19938_20332 = G__20339;
i__19939_20333 = G__20340;
continue;
} else {
var temp__5804__auto___20341 = cljs.core.seq(seq__19936_20330);
if(temp__5804__auto___20341){
var seq__19936_20342__$1 = temp__5804__auto___20341;
if(cljs.core.chunked_seq_QMARK_(seq__19936_20342__$1)){
var c__5568__auto___20343 = cljs.core.chunk_first(seq__19936_20342__$1);
var G__20344 = cljs.core.chunk_rest(seq__19936_20342__$1);
var G__20345 = c__5568__auto___20343;
var G__20346 = cljs.core.count(c__5568__auto___20343);
var G__20347 = (0);
seq__19936_20330 = G__20344;
chunk__19937_20331 = G__20345;
count__19938_20332 = G__20346;
i__19939_20333 = G__20347;
continue;
} else {
var vec__19958_20348 = cljs.core.first(seq__19936_20342__$1);
var script_tag_20349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958_20348,(0),null);
var script_body_20350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19958_20348,(1),null);
eval(script_body_20350);


var G__20351 = cljs.core.next(seq__19936_20342__$1);
var G__20352 = null;
var G__20353 = (0);
var G__20354 = (0);
seq__19936_20330 = G__20351;
chunk__19937_20331 = G__20352;
count__19938_20332 = G__20353;
i__19939_20333 = G__20354;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__19963){
var vec__19964 = p__19963;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19964,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19964,(1),null);
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
var G__19984 = arguments.length;
switch (G__19984) {
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
var seq__20005 = cljs.core.seq(style_keys);
var chunk__20006 = null;
var count__20007 = (0);
var i__20008 = (0);
while(true){
if((i__20008 < count__20007)){
var it = chunk__20006.cljs$core$IIndexed$_nth$arity$2(null,i__20008);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20356 = seq__20005;
var G__20357 = chunk__20006;
var G__20358 = count__20007;
var G__20359 = (i__20008 + (1));
seq__20005 = G__20356;
chunk__20006 = G__20357;
count__20007 = G__20358;
i__20008 = G__20359;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20005);
if(temp__5804__auto__){
var seq__20005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20005__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20005__$1);
var G__20360 = cljs.core.chunk_rest(seq__20005__$1);
var G__20361 = c__5568__auto__;
var G__20362 = cljs.core.count(c__5568__auto__);
var G__20363 = (0);
seq__20005 = G__20360;
chunk__20006 = G__20361;
count__20007 = G__20362;
i__20008 = G__20363;
continue;
} else {
var it = cljs.core.first(seq__20005__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__20364 = cljs.core.next(seq__20005__$1);
var G__20365 = null;
var G__20366 = (0);
var G__20367 = (0);
seq__20005 = G__20364;
chunk__20006 = G__20365;
count__20007 = G__20366;
i__20008 = G__20367;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20019,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20023 = k20019;
var G__20023__$1 = (((G__20023 instanceof cljs.core.Keyword))?G__20023.fqn:null);
switch (G__20023__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20019,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20024){
var vec__20025 = p__20024;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20025,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20018){
var self__ = this;
var G__20018__$1 = this;
return (new cljs.core.RecordIter((0),G__20018__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20020,other20021){
var self__ = this;
var this20020__$1 = this;
return (((!((other20021 == null)))) && ((((this20020__$1.constructor === other20021.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20020__$1.x,other20021.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20020__$1.y,other20021.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20020__$1.__extmap,other20021.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20019){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20028 = k20019;
var G__20028__$1 = (((G__20028 instanceof cljs.core.Keyword))?G__20028.fqn:null);
switch (G__20028__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20019);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20018){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20029 = cljs.core.keyword_identical_QMARK_;
var expr__20030 = k__5352__auto__;
if(cljs.core.truth_((pred__20029.cljs$core$IFn$_invoke$arity$2 ? pred__20029.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20030) : pred__20029.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20030)))){
return (new shadow.dom.Coordinate(G__20018,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20029.cljs$core$IFn$_invoke$arity$2 ? pred__20029.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20030) : pred__20029.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20030)))){
return (new shadow.dom.Coordinate(self__.x,G__20018,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20018),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20018){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20018,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20022){
var extmap__5385__auto__ = (function (){var G__20033 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20022,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20033);
} else {
return G__20033;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20022),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20022),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20038,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20048 = k20038;
var G__20048__$1 = (((G__20048 instanceof cljs.core.Keyword))?G__20048.fqn:null);
switch (G__20048__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20038,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20054){
var vec__20055 = p__20054;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20055,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20037){
var self__ = this;
var G__20037__$1 = this;
return (new cljs.core.RecordIter((0),G__20037__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20039,other20040){
var self__ = this;
var this20039__$1 = this;
return (((!((other20040 == null)))) && ((((this20039__$1.constructor === other20040.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20039__$1.w,other20040.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20039__$1.h,other20040.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20039__$1.__extmap,other20040.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20038){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20067 = k20038;
var G__20067__$1 = (((G__20067 instanceof cljs.core.Keyword))?G__20067.fqn:null);
switch (G__20067__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20038);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20037){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20068 = cljs.core.keyword_identical_QMARK_;
var expr__20069 = k__5352__auto__;
if(cljs.core.truth_((pred__20068.cljs$core$IFn$_invoke$arity$2 ? pred__20068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20069) : pred__20068.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20069)))){
return (new shadow.dom.Size(G__20037,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20068.cljs$core$IFn$_invoke$arity$2 ? pred__20068.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20069) : pred__20068.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20069)))){
return (new shadow.dom.Size(self__.w,G__20037,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20037),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20037){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20037,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20045){
var extmap__5385__auto__ = (function (){var G__20075 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20045,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20045)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20075);
} else {
return G__20075;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20045),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20045),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__20375 = (i + (1));
var G__20376 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__20375;
ret = G__20376;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20081){
var vec__20082 = p__20081;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20086 = arguments.length;
switch (G__20086) {
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
var G__20378 = ps;
var G__20379 = (i + (1));
el__$1 = G__20378;
i = G__20379;
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
var vec__20087 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20090_20380 = cljs.core.seq(props);
var chunk__20091_20381 = null;
var count__20092_20382 = (0);
var i__20093_20383 = (0);
while(true){
if((i__20093_20383 < count__20092_20382)){
var vec__20100_20384 = chunk__20091_20381.cljs$core$IIndexed$_nth$arity$2(null,i__20093_20383);
var k_20385 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100_20384,(0),null);
var v_20386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20100_20384,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_20385);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20385),v_20386);


var G__20387 = seq__20090_20380;
var G__20388 = chunk__20091_20381;
var G__20389 = count__20092_20382;
var G__20390 = (i__20093_20383 + (1));
seq__20090_20380 = G__20387;
chunk__20091_20381 = G__20388;
count__20092_20382 = G__20389;
i__20093_20383 = G__20390;
continue;
} else {
var temp__5804__auto___20391 = cljs.core.seq(seq__20090_20380);
if(temp__5804__auto___20391){
var seq__20090_20392__$1 = temp__5804__auto___20391;
if(cljs.core.chunked_seq_QMARK_(seq__20090_20392__$1)){
var c__5568__auto___20393 = cljs.core.chunk_first(seq__20090_20392__$1);
var G__20394 = cljs.core.chunk_rest(seq__20090_20392__$1);
var G__20395 = c__5568__auto___20393;
var G__20396 = cljs.core.count(c__5568__auto___20393);
var G__20397 = (0);
seq__20090_20380 = G__20394;
chunk__20091_20381 = G__20395;
count__20092_20382 = G__20396;
i__20093_20383 = G__20397;
continue;
} else {
var vec__20103_20399 = cljs.core.first(seq__20090_20392__$1);
var k_20400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20103_20399,(0),null);
var v_20401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20103_20399,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_20400);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_20400),v_20401);


var G__20402 = cljs.core.next(seq__20090_20392__$1);
var G__20403 = null;
var G__20404 = (0);
var G__20405 = (0);
seq__20090_20380 = G__20402;
chunk__20091_20381 = G__20403;
count__20092_20382 = G__20404;
i__20093_20383 = G__20405;
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
var vec__20107 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20107,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20107,(1),null);
var seq__20110_20406 = cljs.core.seq(node_children);
var chunk__20112_20407 = null;
var count__20113_20408 = (0);
var i__20114_20409 = (0);
while(true){
if((i__20114_20409 < count__20113_20408)){
var child_struct_20410 = chunk__20112_20407.cljs$core$IIndexed$_nth$arity$2(null,i__20114_20409);
if((!((child_struct_20410 == null)))){
if(typeof child_struct_20410 === 'string'){
var text_20411 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20411),child_struct_20410].join(''));
} else {
var children_20412 = shadow.dom.svg_node(child_struct_20410);
if(cljs.core.seq_QMARK_(children_20412)){
var seq__20128_20413 = cljs.core.seq(children_20412);
var chunk__20130_20414 = null;
var count__20131_20415 = (0);
var i__20132_20416 = (0);
while(true){
if((i__20132_20416 < count__20131_20415)){
var child_20417 = chunk__20130_20414.cljs$core$IIndexed$_nth$arity$2(null,i__20132_20416);
if(cljs.core.truth_(child_20417)){
node.appendChild(child_20417);


var G__20418 = seq__20128_20413;
var G__20419 = chunk__20130_20414;
var G__20420 = count__20131_20415;
var G__20421 = (i__20132_20416 + (1));
seq__20128_20413 = G__20418;
chunk__20130_20414 = G__20419;
count__20131_20415 = G__20420;
i__20132_20416 = G__20421;
continue;
} else {
var G__20422 = seq__20128_20413;
var G__20423 = chunk__20130_20414;
var G__20424 = count__20131_20415;
var G__20425 = (i__20132_20416 + (1));
seq__20128_20413 = G__20422;
chunk__20130_20414 = G__20423;
count__20131_20415 = G__20424;
i__20132_20416 = G__20425;
continue;
}
} else {
var temp__5804__auto___20426 = cljs.core.seq(seq__20128_20413);
if(temp__5804__auto___20426){
var seq__20128_20427__$1 = temp__5804__auto___20426;
if(cljs.core.chunked_seq_QMARK_(seq__20128_20427__$1)){
var c__5568__auto___20428 = cljs.core.chunk_first(seq__20128_20427__$1);
var G__20429 = cljs.core.chunk_rest(seq__20128_20427__$1);
var G__20430 = c__5568__auto___20428;
var G__20431 = cljs.core.count(c__5568__auto___20428);
var G__20432 = (0);
seq__20128_20413 = G__20429;
chunk__20130_20414 = G__20430;
count__20131_20415 = G__20431;
i__20132_20416 = G__20432;
continue;
} else {
var child_20434 = cljs.core.first(seq__20128_20427__$1);
if(cljs.core.truth_(child_20434)){
node.appendChild(child_20434);


var G__20435 = cljs.core.next(seq__20128_20427__$1);
var G__20436 = null;
var G__20437 = (0);
var G__20438 = (0);
seq__20128_20413 = G__20435;
chunk__20130_20414 = G__20436;
count__20131_20415 = G__20437;
i__20132_20416 = G__20438;
continue;
} else {
var G__20439 = cljs.core.next(seq__20128_20427__$1);
var G__20440 = null;
var G__20441 = (0);
var G__20442 = (0);
seq__20128_20413 = G__20439;
chunk__20130_20414 = G__20440;
count__20131_20415 = G__20441;
i__20132_20416 = G__20442;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20412);
}
}


var G__20444 = seq__20110_20406;
var G__20445 = chunk__20112_20407;
var G__20446 = count__20113_20408;
var G__20447 = (i__20114_20409 + (1));
seq__20110_20406 = G__20444;
chunk__20112_20407 = G__20445;
count__20113_20408 = G__20446;
i__20114_20409 = G__20447;
continue;
} else {
var G__20448 = seq__20110_20406;
var G__20449 = chunk__20112_20407;
var G__20450 = count__20113_20408;
var G__20451 = (i__20114_20409 + (1));
seq__20110_20406 = G__20448;
chunk__20112_20407 = G__20449;
count__20113_20408 = G__20450;
i__20114_20409 = G__20451;
continue;
}
} else {
var temp__5804__auto___20452 = cljs.core.seq(seq__20110_20406);
if(temp__5804__auto___20452){
var seq__20110_20453__$1 = temp__5804__auto___20452;
if(cljs.core.chunked_seq_QMARK_(seq__20110_20453__$1)){
var c__5568__auto___20454 = cljs.core.chunk_first(seq__20110_20453__$1);
var G__20455 = cljs.core.chunk_rest(seq__20110_20453__$1);
var G__20456 = c__5568__auto___20454;
var G__20457 = cljs.core.count(c__5568__auto___20454);
var G__20458 = (0);
seq__20110_20406 = G__20455;
chunk__20112_20407 = G__20456;
count__20113_20408 = G__20457;
i__20114_20409 = G__20458;
continue;
} else {
var child_struct_20459 = cljs.core.first(seq__20110_20453__$1);
if((!((child_struct_20459 == null)))){
if(typeof child_struct_20459 === 'string'){
var text_20460 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_20460),child_struct_20459].join(''));
} else {
var children_20461 = shadow.dom.svg_node(child_struct_20459);
if(cljs.core.seq_QMARK_(children_20461)){
var seq__20134_20462 = cljs.core.seq(children_20461);
var chunk__20136_20463 = null;
var count__20137_20464 = (0);
var i__20138_20465 = (0);
while(true){
if((i__20138_20465 < count__20137_20464)){
var child_20466 = chunk__20136_20463.cljs$core$IIndexed$_nth$arity$2(null,i__20138_20465);
if(cljs.core.truth_(child_20466)){
node.appendChild(child_20466);


var G__20467 = seq__20134_20462;
var G__20468 = chunk__20136_20463;
var G__20469 = count__20137_20464;
var G__20470 = (i__20138_20465 + (1));
seq__20134_20462 = G__20467;
chunk__20136_20463 = G__20468;
count__20137_20464 = G__20469;
i__20138_20465 = G__20470;
continue;
} else {
var G__20471 = seq__20134_20462;
var G__20472 = chunk__20136_20463;
var G__20473 = count__20137_20464;
var G__20474 = (i__20138_20465 + (1));
seq__20134_20462 = G__20471;
chunk__20136_20463 = G__20472;
count__20137_20464 = G__20473;
i__20138_20465 = G__20474;
continue;
}
} else {
var temp__5804__auto___20475__$1 = cljs.core.seq(seq__20134_20462);
if(temp__5804__auto___20475__$1){
var seq__20134_20476__$1 = temp__5804__auto___20475__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20134_20476__$1)){
var c__5568__auto___20477 = cljs.core.chunk_first(seq__20134_20476__$1);
var G__20478 = cljs.core.chunk_rest(seq__20134_20476__$1);
var G__20479 = c__5568__auto___20477;
var G__20480 = cljs.core.count(c__5568__auto___20477);
var G__20481 = (0);
seq__20134_20462 = G__20478;
chunk__20136_20463 = G__20479;
count__20137_20464 = G__20480;
i__20138_20465 = G__20481;
continue;
} else {
var child_20482 = cljs.core.first(seq__20134_20476__$1);
if(cljs.core.truth_(child_20482)){
node.appendChild(child_20482);


var G__20483 = cljs.core.next(seq__20134_20476__$1);
var G__20484 = null;
var G__20485 = (0);
var G__20486 = (0);
seq__20134_20462 = G__20483;
chunk__20136_20463 = G__20484;
count__20137_20464 = G__20485;
i__20138_20465 = G__20486;
continue;
} else {
var G__20487 = cljs.core.next(seq__20134_20476__$1);
var G__20488 = null;
var G__20489 = (0);
var G__20490 = (0);
seq__20134_20462 = G__20487;
chunk__20136_20463 = G__20488;
count__20137_20464 = G__20489;
i__20138_20465 = G__20490;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_20461);
}
}


var G__20491 = cljs.core.next(seq__20110_20453__$1);
var G__20492 = null;
var G__20493 = (0);
var G__20494 = (0);
seq__20110_20406 = G__20491;
chunk__20112_20407 = G__20492;
count__20113_20408 = G__20493;
i__20114_20409 = G__20494;
continue;
} else {
var G__20495 = cljs.core.next(seq__20110_20453__$1);
var G__20496 = null;
var G__20497 = (0);
var G__20498 = (0);
seq__20110_20406 = G__20495;
chunk__20112_20407 = G__20496;
count__20113_20408 = G__20497;
i__20114_20409 = G__20498;
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
var len__5769__auto___20500 = arguments.length;
var i__5770__auto___20501 = (0);
while(true){
if((i__5770__auto___20501 < len__5769__auto___20500)){
args__5775__auto__.push((arguments[i__5770__auto___20501]));

var G__20502 = (i__5770__auto___20501 + (1));
i__5770__auto___20501 = G__20502;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq20140){
var G__20141 = cljs.core.first(seq20140);
var seq20140__$1 = cljs.core.next(seq20140);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20141,seq20140__$1);
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
var G__20143 = arguments.length;
switch (G__20143) {
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
var c__16994__auto___20506 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__16995__auto__ = (function (){var switch__16855__auto__ = (function (state_20148){
var state_val_20149 = (state_20148[(1)]);
if((state_val_20149 === (1))){
var state_20148__$1 = state_20148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20148__$1,(2),once_or_cleanup);
} else {
if((state_val_20149 === (2))){
var inst_20145 = (state_20148[(2)]);
var inst_20146 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_20148__$1 = (function (){var statearr_20150 = state_20148;
(statearr_20150[(7)] = inst_20145);

return statearr_20150;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20148__$1,inst_20146);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__16856__auto__ = null;
var shadow$dom$state_machine__16856__auto____0 = (function (){
var statearr_20151 = [null,null,null,null,null,null,null,null];
(statearr_20151[(0)] = shadow$dom$state_machine__16856__auto__);

(statearr_20151[(1)] = (1));

return statearr_20151;
});
var shadow$dom$state_machine__16856__auto____1 = (function (state_20148){
while(true){
var ret_value__16857__auto__ = (function (){try{while(true){
var result__16858__auto__ = switch__16855__auto__(state_20148);
if(cljs.core.keyword_identical_QMARK_(result__16858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16858__auto__;
}
break;
}
}catch (e20152){var ex__16859__auto__ = e20152;
var statearr_20153_20510 = state_20148;
(statearr_20153_20510[(2)] = ex__16859__auto__);


if(cljs.core.seq((state_20148[(4)]))){
var statearr_20154_20511 = state_20148;
(statearr_20154_20511[(1)] = cljs.core.first((state_20148[(4)])));

} else {
throw ex__16859__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16857__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20512 = state_20148;
state_20148 = G__20512;
continue;
} else {
return ret_value__16857__auto__;
}
break;
}
});
shadow$dom$state_machine__16856__auto__ = function(state_20148){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__16856__auto____0.call(this);
case 1:
return shadow$dom$state_machine__16856__auto____1.call(this,state_20148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__16856__auto____0;
shadow$dom$state_machine__16856__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__16856__auto____1;
return shadow$dom$state_machine__16856__auto__;
})()
})();
var state__16996__auto__ = (function (){var statearr_20155 = f__16995__auto__();
(statearr_20155[(6)] = c__16994__auto___20506);

return statearr_20155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16996__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
