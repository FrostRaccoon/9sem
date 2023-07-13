/*
При клике на кнопку отправить нужно проверить, выбран ли активным элемент 
checkbox, если элемент не выбран, необходимо добавить текст под чекбоксом 
“Необходимо согласиться с условиями”.
 */
// const btnEl = document.querySelector(`.submit`);
// const checkboxEl = document.querySelector(`#agree_checkbox`);
// const errorEl = document.querySelector(`.error`);
// btnEl.addEventListener("click", () => {
//   if (!checkboxEl.checked) {
//     errorEl.textContent = `Необходимо согласиться с условиями`
//   }
// });

// ```html
// <h1>Выбери свою судьбу, Нео:</h1>
// <div class="choose_destiny">
//   <input class="pill" type="radio" name="color" id="red_pill" value="red">
//   <label for="red_pill">Красная таблетка</label>

//   <input class="pill" type="radio" name="color" id="blue_pill" value="blue">
//   <label for="blue_pill">Синяя таблетка</label>

//   <button class="submit" disabled>Выбрать</button>
// </div>
// ```
/*
Как только пользователь сделает выбор в пользу одного из вариантов, необходимо 
разблокировать кнопку.
При клике на кнопку написать в alert одно из сообщений:
В случае выбора красной таблетки: "Простите, красные таблетки закончились."
В случае выбора синей таблетки: "Мы и не сомневались в вашем выборе."
*/
// const divEl = document.querySelector(`.choose_destiny`);
// const btnEl = document.querySelector(`.submit`);
// const redPillEl = document.querySelector(`#red_pill`);
// const bluePillEl = document.querySelector(`#blue_pill`);
// console.log(redPillEl);

// divEl.addEventListener("click", (event) => {
//   if (event.target.classList.contains(`pill`)) {
//     btnEl.removeAttribute(`disabled`);
//   }
// });
// btnEl.addEventListener("click", () => {
//   if (redPillEl.checked) {
//     console.log(`"Простите, красные таблетки закончились."`);
//   }
//   if (bluePillEl.checked) {
//     console.log(`"Мы и не сомневались в вашем выборе."`);
//   }
// });

/*
1. Создать поле для ввода пароля и кнопку отправить.
2. При вводе пароля, рамка поля должна окраситься в красный цвет, если введенный пароль менее 6 символов, иначе в зеленый цвет.
*/

// const inputEl = document.querySelector(`#password`);
// console.log(inputEl);

// inputEl.addEventListener("input", () => {
//   if (inputEl.value.length < 6) {
//     inputEl.style.border = "3px solid red";
//   } else {
//     inputEl.style.border = "3px solid green";
//   }
// });

/*
1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”.
2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менялся на введенный в поле ввода.
*/

const inputEl = document.querySelector(`#text`);
const h1El = document.querySelector(`.h1`);

inputEl.addEventListener("input", () => {
//   console.log(inputEl.value);

  h1El.textContent = inputEl.value;
});
