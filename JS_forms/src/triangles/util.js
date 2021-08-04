const isBetween = (value, lower, upper) => value >= lower && value <= upper;

const range = (lower, upper) =>
  Array.from(new Array(upper - lower + 1).keys()).map((n) => n + lower);

export { isBetween, range };
