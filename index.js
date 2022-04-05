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

