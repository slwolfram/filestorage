goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__48550 = e.target.readyState;
var fexpr__48549 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__48549.cljs$core$IFn$_invoke$arity$1 ? fexpr__48549.cljs$core$IFn$_invoke$arity$1(G__48550) : fexpr__48549.call(null,G__48550));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__48552,handler){
var map__48553 = p__48552;
var map__48553__$1 = (((((!((map__48553 == null))))?(((((map__48553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48553):map__48553);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48553__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48553__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48553__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__48551_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__48551_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___48571 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___48571)){
var response_type_48572 = temp__5735__auto___48571;
(this$__$1.responseType = cljs.core.name(response_type_48572));
} else {
}

var seq__48555_48573 = cljs.core.seq(headers);
var chunk__48556_48574 = null;
var count__48557_48575 = (0);
var i__48558_48576 = (0);
while(true){
if((i__48558_48576 < count__48557_48575)){
var vec__48565_48577 = chunk__48556_48574.cljs$core$IIndexed$_nth$arity$2(null,i__48558_48576);
var k_48578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565_48577,(0),null);
var v_48579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48565_48577,(1),null);
this$__$1.setRequestHeader(k_48578,v_48579);


var G__48580 = seq__48555_48573;
var G__48581 = chunk__48556_48574;
var G__48582 = count__48557_48575;
var G__48583 = (i__48558_48576 + (1));
seq__48555_48573 = G__48580;
chunk__48556_48574 = G__48581;
count__48557_48575 = G__48582;
i__48558_48576 = G__48583;
continue;
} else {
var temp__5735__auto___48584 = cljs.core.seq(seq__48555_48573);
if(temp__5735__auto___48584){
var seq__48555_48585__$1 = temp__5735__auto___48584;
if(cljs.core.chunked_seq_QMARK_(seq__48555_48585__$1)){
var c__4556__auto___48586 = cljs.core.chunk_first(seq__48555_48585__$1);
var G__48587 = cljs.core.chunk_rest(seq__48555_48585__$1);
var G__48588 = c__4556__auto___48586;
var G__48589 = cljs.core.count(c__4556__auto___48586);
var G__48590 = (0);
seq__48555_48573 = G__48587;
chunk__48556_48574 = G__48588;
count__48557_48575 = G__48589;
i__48558_48576 = G__48590;
continue;
} else {
var vec__48568_48591 = cljs.core.first(seq__48555_48585__$1);
var k_48592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48568_48591,(0),null);
var v_48593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48568_48591,(1),null);
this$__$1.setRequestHeader(k_48592,v_48593);


var G__48594 = cljs.core.next(seq__48555_48585__$1);
var G__48595 = null;
var G__48596 = (0);
var G__48597 = (0);
seq__48555_48573 = G__48594;
chunk__48556_48574 = G__48595;
count__48557_48575 = G__48596;
i__48558_48576 = G__48597;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
