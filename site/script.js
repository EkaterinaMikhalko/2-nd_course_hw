function season() {
    let monthNumber = Number(prompt('Введите число от 1 до 12'));

    if (monthNumber === 1 || monthNumber === 2 || monthNumber === 12) {
        alert (`Зима`);
    } else 
        if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
            alert (`Весна`);
        } else 
            if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
                alert (`Лето`);
            } else 
                if (monthNumber === 9 || monthNumber === 10 || monthNumber === 11) {
                    alert (`Осень`);
                } else 
                    alert (`Такого месяца нет`);
                }


function wordsGame(){
    let wordsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    wordsArray = wordsArray.sort(() => Math.random() - 0.5);
    alert (wordsArray);
    let userFirstAnswer = (prompt ("Напишите первое слово"));
    let userSecondAnswer = (prompt ("Напишите последнее слово"));
    if (wordsArray[0].toLowerCase() == userFirstAnswer.toLowerCase() && wordsArray[6].toLowerCase() == userSecondAnswer.toLowerCase()) {
        alert('Поздравляю, все верно!')
    } else {
        if (wordsArray[0].toLowerCase() == userFirstAnswer.toLowerCase() || wordsArray[6].toLowerCase() == userSecondAnswer.toLowerCase()) {
            alert('Вы близки к победе')
        } else{
            alert ('Ответ неверный')
            }
        }
}
