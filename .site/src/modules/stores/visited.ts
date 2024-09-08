import { persisted } from "svelte-persisted-store";


const visited = persisted<boolean>("assort.init", false);
export default visited;
