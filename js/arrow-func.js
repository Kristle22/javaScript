const pirmas = 7;
const antras = 5;

// iprasta funkcija
function suma(a, b) {
    return a + b;
}
const r1 = suma(pirmas, antras);
console.log(r1);

// kintamajam skirta anonimine (bevarde) funkcija
const atimtis = function (a, b) {
    return a - b;
}
const r2 = atimtis(pirmas, antras);
console.log(r2);

//arrow (rodykline) funkcija
const dalyba = (a, b) => {
    return a / b;
}
const r3 = dalyba(pirmas, antras);
console.log(r3);

//arrow (rodykline) funkcija
// jei logikos bloke {} yra tik viena procedura, tai galime nerasyti {} ir return
const daugyba = (a, b) => a * b;
const r4 = daugyba(pirmas, antras);
console.log(r4);

//arrow (rodykline) funkcija
// jei parametru bloke () yra tik 1 parametras, tai galime nerasyti ()
const kvadratu = a => a * a;
const r5 = kvadratu(pirmas);
console.log(r5);

const tekstas = 'Labas rytas';
const pirmaRaide = s => s[0];
console.log(pirmaRaide(tekstas));


// CODEWARS

// function rowSumOddNumbers(n) {
//     let triangleLeft = '';
//     let triangleRight = '';
//     for (i = 1; i <= n; i++) {
//            triangleLeft += '*'.repeat(i).padStart(n) + '\n';
//            for (j = 1; j <= i; j++) {
//                triangleRight += '1'.repeat(1).padEnd(n) + '\n';
//            };       
//     }
//     return triangleLeft;
//   }
//   console.log(rowSumOddNumbers(20));

function rowSumOddNumbers(n) {
    let triangle = '';
    sum = 0;
    for (i = 1; i <= n; i+=2) {
           for (j = 1; j <= i; j+=2) {
               triangle +=' ' + j;
           };  
        triangle += '\n';    
    }
    return triangle;
  }
  console.log(rowSumOddNumbers(10));








