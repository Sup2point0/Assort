/// Site data and config for global access

const data = await import("./data/site.json");


const Site = {
  pages: data.pages,

  font: "Fira Sans",
  fonts: ["Segoe UI", "Noto Sans", "Fira Sans"],

  index:
  {
    dev: {
      display: "dev",
      colour: ["9090f1"],
      pages: data.index.dev,
    },
    writing: {
      display: "writing",
      colour: ["4090f1"],
      pages: data.index.writing,
    },
    poetry: {
      display: "poetry",
      colour: ["f190f1"],
      pages: data.index.poetry,
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: ["4090f1"],
      pages: data.index.yugioh,
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
      colour: ["ff0090"],
      pages: data.index["yugioh-archetypes"],
    },
  },

  shard:
  {
    sad: {
      display: "sad",
      colour: "#a9b0b8",
    }
  },
};
export default Site;


export const Statuses: Array<string> = (
  await import("./data/status.json")
).default;
