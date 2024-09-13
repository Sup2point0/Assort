export default interface PageData {
  path: string;
  isIndex: boolean;
  isFeatured: boolean;
  isWoozy: boolean;

  dest: string;
  title: string;
  capt: string;
  head: string;
  desc: string;
  index: string[];
  shard: string[];
  date: Date;
  dateDisplay: string;
}
