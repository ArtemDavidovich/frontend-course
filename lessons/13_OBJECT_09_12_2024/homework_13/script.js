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
        this.balance = this.balance - sum
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

// checking 'withdraw' function
bankAccount.withdraw(150)
bankAccount.checkBalance()