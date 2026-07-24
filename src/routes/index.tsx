import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/accordion";
import heroImg from "@/assets/hero.jpg";
import menuImg from "@/assets/menu.jpg";
import aperitivoImg from "@/assets/aperitivo.jpg";
import dishOctopus from "@/assets/dish-octopus.jpg";
import dishTartare from "@/assets/dish-tartare.jpg";
import dishTagliolini from "@/assets/dish-tagliolini.jpg";
import dishFritto from "@/assets/dish-fritto.jpg";
import dishCocktails from "@/assets/dish-cocktails.jpg";
import dishCheesecake from "@/assets/dish-cheesecake.jpg";
import { menu, reviews, type Lang, type L10n } from "@/lib/menu-data";
import {
  BREADCRUMB_SCHEMA,
  FAQ_ITEMS,
  FAQ_SCHEMA,
  LOCAL_BUSINESS_SCHEMA,
  OG_IMAGE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  SITE_URL_WITH_SLASH,
  buildJsonLdScript,
} from "@/lib/seo";

type Highlight = { img: string; name: L10n; sub: L10n; price: string };

type MenuSectionCopy = {
  serviceHoursTitle: string;
  serviceHours: { label: string; value: string }[];
  allergenTitle: string;
  allergenIntro: string;
  allergenPrompt: string;
  allergenLabel: string;
  allergenItems: { name: string; description: string }[];
};

type ServiceKey = "lunch" | "aperitivo";

type ServiceStatusCopy = {
  title: string;
  active: string;
  upcoming: string;
  ended: string;
};

const ALLERGEN_LABELS: Record<Lang, Record<string, string>> = {
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
    Molluschi: "Molluschi",
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
    Molluschi: "Molluscs",
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
    Molluschi: "Moluscos",
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
    Molluschi: "Mollusques",
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
    Molluschi: "Weichtiere",
  },
};

