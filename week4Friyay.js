//1. make a function that check to see if an input is an array.

const arrayCheck = arr => Array.isArray(arr);
const sampleArr = [1, "2", 3, "4"];
const sampleArrTwo = "1, 2, 3, 4";
// console.log(arrayCheck(sampleArr));
// console.log(arrayCheck(sampleArrTwo));

//2. Write a JavaScript function to get the first 'n' elements of an array.

const firstItems = (array, n) => array.splice(0, n);
//console.log(firstItems(sampleArr, 3));

//3. Write a simple JavaScript program to join all elements of the following array into a string. 

const arr1 =[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const joinArr = arr => arr.join('');
//console.log(joinArr(arr1));

//4. Write a JavaScript program which accept a number as input and insert dashes (-) between each number.

const dashMaker = number => String(number).split('').map((num, index) => String(number).length - 1 === index ? num : num + "-").join('');

//console.log(dashMaker(2348885));

//5. 5. Write a JavaScript program to sort the items of an array.

const numberArray = [1, 200, 3, -4, 1240, 5, 201, 175, -1000];
const sortThis = arr => arr.sort((a, b) => a - b);
//console.log(sortThis(numberArray));



//6. Write a JavaScript program to find the most frequent item of an array.

// const mostUsed = arr => {
//     const arrContent ={};
//     console.log(arr);
//     arr.forEach(item => !arrContent.hasOwnProperty(item) ? arrContent.item += "hi" : arrContent.item = "oh no");
//     console.log(arrContent)
// }
// console.log(mostUsed(arr1));

//7. 7. Write a JavaScript program which accept a string as input and swap the case of each character. For
//example if you input The Quick Brown Fox the output should be tHE qUICK bROWN fOX.

const caseSwap = str => str.split('').map(char => char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join('');
//console.log(caseSwap("The Quick Brown Fox"));

//8. Write a JavaScript program which prints the elements of the following array. Note : Use nested for loops.

const arr3 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14],
[3, 10, 26, 7]];

const arrayPrint = arr => {arr.forEach(element => { element.forEach(element => console.log(element));})};
//arrayPrint(arr3);

//9. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const removeDup = arr => arr.filter((item, index) => index === arr.lastIndexOf(item));

//console.log(removeDup(arr1));

//10.There are two arrays with individual values, write a JavaScript program to compute the sum of each
//individual index value from the given arrays.

const array1 = [1,0,2,3,4];
const array2 = [3,5,6,7,8,13];

const arrAdd = (arr1, arr2) => arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);

//console.log(arrAdd(array1, array2));

//11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
const arrJunk = [NaN, 0, 15, false, -22, '',undefined, 47, null]
const junkValueRemover = arr => arr.filter(num => {
    const junkValues = [ null, 0, false, undefined, NaN, ""];
    return !junkValues.includes(num);
});

//console.log(junkValueRemover(arrJunk));

//12. Write a JavaScript function to merge two arrays and removes all duplicates elements.
const arr4 = [1, 2, 3];
const arr5 = [2, 30, 1];
const mergeNoDups = (firstArray, secondArray) => {
    let newArr = [...firstArray, ...secondArray];
    return removeDup(newArr);
};
//console.log(mergeNoDups(arr4, arr5));

//13. Make an array of numbers that are doubles of the first array.

const arrDoubler = arr => arr.map(item => item * 2);

//console.log(arrDoubler(arr4));

//14. Take an array of numbers and make them strings.

const numToString = numArr => numArr.map(num => String(num));

//console.log(numToString(arr4));

//15. Capitalize each of an array of names.
const names = ["john", "ringo", "george", "paul"]
const capArr = arr => arr.map(name => name[0].toUpperCase() + name.split('').splice(1).join(''));

//console.log(capArr(names));

//16. Find all the strings in a array thats less than 5 letters.
const arrWords = ["Sometimes", "I", "give", "myself", "the", "creeps",
"Sometimes", "my", "mind","plays", "tricks", "on", "me",
"It", "all", "keeps", "adding", "up",
"I", "think", "I'm", "cracking", "up",
"Am", "I", "just", "paranoid?",]

const greaterThanFive = arr => arr.filter( word => word.length >= 5);

//console.log(greaterThanFive(arrWords));


