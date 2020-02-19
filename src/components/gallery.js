
import jquery from "jquery";

export default (window.$ = window.jQuery = jquery);
// import "../js/loop.js";
console.log("gallery loaded");

const Arena = require('are.na');

module.exports = {
  render: function(element) {
    let arena = new Arena({
      accessToken: '06897e1d9d04d35447c07271de75adb934db290d65700362e06a85b2e41637f3'
    });
    var container = document.querySelector('#gallery');
    arena.channel('folio2020').get()
      .then(chan => {
        chan.contents.map(item => {
          var imgSrc = (item.image.display.url);
          var imgOri = (item.image.original.url);
          console.log(imgSrc);

          for (var i = 0; i <= 0; i++) {
            var node = new Image();
            node.setAttribute('src', imgOri);
            node.setAttribute('class', 'item');
            node.setAttribute('data-original', imgOri);
            container.appendChild(node);
          }

        });
				// $('#gallery > img:nth-child(1)').clone(true).appendTo('#gallery').addClass('is-clone is-start');
				// $('#gallery > img:nth-child(2)').clone(true).appendTo('#gallery').addClass('is-clone');
      })
      .catch(err => console.log(err));
  }
}
