import type { PageData } from "stranger-quarkdown";


export function load(): PageData<"long">
{
	return {
		destination: "featured",
		title: "Featured",
		heading: "Featured",
		caption: "My favourite pages",
		tags: ["explore"],
	};
}
