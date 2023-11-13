goog.provide('filestorage.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","load-app","filestorage.events/load-app",251773859),(function (p__20832,_){
var map__20833 = p__20832;
var map__20833__$1 = cljs.core.__destructure_map(map__20833);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20833__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([db,filestorage.db.default_db], 0))], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","clear-http-results","filestorage.events/clear-http-results",-338840747),(function (db,p__20834){
var vec__20835 = p__20834;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20835,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20835,(1),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","success-http-result","filestorage.events/success-http-result",1467542349),(function (db,p__20838){
var vec__20839 = p__20838;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","failure-http-result","filestorage.events/failure-http-result",113630384),(function (db,p__20842){
var vec__20843 = p__20842;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20843,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","registration-error","filestorage.events/registration-error",1181141009),(function (db,p__20846){
var vec__20847 = p__20846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20847,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"registration-error","registration-error",-205059943),result);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","upload-file","filestorage.events/upload-file",464613294),(function filestorage$events$upload_file(db,p__20850){
var vec__20851 = p__20850;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20851,(0),null);
var map__20854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20851,(1),null);
var map__20854__$1 = cljs.core.__destructure_map(map__20854);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20854__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20854__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20854__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20854__$1,new cljs.core.Keyword(null,"on-success-kvec","on-success-kvec",-515976259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_kvec,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("filestorage.events","failure-http-result","filestorage.events/failure-http-result",113630384)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("filestorage.events","submit-post-request","filestorage.events/submit-post-request",-978098604),(function filestorage$events$submit_post_request(db,p__20855){
var vec__20856 = p__20855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(0),null);
var map__20859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20856,(1),null);
var map__20859__$1 = cljs.core.__destructure_map(map__20859);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20859__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20859__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20859__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var on_success_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20859__$1,new cljs.core.Keyword(null,"on-success-kvec","on-success-kvec",-515976259),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-success","on-success",1786904109)], null));
var on_failure_kvec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20859__$1,new cljs.core.Keyword(null,"on-failure-kvec","on-failure-kvec",-335149778));
cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549)], 0));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"params","params",710516235),body,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success_kvec,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),on_failure_kvec], null)], null);
}));

//# sourceMappingURL=filestorage.events.js.map
