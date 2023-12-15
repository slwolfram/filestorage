goog.provide('reitit.coercion.spec');
reitit.coercion.spec.string_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.string_transformer], 0));
reitit.coercion.spec.json_transformer = spec_tools.core.type_transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([spec_tools.core.strip_extra_keys_transformer,spec_tools.core.json_transformer], 0));
reitit.coercion.spec.strip_extra_keys_transformer = spec_tools.core.strip_extra_keys_transformer;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {spec_tools.core.Transformer}
 * @implements {cljs.core.IWithMeta}
*/
reitit.coercion.spec.t_reitit$coercion$spec31478 = (function (meta31479){
this.meta31479 = meta31479;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31480,meta31479__$1){
var self__ = this;
var _31480__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec31478(meta31479__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31480){
var self__ = this;
var _31480__$1 = this;
return self__.meta31479;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.spec_tools$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.spec_tools$core$Transformer$_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword("reitit.coercion.spec","no-op","reitit.coercion.spec/no-op",-549362779);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.spec_tools$core$Transformer$_encoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.prototype.spec_tools$core$Transformer$_decoder$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return null;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta31479","meta31479",-1668261111,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31478.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec31478.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec31478");

(reitit.coercion.spec.t_reitit$coercion$spec31478.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"reitit.coercion.spec/t_reitit$coercion$spec31478");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec31478.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec31478 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec31478(meta31479){
return (new reitit.coercion.spec.t_reitit$coercion$spec31478(meta31479));
});


reitit.coercion.spec.no_op_transformer = (new reitit.coercion.spec.t_reitit$coercion$spec31478(cljs.core.PersistentArrayMap.EMPTY));

/**
 * @interface
 */
reitit.coercion.spec.IntoSpec = function(){};

var reitit$coercion$spec$IntoSpec$into_spec$dyn_31540 = (function (this$,name){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (reitit.coercion.spec.into_spec[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5394__auto__.call(null,this$,name));
} else {
var m__5392__auto__ = (reitit.coercion.spec.into_spec["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__5392__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("IntoSpec.into-spec",this$);
}
}
});
reitit.coercion.spec.into_spec = (function reitit$coercion$spec$into_spec(this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2 == null)))))){
return this$.reitit$coercion$spec$IntoSpec$into_spec$arity$2(this$,name);
} else {
return reitit$coercion$spec$IntoSpec$into_spec$dyn_31540(this$,name);
}
});

reitit.coercion.spec.ensure_name = (function reitit$coercion$spec$ensure_name(_QMARK_name){
var or__5045__auto__ = _QMARK_name;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("spec",cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("")));
}
});
(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1),new cljs.core.Keyword(null,"name","name",1843675177));
}));

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.data_spec.Maybe.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,name){
var this$__$1 = this;
return spec_tools.data_spec.spec.cljs$core$IFn$_invoke$arity$2(reitit.coercion.spec.ensure_name(name),this$__$1);
}));

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$ = cljs.core.PROTOCOL_SENTINEL);

(spec_tools.core.Spec.prototype.reitit$coercion$spec$IntoSpec$into_spec$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(reitit.coercion.spec.IntoSpec["_"] = true);

(reitit.coercion.spec.into_spec["_"] = (function (this$,_){
return spec_tools.core.create_spec(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),this$], null));
}));

(reitit.coercion.spec.IntoSpec["null"] = true);

