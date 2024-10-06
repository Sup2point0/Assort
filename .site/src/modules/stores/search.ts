import { persisted } from "svelte-persisted-store";


export class SearchData {}


export const search = persisted<{string?: SearchData}>("assort.search", {});
