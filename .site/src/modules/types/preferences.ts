import Site from "#src/site";
import Palettes from "#styles/palettes";


export default class Preferences {
  nav = {
    "show-nav": true;
    "open-immersive": true;
  };

  text = {
    size: number = 100,
    typeface: Site.Fonts.Type = Site.Fonts.Default,
  },

  cols = {
    duality: "light" | "dark" | null = null,
    palettes: {
      light: string = Palettes.default.light,
      dark: string = Palettes.default.dark,
    },
    "dual-palettes" = true,
  };

  accessibility = {
    "anim" = true,
    "underline-links" = false,
  };
}