(reitit.coercion.spec.into_spec["null"] = (function (_,___$1){
return null;
}));
reitit.coercion.spec.stringify_pred = (function reitit$coercion$spec$stringify_pred(pred){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.seq_QMARK_(pred))?cljs.core.seq(pred):pred));
});
if((typeof reitit !== 'undefined') && (typeof reitit.coercion !== 'undefined') && (typeof reitit.coercion.spec !== 'undefined') && (typeof reitit.coercion.spec.coerce_response_QMARK_ !== 'undefined')){
} else {
reitit.coercion.spec.coerce_response_QMARK_ = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31518 = cljs.core.get_global_hierarchy;
return (fexpr__31518.cljs$core$IFn$_invoke$arity$0 ? fexpr__31518.cljs$core$IFn$_invoke$arity$0() : fexpr__31518.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("reitit.coercion.spec","coerce-response?"),cljs.core.identity,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
reitit.coercion.spec.coerce_response_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("reitit.coercion.spec","default","reitit.coercion.spec/default",-1835621218),(function (_){
return true;
}));
reitit.coercion.spec.default_options = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091),reitit.coercion.spec.coerce_response_QMARK_,new cljs.core.Keyword(null,"transformers","transformers",-734201565),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.strip_extra_keys_transformer,new cljs.core.Keyword(null,"formats","formats",-1397890976),new cljs.core.PersistentArrayMap(null, 1, ["application/json",reitit.coercion.spec.json_transformer], null)], null),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.string_transformer], null),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),reitit.coercion.spec.no_op_transformer], null)], null)], null);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {reitit.coercion.Coercion}
*/
reitit.coercion.spec.t_reitit$coercion$spec31522 = (function (p__31520,map__31521,opts,transformers,coerce_response_QMARK_,meta31523){
this.p__31520 = p__31520;
this.map__31521 = map__31521;
this.opts = opts;
this.transformers = transformers;
this.coerce_response_QMARK_ = coerce_response_QMARK_;
this.meta31523 = meta31523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31524,meta31523__$1){
var self__ = this;
var _31524__$1 = this;
return (new reitit.coercion.spec.t_reitit$coercion$spec31522(self__.p__31520,self__.map__31521,self__.opts,self__.transformers,self__.coerce_response_QMARK_,meta31523__$1));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31524){
var self__ = this;
var _31524__$1 = this;
return self__.meta31523;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_get_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"spec","spec",347520401);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_get_options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_request_coercer$arity$3 = (function (_,type,spec){
var self__ = this;
var ___$1 = this;
var map__31525 = (self__.transformers.cljs$core$IFn$_invoke$arity$1 ? self__.transformers.cljs$core$IFn$_invoke$arity$1(type) : self__.transformers.call(null,type));
var map__31525__$1 = cljs.core.__destructure_map(map__31525);
var formats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31525__$1,new cljs.core.Keyword(null,"formats","formats",-1397890976));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31525__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
return (function (value,format){
var temp__5802__auto__ = (function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(formats,format);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var transformer = temp__5802__auto__;
var coerced = spec_tools.core.coerce.cljs$core$IFn$_invoke$arity$3(spec,value,transformer);
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,coerced)){
return coerced;
} else {
var transformed = spec_tools.core.conform.cljs$core$IFn$_invoke$arity$3(spec,coerced,transformer);
if(cljs.spec.alpha.invalid_QMARK_(transformed)){
var problems = spec_tools.core.explain_data.cljs$core$IFn$_invoke$arity$3(spec,coerced,transformer);
return reitit.coercion.map__GT_CoercionError(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),spec,new cljs.core.Keyword(null,"problems","problems",2097327077),problems], null));
} else {
return cljs.spec.alpha.unform(spec,transformed);
}
}
} else {
return value;
}
});
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_response_coercer$arity$2 = (function (this$,spec){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.coerce_response_QMARK_.cljs$core$IFn$_invoke$arity$1(spec) : self__.coerce_response_QMARK_.call(null,spec)))){
return this$__$1.reitit$coercion$Coercion$_request_coercer$arity$3(null,new cljs.core.Keyword(null,"response","response",-1068424192),spec);
} else {
return null;
}
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_compile_model$arity$3 = (function (_,model,name){
var self__ = this;
var ___$1 = this;
return reitit.coercion.spec.into_spec(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(model),(1)))?cljs.core.first(model):((cljs.core.every_QMARK_(cljs.core.map_QMARK_,model))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(meta_merge.core.meta_merge,model):reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.coercion.spec","model-error","reitit.coercion.spec/model-error",1299329279),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Can't merge nested clojure specs",new cljs.core.Keyword(null,"spec","spec",347520401),model], null))
)),name);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_get_model_apidocs$arity$4 = (function (_,specification,model,options){
var self__ = this;
var ___$1 = this;
var G__31526 = specification;
var G__31526__$1 = (((G__31526 instanceof cljs.core.Keyword))?G__31526.fqn:null);
switch (G__31526__$1) {
case "openapi":
return spec_tools.openapi.core.transform.cljs$core$IFn$_invoke$arity$2(model,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.opts,options], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_encode_error$arity$2 = (function (_,error){
var self__ = this;
var ___$1 = this;
var problems = new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"problems","problems",2097327077).cljs$core$IFn$_invoke$arity$1(error));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"spec","spec",347520401),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.spec.alpha.form)),new cljs.core.Keyword(null,"problems","problems",2097327077),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31519_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__31519_SHARP_,new cljs.core.Keyword(null,"pred","pred",1927423397),reitit.coercion.spec.stringify_pred);
}),problems));
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_open_model$arity$2 = (function (_,spec){
var self__ = this;
var ___$1 = this;
return spec;
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.prototype.reitit$coercion$Coercion$_get_apidocs$arity$3 = (function (_,specification,p__31527){
var self__ = this;
var map__31528 = p__31527;
var map__31528__$1 = cljs.core.__destructure_map(map__31528);
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var responses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31528__$1,new cljs.core.Keyword(null,"responses","responses",1257546453));
var content_types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31528__$1,new cljs.core.Keyword(null,"content-types","content-types",1736685783),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null));
var ___$1 = this;
var G__31529 = specification;
var G__31529__$1 = (((G__31529 instanceof cljs.core.Keyword))?G__31529.fqn:null);
switch (G__31529__$1) {
case "swagger":
return spec_tools.swagger.core.swagger_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(parameters)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","parameters","spec-tools.swagger.core/parameters",-239005676),parameters], null):null),(cljs.core.truth_(responses)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("spec-tools.swagger.core","responses","spec-tools.swagger.core/responses",308528333),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(responses),(function (){var iter__5523__auto__ = (function reitit$coercion$spec$iter__31530(s__31531){
return (new cljs.core.LazySeq(null,(function (){
var s__31531__$1 = s__31531;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31531__$1);
if(temp__5804__auto__){
var s__31531__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__31531__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31531__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31533 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31532 = (0);
while(true){
if((i__31532 < size__5522__auto__)){
var vec__31534 = cljs.core._nth(c__5521__auto__,i__31532);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31534,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31534,(1),null);
cljs.core.chunk_append(b__31533,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.set.rename_keys($__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
})()], null));

var G__31544 = (i__31532 + (1));
i__31532 = G__31544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31533),reitit$coercion$spec$iter__31530(cljs.core.chunk_rest(s__31531__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31533),null);
}
} else {
var vec__31537 = cljs.core.first(s__31531__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31537,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var $ = response;
var $__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2($,new cljs.core.Keyword(null,"content","content",15833224));
return clojure.set.rename_keys($__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"schema","schema",-1582001791)], null));
})()], null),reitit$coercion$spec$iter__31530(cljs.core.rest(s__31531__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(responses);
})())], null):null)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Can't produce Spec apidocs for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(specification)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"specification","specification",22067900),specification,new cljs.core.Keyword(null,"coercion","coercion",904067157),new cljs.core.Keyword(null,"spec","spec",347520401)], null));

}
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p__31520","p__31520",-1135578536,null),new cljs.core.Symbol(null,"map__31521","map__31521",-1871756405,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"transformers","transformers",906329962,null),new cljs.core.Symbol(null,"coerce-response?","coerce-response?",-1529402678,null),new cljs.core.Symbol(null,"meta31523","meta31523",202777726,null)], null);
}));

