let beginCount = document.getElementById("start"),
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
    start = document.querySelector("#start"),

    yearInput = document.querySelector(".year-value"),
    monthIput = document.querySelector(".month-value"),
    dayInput = document.querySelector(".day-value");

