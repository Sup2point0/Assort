import { partial_ratio } from "fuzzball";

import type { PageData } from "#scripts/types";


export class SearchFilter
{
	query = $state("")
	
	view: "list" | "grid" = $state("grid")


	/** Apply the search filters to the given `pages`. Returns `null` if no filtering needs to be applied. */
	public apply(pages: PageData[]): PageData[] | null
	{
		if (this.query === "") {
			return null;
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
