// Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.
let result;
const sup = (x, n) => {
  if (x >= 1 && n >= 1) {
    result = Math.pow(x, n);
  } else {
    console.log("Числа не натуральные");
  }
};
sup(+prompt("Введите основание:"), +prompt("Введите показатель степени:"));
console.log(result);
