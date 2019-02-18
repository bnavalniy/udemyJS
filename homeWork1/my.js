'use strict';
let money = prompt("Ваш бюджет на месяц?", "");
console.log("Ваш бюджет на месяц:" + money);

let date = prompt("Введите дату в формате YYYY-MM-DD", "");
console.log("датa:" + date);

let appData = {
    budget: money,
    timeData: date,
    expenses: {},
    optinalExpeness: {},
    income: [],
    saving: false
};

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("“Во сколько обойдется?", "");
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//         a != '' && b != '') {
//         appData.expenses[a] = b;
//         console.log("Done");
//     } else {
//         console.log("Wrong Input");
//         i--;
//     }
// }

let i = 0;
while (i != 2 || i < 0) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("“Во сколько обойдется?", "");
    if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
        a != '' && b != '') {
        appData.expenses[a] = b;
        console.log("Done");
        i++;
        console.log("i=" + i);
    } else {
        console.log("Wrong Input");
        i--;
        console.log("i=" + i);
    }
}

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("“Во сколько обойдется?", "");
//     if (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null &&
//         a != '' && b != '') {
//         appData.expenses[a] = b;
//         console.log("Done");
//         i++;
//         console.log("i=" + i);
//     } else {
//         console.log("Wrong Input");
//         i = 0;
//         console.log("i=" + i);
//     }
// }
// while (i != 2 || i == 0);

//alert(appData.budget / 30);