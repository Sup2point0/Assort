import { Closable } from "#modules/types";


export default class popups {
  prefs: Prefs = new Prefs();
}

class Prefs extends Closable {
  shown = false;
}
