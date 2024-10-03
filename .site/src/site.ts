/// Site site data and config for global access

import type { PageData } from "./modules/types";


const site_data = await import("./data/site.json");
const palettes_data = await import("./palettes/palettes.json");


interface SiteData {
  pages: PagesData;
  featured: PageData[];
  palettes: PalettesData[];
  font: string;
  fonts: string[];
  index: object;
  shard: object;
}

interface PagesData {
  [index: string]: PageData;
}

interface PalettesData {
  light: object[];
  dark: object[];
}


const Site: SiteData = {
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
      display: "Info",
    },
    lists: {
      display: "lists",
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
    "stranded-saga": {
      display: "Stranded Saga",
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: "#f190f1",
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
      colour: "ff0090",
    },
    writing: {
      display: "writing",
      colour: "#4090f1",
    },
  },

  shard:
  {
    sad: {
      display: "sad",
    },
    "stranded-saga": {
      display: "Stranded Saga",
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
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