const MENU_COPY: Record<Lang, MenuSectionCopy> = {
  it: {
    serviceHoursTitle: "Orari di servizio",
    serviceHours: [
      { label: "Pranzo", value: "Dalle 12:00 alle 14:30" },
      { label: "Aperitivo", value: "Dalle 18:00" },
    ],
    allergenTitle: "Allergeni",
    allergenIntro: "Per la tua sicurezza, consulta gli allergeni e comunicaci le tue esigenze alimentari per una migliore esperienza gastronomica.",
    allergenPrompt: "Consulta la lista degli allergeni",
    allergenLabel: "Allergeni",
    allergenItems: [
      { name: "Glutine", description: "Contenuto nei cereali e nei derivati" },
      { name: "Crostacei", description: "Gamberi, scampi, aragoste, granchi e simili" },
      { name: "Uova", description: "Tutti i prodotti a base di uova e derivati" },
      { name: "Pesce", description: "Prodotti che contengono pesce o derivati" },
      { name: "Arachidi", description: "Creme e condimenti anche in piccole dosi" },
      { name: "Soia", description: "Prodotti a base di soia" },
      { name: "Latte", description: "Prodotti caseari, latticini e derivati" },
      { name: "Frutta a guscio", description: "Mandorle, nocciole, noci, pistacchi" },
      { name: "Sedano", description: "A pezzi o nei preparati vegetali" },
      { name: "Senape", description: "Si può trovare nelle salse e nei condimenti" },
      { name: "Semi di Sesamo", description: "Nel pane o in alcuni tipi di farine" },
      { name: "Anidride solforosa", description: "Conserve, cibi sott'aceto (solfiti)" },
      { name: "Lupini", description: "Legume proteico presente nei cibi vegan" },
      { name: "Molluschi", description: "Vongole, ostriche, cozze e simili" },
    ],
  },
  en: {
    serviceHoursTitle: "Service hours",
    serviceHours: [
      { label: "Lunch", value: "12:00 PM - 2:30 PM" },
      { label: "Aperitivo", value: "From 6:00 PM" },
    ],
    allergenTitle: "Allergens",
    allergenIntro: "For your safety, please check the allergens and let us know about any dietary needs for the best dining experience.",
    allergenPrompt: "View the allergen list",
    allergenLabel: "Allergens",
    allergenItems: [
      { name: "Gluten", description: "Found in cereals and products made from them" },
      { name: "Crustaceans", description: "Shrimp, scampi, lobster, crab and similar" },
      { name: "Eggs", description: "All egg-based products and derivatives" },
      { name: "Fish", description: "Products containing fish or fish derivatives" },
      { name: "Peanuts", description: "Creams and dressings even in small amounts" },
      { name: "Soy", description: "Soy-based products" },
      { name: "Milk", description: "Dairy products, milk and derivatives" },
      { name: "Tree nuts", description: "Almonds, hazelnuts, walnuts, pistachios" },
      { name: "Celery", description: "In pieces or in vegetable preparations" },
      { name: "Mustard", description: "May be found in sauces and condiments" },
      { name: "Sesame seeds", description: "In bread or in some types of flour" },
      { name: "Sulphur dioxide", description: "Preserves, pickled foods (sulfites)" },
      { name: "Lupin", description: "Protein-rich legume found in vegan foods" },
      { name: "Molluscs", description: "Clams, oysters, mussels and similar" },
    ],
  },
  es: {
    serviceHoursTitle: "Horario de servicio",
    serviceHours: [
      { label: "Almuerzo", value: "De 12:00 a 14:30" },
      { label: "Aperitivo", value: "Desde las 18:00" },
    ],
    allergenTitle: "Alérgenos",
    allergenIntro: "Por tu seguridad, consulta los alérgenos y comunícanos tus necesidades alimentarias para disfrutar mejor de la experiencia gastronómica.",
    allergenPrompt: "Consulta la lista de alérgenos",
    allergenLabel: "Alérgenos",
    allergenItems: [
      { name: "Gluten", description: "Presente en cereales y productos derivados" },
      { name: "Crustáceos", description: "Gambas, langostinos, bogavantes, cangrejos y similares" },
      { name: "Huevos", description: "Todos los productos a base de huevo y derivados" },
      { name: "Pescado", description: "Productos que contienen pescado o derivados" },
      { name: "Cacahuetes", description: "Cremas y condimentos incluso en pequeñas dosis" },
      { name: "Soja", description: "Productos a base de soja" },
      { name: "Leche", description: "Lácteos, productos lácteos y derivados" },
      { name: "Frutos de cáscara", description: "Almendras, avellanas, nueces, pistachos" },
      { name: "Apio", description: "En trozos o en preparados vegetales" },
      { name: "Mostaza", description: "Puede encontrarse en salsas y condimentos" },
      { name: "Sésamo", description: "En el pan o en algunos tipos de harina" },
      { name: "Dióxido de azufre", description: "Conservas, alimentos en vinagre (sulfitos)" },
      { name: "Lupino", description: "Legumbre proteica presente en alimentos veganos" },
      { name: "Moluscos", description: "Almejas, ostras, mejillones y similares" },
    ],
  },
  fr: {
    serviceHoursTitle: "Horaires de service",
    serviceHours: [
      { label: "Déjeuner", value: "De 12 h 00 à 14 h 30" },
      { label: "Apéritif", value: "À partir de 18 h 00" },
    ],
    allergenTitle: "Allergènes",
    allergenIntro: "Pour votre sécurité, consultez les allergènes et indiquez-nous vos besoins alimentaires pour une meilleure expérience gastronomique.",
    allergenPrompt: "Consultez la liste des allergènes",
    allergenLabel: "Allergènes",
    allergenItems: [
      { name: "Gluten", description: "Présent dans les céréales et les produits dérivés" },
      { name: "Crustacés", description: "Crevettes, langoustines, homards, crabes et similaires" },
      { name: "Œufs", description: "Tous les produits à base d'œufs et dérivés" },
      { name: "Poisson", description: "Produits contenant du poisson ou des dérivés" },
      { name: "Arachides", description: "Crèmes et condiments même en petites quantités" },
      { name: "Soja", description: "Produits à base de soja" },
      { name: "Lait", description: "Produits laitiers, laitages et dérivés" },
      { name: "Fruits à coque", description: "Amandes, noisettes, noix, pistaches" },
      { name: "Céleri", description: "En morceaux ou dans des préparations végétales" },
      { name: "Moutarde", description: "Peut se trouver dans les sauces et les condiments" },
      { name: "Graines de sésame", description: "Dans le pain ou certains types de farine" },
      { name: "Dioxyde de soufre", description: "Conserves, aliments au vinaigre (sulfites)" },
      { name: "Lupin", description: "Légumineuse protéinée présente dans les aliments vegan" },
      { name: "Mollusques", description: "Palourdes, huîtres, moules et similaires" },
    ],
  },
  de: {
    serviceHoursTitle: "Servicezeiten",
    serviceHours: [
      { label: "Mittagessen", value: "12:00 bis 14:30 Uhr" },
      { label: "Aperitif", value: "Ab 18:00 Uhr" },
    ],
    allergenTitle: "Allergene",
    allergenIntro: "Zu Ihrer Sicherheit beachten Sie bitte die Allergene und teilen Sie uns Ihre Ernährungsbedürfnisse mit, damit wir Ihnen das bestmögliche Erlebnis bieten können.",
    allergenPrompt: "Allergenliste ansehen",
    allergenLabel: "Allergene",
    allergenItems: [
      { name: "Gluten", description: "Enthalten in Getreide und Getreideerzeugnissen" },
      { name: "Krebstiere", description: "Garnelen, Scampi, Hummer, Krabben und ähnliche" },
      { name: "Eier", description: "Alle Produkte auf Eierbasis und daraus hergestellt" },
      { name: "Fisch", description: "Produkte, die Fisch oder Fischderivate enthalten" },
      { name: "Erdnüsse", description: "Cremes und Dressings auch in kleinen Mengen" },
      { name: "Soja", description: "Sojaprodukte" },
      { name: "Milch", description: "Milchprodukte, Molkereiprodukte und Derivate" },
      { name: "Schalenfrüchte", description: "Mandeln, Haselnüsse, Walnüsse, Pistazien" },
      { name: "Sellerie", description: "In Stücken oder in Gemüsezubereitungen" },
      { name: "Senf", description: "Kann in Saucen und Würzmitteln enthalten sein" },
      { name: "Sesamsamen", description: "In Brot oder in einigen Mehlsorten" },
      { name: "Schwefeldioxid", description: "Konserven, eingelegte Lebensmittel (Sulfite)" },
      { name: "Lupinen", description: "Eiweißreiche Hülsenfrucht in veganen Lebensmitteln" },
      { name: "Weichtiere", description: "Muscheln, Austern, Miesmuscheln und ähnliche" },
    ],
  },
};

