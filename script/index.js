//ecommerce
// Crear la clase User, con las propiedades nombre y apellido
class User {
    constructor(nombre, apellido) {
        this.nombre = nombre,
            this.apellido = apellido
    }
}
// crear la clase Businness que herede las propiedades de User y tenga la propiedad addmin=true
class Businness extends User {
    constructor(nombre, apellido) {
        super(nombre, apellido),
            this.admin = true,
            this.products = new Products()
    }

    static showProducts(negocio) {
        return negocio.products.products
    }
}
// crear la clase Buyer que extienda de User
class Buyer extends User {
    constructor(nombre, apellido) {
        super(nombre, apellido);
        this.carrito = new Cart()
    }
}
// crear la clase Cart que en su constructor tenga la propiedad carrito y que sea igual a un array vacio
class Cart {
    constructor() {
        this.carrito = []
    }

    showCarrito() {
        return this.carrito
    }

    addCarrito(nombre, cantidad, negocio) {
         let productoAgregar = Businness.showProducts(negocio).find(producto => producto.nombre.toLowerCase() == nombre.toLowerCase())
         if (productoAgregar) this.carrito.push({nombre,cantidad})
        return this.showCarrito()
    }

    deleteitemCarrito(nombre) {
        this.carrito = this.carrito.filter(item => {
            return item["nombre"].toLowerCase() != nombre.toLowerCase()
        })
        return this.showCarrito()
    }

    modifyItemCarrito(nombre, cantidad) {
        this.carrito.map((element, index, array) => {
            if (element["nombre"].toLowerCase() == nombre.toLowerCase()) {
                element["cantidad"] = cantidad
            }
        })

        return this.showCarrito()
    }


}
// crear la clase Products que en su constructor tenga la propiedad products igual a un array vacio
class Products {
    constructor() {
        this.products = []
    }

    showProducts() {
        return this.products
    }

    addProducts(nombre, precio, cantidad) {
        this.products.push({ nombre, precio, cantidad })
    }

    deleteProduct(nombre) {
        this.products = this.products.filter(value =>{
            return value.nombre.toLowerCase() != nombre.toLowerCase()
        })
    }

    modifyPrice(nombre, precio) {
        this.products.map((element, index, array) => {
            if (element["nombre"].toLowerCase() == nombre.toLowerCase()) {
                element["precio"] = precio
            }
        })

        return this.showProducts()
    }
    modifyQty(nombre, cantidad) {
        this.products.map((element, index, array) => {
            if (element["nombre"].toLowerCase() == nombre.toLowerCase()) {
                element["cantidad"] = cantidad
            }
        })

        return this.showProducts()
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


let oxxo = new Businness('OXXO', 'S.A. de C.V.');
oxxo.products.addProducts("CocaCola", 18, 10);
oxxo.products.addProducts("Vikingo", 25, 50);
oxxo.products.addProducts("Sabritas", 20, 20);
console.log(Businness.showProducts(oxxo));

let Cesar = new Buyer("Cesar","Castro")
Cesar.carrito.addCarrito("vikingo",2,oxxo)
Cesar.carrito.addCarrito("cocacola",1,oxxo)

