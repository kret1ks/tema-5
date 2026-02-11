import { alert, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


// Створити елементи для відображення повідомлення про стан гри та поточної клавіші, яку потрібно натиснути.
// Створити масив keys, що містить десять можливих клавіш, які можуть бути натиснуті.
// Створити змінну currentKeyIndex, що зберігає індекс поточної клавіші, яку потрібно натиснути.
// Встановити текст елементу з id="key" на поточну клавішу, яку потрібно натиснути.
// Створити обробник події keydown, що перевіряє, чи була натиснута правильна клавіша. Якщо була натиснута правильна клавіша, то збільшити currentKeyIndex на 1, встановити нову поточну клавішу та оновити текст елементу з id="key". Вивести повідомлення про помилку використовуючи бібліотеку pnotifyю
// Якщо була натиснута неправильна клавіша, то повідомити користувача про помилку, використовуючи бібліотеку pnotify
// Створити обробник події keypress, що запобігає дії за замовчуванням для уникнення несподіваного поведінки сторінки під час гри.
// Додати кнопку "Нова гра", що оновлює гру з новим поточним ключем та повідомленням, використовуючи бібліотеку pnotify

const divRef = document.querySelector(".game")
const keys = ["a", "b", "c", "d", "c", "n", "m", "k", "p", "q"]  
let currentKeyIndex = Math.floor((Math.random() * (keys.length-1 -1) +1))
divRef.textContent = keys[currentKeyIndex]
// Math.floor(Math.random() * (max - min + 1)) + min;
window.addEventListener("keydown", () => {
    if(event.key === divRef.textContent) {
       success({    
        title: 'Success!',
        text: 'ви натиснули правильну літеру',
        delay: 700
});
currentKeyIndex = Math.floor((Math.random() * (keys.length-1 -1) +1))
divRef.textContent = keys[currentKeyIndex]
} else{
  error({
  title: 'Uh Oh!',
  text: 'ви натиснули на неправильну клавішу',
  delay: 700
});
    }
  
})