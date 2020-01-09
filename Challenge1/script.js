function multiplesOf3and5(number) {
  let arr = [];
  for (var i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  const sum = arr.reduce((a, b) => a + b);
  return sum;
}

console.log(multiplesOf3and5(1000));