const SERVICE_WINDOWS: Record<ServiceKey, { start: number; end?: number }> = {
  lunch: { start: 12 * 60, end: 14 * 60 + 30 },
  aperitivo: { start: 18 * 60 },
};

const SERVICE_STATUS_COPY: Record<Lang, Record<ServiceKey, ServiceStatusCopy>> = {
  it: {
    lunch: {
      title: "Pranzo",
      active: "Pranzo in corso",
      upcoming: "Pranzo dalle 12:00",
      ended: "Pranzo terminato per oggi",
    },
    aperitivo: {
      title: "Aperitivo",
      active: "Aperitivo in corso",
      upcoming: "Aperitivo dalle 18:00",
      ended: "Aperitivo terminato per oggi",
    },
  },
  en: {
    lunch: {
      title: "Lunch",
      active: "Lunch now on",
      upcoming: "Lunch from 12:00 PM",
      ended: "Lunch finished for today",
    },
    aperitivo: {
      title: "Aperitivo",
      active: "Aperitivo now on",
      upcoming: "Aperitivo from 6:00 PM",
      ended: "Aperitivo finished for today",
    },
  },
  es: {
    lunch: {
      title: "Almuerzo",
      active: "Almuerzo en curso",
      upcoming: "Almuerzo desde las 12:00",
      ended: "Almuerzo terminado por hoy",
    },
    aperitivo: {
      title: "Aperitivo",
      active: "Aperitivo en curso",
      upcoming: "Aperitivo desde las 18:00",
      ended: "Aperitivo terminado por hoy",
    },
  },
  fr: {
    lunch: {
      title: "Déjeuner",
      active: "Déjeuner en cours",
      upcoming: "Déjeuner à partir de 12 h 00",
      ended: "Déjeuner terminé pour aujourd'hui",
    },
    aperitivo: {
      title: "Apéritif",
      active: "Apéritif en cours",
      upcoming: "Apéritif à partir de 18 h 00",
      ended: "Apéritif terminé pour aujourd'hui",
    },
  },
  de: {
    lunch: {
      title: "Mittagessen",
      active: "Mittagessen läuft gerade",
      upcoming: "Mittagessen ab 12:00 Uhr",
      ended: "Mittagessen für heute beendet",
    },
    aperitivo: {
      title: "Aperitif",
      active: "Aperitif läuft gerade",
      upcoming: "Aperitif ab 18:00 Uhr",
      ended: "Aperitif für heute beendet",
    },
  },
};

