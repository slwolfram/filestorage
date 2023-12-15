goog.provide('filestorage.views.authorization');
filestorage.views.authorization.password_box = (function filestorage$views$authorization$password_box(pw){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),pw], null));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(s)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27149_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),p1__27149_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
});
filestorage.views.authorization.header = (function filestorage$views$authorization$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 0"], null)], null),"pleroma|net"], null)], null);
});
/**
 * Check if the value is nil, then apply the predicate
 */
filestorage.views.authorization.check_nil_then_predicate = (function filestorage$views$authorization$check_nil_then_predicate(value,predicate){
if((value == null)){
return false;
} else {
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(value) : predicate.call(null,value));
}
});
filestorage.views.authorization.valid_email_QMARK_ = (function filestorage$views$authorization$valid_email_QMARK_(email){
return filestorage.views.authorization.check_nil_then_predicate(email,(function (arg){
return cljs.core.boolean$(cljs.core.first(cljs.core.re_seq(/\w+@\w+.\w+/,arg)));
}));
});
filestorage.views.authorization.eight_or_more_characters_QMARK_ = (function filestorage$views$authorization$eight_or_more_characters_QMARK_(word){
return filestorage.views.authorization.check_nil_then_predicate(word,(function (arg){
return (cljs.core.count(arg) > (7));
}));
});
filestorage.views.authorization.has_special_character_QMARK_ = (function filestorage$views$authorization$has_special_character_QMARK_(word){
return filestorage.views.authorization.check_nil_then_predicate(word,(function (arg){
return cljs.core.boolean$(cljs.core.first(cljs.core.re_seq(/\W+/,arg)));
}));
});
filestorage.views.authorization.has_number_QMARK_ = (function filestorage$views$authorization$has_number_QMARK_(word){
return filestorage.views.authorization.check_nil_then_predicate(word,(function (arg){
return cljs.core.boolean$(cljs.core.re_seq(/\d+/,arg));
}));
});
filestorage.views.authorization.valid_password_QMARK_ = (function filestorage$views$authorization$valid_password_QMARK_(password){
var and__5043__auto__ = filestorage.views.authorization.eight_or_more_characters_QMARK_(password);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = filestorage.views.authorization.has_special_character_QMARK_(password);
if(cljs.core.truth_(and__5043__auto____$1)){
return filestorage.views.authorization.has_number_QMARK_(password);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * A prompt that will animate to help the user with a given input
 */
filestorage.views.authorization.prompt_message = (function filestorage$views$authorization$prompt_message(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-messages"], null)], null);
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message
 */
filestorage.views.authorization.input_and_prompt = (function filestorage$views$authorization$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element,required_QMARK_){
var input_focus = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref(input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.common.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
});
filestorage.views.authorization.email_form = (function filestorage$views$authorization$email_form(email_address_atom){
return filestorage.views.authorization.input_and_prompt("email","email","email",email_address_atom,filestorage.views.authorization.prompt_message("What's your email address?"),true);
});
filestorage.views.authorization.name_form = (function filestorage$views$authorization$name_form(name_atom){
return filestorage.views.authorization.input_and_prompt("name","name","text",name_atom,filestorage.views.authorization.prompt_message("What's your name?"),true);
});
/**
 * A list to describe which password requirements have been met so far
 */
filestorage.views.authorization.password_requirements = (function filestorage$views$authorization$password_requirements(password,requirements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (req){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(req)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),req], null));
}),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (req){
return cljs.core.not((function (){var G__27161 = cljs.core.deref(password);
var fexpr__27160 = new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015).cljs$core$IFn$_invoke$arity$1(req);
return (fexpr__27160.cljs$core$IFn$_invoke$arity$1 ? fexpr__27160.cljs$core$IFn$_invoke$arity$1(G__27161) : fexpr__27160.call(null,G__27161));
})());
}),requirements)))], null)], null);
});
filestorage.views.authorization.password_form = (function filestorage$views$authorization$password_form(password){
var password_type_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("password");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.input_and_prompt("password","password",cljs.core.deref(password_type_atom),password,filestorage.views.authorization.prompt_message("What's your password"),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.password_requirements,password,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"8 or more characters",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.views.authorization.eight_or_more_characters_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one special character",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.views.authorization.has_special_character_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one number",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.views.authorization.has_number_QMARK_], null)], null)], null)], null);
});
});
filestorage.views.authorization.password_form_noval = (function filestorage$views$authorization$password_form_noval(password){
var password_type_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("password");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.input_and_prompt("password","password",cljs.core.deref(password_type_atom),password,filestorage.views.authorization.prompt_message("What's your password"),true)], null)], null);
});
});
filestorage.views.authorization.wrap_as_element_in_form = (function filestorage$views$authorization$wrap_as_element_in_form(element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row form-group"], null),element], null);
});
filestorage.views.authorization.submit_registration = (function filestorage$views$authorization$submit_registration(email_address,name,password,errors,e){
console.log("submitting registration");

if(cljs.core.truth_(filestorage.views.authorization.valid_email_QMARK_(email_address))){
if(cljs.core.truth_(filestorage.views.authorization.valid_password_QMARK_(password))){
cljs.core.reset_BANG_(errors,"");

var data_27187 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"email","email",1415816706),email_address,new cljs.core.Keyword(null,"password","password",417022471),password], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/register",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),data_27187,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
var fexpr__27172_27188 = (function (){
console.log(r);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),r);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),"authorized");

