import { persisted } from "svelte-persisted-store";

import { NavData } from "../types/nav-data";


const nav = persisted<NavData>("assort.nav", new NavData());
export default nav;
