//Делится ли число на 5, или на 3, или на 2 без остатка?
// const amount = prompt("Enter:");
// if (amount % 5 === 0){
//     alert("5");
// }else if (amount % 3 === 0){
//     alert("3");
// }else if (amount % 2 === 0){
//     alert("2");
// }else{
//     alert("Entered wrong!");
// }

//Вывести факториал запрошенного числа
// let result = 1;
// for (let caster = 1; caster <= 5; caster++){
//     result = result * caster;
// }
// console.log('result :>> ', result);


//Найти произведение целых чисел в пределах от lim1 до lim2 
// let lim1 = 6;
// let lim2 = 1;
// while (lim1 <= 12){
//     lim2 = lim2 * lim1;
//     lim1++;
// }
// console.log('lim2 :>> ', lim2);

//Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие.
// const isAdult = prompt('Enter your age:')
// const a = function(isAdalt){
//     if (isAdult < 18){
//     return 'false'
// }else {
//     return 'true'
//  }
// }
// console.log('isAdult :>> ', a(isAdult));

// Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе:
const checkMultiplicity = sum();
function sum(a, b){
    if (a % b === 0){
        return 'true'
    }else {
        return 'false'
    }
}
console.log('sum(5,8) :>> ', sum(5, 8));
console.log('sum(15, 5) :>> ', sum(15, 5));

//Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true если треугольник возможен и false если нет
const traingle = sum();

function sum(a, b, c){
    if (a + b > c && a + c > b && b + c > a){
        return 'true'
    }else {
        return 'false'
    }
    
}
console.log('sum :>> ', sum(5, 7, 8));

//Написать функции расчета площадей (поверхности) следующих фигур/тел: треугольника, прямоугольника (конуса, параллелепипеда)
const parallelepiped = piped();
/**
 * 
 * @param{number} a Длина
 * @param{number} b Ширина
 * @param{number} c Высота
 * @returns Площадь параллелепипеда
 */
function piped(a, b, c){
    return 2 * (a * b + a * c + b * c);
}
console.log('piped() :>> ', piped(12, 5, 20));