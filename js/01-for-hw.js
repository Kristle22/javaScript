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

// 3. a) 0 - 11 /b) 8 - 31 /c) -18 - 18 (kiek skaiciu dalijasi be liekanos is 3, 5 ir 7)

let startAt = -18;
let endAt = 18;

let numFrom3 = [];
let numFrom5 = [];
let numFrom7 = [];

for(let i = startAt; i < endAt; i++) {
    if (i % 3 === 0) { numFrom3.push(i) };  
    if (i % 5 === 0) { numFrom5.push(i) };
    if (i % 7 === 0) { numFrom7.push(i) };
}
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 3 yra ${numFrom3.length} vienetai: ${numFrom3}`);
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 5 yra ${numFrom5.length} vienetai: ${numFrom5}`);
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 7 yra ${numFrom7.length} vienetai: ${numFrom7}`);
console.log('----------------------------------------------');
