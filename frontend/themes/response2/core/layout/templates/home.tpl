{include:core/layout/templates/head.tpl}

<body>
	<header>
		<h1 class="logo"><a href="/" title="{$siteTitle}">{$siteTitle}</a></h1>
		<nav>
			{$var|getnavigation:'page':0:1}
		</nav>
		<nav>
			{include:core/layout/templates/languages.tpl}
		</nav>
	</header>

	{* Main position *}
	{iteration:positionMain}
		{option:positionMain.blockIsHTML}
			{$positionMain.blockContent}
		{/option:positionMain.blockIsHTML}
		
		{option:!positionMain.blockIsHTML}
			{$positionMain.blockContent}
		{/option:!positionMain.blockIsHTML}
	{/iteration:positionMain}


{include:core/layout/templates/footer.tpl}
