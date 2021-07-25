const nextCombination = (values, lower, upper) => {
  let needToIncrease = true;
  const res = Array.from(values);

  for (let i = values.length - 1; i > 0; i--) {
    if (needToIncrease) {
      res[i] = values[i] + 1;
      needToIncrease = false;
    }

    if (res[i] > upper) {
      res[i] = lower;
      needToIncrease = true;
    }
  }

  if (needToIncrease) {
    res[0] = values[0] + 1;

    if (res[0] > upper) {
      return null;
    }
  }

  return res;
};

export { nextCombination };
