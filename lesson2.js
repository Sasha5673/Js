/*
//zadanie 1
let i = 3;
while (i) {
   alert (i--);
}
Результат будет "1".Потому что i-- - это декремент, который уменьшает
значение на один, но, пока i не будет равно 0, условие будет истиной.
 */


//zadanie 2
/*


let a = prompt("Введите значение A");
let b = prompt("Введите значение B");
let c = prompt("Введите значение c");
if (a > b > c) {
    alert(a *= 2);
    alert(b *= 2);
    alert(c *= 2);
} else {
    alert(a /= -1);
    alert(b /= -1);
    alert(c /= -1);
}
*/

//zadanie 3
/*

let a = prompt("Введите значение A");
let b = prompt("Введите значение B");
let c = prompt("Введите значение C");
if (a > b > c || c > b > a) {
    alert(a *= 2);
    alert(b *= 2);
    alert(c *= 2);
} else {
    alert(a /= -1);
    alert(a /= -1);
    alert(a /= -1);
}

 */

//zadanie 4

/*
let a = prompt("Введите значение A");
let b = prompt("Введите значение B");
let c = prompt("Введите значение C");
if (a > b && b > c) {
    alert(b);
    alert(a-b);
}
else if (a > c && c > b) {
    alert(c);
    alert(a-c);
}
else {
    alert('Ошибка!');
}

 */

//zadanie 5

/*
let x = prompt("Введите координаты Х");
let y = prompt("ВВедите координаты Y");
if (x == 0 && y == 0) {
    alert(0);
}
else if (x == 0) {
    alert("OX: " + 1);
}
else if (y == 0) {
    alert("OY: " + 2);
}
else {
    alert(3);
}

 */

//zadanie 6

/*
let x = prompt("Введите координаты Х");
let y = prompt("Введите координаты Y");
if (x > 0 && y > 0) {
    alert('Первая четверть!');
}
else if (x < 0 && y > 0) {
    alert('Вторая четверть!');
}
else if (x < 0 && y < 0) {
    alert('Третья четверть!');
}
else if (x > 0 && y < 0) {
    alert('Четвёртая четверть!');
}

 */

//zadanie 7

/*
let x1 = prompt("Введите координаты x1");
let y1 = prompt("Введите координаты y1");
let x2 = prompt("Введите координаты x2");
let y2 = prompt("Введите координаты y2");
let x3 = prompt("Введите координаты x3");
let y3 = prompt("Введите координаты y3");
if (x1 == x3 && y1 == y2) {
    alert(`x4 = ${x2} and x4 = ${y3}`)
}

 */

//zadanie 8

/*
let year = +prompt("Ведите год");
if (year % 4 != 0) {
    alert('Дней в году 365');
} else if (year % 100 != 0) {
    alert('Дней в году 366');
} else if (year % 400 != 0) {
    alert('Дней в году 365');
} else {
    alert('Дней в году 366');
}

 */

//zadanie 9

/*
let num = +prompt("Введите число")
if (num == 0) {
    alert("нулевое число")
} else if (num > 0 && num % 2 == 0) {
    alert("положительное четное число");
} else if (num > 0 && num % 2 != 0) {
    alert("положительное нечетное число");
} else if (num < 0 && num % 2 == 0) {
    alert("отричательное четное число");
} else if (num < 0 && num % 2 != 0) {
    alert("отрицательное нечетное число");
}

 */

//zadanie 10


/*
let a = prompt("Введите любое число до 1000)");
if (a > 0 && a < 10 && a % 2 == 0) {
    alert('Чётное однозначное число');
}
else if (a > 0 && a < 10 && a % 2 !== 0) {
    alert('Нечётное однозначное число');
}
else if (a >= 10 && a < 100 && a % 2 == 0) {
    alert('Чётное двузначное число');
}
else if (a >= 10 && a < 100 && a % 2 !== 0) {
    alert('Нечётное двузначное число');
}
else if (a >= 100 && a < 999 && a % 2 == 0) {
    alert('Чётное трёхзначное число');
}
else if (a >= 100 && a <= 999 && a % 2 !== 0) {
    alert('Нечётное трёхзначное число');
}
else{
    alert("Error!!!");
}

 */
