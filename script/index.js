/* const tenis={
    marca:"nike",
    color:"blancas",
    talle:33
}

Object.keys(tenis)
Object.values(tenis)

function iteradorObj(object) {
//    for (const key in object) {
//   console.log(object[key])
//    }
   for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)
    }
   }
} */




// Ejercicio
// 1 crear una funcion que reciva tres paramatros, nombre, precio y cantidad y 
//retorne un objeto con las propiedades nombre, precio, cantidad y total

 function createObj(nombre, precio, cantidad) {
    let total = precio * cantidad
    return {nombre, precio, cantidad, total}
}
// console.log(createObj("prod1", 399, 155)) 

// ----------------------------------------------------------------------


// 2 Aumentar La Nota
// Tenés una lista de estudiantes con su desempeño académico actual. 
//Querés subirle 2 puntos a aquellos que su nota sea mayor a 5. Recordá que la nota tampoco puede superar al 10.


// Ejemplo:

const estudiantes = [ { Estudiante: "Juan", nota: 6 },
 { Estudiante: "Mario", nota: 8 },
 { Estudiante: "Julia", nota: 10 },
 { Estudiante: "Sofia", nota: 2 }]

// salida=[ { Estudiante: "Juan", nota: 8 },
// { Estudiante: "Mario", nota: 10 },
// { Estudiante: "Julia", nota: 10 },
// { Estudiante: "Sofia", nota: 2 },]

function subirCalificacion(estudiantes){
    estudiantes.map(element =>{
        if(element["nota"] <=8 && element["nota"] > 5 ) element["nota"] += 2 
        if(element["nota"] == 9) element["nota"] += 1 
        return element
    })
    return estudiantes
}

// console.log(subirCalificacion(estudiantes))




// ----------------------------------------------------------------------
// 3 Tenemos un Arreglo de Objetos, donde cada uno representa a una persona. 
//Usando .filter(), creá un nuevo Arreglo con las personas que tengan más de 27 años.

const personas = [ { nombre: 'Ana', edad: '28'},
{ nombre: 'María', edad: '24' }, { nombre: 'José', edad: '31' }
];
const personasConMasDe27 = (personas)=> personas.filter((personaEdad)=>Number(personaEdad.edad) >27)


// console.log(personasConMasDe27(personas));
// // [{ nombre: 'Ana', edad: '28' }, { nombre: 'José', edad: '31' }]


// ----------------------------------------------------------------------
// 4

// const actoresVocales = []

const actoresPrincipales = ['Tom Hanks', 'Johnny Depp', 'Elizabeth Taylor', 'Morgan Freeman', 'Jennifer Aniston', 'Meryl Streep', 'Natalie Portman', 'Ashton Kutcher']
const peliculas = []

const actoresPrincipalesPorPelicula = {
    "Titanic": "Leonardo DiCaprio",
    "El Padrino": "Al Pacino",
    "Matrix": "Keanu Reeves",
    "Iron Man": "Robert Downey Jr",
    "Soy leyenda": "Will Smith",
    "Bastardos sin gloria": "Brad Pitt",
    "Bastardos sin gloria Pruebas": "Brad Pitt"
}
// Iterá actoresPrincipales y llevá a actoresVocales aquellos cuyo nombre o apellido comience con una vocal.
actoresVocales = arr =>{
    const actoresVocales = arr.filter(fullName =>{
        const name = fullName.split(" ");
        const vocales = ["a","e","i","o","u"]
    //    return vocales.indexOf(name[0][0].toLowerCase())>= 0 || vocales.indexOf(name[1][0].toLowerCase())>= 0 
    return (name[0][0].toLowerCase().startsWith(...vocales) || name[1][0].toLowerCase().startsWith(...vocales) )
    })
    return actoresVocales
} 
console.log(actoresVocales(actoresPrincipales));
// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá sus nombres y apellidos al Arreglo actoresPrincipales.
// for (const [key, value] of Object.entries(actoresPrincipalesPorPelicula)) {
//     console.log(`${key} ${value}`) 
// }

for (const key in actoresPrincipalesPorPelicula) {
    actoresPrincipales.push(actoresPrincipalesPorPelicula[key])
}  
// console.log(actoresPrincipalesPorPelicula)

// Iterá sobre el Objeto actoresPrincipalesPorPelicula y agregá los nombres de las películas en el Arreglo peliculas.

for (const key in actoresPrincipalesPorPelicula) {
    peliculas.push(key)
} 
// console.log(peliculas)
// Creá un Objeto vacíó llamado peliculaPorActor.
// let peliculaPorActor={}

