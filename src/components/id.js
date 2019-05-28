console.log("id loaded");
module.exports = {
  render: function(element) {
    element.innerHTML = `
			<article id="left" class="d-s">
				<ul>
					<li>ALEJANDRO DORANTES, STUDIO </li>
					<li>DESIGN, ART & DEVELOPMENT </li>
					<li>MONTERREY, N.L.M.X.</li>
				</ul>

				<ul>
					<li>‍<a href="https://facebook.com/adeohcore">Book of Faces</a></li>
					<li><a href="https://instagram.com/adeoh">Instant Telegram</a></li>
				</ul>

				<ul>
					<li><a href="/contact">Make contact</a>
					<li><a href="/curriculum">Curriculum vitæ</a></li>
					<li><a href="/portfolio">Request portfolio</a></li>
				</ul>

				<ul>
					<li><a href="https://are.na/alejandro-dorantes">Are.na</a></li>
					<li><a href="https://dribbble.com/alejandro">Dribbble</a></li>
					<li><a href="https://www.behance.net/adeoh">Bēhance</a></li>
				</ul>

				<ul>
					<li><a href="https://unsplash.com/@adeoh">Unsplash</a></li>
					<li><a href="">YouTube</a></li>
					<li><a href="">Last.fm</a></li>
				</ul>
				
			</article>
			`;
  }
}
