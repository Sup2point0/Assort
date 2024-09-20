import { Statuses } from "#src/site";


export function flavourStatus(): string
{
  let index = Math.floor(Math.random() * Statuses.length);
  return Statuses[index];
}
