import { persisted } from "svelte-persisted-store";


const navOpen = persisted("assort-nav-state", true);
export default navOpen;
