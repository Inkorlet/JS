let id = new URLSearchParams(window.location.search).get('id')
fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then((response) =>{
        let divUser = document.createElement('div')
        divUser.innerHTML = `ID: ${response.id}<br>
                    Name: ${response.name}<br>
                    Username: ${response.username}<br>
                    Email: ${response.email}<br>
                    Address:<br><ul>
                        <li>Street: ${response.address.street}
                        <li>Suite: ${response.address.suite}
                        <li>City: ${response.address.city}
                        <li>Zipcode: ${response.address.zipcode}
                        <li>Geo: (lat: ${response.address.geo.lat}, lng: ${response.address.geo.lng})
                        </ul>
                    Phone: ${response.phone}<br>
                    Website: ${response.website}<br>
                    Company:<br><ul>
                        <li>Name: ${response.company.name}
                        <li>Catch Phrase: ${response.company.catchPhrase}
                        <li>BS: ${response.company.bs}
                        </ul>`
        document.body.appendChild(divUser)
    })