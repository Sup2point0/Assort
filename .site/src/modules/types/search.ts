import { searchRatio } from "../utils/search-ratio";


export class SearchOptions<T>
{
  query: string;
  queryWith: ((data: T) => string);
  sortWith: ((data: T) => any) | null;
  sortOrder: "ascend" | "descend";

  constructor(options = {})
  {
    /* @ts-ignore */
    this.query = options.query ?? "";
    /* @ts-ignore */
    this.queryWith = options.queryWith ?? (data => data.title ?? "");
    /* @ts-ignore */
    this.sortWith = options.sortWith ?? null;
    /* @ts-ignore */
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
      if (this.query && this.query !== "") {
        data = data.sort(
          (prot, deut) => (
            searchRatio(this.queryWith(deut), this.query)
          - searchRatio(this.queryWith(prot), this.query)
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
