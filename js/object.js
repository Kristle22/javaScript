// OBJECT
function average(list) {
    let sum = 0;
    for (const item of list) {
        sum += item;
    }

    return sum / list.length;
}

const rez1 = average([10, 2, 8, 4]);
console.log(rez1);

const rez2 = average([2, 4, 8, 10, 10, 10, 10]);
console.log(rez2);
