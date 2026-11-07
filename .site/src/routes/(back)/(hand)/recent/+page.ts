import type { PageData } from "stranger-quarkdown";


export function load(): PageData<"long">
{
	return {
		destination: "recent",
		title: "Recent",
		heading: "Recent",
		caption: "Newly released & updated",
		tags: ["explore"],
	};
}
