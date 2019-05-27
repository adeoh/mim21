// import "../js/loop.js";

var jquery = require("jquery");
window.$ = window.jQuery = jquery;

console.log("gallery loaded");

const Arena = require('are.na');

module.exports = {
  render: function(element) {
    let arena = new Arena({
      accessToken: '06897e1d9d04d35447c07271de75adb934db290d65700362e06a85b2e41637f3'
    });
    var container = document.getElementById('gallery');
    arena.channel('folio2020').get()
      .then(chan => {
        chan.contents.map(item => {
          var imgSrc = (item.image.original.url);
          console.log(imgSrc);
          for (var i = 0; i <= 0; i++) {
            var node = new Image();
            node.setAttribute('src', imgSrc);
            container.appendChild(node);
          }
        });
				$('#gallery > img:nth-child(1)').clone(true).appendTo('#gallery').addClass('is-clone is-start');
				$('#gallery > img:nth-child(2)').clone(true).appendTo('#gallery').addClass('is-clone');
      })
      .catch(err => console.log(err));
  }
}
