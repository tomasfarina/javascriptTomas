let tienda = document.getElementById("tienda");
let miCarrito = document.getElementById("miCarrito");

let verCarrito = document.getElementById("verCarrito");
let cerrarCarrito = document.getElementById("cerrarCarrito");

let verTotal = document.getElementById("vertotal");
verTotal.style.display = "none";
let totalContent = document.getElementById("totalContent");


class Carrito {
   constructor(){
      this.cartItems = [];
      this.checkIfItemExists;
   }

   addItem(producto){
      this.cartItems.push(producto);
      const alreadyInCart=carrito.checkIfItemExists(producto.nombre);
      if(alreadyInCart)
         return producto.updateCantidad(producto.cantidad)
         else return this.productos.push(producto)
      
   }
   checkIfItemExists(nombre){
      return  this.cartItems.filter(item=> item.nombre == nombre)[0] != undefined 
 }
   removeItem(productoNombre){
      this.cartItems = this.cartItems.filter(service => service.nombre != productoNombre)
   } 
   emptyCart(){
      this.CartItems = [];
      
   }
   getItems() {
       return this.cartItems;
   }

}

function addItem(producto){
   carrito.addItem;
   window.localStorage.setItem(carrito, JSON.stringify(carrito));
}


class Producto {
   constructor(nombre,precio,cantidad) {
      this.nombre = nombre;
      this.precio = parseFloat(precio);
      this.cantidad = cantidad;
      }

      updateCantidad(cantidad){
         this.cantidad = ++cantidad;
      }
 
}


const productos = [
   new Producto("Visibility", "50", 0),
   new Producto("Mentions", "20", 0),
   new Producto("Priority", "35", 0)
];

let carrito = new Carrito();







productos.forEach((producto) =>{
   let content = document.createElement("div");
   content.innerHTML = `
      <h3>${producto.name}</h3>
      <h3>${producto.precio + " USD / 12 month subscription"}</h3>
      `;
   tienda.append(content);

   let comprar = document.createElement("button");
   
   comprar.className = "comprar";
   comprar.innerText = "Buy"; 

   content.appendChild(comprar);

   comprar.addEventListener("click", () => {
      let carritoLocalStorage = JSON.parse(window.localStorage.getItem('carrito'));
      carrito = carritoLocalStorage==null?[]:carritoLocalStorage;
      carrito.push({
         name: producto.name,
         precio: producto.precio,
         
      });
      Toastify({
         text: "Item added to cart",
         duration: 3000,
         destination: "https://github.com/apvarun/toastify-js",
         newWindow: true,
         gravity: "bottom",
         position: "right", 
         stopOnFocus: true, 
         style: {
           background: "linear-gradient(to right, #00b09b, #96c93d)",
         },
         onClick: function(){}
       }).showToast();
      window.localStorage.setItem('carrito', JSON.stringify(carrito));
   })
});

verCarrito.addEventListener("click", () => {
   verTotal.style.display = "block";
   miCarrito.style.display = "block";
   miCarrito.innerHTML = "";
   totalContent.innerHTML = "";
   carrito = JSON.parse(window.localStorage.getItem('carrito'));
   carrito.forEach((producto) => {
      let contentCarrito = document.createElement("div");
      contentCarrito.className = "contentCarrito";

      contentCarrito.innerHTML = `
      <h3>${producto.name}</h3>
      <h3>${producto.precio + "USD"}</h3>
      `;

      miCarrito.append(contentCarrito);

   });
      const total = carrito.reduce((acc, el) => acc + el.precio, 0);
   let totalContentElement = document.createElement("h1");
   totalContentElement.innerHTML = `The total amount is ${total} $`;
   totalContent.append(totalContentElement);
   
   
});


cerrarCarrito.addEventListener("click", () => {
     verTotal.style.display = "none";
   miCarrito.style.display = "none"; 
   totalContent.style.display = "none";
   
});





