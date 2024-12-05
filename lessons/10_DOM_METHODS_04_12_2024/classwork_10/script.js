// сделали тест подключения
console.log("Hello js!");
// вывели в консоль глобальный объект document (более читаемый вид html структуры)
//console.log(document)
// вывели document в виде объекта со всеми вложенными свойствами (более строгий вид html структуры)
//console.dir(document)

// завели переменную и положили в нее результат поиска через querySelector тега h1
const text = document.querySelector("h1");
// изменил цвет элемента в оранжевый
text.style.color = "orange";
text.innerText = "Урок 10: DOM методы";
console.log(text);

// находим кнопку по id через обращение к символам #
const btnChange = document.querySelector("#btn-change");
const btnAdd = document.querySelector('#btn-add');

btnChange.addEventListener("click", () => {
  text.style.color = "violet";
  text.innerText = "Lesson 10: DOM methods 🏡";
});

btnAdd.addEventListener("click", () => {
    // создали новый элемент (но еще не добавили на страницу)
    let newElement = document.createElement('p')
    // изменили текст элемента
    newElement.innerText = 'Кажется, я начинаю понимать этот DOM..'
    // изменили цвет текста
    newElement.style.color = "forestgreen"
    // добавляем элемент на страницу
    // применяем метод append к родителю, в скобках передаем один элемент или несколько через запятую
    document.body.append(newElement)
    console.log(newElement)
})
