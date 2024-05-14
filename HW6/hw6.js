let str1 = 'hello world'
let str2 = 'lorem ipsum'
let str3 = 'javascript is cool'

// - Знайти та вивести довижину настипних стрінгових значень
console.log(str1.length)
console.log(str2.length)
console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
let str4 = 'HELLO WORLD'
let str5 = 'LOREM IPSUM'
let str6 = 'JAVASCRIPT IS COOL'
console.log(str4.toLowerCase())
console.log(str5.toLowerCase())
console.log(str6.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str7 = ' dirty string   '
console.log(str7.substring(1,12))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні'
let split = str.split(' ')
console.log(split)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arr = [10,8,-7,55,987,-1011,0,1050,0]
let arrResult = arr.map(str => str.toString())
console.log(arrResult)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(nums,direction){
    if (direction === 'ascending'){
        return nums.sort((num1, num2) => num1 - num2)
    }
    else if (direction === 'descending'){
        return nums.sort((num1, num2) => num2 - num1)
    }
    else {
        return 'Неправильно вказаний агрумент direction'
    }
}
console.log(sortNums(nums,'descending'))

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((course1,course2) => course2.monthDuration - course1.monthDuration))
console.log(coursesAndDurationArray.filter(course => course.monthDuration > 5))
coursesAndDurationArray = coursesAndDurationArray.map((course, index) =>{
    return {id: index, ...course}
})
console.log(coursesAndDurationArray)

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
const deck = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];

console.log('Піковий туз:', deck.filter(card => card.cardSuit === 'spade' && card.value === 'ace'));

console.log('Всі шістки:', deck.filter(card => card.value === '6'));

console.log('Всі червоні карти:', deck.filter(card => card.color === 'red'));

console.log('Всі буби:', deck.filter(card => card.cardSuit === 'diamond'));

console.log('Всі трефи від 9 та вище:', deck.filter(card => card.cardSuit === 'clubs' && card.value >= '9'));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
const callback = function (accumulator, card) {
    if (card.cardSuit === 'spade') {
        accumulator[0].push(card)
    } else if (card.cardSuit === 'diamond') {
        accumulator[1].push(card)
    } else if (card.cardSuit === 'heart') {
        accumulator[2].push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator[3].push(card)
    }
    return accumulator
}
let reduce = deck.reduce(callback, [[], [], [], []])
console.log(reduce)
// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log(coursesArray.filter(course => course.modules.includes('sass')))
console.log(coursesArray.filter(course => course.modules.includes('docker')))