import { persisted } from "svelte-persisted-store";

import { PopupsState } from "#modules/types";


const popups = persisted<PopupsState>("assort.popups", new PopupsState());
export default popups;
