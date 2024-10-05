
// objective: write a function to give me the sum of all numbers in an array 
// 1. declare a function
// 2. call check whether the function is called prperly
// 3. set parameters(s)
// 4. pas the parameter(s), check whether parameter is passed in a proper format
// 5. do the function task (step by step)

// function sumOfNumbers(numbers){
//     console.log(numbers);
//     return numbers;
// }
// const numbers = [34, 54, 67, 33, 89];
// const sum = sumOfNumbers(numbers);
// console.log("Sum of numbers is ", sum);




// for --- of loop 

function sumOfNumbers(numbers) {
    let sum = 0;
    for (const num of numbers) {
        console.log(num);
        sum = sum + num;
    }
    return sum;
}
const numbers = [34, 54, 67, 33, 89];
const sum = sumOfNumbers(numbers);
console.log("Sum of numbers is ", sum);