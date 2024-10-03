/// Site site data and config for global access

import type { PageData } from "./modules/types";
import Data from "./parts/popups/prefs/parts/data.export.svelte";


const site_data = await import("./data/site.json");
const palettes = await import("./palettes/palettes.json");


const Site: SiteData = {
  pages: site_data.pages,
  
  featured: Object.values(site_data.pages).filter(
    page => page.flags.includes("feat")
  ),

  palettes: palettes.default,

  font: "Fira Sans",
  fonts: ["Segoe UI", "Noto Sans", "Fira Sans"],

  index:
  {
    dev: {
      display: "dev",
      colour: ["9090f1"],
    },
    writing: {
      display: "writing",
      colour: ["4090f1"],
    },
    poetry: {
      display: "poetry",
      colour: ["f190f1"],
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: ["4090f1"],
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
      colour: ["ff0090"],
    },
  },

  shard:
  {
    sad: {
      display: "sad",
      colour: "#a9b0b8"
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: ["ff0090"],
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

console.log(Site);

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
