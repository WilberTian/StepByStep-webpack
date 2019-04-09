import add from './add';

export default function sub (nums) {
    let result = 0;
    nums.forEach(function (num) {
        result = add(result, num);
    });
    return result;
};
