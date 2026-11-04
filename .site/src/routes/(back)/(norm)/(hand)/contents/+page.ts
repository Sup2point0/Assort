import type { PageData } from "stranger-quarkdown";


export function load(): PageData<"long">
{
	return {
		destination: "contents",
		title: "Contents",
		heading: "Contents",
		caption: "Welcome to Assort!",
		tags: ["explore"],
	};
}
