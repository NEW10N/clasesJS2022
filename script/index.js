
// construir un programa que me diga si me puedo jubilar

// utilizar propt para preguntarle al usuario , su nombre, edad y genero si es mujer a los 60 y si es hombre a los 65

// y con un alert avisar si ya esta en edad de jubilarse y si no cuantos años de aporte le faltan


let nombre = prompt('Cual es tu nombre?')
let edad = prompt('Cual es tu edad?')
let genero = prompt('Cual es tu genero? (hombre/mujer)')

if (genero.toLowerCase() === 'hombre'){
    if (edad >= 65){
        alert('Te puedes jubilar ' + nombre +'.')//opcion 1 para concatenar
        console.log("Te puedes jubilar ", nombre, ".")//opcion2 para concatenar
        alert(`Puedes jubilarte ${nombre}, felicidades!!!.`)
    }else{
        alert('Lo sentimos ' + nombre +', aun no puedes jubilrte, hasta dentro de ' + String(65 - parseInt(edad)) + ' anos')
    }
}else if(genero.toLowerCase() === 'mujer'){
    if (edad >= 60){
        alert('Te puedes jubilar ' + nombre +'.')
    }else{
        alert('Lo sentimos ' + nombre +', aun no puedes jubilrte, hasta dentro de ' + String(60 - parseInt(edad)) + ' anos')
    }
}else{
    alert("No se selecciono un genero correcto")
}