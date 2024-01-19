
// array.reduce(callback, initialValue);



let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentNumber) {
    return accumulator + currentNumber;
}, 0);

console.log(sum);
// Output: 15
