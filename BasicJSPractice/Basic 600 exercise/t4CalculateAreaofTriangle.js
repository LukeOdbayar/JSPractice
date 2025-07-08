function calculateAreaofTriangle(a, b, c) {
  let semiPerimeter = findSemiPerimeter(a, b, c);
  let t =
    semiPerimeter *
    (semiPerimeter - a) *
    (semiPerimeter - b) *
    (semiPerimeter - c);
  console.log(t);
  //return radical(t);
  return Math.sqrt(t);
}
function findSemiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}
function radical(num) {
  let i = num / 2;
  let temp = 0;
  do {
    temp = (i * i).toFixed(3);
    if (Math.round(temp) === num) return i;
    i = (i - 0.01).toFixed(3);
  } while (i > 0);
}
let area = calculateAreaofTriangle(5, 6, 7);
console.log(area);
