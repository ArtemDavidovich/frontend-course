console.log('hello!')
console.log(4 * 4);
// const heading = document.querySelector('h1')
// heading.style.display = 'flex'
// console.log(heading)

// ! JavaScript basics:

// * объявление переменных

// объявляем переменную с помощью let - значение можно переписывать

let student;

student = 'Jury'
student = 'Natalia'

// * оператор typeof используется для проверки типа переменной

console.log(student);
console.log(typeof student);

// в JS мы можем присвоить переменной значение другого типа
student = 100 

console.log(student);
console.log(typeof student);

// ! * const

// константу нельзя объявить, не присвоив значение
const language = 'JavaScript'

// константе нельзя присвоить другое значение
// language = 'Python'

console.log(language);

// ! примитивные типы данных

// * 1 string - строка

// "" - двойные
// '' - одинарные
// `` - косые (backticks)

let planet = 'Earth'
planet = "Mercury"
planet = `Mars`

// * 2 number - число

let n1 = 42
let p = 3.14
let cold = -42

console.log(typeof p)

// существует специальное зарезервированное значение NaN
// NaN - Not a Number
// приходит ответом на некорректные математические операции

console.log(NaN)
console.log('тип NaN:', typeof NaN)

// * 3 boolean - булевое значение

let isStudent = true
let isBackend = false
let hasPet = true

// * 4 undefined - неопределенный тип данных

let nothing = undefined
let noValue

console.log(typeof nothing);
console.log(typeof noValue);

// * 5 null - ноль

let nothing1 = null

console.log(typeof nothing1);

// ! основные операторы

let v1 = 12 + 42
let v2 = 100 - 10
let v3 = 5 * 5
let v4 = 3 ** 3 // возведение в степень
let v5 = 14 % 3 // остаток от деления
let v6 = 9 / 4 

console.log(v6);

// * операторы сравнения 

// > - больше
// < - меньше 
// >= - больше или равно
// <= - меньше или равно
// === - строгое равенство (рекомендуется к использованию)
// == - не строгое равенство с приведением типов (строка может оказаться равной числу)

console.log(25 == '25');

// * приведение типов

// мы можем привести число к строке через String()
let num1 = String(25)
console.log(num1 === '25')

// мы можем привести строку к числу через Number
let string1 = '100'
console.log(string1 === 100);
//string1 = Number('100')
console.log(Number(string1) === 100);

string2 = '200$'
//если среди символов строки встретится непереводимый в число символ, то вам вернется NaN, если использовать Number
console.log(Number(string2));


console.log(parseInt(string2));










