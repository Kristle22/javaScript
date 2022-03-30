// Kintamuju inicijavimas

// 1.
let age = 39;
let year = 2022;
let birthYear = year - age;
console.log('I was born in', birthYear, 'year.');

// 2.

let name = "Kristina";
let town = "Alytus"
let greeting = "Hello everybody! I am " + name + " from " + town + '.';
console.log(greeting);

// 3.

const childAges = [9, 3, 6, 1, 5];
console.log(childAges.sort());

let foodCosts = [20, 58, 37, 34, 29];
console.log('Maximum amount spend on food was ' + foodCosts[1] + ' Eur.');

const mathMarks = [8, 10, 10, 9, 7];
console.log('The lowest mark this week is ', mathMarks[4]);

// 4.

const flowers = ['roses', 'jasmines', 'daisies', 'tulips', 'magnolias'];
console.log('My favourite flowers is ', flowers[0] + '.');

const icecream = ['chocolate', 'vanilla', 'strawberry', 'banana', 'caramel'];
console.log('My favourite flavours of icecreams are ', icecream[2], 'and', icecream[4] + '.');

const languages = ['English', 'Spanish', 'Russian', 'Italian', 'German'];
console.log('Do you speak', languages[3] + '?');

// Veiksmai su kintamaisiais

// 1.

let leisureCosts = 230;
let extraCosts = 190;
let travelCosts = 340;
let monthCosts = leisureCosts + extraCosts + travelCosts;
console.log(monthCosts);

// 2.

let title = 'JavaScript';
let ftr1 = 'fun';
let ftr2 = 'flexible';
let ftr3 = 'programming'
let describeJS = title + ' is a ' + ftr1 + ' and ' + ftr2 + " " + ftr3 + ' language.';
console.log(describeJS);

// 3.

foodCosts = [20, 58, 37, 34, 29];
const overall = foodCosts.reduce(function myCosts(total, value) { return total + value});
console.log('This month food costs was', overall,'Eur.');

// 4.

const icecreams = ['chocolate', 'vanilla', 'strawberry', 'banana', 'caramel'];
list = icecream.reverse().join(", ");
console.log(list);


//  Kintamuju palyginimas

1.

