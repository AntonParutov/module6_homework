// Задание 3.  Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

let a = +prompt("введите первое число");
let b = +prompt("введите второе число");

function getNum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(getNum(a)(b));
