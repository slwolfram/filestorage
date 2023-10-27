
shadow.cljs.devtools.client.env.module_loaded('main');

try { filestorage.core.init_BANG_(); } catch (e) { console.error("An error occurred when calling (filestorage.core/init!)"); throw(e); }