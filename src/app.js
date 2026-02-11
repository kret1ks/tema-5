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








///////////////////////////////////////////////////////////////////////////////////////

import Chart from 'chart.js/auto';

const grapRef = document.querySelector(".graphic")

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
    
  ],
  
};

const config = {
  type: 'line',
  data: chartData,
};

const salesChart = new Chart(grapRef, config);

// new Chart(grapRef, chartData)