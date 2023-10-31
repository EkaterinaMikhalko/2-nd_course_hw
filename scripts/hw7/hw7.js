/*
let str = prompt ('Введите предложение');
console.log (str.toUpperCase());


function searchStart (arr, str) {
    return arr.filter(el => el.toLowerCase().startsWith(str));
  
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


let number = 32.58884;
console.log (Math.floor(number));
console.log (Math.ceil(number));
console.log (Math.round(number));


console.log(Math.min (52, 53, 49, 77, 21, 32));
console.log(Math.max (52, 53, 49, 77, 21, 32));


console.log(Math.round(Math.random()*10));


function getRandomNumbers(number) {
    let result = [];
    for (let i = 0; i < Math.floor(number/2); i++){
        result.push(Math.round(Math.random()*number));
    }
    return result;
}

console.log(getRandomNumbers(7));
console.log(getRandomNumbers(12));
console.log(getRandomNumbers(15));


function randomNumber(minValue, maxValue) {
    return Math.round(Math.random()*(maxValue - minValue)) + minValue;
}

console.log(randomNumber(2,15));

let currentDate = new Date();
let futureDate = currentDate.setDate(currentDate.getDate() + 73);
let days73 = new Date (futureDate);
console.log(days73);
*/

const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(2025, 5, 25, 12, 30, 20, 10);
let fullDate = ("Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + "- это " + days[myDate.getDay()] + ". " + "Время: " + myDate.toTimeString());
console.log(fullDate);


