{option:languages}
	<ul>
		{iteration:languages}
			<li{option:languages.current} class="selected"{/option:languages.current}>
				<a href="{$languages.url}">
					<img src="{$THEME_URL}/core/layout/images/{$languages.label|uppercase}.png" alt="{$languages.label|uppercase}">
				</a>
			</li>
		{/iteration:languages}
	</ul>
{/option:languages}