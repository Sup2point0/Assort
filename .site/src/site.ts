/// Site data and config for global access

import type { PageData } from "./modules/types";


const data = await import("./data/site.json");
const palettes = await import("./palettes/palettes.json");


const Site: SiteData = {
  pages: data.pages,
  
  featured: Object.values(data.pages).filter(
    page => page.flags.includes("feat")
  ),

  palettes: palettes.default,

  font: "Fira Sans",
  fonts: ["Segoe UI", "Noto Sans", "Fira Sans"],

  index:
  {
    dev: {
      route: data.index.dev.route,
      display: "dev", colour: ["9090f1"],
      pages: data.index.dev.pages,
    },
    writing: {
      route: data.index.writing.route,
      display: "writing", colour: ["4090f1"],
      pages: data.index.writing.pages,
    },
    poetry: {
      route: data.index.poetry.route,
      display: "poetry", colour: ["f190f1"],
      pages: data.index.poetry.pages,
    },
    yugioh: {
      route: data.index.yugioh.route,
      display: "Yu-Gi-Oh!", colour: ["4090f1"],
      pages: data.index.yugioh.pages,
    },
    "yugioh-archetypes": {
      route: data.index["yugioh-archetypes"].route,
      display: "Yu-Gi-Oh! Archetypes", colour: ["ff0090"],
      pages: data.index["yugioh-archetypes"].pages,
    },
  },

  shard:
  {
    sad: {
      display: "sad", colour: "#a9b0b8"
    },
    yugioh: {
      route: data.shard.yugioh.route,
      display: "Yu-Gi-Oh!", colour: ["ff0090"],
      pages: data.shard.yugioh.pages,
    },
  },
};
export default Site;

interface SiteData {
  pages: PagesData;
  featured: PageData[];
  palettes: object[];
  font: string;
  fonts: string[];
  index: object;
  shard: object;
}

interface PagesData {
  [index: string]: PageData;
}
