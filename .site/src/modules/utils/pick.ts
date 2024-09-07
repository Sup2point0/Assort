export function pick<T>(
  n: number,
  source: Array<T>
): Array<T>
{
  if (n > source.length) {
    return source;
  }

  let total = source.length -1;
  let pool = [...Array(total).keys()];

  let chosen = [];
  let idx: number;

  for (let i = 0; i < n; i++) {
    idx = Math.floor(Math.random() * (total - i));
    chosen.push(pool.splice(idx, 1)[0]);
  }
  
  let out: Array<T> = [];
  chosen.forEach(i => {
    out.push(source[i]);
  })
  return out;
}
