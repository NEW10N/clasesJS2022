// function saludar(saludo){
//     try{
//         if(saludo === undefined) throw "No se que es un saludo"
//         if (typeof(saludo) === "number") throw new Error("Esto es un numeroooooo")
//         console.log("Soy Saludo");
//     }catch(e){
//         console.log(e)
//         // console.log(e.message)
//         }
// }

// let saludar="hola"
// try {
//     console.log(algo)
// } catch (e) {
//     if (e instanceof ReferenceError) {
//         console.log(e.message)
//     } else {
//         console.log(e.name)
//         console.log(e.message)
//     }
// }


// function saludar(saludo) {
//     try {
//         if (saludo === undefined) throw "no se que es saludo"
//         if (typeof (saludo) === "number") throw new Error("esto es un numeroooo")
//         console.log("soy", saludo)
//     } catch (e) {
//         console.log(e)
//         console.log(e.message)
//     }
// }
// let newArr= new Array()
// let arr=[]
// saludar()
// ---------------------------------------------------------------------------
const form = document.querySelector("form")
const inputs = document.querySelectorAll("input")
const p = document.querySelector("p")
const nombre = inputs[0]
const edad = inputs[1]

// form.addEventListener("submit",)
form.onsubmit = (e) => {
    e.preventDefault()
    try {
        const nombreReplace = (nombre.value.replace(/\D/g, ''))
        if (!nombre.value) throw "El nombre no puede estar vacio"
        if (!edad.value) throw "La Edad no puede estar vacia"
        if (edad.value < 18) throw "Debes ser mayor de edad"
        if (nombreReplace != "") throw "No se pueden ingresar numeros en el nombre"
        p.textContent = `${nombre.value} ${edad.value}`
    } catch (e) {
        p.textContent = e
    } finally {
        nombre.value = ""
        edad.value = null
    }
}


