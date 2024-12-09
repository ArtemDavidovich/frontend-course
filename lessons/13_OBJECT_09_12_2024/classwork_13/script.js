console.log('hello, objects!')

// object
// сложный тип данных
// синтаксис объекта включает фигурные скобки

// Объекты - это структура данных, состоящая из пар 'ключ - значение'

// пример объекта
let user = {
    name: 'John',
    age: 30,
    isAdmin: true
}

// 1. точечная нотация
console.log(user.name)

// 2. rdfkhfnyst скобки
console.log(user['name'])

console.log(user.salary)
// + '5000' -> 5000
// 'пять тысяч'

user.salary = 5000
console.log(user.salary)

user.age = 31

delete user.isAdmin
console.log(user)

for (const key in user) {
    console.log(`Ключ: ${key}, Значение равно: ${user[key]}`)
    // console.log(`Ключ: ${key}, Значение равно: ${user.key}`)
}

user.greet = function() {
    console.log(`Привет, меня зовут ${this.name} и мне ${this.age}`)   
}

user.greet()


//HW 

// Создать объект bankAccount, который:
/*
    1. accountNumber: "123456789"
    2. accountHolderName: "Alice"
    3. balance: 0

    4. deposit(sum) {
        // TODO Пополнение счета
    }

    5. withdraw(sum) {
        // TODO снятие со счета
    }

    checkBalance() {
        // TODO Просмотр баланса счета
    }
*/