//zadanie 11
/*
    Префиксный вариант ++i:
    let i = 0;
    while (++i < 5)
        alert( i );
    Постфиксный вариант i++
    let i = 0;
    while (i++ < 5)
        alert( i );
В префиксном варианте последний вывод будет 4,а в постфиксном 5.

 */


//zadanie 12
/*
    Постфиксная форма:
    for (let i = 0; i < 5; i++)
    alert( i );
    Префиксная форма:
    for (let i = 0; i < 5; ++i)
    alert( i );
    Выведутся одинаковые значения

 */

//zadanie 13

/*
for (let i = 2; i <= 10; i++)
    if (i % 2 == 0) {
        alert(i);
    }

 */


//zadanie 14

/*
let i = 0;
    while (i < 3) {
        alert(`number ${i}!`);
        i++;

 */
//zadanie 15

/*
while (true) {
  let i = prompt("Введите число , больше 100")
    if (i === null) {
        break;
    } else if (i < 100) {
        alert("Попробуйте еще раз")
        continue;
    } else if (i >= 100) {
        alert(`Верно ваше число ${i}`);
        break;
    }
}

 */

//zadanie 16

/*
let num = 2;
let even_num;
while (num < 10) {
    even_num = false;
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            even_num = true;
        }
    }
    if (even_num !== true) {
        console.log(num);
    }
    num++;
}

 */

//zadanie 17

/*
let num1 = prompt('Введите первое число');
let num2 = prompt('Введите второе число');
alert(`Среднее арифметическое двух чисел ${num1} и ${num2}: ${(+num1 + +num2) / 2}`);

 */

//zadanie 18

/*
let num = prompt('Введите число');
alert(`Квадрат числа ${num} равен: ${num * num}`);

 */

//zadanie 19

/*
let a = prompt('Введите первое число -');
let b = prompt('Введите второе число -');
let c = prompt('Введите третье число -');
if (a > b && b > c) {
    alert(a - c);
} else if (a > c && c > b) {
    alert(a - b);
} else if (b > a && a > c) {
    alert(b - c);
} else if (c > a && a > b) {
    alert(c - b);
}

 */

//zadanie 20

/*
let a = prompt('Введите число');
if (a % 2 == 0) {
    alert('Число чётное');
} else if (a % 2 !== 0) {
    alert('Число нечётное');
}

 */

//zadanie 21

/*
let number = prompt('Введите число:');
alert(number.length)
alert(+number[0] + +number[1])

 */

//zadanie 22

/*
let con = +prompt('Для ковертации дюймов в см введите 1 ,для см в дюймы введите 2')
let nume = prompt('Введите число')
if (con == 1) {
    alert(`${nume} duim это ${nume * 2.54} см`)
} else if (con == 2) {
    alert(`${nume} см это ${nume / 2.54} duim`)
}

 */

//zadanie 23

/*
let nume = prompt('Введите трёхзначное число');
if (nume % 2 === 0) {
    alert(`Сумма цифр числа ${nume}: ${+nume[0] + +nume[1] + +nume[2]}`);
} else {
    alert(`Произведение цифр числа ${nume}: ${nume[0] * nume[1] * nume[2]}`);
}

 */

//zadanie 24

/*

let len1 = +prompt('Введите длинну 1')
let len2 = +prompt('Введите длинну 2')
let len3 = +prompt('Введите длинну 3')
if ((len1 + len2) > len3 || (len2 + len3) > len1 || (len3 + len2) > len1 || (len3 + len1) > len2) {
    alert('Треугольник может существовать')
} else {
    alert('Треугольник неможет существовать')
}

 */

//zadanie 25

/*
let x = 4;
let y = 9;
let R = 10;
let h = Math.sqrt((x * x) + (y * y));
if (h < R) {
    alert('Точка лежит внутри окружности.');
}
else if (h > R) {
    alert('Точка лежит вне окружности.');
}

 */

//zadanie 26

/*
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

 */

//zadanie 27
/*
Можно ли изменить объект, объявленный с помощью const?
const user = {
    name: "John"
};
user.name = "Pete"; // это будет работать?
Нет, константы нельзя перезаписывать.
 */

//zadanie 28

/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
alert(sum);

 */

//zadanie 29

/*
Этот цикл – бесконечный. Он никогда не завершится, почему?
    let i = 0;
while (i != 10) {
    i += 0.2;
    console.log(i)}

Число не будет равно десятой дробной части и будет крутить до безумия)))

 */