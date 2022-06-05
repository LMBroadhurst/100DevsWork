//Arrays

//Create and array of tv shows. Loop through and print each show to the console

const tvShows = ["Stranger Things", "Altered Carbon", "The Expanse"];

for (show of tvShows) {
    console.log(show);
};

tvShows.forEach(
    (show) => console.log(show)
);

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays

const numbers = [1, 4, 54, 22, 33, 932, -6];
const evenNumbers = [];

for (num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
};

let onlyEvens = arr => arr.filter(n => n % 2 === 0);
// If the predicate is true, we add the value to the array.
// OR if false, it is removed from the array.

console.log(evenNumbers);
console.log(onlyEvens(numbers));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number

function getSecondLowestSecondHighest (array) {

    numbers.sort();
    const secondLowest = numbers[1];

    const secondHighest = numbers[numbers.length - 2];

    alert(secondHighest + secondLowest);

}

getSecondLowestSecondHighest(numbers);


function sumSecondLowHigh (arr) {
    let sorted = arr.sort((a, b) => a-b);
    alert(sorted[1] + sorted[sorted.length - 2]);
};

sumSecondLowHigh(numbers);