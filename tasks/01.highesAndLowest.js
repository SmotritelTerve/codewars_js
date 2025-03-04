// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// Solution 1
// function highAndLow(numbers){
//     return Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
//   }

// Solution 1
const highAndLow = (numbers) => {
    const resultedString = Math.max(...numbers.split(' ')) + ' ' + Math.min(...numbers.split(' '));
    console.log(resultedString);
}

// Solution 2
const highAndLow_2 = (numbers) => {
    const arr = numbers.split(' ');
    let max = parseInt(arr[0]);
    let min = parseInt(arr[0]);

    for (let i = 0; i < arr.length; i++) {
        const num = parseInt(arr[i]);
        if (num > max) {
            max = num;
        }
        if (num < min) {
            min = num;
        }
    }

    const resultedString = max + ' ' + min;
    console.log(resultedString);
    // return resultedString;
}

// Solution 3 with map
const highAndLow_3 = (numbers) => {

    const arr = numbers.split(' ').map(Number);

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    const resultedString = `${max} ${min}`;
    console.log(resultedString);
};

// Solution 4 with input validation (in case the string is empty or invalid)
const highAndLow_4 = (numbers) => {
    // Handle empty string or invalid input
    if (!numbers || numbers.trim() === "") {
        return "Invalid input";
    }

    // Split and convert to numbers
    const arr = numbers.split(' ').map(Number);

    // Check if all elements are valid numbers
    if (arr.some(isNaN)) {
        return "Invalid input";
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // return `${max} ${min}`;
    const resultedString = `${max} ${min}`;
    console.log(resultedString);
};


console.log("Solution 1")
highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
highAndLow("1 2 3 4 5");
highAndLow("1 2 -3 4 5");
highAndLow("1 9 3 4 -5");

console.log("Solution 2")
highAndLow_2("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
highAndLow_2("1 2 3 4 5");
highAndLow_2("1 2 -3 4 5");
highAndLow_2("1 9 3 4 -5");

console.log("Solution 3")
highAndLow_3("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
highAndLow_3("1 2 3 4 5");
highAndLow_3("1 2 -3 4 5");
highAndLow_3("1 9 3 4 -5");

console.log("Solution 4")
highAndLow_4("8 3 -5 42 -1 0 0 -9 4 7 4 -4");
highAndLow_4("1 2 3 4 5");
highAndLow_4("1 2 -3 4 5");
highAndLow_4("1 9 3 4 -5");