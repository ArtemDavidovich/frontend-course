// Задание 1
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const names = ["Мария", "Алексей", "Елена", "Дмитрий"]

// поверхностное копирование
// let namesCopy = names

// глубокое копирование

const ages = [22, 31, 45, 53]

let people = []

for(i = 0; i < names.length; i++) {
    people.push(`${names[i]} ${ages[i]} лет/годов`) // шаблонная строка
    // people.push(names[i] + " " + ages[i] + " лет/годов") //конкатенация
}

console.log("--------Задание 1--------")
console.log(people)

// Задание 2
// Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

let reversePeople = people.reverse()

console.log("--------Задание 2--------")
console.log(reversePeople)

// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия". Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль.

const countries = []

countries.push("Франция", "Германия", "Италия")

let lastElementCountries = countries.pop()

countries.unshift(lastElementCountries)

console.log("--------Задание 3--------")
console.log(countries)

// Задание 4
// Создайте массив с числами 1, 2, 3, 4, 5. Используя цикл for:

// Умножьте каждый элемент на 2 и выведите результат в консоль.
// Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
// Выведите оба массива (исходный и новый) в консоль.

console.log("--------Задание 4--------")

let numbers = [1, 2, 3, 4, 5]
let squares = []

for (const i in numbers) {
    console.log(numbers[i] * 2)
    squares.push(numbers[i] * numbers [i])
}

// for (let i = 0; i < numbers.length; i++){    
//    console.log(numbers[i] * 2)    
// }

// for(i = 0; i < numbers.length; i++){
//     squares[i] = numbers[i] ** 2
// }

console.log("Исходный массив:", numbers)

console.log("Новый массив:", squares)
