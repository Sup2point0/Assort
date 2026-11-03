import { defineConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";
import { sveltePreprocess } from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static";

import { mdsvex } from "mdsvex";
import remarkFootnotes from "remark-footnotes";
import remarkIndexFootnotes from "remark-numbered-footnote-labels";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeSlug from "rehype-slug";

import { fileURLToPath } from "node:url";


// yes, I prefer Edge’s smooth scrolling :P
if (process.argv.includes("--open")) {
	process.env.BROWSER = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
}


const config = sveltekit(
{
	extensions: [".svelte", ".svx"],
	adapter: adapterStatic({
		pages: "build",
		assets: "build",
		fallback: "404.html",
		precompress: false,
		strict: true,
	}),
	// NOTE: Duplicated from `package.json` since otherwise imports break in VSCode ,_,
	alias: {
		"#src/*":     "./src/*",
		"#parts/*":   "./src/parts/*",
		"#styles/*":  "./src/styles/*",
		"#scripts/*": "./src/scripts/*",
	},
	preprocess: [
		mdsvex({
			extensions: [".md", ".svx"],
			remarkPlugins: [
				remarkFootnotes,
				remarkIndexFootnotes,
				remarkMath,
			],
			rehypePlugins: [
				rehypeKatex,
				rehypeSlug,
			],
		}),
		sveltePreprocess({
			scss: {
				includePaths: [
					fileURLToPath(new URL("./src/styles", import.meta.url))
				],
				prependData: `
					@use 'sass:color' as colour;
					
					@use 'shared/globals' as *;
					@use 'shared/colours' as *;
					@use 'shared/fonts' as *;
					@use 'shared/links' as *;
				`,
			}
		}),
	],
	prerender: {
		handleHttpError: "warn",
		handleMissingId: "warn",
	},
});


export default defineConfig({ plugins: [config] });
