goog.provide('filestorage.main');
filestorage.main.password_box = (function filestorage$main$password_box(pw){
var s = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),pw], null));
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(s)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__21056_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),p1__21056_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
});
filestorage.main.header = (function filestorage$main$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 0"], null)], null),"pleroma|net"], null)], null);
});
/**
 * Check if the value is nil, then apply the predicate
 */
filestorage.main.check_nil_then_predicate = (function filestorage$main$check_nil_then_predicate(value,predicate){
if((value == null)){
return false;
} else {
return (predicate.cljs$core$IFn$_invoke$arity$1 ? predicate.cljs$core$IFn$_invoke$arity$1(value) : predicate.call(null,value));
}
});
filestorage.main.valid_email_QMARK_ = (function filestorage$main$valid_email_QMARK_(email){
return filestorage.main.check_nil_then_predicate(email,(function (arg){
return cljs.core.boolean$(cljs.core.first(cljs.core.re_seq(/\w+@\w+.\w+/,arg)));
}));
});
filestorage.main.eight_or_more_characters_QMARK_ = (function filestorage$main$eight_or_more_characters_QMARK_(word){
return filestorage.main.check_nil_then_predicate(word,(function (arg){
return (cljs.core.count(arg) > (7));
}));
});
filestorage.main.has_special_character_QMARK_ = (function filestorage$main$has_special_character_QMARK_(word){
return filestorage.main.check_nil_then_predicate(word,(function (arg){
return cljs.core.boolean$(cljs.core.first(cljs.core.re_seq(/\W+/,arg)));
}));
});
filestorage.main.has_number_QMARK_ = (function filestorage$main$has_number_QMARK_(word){
return filestorage.main.check_nil_then_predicate(word,(function (arg){
return cljs.core.boolean$(cljs.core.re_seq(/\d+/,arg));
}));
});
filestorage.main.valid_password_QMARK_ = (function filestorage$main$valid_password_QMARK_(password){
var and__5043__auto__ = filestorage.main.eight_or_more_characters_QMARK_(password);
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = filestorage.main.has_special_character_QMARK_(password);
if(cljs.core.truth_(and__5043__auto____$1)){
return filestorage.main.has_number_QMARK_(password);
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
filestorage.main.prompt_message = (function filestorage$main$prompt_message(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"my-messages"], null)], null);
});
/**
 * An input element which updates its value and on focus parameters on change, blur, and focus
 */
filestorage.main.input_element = (function filestorage$main$input_element(id,name,type,value,in_focus){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006)],[(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),name,cljs.core.deref(value),(function (arg){
if((cljs.core.deref(value) == null)){
cljs.core.reset_BANG_(value,"");
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(in_focus,cljs.core.not);
}),type,id,"form-control",(function (p1__21057_SHARP_){
return cljs.core.reset_BANG_(value,p1__21057_SHARP_.target.value);
}),""])], null);
});
/**
 * Creates an input box and a prompt box that appears above the input when the input comes into focus. Also throws in a little required message
 */
filestorage.main.input_and_prompt = (function filestorage$main$input_and_prompt(label_value,input_name,input_type,input_element_arg,prompt_element,required_QMARK_){
var input_focus = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label_value], null),(cljs.core.truth_(cljs.core.deref(input_focus))?prompt_element:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.input_element,input_name,input_name,input_type,input_element_arg,input_focus], null)], null);
});
});
filestorage.main.email_form = (function filestorage$main$email_form(email_address_atom){
return filestorage.main.input_and_prompt("email","email","email",email_address_atom,filestorage.main.prompt_message("What's your email address?"),true);
});
filestorage.main.name_form = (function filestorage$main$name_form(name_atom){
return filestorage.main.input_and_prompt("name","name","text",name_atom,filestorage.main.prompt_message("What's your name?"),true);
});
/**
 * A list to describe which password requirements have been met so far
 */
