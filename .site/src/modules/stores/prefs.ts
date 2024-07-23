import { persisted } from "svelte-persisted-store";

import { Preferences } from "#modules/types";


const prefs = persisted<Preferences>("assort.prefs", new Preferences());
export default prefs;
