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
};

bankAccount.deposit = function (sum) {
  if (sum > 0) {
    this.balance += sum;
    alert(`Current balance: ${this.balance}`);
  }
};

bankAccount.withdraw = function (sum) {
  if (sum <= this.balance && sum > 0) {
    this.balance -= sum;
    alert(`Current balance: ${this.balance}`);
  } else {
    alert("Not enough funds. Please, insert valid amount.");
  }
};

bankAccount.checkBalance = function () {
  alert(`Current balance: ${this.balance}`);
};

bankAccount.delete = function () {
  this.bankAccount.splice();
};

// ! Уведомление пользователя
// alert("Привет из модального окна")

// ! Подтверждение/Отказ от пользователя (Boolean)
// let answer = confirm("Хотите закрыть страницу?")
// console.log(answer)

// ! Ответ от пользователя (String | null)
// answer = prompt("Введите ваше имя:")
// console.log(answer)

const bank = [];

function createAccount() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  // falsy: null, '', 0, undefined, NaN
  if (name) {
    bank.push({
      ...bankAccount,
      accountNumber: bank.length + 1,
      accountHolderName: name,
    });
    alert("Account successfully created");
  } else {
    alert("Invalid input. Please, enter a valid name.");
  }

  nameInput.value = "";
  console.log(bank);
}

function showAccounts() {
  // removing 'hidden' class to show up the section 'show' with all bank accounts
  const sectionShow = document.getElementById("show");
  sectionShow.classList.remove("hidden");

  const accountsList = document.getElementById("accountList");

  // cleaning the list before each iteration (not to make duplicates)
  accountsList.innerHTML = "";

  // (_, index) - if we don't need the element, only its index
  bank.forEach((account, index) => {
    accountsList.innerHTML += `<div class="accountLine"><li>${index + 1}. ID: ${
      account.accountNumber
    }; Name: ${account.accountHolderName}; Balance: ${account.balance}</li>
      <div class="accountLineButtons">
        <button class="editButton">Edit</button>
        <button class="deleteButton">Delete</button></div></div>`;

    accountsList.onclick = function (event) {
      if (event.target.classList.contains("deleteButton")) {
        // Remove the account from the bank array
        bank.splice(index, 1);

        // Remove the corresponding line from the DOM
        const accountLine = event.target.parentElement;
        accountLine.remove();

        showAccounts();
      }

      if (event.target.classList.contains("editButton")) {
        const newAccountHolderName = prompt(
          "Enter corrected account holder Name:"
        );

        if(newAccountHolderName){
          account.accountHolderName = newAccountHolderName
        } else if(newAccountHolderName === null){
          
        }
        else {
          alert("Error! You've entered invalid Name. Enter valid Name.")
        }
        
        showAccounts();
      }
    };    
  });
}

const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");

deposit.onclick = function () {
  operation("deposit");
};

withdraw.onclick = function () {
  operation("withdraw");
};

function operation(operator) {
  const accountIdInput = document.getElementById("accountId");
  const accountId = Number(accountIdInput.value.trim());

  const amountInput = document.getElementById("amount");
  const amount = Number(amountInput.value.trim());

  const accountFind = bank.find(
    (e) => e.accountNumber.toString() === accountId
  );

  if (accountFind) {
    if (operator === "deposit") {
      accountFind.deposit(amount);
    } else {
      accountFind.withdraw(amount);
    }
  } else {
    alert("Account not found");
  }

  accountIdInput.value = "";
  amountInput.value = "";

  showAccounts();
}

// deposit.onclick = function () {
//   const accountIdInput = document.getElementById("accountId");
//   const accountId = Number(accountIdInput.value.trim());

//   const amountInput = document.getElementById("amount");
//   const amount = Number(amountInput.value.trim());

//   bank.forEach((account) => {
//     if (account.accountNumber === accountId) {
//       account.deposit(amount);
//     }
//   });

//   const accountFind = bank.find(account => account.accountNumber === accountId)

//   accountIdInput.value = "";
//   amountInput.value = "";

//   showAccounts();
// };

// withdraw.onclick = function () {
//   const accountIdInput = document.getElementById("accountId");
//   const accountId = Number(accountIdInput.value.trim());

//   const amountInput = document.getElementById("amount");
//   const amount = Number(amountInput.value.trim());

//   bank.forEach((account) => {
//     if (account.accountNumber === accountId) {
//       account.withdraw(amount);
//     }
//   });

//   accountIdInput.value = "";
//   amountInput.value = "";

//   showAccounts();
// };

// DRY (Don't repeat yourself)

// const answer = prompt("Введите Ваше имя");
// if (typeof answer === "string") {
//   String
// }
// if (answer) {
//   String (кроме пустой строки)
// }

// function plus(a, b) {
//   calculator(5, 10, "+");
// }

// function minus() {
//   calculator(5, 10, "-");
// }

// function multiply() {
//   calculator(5, 10, "*");
// }

// function division() {
//   calculator(5, 10, "/");
// }

// function calculator(a, b, operator) {
//   if (operator === '+') {
//     return a + b;
//   }
//   if (operator === '-') {
//     return a - b;
//   }
//   if (operator === '*') {
//     return a * b;
//   }
//   if (operator === '/') {
//     return a / b;
//   }
// }

// undefined
// console.log(calculator(5, 10, "+"));
// console.log(calculator(5, 10, "-"));
// calculator(5, 10, "*");
// calculator(5, 10, "/");
