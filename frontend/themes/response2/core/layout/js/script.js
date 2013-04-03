$(function(){

	//menu

	$('.mainnav').hide();

	$('#nav').click(function() {
		$('header h1').toggle();
		$('.mainnav').toggle();
		$(this).toggleClass('faded');
	});

	//team page
	var $exp = $('<div class="expander"></div>');

	$('figure').click(function() {
	    if ($(this).next().hasClass('expander')) {
	        $exp.slideToggle('slow');
	    } else if ($(this).data('id') == 'phil') {
	        $exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>aansprakelijkheidsrecht</li><li>Bemiddeling</li><li>Beslag</li><li>Bank & kredietrecht</li><li>Consumentenbescherming</li><li>Contractenrecht</li><ul><li>Algemene voorwaarden/offertes</li><li>Huur (gemeen recht/handelshuur/brouwerijovereenkomsten)</li><li>Koop</li><li>Aanneming bouwrecht</li><li>Lening</li><li>Bewaargeving & sekwester</li><li>Lastgeving</li><li>Lening</li><li>Dading</li></ul><li>Distributieovereenkomsten</li><ul><li>agentuur</li><li>concessie</li><li>franchising</li></ul><li>Electronische handel</li><li>Europees recht </li><li>Incasso (ook internationaal)</li><li>Intellectuele rechten </li><ul><li>Auteursrecht</li><li>Merken</li><li>Tekeningen en modellen</li><li>Octrooirecht</li><li>Licentiecontracten</li></ul><li>internationaal contractenrecht (koop & distributie)</li><li>internationaal privaatrecht</li><li>Marktpraktijken</li><li>Mededingingsrecht</li><li>Transportrecht</li><ul><li>binnenvaartrecht</li><li>zeerecht</li><li>wegvervoer (CMR)</li><li>luchtvaartrecht</li><li>vervoer over het spoor</li></ul><li>Vennootschapsrecht</li><li>Verenigingen en V.Z.W.’s</li><li>Verzekeringen</li><li>Zakenrecht</li><ul><li>Erfdienstbaarheden en vruchtgebruik</li><li>Mede-eigendom (appartementen)</li><li>Pandrecht, voorrechten & hypotheken</li></ul></ul><p>Personalia</p><ul><li>Licentiaat rechten KUL</li><li>Speciale licentie Zee- en binnenvaartrecht UFSIA</li><li>advocaat aan de balie te Gent sinds 1980</li><li>Scheepsvereffenaar</li><li>Erkend Bemiddelaar</li><li>Vice-Voorzitter van CONSILIUM IURIS EWIV</li><li>Stichter van het Tijdschrift voor Gentse Rechtspraak</li><li>Publicaties :</li><ul><li>De nieuwe wet betreffende de handelsagentuurovereenkomsten” Mys & Breesch, 1995.</li><li>Diverse artikelen over maritiem beslagrecht in het tijdschrift D.M.F.</li></ul></ul>').css('display', 'block');
	    } else if ($(this).data('id') == 'wim') {
	    	$exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>Arbitrage</li><ul><li>Distributieovereenkomsten (agentuur, concessie, franchising)</li><li>Europees recht</li><li>Faillissement </li><li>Internationaal privaatrecht</li><li>Invoer, Uitvoer en Doorvoer</li><li>Internationaal arbeidsrecht & sociale zekerheid</li></ul><li>Internationale contracten</li><ul><li>koop</li><li>aanneming & architecten (bouwrecht)</li><li>lening</li><li>bewaargeving</li><li>lastgeving</li><li>borgstelling</li></ul><li>Intellectuele rechten (auteursrecht, merken, octrooien, tekeningen & modellen)</li><li>Europees mededingingsrecht (Kartelrecht)</li><li>Transport </li><ul><li>Zeevaart</li><li>Binnenvaart</li><li>Wegtransport (C.M.R.)</li><li>Luchttransport</li><li>Spoorwegtransport</li></ul><li>Verzekeringen</li><ul><li>aansprakelijkheid motorrijtuigen</li><li>Brand & Ontploffing</li><li>Machinebreuk</li><li>Uitbatingsverzekering</li></ul><li>Nationale Arbitrage</li><li>Internationale Arbitrage</li><li>Instituten</li><li>Bemiddeling</li><li>Instituten</li></ul>').css('display', 'block');
	    } else if ($(this).data('id') == 'sab') {
	    	$exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>aansprakelijkheidsrecht</li><li>Contractenrecht </li><ul><li>Huur (gemeen recht/handelshuur/brouwerijovereenkomsten/pacht)</li><li>Koop</li><li>Aanneming & bouwrecht</li><li>Lening</li><li>Bewaargeving & sekwester</li><li>Lastgeving</li><li>Lening</li><li>Dading</li><li>Voorrechten en hypotheken</li></ul<li>Familierecht</li><ul><li>Adoptie</li><li>Afstamming & Ouderlijk gezag</li><li>Echtscheidingen en huwelijksvermogensrecht</li><li>Naam & nationaliteit</li><li>Onderhoudsgelden</li><li>Voogdij</li></ul><li>Strafrecht</li><li>Verkeersrecht</li><li>Verzekeringen</li><ul><li>aansprakelijkheidsverzekeringen</li><li>familiale verzekeringen</li></ul></ul><p>Personalia</p><ul><li>Licentiaat rechten RUG 1987</li><li>advocaat aan de balie te Gent sinds 1987 </li><li>stage bij mr. Patrick De Groote en Jan Van Crombrugge</li><li>oprichting van het kantoor “Van Engeland-Van Acker” , dat daarna overgegaan is in Rabotlawv<li>lid van de Raad van de Orde van Advocaten te Gentv</ul>').css('display', 'block');
	    } else if ($(this).data('id') == 'wil') {
	    	$exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>afstamming</li><li>aansprakelijkheidsrecht</li><li>Contractenrecht</li><ul><li>Algemene voorwaarden/offertes</li><li>Huur (gemeen recht/handelshuur/brouwerijovereenkomsten)</li><li>Koop</li><li>Aanneming bouwrecht</li><li>Lening</li><li>Bewaargeving & sekwester</li><li>Lastgeving</li><li>Lening</li><li>Dading</li><li>Voorrechten en hypotheken</li></ul><li>Erfrecht (ook schenkingen en testamenten)</li><li>Familierecht</li><ul><li>Adoptie</li><li>Afstamming & Ouderlijk gezag</li><li>Echtscheidingen en huwelijksvermogensrecht</li><li>Naam & nationaliteit</li><li>Onderhoudsgelden</li><li>Voogdij</li></ul><li>incasso</li><li>strafrecht</li><ul><p>Personalia</p><ul><li>Licentiaat rechten RUG 2002</li><li>Aanvullende opleiding criminologie RUG 2003</li><li>advocaat aan de balie te Gent sinds 2004</li></ul>').css('display', 'block');
	    } else if ($(this).data('id') == 'ann') {
	    	$exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>Auteursrecht</li><li>Beslag</li><li>Consumentenbescherming</li><li>Contractenrecht </li><ul><li>Huur (gemeen recht/handelshuur/brouwerijovereenkomsten/pacht)</li><li>Koop</li><li>Aanneming & bouwrecht</li><li>Lening</li><li>Bewaargeving & sekwester</li><li>Lastgeving</li><li>Lening</li><li>Dading</li><li>Voorrechten en hypotheken</li></ul><li>Erfrecht (ook schenkingen en testamenten)</li><li>Geesteszieken (voorlopig bewind)</li><li>Jeugdrecht</li></ul><p>Personalia</p><ul><li>Licentiaat rechten Ugent 2003</li><li>Advocaat aan de balie van Gent sinds 2003</li><li>Lector gerechtelijk privaatrecht en familiaal vermogensrecht aan HoGent (faculteit bedrijf en organisatie, opleiding rechtspraktijk) sinds 2009</li><li>Veelvuldige aanstellingen als voorlopig bewindvoerder sedert 2006</li></ul>').css('display', 'block');
	    } else if ($(this).data('id') == 'joh') {
	    	$exp.insertAfter(this).html('<h4>Voorkeurmateries:</h4><ul><li>Arbeidsrecht </li><li>Arbitrage </li><li>Contractenrecht </li><ul><li>Huur (gemeen recht/handelshuur/brouwerijovereenkomsten)</li><li>Koop</li><li>Aanneming bouwrecht</li><li>Lening</li><li>Lastgeving</li><li>Dading</li></ul><li>Distributieovereenkomsten </li><ul><li>agentuur</li><li>concessie</li><li>franchising</li></ul><li>Incasso</li><li>Transportrecht</li><ul><li>zeerecht</li><li>wegvervoer (CMR)</li></ul><li>Verzekeringen</li><ul><li>Brand & Ontploffing</li><li>Machinebreuk</li><li>Uitbatingsverzekering</li></ul><li>Verkeersrecht</li></ul><p>Personalia</p><li>Licentiaat rechten RUG 1987</li><li>Speciale licentie in haven en maritieme wetenschappen RUG 1989</li><li>Advocaat aan de balie te Gent sinds 1989 </li><li>Arbiter in handelszaken</li></ul>').css('display', 'block');
	    }
	});

});