export function decodedValue(colors: string[]): number {
  let result: string = "";
  colors.slice(0, 2).forEach((color) => {
    let n: number = COLORS.findIndex((element) => element === color);
    if (n !== -1) result += n.toString();
  });
  return Number.parseInt(result);
}

export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];
