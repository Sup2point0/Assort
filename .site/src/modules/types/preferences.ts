import Site from "#src/site";

import { Closable } from "#modules/types";


export default class Preferences extends Closable {
  shown = false;
  
  nav = new NavOptions();
  text = new TextOptions();
  cols = new ColsOptions();
  accessibility = new AccessOptions();
};

class NavOptions {
  "open-immersive" = true;
}

class TextOptions {
  size: number = 100;
  typeface: string = Site.font;
}

class ColsOptions {
  duality: "light" | "dark" | null = "dark";
  palettes = {
    light: "soup",
    dark: "souper",
  };
  "dual-palettes" = true;
}

class AccessOptions {
  "anim" = true;
  "underline-links" = false;
}
