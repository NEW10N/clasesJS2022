import {form, info, div, input} from "./selectores.js"

form.onsubmit = (e) => {
    e.preventDefault()
    try {
        if (input.value == "") {
            div.style.display = "none"
            throw "El campo nombre no debe estar vacío"
        }
        consumoApi(input.value.toLowerCase())
        info.textContent = ""
    }catch(e){
        info.textContent = e
        console.log(e)
    }
}