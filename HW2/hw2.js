// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let random = [1, 'an', 3, 4, 5, 'asd', 'home', 8, 9, 10];
console.log(random[0] + random[1] + random[2] + random[3] + random[4] + random[5] + random[6] + random[7] + random[8] + random[9]);



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let ob1 = {
    title: 'title1',
    pagecount: 355,
    genre: 'romance'
}
let ob2 = {
    title: 'title2',
    pagecount: 15,
    genre: 'fantasy'
}
let ob3 = {
    title: 'title3',
    pagecount: 247,
    genre: 'romance'
}



// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let ob11 = {
    title: 'title1',
    pagecount: 355,
    genre: 'romance',
    authors:[
        author1 = {
            name:'Vadym',
            age:25
        },
        author2 = {
            name:'Anton',
            age:25
        }
    ]
}
let ob22 = {
    title: 'title2',
    pagecount: 15,
    genre: 'fantasy',
    authors:[
        author1 = {
            name:'Vadym',
            age:25
        },
        author2 = {
            name:'Anton',
            age:25
        }
    ]
}
let ob33 = {
    title: 'title3',
    pagecount: 247,
    genre: 'romance',
    authors:[
        author1 = {
            name:'Vadym',
            age:25
        },
        author2 = {
            name:'Anton',
            age:25
        }
    ]
}
// перевірка щоб впевнитись що автори коректно працюють
console.log(ob33.authors[0])



// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
let users = [
    user1 = {
        name:'Vadym',
        username:'Inkorlet',
        password:'13sgfh'
    },
    user2 = {
        name:'Anton',
        username:'Kruk',
        password:'grwg541614'
    },
    user3 = {
        name:'Anna',
        username:'Vet',
        password:'1r5H1614'
    },
    user4 = {
        name:'Vadym',
        username:'Anon',
        password:'1jlofc614'
    },
    user5 = {
        name:'Sergey',
        username:'Luter',
        password:'134r3dtyG'
    },
    user6 = {
        name:'Vadym',
        username:'Inkot',
        password:'1HF4h1614'
    },
    user7 = {
        name:'Vitaly',
        username:'Alok',
        password:'13hgkjH4yH'
    },
    user8 = {
        name:'Vadym',
        username:'test',
        password:'1grfhF4g'
    },
    user9 = {
        name:'Galya',
        username:'God',
        password:'hgjT45'
    },
    user10 = {
        name:'Vasily',
        username:'Vas',
        password:'gfhjyk546G'
    }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)



// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
let tempDays = [
    monday = {
        morning:5,
        day:15,
        evening:10
    },
    tuesday = {
        morning:3,
        day:15,
        evening:12
    },
    wednesday = {
        morning:2,
        day:13,
        evening:15
    },

    thursday = {
        morning:1,
        day:7,
        evening:5
    },
    friday = {
        morning:5,
        day:15,
        evening:10
    },
    saturday = {
        morning:12,
        day:18,
        evening:15
    },
    sunday = {
        morning:15,
        day:20,
        evening:18
    },
]



// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 1
if (x!=0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
x = 0
if (x!=0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
x = -3
if (x!=0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}



// - Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 35
if (time>=0 && time<15){
    console.log('Перша чверть')
} else if (time>=15 && time<30){
    console.log('Друга чверть')
} else if (time>=30 && time<45){
    console.log('Третя чверть')
} else if (time>=45 && time<60){
    console.log('Четверта чверть')
} else {
    console.log('Невірно вказане число')
}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 30
if (day>=1 && day<11) {
    console.log('Перша половина')
} else if (day>=11 && day<21) {
    console.log('Друга половина')
} else if (day>=21 && day<32) {
    console.log('Третя половина')
} else {
    console.log('Невірно вказане число')
}



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).
let userInput = prompt("Введіть порядковий номер дня тижня: ")
switch (userInput){
    case '1':
        console.log('Monday')
        break;
    case '2':
        console.log('Tuesday')
        break;
    case '3':
        console.log('Wednesday')
        break;
    case '4':
        console.log('Thursday')
        break;
    case '5':
        console.log('Friday')
        break;
    case '6':
        console.log('Saturday')
        break;
    case '7':
        console.log('Sunday')
        break;
}



// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let userInput1 = prompt("Введіть ваше перше число: ")
let userInput2 = prompt("Введіть ваше друге число: ")
if (userInput1>userInput2){
    console.log('Перше число більше за друге')
} else if (userInput1<userInput2) {
    console.log('Перше число менше за друге')
} else {
    console.log('Ваші числа однакові')
}




// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
// Напишіть код який, буде присвоювати змінній х значення "default"
// якщо ви намагаєтесь присвоїти в неї falsy-значення
let xx = !!'' ? '123' : 'default'
console.log(xx)




// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration>5){
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration>5){
    console.log('Супер')
}