export const colorCode = (color: string): number => {
  return COLORS.findIndex((element) => element === color);
};

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
