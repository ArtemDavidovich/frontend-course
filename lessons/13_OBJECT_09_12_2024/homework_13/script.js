// Создать объект bankAccount, который:
/*
    1. accountNumber: "123456789"
    2. accountHolderName: "Alice"
    3. balance: 0

    4. deposit(sum) {
        TODO Пополнение счета
    }

    5. withdraw(sum) {
        TODO снятие со счета
    }

    checkBalance() {
        TODO Просмотр баланса счета
    }
*/

const bankAccount = {
    accountNumber: "123456789",
    accountHolderName: "Alice",
    balance: 0,
    deposit(sum){
        if(sum > 0){
        this.balance += sum
        alert(`Current balance: ${this.balance}`)
        }
    },
    withdraw(sum){
        if(sum <= this.balance && sum > 0){
            this.balance -= sum
            alert(`Current balance: ${this.balance}`)
        } else {
            alert('Not enough funds. Please, insert valid amount.')
        }
    },
    checkBalance(){
        alert(`Current balance: ${this.balance}`)
    }
}

// Уведомление пользователя
// alert("Привет из модального окна")

// Подтверждение/Отказ от пользователя (Boolean)
// let answer = confirm("Хотите закрыть страницу?")
// console.log(answer)

// Ответ от пользователя (String | null)
// answer = prompt("Введите ваше имя:")
// console.log(answer)
const bank = []

function createAccount() {
    const nameInput = document.getElementById('name')
    const name = nameInput.value.trim()

    // falsy: null, '', 0, undefined, NaN
    if(name ){
        bank.push({
            ...bankAccount,
            accountNumber: bank.length + 1,
            accountHolderName: name
        })
        alert('Account successfully created')
    } else {
        alert('Invalid input. Please, enter a valid name.')
    }

    nameInput.value = ''
    console.log(bank)
}

function showAccounts(){
    // removing 'hidden' class to show up the section 'show' with all bank accounts
    const sectionShow = document.getElementById('show')
    sectionShow.classList.remove('hidden')

    const accountsList = document.getElementById('accountList')

    accountsList.innerHTML = ''
    
    bank.forEach(account => {
        const li = document.createElement('li')
        li.textContent = `Name: ${account.accountHolderName}; Balance: ${account.balance}`
        accountsList.append(li)
    });
}