// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const squareRectangle = (a,b) => a*b
console.log(squareRectangle(5,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const squareCircle = (r) => 3.14*r*r
console.log(squareCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const squareCylinder = (h,r) => 2*3.14*r*(h+r)
console.log(squareCylinder(5,7))

// - створити функцію яка приймає масив та виводить кожен його елемент

// зробив два варіанти, коли передеється масив в аргументі,
// і коли передається просто безліч аргуменів
const array1 = (arg) => {
    for(i=0; i<arg.length; i++){
        console.log(arg[i])
    }
}
array1([4,'abx',254])
const array2 = function (...arg){
    for(i=0; i<arg.length; i++){
        console.log(arg[i])
    }
}
array2(4,'abx',254)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const p = (text) =>{
    document.write(text)
}
p(13567)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const list1 = (text) =>{
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
list1('1565hdhg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const list2 = (text,number) => {
    document.write(`<ul>`)
    for(i=1; i<=number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
list2('dhg',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const list3 = (...text) => {
    document.write(`<ul>`)
    for(i=0; i<text.length; i++) {
        document.write(`<li>${text[i]}</li>`)
    }
    document.write(`</ul>`)
}
list3('abx',5, 135, true)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
const objects = (object) => {
    for(i=0; i<object.length; i++){
        document.write(`<div>id - ${object[i].id} name - ${object[i].name} age - ${object[i].age}</div>`)
    }
}
objects([{id:35568, name:'Ivan', age:55},{id:3538, name:'Vadym', age:35},{id:568, name:'Olya', age:21}])

// - створити функцію яка повертає найменьше число з масиву
const min = (numbers) => {
    let min = numbers[0]
    for(i=1; i<numbers.length; i++){
        if (numbers[i] < min){
            min = numbers[i]
        }
    }
    return min
}
console.log('найменше число - ' + min([41,37,2479,246,10]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
const sum = (arr) => {
    result = 0
    for(i=0;i<arr.length;i++){
        result = result+arr[i]
    }
    return result
}
console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
const swap = (arr,index1,index2) =>{
    a = arr[index1]
    b = arr[index2]
    arr[index1] = b
    arr[index2] = a
    return arr
}
console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
const exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    for (i=1; i<exchange.length; i++){
        if (currencyValues[i-1].currency === exchangeCurrency){
            value = sumUAH/currencyValues[i-1].value
            return value
        }
    }
    return 'Неправильно вказана валюта'
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))