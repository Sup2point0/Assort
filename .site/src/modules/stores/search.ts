import { persisted } from "svelte-persisted-store";


export class SearchData {}


const nav = persisted<{string?: SearchData}>("assort-search", {});
export default nav;
