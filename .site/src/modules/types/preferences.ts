import Site from "#src/site";
import Palettes from "#styles/palettes";


export default class Preferences {
  nav = new NavOptions();
  text = new TextOptions();
  cols = new ColsOptions();
  accessibility = new AccessOptions();
};

class NavOptions {
  "show-nav" = true;
  "open-immersive" = true;
}

class TextOptions {
  size: number = 100;
  typeface: Site.Fonts.Type = Site.Fonts.Default;
}

class ColsOptions {
  duality: "light" | "dark" | null = null;
  palettes = {
    light: Palettes.default.light,
    dark: Palettes.default.dark,
  };
  "dual-palettes" = true;
}

class AccessOptions {
  "anim" = true;
  "underline-links" = false;
}
