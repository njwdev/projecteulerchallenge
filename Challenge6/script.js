function sumSquareDifference(n) {
  let sumOfSquaresArr = [];
  let squareOfSumsArr = [];
  for (let i = 1; i <= n; i++) {
    sumOfSquaresArr.push(Math.pow(i, 2));
    squareOfSumsArr.push(i);
  }
  let sumOfSquares = sumOfSquaresArr.reduce((a, b) => a + b);
  let squareOfSums = Math.pow(
    squareOfSumsArr.reduce((a, b) => a + b),
    2,
  );
  return squareOfSums - sumOfSquares;
}

console.log(sumSquareDifference(100));
