import { ratio as fuzzyRatio } from "fuzzball";


export function searchRatio(
  source: string | Array<string>,
  query: string | Array<string>,
): number
{
  let sources: Array<string>;
  if (typeof(source) == "string") {
    sources = source?.split(" ") ?? [""];
  } else {
    sources = source;
  }

  let queries: Array<string>;
  if (typeof(query) == "string") {
    queries = query?.split(" ") ?? [""];
  } else {
    queries = query;
  }

  let ratio: number;
  let apexRatio = 0;

  for (let query of queries) {
    for (let part of sources) {
      ratio = fuzzyRatio(query, part);
      if (ratio > apexRatio) {
        apexRatio = ratio;
      }
    }
  }

  return apexRatio;
}
