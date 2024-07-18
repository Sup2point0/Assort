import { persisted } from "svelte-persisted-store";


const duality = persisted("assort.duality", "light");
export default duality;
