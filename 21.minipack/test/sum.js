import add from './add.js';

export default function sum (nums) {
    let result = 0;
    nums.forEach(function (num) {
        result = add(result, num);
    });
    return result;
};
