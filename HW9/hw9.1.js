// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
let f1 = document.forms.f1;
let info = document.getElementById('info')
f1.onsubmit = function (e) {
    e.preventDefault();
    let username = f1.username.value;
    let surname = f1.surname.value;
    let age = f1.age.value;
    info.innerHTML = `${username} ${surname} ${age}`
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let couter = document.getElementById('couter')
let number = JSON.parse(localStorage.getItem('number')) || 0
number +=1
localStorage.setItem('number', number)
couter.innerText = number

// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю
// інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру
// під кожну сессію
let dateTime = new Date
let sessions =  JSON.parse(localStorage.getItem('sessions')) || []
sessions.push(dateTime.toString())
localStorage.setItem('sessions', JSON.stringify(sessions))
// let dateTime = new Date();
// let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
// sessions.push(dateTime);
// localStorage.setItem('sessions', JSON.stringify(sessions));
// Код який вище закоментований - мій перший код і до нього питання
// я не розумію чому без '.toString()' час в локальному сховищі зберігається в форматі:
// '2024-05-28T12:32:34.491Z'
// а не в форматі
// 'Tue May 28 2024 15:33:43 GMT+0300 (GMT+03:00)'
// не розумію за якою логікою отримується такий (перший) формат

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push(`text${i + 1}`);
}
console.log(arr)
let arr10 = document.getElementById('arr10')
let a = 0
let b = 10

function Output (start,end) {
    arr10.innerText = ` `;
    for (start; start < end; start++) {
            arr10.innerHTML += `${arr[start]} `
    }
}
Output(a,b)
let prev10 = document.getElementById('prev10')
let next10 = document.getElementById('next10')
next10.onclick = function () {
    if (a === 0) {
        a = 10
        b = 20
        Output(a, b)
    } else if (a === 10) {
        a = 20
        b = 30
        Output(a, b)
    } else if (a === 20) {
        a = 30
        b = 40
        Output(a, b)
    } else if (a === 30) {
        a = 40
        b = 50
        Output(a, b)
    } else if (a === 40) {
        a = 50
        b = 60
        Output(a, b)
    } else if (a === 50) {
        a = 60
        b = 70
        Output(a, b)
    } else if (a === 60) {
        a = 70
        b = 80
        Output(a, b)
    } else if (a === 70) {
        a = 80
        b = 90
        Output(a, b)
    } else if (a === 80) {
        a = 90
        b = 100
        Output(a, b)
    }
}
prev10.onclick = function () {
    if (a === 10) {
        a = 0
        b = 10
        Output(a, b)
    } else if (a === 20) {
        a = 10
        b = 20
        Output(a, b)
    } else if (a === 30) {
        a = 20
        b = 30
        Output(a, b)
    } else if (a === 40) {
        a = 30
        b = 40
        Output(a, b)
    } else if (a === 50) {
        a = 40
        b = 50
        Output(a, b)
    } else if (a === 60) {
        a = 50
        b = 60
        Output(a, b)
    } else if (a === 70) {
        a = 60
        b = 70
        Output(a, b)
    } else if (a === 80) {
        a = 70
        b = 80
        Output(a, b)
    } else if (a === 90) {
        a = 80
        b = 90
        Output(a, b)
    }
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let text = document.getElementById('text')
let hide = document.getElementById('hide')
hide.onclick = function (){
    text.classList.toggle('display')
}

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача
let f2 = document.forms.f2;
f2.onsubmit = function (e){
    e.preventDefault();
    let age = f2.age.value;
    if (age==='') {
        alert('Ви забули ввести дані');
    } else if (age<18){
        alert('Вам менше 18 років');
    } else if (age>18){
        alert('Вам більше 18 років');
    } else if (age==18){
        alert('Вам 18 років');
    } else {
        alert('Не правильно введені дані');
    }
}
// let f2 = document.forms.f2;
// f2.onsubmit = function (e){
//     e.preventDefault()
//     let age = f2.age.value;
//     if (age<18){
//         alert('Вам менше 18 років')
//     } else if (age>18){
//         alert('Вам більше 18 років')
//     } else if (age==18){
//         alert('Вам 18 років')
//     } else if (age===''){
//         alert('Ви забули ввести дані')
//     } else {
//         alert('Не правильно введені дані')
//     }
// }
// Питання до закоментованого коду вище
// Чомусь якщо повідомлення 'alert('Ви забули ввести дані');'
// задати в 'if' а не в 'else if', воно буде працювати
// якщо навпаки - не буде, буде виводити повідомлення
// 'alert('Вам менше 18 років');'
// У всьому іншому код абсолютно однаковий, чому так?