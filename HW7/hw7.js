// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}
let users = []
users.push(new User(9, 'Olya', 'Pustovit', 'fgglir@gmail.com', 257354646))
users.push(new User(1, 'Vadim', 'Pustovit', 'fggr@gmail.com', 354646))
users.push(new User(2, 'Olya', 'Pustovi', 'fgg8jvdr@gmail.com', 3546646))
users.push(new User(8, 'Anna', 'P', 'fgcegr@gmail.com', 354646984))
users.push(new User(4, 'Oleg', 'Pusto', 'fggr5367@gmail.com', 5425354646))
users.push(new User(3, 'Vadim', 'Pustov', 'fgg24rr@gmail.com', 354683446))
users.push(new User(5, 'Vasya', 'Pust', 'fg346gr@gmail.com', 35465646))
users.push(new User(10, 'Midav', 'Pustovi', 'fggdgr@gmail.com', 354646))
users.push(new User(6, 'Anton', 'Pus', 'fgg58r@gmail.com', 657354646))
users.push(new User(7, 'Vlad', 'Pu', 'fgg5yvr@gmail.com', 356354646))
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати,
// залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id%2 === 0))

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(users.sort((user1,user2) => user1.id - user2.id))

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}
let clients = []
clients.push(new Client(9, 'Olya', 'Pustovit', 'fgglir@gmail.com', 257354646, ['something']))
clients.push(new Client(1, 'Vadim', 'Pustovit', 'fggr@gmail.com', 354646, ['something','something','something']))
clients.push(new Client(2, 'Olya', 'Pustovi', 'fgg8jvdr@gmail.com', 3546646, ['something','something']))
clients.push(new Client(8, 'Anna', 'P', 'fgcegr@gmail.com', 354646984, ['something','something','something','something','something']))
clients.push(new Client(4, 'Oleg', 'Pusto', 'fggr5367@gmail.com', 5425354646, ['something','something','something','something']))
clients.push(new Client(3, 'Vadim', 'Pustov', 'fgg24rr@gmail.com', 354683446, ['something','something','something']))
clients.push(new Client(5, 'Vasya', 'Pust', 'fg346gr@gmail.com', 35465646, ['something','something']))
clients.push(new Client(10, 'Midav', 'Pustovi', 'fggdgr@gmail.com', 354646, ['something','something','something']))
clients.push(new Client(6, 'Anton', 'Pus', 'fgg58r@gmail.com', 657354646, ['something','something']))
clients.push(new Client(7, 'Vlad', 'Pu', 'fgg5yvr@gmail.com', 356354646, ['something']))
console.log(clients)

// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((client1,client2) => client1.order.length - client2.order.length))

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//
function Car(model, producer, year, maxSpeed, engineCapacity){
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpeed = maxSpeed
    this.engineCapacity = engineCapacity
}
let cars = []
cars.push(new Car('model1', 'producer1', 2005, 330, 5))
cars.push(new Car('model2', 'producer2', 2003, 280, 4))

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
}
cars[0].drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function (){
    console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
}
cars[1].info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed = newSpeed
}
cars[0].increaseMaxSpeed(335)
console.log(cars[0].maxSpeed)

// -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function (newValue){
    this.year = newValue
}
cars[0].changeYear(2002)
console.log(cars[0].year)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car
Car.prototype.addDriver = function (driver){
    this.driver = driver
}
cars[0].addDriver('Vadim')
console.log('Водій даного автомобіля: ' + cars[0].driver)

// - (Те саме, тільки через клас)
class Car2 {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
        this.drive = function (){
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        this.info = function (){
            console.log(`Модель - ${this.model}, виробник - ${this.producer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engineCapacity}`)
        }
        this.increaseMaxSpeed = function (newSpeed){
            this.maxSpeed = newSpeed
        }
        this.changeYear = function (newValue){
            this.year = newValue
        }
        this.addDriver = function (driver){
            this.driver = driver
        }

    }

}
let cars2 = []
cars2.push(new Car('model1', 'producer1', 2005, 330, 5))
cars2.push(new Car('model2', 'producer2', 2003, 280, 4))
cars2[0].drive()
cars2[1].info()
cars2[0].increaseMaxSpeed(335)
console.log(cars2[0].maxSpeed)
cars2[0].changeYear(2002)
console.log(cars2[0].year)
cars2[0].addDriver('Vadim')
console.log('Водій даного автомобіля: ' + cars2[0].driver)

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
function Cinderella (name, age, size){
    this.name = name
    this.age = age
    this.size = size
}
let cinderellas = [
    new Cinderella('Anna', 18, 39),
    new Cinderella('Anna', 17, 35),
    new Cinderella('Anna', 24, 40),
    new Cinderella('Anna', 16, 34),
    new Cinderella('Anna', 25, 38),
    new Cinderella('Anna', 18, 36),
    new Cinderella('Anna', 19, 42),
    new Cinderella('Anna', 21, 37),
    new Cinderella('Anna', 18, 36),
    new Cinderella('Anna', 23, 43)
]

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name
        this.age = age
        this.size = size
    }
}
let prince = new Prince('Anton', 27, 38)

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (cinderella of cinderellas){
    if (prince.size === cinderella.size){
        console.log('Принц знайшов свою кохану, яку звати ' + cinderella.name)
    }
}

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log('Принц знайшов свою кохану, яку звати ' + cinderellas.find(cinderella => cinderella.size === prince.size).name)

// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.myFilter = function (callback){
    const filtered = []
    for (const item of this){
        if (callback(item)){
            filtered.push(item)
        }
    }
    return filtered
}
Array.prototype.myForEach = function (callback){
    for (const item of this){
        callback(item)
    }
}
Array.prototype.myMap = function (callback){
    let mapArr = []
    for (const item of this){
        mapArr.push(callback(item))
    }
    return mapArr
}
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.myFilter(number => number>3))
numbers.myForEach((number) => console.log(number+1))
console.log(numbers.myMap(number => number*2))