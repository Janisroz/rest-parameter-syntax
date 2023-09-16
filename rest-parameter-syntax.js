// /**
//  * To run this file in Gitpod, use the 
//  * command node rest-parameter-syntax.js in the terminal
//  */

// // Regular function call 
// const sumAll = (a, b, c) => a + b + c;
// let sum = sumAll(1, 2, 3);
// console.log("Sum:", sum)


// // Extra arguments are ignored

// let sum2 = sumAll(1, 2, 3, 4, 5, 6);
// console.log("sum2: ", sum2)

// // Function using ...rest
// const sumRest = (a, b, c, ...rest) => {
//     let sum = a + b + c;
//     for (let i of rest) {
//         sum += i
//     };

//     return sum
// }

// let sum3 = sumRest(1, 2, 3, 4, 5, 6);
// console.log("sum3: ", sum3)

let mixedLetters = ['b', 'd', 'a', 'c', 'f', 'e'];

let moreMixedLetters = [...mixedLetters,'h', 'k', 'g', 'j', 'i', 'l'];
console.log(moreMixedLetters);

const updateSortReverse = (arr, ...letters) => {
    newArray = [...arr];
    
    for (let i of letters) {
        newArray.push(i)
    };
    newArray = newArray.sort();
    newArray = newArray.reverse();
    return newArray
};

let reverseSort = updateSortReverse(moreMixedLetters, 'n', 'm', 'o' );
console.log(reverseSort);
console.log(moreMixedLetters);