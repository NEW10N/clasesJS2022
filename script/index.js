
const form = document.querySelector("form")
const nombre = document.getElementById("nombre")
const pokeDetail = document.getElementById("pokeDetail")
// const edad = document.querySelector("#edad")
const p = document.querySelector("p")//Mensaje


form.onsubmit = (e) => {
    e.preventDefault()
    // console.log(nombre.value);
    // consumoApi(nombre.value)
    fetchApi(nombre.value)
    .then(pokeStruct =>{
    let nombre = document.createElement("h2")
    nombre.innerText =pokeStruct.name
    // nombre.innerText = data.name
    pokeDetail.appendChild(nombre)
    
    let imagen = document.createElement("img")
    imagen.src = pokeStruct.sprites.back_default;
    pokeDetail.appendChild(imagen)
    })
    // console.log(pokemonData)

    // pokemonData.map(e =>{
    //     pokeDetail.appendChild(document.createElement('h2').textContent = e.name)
    // })
    // try {
    //     if (!nombre.value || !edad.value) throw "El campo no puede estar vacio"
    //     if (edad.value < 18) throw "Sos menor de edad"
    //     p.textContent = `Vienvenido!!! podes pasar ${nombre.value}, porque tenes ${edad.value}`
    // } catch (e) {
    //     p.textContent = e
    // } finally {
    //     nombre.value = ""
    //     edad.value = ""
    //     setTimeout(() => {
    //         p.textContent = ""
    //     }, 2000);
    // }
}

// function consumoApi(pokeName) {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`)
//     .then(dataJson => dataJson.json())
//     .then(dataPoke => {
//         console.log(dataPoke)
        
      
    
    
//     })
//         // .then(dataJson => console.log(dataJson.json()))
//         // .then(data => console.log(data.name))
//         // .catch(err => console.log(err))
// }


const fetchApi = async(pokeName)=>{
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    const data = await response.json()
    // console.log(data.sprites.back_default)
    
    return data;
}



// ---------------------------------------------
// promesas

// sin finaly

// function saludar(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             name ? resolve(hola()) : reject("no recivi parametros")
//         }, 2000);
//     })
//         .then(res => p.textContent = res)
//         .then(() => {
//             setTimeout(() => {
//                 return p.textContent = chau()
//             }, 1000);
//         }).catch(e => p.textContent = e)
// }

// con finaly
// function saludar(name) {
//     // esto no lo vamos a hacer nosotros 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             name ? resolve(hola()) : reject("no recivi parametros")
//         }, 2000);
//     })
//         // --------------------------
//         .then(res => p.textContent = res)
//         .then(() => {
//             return new Promise((resolve, reject) => {
//                 setTimeout(() => {
//                     resolve(chau())
//                 }, 1000);
//             })
//         })
//         .then(kuka => p.textContent = kuka)
//         .catch(e => p.textContent = e)
//         .finally((param) => {
//             console.log("param", param)
//             setTimeout(() => {
//                 return p.textContent = ""
//             }, 1000);
//         })
// }

// -----------------------------------------------------------------------




// async function consumoApi() {
//     try {
//         let fetchData = await fetch("https://pokeapi.co/api/v2/pokemon/dit")
//         let dataJson = await fetchData.json()
//         console.log(dataJson)
//     } catch (err) {
//         console.log(err)
//     }

// }






