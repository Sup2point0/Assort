import Site from "#src/site";


export default class Preferences {
  nav = new NavOptions();
  tools = new ToolsOptions();
  text = new TextOptions();
  cols = new ColsOptions();
  accessibility = new AccessOptions();
};

class NavOptions {
  shown = true;
  "open-immersive" = true;
}

class ToolsOptions {
  shown = true;
}

class TextOptions {
  size: number = 100;
  typeface: string = Site.font;
}

class ColsOptions {
  duality: "light" | "dark" | null = "light";
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
