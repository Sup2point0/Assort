const data = (
  await import("../../data/status.json")
).default;

const statuses: Array<string> = data.standard;
const count = statuses.length;


export function flavourStatus(): string
{
  let index = Math.floor(Math.random() * count);
  return statuses[index];
}
