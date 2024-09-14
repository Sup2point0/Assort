import adapter from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";

import { mdsvex } from "mdsvex";

import scssConfig from "./scss-config.js";


const config = {
  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: "404.html",
      precompress: false,
      strict: true,
    }),
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
    },
    alias: {
      "#src": "./src",
      "#parts": "./src/parts",
      "#styles": "./src/styles",
      "#modules": "./src/modules",
      "#palettes": "./src/palettes",
    },
    prerender: {
      handleHttpError: "warn",
      handleMissingId: "warn",
    },
  },

  preprocess: [
    mdsvex({
      extensions: [".svelte", ".md", ".svx"],
    }),
    sveltePreprocess({
      scss: scssConfig,
    }),
  ],
  
  extensions: [".svelte", ".md", ".svx"],

  onwarn: (warning, handler) => {
    if (warning.code === "css-unused-selector") {
      return;
    }
    handler(warning);
  },
};

export default config;