function getRomeTimeMinutes(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Rome",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(date);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  return hour * 60 + minute;
}

function getServiceStatus(lang: Lang, key: ServiceKey, minutes: number) {
  const copy = SERVICE_STATUS_COPY[lang][key];
  const window = SERVICE_WINDOWS[key];

  if (minutes < window.start) {
    return { tone: "pending" as const, text: copy.upcoming };
  }

  if (window.end && minutes > window.end) {
    return { tone: "ended" as const, text: copy.ended };
  }

  return { tone: "active" as const, text: copy.active };
}

function translateAllergenName(name: string, lang: Lang) {
  return ALLERGEN_LABELS[lang][name] ?? name;
}

const HIGHLIGHTS: Highlight[] = [
  {
    img: dishOctopus,
    name: { it: "Tentacolo di polpo", en: "Octopus tentacle", es: "Tentáculo de pulpo", fr: "Tentacule de poulpe", de: "Oktopus-Tentakel" },
    sub: { it: "salsa chimichurri", en: "chimichurri sauce", es: "salsa chimichurri", fr: "sauce chimichurri", de: "Chimichurri-Sauce" },
    price: "12",
  },
  {
    img: dishTartare,
    name: { it: "Tartare di tonno", en: "Tuna tartare", es: "Tartar de atún", fr: "Tartare de thon", de: "Thunfisch-Tatar" },
    sub: { it: "stracciatella, teriyaki, cipolla croccante", en: "stracciatella, teriyaki, crispy onion", es: "stracciatella, teriyaki, cebolla crujiente", fr: "stracciatella, teriyaki, oignon croustillant", de: "Stracciatella, Teriyaki, knusprige Zwiebel" },
    price: "11",
  },
  {
    img: dishTagliolini,
    name: { it: "Tagliolini alle vongole", en: "Tagliolini with clams", es: "Tagliolini con almejas", fr: "Tagliolini aux palourdes", de: "Tagliolini mit Venusmuscheln" },
    sub: { it: "acqua e farina, fatti in casa", en: "fresh, house-made", es: "frescos, caseros", fr: "frais, maison", de: "frisch, hausgemacht" },
    price: "11",
  },
  {
    img: dishFritto,
    name: { it: "Frittura di calamari e gamberi", en: "Fried calamari & shrimp", es: "Fritura de calamares y gambas", fr: "Friture de calamars et crevettes", de: "Frittierte Calamari & Garnelen" },
    sub: { it: "il classico da chiringuito", en: "the beach-bar classic", es: "el clásico del chiringuito", fr: "le classique du bar de plage", de: "der Strandbar-Klassiker" },
    price: "15",
  },
  {
    img: dishCocktails,
    name: { it: "Spritz & cocktail", en: "Spritz & cocktails", es: "Spritz y cócteles", fr: "Spritz & cocktails", de: "Spritz & Cocktails" },
    sub: { it: "aperitivo al tramonto", en: "sunset aperitivo", es: "aperitivo al atardecer", fr: "apéritif au coucher du soleil", de: "Aperitif zum Sonnenuntergang" },
    price: "6",
  },
  {
    img: dishCheesecake,
    name: { it: "Cheesecake mango & passion", en: "Mango & passion cheesecake", es: "Tarta de queso mango y maracuyá", fr: "Cheesecake mangue & passion", de: "Mango-Maracuja-Cheesecake" },
    sub: { it: "il finale dolce", en: "the sweet finish", es: "el final dulce", fr: "la touche sucrée", de: "der süße Abschluss" },
    price: "6",
  },
];

