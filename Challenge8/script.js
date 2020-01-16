const inputNumbers = require('./inputNumbers');

function largestProductinaSeries(n) {
  let productArr = [];
  for (let i = 0; i < inputNumbers.length; i++) {
    let arr = [];
    for (let j = i; j < i + n; j++) {
      arr.push(inputNumbers[j]);
    }
    let product = arr.reduce((a, b) => a * b);
    if (product > Math.max(...productArr)) productArr.push(product);
  }
  return Math.max(...productArr);
}

console.log(largestProductinaSeries(13));
