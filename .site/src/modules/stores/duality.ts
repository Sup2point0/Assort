import { persisted } from "svelte-persisted-store";


const duality = persisted("assort.duality", "dark");
export default duality;
