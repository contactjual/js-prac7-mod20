
// create function that will return only the even numbers
// return the sum of even numbers 

function evenNumbers(number) {
    let evenNum = [];
    for (const num of number) {
        if (num % 2 === 0) {
            console.log(num);
            evenNum.push(num);
        }
    }
    return evenNum;
}
// const number = [3, 5, 56, 76, 78, 5];
// const evenNum = evenNumbers(number);
// console.log(evenNum);





// sum of even numbers

function sumEven(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (num % 2 === 0) {
            console.log(num);
            sum = sum + num;
        }
    }
    return sum;
}
const numbers = [3, 5, 56, 76, 78, 5];
const sum = sumEven(numbers)
console.log("Sum of the even numbers: ", sum);