//zadanie: 1
/*
let name = "Alexandr";
let admin = name;

alert(admin);
*/

//zadanie: 2
/*
const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы? - Ответ: Нет (Константы с использованием зашлавных букв пишеться для трудно запоминаймых значений таких как (COLOR_GREEN = "..."))
const AGE = someCode(BIRTHDAY); // а здесь? - Ответ:
//(Константы с использованием зашлавных букв пишеться для трудно запоминаймых значений таких как (COLOR_GREEN = "..."))
*/

//zadanie 3
/*
let name = "Ilya";
alert( `hello ${1}` ); // 1
alert( `hello ${"name"}` ); // name
alert( `hello ${name}` ); // Ilya
*/

//zadanie 4

/*
"" + 1 + 0 // 10
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2

"2" * "3" //6
4 + 5 + "px"//9px
"$" + 4 + 5//$45
"4" - 2//2
"4px" - 2// NaN
7 / 0 // Infinity
" -9 " + 5// -9 5
" -9 " - 5// -14
null + 1 // 1
undefined + 1// NaN
 */

//zadanie 5

/*
let a = 1, b = 1;
let c = ++a; // a = 2, c = 2
let d = b++; // b = 2, d = 1
*/

//zadanie 6

/*
let a = 2;
let x = 1 + (a *= 2);
// a = 4; x = 5.
*/

//zadanie 7


/*
5 > 4 // true
"ананас" > "яблоко"// false
"2" > "12"// true
undefined == null// true
undefined === null//false
null == "\n0\n"//false
null === +"\n0\n"//false
 */

//zadanie 8

/*
let firstname = prompt("Введите ваше имя");
let username = firstname;
alert(username);
*/

//zadanie 9

/*
//Выведется ли alert? - Да
if ("0") {
    alert( 'Привет' );
}
 */

//zadanie 10

/*
let quation = prompt("What's the 'официальное название' Javascript?");
if (quation == "ECMAScript"){
    alert(' Правильно! ');
}
else{
    alert(' You don`t know? ')
    alert("ECMAScript!")
}
*/


// Задание 11
/*
let value = prompt('Введите число', 0);

if (value > 0) {
    alert( 1 );
} else if (value < 0) {
    alert( -1 );
} else {
    alert( 0 );
}
*/

// Задание 12
/*
alert( null || 2 || undefined ); //2
*/

// Задание 13
/*
alert( alert(1) || 2 || alert(3) ); //1
 */

// Задание 14
/*
alert( 1 && null && 2 ); // null
 */

// Задание 15
/*
alert( alert(1) && alert(2) ); //1
 */

// Задание 16
/*
alert( null || 2 && 3 || 4 ); //3
 */

//Задание 17
/*
if (age >=14 && age <=90)
 */

// Задание 18
/*
//вариант1
if (age < 14 || age > 90)
//вариант2
if (!(age >= 14 && age <= 90))
 */


//Задание 19
/*
if (-1 || 0) alert( 'first' );  // alert выполняется
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
 */

// Задание 20
/*
let userName = prompt("Who's there?", '');

if (userName == 'Админ') {

    let pass = prompt('Пароль?', '');

    if (pass == 'Я главный') {
        alert( 'Здравствуйте!' );
    } else if (pass == '' || pass == null) {
        alert( 'Отменено' );
    } else {
        alert( 'Неверный пароль' );
    }

} else if (userName == '' || userName == null) {
    alert( 'Отменено' );
} else {
    alert( "I don't know you" );
}

 */

//Задание 21
/*
const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
    case 0:
        alert('Вы ввели число 0');
        break;
    case 1:
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break;
}

 */

//Задание 22
/*
let number = prompt ("Введите число");
if (number >= 0)  {
    alert(++number);

}
else if (number < 0){
    alert (number);
}

 */
// Задание 23
/*
let number = prompt ("Введите число");
if (number >= 0)  {
    alert(++number);

}
else if (number < 0){
    alert (number -= 2);
}

 */


// Задание 24

/*
    let number = prompt ("Введите число");
    if (number > 0)  {
        alert(++number);

    }
    else if (number < 0){
        alert (number -= 2);
    }
    else if (number = 0) {
        alert (number += 10);
    }


 */
    //zadanie 25
