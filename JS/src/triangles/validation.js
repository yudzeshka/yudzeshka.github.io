import { isBetween } from "./util.js";

const isValid = (value, lowerBound, upperBound) =>
  isBetween(value, lowerBound + 1, upperBound);

const getErrorMessage = (sideName, sideLength) =>
  `Значение ${sideLength} стороны "${sideName}" не может быть использовано для построения треугольника.`;

const getHelpText = (lowerBound, upperBound) =>
  `Допустимые значения для стороны должны быть в диапазоне (${lowerBound}, ${upperBound}].`;

const validateSide = (side, lowerBound, upperBound) =>
  isValid(side.sideLength, lowerBound, upperBound)
    ? { isValid: true, errorMessage: "" }
    : {
        isValid: false,
        errorMessage: getErrorMessage(side.sideName, side.sideLength),
      };

const validateTriangle = (sides, lowerBound, upperBound) => {
  const validationResults = sides.map((side) =>
    validateSide(side, lowerBound, upperBound)
  );

  return {
    isValid: !validationResults.some((result) => result.isValid === false),
    errorMessages: validationResults.map((result) => result.errorMessage),
  };
};

export { getHelpText, validateTriangle };
