//  import {input, info, div,img} from "./selectores.js"
// Es que creo que todo se tiene que importar en el index :(
    // bueno, mientras lo sigo corrijiendo aqui comentado, por si las dudas
    // es que ando ponieno a como yo lo hice :c
// -------- consumo api


async function consumoApi(nombre) {
    try {
        let apiUrl = "https://pokeapi.co/api/v2/pokemon/"
        apiUrl += nombre
        let fetchData = await fetch(apiUrl)
        let dataJson = await fetchData.json()
        namePoke.textContent = dataJson.name
        img.setAttribute("src", dataJson.sprites.front_default)
        div.style.display = "inline"
    } catch (err) {
        info.textContent = "Pokemon no existe"
        div.style.display = "none"
        console.log(err)
    } finally {
        input.value = ""
    }
}

export default consumoApi