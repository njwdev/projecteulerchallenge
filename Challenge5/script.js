//After looking into lcm / gcd

function smallestMult(n) {
  const lcm = (a, b) => {
    const gcd = (a, b) => (!b ? a : gcd(b, a % b));
    return (a * b) / gcd(a, b);
  };
  let arr = [];
  for (let i = n; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce(lcm);
}

console.log(smallestMult(20));

// Original attempt
// Works on low numbers, but takes a long time to run > 17
// function smallestMult(n) {
//   //Loop each number (n) through remainder equation
//   //If remainder !== 0, discard number
//   //If remainder = 0, continue
//   const occurencesInArr = (array, value) => {
//     count = 0;
//     array.forEach(v => v === value && count++);
//     return count;
//   };

//   let num = 1;
//   let arr = [];
//   while (num) {
//     for (j = n; j > 0; j--) {
//       if (num % j) break;
//       if (num % j === 0) arr.push(num);
//       if (occurencesInArr(arr, num) === n) return num;
//     }
//     num++;
//   }
// }

// console.log(smallestMult(13));
