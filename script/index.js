//ecommerce
// Crear la clase User, con las propiedades nombre y apellido
class User{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
// crear la clase Businness que herede las propiedades de User y tenga la propiedad addmin=true
class Businnes extends User{
    constructor(nombre,apellido){
        super(nombre,apellido);
        this.admin = true
        this.products = new Products()
    }


    static showProducts(negocio){
        return negocio.products.productos
    }
    
}
// crear la clase Buyer que extienda de User

class Buyer extends User{
    constructor(nombre, apellido){
        super(nombre, apellido)
        this.cart = new Cart()
    }
}

// crear la clase Cart que en su constructor tenga la propiedad carrito y que sea igual a un array vacio
class Cart{
    constructor(){
        this.carrito = [];
    }
}
// crear la clase Products que en su constructor tenga la propiedad products igual a un array vacio
class Products{
    constructor(){
        this.productos = []
    }

    addProducts(nombre,precio,cantidad){
        let producto = {nombre, precio,cantidad}
        this.productos.push(producto)
        console.log(this.productos);
    }

    deleteProduct(nombre){
        this.productos = this.productos.filter(product =>{
            return product.nombre.toLowerCase() != nombre.toLowerCase()
        })
    }
    
    modProduct(nombre,precio,cantidad){
        this.productos = this.productos.map((value,index,array) =>{
            console.log(value);
            // if (value["nombre"] == nombre){
            //     value["precio"] = precio
            //     value["cantidad"] = cantidad
            // }
        })
    }
}
// que Business tenga la propiedad products y que sea una instancia de la clase Products


// que Business tenga un metodo estatico para poder mostrar todos los productos
// que Buyer tenga la propiedad cart y que sea una instancia de la clase Cart
// que Products tenga un metodo para poder agregar productos en forma de objeto con las propiedades nombre, precio y cantidad



// que tenga el metodo para poder eliminar un producto
// que tenga el metodo para poder modificar un producto 
// que tenga el metodo para mostrar los productos

// que Cart tenga el metodo addToCart que agregue productos al carrito en forma de objeto con las propiedades nombre y cantidad, pero antes tiene que comprobar si existe el producto, atravez del metodo de clase de Business
// que tenga el metodo para poder eliminar un producto del carrito
// que tenga el metodo para poder modificar un producto  del carrito
// que tenga el metodo para mostrar los productos del carrito

let OXXO = new Businnes("OXXO","S.A. de C.V.")
console.log(OXXO);

let catalogoOXXO = new Products()

catalogoOXXO.addProducts("Pan Bimbo",20,30)
console.log(catalogoOXXO.products);


