import { searchRatio } from "../utils/search-ratio";


// the duplication here hurts a little, but oh well.
interface ISearchOptions<T> {
  queryValue?: string | null;
  queryWith?: ((source: T) => string);
  sortWith?: ((source: T) => any) | null;
  sortOrder?: "ascend" | "descend" | null;
}


export default class SearchOptions<T>
{
  queryValue: string;
  queryWith: ((source: T) => string);
  sortWith: ((source: T) => any) | null;
  sortOrder: "ascend" | "descend";

  constructor(options: ISearchOptions<T>)
  {
    this.queryValue = options.queryValue ?? "";
    this.queryWith = options.queryWith ?? (data => data.title);
    this.sortWith = options.sortWith ?? null;
    this.sortOrder = options.sortOrder ?? "descend";
  }

  apply(source: T[]): T[]
  {
    let data = [...source];

    if (this.sortWith) {
      data.sort(
        (prot, deut) => this.sortWith!(prot) - this.sortWith!(deut)
      );
    }
    else {
      if (this.queryValue && this.queryValue !== "") {
        data = data.sort(
          (prot, deut) => (
            searchRatio(this.queryWith(deut), this.queryValue)
          - searchRatio(this.queryWith(prot), this.queryValue)
          )
        );
      }
    }

    if (this.sortOrder == "ascend") {
      data.reverse();
    }

    return data;
  }
}
