type Fonts = Record<string, string>;


export function get_font_for_theme(fonts: Fonts, tags: string[]): string
{
	// TODO
	return fonts.default;
}


export const FONT_BODY = {
	default: "Outfit",
} satisfies Fonts;

export const FONT_HEAD = {
	default: "Outfit",
} satisfies Fonts;
