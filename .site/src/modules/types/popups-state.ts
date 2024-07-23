import { Closable } from "#modules/types";


export default class PopupsState {
  prefs = new Prefs();
}

class Prefs extends Closable {
  shown = false;
  page = "nav";
}
