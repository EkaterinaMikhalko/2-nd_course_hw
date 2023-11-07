/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

 people.sort (function sortAge(a,b) {
    if (a.age > b.age) {
        return 1;
    }

    if (a.age < b.age) {
        return -1;
    }
    return 0;

 });

 console.log (people);
 

 function isPositive(num) {
    return num > 0;
    
    }
    function isMale(person) {
    return person.gender === "male";
    }
    function filter(array, ruleFunction) {
    let result = [];
    for (let item of array){
        if (ruleFunction(item)) {
            result.push(item);
        }
    }
    return result;
    }
    
    console.log(filter([3, -4, 1, 9], isPositive));
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale));
    

    let counter = 0;
    const interval = setInterval(() => { 
    console.log (new Date());

    counter += 3;

    if (counter >=30) {
        clearInterval(interval);
        console.log ('30 секунд прошло')
        }
    

    }, 3000);
    

    function delayForSecond(callback) {
        setTimeout( callback, 1000);
   }
   
   delayForSecond(function () {
      console.log('Привет, Глеб!');
   })

   */

   
    function delayForSecond(cb) {
        setTimeout(() => {
            console.log('Прошла одна секунда');
                    if(cb) { 	cb(); }
    
        }, 1000)
    }

    function sayHi (name) {
        console.log(`Привет, ${name}!`);
    }
    delayForSecond(() => sayHi('Глеб'));

    