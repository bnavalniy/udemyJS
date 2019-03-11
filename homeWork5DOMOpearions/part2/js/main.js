'use strict';

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItems = document.getElementsByClassName("expenses-item"),
    expensesButton = document.getElementsByTagName("button")[0],
    
    confirmButton = document.getElementsByTagName("button")[1],
    calcButton =  document.getElementsByTagName("button")[2],

    optionalexpensesInptu = document.querySelectorAll(".optionalexpenses-item"),
    possibleIncome = document.querySelector("#income"),
    isSavingExist = document.querySelector("#savings"),
    sumInput = document.querySelector("#sum"),
    percentInput = document.querySelector("#percent"),

    yearInput = document.querySelector(".year-value"),
    monthIput = document.querySelector(".month-value"),
    dayInput = document.querySelector(".day-value");

let money, time;

startBtn.addEventListener( 'click', function() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;

    budgetValue.textContent = money.toFixed();
    yearInput.value = new Date(Date.parse(time)).getFullYear();
    monthIput.value = new Date(Date.parse(time)).getMonth() + 1;
    dayInput.value = new Date(Date.parse(time)).getDate();
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    choseExpeses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("“Во сколько обойдется?", "");
            if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
                a != '' && b != '') {
                appData.expenses[a] = b;
                console.log("Done");
            } else {
                console.log("Wrong Input");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на день составляет: " + appData.moneyPerDay + "евро.");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Бомж!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Обычный офисный гной!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Царь жизни!");
        } else {
            console.log("Error!");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    choseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function(itemMassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
        });
    }
};

for (const key in appData) {
    if (appData.hasOwnProperty(key)) {
        const element = appData[key];
        console.log("AppData includes such data: " + appData[key]);
    }
}

