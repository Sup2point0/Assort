export default class Closable {
  shown: boolean = false;

  show(): Closable {
    this.shown = true;
    return this;
  }

  hide(): Closable {
    this.shown = false;
    return this;
  }

  switch(): Closable {
    this.shown = !this.shown;
    return this;
  }
}
