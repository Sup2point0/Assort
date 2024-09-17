/// Site data and config for global access

import type { PageData } from "./modules/types";


const data = await import("./data/site.json");
const palettes = await import("./palettes/palettes.json");


const Site: SiteData = {
  pages: data.pages,
  
  featured: Object.values(data.pages).filter(
    page => page.isFeatured
  ),

  palettes: palettes.default,

  font: "Fira Sans",
  fonts: ["Segoe UI", "Noto Sans", "Fira Sans"],

  index:
  {
    dev: {
      display: "dev", colour: ["9090f1"],
      pages: data.index.dev
    },
    writing: {
      display: "writing", colour: ["4090f1"],
      pages: data.index.writing
    },
    poetry: {
      display: "poetry", colour: ["f190f1"],
      pages: data.index.poetry
    },
    yugioh: {
      display: "Yu-Gi-Oh!", colour: ["4090f1"],
      pages: data.index.yugioh
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes", colour: ["ff0090"],
      pages: data.index["yugioh-archetypes"]
    },
  },

  shard:
  {
    sad: {
      display: "sad", colour: "#a9b0b8"
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


export const Statuses: Array<string> = (
  await import("./data/status.json")
).default;
