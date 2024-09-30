import Site from "#src/site";


export default class Preferences {
  _version = "2.1.0";
  nav = new NavOptions();
  tools = new ToolsOptions();
  text = new TextOptions();
  cols = new ColsOptions();
  search = new SearchOptions();
  a11y = new A11yOptions();
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
  duality: "light" | "dark" | null = null;
  palettes = {
    light: "soup",
    dark: "ignite",
  };
  "dual-palettes" = true;
}

class SearchOptions {
  immediate = true;
}

class A11yOptions {
  anim = true;
  "underline-links" = false;
  "visited-links" = true;
  "contrast-buttons" = false;
}
