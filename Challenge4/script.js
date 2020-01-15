console.time('test');
function largestPalindromeProduct(n) {
  //Sets n digit min
  let loopStart = Math.pow(10, n - 1);
  //Sets n digit max
  let loopEnd = Math.pow(10, n) - 1;

  let arr = [];

  for (let i = loopStart; i <= loopEnd; i++) {
    for (let j = loopStart; j <= loopEnd; j++) {
      let sum = i * j;
      let numstring = sum
        .toString()
        .split('')
        .reverse()
        .join('');
      let reverseNum = parseInt(numstring);
      if (sum === reverseNum && sum > Math.max(...arr)) arr.push(sum);
    }
  }
  return Math.max(...arr);
}

console.log(largestPalindromeProduct(4));
console.timeEnd('test');
