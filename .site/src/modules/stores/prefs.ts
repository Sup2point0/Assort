import { persisted } from "svelte-persisted-store";

import { Preferences } from "#modules/types";


export const prefs = persisted<Preferences>("assort.prefs", new Preferences());


export function updatePrefs(data: Partial<Preferences>) {
  prefs.update(p => {
    Object.assign(p, data);
    return p;
  });
}
