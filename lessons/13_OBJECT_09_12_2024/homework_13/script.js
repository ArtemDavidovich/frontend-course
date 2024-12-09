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
        this.balance = this.balance + sum
    },
    withdraw(sum){
        if(sum <= this.balance){
            this.balance = this.balance - sum
        } else {
            console.log('Not enough funds. Please, insert valid amount.')
        }
    },
    checkBalance(){
        console.log(`Current balance: ${this.balance}`)
    }
}

// checking 'checkBalance' function
bankAccount.checkBalance()

// checking 'deposit' function
bankAccount.deposit(300)
bankAccount.checkBalance()

// checking 'withdraw' function with valid amount
bankAccount.withdraw(150)
bankAccount.checkBalance()

// checking 'withdraw' function with invalid amount
bankAccount.withdraw(200)
