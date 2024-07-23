/// Stores data of all pages in the site for global reference

const data = await import("./site-data.json");


const Site = {
  pages: data.pages,
  font: "Fira Sans",
  index: {
    poetry: {
      display: "poetry",
      colour: ["f190f1", ""],
      pages: [],
    },
    yugioh: {
      display: "Yu-Gi-Oh!",
      colour: ["4090f1"],
      pages: [],
    },
    "yugioh-archetypes": {
      display: "Yu-Gi-Oh! Archetypes",
      colour: ["ff0090"],
      pages: ["Yu-Gi-Oh!/archetypes/Rubic.md"]
    },
  },
  shard: {
    poetry: {
      display: "poetry",
      colour: ["f190f1", ""],
      pages: [],
    }
  },
};
export default Site;


export const Statuses = [
  "sup sup’s sups sup sup’s sup sup sup sup’s sup sups",
  "I really do love Assort.",
  "carrots are cool.",
  "spoiler: all flavour texts are equally rare :0 (in theory)",
];
