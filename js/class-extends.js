class Dog {
    constructor(vardas, rusis, spalva, akys, kojuSk, garsas, maistas) {
        this.vardas = vardas;
        this.rusis = rusis;
        this.spalva = spalva;
        this.akys = akys;
        this.kojuSk = kojuSk;
        this.garsas = garsas
        this.maistas = maistas;
        this.loti = false;
        this.sedPozicija = false;
    }
    sedet() {
        this.sedPozicija = true;
        console.log(`${this.vardas}: I am sitting.`);
    }
    stovet() {
        this.sedPozicija = false;
        console.log(`${this.vardas}: I am standing.`);
    }
    balsas() {
        this.loti = true;
        console.log(`${this.vardas}: ${this.garsas}`);
    }
    tyliai() {
        this.loti = false;
        console.log(`${this.vardas} laukia komandos 'balsas!'.`)
    }
    sveiki() {
        console.log(`Hi, I am ${this.rusis} and my name is ${this.vardas}. My color is ${this.spalva}. My eyes are ${this.akys}. I have ${this.kojuSk} legs. Right now I am standing.`);    
    }

}

const rex = new Dog('Rex', 'a dog', 'black', 'blue', 4, 'au au!!', 'Darling');

console.log('------------------------------');
console.log(rex);
console.log('------------------------------');
rex.balsas();
console.log(rex.garsas);
rex.tyliai();
console.log('------------------------------');
rex.sedet();
console.log(rex.sedPozicija);
rex.stovet();
console.log('------------------------------');
rex.sveiki();

class Cat {
    constructor(name, species, color, eyes, legs, sound, food) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.eyes = eyes;
        this.legs = legs;
        this.sound = sound;
        this.food = food;
        this.layPosition = false;
        this.voice = false;
    }
    mew() {
        this.voice = true;
        console.log(`${this.name}: ${this.sound}`);
    }
    murmur() {
        console.log(`${this.name}: murrrrmurrr...pat me!`)
    }
    rest() {
        this.layPosition = true;
        console.log(`${this.name}: I am laying down.`);
    }
    stand() {
        this.layPosition = false;
        console.log(`${this.name}: I am standing.`);
    }
    mess() {
        console.log(`${this.name} just destroyed a cake.`)

    }
    hello() {
        console.log(`Hi, I am ${this.name}. My color is ${this.color}. My eyes are ${this.eyes}. I have ${this.legs} legs. Right now I am standing.`)
    }
}

const rainis = new Cat('Rainis', 'a cat', 'black', 'blue', 4, 'mew mew!!', 'Friskies');

console.log('------------------------------');
console.log(rainis);
console.log('------------------------------');
rainis.mew();
console.log(rex.garsas);
rainis.murmur();
console.log('------------------------------');
rainis.rest();
console.log(rainis.layPosition);
rainis.stand();
rainis.mess();
console.log('------------------------------');
rainis.hello();

class Hamster {
    constructor(name, species, color, eyes, legs, sound, food){
        this.name = name;
        this.species = species;
        this.color = color;
        this.eyes = eyes;
        this.legs = legs;
        this.sound = sound;
        this.food = food;
        this.eat = false;
    }
    chirp() {
        console.log(`${this.name}: ${this.sound}`);
    }
    chew() {
        this.eat = true;
        console.log(`${this.name}: I'm chewing a carrot!`);
    }
    hello() {
        console.log(`Hi, I am ${this.species} and my name is ${this.name}. My color is ${this.color}. My eyes are ${this.eyes}. I have ${this.legs} legs.`);
    }
}

const chamiakas = new Hamster('Chamiakas', 'a hamster', 'black', 'blue', 4, 'krimst krimst!!', 'grains, seeds, nuts');

console.log('------------------------------');
console.log(chamiakas);
console.log('------------------------------');
chamiakas.chirp();
console.log(chamiakas.eat);
chamiakas.chew();
console.log('------------------------------');
// rainis.rest();
console.log(chamiakas.eat);
console.log('------------------------------');
chamiakas.hello();
