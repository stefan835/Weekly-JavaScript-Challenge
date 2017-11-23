const drawNumbersArray = (integer) => {
  let resultArr = [];
  for (let i = 2; i < integer; i++) {
    resultArr.push(i);
  }
  return resultArr
};

const isPrimeNumber = (number) => {
  let start = 2;
  while (start <= Math.sqrt(number)) {
    if (number % start++ < 1) return false;
  }
  return number > 1;
};

const findPrimeNumbers = (integer) => {
  const arr = drawNumbersArray(integer);
  const arrPrime = arr.filter((number) => {
    return isPrimeNumber(number)
  });
  return arrPrime.join(' ')
};

document.querySelector('#prime-number').addEventListener('submit', (event) => {
  event.preventDefault();
  const integerInput = parseInt(event.target.children[0].value);
  document.querySelector('.result').textContent = findPrimeNumbers(integerInput)
});