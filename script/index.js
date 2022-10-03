// Funciones en JavaScript
//  Estructura general

// function saludar(){
//     console.log("Hola como estas?(funcion)");
// }


console.log("Menú de aplicaciones para juegos.");// Tarea Pasar todos los ejercicios a un catalogo de juegos


//Ejercicio #1
// Escribí while Loops
// En este ejercicio deberás imprimir en la consola:
// Todos los números entre 5 y 50 que sean divisibles por 5 y 3 al mismo tiempo.
function impresionMultiplos3y5() {
    let j = 1
    while (j < 51) {
        if ((j % 5 === 0) && (j % 3 === 0)) {
            console.log(j);
        }
        j++
    }
}

// Ejercicio #2
// Par O Impar
// En este ejercicio deberás crear un programa que le pregunte al usuario un número y que le devuelva un mensaje que indique si es par o impar.
//El programa terminará si el usuario ingresa un 0 o un número negativo.

// show hint
// .Mediante la función prompt, deberá ingresar un conjunto de valores numéricos enteros y positivos.
// .Por cada número, deberás informarle si el valor ingresado es par o impar.
// .La salida del programa se producirá cuando ingrese un 0 o un número negativo.

function parOImpar() {
    let j = 0
    do {
        j = Number(prompt("Ingresa un número positivo: "))
        //Evaluacion si es par o impar
        if (j == 0) break;

        if (j % 2 === 0) {
            //par
            console.log(`El numero ${j} es par`);
        } else {
            console.log(`El número ${j} es impar`);
        }
        console.log("Ingresa 0 si deseas terminar")
    } while (j > 0)
    console.log("Termino el ejercicio 2");


}


// Ejercicio #3 FizzBuzz
// En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, teniendo en cuenta estos criterios:

// Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
// Si es múltiplo de 5, deberá imprimir "Buzz".
// Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}


// Ejercicio #4 Burro-Mático
// En este ejercicio deberás crear un programa que ayude al Burro a preguntar al usuario "¿Ya merito llegamos?
// Si el usuario responde “Si”, el programa deberá darle un mensaje de bienvenida a Muy Muy Lejano. Sino, deberá mostrarle, nuevamente, el mensaje del Burro.

// Importante: El programa deberá identificar como verdadero tanto “Si”, como “SI”, como “si”.

function burroMatico() {
    let resp;
    do {
        resp = prompt("Ya merito llegamos? ").trim().toLowerLowerCase() == "si";
        if ((resp)) {
            console.log("Bienvenido a muy muy lejano");
        }
    } while (!resp);
}

// Ejercicio #5 Piedra, Papel O Tijera.
// En este ejercicio deberás escribir un código que:

// Le pida al usuario que ingrese uno de estos valores: "Piedra", "Papel" o "Tijera".
// Elija un valor al azar usando Math.random ().
// Le diga al usuario quién ganó.
// show hint
// Si nunca jugaste al Piedra, Papel o Tijera, conocé sus reglas:

// La tijera corta al papel.
// El papel envuelve a la piedra.
// La piedra rompe la tijera.
// bonus
// Le pregunte al usuario si le gustaría volver a jugar.

//Piedra:  1
//Papel:   2
//Tijeras: 3

// let x; 
// let ganar;
// do {
// let y = Math.floor(Math.random()*3)+ 1;
//  ganar = false;
// x = prompt("Seleccionar Piedra(1), Papel(2) o Tijera(3).").trim().toLowerCase()

// if (y == 1)console.log("La computadora selecciono Piedra")
// if (y == 2)console.log("La computadora selecciono Papel")
// if (y == 3)console.log("La computadora selecciono Tijera")


