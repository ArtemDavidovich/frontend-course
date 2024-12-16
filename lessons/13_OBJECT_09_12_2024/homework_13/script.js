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

const showAccounts = document.getElementById("showButtons"); // access to div with show buttons
const accountsList = document.getElementById("accountList"); // access to List <ol>

function updateAccountList(filterClass) {
  const sectionShow = document.getElementById("show");  

  if (bank.length > 0) {
    sectionShow.classList.remove("hidden");
  } else {
    alert("There are no created accounts yet.");
    return;
  }

  accountsList.innerHTML = ""; // Очистка списка перед обновлением

  // Фильтрация аккаунтов
  bank.forEach((account, index) => {
    if (
      filterClass === "showAll" ||
      (filterClass === "showOverThousand" && account.balance >= 1000) ||
      (filterClass === "showUnderThousand" && account.balance < 1000)
    ) {
      printAccount(account, index);
    }
  });
}

function printAccount(account, index) {
  accountsList.innerHTML += `<div class="accountLine"><li>ID: ${account.accountNumber}; Name: ${
    account.accountHolderName
  }; Balance: ${account.balance}</li>
  <div class="accountLineButtons">
    <button class="editButton" data-index="${index}">Edit</button>
    <button class="deleteButton" data-index="${index}">Delete</button></div></div>`;
  //data-index helps to reach each definite line. we can call it with element.dataset.index
}

showAccounts.onclick = function (event) {
  if (event.target.classList.contains("showAll")) {
    updateAccountList("showAll");
  } else if (event.target.classList.contains("showOverThousand")) {
    updateAccountList("showOverThousand");
  } else if (event.target.classList.contains("showUnderThousand")) {
    updateAccountList("showUnderThousand");
  }
};

accountsList.onclick = function (event) {
  //also possible to create a variable for event.target
  // const button = event.target

  if (event.target.classList.contains("deleteButton")) {
    const accountIndex = Number(event.target.dataset.index);

    const deleteConfirm = confirm("Do you really want to delete this account?")

    if(deleteConfirm){

    // Remove the account from the bank array
    bank.splice(accountIndex, 1);

    // Remove the corresponding line from the DOM
    const accountLine = event.target.parentElement;
    accountLine.remove();

    updateAccountList("showAll")
    }
  }

  if (event.target.classList.contains("editButton")) {
    const accountIndex = Number(event.target.dataset.index);

    const newAccountHolderName = prompt(
      "Enter corrected account holder Name:"
    );

    if (newAccountHolderName) {
      bank[accountIndex].accountHolderName = newAccountHolderName;
    } else if (newAccountHolderName === null) {
    } else {
      alert("Error! You've entered invalid Name. Enter valid Name.");
    }

    updateAccountList("showAll") 
  }
};

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

  const accountFind = bank.find((e) => e.accountNumber === accountId);

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

  updateAccountList("showAll")  
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
