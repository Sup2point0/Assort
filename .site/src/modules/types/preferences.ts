import Site from "#src/site";


export default class Preferences {
  _version = "2.0";
  nav = new NavOptions();
  tools = new ToolsOptions();
  text = new TextOptions();
  cols = new ColsOptions();
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
  duality: "light" | "dark" | null = "dark";
  palettes = {
    light: "soup",
    dark: "ignite",
  };
  "dual-palettes" = true;
}

class A11yOptions {
  anim = true;
  "underline-links" = false;
}