// Agregá Propiedades a este Objeto donde la clave sea el nombre del actor y el valor sea la película.
// peliculaPorActor.nombre="Keanu Reeves"
// peliculaPorActor.peliculas=["Matrix"]
const peliculaPorActor = arrPeliculaActor =>{
    const peliculaPorActor ={}
    for (const pelicula in arrPeliculaActor) {
        let peliculasRelacionadas = []
        if (peliculaPorActor[arrPeliculaActor[pelicula]]){
            peliculasRelacionadas = peliculaPorActor[arrPeliculaActor[pelicula]]
            peliculasRelacionadas.push(pelicula)
            console.log(peliculasRelacionadas)
            peliculaPorActor[arrPeliculaActor[pelicula]] = peliculasRelacionadas
        }else{
            peliculaPorActor[arrPeliculaActor[pelicula]] = [pelicula]
        }        
    }
    return peliculaPorActor
}
// console.log(peliculaPorActor(actoresPrincipalesPorPelicula))
// Adaptá tu código para que pueda haber más de una película por cada actor.


// ----------------------------------------------------------------------

// 5
// Posición Adecuada
// Tenés un array de objetos con el nombre y la edad de distintas personas.
// Este arreglo debe ser ordenado agregando una propiedad llamada posicion. Esta propiedad ubica a las personas en su posición adecuada, de menor a mayor.

// Ejemplo:

/* const data = [ { nombre: "Alba", edad: 15 },
  { nombre: "Estrella", edad: 30 },
  { nombre: "Belen", edad: 20 },
  { nombre: "Santiago", edad: 4 },
  { nombre: "Katherine", edad: 55 }]
  console.log(data.sort())
  data=data.sort((a,b)=>{
    if ( a.edad < b.edad ){
        return -1;
      }
      if ( a.edad > b.edad ){
        return 1;
      }
      return 0;
})//Crack 
array=array.map((element, index)=>({
    ...element, 
    "posicion":index
})) */


// Solución Erick
const data = [
    { nombre: "Alba", edad: 15 },
    { nombre: "Estrella", edad: 30 },
    { nombre: "Belen", edad: 20 },
    { nombre: "Santiago", edad: 4 },
    { nombre: "Katherine", edad: 55 },
  ];
  
  const porEdad = data.slice(0);
  porEdad.sort(function (a, b) {
    return a.edad - b.edad;
  });
  
  console.log(porEdad);
  let index = 0;
  porEdad.map((e) => {
    e.posicion = index;
    index++;
    return e
  });


// Output:

// [ { nombre: 'Santiago', edad: 4, posicion: 0 },
//   { nombre: 'Alba', edad: 15, posicion: 1 },
//   { nombre: 'Belen', edad: 20, posicion: 2 },
//   { nombre: 'Estrella', edad: 30, posicion: 3 },
//   { nombre: 'Katherine', edad: 55, posicion: 4 }]


// ----------------------------------------------------------------------
// 6
// 🚀Software Factory
// Pensemos que somos una software factory (empresa de desarrollo) y tenemos un cliente que tiene varios artículos de tecnología. Este cliente nos plantea dos necesidades para su negocio:

// Conocer el valor total de cada artículo según sus cantidades (es decir, cuál es el valor total de todos sus televisores, por ejemplo).

// Imprimir una lista que separe cada artículo con su respectiva suma total de valores en sus respectivos Objetos.

// ¿Cómo realizar estos pedidos?

// Crearás una nueva Función, en la cual su argumento haga referencia a un Arreglo de productos del ecommerce (el cual nuestro cliente ya nos brinda).

let ecommerce = [
{nombre: "Samsung TV", precio: 6000, articulos:10}, 
{nombre: "DELL notebook", precio: 4000, articulos:30 },
{nombre:"Auriculares Sony", precio: 1500, articulos:15},
{nombre:"Monitor Philips", precio:12000, articulos:20},
{nombre:"Teclado logitech", precio: 3000, articulos:5}]
 
// La Función en general tendrá que devolver un nuevo Arreglo con Objetos que tengan el nombre de cada producto y el valor total de todos los artículos que se encuentren en la tienda.
let auditoria = ecommerce.map(inventario =>{
    let valorInventario = {}
    valorInventario[inventario.nombre] = parseInt(inventario.precio) * parseInt(inventario.articulos)
    return valorInventario
})
// console.log(auditoria)
// ¿Qué debería devolver?
// totalArtículos(ecommerce) 
// // Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
// {Samsung TV: 60000}
// {DELL notebook: 120000}
// {Auriculares Sony: 22500}
// {Monitor Philips: 240000}
// {Teclado logitech: 15000}
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
