let tienda = document.getElementById("tienda");
let miCarrito = document.getElementById("miCarrito");

let verCarrito = document.getElementById("verCarrito");
let cerrarCarrito = document.getElementById("cerrarCarrito");

let verTotal = document.getElementById("vertotal");
verTotal.style.display = "none";
let totalContent = document.getElementById("totalContent");

let carrito = [];

const productos = [
  {
   name: "Visibility",
   precio: 50,
  },
  {
   name: "Mentions",
   precio: 20,
  },
  {
   name: "Priority",
   precio: 35,
  }
];

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
      carrito.push({
         name: producto.name,
         precio: producto.precio
      });
   })
});

verCarrito.addEventListener("click", () => {
   verTotal.style.display = "block";
   miCarrito.style.display = "block";
   miCarrito.innerHTML = "";
   carrito.forEach((producto) => {
      let contentCarrito = document.createElement("div");
      contentCarrito.className = "contentCarrito";

      contentCarrito.innerHTML = `
      <h3>${producto.name}</h3>
      <h3>${producto.precio + "USD"}</h3>
      `;

      miCarrito.append(contentCarrito);
   });
});

cerrarCarrito.addEventListener("click", () => {
     verTotal.style.display = "none";
   miCarrito.style.display = "none"; 
   totalContent.style.display = "none";
});

verTotal.addEventListener("click", () => {
   const total = carrito.reduce((acc, el) => acc + el.precio, 0);
   let totalContentElement = document.createElement("h1");
   totalContentElement.innerHTML = `The total amount is ${total} $`;
   totalContent.append(totalContentElement);
});