filestorage.main.password_requirements = (function filestorage$main$password_requirements(password,requirements){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (req){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(req)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),req], null));
}),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (req){
return cljs.core.not((function (){var G__21059 = cljs.core.deref(password);
var fexpr__21058 = new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015).cljs$core$IFn$_invoke$arity$1(req);
return (fexpr__21058.cljs$core$IFn$_invoke$arity$1 ? fexpr__21058.cljs$core$IFn$_invoke$arity$1(G__21059) : fexpr__21058.call(null,G__21059));
})());
}),requirements)))], null)], null);
});
filestorage.main.password_form = (function filestorage$main$password_form(password){
var password_type_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("password");
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.input_and_prompt("password","password",cljs.core.deref(password_type_atom),password,filestorage.main.prompt_message("What's your password"),true)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.password_requirements,password,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"8 or more characters",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.main.eight_or_more_characters_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one special character",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.main.has_special_character_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"At least one number",new cljs.core.Keyword(null,"check-fn","check-fn",-1710398015),filestorage.main.has_number_QMARK_], null)], null)], null)], null);
});
});
filestorage.main.password_form_noval = (function filestorage$main$password_form_noval(password){
var password_type_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("password");
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.input_and_prompt("password","password",cljs.core.deref(password_type_atom),password,filestorage.main.prompt_message("What's your password"),true)], null)], null);
});
});
filestorage.main.wrap_as_element_in_form = (function filestorage$main$wrap_as_element_in_form(element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row form-group"], null),element], null);
});
filestorage.main.submit_registration = (function filestorage$main$submit_registration(email_address,name,password,errors,e){
console.log("submitting registration");

if(cljs.core.truth_(filestorage.main.valid_email_QMARK_(email_address))){
if(cljs.core.truth_(filestorage.main.valid_password_QMARK_(password))){
cljs.core.reset_BANG_(errors,"");

var data_21065 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"email","email",1415816706),email_address,new cljs.core.Keyword(null,"password","password",417022471),password], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/register",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),data_21065,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
console.log(r,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),r),reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("filestorage.core","home-page","filestorage.core/home-page",448081488)));

var fexpr__21060 = cljs.core.List.EMPTY;
return (fexpr__21060.cljs$core$IFn$_invoke$arity$0 ? fexpr__21060.cljs$core$IFn$_invoke$arity$0() : fexpr__21060.call(null));
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
filestorage.main.registration_form = (function filestorage$main$registration_form(){
var email_address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"signup-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"register"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"display","display",242065432),""], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"display","display",242065432),""], null)], null),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"registration-errors","registration-errors",1579698570)], null)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.main.submit_registration(cljs.core.deref(email_address),cljs.core.deref(name),cljs.core.deref(password),errors,e);
})], null),filestorage.main.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.email_form,email_address], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),filestorage.main.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.password_form,password], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submit-registration",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null);
});
});
filestorage.main.submit_login = (function filestorage$main$submit_login(email_address,password,errors,e){
console.log("submitting login");

if(cljs.core.truth_(filestorage.main.valid_email_QMARK_(email_address))){
if(cljs.core.truth_(filestorage.main.valid_password_QMARK_(password))){
var data_21066 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email_address,new cljs.core.Keyword(null,"password","password",417022471),password], null);
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/login",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"params","params",710516235),data_21066,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return console.log(r,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filestorage.db.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),r),reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("filestorage.core","home-page","filestorage.core/home-page",448081488)));
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
filestorage.main.login_form = (function filestorage$main$login_form(){
var email_address = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var password = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"login-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"login"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.main.submit_login(cljs.core.deref(email_address),cljs.core.deref(password),errors,e);
})], null),filestorage.main.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.email_form,email_address], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),filestorage.main.wrap_as_element_in_form(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.password_form_noval,password], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"submit-login",new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit"], null)], null)], null);
});
});
/**
 * submit the file that is on input `#input-id`
 */
