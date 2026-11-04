import type { PageData as SquarkPageData } from "stranger-quarkdown";


/** Page metadata parsed by Squarkdown from from a file’s charm squark. */
export type PageData = SquarkPageData<"long">;

/** A root-relative path, for internal links. */
export type route = string;
