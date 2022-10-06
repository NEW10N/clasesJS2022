let saludar = "hola como estas?"
let copia = saludar.slice(5, 9)
let copia2 = saludar.slice(-6, -1)

function slice(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start += str.length
    if (end < 0) end += str.length
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}
// --------------------------------------------

let sub = saludar.substring()
sub = saludar.substring(5, 6)
sub = saludar.substring(-5, 6)
sub = saludar.substring(-6, -1)

function substring(str, start = 0, end = str.length) {
    let copia = ""
    if (start < 0) start = 0
    if (end > str.length) end = str.length
    if (end < 0) return copia
    for (let i = start; i < end; i++) {
        copia += str[i]
    }
    return copia
}

// ---------------------------------------------

let subs = saludar.substr()


function substr(str, start = 0, end = str.length) {
    if (end != 0) end += start
    return substring(str, start, end)
}
// -----------------------------------
// hacer replace, length,


function replace(str, oldValue, newValue) {
    let result = ""

    for (let i = 0; i < str.length; i++) {
        let existeRemplazo = false

        //Se valida que toda la palabra se repita caracter a caracter
        for (let j = 0; j < oldValue.length; j++) {
            if (oldValue[j] === str[i + j]) {
                existeRemplazo = true                
            } else {
                existeRemplazo = false
                break;
            }
        }

        //Se agrega el nuevo texto al string // y se actualiza el valor del index de la variable original agregandole la cantidad de caracteres de la palabra remplazada
        if (existeRemplazo) result += newValue
        existeRemplazo ? i += (oldValue.length - 1) : result += str[i] //Si no existe, solo se copia la variable
    }
    return result
}


function length(str){
    if(typeof(str) === 'undefined' || typeof(str[0]) === 'undefined')  return alert("El string esta vacio")
    let counter = 0
    while(typeof(str[counter]) != 'undefined'){// console.log(`Letra ${str[counter]} este es la longitud ${counter}`)
        counter += 1
    }
    counter -= 1
    return alert("el tamano de la palabra es de " + counter.toString() + "  caracteres.")
}