
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(numbers) {
    if (numbers % 2 === 0) {
        const result = "This is even number"
        return result;
    }
    else {
        const result = "This is odd number"
        return result;
    }
    //return result;   // my issue, return just used this line
}
const numbers = 209489944020495;
console.log(odd_even(numbers));