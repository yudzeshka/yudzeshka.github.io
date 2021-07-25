const answerToText = (answer) => (answer ? "можно" : "нельзя");

const sideToText = (side) => `"${side.sideName}" = ${side.sideLength}`;

const triangleToText = (sides) =>
  sides.map((side) => sideToText(side)).join(", ");

const getAnswerPhrase = (sides, answer = true) =>
  `На сторонах: ${triangleToText(sides)} ${answerToText(
    answer
  )} посторить треугольник.`;

const getPositiveAnswerPhrase = (triangle) => getAnswerPhrase(triangle, true);

const getNegativeAnswerPhrase = (triangle) => getAnswerPhrase(triangle, false);

export { getAnswerPhrase, getPositiveAnswerPhrase, getNegativeAnswerPhrase };
