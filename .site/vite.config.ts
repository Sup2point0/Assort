import { defineConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";
import { sveltePreprocess } from "svelte-preprocess";
import adapterStatic from "@sveltejs/adapter-static";

import { mdsvex } from "mdsvex";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";


// yes, I prefer Edge’s smooth scrolling :P
if (process.argv.includes("--open")) {
	process.env.BROWSER = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
}


export default defineConfig(
{
	plugins: [
		sveltekit({
			adapter: adapterStatic({
				pages: "build",
				assets: "build",
				fallback: "404.html",
				precompress: false,
				strict: true,
			}),
			preprocess: [
				mdsvex({
					extensions: [".md", ".svx"],
					remarkPlugins: [
						remarkMath,
					],
					rehypePlugins: [
						rehypeKatex,
					],
				}),
				sveltePreprocess({
					includePaths: ["src/styles"],
					prependData: `
						@use 'mixins/fonts' as *;
					`,
				}),
			],
			prerender: {
				handleHttpError: "warn",
				handleMissingId: "warn",
			},
		}),
	],
});
