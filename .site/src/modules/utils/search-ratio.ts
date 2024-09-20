import { ratio as fuzzyRatio } from "fuzzball";


export function searchRatio(
  source: string,
  query: string,
): number
{
  let sources = source.split(" ");
  let queries = query.split(" ");

  let ratio: number;
  let apexRatio = 0;

  for (let query in queries) {
    for (let part in sources) {
      ratio = fuzzyRatio(query, part);
      if (ratio > apexRatio) {
        apexRatio = ratio;
      }
    }
  }

  return ratio;
}