filestorage.main.submit_file = (function filestorage$main$submit_file(input_id,errors,e){
var el_21067 = document.getElementById(input_id);
var name_21068 = el_21067.name;
var file_21069 = (el_21067.files[(0)]);
var form_21070 = document.getElementById("upload-form");
var form_data_21071 = (new FormData());
var __21072 = form_data_21071.append("file",file_21069);
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",el_21067.value)))){
ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:5050/api/upload",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"token","access_token"], null)))].join('')], null),new cljs.core.Keyword(null,"body","body",-2049205669),form_data_21071,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (r){
return console.log(r,cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filestorage.db.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"files"], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)),cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filestorage.db.app_state,cljs.core.update,new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0)),cljs.core.reset_BANG_(errors,""),form_21070.reset());
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (r){
return console.log(r,((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"response","response",-1068424192)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"response","response",-1068424192)),"detail")):((cljs.core.contains_QMARK_(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478)))?cljs.core.reset_BANG_(errors,cljs.core.get.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"status-text","status-text",-1834235478))):null)));
})], null)], 0));
} else {
cljs.core.reset_BANG_(errors,"No file selected");
}

return e.preventDefault();
});
/**
 * an image-selection element that shows the image you've chosen.
 *   This is a form-2 reagent component so we can avoid global state.
 *   https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function
 */
filestorage.main.file_selector = (function filestorage$main$file_selector(){
var UPLOADED_FILE = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var bg_image_style = (function (){
var temp__5802__auto__ = cljs.core.deref(UPLOADED_FILE);
if(cljs.core.truth_(temp__5802__auto__)){
var i = temp__5802__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),")"].join('')], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"red"], null);
}
});
var input_id = "image-in";
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cntnr","div.cntnr",-1450244708),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"errors",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),cljs.core.deref(errors)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"upload-form",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (e){
return filestorage.main.submit_file(input_id,errors,e);
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"id","id",-1388402092),input_id,new cljs.core.Keyword(null,"enc-type","enc-type",-1746291599),"multipart/form-data"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.display-image","div.display-image",816542142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"300px",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"style","style",-496642736),bg_image_style()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Submit"], null)], null)], null);
});
});
/**
 * an image-selection element that shows the image you've chosen.
 *   This is a form-2 reagent component so we can avoid global state.
 *   https://github.com/reagent-project/reagent/blob/master/doc/CreatingReagentComponents.md#form-2--a-function-returning-a-function
 */
filestorage.main.file_viewer = (function filestorage$main$file_viewer(){
var files = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var input_id = "file-viewer";
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cntnr","div.cntnr",-1450244708),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"file-grid"], null),(function (){var iter__5523__auto__ = (function filestorage$main$file_viewer_$_iter__21061(s__21062){
return (new cljs.core.LazySeq(null,(function (){
var s__21062__$1 = s__21062;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21062__$1);
if(temp__5804__auto__){
var s__21062__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21062__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__21062__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__21064 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__21063 = (0);
while(true){
if((i__21063 < size__5522__auto__)){
var file_row = cljs.core._nth(c__5521__auto__,i__21063);
cljs.core.chunk_append(b__21064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["http://localhost:5050/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath"))].join('')], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename")], null)], null)], null));

var G__21073 = (i__21063 + (1));
i__21063 = G__21073;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21064),filestorage$main$file_viewer_$_iter__21061(cljs.core.chunk_rest(s__21062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21064),null);
}
} else {
var file_row = cljs.core.first(s__21062__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["http://localhost:5050/download/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filepath"))].join('')], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_row,"filename")], null)], null)], null),filestorage$main$file_viewer_$_iter__21061(cljs.core.rest(s__21062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(filestorage.db.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"user","user",1532431356),"files"], null)));
})()], null)], null);
});
});
filestorage.main.home = (function filestorage$main$home(){
if((!(cljs.core.contains_QMARK_(cljs.core.deref(filestorage.db.app_state),new cljs.core.Keyword(null,"user","user",1532431356))))){
reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("filestorage.core","login-page","filestorage.core/login-page",168899251));
} else {
console.log("logged in");
}

return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"upload file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.file_selector,"file-selector"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"files"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filestorage.main.file_viewer,"file-viewer"], null)], null);
});

//# sourceMappingURL=filestorage.main.js.map
