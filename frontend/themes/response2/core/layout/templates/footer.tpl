	<footer>
		<div class="footer-content">
			<div>
				<h3>LINKS</h3>
				<ul class="links">
					<li><a href="/">LAW</a></li>
					<li><a href="/nl/team">TEAM</a></li>
					<li><a href="/nl/contact">CONTACT</a></li>
				</ul>
				<p class="copyright">&copy; {$now|date:'Y'} {$siteTitle} - Developed by <a href="http://integralstudios.be">▲</a></p>
			</div>

			<div>
				<h3>TEAM</h3>
				<ul>
					<li>PHILIPE DE VOS</li>
					<li>WIM BARTHOLOMEUS</li>
					<li>SABINE VAN ACKER</li>
				</ul>
			</div>
				
			<div>
				<h3>CONTACT</h3>
				<p>BEGIJNHOFLAAN 93, 9000 GENT</p>
			</div>
		</div>
	</footer>

	{* General Javascript *}
	{iteration:jsFiles}
		<script src="{$jsFiles.file}"></script>
	{/iteration:jsFiles}

	{* Theme specific Javascript *}
	<script src="{$THEME_URL}/core/layout/js/script.js"></script>

	{* Site wide HTML *}
	{$siteHTMLFooter}
</body>
</html>