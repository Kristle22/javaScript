function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo; i <= iki; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0, 0), '-->', 0);
console.log(sumaIntervale(0, 1), '-->', 1);
console.log(sumaIntervale(0, 2), '-->', 3);
console.log(sumaIntervale(0, 3), '-->', 6);
console.log(sumaIntervale(0, 4), '-->', 10);
console.log(sumaIntervale(0, 100), '-->', 5050);
console.log(sumaIntervale(574, 815), '-->', 'kazkoks didelis teigiamas');
console.log(sumaIntervale(-50, 50), '-->', 0);
console.log(sumaIntervale(-70, 30), '-->', -2020);
console.log('----------------------------------------------');

console.log(sumaIntervale(0, 14));

function reverseString(text) {
    const a = text.length - 1;
    let reverse = "";

    for (let i = 0; i < text.length; i++) {
        const position = a - i;
        const letter = text[position];
        reverse += letter;
    }
    return reverse;
}
console.log(reverseString('abcdef'), '-->', 'fedcba');

function reverseString2(text) {
    let reverse = '';

    for(let i = 0; i < text.length; i++) {
        reverse = text[i] + reverse;
    }
    return reverse;
}
console.log(reverseString2('zyle'), '-->', 'elyz');

function reverseString3(text) {
    let reverse = '';
    for(let i = text.length-1; i >= 0; i--) {
    reverse += text[i];
    }
    return reverse;
}
console.log(reverseString3('reverse'), '-->', 'esrever');

function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count++;
        }
    }
    return `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${count} vienetai.`
}
console.log('----------------------------------------------');
console.log(liekana(0, 11, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(-18, 18, 7));

console.log(liekana(0, 1e6, 7));

// const daugyba = (a, b) => a * b;
function daugyba(a, b) {
    // jei a nera skaicius -> ERROR
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti skaicius';
    }
    if (isNaN(a)) {
        return 'ERROR: pirmas parametras turi buti tikras skaicius'
    }
    // jei b nera skaicius -> ERROR
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti skaicius';
    }
    if (isNaN(b)) {
        return 'ERROR: antras parametras turi buti tikras skaicius';
    }
    if ('' + b === 'NaN') {
        return 'ERROR: pirmas parametras turi buti tikras skaicius'
    }
    return a * b;
};

console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(-7, -5));
console.log(daugyba(7, -5));
console.log(daugyba(7.7, -5));

console.log('ERRORR -->', daugyba([], 5));
console.log('ERRORR -->', daugyba(7.7, 'labas'));
console.log('ERRORR -->', daugyba('labas', 5));
console.log('ERRORR -->', daugyba(7.7, ''));
console.log('ERRORR -->', daugyba('', 5));
console.log('ERRORR -->', daugyba(7, NaN));
console.log('ERRORR -->', daugyba(true , 5.5));
console.log('ERRORR -->', daugyba(Infinity, 7));
