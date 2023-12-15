goog.provide('filestorage.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","load-app","filestorage.events/load-app",251773859),(function (p__17616,_){
var map__17617 = p__17616;
var map__17617__$1 = cljs.core.__destructure_map(map__17617);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17617__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,filestorage.db.default_db], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","clear-http-results","filestorage.events/clear-http-results",-338840747),(function (db,p__17618){
var vec__17619 = p__17618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17619,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17619,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","success-http-result","filestorage.events/success-http-result",1467542349),(function (db,p__17622){
var vec__17623 = p__17622;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17623,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","failure-http-result","filestorage.events/failure-http-result",113630384),(function (db,p__17626){
var vec__17627 = p__17626;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17627,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","registration-error","filestorage.events/registration-error",1181141009),(function (db,p__17630){
var vec__17631 = p__17630;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"registration-error","registration-error",-205059943),result);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","upload-file","filestorage.events/upload-file",464613294),(function filestorage$events$upload_file(db,p__17634){
var vec__17635 = p__17634;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(0),null);
var map__17638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17635,(1),null);
var map__17638__$1 = cljs.core.__destructure_map(map__17638);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17638__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17638__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17638__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17638__$1,new cljs.core.Keyword(null,"on-success-kvec","on-success-kvec",-515976259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_kvec,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("filestorage.events","failure-http-result","filestorage.events/failure-http-result",113630384)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","submit-post-request","filestorage.events/submit-post-request",-978098604),(function filestorage$events$submit_post_request(db,p__17639){
var vec__17640 = p__17639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17640,(0),null);
var map__17643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17640,(1),null);
var map__17643__$1 = cljs.core.__destructure_map(map__17643);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17643__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17643__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17643__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17643__$1,new cljs.core.Keyword(null,"on-success-kvec","on-success-kvec",-515976259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
var on_failure_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17643__$1,new cljs.core.Keyword(null,"on-failure-kvec","on-failure-kvec",-335149778));
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_kvec,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure_kvec], null)], null);
}));

//# sourceMappingURL=filestorage.events.js.map