return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("filestorage.core","home-page","filestorage.core/home-page",448081488));
})()
;
(fexpr__27172_27188.cljs$core$IFn$_invoke$arity$0 ? fexpr__27172_27188.cljs$core$IFn$_invoke$arity$0() : fexpr__27172_27188.call(null));

var fexpr__27173 = cljs.core.List.EMPTY;
return (fexpr__27173.cljs$core$IFn$_invoke$arity$0 ? fexpr__27173.cljs$core$IFn$_invoke$arity$0() : fexpr__27173.call(null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r,((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"response","response",-1068424192)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"response","response",-1068424192)),"detail")):((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))):null)));
})], null)], 0));
} else {
cljs.core.reset_BANG_(errors,"password is invalid");
}
} else {
cljs.core.reset_BANG_(errors,"email is invalid");
}

return e.preventDefault();
});
filestorage.views.authorization.registration_form = (function filestorage$views$authorization$registration_form(){
var email_address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"signup-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"register"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"display","display",242065432),""], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.views.authorization.submit_registration(cljs.core.deref(email_address),cljs.core.deref(name),cljs.core.deref(password),errors,e);
})], null),filestorage.views.authorization.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.email_form,email_address], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),filestorage.views.authorization.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.password_form,password], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submit-registration",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null);
});
});
filestorage.views.authorization.submit_login = (function filestorage$views$authorization$submit_login(email_address,password,errors,e){
console.log("submitting login");

if(cljs.core.truth_(filestorage.views.authorization.valid_email_QMARK_(email_address))){
if(cljs.core.truth_(filestorage.views.authorization.valid_password_QMARK_(password))){
var data_27189 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email_address,new cljs.core.Keyword(null,"password","password",417022471),password], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/login",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),data_27189,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
var fexpr__27178 = (function (){
console.log(r);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),r);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"state","state",-1988618099),"authorized");

return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("filestorage.core","home-page","filestorage.core/home-page",448081488));
})()
;
return (fexpr__27178.cljs$core$IFn$_invoke$arity$0 ? fexpr__27178.cljs$core$IFn$_invoke$arity$0() : fexpr__27178.call(null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r,((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"response","response",-1068424192)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"response","response",-1068424192)),"detail")):((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))):null)));
})], null)], 0));
} else {
cljs.core.reset_BANG_(errors,"password is invalid");
}
} else {
cljs.core.reset_BANG_(errors,"email is invalid");
}

return e.preventDefault();
});
filestorage.views.authorization.login_form = (function filestorage$views$authorization$login_form(){
var email_address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"login-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.views.authorization.submit_login(cljs.core.deref(email_address),cljs.core.deref(password),errors,e);
})], null),filestorage.views.authorization.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.email_form,email_address], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),filestorage.views.authorization.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.views.authorization.password_form_noval,password], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submit-login",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null);
});
});

//# sourceMappingURL=filestorage.views.authorization.js.map
