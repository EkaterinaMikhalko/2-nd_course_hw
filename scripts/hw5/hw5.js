/*function inequality(a, b) {
    if (a>=b) {
        console.log (b);
    } else {
        console.log(a);
    }
}
inequality (8,4);
inequality (6,6);
inequality (10,15);


function parity(a) {
    if (a%2 == 0){
        console.log (`Число четное`);
    }
    else{
        console.log (`Число нечетное`);
    }
}
parity(a=3);
parity(a=6);


let square = (a) => {
    let result = a**2;
console.log (result);
}
square (8);

let square2 = (a) => {
    let result2 = a**2;
return result2;
}
square2(9);


function welcome(age) {

    if (age<0) {
        alert ('Вы ввели неправильное значение');
    }
    else {
        if (age<=12){
            alert ('Привет, друг!');
        }
            else{
                alert('Добро пожаловать!');
            }
    }
} 
welcome (prompt (`Сколько тебе лет?`));


let a;
let b;

function number(a,b) {
    if (isNaN (a) || isNaN(b)){
        alert ('Одно или оба значения не являются числом')
    }
    else {
        let result=a*b;
        console.log (result);
    }
}
number(a = (prompt('Введите первое число')), b = (prompt('Введите второе число')));


let n;
function cube(n) {
    if (isNaN(n)) {
        alert('Переданный параметр не является числом');
    } 
    else {
       let result = n**3;
        alert(`${n} в кубе равняется ${result}`);      
       }

    }
    cube (prompt ('Введите число'));
    */
        
    const p = 3.14;
    function area() {
        return p*this.radius**2;
    }
    function perimeter() {
        return 2*p*this.radius;
    }

    const circle1 = {
        radius: 9,
        getArea: area,
        getPerimeter: perimeter,
    }

    const circle2 = {
        radius: 12,
        getArea: area,
        getPerimeter: perimeter,
    }
    console.log (circle1.getArea());
    console.log (circle1.getPerimeter());
    console.log (circle2.getArea());
    console.log (circle2.getPerimeter());
    