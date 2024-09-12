import { searchRatio } from "../utils/search-ratio";


export default class SearchOptions<T>
{
  queryValue: string = "";
  queryWith: (T => string) = (data => data.title);
  sortWith: (T => any) | null = null;
  sortOrder: "ascend" | "descend" = "descend";

  apply(source: T[]): T[]
  {
    let data = [...source];

    if (this.sortWith) {
      data.sort(
        (prot, deut) => this.sortWith(prot) - this.sortWith(deut)
      );
    }
    else {
      if (this.queryValue) {
        data = data.sort(
          (prot, deut) => searchRatio(prot) - searchRatio(deut)
        );
      }
    }

    if (this.sortOrder == "ascend") {
      data.reverse();
    }

    return data;
  }
}
