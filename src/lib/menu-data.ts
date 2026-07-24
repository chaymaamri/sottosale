import dishOctopus from "@/assets/dish-octopus.jpg";
import dishTartare from "@/assets/dish-tartare.jpg";
import dishTagliolini from "@/assets/dish-tagliolini.jpg";
import dishFritto from "@/assets/dish-fritto.jpg";
import dishCocktails from "@/assets/dish-cocktails.jpg";
import dishCheesecake from "@/assets/dish-cheesecake.jpg";
import dishMussels from "@/assets/dish-mussels.jpg";
import dishShrimp from "@/assets/dish-shrimp.jpg";
import dishSalmon from "@/assets/dish-salmon.jpg";
import dishTuna from "@/assets/dish-tuna.jpg";
import dishFishbuns from "@/assets/dish-fishbuns.jpg";
import dishFries from "@/assets/dish-fries.jpg";
import dishGnocchi from "@/assets/dish-gnocchi.jpg";
import dishBeer from "@/assets/dish-beer.jpg";
import dishWine from "@/assets/dish-wine.jpg";
import dishGin from "@/assets/dish-gin.jpg";
import dishDrinks from "@/assets/dish-drinks.jpg";
import dishAnchovies from "@/assets/dish-anchovies.jpg";
import dishSeafoodSalad from "@/assets/dish-seafood-salad.jpg";
import dishSkewers from "@/assets/dish-skewers.jpg";

export type Lang = "it" | "en" | "es" | "fr" | "de";

export type L10n = Record<Lang, string>;

export type MenuItem = {
  it: string;
  en: string;
  es: string;
  fr: string;
  de: string;
  price: string;
  img: string;
  allergens?: string[];
};

export type MenuSection = {
  id: string;
  title: L10n;
  items: MenuItem[];
};

