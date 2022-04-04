// Funkcijos
// 1.
function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

//2.

function daugyba (a, b) {
    let result = a + b
    return result;
}
console.log(daugyba(3, 5));
console.log(daugyba(7, 5));
console.log(daugyba(3, 7));

// 3.
function skaitmenuKiekisSkaiciuje (skaicius) {
    if (isNaN(parseInt(skaicius))) {
        console.log('Pateikta netinkamo tipo reiksme.')
    } else {
        let skaitKiekis = skaicius.toString().length;
        return skaitKiekis;
    }
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

// 4.
function didziausiasSkaiciusSarase (sarasas) {
    if (!Array.isArray(sarasas)) {
        return 'Pateikta netinkamo tipo reiksme.';
    } else if (sarasas.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias.';
    } else {
        let maxNumber;
        let list = '';
        for (i = 0; i < sarasas.length -1; i++) {
            list += sarasas[i];
            maxNumber = Math.max(sarasas);
        }
    }
    console.log(maxNumber);
}
console.log(didziausiasSkaiciusSarase([1, 2, 3, 56, 12, 45]));