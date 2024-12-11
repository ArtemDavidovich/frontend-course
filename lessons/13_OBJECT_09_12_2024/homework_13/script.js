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

// Уведомление пользователя
// alert("Привет из модального окна")

// Подтверждение/Отказ от пользователя (Boolean)
// let answer = confirm("Хотите закрыть страницу?")
// console.log(answer)

// Ответ от пользователя (String | null)
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
    // const li = document.createElement('li')
    // li.textContent = `Name: ${account.accountHolderName}; Balance: ${account.balance}`
    // accountsList.append(li)

    accountsList.innerHTML += `<li>${index + 1}. ID: ${
      account.accountNumber
    }; Name: ${account.accountHolderName}; Balance: ${account.balance}</li>`;
  });
}

const withdraw = document.getElementById("withdraw");
const deposit = document.getElementById("deposit");

deposit.onclick = function () {
  const accountIdInput = document.getElementById("accountId");
  const accountId = Number(accountIdInput.value.trim());

  const amountInput = document.getElementById("amount");
  const amount = Number(amountInput.value.trim());

  bank.forEach((account) => {
    if (account.accountNumber === accountId) {
      account.deposit(amount);
    }
  });

  accountIdInput.value = "";
  amountInput.value = "";

  showAccounts();
};

withdraw.onclick = function () {
  const accountIdInput = document.getElementById("accountId");
  const accountId = Number(accountIdInput.value.trim());

  const amountInput = document.getElementById("amount");
  const amount = Number(amountInput.value.trim());

  bank.forEach((account) => {
    if (account.accountNumber === accountId) {
      account.withdraw(amount);
    }
  });

  accountIdInput.value = "";
  amountInput.value = "";

  showAccounts();
};