const PHONE = "+393316250601";
const PHONE_DISPLAY = "+39 331 625 0601";
const ADDRESS = "Lungomare Trento, 64026 Roseto degli Abruzzi (TE)";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Sottosale+Fishbar+Roseto+degli+Abruzzi";
const INSTAGRAM = "https://www.instagram.com/sottosale_roseto/"; 
const FACEBOOK = "https://www.facebook.com/sottosaleroseto/?ref=PROFILE_EDIT_xav_ig_profile_page_web#";

const ALLERGEN_INFO = [
  { name: "Glutine", description: "Contenuto nei cereali e nei derivati" },
  { name: "Crostacei", description: "Gamberi, scampi, aragoste, granchi e simili" },
  { name: "Uova", description: "Tutti i prodotti a base di uova e derivati" },
  { name: "Pesce", description: "Prodotti che contengono pesce o derivati" },
  { name: "Arachidi", description: "Creme e condimenti anche in piccole dosi" },
  { name: "Soia", description: "Prodotti a base di soia" },
  { name: "Latte", description: "Prodotti caseari, latticini e derivati" },
  { name: "Frutta a guscio", description: "Mandorle, nocciole, noci, pistacchi" },
  { name: "Sedano", description: "A pezzi o nei preparati vegetali" },
  { name: "Senape", description: "Si può trovare nelle salse e nei condimenti" },
  { name: "Semi di Sesamo", description: "Nel pane o in alcuni tipi di farine" },
  { name: "Anidride solforosa", description: "Conserve, cibi sott'aceto (solfiti)" },
  { name: "Lupini", description: "Legume proteico presente nei cibi vegan" },
  { name: "Molluschi", description: "Vongole, ostriche, cozze e simili" },
];


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "restaurant" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "it_IT" },
      { property: "og:url", content: SITE_URL_WITH_SLASH },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: "Sottosale Fishbar a Roseto degli Abruzzi" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL_WITH_SLASH },
      { rel: "preload", as: "image", href: heroImg },
    ],
    scripts: [
      buildJsonLdScript(LOCAL_BUSINESS_SCHEMA),
      buildJsonLdScript(BREADCRUMB_SCHEMA),
      buildJsonLdScript(FAQ_SCHEMA),
    ],
  }),
  component: Home,
});