// switch(x){
//     case "piedra"://Piedra
//         console.log("El usuario a seleccionado Piedra")
//             if (y == 1){
//                 console.log("empate")
//             }else if (y == 2){
//                 console.log("gana computadora")
//                 }else{
//                     console.log("gana usuario")
//                     ganar = true;
//                 }
//           break;
//     case "papel"://Papel
//         console.log("El usuario a seleccionado papel");
//         if (y == 2){
//             console.log("empate")
//         }else if (y == 3){
//             console.log("gana computadora")
//             }else{
//                 console.log("gana usuario")
//                 ganar = true;
//             }
//         break;
//     case "tijera"://Tijera 
//         console.log("el usuario a seleccionado Tijera")
//         if (y == 3){
//             console.log("empate")
//         }else if (y == 1){
//             console.log("gana computadora")
//             }else{
//                 console.log("gana usuario")
//                 ganar = true;
//             }
//         break;
// }
// }while(!ganar)


function piedraPapelTijera() {


    let x;
    let continuar;
    do {
        let y = Math.floor(Math.random() * 3) + 1;
        let ppt = 0;
        continuar = false;
        x = prompt("Seleccionar Piedra(1), Papel(2) o Tijera(3).").trim().toLowerCase()
        if (x == 'piedra') ppt = 1
        if (x == 'papel') ppt = 2
        if (x == 'tijera') ppt = 3

        if (y == 1) console.log("La computadora selecciono Piedra")
        if (y == 2) console.log("La computadora selecciono Papel")
        if (y == 3) console.log("La computadora selecciono Tijera")

        if (ppt == y) {
            console.log("Empate");
        } else if ((ppt > y && (ppt - y) == 1) || ppt == 1 && y == 3) {
            console.log("Haz ganado");
            ganar = true
        } else {
            console.log("Haz perdido");
        }
        continuar = prompt("Deseas continuar?(Si/No)").toLocaleLowerCase() == 'si'
    } while (continuar)
}






// Ejercicio #6 Adiviná Un Número
// En este ejercicio deberás crear un programa para que el usuario adivine un número generado al azar.
// Para eso, seguí estas indicaciones:

// Usá el método prompt para pedirle al usuario que ingrese un número (n), que esté entre el 1 y el 10.
// Usá parseInt(n) para convertir el String en un Number.
// Generá un número random entre 1 y el Valor ingresado por el usuario (n).
// Pedile al usuario que descubra cuál es el número generado al azar.
// Decile si acertó, si es mayor o si es menor.
// Repetí el proceso hasta que adivine el número.
// Cuando lo descubra, felicitalo y usá un contador que le indique cuántas oportunidades usó para adivinar el número correcto.
//Importante: si el input del usuario es NaN, el programa deberá pedirle que ingrese un número.

function adivinaElNumero() {
    let rango
    do {
        rango = Number(prompt("Favor de ingresar un numero entre el 1 y el 10 ").trim())
        rango <= 0 && alert("El número seleccionado no cumple con lo solicitado")
    } while (rango <= 0)

    let random = Math.floor((Math.random() * rango) + 1)
    console.log(random.toString());
    let eleccionUsuario
    let contador = 0
    do {
        do {
            eleccionUsuario = Number(prompt(`Favor de seleccionar un numero entre 1 y ${rango} `))
            contador++
        } while (eleccionUsuario <= 0)

        if (eleccionUsuario > random) {
            alert("El numero a adivinar debe ser menor")
        } else if (eleccionUsuario < random) {
            alert("El numero a adivinar debe ser mayor")
        } else {
            alert("Felicidades adivinaste el numero a adivinar " + random.toString() + " en " + contador.toString() + " oportunidades.")
        }


    } while (eleccionUsuario != random)
}



// Ejercicio #7 Producto Acumulado
// Escribí un while Loop que, dado un número elegido por vos previamente, calcule el producto de todos los enteros positivos entre 1 y ese número.

// Al terminar el While, imprimí el resultado por consola.
function factorial() {
    let numeroFactorial = 0
    while (numeroFactorial <= 0) {
        numeroFactorial = parseInt(prompt("Favor de seleccionar un número entre 1 y 10"))
    }
    let resultado = numeroFactorial
    let iteracion = numeroFactorial
    while (iteracion > 2) {
        resultado *= (--iteracion)
    }
    console.log(`Factorial de ${numeroFactorial} es igual a ${resultado}`)
}