export const menu: MenuSection[] = [
  {
    id: "pranzo",
    title: {
      it: "Pranzo",
      en: "Lunch",
      es: "Almuerzo",
      fr: "Déjeuner",
      de: "Mittagessen",
    },
    items: [
      { it: "Tentacolo di polpo con salsa chimichurri", en: "Octopus tentacle with chimichurri sauce", es: "Tentáculo de pulpo con salsa chimichurri", fr: "Tentacule de poulpe, sauce chimichurri", de: "Oktopus-Tentakel mit Chimichurri-Sauce", price: "12", img: dishOctopus, allergens: ["Pesce", "Molluschi"] },
      { it: "Alici fritte con maionese allo yuzu", en: "Fried anchovies with yuzu mayo", es: "Boquerones fritos con mayonesa de yuzu", fr: "Anchois frits, mayo au yuzu", de: "Frittierte Sardellen mit Yuzu-Mayo", price: "9", img: dishAnchovies, allergens: ["Glutine", "Uova", "Pesce"] },
      { it: "Insalata di mare", en: "Seafood salad", es: "Ensalada de mariscos", fr: "Salade de fruits de mer", de: "Meeresfrüchtesalat", price: "11", img: dishSeafoodSalad, allergens: ["Crostacei", "Pesce", "Molluschi"] },
      { it: "Sauté di cozze", en: "Sautéed mussels", es: "Salteado de mejillones", fr: "Moules sautées", de: "Sautierte Miesmuscheln", price: "8", img: dishMussels, allergens: ["Molluschi"] },
      { it: "Pop corn di gamberi", en: "Shrimp popcorn", es: "Palomitas de gambas", fr: "Popcorn de crevettes", de: "Garnelen-Popcorn", price: "10", img: dishShrimp, allergens: ["Glutine", "Pesce", "Soia"] },
      { it: "Tartare di tonno, stracciatella, salsa teriyaki e cipolla croccante", en: "Tuna tartare, stracciatella, teriyaki & crispy onion", es: "Tartar de atún, stracciatella, teriyaki y cebolla crujiente", fr: "Tartare de thon, stracciatella, teriyaki, oignon croustillant", de: "Thunfisch-Tatar, Stracciatella, Teriyaki & knusprige Zwiebel", price: "11", img: dishTartare, allergens: ["Glutine", "Soia", "Latte"] },
      { it: "Raviolo di burrata, gazpacho, cozza e pane fritto", en: "Burrata raviolo, gazpacho, mussel & fried bread", es: "Raviolo de burrata, gazpacho, mejillón y pan frito", fr: "Raviole de burrata, gaspacho, moule, pain frit", de: "Burrata-Raviolo, Gazpacho, Muschel & frittiertes Brot", price: "13", img: dishTagliolini },
      { it: "Tagliolini acqua e farina alle vongole", en: "Fresh tagliolini with clams", es: "Tagliolini frescos con almejas", fr: "Tagliolini frais aux palourdes", de: "Frische Tagliolini mit Venusmuscheln", price: "11", img: dishTagliolini, allergens: ["Glutine", "Pesce", "Molluschi"] },
      { it: "Gnocchi, pesto di basilico, lime, crudo di gambero e nocciola", en: "Gnocchi, basil pesto, lime, raw shrimp & hazelnut", es: "Ñoquis, pesto de albahaca, lima, gamba cruda y avellana", fr: "Gnocchis, pesto de basilic, citron vert, crevette crue, noisette", de: "Gnocchi, Basilikumpesto, Limette, rohe Garnele & Haselnuss", price: "12", img: dishGnocchi, allergens: ["Glutine", "Crostacei", "Uova", "Pesce", "Molluschi"] },
      { it: "Chitarra allo scoglio", en: "Chitarra pasta with mixed seafood", es: "Pasta chitarra con mariscos variados", fr: "Pâtes chitarra aux fruits de mer", de: "Chitarra-Pasta mit Meeresfrüchten", price: "12", img: dishTagliolini, allergens: ["Glutine", "Uova", "Pesce", "Latte", "Frutta a guscio"] },
      { it: "Bistecca di tonno, pesto di olive taggiasche e acciughe", en: "Tuna steak, taggiasca olive & anchovy pesto", es: "Filete de atún, pesto de olivas taggiasca y anchoas", fr: "Steak de thon, pesto d'olives taggiasca et anchois", de: "Thunfischsteak, Taggiasca-Oliven- und Sardellenpesto", price: "15", img: dishTuna, allergens: ["Pesce"] },
      { it: "Frittura di calamari e gamberi", en: "Fried calamari & shrimp", es: "Fritura de calamares y gambas", fr: "Friture de calamars et crevettes", de: "Frittierte Calamari & Garnelen", price: "15", img: dishFritto, allergens: ["Pesce"] },
      { it: "Spiedini di calamari e gamberi alla griglia", en: "Grilled calamari & shrimp skewers", es: "Brochetas de calamar y gambas a la parrilla", fr: "Brochettes de calamar et crevettes grillées", de: "Gegrillte Calamari- & Garnelenspieße", price: "12", img: dishSkewers, allergens: ["Crostacei", "Pesce"] },
      { it: "Insalatona di gamberi", en: "Shrimp big salad", es: "Ensalada grande de gambas", fr: "Grande salade de crevettes", de: "Große Garnelensalat", price: "8", img: dishSeafoodSalad, allergens: ["Crostacei", "Latte"] },
      { it: "Insalatona di tonno", en: "Tuna big salad", es: "Ensalada grande de atún", fr: "Grande salade de thon", de: "Große Thunfischsalat", price: "8", img: dishTuna, allergens: ["Glutine", "Pesce", "Soia", "Latte"] },
      { it: "Cheesecake mango e passion fruit", en: "Mango & passion fruit cheesecake", es: "Tarta de queso mango y maracuyá", fr: "Cheesecake mangue et fruit de la passion", de: "Mango-Maracuja-Cheesecake", price: "6", img: dishCheesecake, allergens: ["Glutine", "Uova", "Latte"] },
    ],
  },
  {
    id: "aperitivo",
    title: {
      it: "Aperitivo",
      en: "Aperitivo",
      es: "Aperitivo",
      fr: "Apéritif",
      de: "Aperitif",
    },
    items: [
      { it: "Patatine fritte", en: "French fries", es: "Patatas fritas", fr: "Frites", de: "Pommes frites", price: "4", img: dishFries, allergens: ["Glutine"] },
      { it: "Rainbow Fish Buns — 3 mini bun di pesce", en: "Rainbow Fish Buns — 3 fish sliders", es: "Rainbow Fish Buns — 3 mini burgers de pescado", fr: "Rainbow Fish Buns — 3 mini burgers de poisson", de: "Rainbow Fish Buns — 3 Mini-Fisch-Burger", price: "10", img: dishFishbuns, allergens: ["Glutine", "Crostacei", "Uova", "Pesce", "Soia", "Latte", "Frutta a guscio", "Semi di Sesamo", "Molluschi"] },
      { it: "Insalata di mare", en: "Seafood salad", es: "Ensalada de mariscos", fr: "Salade de fruits de mer", de: "Meeresfrüchtesalat", price: "11", img: dishSeafoodSalad, allergens: ["Crostacei", "Molluschi"] },
      { it: "Tagliere di pesce (a persona) — 3 assaggi dello chef", en: "Fish tasting board (per person) — 3 chef's picks", es: "Tabla de pescado (por persona) — 3 selecciones del chef", fr: "Planche de poissons (par personne) — 3 choix du chef", de: "Fisch-Verkostungsbrett (pro Person) — 3 Chef-Auswahl", price: "10", img: dishSalmon, allergens: ["Glutine", "Crostacei", "Pesce", "Soia", "Latte", "Molluschi"] },
      { it: "Frittura di calamari", en: "Fried calamari", es: "Calamares fritos", fr: "Calamars frits", de: "Frittierte Calamari", price: "15", img: dishFritto, allergens: ["Glutine", "Pesce", "Molluschi"] },
      { it: "Spiedino calamari e gamberi alla griglia — 2 pz", en: "Grilled calamari & shrimp skewer — 2 pcs", es: "Brocheta de calamar y gambas — 2 uds", fr: "Brochette calamar & crevette — 2 pcs", de: "Calamari- & Garnelenspieß — 2 Stk.", price: "12", img: dishSkewers, allergens: ["Pesce", "Molluschi"] },
      { it: "Pop corn di gamberi", en: "Shrimp popcorn", es: "Palomitas de gambas", fr: "Popcorn de crevettes", de: "Garnelen-Popcorn", price: "9", img: dishShrimp, allergens: ["Glutine", "Uova", "Pesce", "Soia", "Molluschi"] },
      { it: "Arrosticini di tonno — 5 pz", en: "Tuna skewers — 5 pcs", es: "Brochetas de atún — 5 uds", fr: "Brochettes de thon — 5 pcs", de: "Thunfisch-Spieße — 5 Stk.", price: "8", img: dishTuna, allergens: ["Glutine", "Pesce"] },
      { it: "Sauté di cozze", en: "Sautéed mussels", es: "Salteado de mejillones", fr: "Moules sautées", de: "Sautierte Miesmuscheln", price: "8", img: dishMussels, allergens: ["Molluschi"] },
      { it: "Alici fritte con maionese allo yuzu", en: "Fried anchovies with yuzu mayo", es: "Boquerones fritos con mayonesa de yuzu", fr: "Anchois frits, mayo au yuzu", de: "Frittierte Sardellen mit Yuzu-Mayo", price: "8", img: dishAnchovies, allergens: ["Glutine", "Pesce"] },
      { it: "Carpaccio di salmone, stracciatella e nocciola", en: "Salmon carpaccio, stracciatella & hazelnut", es: "Carpaccio de salmón, stracciatella y avellana", fr: "Carpaccio de saumon, stracciatella, noisette", de: "Lachs-Carpaccio, Stracciatella & Haselnuss", price: "12", img: dishSalmon, allergens: ["Pesce", "Latte", "Frutta a guscio"] },
      { it: "Tentacolo di polpo con salsa chimichurri", en: "Octopus tentacle with chimichurri", es: "Tentáculo de pulpo con chimichurri", fr: "Tentacule de poulpe, chimichurri", de: "Oktopus-Tentakel mit Chimichurri", price: "12", img: dishOctopus, allergens: ["Latte", "Molluschi"] },
    ],
  },
  {
    id: "cocktails",
    title: {
      it: "Cocktails",
      en: "Cocktails",
      es: "Cócteles",
      fr: "Cocktails",
      de: "Cocktails",
    },
    items: [
      { it: "Spritz (Aperol, Campari, Hugo)", en: "Spritz (Aperol, Campari, Hugo)", es: "Spritz (Aperol, Campari, Hugo)", fr: "Spritz (Aperol, Campari, Hugo)", de: "Spritz (Aperol, Campari, Hugo)", price: "6", img: dishCocktails },
      { it: "Gin Tonic / Lemon", en: "Gin Tonic / Lemon", es: "Gin Tonic / Lemon", fr: "Gin Tonic / Lemon", de: "Gin Tonic / Lemon", price: "7", img: dishGin },
      { it: "Sour", en: "Sour", es: "Sour", fr: "Sour", de: "Sour", price: "8", img: dishCocktails },
      { it: "Fizz", en: "Fizz", es: "Fizz", fr: "Fizz", de: "Fizz", price: "8", img: dishCocktails },
      { it: "Martini", en: "Martini", es: "Martini", fr: "Martini", de: "Martini", price: "8", img: dishCocktails },
      { it: "Mojito", en: "Mojito", es: "Mojito", fr: "Mojito", de: "Mojito", price: "8", img: dishCocktails },
      { it: "Margarita", en: "Margarita", es: "Margarita", fr: "Margarita", de: "Margarita", price: "8", img: dishCocktails },
      { it: "Tommy's Margarita", en: "Tommy's Margarita", es: "Tommy's Margarita", fr: "Tommy's Margarita", de: "Tommy's Margarita", price: "8", img: dishCocktails },
      { it: "Bloody Mary", en: "Bloody Mary", es: "Bloody Mary", fr: "Bloody Mary", de: "Bloody Mary", price: "9", img: dishCocktails },
      { it: "Daiquiri", en: "Daiquiri", es: "Daiquiri", fr: "Daïquiri", de: "Daiquiri", price: "8", img: dishCocktails },
      { it: "Piña Colada", en: "Piña Colada", es: "Piña Colada", fr: "Piña Colada", de: "Piña Colada", price: "8", img: dishCocktails },
      { it: "Smash Passion", en: "Smash Passion", es: "Smash Passion", fr: "Smash Passion", de: "Smash Passion", price: "8", img: dishCocktails },
      { it: "Americano", en: "Americano", es: "Americano", fr: "Americano", de: "Americano", price: "7", img: dishCocktails },
      { it: "Negroni", en: "Negroni", es: "Negroni", fr: "Negroni", de: "Negroni", price: "8", img: dishCocktails },
      { it: "Moscow Mule", en: "Moscow Mule", es: "Moscow Mule", fr: "Moscow Mule", de: "Moscow Mule", price: "7", img: dishCocktails },
    ],
  },
  {
    id: "gin",
    title: {
      it: "Gintoneria",
      en: "Gin Bar",
      es: "Gin Bar",
      fr: "Bar à Gin",
      de: "Gin-Bar",
    },
    items: [
      { it: "Gin Mare", en: "Gin Mare", es: "Gin Mare", fr: "Gin Mare", de: "Gin Mare", price: "8", img: dishGin },
      { it: "Hendrick's", en: "Hendrick's", es: "Hendrick's", fr: "Hendrick's", de: "Hendrick's", price: "8", img: dishGin },
      { it: "Monkey 47", en: "Monkey 47", es: "Monkey 47", fr: "Monkey 47", de: "Monkey 47", price: "11", img: dishGin },
      { it: "Malfy", en: "Malfy", es: "Malfy", fr: "Malfy", de: "Malfy", price: "8", img: dishGin },
      { it: "Roku", en: "Roku", es: "Roku", fr: "Roku", de: "Roku", price: "8", img: dishGin },
      { it: "Sipsmith", en: "Sipsmith", es: "Sipsmith", fr: "Sipsmith", de: "Sipsmith", price: "9", img: dishGin },
      { it: "Tanqueray Ten", en: "Tanqueray Ten", es: "Tanqueray Ten", fr: "Tanqueray Ten", de: "Tanqueray Ten", price: "9", img: dishGin },
    ],
  },
  {
    id: "birre",
    title: {
      it: "Birre",
      en: "Beers",
      es: "Cervezas",
      fr: "Bières",
      de: "Biere",
    },
    items: [
      { it: "Benediktiner Hell 0.3 — spina", en: "Benediktiner Hell 0.3 — draft", es: "Benediktiner Hell 0.3 — de barril", fr: "Benediktiner Hell 0.3 — pression", de: "Benediktiner Hell 0,3 — vom Fass", price: "3", img: dishBeer },
      { it: "Benediktiner Hell 0.5 — spina", en: "Benediktiner Hell 0.5 — draft", es: "Benediktiner Hell 0.5 — de barril", fr: "Benediktiner Hell 0.5 — pression", de: "Benediktiner Hell 0,5 — vom Fass", price: "5.50", img: dishBeer },
      { it: "Hoegaarden 0.3 — spina", en: "Hoegaarden 0.3 — draft", es: "Hoegaarden 0.3 — de barril", fr: "Hoegaarden 0.3 — pression", de: "Hoegaarden 0,3 — vom Fass", price: "4", img: dishBeer },
      { it: "Hoegaarden 0.5 — spina", en: "Hoegaarden 0.5 — draft", es: "Hoegaarden 0.5 — de barril", fr: "Hoegaarden 0.5 — pression", de: "Hoegaarden 0,5 — vom Fass", price: "6", img: dishBeer },
      { it: "IPA Fever 0.3 — spina", en: "IPA Fever 0.3 — draft", es: "IPA Fever 0.3 — de barril", fr: "IPA Fever 0.3 — pression", de: "IPA Fever 0,3 — vom Fass", price: "4", img: dishBeer },
      { it: "IPA Fever 0.5 — spina", en: "IPA Fever 0.5 — draft", es: "IPA Fever 0.5 — de barril", fr: "IPA Fever 0.5 — pression", de: "IPA Fever 0,5 — vom Fass", price: "6", img: dishBeer },
      { it: "Peroni Nastro Azzurro", en: "Peroni Nastro Azzurro", es: "Peroni Nastro Azzurro", fr: "Peroni Nastro Azzurro", de: "Peroni Nastro Azzurro", price: "3", img: dishBeer },
      { it: "Corona", en: "Corona", es: "Corona", fr: "Corona", de: "Corona", price: "4", img: dishBeer },
      { it: "Tennent's", en: "Tennent's", es: "Tennent's", fr: "Tennent's", de: "Tennent's", price: "4", img: dishBeer },
    ],
  },
  {
    id: "vini",
    title: {
      it: "Vini",
      en: "Wines",
      es: "Vinos",
      fr: "Vins",
      de: "Weine",
    },
    items: [
      { it: "Orlando Contucci Ponno — Cerasuolo", en: "Orlando Contucci Ponno — Cerasuolo", es: "Orlando Contucci Ponno — Cerasuolo", fr: "Orlando Contucci Ponno — Cerasuolo", de: "Orlando Contucci Ponno — Cerasuolo", price: "18", img: dishWine },
      { it: "Orlando Contucci Ponno — Pecorino", en: "Orlando Contucci Ponno — Pecorino", es: "Orlando Contucci Ponno — Pecorino", fr: "Orlando Contucci Ponno — Pecorino", de: "Orlando Contucci Ponno — Pecorino", price: "18", img: dishWine },
      { it: "Centorame Liberamente — Trebbiano", en: "Centorame Liberamente — Trebbiano", es: "Centorame Liberamente — Trebbiano", fr: "Centorame Liberamente — Trebbiano", de: "Centorame Liberamente — Trebbiano", price: "20", img: dishWine },
      { it: "Centorame San Michele — Passerina", en: "Centorame San Michele — Passerina", es: "Centorame San Michele — Passerina", fr: "Centorame San Michele — Passerina", de: "Centorame San Michele — Passerina", price: "20", img: dishWine },
      { it: "Bossanova — Cerasuolo", en: "Bossanova — Cerasuolo", es: "Bossanova — Cerasuolo", fr: "Bossanova — Cerasuolo", de: "Bossanova — Cerasuolo", price: "30", img: dishWine },
      { it: "Bossanova — Swing", en: "Bossanova — Swing", es: "Bossanova — Swing", fr: "Bossanova — Swing", de: "Bossanova — Swing", price: "25", img: dishWine },
      { it: "Faraone — Cerasuolo", en: "Faraone — Cerasuolo", es: "Faraone — Cerasuolo", fr: "Faraone — Cerasuolo", de: "Faraone — Cerasuolo", price: "25", img: dishWine },
      { it: "Roncùs — Ribolla Gialla", en: "Roncùs — Ribolla Gialla", es: "Roncùs — Ribolla Gialla", fr: "Roncùs — Ribolla Gialla", de: "Roncùs — Ribolla Gialla", price: "28", img: dishWine },
      { it: "Clemens Waldthaler — Gewürztraminer, Alto Adige", en: "Clemens Waldthaler — Gewürztraminer, Alto Adige", es: "Clemens Waldthaler — Gewürztraminer, Alto Adige", fr: "Clemens Waldthaler — Gewürztraminer, Haut-Adige", de: "Clemens Waldthaler — Gewürztraminer, Südtirol", price: "30", img: dishWine },
      { it: "Joh. Jos. Christoffel Erben — Riesling, Mosel", en: "Joh. Jos. Christoffel Erben — Riesling, Mosel", es: "Joh. Jos. Christoffel Erben — Riesling, Mosela", fr: "Joh. Jos. Christoffel Erben — Riesling, Moselle", de: "Joh. Jos. Christoffel Erben — Riesling, Mosel", price: "30", img: dishWine },
      { it: "Prosecco Rosé Reguta", en: "Prosecco Rosé Reguta", es: "Prosecco Rosé Reguta", fr: "Prosecco Rosé Reguta", de: "Prosecco Rosé Reguta", price: "20", img: dishWine },
      { it: "Prosecco Reguta", en: "Prosecco Reguta", es: "Prosecco Reguta", fr: "Prosecco Reguta", de: "Prosecco Reguta", price: "18", img: dishWine },
      { it: "Rossetti & Scrivani Blanc de Noirs Brut 30 mesi — Pinot Nero", en: "Rossetti & Scrivani Blanc de Noirs Brut 30 months — Pinot Noir", es: "Rossetti & Scrivani Blanc de Noirs Brut 30 meses — Pinot Noir", fr: "Rossetti & Scrivani Blanc de Noirs Brut 30 mois — Pinot Noir", de: "Rossetti & Scrivani Blanc de Noirs Brut 30 Monate — Pinot Noir", price: "35", img: dishWine },
      { it: "Emendis Cava Brut Nature", en: "Emendis Cava Brut Nature", es: "Emendis Cava Brut Nature", fr: "Emendis Cava Brut Nature", de: "Emendis Cava Brut Nature", price: "25", img: dishWine },
      { it: "Domaine Amirault Armantine — Crémant de Loire", en: "Domaine Amirault Armantine — Crémant de Loire", es: "Domaine Amirault Armantine — Crémant de Loire", fr: "Domaine Amirault Armantine — Crémant de Loire", de: "Domaine Amirault Armantine — Crémant de Loire", price: "37", img: dishWine },
      { it: "Fabrice Bertemès — Champagne Premier Cru Racines Brut", en: "Fabrice Bertemès — Champagne Premier Cru Racines Brut", es: "Fabrice Bertemès — Champagne Premier Cru Racines Brut", fr: "Fabrice Bertemès — Champagne Premier Cru Racines Brut", de: "Fabrice Bertemès — Champagner Premier Cru Racines Brut", price: "70", img: dishWine },
      { it: "Nicola Gatta — Cuvée Nature 30 Lune", en: "Nicola Gatta — Cuvée Nature 30 Lune", es: "Nicola Gatta — Cuvée Nature 30 Lune", fr: "Nicola Gatta — Cuvée Nature 30 Lune", de: "Nicola Gatta — Cuvée Nature 30 Lune", price: "50", img: dishWine },
      { it: "Domaine de la Navicelle — Provence \"A Flot\" 2024", en: "Domaine de la Navicelle — Provence \"A Flot\" 2024", es: "Domaine de la Navicelle — Provenza \"A Flot\" 2024", fr: "Domaine de la Navicelle — Provence \"A Flot\" 2024", de: "Domaine de la Navicelle — Provence „A Flot\" 2024", price: "30", img: dishWine },
      { it: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc", en: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc", es: "Domaine Haute Perche — Anjou Blanco, Chenin Blanc", fr: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc", de: "Domaine Haute Perche — Anjou Blanc, Chenin Blanc", price: "28", img: dishWine },
      { it: "Emendis Figa Flor", en: "Emendis Figa Flor", es: "Emendis Figa Flor", fr: "Emendis Figa Flor", de: "Emendis Figa Flor", price: "25", img: dishWine },
      { it: "Croci Saint Jacques — Crémant de Bourgogne, dosaggio zero", en: "Croci Saint Jacques — Crémant de Bourgogne, zero dosage", es: "Croci Saint Jacques — Crémant de Bourgogne, dosaje cero", fr: "Croci Saint Jacques — Crémant de Bourgogne, dosage zéro", de: "Croci Saint Jacques — Crémant de Bourgogne, Zero Dosage", price: "40", img: dishWine },
      { it: "Mas dei Chini — I Mono Trento DOC Brut", en: "Mas dei Chini — I Mono Trento DOC Brut", es: "Mas dei Chini — I Mono Trento DOC Brut", fr: "Mas dei Chini — I Mono Trento DOC Brut", de: "Mas dei Chini — I Mono Trento DOC Brut", price: "35", img: dishWine },
      { it: "Balan — Pinot Grigio", en: "Balan — Pinot Grigio", es: "Balan — Pinot Grigio", fr: "Balan — Pinot Grigio", de: "Balan — Pinot Grigio", price: "22", img: dishWine },
      { it: "Pierre Girard — Aligoté", en: "Pierre Girard — Aligoté", es: "Pierre Girard — Aligoté", fr: "Pierre Girard — Aligoté", de: "Pierre Girard — Aligoté", price: "33", img: dishWine },
      { it: "Franciacorta Santus", en: "Franciacorta Santus", es: "Franciacorta Santus", fr: "Franciacorta Santus", de: "Franciacorta Santus", price: "42", img: dishWine },
      { it: "Ciro Picariello — Fiano, Campania", en: "Ciro Picariello — Fiano, Campania", es: "Ciro Picariello — Fiano, Campania", fr: "Ciro Picariello — Fiano, Campanie", de: "Ciro Picariello — Fiano, Kampanien", price: "30", img: dishWine },
      { it: "Gheddo Tinaar — Arneis e Timorasso, Piemonte", en: "Gheddo Tinaar — Arneis & Timorasso, Piedmont", es: "Gheddo Tinaar — Arneis y Timorasso, Piamonte", fr: "Gheddo Tinaar — Arneis & Timorasso, Piémont", de: "Gheddo Tinaar — Arneis & Timorasso, Piemont", price: "28", img: dishWine },
      { it: "De Angelis Corvi — Cerasuolo", en: "De Angelis Corvi — Cerasuolo", es: "De Angelis Corvi — Cerasuolo", fr: "De Angelis Corvi — Cerasuolo", de: "De Angelis Corvi — Cerasuolo", price: "28", img: dishWine },
      { it: "De Angelis Corvi — Trebbiano", en: "De Angelis Corvi — Trebbiano", es: "De Angelis Corvi — Trebbiano", fr: "De Angelis Corvi — Trebbiano", de: "De Angelis Corvi — Trebbiano", price: "28", img: dishWine },
      { it: "De Angelis Corvi — Passerina", en: "De Angelis Corvi — Passerina", es: "De Angelis Corvi — Passerina", fr: "De Angelis Corvi — Passerina", de: "De Angelis Corvi — Passerina", price: "28", img: dishWine },
      { it: "Marabino Rosanera — Nero d'Avola rosato, Sicilia", en: "Marabino Rosanera — Nero d'Avola rosé, Sicily", es: "Marabino Rosanera — Nero d'Avola rosado, Sicilia", fr: "Marabino Rosanera — Nero d'Avola rosé, Sicile", de: "Marabino Rosanera — Nero d'Avola Rosé, Sizilien", price: "25", img: dishWine },
    ],
  },
  {
    id: "bevande",
    title: {
      it: "Bevande",
      en: "Drinks",
      es: "Bebidas",
      fr: "Boissons",
      de: "Getränke",
    },
    items: [
      { it: "Acqua 1 lt", en: "Water 1 lt", es: "Agua 1 lt", fr: "Eau 1 L", de: "Wasser 1 L", price: "2", img: dishDrinks },
      { it: "Acqua 50 cl", en: "Water 50 cl", es: "Agua 50 cl", fr: "Eau 50 cl", de: "Wasser 50 cl", price: "1.20", img: dishDrinks },
      { it: "Coca-Cola 33 cl", en: "Coca-Cola 33 cl", es: "Coca-Cola 33 cl", fr: "Coca-Cola 33 cl", de: "Coca-Cola 33 cl", price: "3", img: dishDrinks },
      { it: "Coca-Cola Zero 33 cl", en: "Coca-Cola Zero 33 cl", es: "Coca-Cola Zero 33 cl", fr: "Coca-Cola Zero 33 cl", de: "Coca-Cola Zero 33 cl", price: "3", img: dishDrinks },
      { it: "Fuze Tea", en: "Fuze Tea", es: "Fuze Tea", fr: "Fuze Tea", de: "Fuze Tea", price: "3", img: dishDrinks },
      { it: "Fanta 33 cl", en: "Fanta 33 cl", es: "Fanta 33 cl", fr: "Fanta 33 cl", de: "Fanta 33 cl", price: "3", img: dishDrinks },
      { it: "Sprite 33 cl", en: "Sprite 33 cl", es: "Sprite 33 cl", fr: "Sprite 33 cl", de: "Sprite 33 cl", price: "3", img: dishDrinks },
      { it: "Pepsi 0.3", en: "Pepsi 0.3", es: "Pepsi 0.3", fr: "Pepsi 0.3", de: "Pepsi 0,3", price: "3", img: dishDrinks },
      { it: "Pepsi 0.5", en: "Pepsi 0.5", es: "Pepsi 0.5", fr: "Pepsi 0.5", de: "Pepsi 0,5", price: "4.50", img: dishDrinks },
      { it: "Schweppes Tonica 0.3", en: "Schweppes Tonic 0.3", es: "Schweppes Tónica 0.3", fr: "Schweppes Tonic 0.3", de: "Schweppes Tonic 0,3", price: "3", img: dishDrinks },
      { it: "Schweppes Tonica 0.5", en: "Schweppes Tonic 0.5", es: "Schweppes Tónica 0.5", fr: "Schweppes Tonic 0.5", de: "Schweppes Tonic 0,5", price: "4.50", img: dishDrinks },
      { it: "Schweppes Lemon 0.3", en: "Schweppes Lemon 0.3", es: "Schweppes Lemon 0.3", fr: "Schweppes Lemon 0.3", de: "Schweppes Lemon 0,3", price: "3", img: dishDrinks },
      { it: "Schweppes Lemon 0.5", en: "Schweppes Lemon 0.5", es: "Schweppes Lemon 0.5", fr: "Schweppes Lemon 0.5", de: "Schweppes Lemon 0,5", price: "4.50", img: dishDrinks },
      { it: "Cocktail San Pellegrino", en: "San Pellegrino Cocktail", es: "Cóctel San Pellegrino", fr: "Cocktail San Pellegrino", de: "San Pellegrino Cocktail", price: "3.50", img: dishDrinks },
      { it: "Campari", en: "Campari", es: "Campari", fr: "Campari", de: "Campari", price: "3.50", img: dishDrinks },
    ],
  },
];

export type Review = {
  name: string;
  meta: string;
  it: string;
  en: string;
  es: string;
  fr: string;
  de: string;
};

export const reviews: Review[] = [
  {
    name: "Marina Marcelli",
    meta: "Local Guide · 30 reviews",
    it: "Bar sulla spiaggia da consigliare. L'ambiente è giovane, informale ma professionale. Ho pranzato e ho preso un cocktail a fine serata. Lo consiglio vivamente.",
    en: "A beach bar I'd recommend. Young, relaxed and yet professional. I had lunch and came back for a cocktail in the evening. Highly recommended.",
    es: "Un chiringuito que recomiendo. Ambiente joven, informal pero profesional. Comí y volví por un cóctel al final del día. Muy recomendable.",
    fr: "Un bar de plage à recommander. Ambiance jeune, décontractée mais professionnelle. J'ai déjeuné et je suis revenue pour un cocktail en soirée. Vivement recommandé.",
    de: "Eine Strandbar, die ich empfehlen kann. Junges, entspanntes und dennoch professionelles Ambiente. Ich habe zu Mittag gegessen und bin abends auf einen Cocktail zurückgekommen. Sehr empfehlenswert.",
  },
  {
    name: "Giacomina Mondoni",
    meta: "Local Guide · 103 reviews",
    it: "Pranzo con aperitivo in famiglia. Bruschetta buonissima, poi pesce con un'insalata speciale. Paste ottime e cheesecake pure. Bravi ragazzi!",
    en: "Family lunch with aperitivo. Delicious bruschetta, then fish with a special salad. Excellent pasta and the cheesecake too. Well done team!",
    es: "Almuerzo con aperitivo en familia. Bruschetta buenísima, luego pescado con una ensalada especial. Pastas excelentes y la tarta de queso también. ¡Bien hecho, chicos!",
    fr: "Déjeuner en famille avec apéritif. Bruschetta délicieuse, puis poisson avec une salade spéciale. Pâtes excellentes et cheesecake aussi. Bravo l'équipe !",
    de: "Familienessen mit Aperitivo. Sehr leckere Bruschetta, dann Fisch mit einem besonderen Salat. Ausgezeichnete Pasta und der Cheesecake auch. Gut gemacht, Team!",
  },
  {
    name: "Giuseppe Fusco",
    meta: "Local Guide · 331 reviews",
    it: "Ottima esperienza culinaria al chiringuito con vista mare. Prodotti eccellenti. Servizio cortese e professionale.",
    en: "Excellent culinary experience at the beach bar with sea view. Excellent products. Kind and professional service.",
    es: "Excelente experiencia culinaria en el chiringuito con vistas al mar. Productos excelentes. Servicio amable y profesional.",
    fr: "Excellente expérience culinaire au bar de plage avec vue sur mer. Produits excellents. Service aimable et professionnel.",
    de: "Hervorragendes kulinarisches Erlebnis in der Strandbar mit Meerblick. Ausgezeichnete Produkte. Freundlicher und professioneller Service.",
  },
];
