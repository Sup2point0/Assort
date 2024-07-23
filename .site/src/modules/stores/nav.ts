import { persisted } from "svelte-persisted-store";

import { NavState } from "#modules/types";


const nav = persisted<NavState>("assort.nav", new NavState());
export default nav;
