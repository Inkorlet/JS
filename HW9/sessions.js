// debugger
// let divDate = document.getElementById('divDate')
// let date = JSON.parse(localStorage.getItem('sessions'))
// for (let i = 0; i<date.length; i++) {
//     divDate.innerHTML = `${date[i]}<br>`
// }
// divDate.innerHTML = `${date}`

let date = JSON.parse(localStorage.getItem('sessions'))
    for (let i = 0; i<date.length; i++) {
        let divDate = document.createElement('div')
        divDate.innerHTML = `${date[i]}<br>`
        document.body.appendChild(divDate)
    }