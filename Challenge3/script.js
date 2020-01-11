function largestPrimeFactor(number) {
  //Function to check if number is prime
  const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
    return num > 1;
  };
  if (number === 1) {
    return number;
  } else if (isPrime(number)) {
    return number;
  } else {
    let arr = [];
    for (i = 0; i <= Math.sqrt(number); i++) {
      if (number % i === 0 && isPrime(i)) {
        arr.push(i);
      }
    }
    //Takes account of prime factor > sqrt of number, as is the case in 10, 21 etc
    let max = Math.max(...arr);
    let res = number / max;
    let calc = res % 1 === 0 && isPrime(res) ? res : max;
    return calc;
  }
}

console.log(largestPrimeFactor(600851475143));
