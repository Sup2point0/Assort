import Closable from "./closable";


export default class NavState extends Closable {
  shown = true;

  sections = {
    Categories: {shown: true},
    Creations: {shown: true},
    Franchises: {shown: true},
    Meta: {shown: true},
  };
}
