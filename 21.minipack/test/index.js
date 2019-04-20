import add from './add.js';
import sum from './sum.js';

const addRe = add(6, 8);
console.log(addRe);

const sumRe = sum([1, 2, 3, 4, 5, 6]);
console.log(sumRe);
