
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function checkNumber(number) {
    if (number % 2 === 0) {
        let multiplyResult = number * 2;
        console.log('This is even number and so your result is: ', multiplyResult);
        return multiplyResult;
    }
    else {
        let divideResult = number / 2;
        console.log('This is odd number and so your result is: ', divideResult);
        return divideResult;
    }
}
checkNumber(11);