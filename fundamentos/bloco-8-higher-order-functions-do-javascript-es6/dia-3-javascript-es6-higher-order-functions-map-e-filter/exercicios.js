const numbers = [19, 21, 30, 3, 45, 22, 15, 16, 17, 18];

const verifyEven = (number) => number % 2 === 0;
const isEven = numbers.filter(verifyEven);
console.log(isEven); // [ 30, 22, 16, 18 ]

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbers.filter((number) => number % 2 === 0);
console.log(isEven2); // [ 30, 22, 16, 18 ]

const fbarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const fizzbuzzer = fbarray.filter((iswhat) => {
  if (iswhat % 3 === 0 && iswhat % 5 === 0) { console.log('fizzbuzz'); }
  else if (iswhat % 5 === 0) { console.log('buzz'); }
  else if (iswhat % 3 === 0) { console.log('fizz'); }
  else { console.log(iswhat); }
});