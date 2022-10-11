// ejercicios

// Teniendo un Arreglo de números al azar (llamado numbers), usá .reduce() para obtener la multiplicación total de todos los números.

// ⚠️ Importante: Prestá atención al valor inicial del acumulador.

/* let numbers = [6, 1, 34, 94, 3, 17];

const mul = numbers.reduce((acumulador,value) =>{
    return acumulador * value
});// CODEA LA SOLUCIÓN

console.log(mul); */
// debería mostrar 977976

// ----------------------------------------------

// Ejercicio 2
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un nuevo Arreglo que contenga solo los números impares.

/* let numeros = [3, 7, 6, 13, 2, 24, 99];

let impares = numeros.reduce((acum, element) => {
    if (element % 2 != 0) acum.push(element)
    return acum
}, [])

console.log(impares) // [3, 7, 13, 99] */


// Ejercicio 3
// Teniendo un Arreglo de números (llamado numbers), usá .reduce() para obtener el máximo valor que posea el Arreglo.

let numbers = [5, 4, 1, 9, 2]

let max = numbers.reduce((max, value) => {
    if (value > max) max = value
    return max
});

// console.log(max)
// debería mostrar 9

// ----------------------------------------------

// Ejercicio 4
// Completá la Función join que reciba un Arreglo de números y retorne un String con todos los números concatenados. Usa reduce

/* const arr = [1, 2, 3]

let join = arr => {
    let result
    return result = arr.reduce((acum, element) => acum + element, "")
}

 console.log( join( [1,2,3] ) ) // "123" */

// ----------------------------------------------
// Ejercicio 5
// Teniendo un Arreglo de números en la variable numeros, usá .reduce() para crear un Arreglo con los mismos números pero eliminando los repetidos.

// show hint
// 👩🏻‍💻👨‍💻 El método indexOf() puede ayudarte. Para más información, accedé a la documentación de Mozilla.

let numeros = [5, 1, 7, 12, 5, 2, 9, 0, 11, 9, 11]
let sinRepetidos = numeros.reduce((arrUnicos, value) => {
    if (arrUnicos.indexOf(value) < 0) arrUnicos.push(value)
    return arrUnicos
}, []);
console.log(sinRepetidos)
// debería mostrar [ 5, 1, 7, 12, 2, 9, 0, 11 ]



// Ejercicio 6
// Teniendo un Arreglo llamado notasDeTPs(con números del 1 al 10), usá .reduce() para calcular la nota promedio final de todos los trabajos prácticos de este curso.

// show hint
// 🤓 Recordá que el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad total.

// let notasDeTPs = [4, 7, 8, 5, 10]
// let notaFinal = notasDeTPs.reduce((prom, value) =>{
//     return prom += value
// }, 0)/ notasDeTPs.length

// console.log(notaFinal)
// debería mostrar 6.8



// ----------------------------------------------
// Ejercicio 1
// Tenemos un arreglo de números en la variable numbers y deberás crear uno nuevo que contenga el doble de cada número, usando .map().

// let numbers = [3, 7, 13, 99];!


// ----------------------------------------------
// Ejercicio 2
// Tenemos un arreglo en la variable frases con varias sentencias al azar. Usá la función map() para que cada frase empiece y termine con signos de exclamación.

/* let frases = ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.'];

// CODEA LA SOLUCIÓN

let frasesExclamadas = frases.map(value => {
    return `¡${value}!`}) */

// console.log(frases); // ['Labore sea dolor.', 'Justo rebum dolor.', 'Stet lorem amet.']
//  console.log(frasesExclamadas); // [ '¡Labore sea dolor.!', '¡Justo rebum dolor.!', '¡Stet lorem 


// ----------------------------------------------



// En este ejercicio deberás crear la Función isUniform que tome un Arreglo como Parámetro y devuelva true si todos los elementos del Arreglo son idénticos. De lo contrario, deberá devolver false.

// ⚠️ Importante: Salvo que sea necesario, tu Función no debe recorrer todo el Arreglo si no es idéntico. Es decir, al momento que encuentre una diferencia deberá cortar.

// Usá este código para testear tu solución:

