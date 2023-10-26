/*const numbs = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i])
	if (numbs[i] == 10) {
    break;
        }   
}

const numbs = [1, 5, 4, 10, 0, 3];
console.log (numbs.indexOf (4));


let numbs = [1, 3, 5, 10, 20];
numbs = numbs.join(' ');
console.log(numbs);


let arr = [
    [1, 1, 1], 
    [1, 1, 1], 
    [1, 1, 1],
]
console.log(arr);


let arr = [1, 1, 1];
arr.push(2,2,2);
console.log(arr);


let arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
arr.pop();
console.log(arr);


const arr = [9, 8, 7, 6, 5];
let numb = 0;
let answer = Number(prompt(`Введите число`));
for (let i = 0; i < arr.length; i++){
    numb = arr[i];
}
if (numb == answer) {
    alert (`Угадал`)
} else {
    alert (`Не угадал`)
}


let letters = 'abcdef';
let arrayLetters = letters.split('');
arrayLetters = arrayLetters.reverse();
arrayLetters = arrayLetters.join('');
console.log(arrayLetters);


let arr = [
    [1, 2, 3,], 
    [4, 5, 6], 
]

arr = arr.join (',');
console.log(arr);


const arr = [5, 3, 8, 1, 4];

for (let i = 0; i < arr.length - 1; i++) {
    console.log (arr[i] + arr[i + 1]);
}


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getSquaredNumbers(arr){
return arr.map((num) => num*num);
}
console.log(getSquaredNumbers(arr));


function getWordsLength (words){
return words.map ((word) => {
    return word.length
})
}
console.log (getWordsLength(['слово', 'предложение', 'массив']));
*/

function filterPositive(array) {
    let result = [];
    for  (let i = 0; i>array.length; i++){
    if (array[i]<0){
        result.push (array[i]);
    }
  }
  return result;
}
  
filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]);