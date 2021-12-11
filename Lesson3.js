//Zadanie 1

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// };
// let object = {};
// let object2 = {
//     a: 5,
//     b: 12,
// };
// console.log(isEmpty(object)); //true
// console.log(isEmpty(object2)); //false


// ZAdanie 2

// function multiplyNumernic(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key] *= 2;
//         }
//     }
// }
// let object1 = {
//     width: 4,
//     height: -7,
//     title: "Первоначальные данные"
// };
// console.log(object1);
// multiplyNumernic(object1);
// console.log(object1);

// ZAdanie 3
// function readNumber() {
// let bool=false;
// let number;
// do {
//     number = prompt('Введите число ', 10) ; console.log(typeof number);
//     number = parseFloat(number); console.log(typeof number);
//     if ("" + number  != 'NaN') bool = true;
//
//     console.log(number, number=='NaN');
// } while (bool == false);
//
//     return number;
// }
//
// console.log(readNumber())


//Zadanie 4

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

// function random(min, max) {
//     let result = Math.random() * (max - 1) + min;
//     return result;
// }
// console.log(random(1, 5));

// Zadanie 5

// function randomInteger(min, max) {
//     let result = Math.random() * max + min;
//     result = Math.floor(result);
//     return result;
// }
//
// console.log(randomInteger(1, 5));




// ZAdanie 6

// function ucFirst(str) {
//     let string = str[0].toUpperCase() + str.slice(1);
//     return string;
// }
// let string;
// string = prompt('Введи слово ');
// console.log(ucFirst(string));


// let ucFirst=(str)=> str[0].toUpperCase() + str.slice(1);
// console.log(ucFirst(prompt('Введи слово ')));






// ZAdanie 7

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();
//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// console.log(checkSpam('buy VIAGRA now'));
// console.log(checkSpam('free xXxXx'));
// console.log(checkSpam("innocent rabbit"));



// Zadanie 8

// truncate("Всем привет!", 20) = "Всем привет!"
// function truncate(str, maxlength){
//     if (str.length < maxlength) {
//         return str;
//     } else if (str.length >= maxlength) {
//         return str.slice(0, maxlength - 3) + '...' ;
//     }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


// Zadanie 9

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));


// Zadanie 10

// function sumInput() {
//     let arr = [];
//     let sum = 0;
//     while (true) {
//         let num = prompt("Введите число");
//         if (num == null || num == '' || !isFinite(num)) {
//             break;
//         }
//         arr.push(+num);
//     }
//     for (let value of arr) {
//         sum += value;
//     }
//     return sum;
// }
//
// sumInput();



// Zadanie 11.

/*
function getMaxSubSum(arr) {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let sumStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumStart += arr[j];
            maxSum = Math.max(maxSum, sumStart);
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

*/

// Zadanie 12 Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его
// результат:
// function checkAge(age) {if (age > 18) {
// return true;
// } else {
// // ...
// return confirm('Родители разрешили?');
// }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?
// function checkAge(age) {
// if (age > 18) {
// return true;
// }
// // ...
// return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?

// ОТвет: Oтличий нету

// Zadanie 13

//1 вариант

/*
function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}
checkAge(40);
*/

//2 вариант

/*
function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
checkAge(4);
*/

// Zadanie 14.


// function min(a, b) {
//     return a < b ? a : b;
// }
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


// Zadanie №15

// function pow(x, n) {
//     let res = x;
//     for (let i = 1; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }
// let x = +prompt('Введите число');
// let n = +prompt('Введите число от 1 и выше');
// if (n < 1) {
//     console.log('Вы ввели не натуральное число');
// } else {
//     console.log(pow(x, n));
// }

// Zadanie 16

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// ask("Вы согласны?",
//     () => console.log("Вы согласились."),
//     () => console.log("Вы отменили выполнение.")
// );


//Zadanie 17


// let income = 3333;
// let consumption = 1750;
// let buy = 8000;
// let repository = 0;
// let counter = 0;
//
// while (repository < buy) {
//     repository += income - consumption;
//     counter++;
// }
// console.log(counter);

// Zadanie 18
//
// let sum = 0;
//
// for (let i = 0; i < 10; i++) {
//      let num = +prompt("Введите число");
//     if (num < 0){
//         sum += num;
//     }
// }
// console.log(sum);


// Zadanie 19.
// Скопирован ли массив?
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits; // переменная полчули ссылку на масив
// shoppingCart.push("Банан");
// // что в fruits?  //яблоки груша апельсин
// alert( fruits.length );
 // Ответ: 4 так как переменные fruits and shoppingCart являются ссылками на один массив)


// Zadanie 20
//
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert(styles.shift());
// styles.unshift("Рэп", "Регги");


// Zadanie21
 //Вызов в контексте массива
// Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
// alert( this );
// })
// arr[2](); 
// arr.push добавляет в массив функцию имеющию индекс 2 и потом же вызывается в this передастся обновленный массивБ который выведется командой alert