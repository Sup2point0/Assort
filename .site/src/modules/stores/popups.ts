import { persisted } from "svelte-persisted-store";

import { PopupsState } from "#modules/types";


export const popups = persisted<PopupsState>("assort.popups", new PopupsState());
