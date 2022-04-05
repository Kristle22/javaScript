// Funkcijos
// 1.
console.log('1)----------------------------------------------');
function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());

//2.
console.log('2)----------------------------------------------');

function daugyba (a, b) {
    let result = a * b
    return result;
}
console.log(daugyba(3, 5));
console.log(daugyba(7, 5));
console.log(daugyba(3, 7));

// 3.
console.log('3)----------------------------------------------');
function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== 'number' 
    // || isNaN(skaicius) 
    || !isFinite(skaicius)) {
        return 'ERROR: pateikta netinkamo tipo reiksme.';
    } else {
        skaitKiekis = skaicius.toString().length;
        if (skaicius % 1 !== 0) {
            skaitKiekis--;
        }
        if (skaicius < 0) {
            skaitKiekis--;
        }
        return skaitKiekis;
    }
}
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(5));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(781));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(37060123456));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(true));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje("asd"));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(NaN));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(3.14));
console.log('Skaitmenu kiekis: ', skaitmenuKiekisSkaiciuje(-5));

// 4.
console.log('4)----------------------------------------------');
function didziausiasSkaiciusSarase(sarasas) {
    // VALIDATION
    if (typeof sarasas !== 'object' || ! Array.isArray(sarasas)) {
        return 'Pateikta netinkamo tipo reiksme.';
    }
    if (sarasas.length === 0) {
        return 'Pateiktas sarasas negali buti tuscias.';
    } 
    // LOGIC
        // let maxNumber;
        // for (i = 0; i < sarasas.length; i++) {
        //     maxNumber =  Math.max(...sarasas);
    
        let maxNumber = -Infinity;

        for (let i = 0; i < sarasas.length; i++) {
            const number = sarasas[i];
            // INNER VALIDATION
            if (typeof number !== 'number') {
                continue;
            }
            // INNER LOGIC
            if (number > maxNumber) {
                maxNumber = number;
            }
        }
        if (maxNumber === -Infinity) {
            return 'Sarase nera nei vieno normalaus skaiciaus.'
        }
        // RESULT RETURN
        return maxNumber;
    
}
console.log(didziausiasSkaiciusSarase([ 1 ]));
console.log(didziausiasSkaiciusSarase([ 1, 2, 3 ]));
console.log(didziausiasSkaiciusSarase([ -5, 78, 14, 0, 18 ]));
console.log(didziausiasSkaiciusSarase([ 69, 69, 69, 69, 66 ]));
console.log(didziausiasSkaiciusSarase([ -1, -2, -3, -4, -5, -6, -7, -8 ]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase(['x', 3, 5]));
console.log(didziausiasSkaiciusSarase(['x', true, [], -Infinity, NaN, Infinity]));

// 5.
console.log('5)----------------------------------------------');
function isrinktiRaides(tekstas, raidesIntervalas) {
    if (typeof tekstas !== 'string') {
        return 'ERROR: pirmasis kintamasis yra netinkamo tipo.'
    }
    if (typeof raidesIntervalas !== 'number') {
        return 'ERROR: antrasis kintamasis yra netinkamo tipo.'
    }
    if (!isFinite(raidesIntervalas)) {
        return 'ERROR: Raides intervalas turi buti tikras skaicius';
    }
    if (raidesIntervalas % 1 !== 0) {
        return 'ERROR: raides intervalas turi buti sveikasis skaicius.'
    }
    if (raidesIntervalas === 0) {
        return 'ERROR: raides intervalas negali buti lygus nuliui.'
    }
    if (raidesIntervalas > tekstas.length) {
        return 'ERROR: antrasis kintamasis turi buti ne didesnis uz pateikto teksto ilgi.'
    }
    if (tekstas.length < 0 || tekstas.length > 100) {
        return 'ERROR: pirmojo kintamojo reiksme yra netinkamo dydzio.'
    }
    let raides = '';

    if (raidesIntervalas > 0) {
        for (let i = raidesIntervalas-1; i < tekstas.length; i+=raidesIntervalas) {
            raides += tekstas[i] + ', ';
        }
    } else {
        for (let i = tekstas.length + raidesIntervalas; i >= 0; i +=raidesIntervalas) {
            raides += tekstas[i] + ',';
        }
    }
    return raides;
}
console.log('1) Is sio teksto isrinktos raides: ', isrinktiRaides( 'abcdefg', 2 ));
console.log('2) Is sio teksto isrinktos raides: ', isrinktiRaides( 'abcdefghijkl', 3));
console.log('3) ', isrinktiRaides( 'abc', 0 ));
console.log('4) ', isrinktiRaides( 'abc', 4 ));
console.log('5) ', isrinktiRaides( 1561, 2 ));
console.log('6) Is sio teksto isrinktos raides: ', isrinktiRaides( 'abcdefghijkl', -3));
console.log('7) ', isrinktiRaides( 'gfhbhjjjjjjjjjhngjhgjkjgjkbkjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjljgvlshdzjvlsdkzxjvkldkx', 5));

// 6.
console.log('6)----------------------------------------------');

function dalyba (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR: abi kintamojo reiksmes turi buti skaiciai.'
    }
    if (!isFinite(a) || !isFinite(b)) {
        return 'ERROR: abu kintamojo skaiciai turi tureti baigtines reiksmes.'
    }
    if (b === 0) {
        return 'ERROR: dalyba is nulio negalima.'
    }
    if (a === null || b  === null) {
        return 'ERROR: both values must be entered.'
    }
    let result = a / b;
    return result;
}

console.log(dalyba(20, 5));
console.log(dalyba('abc', 5));
console.log(dalyba(20, NaN));
console.log(dalyba(2, -15));
console.log(dalyba(20, 0));
console.log(dalyba());
