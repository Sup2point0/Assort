export default interface PageData {
  path: string;
  isIndex: boolean;
  isFeatured: boolean;
  isWoozy: boolean;

  dest: string;
  title?: string | null;
  capt?: string | null;
  head?: string | null;
  desc?: string | null;
  index?: string[] | null;
  shard?: string[] | null;
  date?: string | null;
  date_display?: string | null;
}
