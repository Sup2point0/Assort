import searchRatio from "../utils/search-ratio";


export default class SearchOptions<T>
{
  queryValue: string = "";
  queryWith: ((source: T) => string) = (data => data.title);
  sortWith: ((source: T) => any) | null = null;
  sortOrder: "ascend" | "descend" = "descend";

  apply(source: T[]): T[]
  {
    let data = [...source];

    if (this.sortWith) {
      data.sort(
        (prot, deut) => this.sortWith!(prot) - this.sortWith!(deut)
      );
    }
    else {
      if (this.queryValue) {
        data = data.sort(
          (prot, deut) => (
            searchRatio(this.queryValue, this.queryWith(prot))
          - searchRatio(this.queryValue, this.queryWith(deut))
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
