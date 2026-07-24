import { t as hero_default } from "./hero-PZ8xUrEt.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BLGpz3oB.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CFJOZt37.css";
var SITE_NAME = "Sottosale Fishbar";
var SITE_URL_WITH_SLASH = `https://sottosale.it/`;
var SITE_TITLE = "Sottosale Fishbar Roseto degli Abruzzi | Pesce, pranzo e aperitivo";
var SITE_DESCRIPTION = "Sottosale Fishbar sul lungomare di Roseto degli Abruzzi: cucina di mare, pranzo dalle 12:00 alle 14:30, aperitivo dalle 18:00, cocktail e vini.";
var OG_IMAGE = "https://sottosale.it/og-image.jpg";
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
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: SITE_NAME },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				name: "author",
				content: SITE_NAME
			},
			{
				name: "robots",
				content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
			},
			{
				name: "theme-color",
				content: "#d32f2f"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:locale",
				content: "it_IT"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: SITE_NAME
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_NAME
			},
			{
				name: "twitter:description",
				content: SITE_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: OG_IMAGE
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: FONT_STYLESHEET_HREF
			},
			{
				rel: "stylesheet",
				href: styles_default
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "it",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-CPlGisNW.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: SITE_TITLE },
			{
				name: "description",
				content: SITE_DESCRIPTION
			},
			{
				name: "robots",
				content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
			},
			{
				property: "og:title",
				content: SITE_TITLE
			},
			{
				property: "og:description",
				content: SITE_DESCRIPTION
			},
			{
				property: "og:type",
				content: "restaurant"
			},
			{
				property: "og:site_name",
				content: SITE_NAME
			},
			{
				property: "og:locale",
				content: "it_IT"
			},
			{
				property: "og:url",
				content: SITE_URL_WITH_SLASH
			},
			{
				property: "og:image",
				content: OG_IMAGE
			},
			{
				property: "og:image:alt",
				content: "Sottosale Fishbar a Roseto degli Abruzzi"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: SITE_TITLE
			},
			{
				name: "twitter:description",
				content: SITE_DESCRIPTION
			},
			{
				name: "twitter:image",
				content: OG_IMAGE
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL_WITH_SLASH
		}, {
			rel: "preload",
			as: "image",
			href: hero_default
		}],
		scripts: [
			buildJsonLdScript(LOCAL_BUSINESS_SCHEMA),
			buildJsonLdScript(BREADCRUMB_SCHEMA),
			buildJsonLdScript(FAQ_SCHEMA)
		]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
}).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
