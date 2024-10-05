import { persisted } from "svelte-persisted-store";

import { Preferences } from "#modules/types";


const prefs = persisted<Preferences>("assort.prefs", new Preferences());
export default prefs;


export function updatePrefs(data: Partial<Preferences>) {
  prefs.update(p => {
    Object.assign(p, data);
    return p;
  });
}
