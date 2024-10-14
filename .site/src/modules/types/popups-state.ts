export class PopupsState {
  prefs = new Prefs();

  data = false;
  dev = false;
}

class Prefs {
  shown = false;
  page = "nav";
}