const t: Record<Lang, {
  nav: { menu: string; about: string; reviews: string; visit: string };
  ctaCall: string;
  ctaBook: string;
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  ratingLine: string;
  aboutKicker: string;
  aboutTitle: string;
  aboutBody: string;
  aboutStats: { k: string; v: string }[];
  menuKicker: string;
  menuTitle: string;
  menuNote: string;
  itemsLabel: string;
  reviewsKicker: string;
  reviewsTitle: string;
  visitKicker: string;
  visitTitle: string;
  visitBody: string;
  hoursLabel: string;
  hours: string;
  addressLabel: string;
  phoneLabel: string;
  followUs: string;
  followUsFacebook: string;
  reviewsWord: string;
  directions: string;
  openMaps: string;
  footerRights: string;
}> = {
  it: {
    nav: { menu: "Menu", about: "Il posto", reviews: "Recensioni", visit: "Vieni a trovarci" },
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
      { k: "10–20 €", v: "prezzo medio a persona" },
      { k: "Aperto fino alle 02:00", v: "cucina, aperitivo e drink" },
      { k: "Pranzo · Aperitivo · Sera", v: "un posto, tre momenti" },
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
    footerRights: "Tutti i diritti riservati.",
  },
  en: {
    nav: { menu: "Menu", about: "The place", reviews: "Reviews", visit: "Find us" },
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
      { k: "€10–20", v: "average per person" },
      { k: "Open until 2 AM", v: "kitchen, aperitivo & drinks" },
      { k: "Lunch · Aperitivo · Night", v: "one place, three moments" },
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
    footerRights: "All rights reserved.",
  },
  es: {
    nav: { menu: "Carta", about: "El lugar", reviews: "Reseñas", visit: "Encuéntranos" },
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
      { k: "10–20 €", v: "precio medio por persona" },
      { k: "Abierto hasta las 02:00", v: "cocina, aperitivo y copas" },
      { k: "Almuerzo · Aperitivo · Noche", v: "un lugar, tres momentos" },
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
    footerRights: "Todos los derechos reservados.",
  },
  fr: {
    nav: { menu: "Carte", about: "Le lieu", reviews: "Avis", visit: "Nous trouver" },
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
      { k: "10–20 €", v: "prix moyen par personne" },
      { k: "Ouvert jusqu'à 2 h", v: "cuisine, apéritif et boissons" },
      { k: "Déjeuner · Apéritif · Soir", v: "un lieu, trois moments" },
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
    footerRights: "Tous droits réservés.",
  },
  de: {
    nav: { menu: "Karte", about: "Der Ort", reviews: "Bewertungen", visit: "Finden Sie uns" },
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
      { k: "10–20 €", v: "Durchschnitt pro Person" },
      { k: "Geöffnet bis 02:00 Uhr", v: "Küche, Aperitivo & Drinks" },
      { k: "Mittag · Aperitivo · Nacht", v: "ein Ort, drei Momente" },
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
    footerRights: "Alle Rechte vorbehalten.",
  },
};

const LANGS: Lang[] = ["it", "en", "es", "fr", "de"];

