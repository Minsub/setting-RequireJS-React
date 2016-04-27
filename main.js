require(['jsx!view/Navigation','jsx!view/App'], function(Navigation, App){
  "use strict";
  
  var navi = new Navigation();
  navi.render(document.getElementById("test2"));
  
  var app = new App();
  app.init();
}, function(error) {
	console.log("EEROR: "+error)
});