(reitit.coercion.spec.t_reitit$coercion$spec31522.cljs$lang$type = true);

(reitit.coercion.spec.t_reitit$coercion$spec31522.cljs$lang$ctorStr = "reitit.coercion.spec/t_reitit$coercion$spec31522");

(reitit.coercion.spec.t_reitit$coercion$spec31522.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"reitit.coercion.spec/t_reitit$coercion$spec31522");
}));

/**
 * Positional factory function for reitit.coercion.spec/t_reitit$coercion$spec31522.
 */
reitit.coercion.spec.__GT_t_reitit$coercion$spec31522 = (function reitit$coercion$spec$__GT_t_reitit$coercion$spec31522(p__31520,map__31521,opts,transformers,coerce_response_QMARK_,meta31523){
return (new reitit.coercion.spec.t_reitit$coercion$spec31522(p__31520,map__31521,opts,transformers,coerce_response_QMARK_,meta31523));
});


reitit.coercion.spec.create = (function reitit$coercion$spec$create(p__31520){
var map__31521 = p__31520;
var map__31521__$1 = cljs.core.__destructure_map(map__31521);
var opts = map__31521__$1;
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31521__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var coerce_response_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31521__$1,new cljs.core.Keyword(null,"coerce-response?","coerce-response?",1125033091));
return (new reitit.coercion.spec.t_reitit$coercion$spec31522(p__31520,map__31521__$1,opts,transformers,coerce_response_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.coercion","coercion","reitit.coercion/coercion",-866612966)], null)));
});
reitit.coercion.spec.coercion = reitit.coercion.spec.create(reitit.coercion.spec.default_options);

//# sourceMappingURL=reitit.coercion.spec.js.map
