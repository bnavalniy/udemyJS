'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItems = document.getElementsByClassName('menu-item'),
    newMenuItem = document.createElement("li"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName('adv')[0],
    userPrompt = document.getElementById("prompt");

//  Восстановить порядок в меню
menu.insertBefore(menuItems[2], menuItems[1]);
//  добавить пятый пункт
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = "Пятый элемент";
menu.appendChild(newMenuItem);
//  Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
//  Поменять заголовок, добавить слово "подлинную"
title.textContent = "Мы продаем только подлинную технику Apple";
//Удалить рекламу со страницы
adv.remove();
//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

let yourOpinion = prompt("Your thinking about Apple?");
userPrompt.textContent = yourOpinion;
