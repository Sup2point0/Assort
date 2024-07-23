import { Closable } from "#modules/types";


export default class NavState extends Closable {
  shown = true;

  sections = {
    Categories: {shown: true},
    Creations: {shown: true},
    Franchises: {shown: true},
    Meta: {shown: true},
  };
}
