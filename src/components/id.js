console.log("id loaded");
module.exports = {
  render : function(element){
      element.innerHTML = `
			<article id="left" class="d-s">
				<ul>
					<li>ALEJANDRO Dorantes, STUDIO </li>
					<li>DESIGN, ART & DEVELOPMENT </li>
					<li>MONTERREY, N.L.M.X.</li>
				</ul>
				<ul>
					<li><a href="/curriculum">CURRICULUM</a></li>
					<li><a href="/contact">MAKE CONTACT</a>
						<li><a href="/portfolio">REQUEST PORTFOLIO</a></li>
				</ul>
				<ul>
					<li>NETWORKS:</li>
					<li><a href="https://dribbble.com/alejandro">🏀DRIBBBLE</a></li>
					<li><a href="https://www.behance.net/adeoh">📘BēHANCE</a></li>
					<li><a href="https://are.na/alejandro-dorantes">✶✶ ARE.NA</a></li>
				</ul>

				<ul>
					<li>STATIONS:</li>
					<li><a href="https://unsplash.com/@adeoh">Unsplash 📸</a></li>
					<li><a href="">YOUTUBE 📼</a></li>
					<li><a href="">LAST.FM 📻</a></li>

				</ul>
				<ul>
					<li>SOCIAL 🤝</li>
					<li>‍<a href="https://facebook.com/adeohcore">FACEBOOK</a></li>
					<li><a href="https://instagram.com/adeoh">INSTAGRAM</a></li>
				</ul>
			</article>
			`;
}
}
