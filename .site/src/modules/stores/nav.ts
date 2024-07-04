import { persisted } from "svelte-persisted-store";


export class NavData {
  open: boolean = true;
  sections: object = {
    Categories: true,
    Creations: true,
    Franchises: true,
    Meta: true,
  };
}


const nav = persisted("assort-nav", new NavData());
export default nav;
