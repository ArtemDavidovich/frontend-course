console.log('Hello, arrays!')

// ! arrays
// сложный тип данных
// синтаксис массива включает квадратные скобки

let numbers = [1, 2, 3, 4, 5]
let fruits = ['orange', 'apple', 'banana']

// чтобы обратиться к элементу массива мы используем скобки
// индекс - это порядковый номер элемента в массиве, начинаются с 0
let item = fruits[0]

let secret = fruits[10]

// мы можем создавать массивы из разных типов данных
// но как правило это не нужно и неудобно
let arr1 = [1, false, undefined, 'strawberry']
console.log(arr1)

//выводим значение длинны массива
let length = arr1.length
console.log('длина массива arr1 ==>>>', length)

//обращение к последнему элементу
let lastElement = arr1[arr1.length - 1]
console.log('последний элемент массива arr1 ==>>>', lastElement)

// ! arrays methods: push(), pop()

// методы массивов можно разделить на две группы

// 1. Мутирующие - изменяют исходный массив
// 2. Не мутирующие - возвращают новый массив с измененными данными

// * push(), pop() - мутирующие методы 👨‍🔬

// push() - метод добавления элемента в конец массива
// в push() мы передаем новый элемент массива в круглых скобках
// возвращенное значение - длина измененного массива

// ! будьте осторожны с мутирующими методами!
// ! например, результат push(), если положить его в новую переменную
// ! это будет длина нового массива (а не сам массив) 

// let newArrLength = fruits.push('pineapple')

// console.log('вот что в newArrLength ==>>>', newArrLength)
// console.log(fruits)

// ! вызывайте метод и используйте измененные данные

fruits.push('pineapple')
console.log(fruits)

// pop() - метод удаления элемента из конца массива
// возвращенное значение - удаленный элемент

let lastFruit = fruits.pop()
console.log('удаленный элемент ==>>> ', lastFruit)
console.log('новый измененный массив ==>>> ', fruits)

// ! for loop - цикл for

for(let i = 0; i < fruits.length; i++){
    console.log('Элемент', i, fruits[i])
}

// ! while - цикл

let count = 0

while(count < 5){
    console.log(count)
    count++
}

let ccc = (fruits.length > 2) ? 9 : 5
console.log(ccc)

// ! методы работы со строками

// * длина строки - length

let planet = 'planet E Earth'

console.log('длина переменной planet ==>>> ', planet.length)

// * приведение строки к верхнему/нижнему регистру - toUpperCase() / toLowerCase()

console.log('верхний регистр ==>>> ', planet.toUpperCase())
console.log('нижний регистр ==>>> ', planet.toLowerCase())

// * получение подстроки
// мы можем обрезать исходную строку, указав два индекса
// начало подстроки включительно (левый индекс - да)
// конец подстроки не включительно (правый индекс - нет)

let substring = planet.substring(0, 6)
console.log('подстрока с 0 по 5 включительно ==>>> ',substring)

// console.log(planet.substring(0, 6))

// * поиск индекса подстроки

let indexOfPlanet = planet.indexOf('E')
console.log('индекс Earth ==>>> ', indexOfPlanet)

// ! сложные операции над числами с Math

// * случайное число от 0 до 1 (по дефолту)
let random = Math.random()

// * случайное число от 1 до 100
let randomFloor = (Math.random() * 99) + 1
console.log(randomFloor)

// * Math.floor - округление числа вниз
// * Math.ceil - округление числа вверх
//  случайное число от 0 до 100
let randomFloor1 = Math.floor((Math.random() * 100) + 1)
console.log(randomFloor1)

// ! методы shift(), unshift() для работы с массивами
// * мутирующие методы для работы с началом массива

let planets = ['Mars', 'Pluto', 'Venus', 'Saturn']

// shift() удаляет первый элемент из массива
// возвращенное значение - удаленный элемент

console.log(planets.shift())
console.log('planets, но без марса ==>>> ', planets)

// unshift() добавляет в начало массива новый элемент (заданный в скобках)
// возвращает длину нового массива

console.log(planets.unshift('Mercury'))
console.log('planets, но с меркурием ==>>>', planets)

