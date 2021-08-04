const checkTriangleSides = (a, b, c) => a + b > c && b + c > a && a + c > b;

const checkRightTriangleCondition = (a, b, c) => a * a + b * b === c * c;

const isSameTriangles = (sides1, sides2) => {
  sides1.sort((a, b) => a.sideLength - b.sideLength);
  sides2.sort((a, b) => a.sideLength - b.sideLength);

  const c1 = sides1[0].sideLength === sides2[0].sideLength;
  const c2 = sides1[1].sideLength === sides2[1].sideLength;
  const c3 = sides1[2].sideLength === sides2[2].sideLength;

  return c1 && c2 && c3;
};

const getUniqueTriangles = (triangles) => {
  const unique = [];

  triangles.forEach((t) => {
    if (!unique.some((u) => isSameTriangles(u, t))) {
      unique.push(t);
    }
  });

  return unique;
};

const isTriangle = (sides) =>
  checkTriangleSides(
    sides[0].sideLength,
    sides[1].sideLength,
    sides[2].sideLength
  );

const isRightTriangle = (sides) => {
  const a = sides[0].sideLength;
  const b = sides[1].sideLength;
  const c = sides[2].sideLength;

  const c1 = checkRightTriangleCondition(a, b, c);
  const c2 = checkRightTriangleCondition(b, c, a);
  const c3 = checkRightTriangleCondition(c, a, b);

  return c1 || c2 || c3;
};

export { isTriangle, isRightTriangle, isSameTriangles, getUniqueTriangles };
