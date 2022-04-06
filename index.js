// Funkcijos
// 1.
function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

//2.

function daugyba (a, b) {
    let result = a * b
    return result;
}
console.log(daugyba(3, 5));
console.log(daugyba(7, 5));
console.log(daugyba(3, 7));

// 3.
function skaitmenuKiekisSkaiciuje (skaicius) {
    if (typeof skaicius !== 'number' || isNaN(skaicius)) {
        return 'Pateikta netinkamo tipo reiksme.';
    } else {
        skaitKiekis = skaicius.toString().length;
        return skaitKiekis;
    }
}
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(NaN));


// CODEWARS
let test = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
console.log('-----------------------------------');

function countPositivesSumNegative(input) {
    if (input.length === 0) {
      return [];
    }
    let count;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] < 0) {
        sum += input[i];
      } else {
        const newArr = input.filter(num => num > 0);
        count = newArr.length;
      }
    }
      return [count, sum];
  }
  console.log(countPositivesSumNegative(test));
  console.log('-----------------------------------');

function repeatStr (n, s) {
  text = '';
  for(i = 0; i < n; i++) {
    text += s;
  }
  return text;
}
console.log(repeatStr (6, 'hi'));
console.log('-----------------------------------');

function maps(x){
  let newArr = [];
  for (i = 0; i < x.length; i++) {
    newArr.push(x[i] * 2);
  }
  return newArr;
}
console.log(maps([1, 3, 5]));
console.log('-----------------------------------');

function gimme (triplet) {
  const sortArr = [];
  for (i = 0; i < triplet.length; i++) {
    sortArr.push(triplet[i]);
    sortArr.sort(function(a, b) {return a-b});
      index = triplet.indexOf(sortArr[1]);  
  }
  return index;
}

console.log(gimme([2, 3, 1]));
console.log(gimme([5, 10, 14]));
console.log(gimme([2.1, 3.2, 1.4]));
console.log(gimme([5.9, 10.4, 7.2]));
console.log(gimme([-2, -3, -1]));
console.log(gimme([-5, -10, -14]));
console.log(gimme([-2, -3.2, 1]));
console.log(gimme([-5.2, -10.6, -7]));
console.log('-----------------------------------');
