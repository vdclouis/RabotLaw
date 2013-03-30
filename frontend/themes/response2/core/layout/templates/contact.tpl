{include:core/layout/templates/head.tpl}

<body>
	<header>
		<img class="logo" src="http://placekitten.com/40/30" alt="logo">
		<h1 class="logo"><a href="/" title="{$siteTitle}">{$siteTitle}</a></h1>
		<h2 id="sub-title">Gents advocatenkantoor</h2>
		<nav class="menu">
			{$var|getnavigation:'page':0:1}
			<img id="nav" src="{$THEME_URL}/core/layout/images/nav.png" alt="navigation">
		</nav>
		<nav class="lang">
			{include:theme/response2/core/layout/templates/languages.tpl}
		</nav>
	</header>
	<div class="content">
		{* Top position *}
		{iteration:positionTop}
			{$positionTop.blockContent}
		{/iteration:positionTop}

		{* Left position *}
		{iteration:positionLeft}
			{option:positionLeft.blockIsHTML}
				{$positionLeft.blockContent}	
			{/option:positionLeft.blockIsHTML}

			{option:!positionLeft.blockIsHTML}
				{$positionLeft.blockContent}
			{/option:!positionLeft.blockIsHTML}
		{/iteration:positionLeft}

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
