//#region node_modules/.nitro/vite/services/ssr/assets/hero-BZ5dFgXN.js
var SITE_NAME = "Sottosale Fishbar";
var SITE_URL_WITH_SLASH = `https://sottosalefishbar.it/`;
var SITE_TITLE = "Sottosale Fishbar Roseto degli Abruzzi | Pesce, pranzo e aperitivo";
var SITE_DESCRIPTION = "Sottosale Fishbar sul lungomare di Roseto degli Abruzzi: cucina di mare, pranzo dalle 12:00 alle 14:30, aperitivo dalle 18:00, cocktail e vini.";
var OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/mOCpVrrFHmalB4a4E0zoRZWULWG3/social-images/social-1784895245998-Opera_Instantané_2026-07-24_131348_preview--sottosalefishbar.lovable.app.webp";
var SITE_PHONE = "+393316250601";
var SITE_INSTAGRAM = "https://www.instagram.com/sottosale_roseto/";
var SITE_FACEBOOK = "https://www.facebook.com/sottosaleroseto/?ref=PROFILE_EDIT_xav_ig_profile_page_web#";
var FONT_STYLESHEET_HREF = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@300;400;500;600&display=swap";
var BREADCRUMB_ITEMS = [
	{
		label: "Home",
		href: SITE_URL_WITH_SLASH
	},
	{
		label: "Il posto",
		href: `${SITE_URL_WITH_SLASH}#about`
	},
	{
		label: "Menu",
		href: `${SITE_URL_WITH_SLASH}#menu`
	},
	{
		label: "FAQ",
		href: `${SITE_URL_WITH_SLASH}#faq`
	}
];
var FAQ_ITEMS = [
	{
		question: "A che ora servite il pranzo e l'aperitivo?",
		answer: "Il pranzo e' disponibile dalle 12:00 alle 14:30. L'aperitivo parte dalle 18:00 e continua fino a chiusura."
	},
	{
		question: "Devo prenotare un tavolo?",
		answer: "La prenotazione e' fortemente consigliata, soprattutto per il tramonto, i weekend e i tavoli piu richiesti vista mare."
	},
	{
		question: "Gestite allergeni e intolleranze?",
		answer: "Sì. Trovi la lista completa degli allergeni nella pagina e ti consigliamo di comunicare sempre eventuali esigenze alimentari al personale."
	},
	{
		question: "Cosa posso ordinare all'aperitivo?",
		answer: "Puoi scegliere piatti di mare, fritti, assaggi dello chef, cocktail, gin e una selezione di vini. Scopri il menu completo nella sezione Menu."
	},
	{
		question: "Dove si trova Sottosale Fishbar?",
		answer: "Ci trovi sul lungomare di Roseto degli Abruzzi, in Lungomare Trento. Usa la mappa o apri le indicazioni per raggiungerci velocemente."
	}
];
var DAYS_OF_WEEK = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];
var LOCAL_BUSINESS_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "Restaurant",
	name: SITE_NAME,
	url: SITE_URL_WITH_SLASH,
	description: SITE_DESCRIPTION,
	image: OG_IMAGE,
	telephone: SITE_PHONE,
	priceRange: "EUR 10-30",
	servesCuisine: [
		"Seafood",
		"Italian",
		"Cocktail bar"
	],
	acceptsReservations: true,
	menu: `${SITE_URL_WITH_SLASH}#menu`,
	areaServed: {
		"@type": "City",
		name: "Roseto degli Abruzzi"
	},
	address: {
		"@type": "PostalAddress",
		streetAddress: "Lungomare Trento",
		addressLocality: "Roseto degli Abruzzi",
		addressRegion: "TE",
		postalCode: "64026",
		addressCountry: "IT"
	},
	openingHoursSpecification: [{
		"@type": "OpeningHoursSpecification",
		dayOfWeek: DAYS_OF_WEEK,
		opens: "12:00",
		closes: "14:30"
	}, {
		"@type": "OpeningHoursSpecification",
		dayOfWeek: DAYS_OF_WEEK,
		opens: "18:00",
		closes: "02:00"
	}],
	sameAs: [SITE_INSTAGRAM, SITE_FACEBOOK]
};
var BREADCRUMB_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: BREADCRUMB_ITEMS.map((item, index) => ({
		"@type": "ListItem",
		position: index + 1,
		name: item.label,
		item: item.href
	}))
};
var FAQ_SCHEMA = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: FAQ_ITEMS.map((item) => ({
		"@type": "Question",
		name: item.question,
		acceptedAnswer: {
			"@type": "Answer",
			text: item.answer
		}
	}))
};
function buildJsonLdScript(data) {
	return {
		type: "application/ld+json",
		children: JSON.stringify(data)
	};
}
var hero_default = "/assets/hero-RLlld_o6.jpg";
//#endregion
export { LOCAL_BUSINESS_SCHEMA as a, SITE_NAME as c, buildJsonLdScript as d, hero_default as f, FONT_STYLESHEET_HREF as i, SITE_TITLE as l, FAQ_ITEMS as n, OG_IMAGE as o, FAQ_SCHEMA as r, SITE_DESCRIPTION as s, BREADCRUMB_SCHEMA as t, SITE_URL_WITH_SLASH as u };
