
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(numbers) {
    // console.log(numbers);
    count = 0;
    for (let i = 0; i <= numbers.length; i++) {  // the misstake "used count_zero instead of numbers"
        if (numbers[i] === '1'){    // the misstake "used count_zero instead of numbers"
            count ++;
        }
    }
    return count;
}
const numbers = ("1010110111000010");
console.log(count_zero(numbers))
// console.log(count)


