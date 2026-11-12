type Fonts = Record<string, string>;


export function get_font_for_theme(fonts: Fonts, tags: string[]): string
{
	for (let tag of tags ?? []) {
		if (fonts[tag] != undefined) {
			return fonts[tag];
		}
	}
	return fonts.default;
}


export const FONT_BODY = {
	default: "Outfit",
	yugioh:  "Lora",
} satisfies Fonts;

export const FONT_HEAD = {
	default: "Outfit",
	yugioh:  "Crimson Pro",
} satisfies Fonts;
