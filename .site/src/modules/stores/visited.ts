import { persisted } from "svelte-persisted-store";


export const visited = persisted<boolean>("assort.init", false);
