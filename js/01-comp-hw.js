// Kintamuju palyginimas
// 1. a)

const age1 = 29;
const age2 = 39;
const age3 = 19;

if (age1 > age2) {
    console.log("(a)Pomidoras");
} else {
    console.log("(a)Bandykite kita karta.");
}
// 1. b) 
if (age2 < age3) {
    console.log("(b)Pomidoras");
} else {
    console.log("(b)bandykite kita karta.");
}
//  1. c)
if (age1 === age3) {
    console.log("(c)Pomidoras");
} else {
    console.log("(c)Bandykite kita karta.");
}

// 1. d)
if (age1 !== age2) {
    console.log("(d)Pomidoras");
} else {
    console.log("(d)Bandykite kita karta.");
}

// 1. e)
if (age2 >= age1) { 
    console.log("(e)Pomidoras");
} else {
    console.log("(e)Bandykite kita karta.");
}

// 1. f)
if (age1 <= age2) {
    console.log("(f)Pomidoras");
} else {
    console.log("(f)Bandykite kita karta.");
}

// 2.
const phrase1 = "Gera pradzia puse darbo.";
const phrase2 = "Ka darai, daryk gerai.";
const phrase1Len = phrase1.length;
const phrase2Len = phrase2.length;

console.log(`Pirmos frazes ilgis: ${phrase1Len} simboliu.`);
console.log(`Antros frazes ilgis: ${phrase2Len} simboliu.`);

// 3. a) b)

if (phrase1Len > phrase2Len) {
    console.log("Pirmos fraze turi daugiau simboliu");
} else {
    console.log("Anra fraze ilgesne uz pirma");
}

// 3. c) d)
if (phrase1Len !== phrase2Len) {
    console.log("Abi frazes yra vienodo ilgio.");
} else {
    console.log("Siu fraziu simboliu skaicius skiriasi.");
}

// 3. e) f)

if (phrase1Len <= phrase2Len) {
    console.log("Pirmos frazes simboliu skaicius yra mazesnis arba lygus antros frazes ilgiui.");
} else {
    console.log("Pirmos frazes simboliu skaicius nera mazesnis arba lygus antrai frazei.")
}