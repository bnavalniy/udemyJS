'use strict';
let money = prompt("Ваш бюджет на месяц?","");
console.log("Ваш бюджет на месяц:" + money);

let date = prompt("Введите дату в формате YYYY-MM-DD","");
console.log("датa:" + date);

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optinalExpeness: {},
    income: [],
    saving: false
};

let ex1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    ex2 = prompt("“Во сколько обойдется?", ""),
    ex3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    ex4 = prompt("“Во сколько обойдется?", "");

appData.expenses.ex1 = ex2;
appData.expenses.ex3 = ex4;
console.log(appData.expenses);

alert(appData.budget / 30);