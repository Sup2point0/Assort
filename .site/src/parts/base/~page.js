export async function load() {
  let data = await import("./%{file}.svx");

  return {
    title: data.title
  }
}
