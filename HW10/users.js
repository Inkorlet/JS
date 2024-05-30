// - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((response) =>{
        let users = response
        ulUsers = document.createElement('ul')
        for (let i = 0; i<users.length; i++){
            let liUsers = document.createElement('li')
            let aUsers = document.createElement('a')
            aUsers.href = `user-details.html?id=${users[i].id}`
            liUsers.innerHTML = `id: ${users[i].id} name: ${users[i].name}`
            aUsers.appendChild(liUsers)
            ulUsers.appendChild(aUsers)
        }
        document.body.appendChild(ulUsers)
    })