const factorialCalculator = (digit) => {
  let factorial = 1;
  for (let i = 1; i <= digit; i++) {
    factorial *= i;
  }
  console.log(`Factorial of ${digit} is ${factorial}`);
};

factorialCalculator(5);
factorialCalculator(6);