function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const [now, setNow] = useState(() => new Date());
  const c = t[lang];
  const currentMinutes = getRomeTimeMinutes(now);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(new Date());
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  const lunchStatus = getServiceStatus(lang, "lunch", currentMinutes);
  const aperitivoStatus = getServiceStatus(lang, "aperitivo", currentMinutes);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background">
        Salta al contenuto
      </a>

      {/* Nav */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 md:px-8">
          <a href="#top" className="flex items-baseline gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 shadow-sm">
            <span className="font-display text-xl md:text-2xl tracking-tight text-red-600">Sottosale</span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-brine hidden sm:inline">Fishbar</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
            <a href="#menu" className="hover:text-coral transition-colors">{c.nav.menu}</a>
            <a href="#about" className="hover:text-coral transition-colors">{c.nav.about}</a>
            <a href="#reviews" className="hover:text-coral transition-colors">{c.nav.reviews}</a>
            <a href="#visit" className="hover:text-coral transition-colors">{c.nav.visit}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex rounded-full border border-border p-0.5 text-[11px]">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-label={`Language: ${l.toUpperCase()}`}
                  className={`px-2 py-1 rounded-full transition-colors ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
                >{l.toUpperCase()}</button>
              ))}
            </div>
            <a
              href={`tel:${PHONE}`}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700 transition-colors"
            >
              <PhoneIcon />
              {c.ctaCall}
            </a>
          </div>
        </div>
      </header>

      <main id="main-content">
      {/* Hero */}
      <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Piatto di polpo alla griglia con vista sul mare al tramonto"
          width={1920}
          height={1280}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 md:px-8 md:pb-24">
          <div className="max-w-2xl animate-float-up text-white">
            <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
              <a href="#top" className="hover:text-white transition-colors">Home</a>
              <span aria-hidden="true" className="text-white/35">/</span>
              <a href="#about" className="hover:text-white transition-colors">Il posto</a>
              <span aria-hidden="true" className="text-white/35">/</span>
              <a href="#menu" className="hover:text-white transition-colors">Menu</a>
              <span aria-hidden="true" className="text-white/35">/</span>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
            </nav>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.28em] text-white/80">
              {c.heroKicker}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.02] md:text-7xl lg:text-8xl text-balance">
              {c.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 text-balance">
              {c.heroSub}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-black/20 hover:bg-red-700 hover:translate-y-[-1px] transition-transform"
              >
                <PhoneIcon />
                {c.ctaBook} · {PHONE_DISPLAY}
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/10 transition-colors"
              >
                {c.nav.menu}
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/85">
              <Stars />
              <span>{c.ratingLine}</span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid gap-14 md:grid-cols-2 md:gap-20 items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{c.aboutKicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {c.aboutTitle}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg text-balance">
              {c.aboutBody}
            </p>

            <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-border pt-8">
              {c.aboutStats.map((s) => (
                <div key={s.k}>
                  <dt className="font-display text-2xl">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 max-w-xl rounded-lg border border-border bg-background/80 p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{MENU_COPY[lang].serviceHoursTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {MENU_COPY[lang].serviceHours.map((slot) => {
                  const serviceKey = slot.label === "Pranzo" || slot.label === "Lunch" || slot.label === "Almuerzo" || slot.label === "Déjeuner" || slot.label === "Mittagessen"
                    ? "lunch"
                    : "aperitivo";
                  const status = serviceKey === "lunch" ? lunchStatus : aperitivoStatus;

                  return (
                  <div key={slot.label} className="min-w-[170px] rounded-md border border-border/70 bg-muted/30 px-3 py-2">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{slot.label}</p>
                    <p className="mt-1 font-display text-base leading-tight text-balance">{slot.value}</p>
                    <p
                      className={`mt-2 inline-flex rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.16em] ${status.tone === "active" ? "bg-emerald-500/10 text-emerald-600" : status.tone === "pending" ? "bg-amber-500/10 text-amber-600" : "bg-rose-500/10 text-rose-600"}`}
                    >
                      {status.text}
                    </p>
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={aperitivoImg}
                alt="Aperitivo al tramonto sul lungomare"
                width={1600}
                height={1200}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-background border border-border rounded-lg px-6 py-5 shadow-xl max-w-[220px]">
              <p className="font-display text-3xl leading-none">4,7<span className="text-coral">★</span></p>
              <p className="mt-2 text-xs text-muted-foreground">Google · 35 {c.reviewsWord}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="relative py-24 md:py-32 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{c.menuKicker}</p>
              <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
                {c.menuTitle}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">{c.menuNote}</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-1">
            <div className="rounded-lg border border-border bg-background p-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{MENU_COPY[lang].allergenTitle}</p>
              <p className="mt-3 max-w-xl text-sm text-muted-foreground">
                {MENU_COPY[lang].allergenIntro}
              </p>
              <p className="mt-4 text-sm font-medium text-foreground">{MENU_COPY[lang].allergenPrompt}</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {MENU_COPY[lang].allergenItems.map((allergen) => (
                  <div key={allergen.name} className="rounded-md border border-border/70 bg-muted/20 px-3 py-3">
                    <p className="font-medium text-sm">{allergen.name}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{allergen.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signature dishes */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <figure key={h.name.en} className="group relative overflow-hidden rounded-lg bg-card border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.name[lang]}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/50 to-transparent text-white">
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-display text-lg leading-tight">{h.name[lang]}</span>
                    <span className="font-display text-lg tabular-nums text-red-600">€ {h.price}</span>
                  </div>
                  <p className="mt-0.5 text-xs text-white/75">{h.sub[lang]}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:gap-x-16">

            {menu.map((section) => (
              <div key={section.id} className="break-inside-avoid">
                <div className="flex items-baseline justify-between border-b border-foreground/20 pb-3">
                  <h3 className="font-display text-2xl md:text-3xl">{section.title[lang]}</h3>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {section.items.length} {c.itemsLabel}
                  </span>
                </div>
                <ul className="mt-3 divide-y divide-border/70">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4 py-3">
                      <img
                        src={item.img}
                        alt={item[lang]}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="h-14 w-14 shrink-0 rounded-md object-cover ring-1 ring-border"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="block text-[15px] leading-snug">{item[lang]}</span>
                        {item.allergens?.length ? (
                          <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                            {MENU_COPY[lang].allergenLabel}: {item.allergens.map((allergen) => translateAllergenName(allergen, lang)).join(", ")}
                          </p>
                        ) : null}
                      </div>
                      <span className="shrink-0 font-display text-base tabular-nums text-foreground/80">€ {item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white hover:bg-red-700"
            >
              <PhoneIcon />
              {c.ctaBook}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-background"
            >
              @sottosale_roseto
            </a>
            <a
              href={FACEBOOK}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3.5 text-sm font-medium hover:bg-background"
            >
              Sottosale
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{c.reviewsKicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {c.reviewsTitle}
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="rounded-lg border border-border bg-card p-7 flex flex-col">
                <Stars small />
                <blockquote className="mt-4 font-display text-lg leading-snug text-balance">
                  "{r[lang]}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-border">
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{r.meta}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border bg-muted/25 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-coral">Domande frequenti</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              Tutto quello che serve per prenotare, mangiare e arrivare senza dubbi.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
              Questa sezione aiuta chi cerca un pranzo di mare, un aperitivo al tramonto o informazioni rapide su orari e allergeni.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#menu" className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors">
                Vai al menu
              </a>
              <a href="#about" className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors">
                Orari e servizio
              </a>
              <a href="#visit" className="inline-flex items-center rounded-full border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-background transition-colors">
                Come arrivare
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-4 shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Visit / CTA */}
      <section id="visit" className="relative overflow-hidden">
        <img
          src={menuImg}
          alt=""
          width={1600}
          height={1200}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32 text-primary-foreground">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-coral">{c.visitKicker}</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl leading-[1.05] text-balance">
              {c.visitTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 text-balance">
              {c.visitBody}
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <InfoBlock label={c.phoneLabel}>
              <a href={`tel:${PHONE}`} className="font-display text-2xl hover:text-coral transition-colors">
                {PHONE_DISPLAY}
              </a>
            </InfoBlock>
            <InfoBlock label={c.addressLabel}>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="font-display text-xl leading-snug hover:text-coral transition-colors block">
                {ADDRESS}
              </a>
            </InfoBlock>
            <InfoBlock label={c.hoursLabel}>
              <span className="font-display text-xl leading-snug">{c.hours}</span>
            </InfoBlock>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-red-700 hover:translate-y-[-1px] transition-transform"
            >
              <PhoneIcon />
              {c.ctaCall} · {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_URL}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10"
            >
              {c.directions}
            </a>
            <a
              href={INSTAGRAM}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10"
            >
              {c.followUs}
            </a>
            <a
              href={FACEBOOK}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/10"
            >
              {c.followUsFacebook}
            </a>
          </div>
        </div>
      </section>

      {/* Map */}
      <section aria-label="Map" className="relative">
        <div className="h-[380px] md:h-[460px] w-full">
          <iframe
            title="Sottosale Fishbar — Roseto degli Abruzzi"
            src="https://www.google.com/maps?q=Sottosale+Fishbar+Lungomare+Trento+Roseto+degli+Abruzzi&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-full w-full border-0 grayscale-[15%]"
          />
        </div>
        <a
          href={MAPS_URL}
          target="_blank" rel="noreferrer"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-xs font-medium text-background shadow-xl hover:opacity-90"
        >
          {c.openMaps}
        </a>
      </section>


      {/* Footer */}
      </main>
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="inline-flex items-baseline gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 shadow-sm">
            <span className="font-display text-lg text-red-600">Sottosale</span>
            <span className="text-xs uppercase tracking-[0.22em] text-brine">Fishbar</span>
          </div>
          <div>© {new Date().getFullYear()} Sottosale Fishbar · {c.footerRights}</div>
        </div>
      </footer>

      {/* Sticky mobile call */}
      <a
        href={`tel:${PHONE}`}
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-sm font-medium text-white shadow-2xl hover:bg-red-700"
      >
        <PhoneIcon />
        {c.ctaCall} · {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-white/20 pt-5">
      <p className="text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60">{label}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Stars({ small = false }: { small?: boolean }) {
  const size = small ? 14 : 16;
  return (
    <div className="flex items-center gap-0.5 text-coral">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}
