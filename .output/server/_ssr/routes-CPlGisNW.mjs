import { n as __toESM } from "../_runtime.mjs";
import { t as hero_default } from "./hero-PZ8xUrEt.mjs";
import { a as AccordionTrigger$1, c as require_react, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, s as require_jsx_runtime, t as Accordion$1 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CPlGisNW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var menu_default = "/assets/menu-DygnFHMD.jpg";
var aperitivo_default = "/assets/aperitivo-lSaggNjp.jpg";
var dish_octopus_default = "/assets/dish-octopus-eenaKvGV.jpg";
var dish_tartare_default = "/assets/dish-tartare-Dc_oBWpo.jpg";
var dish_tagliolini_default = "/assets/dish-tagliolini-TXlMPxnj.jpg";
var dish_fritto_default = "/assets/dish-fritto-XX-OMFI1.jpg";
var dish_cocktails_default = "/assets/dish-cocktails-ZgdhmLA6.jpg";
var dish_cheesecake_default = "/assets/dish-cheesecake-DajgxU_q.jpg";
var dish_mussels_default = "/assets/dish-mussels-VZNmp_n3.jpg";
var dish_shrimp_default = "/assets/dish-shrimp-Bqftnh8R.jpg";
var dish_salmon_default = "/assets/dish-salmon-CZGfjaVB.jpg";
var dish_tuna_default = "/assets/dish-tuna-C48I6yEY.jpg";
var dish_fishbuns_default = "/assets/dish-fishbuns-Cl4DDZD4.jpg";
var dish_fries_default = "/assets/dish-fries-zHtCK0FU.jpg";
var dish_gnocchi_default = "/assets/dish-gnocchi-CUZDGPh6.jpg";
var dish_beer_default = "/assets/dish-beer-BB13nTIx.jpg";
var dish_wine_default = "/assets/dish-wine-CJimiNJp.jpg";
var dish_gin_default = "/assets/dish-gin-_3ooea16.jpg";
var dish_drinks_default = "/assets/dish-drinks-C8N8aPrb.jpg";
var dish_anchovies_default = "/assets/dish-anchovies-BMsssdQ8.jpg";
var dish_seafood_salad_default = "/assets/dish-seafood-salad-DadPGIhp.jpg";
var dish_skewers_default = "/assets/dish-skewers-C0FqSmxh.jpg";
var menu = [
	{
		id: "pranzo",
		title: {
			it: "Pranzo",
			en: "Lunch",
			es: "Almuerzo",
			fr: "Déjeuner",
			de: "Mittagessen"
		},
		items: [
			{
				it: "Tentacolo di polpo con salsa chimichurri",
				en: "Octopus tentacle with chimichurri sauce",
				es: "Tentáculo de pulpo con salsa chimichurri",
				fr: "Tentacule de poulpe, sauce chimichurri",
				de: "Oktopus-Tentakel mit Chimichurri-Sauce",
				price: "12",
				img: dish_octopus_default,
				allergens: ["Pesce", "Molluschi"]
			},
			{
				it: "Alici fritte con maionese allo yuzu",
				en: "Fried anchovies with yuzu mayo",
				es: "Boquerones fritos con mayonesa de yuzu",
				fr: "Anchois frits, mayo au yuzu",
				de: "Frittierte Sardellen mit Yuzu-Mayo",
				price: "9",
				img: dish_anchovies_default,
				allergens: [
					"Glutine",
					"Uova",
					"Pesce"
				]
			},
			{
				it: "Insalata di mare",
				en: "Seafood salad",
				es: "Ensalada de mariscos",
				fr: "Salade de fruits de mer",
				de: "Meeresfrüchtesalat",
				price: "11",
				img: dish_seafood_salad_default,
				allergens: [
					"Crostacei",
					"Pesce",
					"Molluschi"
				]
			},
			{
				it: "Sauté di cozze",
				en: "Sautéed mussels",
				es: "Salteado de mejillones",
				fr: "Moules sautées",
				de: "Sautierte Miesmuscheln",
				price: "8",
				img: dish_mussels_default,
				allergens: ["Molluschi"]
			},
			{
				it: "Pop corn di gamberi",
				en: "Shrimp popcorn",
				es: "Palomitas de gambas",
				fr: "Popcorn de crevettes",
				de: "Garnelen-Popcorn",
				price: "10",
				img: dish_shrimp_default,
				allergens: [
					"Glutine",
					"Pesce",
					"Soia"
				]
			},
			{
				it: "Tartare di tonno, stracciatella, salsa teriyaki e cipolla croccante",
				en: "Tuna tartare, stracciatella, teriyaki & crispy onion",
				es: "Tartar de atún, stracciatella, teriyaki y cebolla crujiente",
				fr: "Tartare de thon, stracciatella, teriyaki, oignon croustillant",
				de: "Thunfisch-Tatar, Stracciatella, Teriyaki & knusprige Zwiebel",
				price: "11",
				img: dish_tartare_default,
				allergens: [
					"Glutine",
					"Soia",
					"Latte"
				]
			},
			{
				it: "Raviolo di burrata, gazpacho, cozza e pane fritto",
				en: "Burrata raviolo, gazpacho, mussel & fried bread",
				es: "Raviolo de burrata, gazpacho, mejillón y pan frito",
				fr: "Raviole de burrata, gaspacho, moule, pain frit",
				de: "Burrata-Raviolo, Gazpacho, Muschel & frittiertes Brot",
				price: "13",
				img: dish_tagliolini_default
			},
			{
				it: "Tagliolini acqua e farina alle vongole",
				en: "Fresh tagliolini with clams",
				es: "Tagliolini frescos con almejas",
				fr: "Tagliolini frais aux palourdes",
				de: "Frische Tagliolini mit Venusmuscheln",
				price: "11",
				img: dish_tagliolini_default,
				allergens: [
					"Glutine",
					"Pesce",
					"Molluschi"
				]
			},
			{
				it: "Gnocchi, pesto di basilico, lime, crudo di gambero e nocciola",
				en: "Gnocchi, basil pesto, lime, raw shrimp & hazelnut",
				es: "Ñoquis, pesto de albahaca, lima, gamba cruda y avellana",
				fr: "Gnocchis, pesto de basilic, citron vert, crevette crue, noisette",
				de: "Gnocchi, Basilikumpesto, Limette, rohe Garnele & Haselnuss",
				price: "12",
				img: dish_gnocchi_default,
				allergens: [
					"Glutine",
					"Crostacei",
					"Uova",
					"Pesce",
					"Molluschi"
				]
			},
			{
				it: "Chitarra allo scoglio",
				en: "Chitarra pasta with mixed seafood",
				es: "Pasta chitarra con mariscos variados",
				fr: "Pâtes chitarra aux fruits de mer",
				de: "Chitarra-Pasta mit Meeresfrüchten",
				price: "12",
				img: dish_tagliolini_default,
				allergens: [
					"Glutine",
					"Uova",
					"Pesce",
					"Latte",
					"Frutta a guscio"
				]
			},
			{
				it: "Bistecca di tonno, pesto di olive taggiasche e acciughe",
				en: "Tuna steak, taggiasca olive & anchovy pesto",
				es: "Filete de atún, pesto de olivas taggiasca y anchoas",
				fr: "Steak de thon, pesto d'olives taggiasca et anchois",
				de: "Thunfischsteak, Taggiasca-Oliven- und Sardellenpesto",
				price: "15",
				img: dish_tuna_default,
				allergens: ["Pesce"]
			},
			{
				it: "Frittura di calamari e gamberi",
				en: "Fried calamari & shrimp",
				es: "Fritura de calamares y gambas",
				fr: "Friture de calamars et crevettes",
				de: "Frittierte Calamari & Garnelen",
				price: "15",
				img: dish_fritto_default,
				allergens: ["Pesce"]
			},
			{
				it: "Spiedini di calamari e gamberi alla griglia",
				en: "Grilled calamari & shrimp skewers",
				es: "Brochetas de calamar y gambas a la parrilla",
				fr: "Brochettes de calamar et crevettes grillées",
				de: "Gegrillte Calamari- & Garnelenspieße",
				price: "12",
				img: dish_skewers_default,
				allergens: ["Crostacei", "Pesce"]
			},
			{
				it: "Insalatona di gamberi",
				en: "Shrimp big salad",
				es: "Ensalada grande de gambas",
				fr: "Grande salade de crevettes",
				de: "Große Garnelensalat",
				price: "8",
				img: dish_seafood_salad_default,
				allergens: ["Crostacei", "Latte"]
			},
			{
				it: "Insalatona di tonno",
				en: "Tuna big salad",
				es: "Ensalada grande de atún",
				fr: "Grande salade de thon",
				de: "Große Thunfischsalat",
				price: "8",
				img: dish_tuna_default,
				allergens: [
					"Glutine",
					"Pesce",
					"Soia",
					"Latte"
				]
			},
			{
				it: "Cheesecake mango e passion fruit",
				en: "Mango & passion fruit cheesecake",
				es: "Tarta de queso mango y maracuyá",
				fr: "Cheesecake mangue et fruit de la passion",
				de: "Mango-Maracuja-Cheesecake",
				price: "6",
				img: dish_cheesecake_default,
				allergens: [
					"Glutine",
					"Uova",
					"Latte"
				]
			}
		]
	},
	{
		id: "aperitivo",
		title: {
			it: "Aperitivo",
			en: "Aperitivo",
			es: "Aperitivo",
			fr: "Apéritif",
			de: "Aperitif"
		},
		items: [
			{
				it: "Patatine fritte",
				en: "French fries",
				es: "Patatas fritas",
				fr: "Frites",
				de: "Pommes frites",
				price: "4",
				img: dish_fries_default,
				allergens: ["Glutine"]
			},
			{
				it: "Rainbow Fish Buns — 3 mini bun di pesce",
				en: "Rainbow Fish Buns — 3 fish sliders",
				es: "Rainbow Fish Buns — 3 mini burgers de pescado",
				fr: "Rainbow Fish Buns — 3 mini burgers de poisson",
				de: "Rainbow Fish Buns — 3 Mini-Fisch-Burger",
				price: "10",
				img: dish_fishbuns_default,
				allergens: [
					"Glutine",
					"Crostacei",
					"Uova",
					"Pesce",
					"Soia",
					"Latte",
					"Frutta a guscio",
					"Semi di Sesamo",
					"Molluschi"
				]
			},
			{
				it: "Insalata di mare",
				en: "Seafood salad",
				es: "Ensalada de mariscos",
				fr: "Salade de fruits de mer",
				de: "Meeresfrüchtesalat",
				price: "11",
				img: dish_seafood_salad_default,
				allergens: ["Crostacei", "Molluschi"]
			},
			{
				it: "Tagliere di pesce (a persona) — 3 assaggi dello chef",
				en: "Fish tasting board (per person) — 3 chef's picks",
				es: "Tabla de pescado (por persona) — 3 selecciones del chef",
				fr: "Planche de poissons (par personne) — 3 choix du chef",
				de: "Fisch-Verkostungsbrett (pro Person) — 3 Chef-Auswahl",
				price: "10",
				img: dish_salmon_default,
				allergens: [
					"Glutine",
					"Crostacei",
					"Pesce",
					"Soia",
					"Latte",
					"Molluschi"
				]
			},
			{
				it: "Frittura di calamari",
				en: "Fried calamari",
				es: "Calamares fritos",
				fr: "Calamars frits",
				de: "Frittierte Calamari",
				price: "15",
				img: dish_fritto_default,
				allergens: [
					"Glutine",
					"Pesce",
					"Molluschi"
				]
			},
			{
				it: "Spiedino calamari e gamberi alla griglia — 2 pz",
				en: "Grilled calamari & shrimp skewer — 2 pcs",
				es: "Brocheta de calamar y gambas — 2 uds",
				fr: "Brochette calamar & crevette — 2 pcs",
				de: "Calamari- & Garnelenspieß — 2 Stk.",
				price: "12",
				img: dish_skewers_default,
				allergens: ["Pesce", "Molluschi"]
			},
			{
				it: "Pop corn di gamberi",
				en: "Shrimp popcorn",
				es: "Palomitas de gambas",
				fr: "Popcorn de crevettes",
				de: "Garnelen-Popcorn",
				price: "9",
				img: dish_shrimp_default,
				allergens: [
					"Glutine",
					"Uova",
					"Pesce",
					"Soia",
					"Molluschi"
				]
			},
			{
				it: "Arrosticini di tonno — 5 pz",
				en: "Tuna skewers — 5 pcs",
				es: "Brochetas de atún — 5 uds",
				fr: "Brochettes de thon — 5 pcs",
				de: "Thunfisch-Spieße — 5 Stk.",
				price: "8",
				img: dish_tuna_default,
				allergens: ["Glutine", "Pesce"]
			},
			{
				it: "Sauté di cozze",
				en: "Sautéed mussels",
				es: "Salteado de mejillones",
				fr: "Moules sautées",
				de: "Sautierte Miesmuscheln",
				price: "8",
				img: dish_mussels_default,
				allergens: ["Molluschi"]
			},
			{
				it: "Alici fritte con maionese allo yuzu",
				en: "Fried anchovies with yuzu mayo",
				es: "Boquerones fritos con mayonesa de yuzu",
				fr: "Anchois frits, mayo au yuzu",
				de: "Frittierte Sardellen mit Yuzu-Mayo",
				price: "8",
				img: dish_anchovies_default,
				allergens: ["Glutine", "Pesce"]
			},
			{
				it: "Carpaccio di salmone, stracciatella e nocciola",
				en: "Salmon carpaccio, stracciatella & hazelnut",
				es: "Carpaccio de salmón, stracciatella y avellana",
				fr: "Carpaccio de saumon, stracciatella, noisette",
				de: "Lachs-Carpaccio, Stracciatella & Haselnuss",
				price: "12",
				img: dish_salmon_default,
				allergens: [
					"Pesce",
					"Latte",
					"Frutta a guscio"
				]
			},
			{
				it: "Tentacolo di polpo con salsa chimichurri",
				en: "Octopus tentacle with chimichurri",
				es: "Tentáculo de pulpo con chimichurri",
				fr: "Tentacule de poulpe, chimichurri",
				de: "Oktopus-Tentakel mit Chimichurri",
				price: "12",
				img: dish_octopus_default,
				allergens: ["Latte", "Molluschi"]
			}
		]
	},
	{
		id: "cocktails",
		title: {
			it: "Cocktails",
			en: "Cocktails",
			es: "Cócteles",
			fr: "Cocktails",
			de: "Cocktails"
		},
		items: [
			{
				it: "Spritz (Aperol, Campari, Hugo)",
				en: "Spritz (Aperol, Campari, Hugo)",
				es: "Spritz (Aperol, Campari, Hugo)",
				fr: "Spritz (Aperol, Campari, Hugo)",
				de: "Spritz (Aperol, Campari, Hugo)",
				price: "6",
				img: dish_cocktails_default
			},
			{
				it: "Gin Tonic / Lemon",
				en: "Gin Tonic / Lemon",
				es: "Gin Tonic / Lemon",
				fr: "Gin Tonic / Lemon",
				de: "Gin Tonic / Lemon",
				price: "7",
				img: dish_gin_default
			},
			{
				it: "Sour",
				en: "Sour",
				es: "Sour",
				fr: "Sour",
				de: "Sour",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Fizz",
				en: "Fizz",
				es: "Fizz",
				fr: "Fizz",
				de: "Fizz",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Martini",
				en: "Martini",
				es: "Martini",
				fr: "Martini",
				de: "Martini",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Mojito",
				en: "Mojito",
				es: "Mojito",
				fr: "Mojito",
				de: "Mojito",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Margarita",
				en: "Margarita",
				es: "Margarita",
				fr: "Margarita",
				de: "Margarita",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Tommy's Margarita",
				en: "Tommy's Margarita",
				es: "Tommy's Margarita",
				fr: "Tommy's Margarita",
				de: "Tommy's Margarita",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Bloody Mary",
				en: "Bloody Mary",
				es: "Bloody Mary",
				fr: "Bloody Mary",
				de: "Bloody Mary",
				price: "9",
				img: dish_cocktails_default
			},
			{
				it: "Daiquiri",
				en: "Daiquiri",
				es: "Daiquiri",
				fr: "Daïquiri",
				de: "Daiquiri",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Piña Colada",
				en: "Piña Colada",
				es: "Piña Colada",
				fr: "Piña Colada",
				de: "Piña Colada",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Smash Passion",
				en: "Smash Passion",
				es: "Smash Passion",
				fr: "Smash Passion",
				de: "Smash Passion",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Americano",
				en: "Americano",
				es: "Americano",
				fr: "Americano",
				de: "Americano",
				price: "7",
				img: dish_cocktails_default
			},
			{
				it: "Negroni",
				en: "Negroni",
				es: "Negroni",
				fr: "Negroni",
				de: "Negroni",
				price: "8",
				img: dish_cocktails_default
			},
			{
				it: "Moscow Mule",
				en: "Moscow Mule",
				es: "Moscow Mule",
				fr: "Moscow Mule",
				de: "Moscow Mule",
				price: "7",
				img: dish_cocktails_default
			}
		]
	},
	{
		id: "gin",
		title: {
			it: "Gintoneria",
			en: "Gin Bar",
			es: "Gin Bar",
			fr: "Bar à Gin",
			de: "Gin-Bar"
		},
		items: [
			{
				it: "Gin Mare",
				en: "Gin Mare",
				es: "Gin Mare",
				fr: "Gin Mare",
				de: "Gin Mare",
				price: "8",
				img: dish_gin_default
			},
			{
				it: "Hendrick's",
				en: "Hendrick's",
				es: "Hendrick's",
				fr: "Hendrick's",
				de: "Hendrick's",
				price: "8",
				img: dish_gin_default
			},
			{
				it: "Monkey 47",
				en: "Monkey 47",
				es: "Monkey 47",
				fr: "Monkey 47",
				de: "Monkey 47",
				price: "11",
				img: dish_gin_default
			},
			{
				it: "Malfy",
				en: "Malfy",
				es: "Malfy",
				fr: "Malfy",
				de: "Malfy",
				price: "8",
				img: dish_gin_default
			},
			{
				it: "Roku",
				en: "Roku",
				es: "Roku",
				fr: "Roku",
				de: "Roku",
				price: "8",
				img: dish_gin_default
			},
			{
				it: "Sipsmith",
				en: "Sipsmith",
				es: "Sipsmith",
				fr: "Sipsmith",
				de: "Sipsmith",
				price: "9",
				img: dish_gin_default
			},
			{
				it: "Tanqueray Ten",
				en: "Tanqueray Ten",
				es: "Tanqueray Ten",
				fr: "Tanqueray Ten",
				de: "Tanqueray Ten",
				price: "9",
				img: dish_gin_default
			}
		]
	},
	{
		id: "birre",
		title: {
			it: "Birre",
			en: "Beers",
			es: "Cervezas",
			fr: "Bières",
			de: "Biere"
		},
		items: [
			{
				it: "Benediktiner Hell 0.3 — spina",
				en: "Benediktiner Hell 0.3 — draft",
				es: "Benediktiner Hell 0.3 — de barril",
				fr: "Benediktiner Hell 0.3 — pression",
				de: "Benediktiner Hell 0,3 — vom Fass",
				price: "3",
				img: dish_beer_default
			},
			{
				it: "Benediktiner Hell 0.5 — spina",
				en: "Benediktiner Hell 0.5 — draft",
				es: "Benediktiner Hell 0.5 — de barril",
				fr: "Benediktiner Hell 0.5 — pression",
				de: "Benediktiner Hell 0,5 — vom Fass",
				price: "5.50",
				img: dish_beer_default
			},
			{
				it: "Hoegaarden 0.3 — spina",
				en: "Hoegaarden 0.3 — draft",
				es: "Hoegaarden 0.3 — de barril",
				fr: "Hoegaarden 0.3 — pression",
				de: "Hoegaarden 0,3 — vom Fass",
				price: "4",
				img: dish_beer_default
			},
			{
				it: "Hoegaarden 0.5 — spina",
				en: "Hoegaarden 0.5 — draft",
				es: "Hoegaarden 0.5 — de barril",
				fr: "Hoegaarden 0.5 — pression",
				de: "Hoegaarden 0,5 — vom Fass",
				price: "6",
				img: dish_beer_default
			},
			{
				it: "IPA Fever 0.3 — spina",
				en: "IPA Fever 0.3 — draft",
				es: "IPA Fever 0.3 — de barril",
				fr: "IPA Fever 0.3 — pression",
				de: "IPA Fever 0,3 — vom Fass",
				price: "4",
				img: dish_beer_default
			},
			{
				it: "IPA Fever 0.5 — spina",
				en: "IPA Fever 0.5 — draft",
				es: "IPA Fever 0.5 — de barril",
				fr: "IPA Fever 0.5 — pression",
				de: "IPA Fever 0,5 — vom Fass",
				price: "6",
				img: dish_beer_default
			},
			{
				it: "Peroni Nastro Azzurro",
				en: "Peroni Nastro Azzurro",
				es: "Peroni Nastro Azzurro",
				fr: "Peroni Nastro Azzurro",
				de: "Peroni Nastro Azzurro",
				price: "3",
				img: dish_beer_default
			},
			{
				it: "Corona",
				en: "Corona",
				es: "Corona",
				fr: "Corona",
				de: "Corona",
				price: "4",
				img: dish_beer_default
			},
			{
				it: "Tennent's",
				en: "Tennent's",
				es: "Tennent's",
				fr: "Tennent's",
				de: "Tennent's",
				price: "4",
				img: dish_beer_default
			}
		]
	},
	{
		id: "vini",
		title: {
			it: "Vini",
			en: "Wines",
			es: "Vinos",
			fr: "Vins",
			de: "Weine"
		},
		items: [
			{
				it: "Orlando Contucci Ponno — Cerasuolo",
				en: "Orlando Contucci Ponno — Cerasuolo",
				es: "Orlando Contucci Ponno — Cerasuolo",
				fr: "Orlando Contucci Ponno — Cerasuolo",
				de: "Orlando Contucci Ponno — Cerasuolo",
				price: "18",
				img: dish_wine_default
			},
			{
				it: "Orlando Contucci Ponno — Pecorino",
				en: "Orlando Contucci Ponno — Pecorino",
				es: "Orlando Contucci Ponno — Pecorino",
				fr: "Orlando Contucci Ponno — Pecorino",
				de: "Orlando Contucci Ponno — Pecorino",
				price: "18",
				img: dish_wine_default
			},
			{
				it: "Centorame Liberamente — Trebbiano",
				en: "Centorame Liberamente — Trebbiano",
				es: "Centorame Liberamente — Trebbiano",
				fr: "Centorame Liberamente — Trebbiano",
				de: "Centorame Liberamente — Trebbiano",
				price: "20",
				img: dish_wine_default
			},
			{
				it: "Centorame San Michele — Passerina",
				en: "Centorame San Michele — Passerina",
				es: "Centorame San Michele — Passerina",
				fr: "Centorame San Michele — Passerina",
				de: "Centorame San Michele — Passerina",
				price: "20",
				img: dish_wine_default
			},
			{
				it: "Bossanova — Cerasuolo",
				en: "Bossanova — Cerasuolo",
				es: "Bossanova — Cerasuolo",
				fr: "Bossanova — Cerasuolo",
				de: "Bossanova — Cerasuolo",
				price: "30",
				img: dish_wine_default
			},
			{
				it: "Bossanova — Swing",
				en: "Bossanova — Swing",
				es: "Bossanova — Swing",
				fr: "Bossanova — Swing",
				de: "Bossanova — Swing",
				price: "25",
				img: dish_wine_default
			},
			{
				it: "Faraone — Cerasuolo",
				en: "Faraone — Cerasuolo",
				es: "Faraone — Cerasuolo",
				fr: "Faraone — Cerasuolo",
				de: "Faraone — Cerasuolo",
				price: "25",
				img: dish_wine_default
			},
			{
				it: "Roncùs — Ribolla Gialla",
				en: "Roncùs — Ribolla Gialla",
				es: "Roncùs — Ribolla Gialla",
				fr: "Roncùs — Ribolla Gialla",
				de: "Roncùs — Ribolla Gialla",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "Clemens Waldthaler — Gewürztraminer, Alto Adige",
				en: "Clemens Waldthaler — Gewürztraminer, Alto Adige",
				es: "Clemens Waldthaler — Gewürztraminer, Alto Adige",
				fr: "Clemens Waldthaler — Gewürztraminer, Haut-Adige",
				de: "Clemens Waldthaler — Gewürztraminer, Südtirol",
				price: "30",
				img: dish_wine_default
			},
			{
				it: "Joh. Jos. Christoffel Erben — Riesling, Mosel",
				en: "Joh. Jos. Christoffel Erben — Riesling, Mosel",
				es: "Joh. Jos. Christoffel Erben — Riesling, Mosela",
				fr: "Joh. Jos. Christoffel Erben — Riesling, Moselle",
				de: "Joh. Jos. Christoffel Erben — Riesling, Mosel",
				price: "30",
				img: dish_wine_default
			},
			{
				it: "Prosecco Rosé Reguta",
				en: "Prosecco Rosé Reguta",
				es: "Prosecco Rosé Reguta",
				fr: "Prosecco Rosé Reguta",
				de: "Prosecco Rosé Reguta",
				price: "20",
				img: dish_wine_default
			},
			{
				it: "Prosecco Reguta",
				en: "Prosecco Reguta",
				es: "Prosecco Reguta",
				fr: "Prosecco Reguta",
				de: "Prosecco Reguta",
				price: "18",
				img: dish_wine_default
			},
			{
				it: "Rossetti & Scrivani Blanc de Noirs Brut 30 mesi — Pinot Nero",
				en: "Rossetti & Scrivani Blanc de Noirs Brut 30 months — Pinot Noir",
				es: "Rossetti & Scrivani Blanc de Noirs Brut 30 meses — Pinot Noir",
				fr: "Rossetti & Scrivani Blanc de Noirs Brut 30 mois — Pinot Noir",
				de: "Rossetti & Scrivani Blanc de Noirs Brut 30 Monate — Pinot Noir",
				price: "35",
				img: dish_wine_default
			},
			{
				it: "Emendis Cava Brut Nature",
				en: "Emendis Cava Brut Nature",
				es: "Emendis Cava Brut Nature",
				fr: "Emendis Cava Brut Nature",
				de: "Emendis Cava Brut Nature",
				price: "25",
				img: dish_wine_default
			},
			{
				it: "Domaine Amirault Armantine — Crémant de Loire",
				en: "Domaine Amirault Armantine — Crémant de Loire",
				es: "Domaine Amirault Armantine — Crémant de Loire",
				fr: "Domaine Amirault Armantine — Crémant de Loire",
				de: "Domaine Amirault Armantine — Crémant de Loire",
				price: "37",
				img: dish_wine_default
			},
			{
				it: "Fabrice Bertemès — Champagne Premier Cru Racines Brut",
				en: "Fabrice Bertemès — Champagne Premier Cru Racines Brut",
				es: "Fabrice Bertemès — Champagne Premier Cru Racines Brut",
				fr: "Fabrice Bertemès — Champagne Premier Cru Racines Brut",
				de: "Fabrice Bertemès — Champagner Premier Cru Racines Brut",
				price: "70",
				img: dish_wine_default
			},
			{
				it: "Nicola Gatta — Cuvée Nature 30 Lune",
				en: "Nicola Gatta — Cuvée Nature 30 Lune",
				es: "Nicola Gatta — Cuvée Nature 30 Lune",
				fr: "Nicola Gatta — Cuvée Nature 30 Lune",
				de: "Nicola Gatta — Cuvée Nature 30 Lune",
				price: "50",
				img: dish_wine_default
			},
			{
				it: "Domaine de la Navicelle — Provence \"A Flot\" 2024",
				en: "Domaine de la Navicelle — Provence \"A Flot\" 2024",
				es: "Domaine de la Navicelle — Provenza \"A Flot\" 2024",
				fr: "Domaine de la Navicelle — Provence \"A Flot\" 2024",
				de: "Domaine de la Navicelle — Provence „A Flot\" 2024",
				price: "30",
				img: dish_wine_default
			},
			{
				it: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc",
				en: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc",
				es: "Domaine Haute Perche — Anjou Blanco, Chenin Blanc",
				fr: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc",
				de: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "Emendis Figa Flor",
				en: "Emendis Figa Flor",
				es: "Emendis Figa Flor",
				fr: "Emendis Figa Flor",
				de: "Emendis Figa Flor",
				price: "25",
				img: dish_wine_default
			},
			{
				it: "Croci Saint Jacques — Crémant de Bourgogne, dosaggio zero",
				en: "Croci Saint Jacques — Crémant de Bourgogne, zero dosage",
				es: "Croci Saint Jacques — Crémant de Bourgogne, dosaje cero",
				fr: "Croci Saint Jacques — Crémant de Bourgogne, dosage zéro",
				de: "Croci Saint Jacques — Crémant de Bourgogne, Zero Dosage",
				price: "40",
				img: dish_wine_default
			},
			{
				it: "Mas dei Chini — I Mono Trento DOC Brut",
				en: "Mas dei Chini — I Mono Trento DOC Brut",
				es: "Mas dei Chini — I Mono Trento DOC Brut",
				fr: "Mas dei Chini — I Mono Trento DOC Brut",
				de: "Mas dei Chini — I Mono Trento DOC Brut",
				price: "35",
				img: dish_wine_default
			},
			{
				it: "Balan — Pinot Grigio",
				en: "Balan — Pinot Grigio",
				es: "Balan — Pinot Grigio",
				fr: "Balan — Pinot Grigio",
				de: "Balan — Pinot Grigio",
				price: "22",
				img: dish_wine_default
			},
			{
				it: "Pierre Girard — Aligoté",
				en: "Pierre Girard — Aligoté",
				es: "Pierre Girard — Aligoté",
				fr: "Pierre Girard — Aligoté",
				de: "Pierre Girard — Aligoté",
				price: "33",
				img: dish_wine_default
			},
			{
				it: "Franciacorta Santus",
				en: "Franciacorta Santus",
				es: "Franciacorta Santus",
				fr: "Franciacorta Santus",
				de: "Franciacorta Santus",
				price: "42",
				img: dish_wine_default
			},
			{
				it: "Ciro Picariello — Fiano, Campania",
				en: "Ciro Picariello — Fiano, Campania",
				es: "Ciro Picariello — Fiano, Campania",
				fr: "Ciro Picariello — Fiano, Campanie",
				de: "Ciro Picariello — Fiano, Kampanien",
				price: "30",
				img: dish_wine_default
			},
			{
				it: "Gheddo Tinaar — Arneis e Timorasso, Piemonte",
				en: "Gheddo Tinaar — Arneis & Timorasso, Piedmont",
				es: "Gheddo Tinaar — Arneis y Timorasso, Piamonte",
				fr: "Gheddo Tinaar — Arneis & Timorasso, Piémont",
				de: "Gheddo Tinaar — Arneis & Timorasso, Piemont",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "De Angelis Corvi — Cerasuolo",
				en: "De Angelis Corvi — Cerasuolo",
				es: "De Angelis Corvi — Cerasuolo",
				fr: "De Angelis Corvi — Cerasuolo",
				de: "De Angelis Corvi — Cerasuolo",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "De Angelis Corvi — Trebbiano",
				en: "De Angelis Corvi — Trebbiano",
				es: "De Angelis Corvi — Trebbiano",
				fr: "De Angelis Corvi — Trebbiano",
				de: "De Angelis Corvi — Trebbiano",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "De Angelis Corvi — Passerina",
				en: "De Angelis Corvi — Passerina",
				es: "De Angelis Corvi — Passerina",
				fr: "De Angelis Corvi — Passerina",
				de: "De Angelis Corvi — Passerina",
				price: "28",
				img: dish_wine_default
			},
			{
				it: "Marabino Rosanera — Nero d'Avola rosato, Sicilia",
				en: "Marabino Rosanera — Nero d'Avola rosé, Sicily",
				es: "Marabino Rosanera — Nero d'Avola rosado, Sicilia",
				fr: "Marabino Rosanera — Nero d'Avola rosé, Sicile",
				de: "Marabino Rosanera — Nero d'Avola Rosé, Sizilien",
				price: "25",
				img: dish_wine_default
			}
		]
	},
	{
		id: "bevande",
		title: {
			it: "Bevande",
			en: "Drinks",
			es: "Bebidas",
			fr: "Boissons",
			de: "Getränke"
		},
		items: [
			{
				it: "Acqua 1 lt",
				en: "Water 1 lt",
				es: "Agua 1 lt",
				fr: "Eau 1 L",
				de: "Wasser 1 L",
				price: "2",
				img: dish_drinks_default
			},
			{
				it: "Acqua 50 cl",
				en: "Water 50 cl",
				es: "Agua 50 cl",
				fr: "Eau 50 cl",
				de: "Wasser 50 cl",
				price: "1.20",
				img: dish_drinks_default
			},
			{
				it: "Coca-Cola 33 cl",
				en: "Coca-Cola 33 cl",
				es: "Coca-Cola 33 cl",
				fr: "Coca-Cola 33 cl",
				de: "Coca-Cola 33 cl",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Coca-Cola Zero 33 cl",
				en: "Coca-Cola Zero 33 cl",
				es: "Coca-Cola Zero 33 cl",
				fr: "Coca-Cola Zero 33 cl",
				de: "Coca-Cola Zero 33 cl",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Fuze Tea",
				en: "Fuze Tea",
				es: "Fuze Tea",
				fr: "Fuze Tea",
				de: "Fuze Tea",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Fanta 33 cl",
				en: "Fanta 33 cl",
				es: "Fanta 33 cl",
				fr: "Fanta 33 cl",
				de: "Fanta 33 cl",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Sprite 33 cl",
				en: "Sprite 33 cl",
				es: "Sprite 33 cl",
				fr: "Sprite 33 cl",
				de: "Sprite 33 cl",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Pepsi 0.3",
				en: "Pepsi 0.3",
				es: "Pepsi 0.3",
				fr: "Pepsi 0.3",
				de: "Pepsi 0,3",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Pepsi 0.5",
				en: "Pepsi 0.5",
				es: "Pepsi 0.5",
				fr: "Pepsi 0.5",
				de: "Pepsi 0,5",
				price: "4.50",
				img: dish_drinks_default
			},
			{
				it: "Schweppes Tonica 0.3",
				en: "Schweppes Tonic 0.3",
				es: "Schweppes Tónica 0.3",
				fr: "Schweppes Tonic 0.3",
				de: "Schweppes Tonic 0,3",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Schweppes Tonica 0.5",
				en: "Schweppes Tonic 0.5",
				es: "Schweppes Tónica 0.5",
				fr: "Schweppes Tonic 0.5",
				de: "Schweppes Tonic 0,5",
				price: "4.50",
				img: dish_drinks_default
			},
			{
				it: "Schweppes Lemon 0.3",
				en: "Schweppes Lemon 0.3",
				es: "Schweppes Lemon 0.3",
				fr: "Schweppes Lemon 0.3",
				de: "Schweppes Lemon 0,3",
				price: "3",
				img: dish_drinks_default
			},
			{
				it: "Schweppes Lemon 0.5",
				en: "Schweppes Lemon 0.5",
				es: "Schweppes Lemon 0.5",
				fr: "Schweppes Lemon 0.5",
				de: "Schweppes Lemon 0,5",
				price: "4.50",
				img: dish_drinks_default
			},
			{
				it: "Cocktail San Pellegrino",
				en: "San Pellegrino Cocktail",
				es: "Cóctel San Pellegrino",
				fr: "Cocktail San Pellegrino",
				de: "San Pellegrino Cocktail",
				price: "3.50",
				img: dish_drinks_default
			},
			{
				it: "Campari",
				en: "Campari",
				es: "Campari",
				fr: "Campari",
				de: "Campari",
				price: "3.50",
				img: dish_drinks_default
			}
		]
	}
];
var reviews = [
	{
		name: "Marina Marcelli",
		meta: "Local Guide · 30 reviews",
		it: "Bar sulla spiaggia da consigliare. L'ambiente è giovane, informale ma professionale. Ho pranzato e ho preso un cocktail a fine serata. Lo consiglio vivamente.",
		en: "A beach bar I'd recommend. Young, relaxed and yet professional. I had lunch and came back for a cocktail in the evening. Highly recommended.",
		es: "Un chiringuito que recomiendo. Ambiente joven, informal pero profesional. Comí y volví por un cóctel al final del día. Muy recomendable.",
		fr: "Un bar de plage à recommander. Ambiance jeune, décontractée mais professionnelle. J'ai déjeuné et je suis revenue pour un cocktail en soirée. Vivement recommandé.",
		de: "Eine Strandbar, die ich empfehlen kann. Junges, entspanntes und dennoch professionelles Ambiente. Ich habe zu Mittag gegessen und bin abends auf einen Cocktail zurückgekommen. Sehr empfehlenswert."
	},
	{
		name: "Giacomina Mondoni",
		meta: "Local Guide · 103 reviews",
		it: "Pranzo con aperitivo in famiglia. Bruschetta buonissima, poi pesce con un'insalata speciale. Paste ottime e cheesecake pure. Bravi ragazzi!",
		en: "Family lunch with aperitivo. Delicious bruschetta, then fish with a special salad. Excellent pasta and the cheesecake too. Well done team!",
		es: "Almuerzo con aperitivo en familia. Bruschetta buenísima, luego pescado con una ensalada especial. Pastas excelentes y la tarta de queso también. ¡Bien hecho, chicos!",
		fr: "Déjeuner en famille avec apéritif. Bruschetta délicieuse, puis poisson avec une salade spéciale. Pâtes excellentes et cheesecake aussi. Bravo l'équipe !",
		de: "Familienessen mit Aperitivo. Sehr leckere Bruschetta, dann Fisch mit einem besonderen Salat. Ausgezeichnete Pasta und der Cheesecake auch. Gut gemacht, Team!"
	},
	{
		name: "Giuseppe Fusco",
		meta: "Local Guide · 331 reviews",
		it: "Ottima esperienza culinaria al chiringuito con vista mare. Prodotti eccellenti. Servizio cortese e professionale.",
		en: "Excellent culinary experience at the beach bar with sea view. Excellent products. Kind and professional service.",
		es: "Excelente experiencia culinaria en el chiringuito con vistas al mar. Productos excelentes. Servicio amable y profesional.",
		fr: "Excellente expérience culinaire au bar de plage avec vue sur mer. Produits excellents. Service aimable et professionnel.",
		de: "Hervorragendes kulinarisches Erlebnis in der Strandbar mit Meerblick. Ausgezeichnete Produkte. Freundlicher und professioneller Service."
	}
];
var ALLERGEN_LABELS = {
	it: {
		Glutine: "Glutine",
		Crostacei: "Crostacei",
		Uova: "Uova",
		Pesce: "Pesce",
		Arachidi: "Arachidi",
		Soia: "Soia",
		Latte: "Latte",
		"Frutta a guscio": "Frutta a guscio",
		Sedano: "Sedano",
		Senape: "Senape",
		"Semi di Sesamo": "Semi di Sesamo",
		"Anidride solforosa": "Anidride solforosa",
		Lupini: "Lupini",
		Molluschi: "Molluschi"
	},
	en: {
		Glutine: "Gluten",
		Crostacei: "Crustaceans",
		Uova: "Eggs",
		Pesce: "Fish",
		Arachidi: "Peanuts",
		Soia: "Soy",
		Latte: "Milk",
		"Frutta a guscio": "Tree nuts",
		Sedano: "Celery",
		Senape: "Mustard",
		"Semi di Sesamo": "Sesame seeds",
		"Anidride solforosa": "Sulphur dioxide",
		Lupini: "Lupin",
		Molluschi: "Molluscs"
	},
	es: {
		Glutine: "Gluten",
		Crostacei: "Crustáceos",
		Uova: "Huevos",
		Pesce: "Pescado",
		Arachidi: "Cacahuetes",
		Soia: "Soja",
		Latte: "Leche",
		"Frutta a guscio": "Frutos de cáscara",
		Sedano: "Apio",
		Senape: "Mostaza",
		"Semi di Sesamo": "Sésamo",
		"Anidride solforosa": "Dióxido de azufre",
		Lupini: "Lupino",
		Molluschi: "Moluscos"
	},
	fr: {
		Glutine: "Gluten",
		Crostacei: "Crustacés",
		Uova: "Œufs",
		Pesce: "Poisson",
		Arachidi: "Arachides",
		Soia: "Soja",
		Latte: "Lait",
		"Frutta a guscio": "Fruits à coque",
		Sedano: "Céleri",
		Senape: "Moutarde",
		"Semi di Sesamo": "Graines de sésame",
		"Anidride solforosa": "Dioxyde de soufre",
		Lupini: "Lupin",
		Molluschi: "Mollusques"
	},
	de: {
		Glutine: "Gluten",
		Crostacei: "Krebstiere",
		Uova: "Eier",
		Pesce: "Fisch",
		Arachidi: "Erdnüsse",
		Soia: "Soja",
		Latte: "Milch",
		"Frutta a guscio": "Schalenfrüchte",
		Sedano: "Sellerie",
		Senape: "Senf",
		"Semi di Sesamo": "Sesamsamen",
		"Anidride solforosa": "Schwefeldioxid",
		Lupini: "Lupinen",
		Molluschi: "Weichtiere"
	}
};
var MENU_COPY = {
	it: {
		serviceHoursTitle: "Orari di servizio",
		serviceHours: [{
			label: "Pranzo",
			value: "Dalle 12:00 alle 14:30"
		}, {
			label: "Aperitivo",
			value: "Dalle 18:00"
		}],
		allergenTitle: "Allergeni",
		allergenIntro: "Per la tua sicurezza, consulta gli allergeni e comunicaci le tue esigenze alimentari per una migliore esperienza gastronomica.",
		allergenPrompt: "Consulta la lista degli allergeni",
		allergenLabel: "Allergeni",
		allergenItems: [
			{
				name: "Glutine",
				description: "Contenuto nei cereali e nei derivati"
			},
			{
				name: "Crostacei",
				description: "Gamberi, scampi, aragoste, granchi e simili"
			},
			{
				name: "Uova",
				description: "Tutti i prodotti a base di uova e derivati"
			},
			{
				name: "Pesce",
				description: "Prodotti che contengono pesce o derivati"
			},
			{
				name: "Arachidi",
				description: "Creme e condimenti anche in piccole dosi"
			},
			{
				name: "Soia",
				description: "Prodotti a base di soia"
			},
			{
				name: "Latte",
				description: "Prodotti caseari, latticini e derivati"
			},
			{
				name: "Frutta a guscio",
				description: "Mandorle, nocciole, noci, pistacchi"
			},
			{
				name: "Sedano",
				description: "A pezzi o nei preparati vegetali"
			},
			{
				name: "Senape",
				description: "Si può trovare nelle salse e nei condimenti"
			},
			{
				name: "Semi di Sesamo",
				description: "Nel pane o in alcuni tipi di farine"
			},
			{
				name: "Anidride solforosa",
				description: "Conserve, cibi sott'aceto (solfiti)"
			},
			{
				name: "Lupini",
				description: "Legume proteico presente nei cibi vegan"
			},
			{
				name: "Molluschi",
				description: "Vongole, ostriche, cozze e simili"
			}
		]
	},
	en: {
		serviceHoursTitle: "Service hours",
		serviceHours: [{
			label: "Lunch",
			value: "12:00 PM - 2:30 PM"
		}, {
			label: "Aperitivo",
			value: "From 6:00 PM"
		}],
		allergenTitle: "Allergens",
		allergenIntro: "For your safety, please check the allergens and let us know about any dietary needs for the best dining experience.",
		allergenPrompt: "View the allergen list",
		allergenLabel: "Allergens",
		allergenItems: [
			{
				name: "Gluten",
				description: "Found in cereals and products made from them"
			},
			{
				name: "Crustaceans",
				description: "Shrimp, scampi, lobster, crab and similar"
			},
			{
				name: "Eggs",
				description: "All egg-based products and derivatives"
			},
			{
				name: "Fish",
				description: "Products containing fish or fish derivatives"
			},
			{
				name: "Peanuts",
				description: "Creams and dressings even in small amounts"
			},
			{
				name: "Soy",
				description: "Soy-based products"
			},
			{
				name: "Milk",
				description: "Dairy products, milk and derivatives"
			},
			{
				name: "Tree nuts",
				description: "Almonds, hazelnuts, walnuts, pistachios"
			},
			{
				name: "Celery",
				description: "In pieces or in vegetable preparations"
			},
			{
				name: "Mustard",
				description: "May be found in sauces and condiments"
			},
			{
				name: "Sesame seeds",
				description: "In bread or in some types of flour"
			},
			{
				name: "Sulphur dioxide",
				description: "Preserves, pickled foods (sulfites)"
			},
			{
				name: "Lupin",
				description: "Protein-rich legume found in vegan foods"
			},
			{
				name: "Molluscs",
				description: "Clams, oysters, mussels and similar"
			}
		]
	},
	es: {
		serviceHoursTitle: "Horario de servicio",
		serviceHours: [{
			label: "Almuerzo",
			value: "De 12:00 a 14:30"
		}, {
			label: "Aperitivo",
			value: "Desde las 18:00"
		}],
		allergenTitle: "Alérgenos",
		allergenIntro: "Por tu seguridad, consulta los alérgenos y comunícanos tus necesidades alimentarias para disfrutar mejor de la experiencia gastronómica.",
		allergenPrompt: "Consulta la lista de alérgenos",
		allergenLabel: "Alérgenos",
		allergenItems: [
			{
				name: "Gluten",
				description: "Presente en cereales y productos derivados"
			},
			{
				name: "Crustáceos",
				description: "Gambas, langostinos, bogavantes, cangrejos y similares"
			},
			{
				name: "Huevos",
				description: "Todos los productos a base de huevo y derivados"
			},
			{
				name: "Pescado",
				description: "Productos que contienen pescado o derivados"
			},
			{
				name: "Cacahuetes",
				description: "Cremas y condimentos incluso en pequeñas dosis"
			},
			{
				name: "Soja",
				description: "Productos a base de soja"
			},
			{
				name: "Leche",
				description: "Lácteos, productos lácteos y derivados"
			},
			{
				name: "Frutos de cáscara",
				description: "Almendras, avellanas, nueces, pistachos"
			},
			{
				name: "Apio",
				description: "En trozos o en preparados vegetales"
			},
			{
				name: "Mostaza",
				description: "Puede encontrarse en salsas y condimentos"
			},
			{
				name: "Sésamo",
				description: "En el pan o en algunos tipos de harina"
			},
			{
				name: "Dióxido de azufre",
				description: "Conservas, alimentos en vinagre (sulfitos)"
			},
			{
				name: "Lupino",
				description: "Legumbre proteica presente en alimentos veganos"
			},
			{
				name: "Moluscos",
				description: "Almejas, ostras, mejillones y similares"
			}
		]
	},
	fr: {
		serviceHoursTitle: "Horaires de service",
		serviceHours: [{
			label: "Déjeuner",
			value: "De 12 h 00 à 14 h 30"
		}, {
			label: "Apéritif",
			value: "À partir de 18 h 00"
		}],
		allergenTitle: "Allergènes",
		allergenIntro: "Pour votre sécurité, consultez les allergènes et indiquez-nous vos besoins alimentaires pour une meilleure expérience gastronomique.",
		allergenPrompt: "Consultez la liste des allergènes",
		allergenLabel: "Allergènes",
		allergenItems: [
			{
				name: "Gluten",
				description: "Présent dans les céréales et les produits dérivés"
			},
			{
				name: "Crustacés",
				description: "Crevettes, langoustines, homards, crabes et similaires"
			},
			{
				name: "Œufs",
				description: "Tous les produits à base d'œufs et dérivés"
			},
			{
				name: "Poisson",
				description: "Produits contenant du poisson ou des dérivés"
			},
			{
				name: "Arachides",
				description: "Crèmes et condiments même en petites quantités"
			},
			{
				name: "Soja",
				description: "Produits à base de soja"
			},
			{
				name: "Lait",
				description: "Produits laitiers, laitages et dérivés"
			},
			{
				name: "Fruits à coque",
				description: "Amandes, noisettes, noix, pistaches"
			},
			{
				name: "Céleri",
				description: "En morceaux ou dans des préparations végétales"
			},
			{
				name: "Moutarde",
				description: "Peut se trouver dans les sauces et les condiments"
			},
			{
				name: "Graines de sésame",
				description: "Dans le pain ou certains types de farine"
			},
			{
				name: "Dioxyde de soufre",
				description: "Conserves, aliments au vinaigre (sulfites)"
			},
			{
				name: "Lupin",
				description: "Légumineuse protéinée présente dans les aliments vegan"
			},
			{
				name: "Mollusques",
				description: "Palourdes, huîtres, moules et similaires"
			}
		]
	},
	de: {
		serviceHoursTitle: "Servicezeiten",
		serviceHours: [{
			label: "Mittagessen",
			value: "12:00 bis 14:30 Uhr"
		}, {
			label: "Aperitif",
			value: "Ab 18:00 Uhr"
		}],
		allergenTitle: "Allergene",
		allergenIntro: "Zu Ihrer Sicherheit beachten Sie bitte die Allergene und teilen Sie uns Ihre Ernährungsbedürfnisse mit, damit wir Ihnen das bestmögliche Erlebnis bieten können.",
		allergenPrompt: "Allergenliste ansehen",
		allergenLabel: "Allergene",
		allergenItems: [
			{
				name: "Gluten",
				description: "Enthalten in Getreide und Getreideerzeugnissen"
			},
			{
				name: "Krebstiere",
				description: "Garnelen, Scampi, Hummer, Krabben und ähnliche"
			},
			{
				name: "Eier",
				description: "Alle Produkte auf Eierbasis und daraus hergestellt"
			},
			{
				name: "Fisch",
				description: "Produkte, die Fisch oder Fischderivate enthalten"
			},
			{
				name: "Erdnüsse",
				description: "Cremes und Dressings auch in kleinen Mengen"
			},
			{
				name: "Soja",
				description: "Sojaprodukte"
			},
			{
				name: "Milch",
				description: "Milchprodukte, Molkereiprodukte und Derivate"
			},
			{
				name: "Schalenfrüchte",
				description: "Mandeln, Haselnüsse, Walnüsse, Pistazien"
			},
			{
				name: "Sellerie",
				description: "In Stücken oder in Gemüsezubereitungen"
			},
			{
				name: "Senf",
				description: "Kann in Saucen und Würzmitteln enthalten sein"
			},
			{
				name: "Sesamsamen",
				description: "In Brot oder in einigen Mehlsorten"
			},
			{
				name: "Schwefeldioxid",
				description: "Konserven, eingelegte Lebensmittel (Sulfite)"
			},
			{
				name: "Lupinen",
				description: "Eiweißreiche Hülsenfrucht in veganen Lebensmitteln"
			},
			{
				name: "Weichtiere",
				description: "Muscheln, Austern, Miesmuscheln und ähnliche"
			}
		]
	}
};
var FAQ_COPY = {
	it: {
		title: "Domande frequenti",
		heading: "Tutto quello che serve per prenotare, mangiare e arrivare senza dubbi.",
		intro: "Qui trovi risposte rapide su orari, prenotazioni, allergeni e come raggiungerci sul lungomare di Roseto degli Abruzzi.",
		ctas: {
			menu: "Vai al menu",
			about: "Orari e servizio",
			visit: "Come arrivare"
		},
		items: [
			{
				question: "A che ora servite il pranzo e l'aperitivo?",
				answer: "Il pranzo è disponibile dalle 12:00 alle 14:30. L'aperitivo parte dalle 18:00 e continua fino a chiusura."
			},
			{
				question: "Devo prenotare un tavolo?",
				answer: "La prenotazione è fortemente consigliata, soprattutto per il tramonto, i weekend e i tavoli più richiesti vista mare."
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
		]
	},
	en: {
		title: "Frequently asked questions",
		heading: "Everything you need to book, eat and find us without uncertainty.",
		intro: "Quick answers about our hours, reservations, allergens and how to find us on the Roseto degli Abruzzi promenade.",
		ctas: {
			menu: "Go to menu",
			about: "Hours & service",
			visit: "How to get here"
		},
		items: [
			{
				question: "What time do you serve lunch and aperitivo?",
				answer: "Lunch is served from 12:00 PM to 2:30 PM. Aperitivo starts at 6:00 PM and continues until closing."
			},
			{
				question: "Do I need to book a table?",
				answer: "Booking is strongly recommended, especially for sunset, weekends, and the most requested sea-view tables."
			},
			{
				question: "Do you handle allergens and intolerances?",
				answer: "Yes. You can find the full allergen list on the page and we recommend always telling the staff about any dietary needs."
			},
			{
				question: "What can I order during aperitivo?",
				answer: "You can choose seafood dishes, fried items, chef's picks, cocktails, gin and a selection of wines. See the full menu in the Menu section."
			},
			{
				question: "Where is Sottosale Fishbar located?",
				answer: "We are on the promenade in Roseto degli Abruzzi, on Lungomare Trento. Use the map or open directions to reach us quickly."
			}
		]
	},
	es: {
		title: "Preguntas frecuentes",
		heading: "Todo lo necesario para reservar, comer y llegar sin dudas.",
		intro: "Respuestas rápidas sobre horarios, reservas, alérgenos y cómo encontrarnos en el paseo marítimo de Roseto degli Abruzzi.",
		ctas: {
			menu: "Ir a la carta",
			about: "Horario y servicio",
			visit: "Cómo llegar"
		},
		items: [
			{
				question: "¿A qué hora sirven el almuerzo y el aperitivo?",
				answer: "El almuerzo está disponible de 12:00 a 14:30. El aperitivo empieza a las 18:00 y continúa hasta el cierre."
			},
			{
				question: "¿Necesito reservar mesa?",
				answer: "La reserva es muy recomendable, sobre todo para el atardecer, los fines de semana y las mesas con vistas al mar más solicitadas."
			},
			{
				question: "¿Gestionan alérgenos e intolerancias?",
				answer: "Sí. Encontrarás la lista completa de alérgenos en la página y te recomendamos avisar siempre al personal de cualquier necesidad alimentaria."
			},
			{
				question: "¿Qué puedo pedir durante el aperitivo?",
				answer: "Puedes elegir platos de mar, fritos, selecciones del chef, cócteles, ginebra y una selección de vinos. Consulta la carta completa en la sección Carta."
			},
			{
				question: "¿Dónde está Sottosale Fishbar?",
				answer: "Nos encuentras en el paseo marítimo de Roseto degli Abruzzi, en Lungomare Trento. Usa el mapa o abre las indicaciones para llegar rápidamente."
			}
		]
	},
	fr: {
		title: "Questions fréquentes",
		heading: "Tout ce qu'il faut pour réserver, manger et nous trouver sans doute.",
		intro: "Réponses rapides sur nos horaires, les réservations, les allergènes et la manière de nous trouver sur le front de mer de Roseto degli Abruzzi.",
		ctas: {
			menu: "Aller à la carte",
			about: "Horaires et service",
			visit: "Comment venir"
		},
		items: [
			{
				question: "À quelle heure servez-vous le déjeuner et l'apéritif ?",
				answer: "Le déjeuner est servi de 12 h 00 à 14 h 30. L'apéritif commence à 18 h 00 et se poursuit jusqu'à la fermeture."
			},
			{
				question: "Dois-je réserver une table ?",
				answer: "La réservation est fortement conseillée, surtout pour le coucher du soleil, les week-ends et les tables avec vue mer les plus demandées."
			},
			{
				question: "Gérez-vous les allergènes et les intolérances ?",
				answer: "Oui. Vous trouverez la liste complète des allergènes sur la page et nous vous recommandons d'informer systématiquement le personnel de vos besoins alimentaires."
			},
			{
				question: "Que puis-je commander à l'apéritif ?",
				answer: "Vous pouvez choisir des plats de la mer, des fritures, les suggestions du chef, des cocktails, du gin et une sélection de vins. Découvrez toute la carte dans la section Carte."
			},
			{
				question: "Où se trouve Sottosale Fishbar ?",
				answer: "Nous sommes sur le front de mer de Roseto degli Abruzzi, à Lungomare Trento. Utilisez la carte ou ouvrez l'itinéraire pour nous rejoindre rapidement."
			}
		]
	},
	de: {
		title: "Häufige Fragen",
		heading: "Alles, was Sie brauchen, um ohne Zweifel zu reservieren, zu essen und uns zu finden.",
		intro: "Schnelle Antworten zu unseren Öffnungszeiten, Reservierungen, Allergenen und wie Sie uns an der Promenade von Roseto degli Abruzzi finden.",
		ctas: {
			menu: "Zur Karte",
			about: "Zeiten & Service",
			visit: "Anfahrt"
		},
		items: [
			{
				question: "Wann serviert ihr Mittagessen und Aperitivo?",
				answer: "Mittagessen gibt es von 12:00 bis 14:30 Uhr. Aperitivo beginnt um 18:00 Uhr und läuft bis zur Schließung."
			},
			{
				question: "Muss ich einen Tisch reservieren?",
				answer: "Eine Reservierung ist sehr empfehlenswert, vor allem zum Sonnenuntergang, am Wochenende und für besonders gefragte Tische mit Meerblick."
			},
			{
				question: "Geht ihr auf Allergene und Unverträglichkeiten ein?",
				answer: "Ja. Die vollständige Allergenenliste findest du auf der Seite und wir empfehlen, das Personal immer über Ernährungsbedürfnisse zu informieren."
			},
			{
				question: "Was kann ich beim Aperitivo bestellen?",
				answer: "Du kannst Meeresgerichte, Frittiertes, Chef-Auswahl, Cocktails, Gin und eine Auswahl an Weinen wählen. Die komplette Karte findest du im Bereich Karte."
			},
			{
				question: "Wo befindet sich Sottosale Fishbar?",
				answer: "Du findest uns an der Promenade von Roseto degli Abruzzi, am Lungomare Trento. Nutze die Karte oder die Wegbeschreibung, um uns schnell zu erreichen."
			}
		]
	}
};
var SERVICE_WINDOWS = {
	lunch: {
		start: 720,
		end: 870
	},
	aperitivo: { start: 1080 }
};
var SERVICE_STATUS_COPY = {
	it: {
		lunch: {
			title: "Pranzo",
			active: "Pranzo in corso",
			upcoming: "Pranzo dalle 12:00",
			ended: "Pranzo terminato per oggi"
		},
		aperitivo: {
			title: "Aperitivo",
			active: "Aperitivo in corso",
			upcoming: "Aperitivo dalle 18:00",
			ended: "Aperitivo terminato per oggi"
		}
	},
	en: {
		lunch: {
			title: "Lunch",
			active: "Lunch now on",
			upcoming: "Lunch from 12:00 PM",
			ended: "Lunch finished for today"
		},
		aperitivo: {
			title: "Aperitivo",
			active: "Aperitivo now on",
			upcoming: "Aperitivo from 6:00 PM",
			ended: "Aperitivo finished for today"
		}
	},
	es: {
		lunch: {
			title: "Almuerzo",
			active: "Almuerzo en curso",
			upcoming: "Almuerzo desde las 12:00",
			ended: "Almuerzo terminado por hoy"
		},
		aperitivo: {
			title: "Aperitivo",
			active: "Aperitivo en curso",
			upcoming: "Aperitivo desde las 18:00",
			ended: "Aperitivo terminado por hoy"
		}
	},
	fr: {
		lunch: {
			title: "Déjeuner",
			active: "Déjeuner en cours",
			upcoming: "Déjeuner à partir de 12 h 00",
			ended: "Déjeuner terminé pour aujourd'hui"
		},
		aperitivo: {
			title: "Apéritif",
			active: "Apéritif en cours",
			upcoming: "Apéritif à partir de 18 h 00",
			ended: "Apéritif terminé pour aujourd'hui"
		}
	},
	de: {
		lunch: {
			title: "Mittagessen",
			active: "Mittagessen läuft gerade",
			upcoming: "Mittagessen ab 12:00 Uhr",
			ended: "Mittagessen für heute beendet"
		},
		aperitivo: {
			title: "Aperitif",
			active: "Aperitif läuft gerade",
			upcoming: "Aperitif ab 18:00 Uhr",
			ended: "Aperitif für heute beendet"
		}
	}
};
function getRomeTimeMinutes(date) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: "Europe/Rome",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	}).formatToParts(date);
	const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
	const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
	return hour * 60 + minute;
}
function getServiceStatus(lang, key, minutes) {
	const copy = SERVICE_STATUS_COPY[lang][key];
	const window = SERVICE_WINDOWS[key];
	if (minutes < window.start) return {
		tone: "pending",
		text: copy.upcoming
	};
	if (window.end && minutes > window.end) return {
		tone: "ended",
		text: copy.ended
	};
	return {
		tone: "active",
		text: copy.active
	};
}
function translateAllergenName(name, lang) {
	return ALLERGEN_LABELS[lang][name] ?? name;
}
var HIGHLIGHTS = [
	{
		img: dish_octopus_default,
		name: {
			it: "Tentacolo di polpo",
			en: "Octopus tentacle",
			es: "Tentáculo de pulpo",
			fr: "Tentacule de poulpe",
			de: "Oktopus-Tentakel"
		},
		sub: {
			it: "salsa chimichurri",
			en: "chimichurri sauce",
			es: "salsa chimichurri",
			fr: "sauce chimichurri",
			de: "Chimichurri-Sauce"
		},
		price: "12"
	},
	{
		img: dish_tartare_default,
		name: {
			it: "Tartare di tonno",
			en: "Tuna tartare",
			es: "Tartar de atún",
			fr: "Tartare de thon",
			de: "Thunfisch-Tatar"
		},
		sub: {
			it: "stracciatella, teriyaki, cipolla croccante",
			en: "stracciatella, teriyaki, crispy onion",
			es: "stracciatella, teriyaki, cebolla crujiente",
			fr: "stracciatella, teriyaki, oignon croustillant",
			de: "Stracciatella, Teriyaki, knusprige Zwiebel"
		},
		price: "11"
	},
	{
		img: dish_tagliolini_default,
		name: {
			it: "Tagliolini alle vongole",
			en: "Tagliolini with clams",
			es: "Tagliolini con almejas",
			fr: "Tagliolini aux palourdes",
			de: "Tagliolini mit Venusmuscheln"
		},
		sub: {
			it: "acqua e farina, fatti in casa",
			en: "fresh, house-made",
			es: "frescos, caseros",
			fr: "frais, maison",
			de: "frisch, hausgemacht"
		},
		price: "11"
	},
	{
		img: dish_fritto_default,
		name: {
			it: "Frittura di calamari e gamberi",
			en: "Fried calamari & shrimp",
			es: "Fritura de calamares y gambas",
			fr: "Friture de calamars et crevettes",
			de: "Frittierte Calamari & Garnelen"
		},
		sub: {
			it: "il classico da chiringuito",
			en: "the beach-bar classic",
			es: "el clásico del chiringuito",
			fr: "le classique du bar de plage",
			de: "der Strandbar-Klassiker"
		},
		price: "15"
	},
	{
		img: dish_cocktails_default,
		name: {
			it: "Spritz & cocktail",
			en: "Spritz & cocktails",
			es: "Spritz y cócteles",
			fr: "Spritz & cocktails",
			de: "Spritz & Cocktails"
		},
		sub: {
			it: "aperitivo al tramonto",
			en: "sunset aperitivo",
			es: "aperitivo al atardecer",
			fr: "apéritif au coucher du soleil",
			de: "Aperitif zum Sonnenuntergang"
		},
		price: "6"
	},
	{
		img: dish_cheesecake_default,
		name: {
			it: "Cheesecake mango & passion",
			en: "Mango & passion cheesecake",
			es: "Tarta de queso mango y maracuyá",
			fr: "Cheesecake mangue & passion",
			de: "Mango-Maracuja-Cheesecake"
		},
		sub: {
			it: "il finale dolce",
			en: "the sweet finish",
			es: "el final dulce",
			fr: "la touche sucrée",
			de: "der süße Abschluss"
		},
		price: "6"
	}
];
var PHONE = "+393316250601";
var PHONE_DISPLAY = "+39 331 625 0601";
var ADDRESS = "Lungomare Trento, 64026 Roseto degli Abruzzi (TE)";
var MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Sottosale+Fishbar+Roseto+degli+Abruzzi";
var INSTAGRAM = "https://www.instagram.com/sottosale_roseto/";
var FACEBOOK = "https://www.facebook.com/sottosaleroseto/?ref=PROFILE_EDIT_xav_ig_profile_page_web#";
var t = {
	it: {
		nav: {
			menu: "Menu",
			about: "Il posto",
			reviews: "Recensioni",
			visit: "Vieni a trovarci"
		},
		homeLabel: "Home",
		ctaCall: "Chiama ora",
		ctaBook: "Prenota un tavolo",
		heroKicker: "Chiringuito · Lungomare Trento · Roseto degli Abruzzi",
		heroTitle: "Il mare, servito al tramonto.",
		heroSub: "Cucina di pesce, aperitivi in riva e cocktail fino a tarda notte. Un posto giovane, informale, di sostanza — a due passi dalla sabbia.",
		ratingLine: "4,7 ★ su Google · 35 recensioni",
		aboutKicker: "Il posto",
		aboutTitle: "Chiringuito con la cucina di un ristorante di mare.",
		aboutBody: "Sottosale è un pezzo di lungomare dove il pranzo diventa aperitivo e l'aperitivo diventa serata. Prodotti freschi, piatti che raccontano l'Adriatico e una carta di vini, gin e cocktail per accompagnare ogni ora del giorno.",
		aboutStats: [
			{
				k: "10–20 €",
				v: "prezzo medio a persona"
			},
			{
				k: "Aperto fino alle 02:00",
				v: "cucina, aperitivo e drink"
			},
			{
				k: "Pranzo · Aperitivo · Sera",
				v: "un posto, tre momenti"
			}
		],
		menuKicker: "Il menu",
		menuTitle: "Freschezza dell'Adriatico, in ogni portata.",
		menuNote: "I prezzi sono in euro. Menu allergeni disponibile in loco.",
		itemsLabel: "voci",
		reviewsKicker: "Dicono di noi",
		reviewsTitle: "4,7 ★ — la voce di chi è già passato.",
		visitKicker: "Vieni a trovarci",
		visitTitle: "Ti aspettiamo sul lungomare.",
		visitBody: "Prenotare è la mossa migliore, soprattutto per l'aperitivo al tramonto e nei weekend. Una telefonata e teniamo il tavolo con vista.",
		hoursLabel: "Orari",
		hours: "Tutti i giorni · fino alle 02:00",
		addressLabel: "Indirizzo",
		phoneLabel: "Telefono",
		followUs: "Seguici su Instagram",
		followUsFacebook: "Seguici su Facebook",
		reviewsWord: "recensioni",
		directions: "Indicazioni",
		openMaps: "Apri in Google Maps",
		footerRights: "Tutti i diritti riservati."
	},
	en: {
		nav: {
			menu: "Menu",
			about: "The place",
			reviews: "Reviews",
			visit: "Find us"
		},
		homeLabel: "Home",
		ctaCall: "Call now",
		ctaBook: "Book a table",
		heroKicker: "Beach bar · Lungomare Trento · Roseto degli Abruzzi",
		heroTitle: "The sea, served at sunset.",
		heroSub: "Fish-forward cooking, seaside aperitivi and cocktails until late. A young, easy place with real substance — steps from the sand.",
		ratingLine: "4.7 ★ on Google · 35 reviews",
		aboutKicker: "The place",
		aboutTitle: "A beach bar with a real seafood kitchen.",
		aboutBody: "Sottosale is a slice of the promenade where lunch turns into aperitivo and aperitivo turns into a long night. Fresh product, plates that speak of the Adriatic, and a list of wines, gins and cocktails for every hour of the day.",
		aboutStats: [
			{
				k: "€10–20",
				v: "average per person"
			},
			{
				k: "Open until 2 AM",
				v: "kitchen, aperitivo & drinks"
			},
			{
				k: "Lunch · Aperitivo · Night",
				v: "one place, three moments"
			}
		],
		menuKicker: "The menu",
		menuTitle: "Adriatic freshness, on every plate.",
		menuNote: "Prices are in euros. Full allergen menu available on site.",
		itemsLabel: "items",
		reviewsKicker: "What guests say",
		reviewsTitle: "4.7 ★ — from people who've already been.",
		visitKicker: "Find us",
		visitTitle: "We'll be on the promenade.",
		visitBody: "Booking is the smart move, especially for sunset aperitivo and weekends. One call and we hold the table with the view.",
		hoursLabel: "Hours",
		hours: "Every day · open until 2 AM",
		addressLabel: "Address",
		phoneLabel: "Phone",
		followUs: "Follow us on Instagram",
		followUsFacebook: "Follow us on Facebook",
		reviewsWord: "reviews",
		directions: "Get directions",
		openMaps: "Open in Google Maps",
		footerRights: "All rights reserved."
	},
	es: {
		nav: {
			menu: "Carta",
			about: "El lugar",
			reviews: "Reseñas",
			visit: "Encuéntranos"
		},
		homeLabel: "Inicio",
		ctaCall: "Llamar ahora",
		ctaBook: "Reservar mesa",
		heroKicker: "Chiringuito · Lungomare Trento · Roseto degli Abruzzi",
		heroTitle: "El mar, servido al atardecer.",
		heroSub: "Cocina de pescado, aperitivos frente al mar y cócteles hasta tarde. Un lugar joven, informal y con sustancia — a un paso de la arena.",
		ratingLine: "4,7 ★ en Google · 35 reseñas",
		aboutKicker: "El lugar",
		aboutTitle: "Un chiringuito con la cocina de un restaurante de mar.",
		aboutBody: "Sottosale es un trozo de paseo marítimo donde el almuerzo se convierte en aperitivo y el aperitivo en velada. Producto fresco, platos que hablan del Adriático y una carta de vinos, ginebras y cócteles para cada hora del día.",
		aboutStats: [
			{
				k: "10–20 €",
				v: "precio medio por persona"
			},
			{
				k: "Abierto hasta las 02:00",
				v: "cocina, aperitivo y copas"
			},
			{
				k: "Almuerzo · Aperitivo · Noche",
				v: "un lugar, tres momentos"
			}
		],
		menuKicker: "La carta",
		menuTitle: "Frescura del Adriático en cada plato.",
		menuNote: "Precios en euros. Carta de alérgenos disponible en el local.",
		itemsLabel: "platos",
		reviewsKicker: "Lo que dicen",
		reviewsTitle: "4,7 ★ — la voz de quien ya nos visitó.",
		visitKicker: "Encuéntranos",
		visitTitle: "Te esperamos en el paseo marítimo.",
		visitBody: "Reservar es la mejor idea, sobre todo para el aperitivo al atardecer y los fines de semana. Una llamada y te guardamos la mesa con vistas.",
		hoursLabel: "Horario",
		hours: "Todos los días · hasta las 02:00",
		addressLabel: "Dirección",
		phoneLabel: "Teléfono",
		followUs: "Síguenos en Instagram",
		followUsFacebook: "Síguenos en Facebook",
		reviewsWord: "reseñas",
		directions: "Cómo llegar",
		openMaps: "Abrir en Google Maps",
		footerRights: "Todos los derechos reservados."
	},
	fr: {
		nav: {
			menu: "Carte",
			about: "Le lieu",
			reviews: "Avis",
			visit: "Nous trouver"
		},
		homeLabel: "Accueil",
		ctaCall: "Appeler",
		ctaBook: "Réserver",
		heroKicker: "Bar de plage · Lungomare Trento · Roseto degli Abruzzi",
		heroTitle: "La mer, servie au coucher du soleil.",
		heroSub: "Cuisine de poisson, apéritifs face à la mer et cocktails jusque tard. Un endroit jeune, décontracté et vrai — à deux pas du sable.",
		ratingLine: "4,7 ★ sur Google · 35 avis",
		aboutKicker: "Le lieu",
		aboutTitle: "Un bar de plage avec une vraie cuisine de la mer.",
		aboutBody: "Sottosale est un morceau de front de mer où le déjeuner devient apéritif et l'apéritif devient soirée. Produits frais, plats qui racontent l'Adriatique, et une carte de vins, gins et cocktails pour chaque heure de la journée.",
		aboutStats: [
			{
				k: "10–20 €",
				v: "prix moyen par personne"
			},
			{
				k: "Ouvert jusqu'à 2 h",
				v: "cuisine, apéritif et boissons"
			},
			{
				k: "Déjeuner · Apéritif · Soir",
				v: "un lieu, trois moments"
			}
		],
		menuKicker: "La carte",
		menuTitle: "La fraîcheur de l'Adriatique, dans chaque plat.",
		menuNote: "Prix en euros. Carte des allergènes disponible sur place.",
		itemsLabel: "plats",
		reviewsKicker: "Ils en parlent",
		reviewsTitle: "4,7 ★ — la voix de ceux qui sont déjà venus.",
		visitKicker: "Nous trouver",
		visitTitle: "Rendez-vous sur le front de mer.",
		visitBody: "Réserver est la meilleure idée, surtout pour l'apéritif au coucher du soleil et le week-end. Un appel et on vous garde la table avec vue.",
		hoursLabel: "Horaires",
		hours: "Tous les jours · jusqu'à 2 h",
		addressLabel: "Adresse",
		phoneLabel: "Téléphone",
		followUs: "Suivez-nous sur Instagram",
		followUsFacebook: "Suivez-nous sur Facebook",
		reviewsWord: "avis",
		directions: "Itinéraire",
		openMaps: "Ouvrir dans Google Maps",
		footerRights: "Tous droits réservés."
	},
	de: {
		nav: {
			menu: "Karte",
			about: "Der Ort",
			reviews: "Bewertungen",
			visit: "Finden Sie uns"
		},
		homeLabel: "Startseite",
		ctaCall: "Jetzt anrufen",
		ctaBook: "Tisch reservieren",
		heroKicker: "Strandbar · Lungomare Trento · Roseto degli Abruzzi",
		heroTitle: "Das Meer, serviert bei Sonnenuntergang.",
		heroSub: "Fischküche, Aperitivi am Wasser und Cocktails bis spät. Ein junger, entspannter Ort mit echter Substanz — nur ein paar Schritte vom Sand entfernt.",
		ratingLine: "4,7 ★ auf Google · 35 Bewertungen",
		aboutKicker: "Der Ort",
		aboutTitle: "Eine Strandbar mit echter Fischküche.",
		aboutBody: "Sottosale ist ein Stück Promenade, wo das Mittagessen zum Aperitivo wird und der Aperitivo zum langen Abend. Frische Produkte, Gerichte, die von der Adria erzählen, und eine Karte mit Weinen, Gins und Cocktails für jede Tageszeit.",
		aboutStats: [
			{
				k: "10–20 €",
				v: "Durchschnitt pro Person"
			},
			{
				k: "Geöffnet bis 02:00 Uhr",
				v: "Küche, Aperitivo & Drinks"
			},
			{
				k: "Mittag · Aperitivo · Nacht",
				v: "ein Ort, drei Momente"
			}
		],
		menuKicker: "Die Karte",
		menuTitle: "Adriatische Frische, auf jedem Teller.",
		menuNote: "Preise in Euro. Allergenkarte vor Ort erhältlich.",
		itemsLabel: "Gerichte",
		reviewsKicker: "Gäste sagen",
		reviewsTitle: "4,7 ★ — Stimmen von Gästen, die schon da waren.",
		visitKicker: "Finden Sie uns",
		visitTitle: "Wir sind an der Promenade.",
		visitBody: "Reservieren ist die klügste Wahl, besonders für den Aperitivo bei Sonnenuntergang und am Wochenende. Ein Anruf und wir halten den Tisch mit Aussicht frei.",
		hoursLabel: "Öffnungszeiten",
		hours: "Täglich · bis 02:00 Uhr geöffnet",
		addressLabel: "Adresse",
		phoneLabel: "Telefon",
		followUs: "Folgen Sie uns auf Instagram",
		followUsFacebook: "Folgen Sie uns auf Facebook",
		reviewsWord: "Bewertungen",
		directions: "Route",
		openMaps: "In Google Maps öffnen",
		footerRights: "Alle Rechte vorbehalten."
	}
};
var LANGS = [
	"it",
	"en",
	"es",
	"fr",
	"de"
];
function Home() {
	const [lang, setLang] = (0, import_react.useState)("it");
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	const c = t[lang];
	const currentMinutes = getRomeTimeMinutes(now);
	(0, import_react.useEffect)(() => {
		const timer = window.setInterval(() => {
			setNow(/* @__PURE__ */ new Date());
		}, 6e4);
		return () => window.clearInterval(timer);
	}, []);
	const lunchStatus = getServiceStatus(lang, "lunch", currentMinutes);
	const aperitivoStatus = getServiceStatus(lang, "aperitivo", currentMinutes);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background",
				children: "Salta al contenuto"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#top",
							className: "flex items-baseline gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl md:text-2xl tracking-tight text-red-600",
								children: "Sottosale"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.22em] text-brine hidden sm:inline",
								children: "Fishbar"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden md:flex items-center gap-8 text-sm text-foreground/80",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#menu",
									className: "hover:text-coral transition-colors",
									children: c.nav.menu
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#about",
									className: "hover:text-coral transition-colors",
									children: c.nav.about
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#reviews",
									className: "hover:text-coral transition-colors",
									children: c.nav.reviews
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#visit",
									className: "hover:text-coral transition-colors",
									children: c.nav.visit
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex rounded-full border border-border p-0.5 text-[11px]",
								children: LANGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setLang(l),
									"aria-label": `Language: ${l.toUpperCase()}`,
									className: `px-2 py-1 rounded-full transition-colors ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`,
									children: l.toUpperCase()
								}, l))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE}`,
								className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}), c.ctaCall]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "top",
						className: "relative min-h-[100svh] w-full overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_default,
								alt: "Piatto di polpo alla griglia con vista sul mare al tramonto",
								width: 1920,
								height: 1280,
								loading: "eager",
								fetchPriority: "high",
								decoding: "async",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "max-w-2xl animate-float-up text-white",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
											"aria-label": "Breadcrumb",
											className: "mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#top",
													className: "hover:text-white transition-colors",
													children: c.homeLabel
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "text-white/35",
													children: "/"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#about",
													className: "hover:text-white transition-colors",
													children: c.nav.about
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "text-white/35",
													children: "/"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#menu",
													className: "hover:text-white transition-colors",
													children: c.nav.menu
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													"aria-hidden": "true",
													className: "text-white/35",
													children: "/"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: "#faq",
													className: "hover:text-white transition-colors",
													children: "FAQ"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] md:text-xs uppercase tracking-[0.28em] text-white/80",
											children: c.heroKicker
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
											className: "mt-5 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl text-balance",
											children: c.heroTitle
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-6 max-w-xl text-base md:text-lg text-white/85 text-balance",
											children: c.heroSub
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex flex-wrap items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${PHONE}`,
												className: "inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/20 hover:bg-red-700 hover:translate-y-[-1px] transition-transform",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}),
													c.ctaBook,
													" · ",
													PHONE_DISPLAY
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#menu",
												className: "inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition-colors",
												children: c.nav.menu
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-8 flex items-center gap-3 text-sm text-white/85",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.ratingLine })]
										})
									]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "relative py-24 md:py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8 grid gap-14 md:grid-cols-2 md:gap-20 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.28em] text-coral",
									children: c.aboutKicker
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance",
									children: c.aboutTitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 text-lg text-muted-foreground max-w-lg text-balance",
									children: c.aboutBody
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
									className: "mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8",
									children: c.aboutStats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-2xl",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-xs uppercase tracking-wider text-muted-foreground",
										children: s.v
									})] }, s.k))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 max-w-xl rounded-lg border border-border bg-background/80 p-4 shadow-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] uppercase tracking-[0.28em] text-coral",
										children: MENU_COPY[lang].serviceHoursTitle
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 flex flex-wrap gap-2",
										children: MENU_COPY[lang].serviceHours.map((slot) => {
											const status = (slot.label === "Pranzo" || slot.label === "Lunch" || slot.label === "Almuerzo" || slot.label === "Déjeuner" || slot.label === "Mittagessen" ? "lunch" : "aperitivo") === "lunch" ? lunchStatus : aperitivoStatus;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-[170px] rounded-md border border-border/70 bg-muted/30 px-3 py-2",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
														children: slot.label
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 font-display text-base leading-tight text-balance",
														children: slot.value
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: `mt-2 inline-flex rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${status.tone === "active" ? "bg-emerald-500/10 text-emerald-600" : status.tone === "pending" ? "bg-amber-500/10 text-amber-600" : "bg-rose-500/10 text-rose-600"}`,
														children: status.text
													})
												]
											}, slot.label);
										})
									})]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/5] overflow-hidden rounded-lg",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: aperitivo_default,
										alt: "Aperitivo al tramonto sul lungomare",
										width: 1600,
										height: 1200,
										loading: "lazy",
										className: "h-full w-full object-cover"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute -bottom-6 -left-6 hidden md:block bg-background border border-border rounded-lg px-6 py-5 shadow-xl max-w-[220px]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "font-display text-3xl leading-none",
										children: ["4,7", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-coral",
											children: "★"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-xs text-muted-foreground",
										children: ["Google · 35 ", c.reviewsWord]
									})]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "menu",
						className: "relative py-24 md:py-32 bg-muted/40 border-y border-border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-2xl",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] uppercase tracking-[0.28em] text-coral",
											children: c.menuKicker
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance",
											children: c.menuTitle
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground max-w-xs",
										children: c.menuNote
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-10 grid gap-6 lg:grid-cols-1",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-lg border border-border bg-background p-4 shadow-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] uppercase tracking-[0.28em] text-coral",
												children: MENU_COPY[lang].allergenTitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 max-w-xl text-sm text-muted-foreground",
												children: MENU_COPY[lang].allergenIntro
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-4 text-sm font-medium text-foreground",
												children: MENU_COPY[lang].allergenPrompt
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-3 grid gap-2 sm:grid-cols-2",
												children: MENU_COPY[lang].allergenItems.map((allergen) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-md border border-border/70 bg-muted/20 px-3 py-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "font-medium text-sm",
														children: allergen.name
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "mt-1 text-[11px] leading-relaxed text-muted-foreground",
														children: allergen.description
													})]
												}, allergen.name))
											})
										]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
									children: HIGHLIGHTS.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
										className: "group relative overflow-hidden rounded-lg bg-card border border-border",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "aspect-[4/3] overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: h.img,
												alt: h.name[lang],
												width: 1024,
												height: 768,
												loading: "lazy",
												className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-baseline justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-lg leading-tight",
													children: h.name[lang]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-display text-lg tabular-nums text-red-600",
													children: ["€ ", h.price]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-0.5 text-xs text-white/75",
												children: h.sub[lang]
											})]
										})]
									}, h.name.en))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-16 grid gap-10 md:grid-cols-2 lg:gap-x-16",
									children: menu.map((section) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "break-inside-avoid",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between border-b border-foreground/20 pb-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-2xl md:text-3xl",
												children: section.title[lang]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
												children: [
													section.items.length,
													" ",
													c.itemsLabel
												]
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-3 divide-y divide-border/70",
											children: section.items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: "flex items-center gap-4 py-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: item.img,
														alt: item[lang],
														width: 800,
														height: 600,
														loading: "lazy",
														className: "h-14 w-14 shrink-0 rounded-md object-cover ring-1 ring-border"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0 flex-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-[15px] leading-snug",
															children: item[lang]
														}), item.allergens?.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground",
															children: [
																MENU_COPY[lang].allergenLabel,
																": ",
																item.allergens.map((allergen) => translateAllergenName(allergen, lang)).join(", ")
															]
														}) : null]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "shrink-0 font-display text-base tabular-nums text-foreground/80",
														children: ["€ ", item.price]
													})
												]
											}, i))
										})]
									}, section.id))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-16 flex flex-col sm:flex-row items-center justify-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: `tel:${PHONE}`,
											className: "inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-red-700",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}), c.ctaBook]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: INSTAGRAM,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-background",
											children: "@sottosale_roseto"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: FACEBOOK,
											target: "_blank",
											rel: "noreferrer",
											className: "inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-background",
											children: "Sottosale"
										})
									]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "reviews",
						className: "py-24 md:py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-7xl px-5 md:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.28em] text-coral",
									children: c.reviewsKicker
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance",
									children: c.reviewsTitle
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-6 md:grid-cols-3",
								children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
									className: "rounded-lg border border-border bg-card p-7 flex flex-col",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { small: true }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
											className: "mt-4 font-display text-lg leading-snug text-balance",
											children: [
												"\"",
												r[lang],
												"\""
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
											className: "mt-6 pt-6 border-t border-border",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-sm font-medium",
												children: r.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-muted-foreground mt-0.5",
												children: r.meta
											})]
										})
									]
								}, r.name))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "faq",
						className: "border-y border-border bg-muted/25 py-24 md:py-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] uppercase tracking-[0.28em] text-coral",
									children: FAQ_COPY[lang].title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance",
									children: FAQ_COPY[lang].heading
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-6 max-w-2xl text-lg text-muted-foreground text-balance",
									children: FAQ_COPY[lang].intro
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#menu",
											className: "inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors",
											children: FAQ_COPY[lang].ctas.menu
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#about",
											className: "inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors",
											children: FAQ_COPY[lang].ctas.about
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#visit",
											className: "inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors",
											children: FAQ_COPY[lang].ctas.visit
										})
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "rounded-lg border border-border bg-background p-4 shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
									type: "single",
									collapsible: true,
									className: "w-full",
									children: FAQ_COPY[lang].items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
										value: `faq-${index}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, { children: item.question }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground leading-relaxed",
											children: item.answer
										}) })]
									}, item.question))
								})
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "visit",
						className: "relative overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: menu_default,
								alt: "",
								width: 1600,
								height: 1200,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/85" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32 text-primary-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "max-w-3xl",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] uppercase tracking-[0.28em] text-coral",
												children: c.visitKicker
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
												className: "mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance",
												children: c.visitTitle
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-6 max-w-xl text-lg text-primary-foreground/80 text-balance",
												children: c.visitBody
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-14 grid gap-8 md:grid-cols-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
												label: c.phoneLabel,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: `tel:${PHONE}`,
													className: "font-display text-2xl hover:text-coral transition-colors",
													children: PHONE_DISPLAY
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
												label: c.addressLabel,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: MAPS_URL,
													target: "_blank",
													rel: "noreferrer",
													className: "font-display text-xl leading-snug hover:text-coral transition-colors block",
													children: ADDRESS
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoBlock, {
												label: c.hoursLabel,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-xl leading-snug",
													children: c.hours
												})
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-12 flex flex-wrap items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: `tel:${PHONE}`,
												className: "inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-red-700 hover:translate-y-[-1px] transition-transform",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}),
													c.ctaCall,
													" · ",
													PHONE_DISPLAY
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: MAPS_URL,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10",
												children: c.directions
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: INSTAGRAM,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10",
												children: c.followUs
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: FACEBOOK,
												target: "_blank",
												rel: "noreferrer",
												className: "inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10",
												children: c.followUsFacebook
											})
										]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						"aria-label": "Map",
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[380px] md:h-[460px] w-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Sottosale Fishbar — Roseto degli Abruzzi",
								src: "https://www.google.com/maps?q=Sottosale+Fishbar+Lungomare+Trento+Roseto+degli+Abruzzi&output=embed",
								width: "100%",
								height: "100%",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade",
								className: "block h-full w-full border-0 grayscale-[15%]"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: MAPS_URL,
							target: "_blank",
							rel: "noreferrer",
							className: "absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-medium text-background shadow-xl hover:opacity-90",
							children: c.openMaps
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-baseline gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-lg text-red-600",
							children: "Sottosale"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase tracking-[0.22em] text-brine",
							children: "Fishbar"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sottosale Fishbar · ",
						c.footerRights
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: `tel:${PHONE}`,
				className: "md:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-sm font-medium text-white shadow-2xl hover:bg-red-700",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneIcon, {}),
					c.ctaCall,
					" · ",
					PHONE_DISPLAY
				]
			})
		]
	});
}
function InfoBlock({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-white/20 pt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2",
			children
		})]
	});
}
function PhoneIcon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" })
	});
}
function Stars({ small = false }) {
	const size = small ? 14 : 16;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-0.5 text-coral",
		children: [
			0,
			1,
			2,
			3,
			4
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			fill: "currentColor",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" })
		}, i))
	});
}
//#endregion
export { Home as component };
