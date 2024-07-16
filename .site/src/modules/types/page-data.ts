export default interface PageData {
  path: string;
  isIndex: boolean;
  isFeatured: boolean;
  isWoozy: boolean;

  title: string;
  head: string;
  capt: string;
  desc: string;
  index: string[];
  shard: string[];
  date: Date;
  dateDisplay: string;
}