/*
    let number_a = prompt("Введите первое число)");
    let number_b = prompt("Введите второе число)");
    let number_c = prompt("Введите третье число)");

    if (number_a >= 0 && number_b >= 0 && number_c >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 3);
    }
    else if (number_a >= 0 && number_b >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
    }
    else if (number_b >= 0 && number_c >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
    }
    else if (number_a >= 0 && number_c >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
    }
    else if (number_a >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
    }
    else if (number_b >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
    }
    else if (number_c >= 0){
        alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
    }
    else{
        alert("Положительных чисел нет")
    }

 */

//zadanie 26

/*
let number_a = prompt("Введите первое число)");
    let number_b = prompt("Введите второе число)");
    let number_c = prompt("Введите третье число)");


     if (number_a >= 0 && number_b >= 0 && number_c >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 3);
     } else if (number_a >= 0 && number_b >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
     } else if (number_b >= 0 && number_c >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
     } else if (number_a >= 0 && number_c >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 2);
     } else if (number_a >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
     } else if (number_b >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
     } else if (number_c >= 0) {
         alert("Количество положительных чисел" + ' ' + '=' + ' ' + 1);
     }

        if (number_a < 0 && number_b < 0 && number_c < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 3);
        } else if (number_a < 0 && number_b < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 2);
        } else if (number_b < 0 && number_c < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 2);
        } else if (number_a < 0 && number_c < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 2);
        } else if (number_a < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 1);
        } else if (number_b < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 1);
        } else if (number_c < 0) {
            alert("Количество отрецательных чисел" + ' ' + '=' + ' ' + 1);
    }

 */


//zadanie 27
/*
let a = prompt("Введите число");
let b = prompt("Введите число");
if (a > b)
{
    alert(a);
} else if (a < b)
{
    alert(b);
} else
{
    alert('Числа одинаковые');
}

 */

//zadanie 28
/*
let a = prompt("Введите число");
let b = prompt("Введите число");
if (a > b)
{
    alert(a);
    alert(b);
} else if (a < b)
{
    alert(b);
    alert(a);
} else
{
    alert('Числа одинаковые');
}

 */

//zadanie 29
/*
let A = 3;
let B = 5;
A = A + B;
B = A - B;
A = A - B;
alert(A);
alert(B);
*/


//zadanie 30
/*
let A = 3;
let B = 5;
if (A !== B)
{
    A = A + B;
    B = A - B + B;
} else if (A == B)
{
    A = 0;
    B = 0;
}
alert(A);
alert(B);

 */
//zadanie 31

/*
let a = 5;
let b = 5;
if (a !== b)
{
    if (a > b)
    {
        alert(a);
    } else if (b > a)
    {
        alert(b);
    }
} else if (a == b)
{
    a = 0;
    b = 0;
}
alert(a);
alert(b);

 */
//zadanie 32
/*
let a = prompt("Введите число");
let b = prompt("Введите число");
let c = prompt("Введите число");
if (a < b && a < c)
{
    alert(a);
} else if (a > b && b < c)
{
    alert(b);
} else if (a > c && b > c)
{
    alert(c);
}

 */

//zadanie 33
/*
let a = prompt("Введите число");
let b = prompt("Введите число");
let c = prompt("Введите число");
if (a > b && a < c)
{
    alert(a);
} else if (b < a && b > c)
{
    alert(b);
} else if (c > a && c < b)
{
    alert(c);
}

 */

//zadanie 34

/*
let a = prompt("Введите число A");
let b = prompt("Введите число B");;
let c = prompt("Введите число C");;
if (a < b && a < c)
{
    alert(c);
} else if (b < a && b < c)
{
    alert(b);
} else if (c < a && c < b)
{
    alert(c);
}
if (a > b && a > c)
{
    alert(a);
} else if (b > a && b > c)
{
    alert(b);
} else if (c > a && c > b)
{
    alert(c);
}

 */

// zadanie 35

/*
let a = prompt("Введите число A");
let b = prompt("Введите число B");;
let c = prompt("Введите число C");;
if (a > b && a > c)
{
   sum1 = a;
} else if (b > a && b > c)
{
    sum1 = b;
} else if (c > a && c > b)
{
    sum1 = c;
}
if (a > b && a < c)
{
  sum2 = a;
} else if (b < a && b > c)
{
    sum2 = b;
} else if (c > a && c < b)
{
    sum2 = c;
}
alert((sum1 * 1) + (sum2 * 1));

 */

//zadanie 36

/*
let a = prompt("Введите значение переменной A");
let b = prompt("Введите значение переменной B");;
let c = prompt("Введите значение переменной C");;
if (a == b && c !== a)
{
    alert(c);
}
else if (b == c && a !== b)
{
    alert(a);
}
else if (a == c && b !== a)
{
    alert(b);
}

 */