/* function isUniform(arr){
    let length = arr.length
    let elementoAnt = arr[0]
    for(let i = 1; i < length; i++){
        if (arr[i] == elementoAnt){
            elementoAnt = arr[i]
        }else{
            return false
        }  
    }
    return true
};


isUniform([1, 1, 1, 1]) // true
isUniform([1, 2, 1, 1]) // false
isUniform(["a", "b", "p"]) // false
isUniform (["b", "b", "b"]) // true
 */


// ----------------------------------------------
// Biggest Smallest
// En este ejercicio deberás:

// 1- Escribir una Función llamada biggest_smallest que tenga un Argumento (que haga referencia a un Arreglo de números).

// 2- Utilizar el método forEach() para encontar el número más grande y el número más chico.

// 3- La función debe devolver por consola un Arreglo que contenga los números mínimo y máximo.

// 💡 Ejemplo:

// [111, 27, 31, 44, 101, 213, 33, 58]

// Salida: 27, 213


/* function biggest_smallest(arr) {
    let nMayor = arr[0]
    let nMenor = arr[0]
    arr.forEach(element => {
        if (element > nMayor) nMayor = element
        if (element < nMenor) nMenor = element
    });
    return [nMenor,nMayor]
} */



// ----------------------------------------------


// Ejercicios: Filter
// Ejercicio 1
// Usando.filter(), completá la Función mayoresOIgualesA5 para que reciba un Arreglo de números y retorne un nuevo Arreglo(solo con números que sean mayores o iguales a 5).

// let mayoresOIgualesA5 = arr =>  arr.filter(value =>value >= 5)

// console.log(mayoresOIgualesA5([3, 6, 8, 21])); // [6, 8, 21]


// ----------------------------------------------


// Ejercicio 2
// Tenemos un Arreglo de números en la Variable numbers.
//Usando.filter(), creá un nuevo Arreglo que contenga solo los números pares.

/* let numeros = [3, 7, 6, 13, 2, 24, 99];

let pares = numeros.filter(value => value % 2 == 0)

console.log(pares); // [6, 2, 24] */



// ----------------------------------------------
// Ejercicio 3
// Tenemos un Arreglo de palabras al azar en la Variable palabras.

//Usando.filter(), deberás separar en un nuevo Arreglo aquellas palabras que no tengan más de 3 letras.

/* let palabras = ['Et', 'Voluptua', 'Sed', 'At', 'Diam', 'Lorem']

// const palabrasCortas = palabras.filter( word => word.length <= 3)

    console.log(palabrasCortas);
// [ 'Et', 'Sed', 'At' ]
 */



// ----------------------------------------------
// Ejercicio 4
// Tenemos un Arreglo en una Variable mix con varios elementos, de distintos tipos de datos.Usando.filter(), 
//creá un nuevo Arreglo con todos los elementos que sean Strings y guardalo en la Variable soloStrings.

const mix = [
    'Ut vero.',
    2,
    function () { console.log('hola mundo!') },
    56,
    'Diam rebum nonumy et.',
    true,
    false,
    'Kasd stet.',
    'Sit et dolor.',
    null,
    null,
    [1, 2, 3],
    'Dolore.'
];

// Codeá la solución

let soloStrings = mix.filter(string => typeof (string) == 'string')

console.log(soloStrings);
// Debería mostrar
// [ 'Ut vero.', 'Diam rebum nonumy et.', 'Kasd stet.', 'Sit et dolor.', 'Dolore.' ]
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------
// ----------------------------------------------















// let arr = [2, 3, 5, 7]

// let arr2 = arr.map((element,a,x) => {
// return element * this
//     console.log(this)
// }, 2);

// let acumunador=[],0,"",{}

// let arr2 = arr.reduce((acumulador, value) => {
//     return acumulador * value
// }, 3)
// let arr3 = arr.reduce((acumulador, value) => {
//     return acumulador + value
// }, '')
// let arr4 = arr.reduce((acumulador, value) => {
//     acumulador.push(value * 3)
//     return acumulador
// }, [])
// let arr5 = arr.reduce((acumulador, value) => {
//     return acumulador * value
// })


