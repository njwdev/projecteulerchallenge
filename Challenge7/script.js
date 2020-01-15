function nthPrime(n) {
  //Checks if prime number
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return num > 1;
  };
  let arr = [];
  let count = 0;
  while (arr.length < n) {
    if (isPrime(count)) {
      arr.push(count);
    }
    count++;
  }
  return arr[arr.length - 1];
}

console.log(nthPrime(10001));
