goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__17626 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__17626.cljs$core$IFn$_invoke$arity$1 ? fexpr__17626.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__17626.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17627){
var vec__17628 = p__17627;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17628,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__17631 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__17631)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__17631)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__17631)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__17631)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__17631)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__17631)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17631)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__17632){
var map__17633 = p__17632;
var map__17633__$1 = cljs.core.__destructure_map(map__17633);
var request = map__17633__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17633__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17633__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17633__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__17634 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__17634,default_headers);

cljs_http.core.apply_response_type_BANG_(G__17634,response_type);

G__17634.setTimeoutInterval(timeout);

G__17634.setWithCredentials(send_credentials);

return G__17634;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__17635){
var map__17636 = p__17635;
var map__17636__$1 = cljs.core.__destructure_map(map__17636);
var request = map__17636__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17636__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5045__auto__ = request_method;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__17638 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__17638) : cljs_http.core.error_kw.call(null,G__17638));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_17691 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__17639_17692 = xhr;
G__17639_17692.setProgressEventsEnabled(true);

G__17639_17692.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17691,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__17639_17692.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17691,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14730__auto___17693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14731__auto__ = (function (){var switch__14660__auto__ = (function (state_17658){
var state_val_17659 = (state_17658[(1)]);
if((state_val_17659 === (1))){
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17658__$1,(2),cancel);
} else {
if((state_val_17659 === (2))){
var inst_17647 = (state_17658[(2)]);
var inst_17649 = xhr.isComplete();
var inst_17650 = cljs.core.not(inst_17649);
var state_17658__$1 = (function (){var statearr_17660 = state_17658;
(statearr_17660[(7)] = inst_17647);

return statearr_17660;
})();
if(inst_17650){
var statearr_17661_17694 = state_17658__$1;
(statearr_17661_17694[(1)] = (3));

} else {
var statearr_17662_17695 = state_17658__$1;
(statearr_17662_17695[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (3))){
var inst_17653 = xhr.abort();
var state_17658__$1 = state_17658;
var statearr_17663_17697 = state_17658__$1;
(statearr_17663_17697[(2)] = inst_17653);

(statearr_17663_17697[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (4))){
var state_17658__$1 = state_17658;
var statearr_17664_17698 = state_17658__$1;
(statearr_17664_17698[(2)] = null);

(statearr_17664_17698[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17659 === (5))){
var inst_17656 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17658__$1,inst_17656);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__14661__auto__ = null;
var cljs_http$core$xhr_$_state_machine__14661__auto____0 = (function (){
var statearr_17665 = [null,null,null,null,null,null,null,null];
(statearr_17665[(0)] = cljs_http$core$xhr_$_state_machine__14661__auto__);

(statearr_17665[(1)] = (1));

return statearr_17665;
});
var cljs_http$core$xhr_$_state_machine__14661__auto____1 = (function (state_17658){
while(true){
var ret_value__14662__auto__ = (function (){try{while(true){
var result__14663__auto__ = switch__14660__auto__(state_17658);
if(cljs.core.keyword_identical_QMARK_(result__14663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14663__auto__;
}
break;
}
}catch (e17666){var ex__14664__auto__ = e17666;
var statearr_17667_17699 = state_17658;
(statearr_17667_17699[(2)] = ex__14664__auto__);


if(cljs.core.seq((state_17658[(4)]))){
var statearr_17668_17700 = state_17658;
(statearr_17668_17700[(1)] = cljs.core.first((state_17658[(4)])));

} else {
throw ex__14664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17705 = state_17658;
state_17658 = G__17705;
continue;
} else {
return ret_value__14662__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__14661__auto__ = function(state_17658){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__14661__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__14661__auto____1.call(this,state_17658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__14661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__14661__auto____0;
cljs_http$core$xhr_$_state_machine__14661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__14661__auto____1;
return cljs_http$core$xhr_$_state_machine__14661__auto__;
})()
})();
var state__14732__auto__ = (function (){var statearr_17669 = f__14731__auto__();
(statearr_17669[(6)] = c__14730__auto___17693);

return statearr_17669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14732__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17670){
var map__17671 = p__17670;
var map__17671__$1 = cljs.core.__destructure_map(map__17671);
var request = map__17671__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17671__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17671__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_17706 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_17706], null));

if(cljs.core.truth_(cancel)){
var c__14730__auto___17708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14731__auto__ = (function (){var switch__14660__auto__ = (function (state_17676){
var state_val_17677 = (state_17676[(1)]);
if((state_val_17677 === (1))){
var state_17676__$1 = state_17676;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17676__$1,(2),cancel);
} else {
if((state_val_17677 === (2))){
var inst_17673 = (state_17676[(2)]);
var inst_17674 = jsonp.cancel(req_17706);
var state_17676__$1 = (function (){var statearr_17678 = state_17676;
(statearr_17678[(7)] = inst_17673);

return statearr_17678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17676__$1,inst_17674);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__14661__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__14661__auto____0 = (function (){
var statearr_17679 = [null,null,null,null,null,null,null,null];
(statearr_17679[(0)] = cljs_http$core$jsonp_$_state_machine__14661__auto__);

(statearr_17679[(1)] = (1));

return statearr_17679;
});
var cljs_http$core$jsonp_$_state_machine__14661__auto____1 = (function (state_17676){
while(true){
var ret_value__14662__auto__ = (function (){try{while(true){
var result__14663__auto__ = switch__14660__auto__(state_17676);
if(cljs.core.keyword_identical_QMARK_(result__14663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14663__auto__;
}
break;
}
}catch (e17680){var ex__14664__auto__ = e17680;
var statearr_17681_17709 = state_17676;
(statearr_17681_17709[(2)] = ex__14664__auto__);


if(cljs.core.seq((state_17676[(4)]))){
var statearr_17682_17710 = state_17676;
(statearr_17682_17710[(1)] = cljs.core.first((state_17676[(4)])));

} else {
throw ex__14664__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14662__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17711 = state_17676;
state_17676 = G__17711;
continue;
} else {
return ret_value__14662__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__14661__auto__ = function(state_17676){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__14661__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__14661__auto____1.call(this,state_17676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__14661__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__14661__auto____0;
cljs_http$core$jsonp_$_state_machine__14661__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__14661__auto____1;
return cljs_http$core$jsonp_$_state_machine__14661__auto__;
})()
})();
var state__14732__auto__ = (function (){var statearr_17683 = f__14731__auto__();
(statearr_17683[(6)] = c__14730__auto___17708);

return statearr_17683;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14732__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17684){
var map__17685 = p__17684;
var map__17685__$1 = cljs.core.__destructure_map(map__17685);
var request = map__17685__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17685__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
