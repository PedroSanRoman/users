
let numeroImagen = 0
function imagen () {
    return numeroImagen ++;
    }

console.log (imagen());

fetch ('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json ();
})
.then ((data) => {
    const listausuarios = document.getElementById('listaUsuarios');
    console.log(data);
    data.forEach(element => {listausuarios.innerHTML +=`        
        <fieldset class="box1">
            <fieldset class="box2">
                    <li><span>Nombre: </span>${element.name}</li>
                    <li><span>Username: </span>${element.username}</li>
                    <li><span>Teléfono: </span>${element.phone}</li>
                    <li><span>Email: </span>${element.email}</li>
            </fieldset>
            <br>         
                    <li><span>Compañía: </span>${element.company.name}</li>
                    <li><span>Dirección: </span>${element.address.street}, ${element.address.suite}, ${element.address.city}</li>
                <img src="assets/img/${imagen()}.jpeg"> 
        </fieldset>
        `;       
    });
})

