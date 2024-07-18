import { persisted } from "svelte-persisted-store";

import { Preferences } from "#modules/types";


export const prefs = persisted<Preferences>("assort.prefs", new Preferences());
