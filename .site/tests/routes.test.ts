import { test, chromium, expect } from "@playwright/test";


const WHITE = `\x1b[0m`;
const BLACK = `\x1b[30m`;
const GREY  = `\x1b[90m`;

const PINK   = `\x1b[95m`;
const RED    = `\x1b[31m`;
const YELLOW = `\x1b[93m`;
const GREEN  = `\x1b[92m`;
const CYAN   = `\x1b[96m`;
const BLUE   = `\x1b[94m`;


let browser = await chromium.launch();

test("crawl-routes", async () =>
{
	test.setTimeout(60 * 1000);

	let visited = new Set<string>();
	let failed_routes: string[] = [];

	let to_visit = [
		{ url: "/Assort/contents", source: "START" },
	];

	let pending_routes = 0;
	let routes_visited = 0;
	let links_checked = 0;

	await Promise.allSettled(Array.from({ length: 8 }, (_, i) =>
		(async () =>
		{
			await sleep(i * 1000);

			const WORKER = `[worker ${i+1}]`;
			console.info(`${GREY}» ${WORKER} ${YELLOW}Scanning for links...`);

			let ctx = await browser.newContext();
			let page = await ctx.newPage();

			while (true) {
				let next = to_visit.pop();

				if (next == undefined) {
					if (pending_routes === 0) break;
					
					/* NOTE: Other workers might push more targets to the queue, so we'll wait a hot sec before deciding to finish */
					await sleep(1000);

					next = to_visit.pop();
					if (next == undefined) break;
				}

				let { url: target, source } = next;

				if (visited.has(target)) continue;
				visited.add(target);

				try {
					console.info(`${GREY}› ${WORKER} Visiting ${WHITE}${u(target)}`);

					pending_routes++;
					routes_visited++;

					let response = await page.goto(target);
					if (!response?.ok()) throw Error(response?.status().toString());

					let links = await page.locator("a").evaluateAll(
						anchors => anchors
							.map(a => !a.disabled && a.href)
							.filter(url => url?.includes("://localhost:") && !url?.includes("#"))
					);
					links_checked += links.length;
					to_visit.push(...links.map(url => ({ url, source: target })));
				}
				catch (e) {
					console.error(`${RED}× ${WORKER} ${RED}${e}: ${RED}${u(target)} —— ${GREY}linked from: ${BLUE}${u(source)}`);

					failed_routes.push(target.replace("http://localhost:4173/", "/"));
				}

				pending_routes--;
			}

			await ctx.close();

			console.info(`${GREY}» ${WORKER} ${YELLOW}Finished scanning.`);
		})()
	));

	if (failed_routes.length > 0) {
		console.error(
			RED,
			`\n${GREY}—————————————————————————————————————————————————————————————————————`,
			`\n${RED}× Checked ${WHITE}${links_checked}${RED} links, failed to access ${WHITE}${failed_routes.length}${RED}/${WHITE}${routes_visited}${RED} routes:`,
			`\n\n   `,
			failed_routes.join("\n    "),
			`\n`,
		);
	}

	// some links are always bound to fail, we just wanna make sure most work...
	expect(failed_routes.length).toBeLessThan(links_checked * 0.005);
	expect(failed_routes.length).toBeLessThan(routes_visited * 0.25);
});


async function sleep(ms: number): Promise<void>
{
	await new Promise(r => setTimeout(r, ms));
}

function u(url: string): string
{
	return url.replace("http://localhost:4173", "");
}
