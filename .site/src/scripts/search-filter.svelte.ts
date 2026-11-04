import { partial_ratio } from "fuzzball";
import random_sample from "@stdlib/random-sample"

import type { PageData } from "#scripts/types";


export class SearchFilter
{
	query = $state("")
	
	view: "list" | "grid" = $state("list")


	public apply(pages: PageData[]): PageData[]
	{
		if (this.query === "") {
			return random_sample(pages);
		}

		return pages
			.map(page =>
				[
					Math.max(
						partial_ratio(this.query, page.title ?? ""),
						partial_ratio(this.query, page.heading ?? ""),
						partial_ratio(this.query, page.description ?? ""),
						partial_ratio(this.query, page.shard ?? ""),
					),
					page,
				] as [number, PageData]
			)
			.toSorted(([score1, _], [score2, __]) => score2 - score1)
			.map(([_score, page]) => page)
	}
}
