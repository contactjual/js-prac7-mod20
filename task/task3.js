
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(numbers) {
    const totol = numbers.length;
    let sum = 0;
    for (const number of numbers) {
        console.log("Current number ", number);
        sum = sum + number;
        avg = sum/totol; 
    }
    return avg;
}
const numbers = [12, 23, 34, 46, 5, 6, 78, 78, 43, 4]
console.log('The average value is: ',make_avg(numbers));
