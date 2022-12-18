const TIMEOUT_DELA = 500;
const MIN_PLURAL_DIGIT = 5;
const MIN_DECIMAL_NUMBER = 10;
const MAX_DECIMAL_NUMBER = 19;
const MIN_HUNDREDTH_NUMBER = 100;

const isEscapeKey = (event) => event.key === 'Escape';

const debounce = (callback) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), TIMEOUT_DELA);
  };
};

const declineByNumber = (number, nominative, genitiveSingular, genitivePlural) => {
  const lastDigit = number % MIN_DECIMAL_NUMBER;
  if (lastDigit === 0 || lastDigit >= MIN_PLURAL_DIGIT && lastDigit < MIN_DECIMAL_NUMBER
      || number % MIN_HUNDREDTH_NUMBER > MIN_DECIMAL_NUMBER && number % MIN_HUNDREDTH_NUMBER <= MAX_DECIMAL_NUMBER) {
    return genitivePlural;
  }
  else if (lastDigit > 1 && lastDigit < MIN_PLURAL_DIGIT) {
    return genitiveSingular;
  }
  return nominative;
};

const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};


export {isEscapeKey, debounce, shuffleArray, declineByNumber};
