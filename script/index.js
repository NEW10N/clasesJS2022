// function cancionElefante( cantidadElefantes){
//     for (let i = 1; i <= cantidadElefantes ; i++){
//         if(i == 1){console.log("1 elefante se columpiaba sobre la tela de una araña, como veian que resistia fueron a llamar a otro elefante,")}
//         else if( i == (cantidadElefantes))

//     }
// }


// Ejercicio Clase 30
// Crear una calculadora de funciones

function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}

function calculadora(a, b, fn) {

    // return typeof (a) == undefined || typeof (b) == undefined || isNaN(a) || isNaN(b) ? 
    // alert("Lo siento mi capacidad no pudo procesar tu operación.") : fn(a, b)

    // if(!a && !b && !fn ){
    //     return alert("No se puede realizar operacion")
    // }

    
    return !a || !b || isNaN(a) || isNaN(b) ? 
    alert("Lo siento mi capacidad no pudo procesar tu operación.") : fn(a, b)
}


const operacion = (fn, n1, n2) => fn(n1, n2)