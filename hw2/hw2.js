let a = 10;
alert (a);
a = 20;
alert (a);

let yearOfIPhoneIssue = 2007;
alert(`Год выпуска первого IPhone ${yearOfIPhoneIssue}`)

let jsCreator = 'Брендан Эйх';
alert (`Создатель JavaScript ${jsCreator}`);

let numberOne = 10;
let numberTwo = 2;
alert (numberOne+numberTwo);
alert (numberOne-numberTwo);
alert (numberOne*numberTwo);
alert (numberOne/numberTwo);

let c = 2;
let result = c**5;
alert(result);

let a6 =9;
let b6 = 2;
let result6 = 9%2;
alert (result);

let num = 1;
num +=5;
num -=3;
num *=7;
num /=3;
num++;
num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert (age);

const user = {
    name: 'Вася',
    age: 25,
    isAdmin: true,
}
user['city of residence'] = ('Москва');
user.age = 20;
delete user['city of residence'];
let info = (prompt('Какую информацию хотите узнать о пользователе?'))
alert (user[info]);


let yourname = (prompt ('Введите Ваше имя'));
alert (`Привет, ${yourname}!`);






