/// Site site data and config for global access

import type { PageData } from "./modules/types";


const site_data = await import("./data/site.json");
const site_stats = await import("./data/stats.json");
const palettes_data = await import("./palettes/palettes.json");


interface SiteData {
  meta: Accessible;
  pages: PagesData;
  featured: PageData[];
  palettes: PalettesData;
  font: string;
  fonts: string[];
  index: Accessible;
  shard: Accessible;
}

interface Accessible {
  [key: string]: any;
}

interface PagesData {
  [index: string]: PageData;
}

interface PalettesData {
  light: object[];
  dark: object[];
}


const Site: SiteData = {
  meta: {
    ...site_data.meta,
    ...site_stats.default,
  },

  pages: site_data.pages,
  featured: Object.values(site_data.pages).filter(
    page => page.flags.includes("feat")
  ),

  palettes: {
    light: palettes_data.default.filter(palette => palette.duality == "light"),
    dark: palettes_data.default.filter(palette => palette.duality == "dark"),
  },
  font: "Fira Sans",
  fonts: [
    "Fira Sans", "Segoe UI", "Noto Sans",
    "Lora", "Noto Serif",
  ],

  index:
  {
    affine: {
      display: "Affine",
    },
    affinitys: {
      display: "Affinitys",
    },
    antarctica: {
      display: "Antarctica",
    },
    desmos: {
      display: "Desmos",
    },
    dev: {
      display: "dev",
      colour: "#9090f1",
    },
    fav: {
      display: "Favourites",
    },
    games: {
      display: "games",
    },
    info: {
      display: "info",
    },
    lists: {
      display: "lists",
      colour: "#518afc",
    },
    misc: {
      display: "miscellaneous",
    },
    notes: {
      display: "notes",
    },
    personal: {
      display: "personal",
    },
    phigros: {
      display: "Phigros",
    },
    poetry: {
      display: "poetry",
      colour: "#f190f1",
    },
    spells: {
      display: "Affine Spells",
    },
    "stranded-saga": {
      display: "Stranded Saga",
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: "#f190f1",
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
      colour: "#ff0090",
    },
    "yugioh-cards": {
      display: "Yu-Gi-Oh! Cards",
      colour: "#ff0090",
    },
    "yugioh-decks": {
      display: "Yu-Gi-Oh! Decks",
      colour: "#ff0090",
    },
    ultraman: {
      display: "Ultraman",
    },
    writing: {
      display: "writing",
      colour: "#4090f1",
    },
  },

  shard:
  {
    index: {
      display: "index",
    },
    archives: {
      display: "archives",
    },
    fantasy: {
      display: "fantasy",
    },
    franchise: {
      display: "franchise",
    },
    funny: {
      display: "funny",
    },
    long: {
      display: "long",
    },
    melodramatic: {
      display: "melodramatic",
    },
    opinion: {
      display: "opinion",
      colour: "#ff0090",
    },
    sad: {
      display: "sad",
      colour: "#a63998",
    },
  },
};

for (let [index, data] of Object.entries(site_data.index)) {
  if (!Site.index[index]) {
    Site.index[index] = {};
  }

  Site.index[index].route = data.route;
  Site.index[index].pages = data.pages;
}

export default Site;
