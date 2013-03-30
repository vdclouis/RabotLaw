{include:core/layout/templates/head.tpl}

<body>
	<header>
		<img class="logo" src="http://placekitten.com/40/30" alt="logo">
		<h1><a href="/" title="{$siteTitle}">{$siteTitle}</a></h1>
		<nav class="menu">
			{$var|getnavigation:'page':0:1}
			<img id="nav" src="{$THEME_URL}/core/layout/images/nav.png" alt="navigation">
		</nav>
		<nav class="lang">
			{include:core/layout/templates/languages.tpl}
		</nav>
	</header>
	<div class="content">
		{* Main position *}
		{iteration:positionMain}
			{option:positionMain.blockIsHTML}
				{$positionMain.blockContent}
			{/option:positionMain.blockIsHTML}
			
			{option:!positionMain.blockIsHTML}
				{$positionMain.blockContent}
			{/option:!positionMain.blockIsHTML}
		{/iteration:positionMain}	
	</div>


{include:core/layout/templates/footer.tpl}