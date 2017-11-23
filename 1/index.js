const checkValidity = (input) => {
  Number.isNaN(input) || input < 0 || input > 10000 ? displayErrorMessage() : document.querySelector('.result').textContent = findPrimeNumbers(input)
};
const displayErrorMessage = () => {
  document.querySelector('.result').textContent = "Podana wartość nie spełnia danych kryteriów: Nie jest liczbą całkowitą, jest mniejsza od 0 lub jest większa od 10000"
};
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
  checkValidity(integerInput);
});