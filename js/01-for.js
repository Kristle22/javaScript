// Ciklo for panaudojimas
// 1. a) 0 ... 0

let sumZero = 0;
for (let i = 0; i < 1; i++) {
    sumZero += i;
}
console.log(sumZero);

// 1. b) 0 ... 4

let result1 = 0;
for (let i = 0; i < 5; i++) {
    result1 += i;
}
console.log( result1);

// 1. c) 0 ... 100

let result2 = 0;
for (let i = 0; i < 101; i++ ) {
    result2 += i;
}
console.log(result2);

// 1. d) 574 ... 815

let result3 = 0;
for (let i = 574; i < 816; i++) {
    result3 += i;    
}
console.log(result3);

// 1. e) -50 ... 50

let result4 = 0;
for (let i = -50; i < 51; i++) {
    result4 += i;
}
console.log(result4);

// 1. f) -70 ... 30

let result5 = 0;
for (let i = -70; i < 30; i++) {
    
    console.log(i);
}

// 2. 
let superPhrase = "NEBEPRISIKISKIAKOPUSTELIAUDAVOME";
let phrLen = superPhrase.length;

let text = "";
for (let i = phrLen - 1; i >= 0; i--) {
    text += superPhrase[i];
} 
console.log(text);

// 3. a) 0 - 11 (kiek skaiciu dalijasi be liekanos is I. 3, II. 5 ir  III. 7)
// I.

let txt1 = ""
for(let i = 0; i < 11; i+=3) {
    txt1 += i + ",";
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 3 yra 4 vienetai:', txt1);

// II.

let txt2 = "";
for (let i = 0; i < 11; i+=5) {
    txt2 += i + ",";
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 5 yra 3 vienetai:', txt2);

// III.

let txt3 = "";
for (let i = 0; i < 11; i+=7) {
    txt3 += i + ",";
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra 2 vienetai:', txt3);

// 3. b) 8 - 31 (kiek skaiciu dalijasi be liekanos is I. 3, II. 5 ir  III. 7)
// I.

let txt4 = "";
for (let i = 8+1; i < 31; i+=3) {
    txt4 += i + ",";
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 3 yra 8 vienetai:', txt4);

// II.

let txt5 = "";
for (i = 8+2; i < 31; i+=5) {
    txt5 += i + ",";
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 5 yra 5 vienetai:', txt5);

// III.

let txt6 = "";
for (let i = 8+6; i < 31; i +=7) {
    txt6 += i + ",";
}
console.log('Skaiciu intervale tarp 8 ir 31, besidalijanciu be liekanos is 7 yra 3 vienetai:', txt6);

// 3. c) -18 - 18 (kiek skaiciu dalijasi be liekanos is I. 3, II. 5 ir  III. 7)
// I.

let txt7 = "";
for (let i = -18; i < 18; i+=3) {
    txt7 += i + ",";
}
console.log('Skaiciu intervale tarp  -18 ir 18, besidalijanciu be liekanos is 3 yra 12 vienetu:', txt7);

// II.

let txt8 = "";
for (let i = -18; i < 18; i+=5) {
    txt8 += i + ",";
}
console.log('Skaiciu intervale tarp -18 ir 18, besidalijanciu be liekanos is 5 yra 8 vienetu:', txt8);

// III.

let txt9 = "";
for (let i = -18; i < 18; i+=7) {
    txt9 += i + ",";
}
console.log('Skaiciu intervale tarp 0 ir 11, besidalijanciu be liekanos is 7 yra 6 vienetu:', txt9);







