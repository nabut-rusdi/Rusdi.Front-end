// utils.js

// 1. Calculate Age and Retirement
export const calculateAge = (birthYear) => 2019 - birthYear;

export const yearUntilRetirement = ({ year, firstName }) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

// 2. Add Numbers Using Reduce
export const addNumber = (a, b, c, d, e, f, g) => {
  const numbers = [a, b, c, d, e, f, g];
  return numbers.reduce((sum, num) => sum + num, 0);
};

// 3. Calculate Area of Circle
const phi = 3.14;
const power = 2;

export const calculateArea = ({ radius }) => phi * Math.pow(radius, power);

// 4. Make Ajax Request with Default Method
export const makeAjaxRequest = (url, method = 'GET') => {
  console.log(`Requesting ${url} with method ${method}`);
};
