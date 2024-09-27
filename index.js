alert("Task1");

const bankAccount = {
  ownerName: "Capybara",
  accountNumber: 12345,
  balance: 1000,

  deposit(sumDeposit) {
    this.balance += sumDeposit;
  },

  withdraw(sumWithdraw) {
    this.balance += sumWithdraw;
  },
};
let reapete;
do {
  const choice = confirm(
    "Якщо хочете поповнити рахунок - натиснить 'Ok', якщо хочете зняти з рахунку - натиснить 'Cansel'"
  );
  if (choice === true) {
    const sumDeposit = Number(
      prompt("Введіть суму, на яку хочете поповнити баланс")
    );
    bankAccount.deposit(sumDeposit);
  } else {
    const sumWithdraw = Number(
      prompt("Введіть суму, яку хочете зняти з баланс")
    );
    bankAccount.withdraw(sumWithdraw);
  }
  reapete = confirm("Чи хочети ви ще поповнити чи зняти з рахунку?");
} while (reapete === true);

console.log(bankAccount.balance);

///////////////////////////////////////////////////////////////////////////

alert("Task2");
let message;

const weather = {
  temperature: 24,
  humidity: 38,
  windSpeed: 2,

  checkTemperature(temp) {
    if (temp < 0) {
      message = "Температура нижче 0 градусів Цельсія";
    } else {
      message = "Температура вище або дорівнює 0 градусів Цельсія";
    }
    return message;
  },
};
do {
  const temp = Number(prompt("Введіть бажану температуру"));
  alert(weather.checkTemperature(temp));
  reapete = confirm("Чи хочети ви змінити темперетуру");
} while (reapete === true);

///////////////////////////////////////////////////////////////////////////

alert("Task3");

const user = {
  name: "Capybara",
  email: "capybara.love@gmail.com",
  password: "12345678",
  login(email, password) {
    if (email !== "capybara.love@gmail.com") {
      return "Ви ввели неправильну пошту";
    }
    if (password !== "12345678") {
      return "Ви ввели неправильний пароль";
    }
    return "Ви вели все правильно, ви молодці";
  },
};
let email;
let password;
do {
  email = prompt("Введіть свою пошту");
  password = prompt("Введіть свій пароль");
  alert(user.login(email, password));
  if (user.login(email, password) === "Ви вели все правильно, ви молодці") {
    reapete = false;
  } else {
    const choice = confirm("Чи хочете ви спробувати ще раз увійти в акаунт");
    if (choice === true) {
      reapete = true;
    } else {
      reapete = false;
    }
  }
} while (reapete === true);

///////////////////////////////////////////////////////////////////////////

alert("Task4");

const movie = {
  title: "Гаррі Поттер",
  director: "Кріс Коламбус",
  year: 2001,
  rating: 8.4,

  cheskRating(rating) {
    if (rating > 8) {
      return true;
    } else {
      return false;
    }
  },
};

if (movie.cheskRating(movie.rating) === true) {
  alert("Ви сміливо можете дивитися цей фільм");
} else {
  alert("Я б на вашому місці подумала чи не обрати інший фільм");
}

alert(
  `Дані про фільм: назва - ${movie.title}, режисер - ${movie.director}, рік - ${movie.year}, рейтинг - ${movie.rating}`
);
