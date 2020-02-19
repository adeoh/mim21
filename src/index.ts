// import Vue from 'vue';
// import VueLoop from 'vue-loop'

import "./styles/normalize.scss";
import "./styles/custom.scss";
import "./js/favicon.js";
import "./js/scroll.js";
//
// new Vue({
//     el: '#gallery',
//
//     components: {
//         VueLoop
//     }
// })

window.onload = function() {
	  import('./components/id.js').then(function(page) {
	    page.render(document.getElementById("bio"));
	  });
	  import('./components/content.js').then(function(page) {
	    page.render(document.getElementById("content"));
	  });
	  import('./components/gallery.js').then(function(page) {
	    page.render(document.getElementById("gallery"));
	  });

  setTimeout(function() {
    var loader = document.getElementById("loader");
    var endProps = 'visibility .5s, opacity .5s';
    loader.style.WebkitTransition = endProps;
    loader.style.visibility = 'hidden';
    loader.style.opacity = '0';
  }, 2500);
}
