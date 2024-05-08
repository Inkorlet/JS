// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function squareRectangle (a,b){
    return a*b
}
console.log(squareRectangle(5,10))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function squareCircle(r){
    return 3.14*r*r
}
console.log(squareCircle(5))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function squareCylinder (h,r){
    return 2*3.14*r*(h+r)
}
console.log(squareCylinder(5,7))

// - створити функцію яка приймає масив та виводить кожен його елемент

// зробив два варіанти, коли передеється масив в аргументі,
// і коли передається просто безліч аргуменів
function array1 (a){
    for(i=0; i<=a.length-1; i++){
        console.log(a[i])
    }
}
array1([4,'abx',254])
function array2 (...a){
    for(i=0; i<=a.length-1; i++){
        console.log(a[i])
    }
}
array2(4,'abx',254)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function p(text){
    document.write(text)
}
p(13567)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function list1(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
list1('1565hdhg')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function list2(text,number){
    document.write(`<ul>`)
        for(i=1; i<=number; i++) {
            document.write(`<li>${text}</li>`)
        }
    document.write(`</ul>`)
}
list2('dhg',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function list3(...text){
    document.write(`<ul>`)
        for(i=0; i<text.length; i++) {
            document.write(`<li>${text[i]}</li>`)
        }
    document.write(`</ul>`)
}
list3('abx',5, 135, true)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
function objects (object){
    for(i=0; i<object.length; i++){
        document.write(`id - ${object[i].id} name - ${object[i].name} age - ${object[i].age} <br>`)
    }
}
objects([{id:35568, name:'Ivan', age:55},{id:3538, name:'Vadym', age:35},{id:568, name:'Olya', age:21}])

// - створити функцію яка повертає найменьше число з масиву
function min(numbers){
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
function sum(arr){
    result = 0
    for(i=0;i<arr.length;i++){
        result = result+arr[i]
    }
    return result
}
console.log(sum([1,2,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
function swap(arr,index1,index2){
    a = arr[index1]
    b = arr[index2]
    arr[index1] = b
    arr[index2] = a
    return arr
}
console.log(swap([11,22,33,44],0,1))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH,currencyValues,exchangeCurrency){
    if (exchangeCurrency === 'USD'){
        value = sumUAH/currencyValues[0].value
        return value
    }
    else if (exchangeCurrency === 'EUR'){
        value = sumUAH/currencyValues[1].value
        return value
    }
    else {
        value = 'Неправильно вказана валюта'
        return value
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))