function fiboEvenSum(n) {
  //0,1 needed when using for loop
  let arr = [0, 1];

  for (var i = 2; i < n + 2; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  const evenCheck = arr
    //highlight which numbers are even
    .filter(i => i % 2 === 0)
    //add up the numbers
    .reduce((a, b) => {
      return a + b;
    });
  return evenCheck;
}

fiboEvenSum(10);
