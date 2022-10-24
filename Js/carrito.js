

// class Carrito{
  
//     openCart(e){
//         document.getElementById("cont-carrito").style.display = "block";
//     }

//     closeCart(e){
//         document.getElementById("cont-carrito").style.display = "none";
//     }

//     // añdir al carrito
//     comprarproducto(e){
//         e.preventDefault();
//         if(e.target.classList.contains('btn-agregar')){
//             const producto = e.target.parentElement.parentElement;
//             this.leerDatosproducto(producto);
//             swal({  type: 'success',
//                     title: 'Exitoso',
//                     text: `Tu pedido se agrego al carrito`,
//                     timer: 2000,
//                     showConfirmButton: false,
//                     toast: true,
//                     position: 'top-end',
//                });
//         }
//     }

//     leerDatosproducto(producto){
//         const infoproducto = {
//             imagen: producto.querySelector('img').src, 
//             titulo: producto.querySelector('h3').textContent, 
//             precio: producto.querySelector('span').textContent, 
//             id: producto.querySelector('a').getAttribute('data-id'), 
//             cantidad: 1
//         }
//         let productoLs;
//         productoLs = this.obtenerproductosLs();
//         productoLs.forEach(function(productoLs){
//             if(productoLs.id = infoproducto.id){
//                 productoLs = productoLs.id;
//             }
//             if (producto.id === infoproducto.id){ 
//                 producto.cantidad++; 
//                 return producto; 
//             } else { 
//                 return producto; 
//             } 
//         });
        
//         this.insertarCarrito(infoproducto);
//     }

//     insertarCarrito(producto){
//         const row = document.createElement('tr');  
//         row.innerHTML = ` 
//             <td><img src= "${producto.imagen}" width=40></td>  
//             <td class='titulo-producto'>${producto.titulo}</td> 
//             <td class='precio-producto'>${producto.precio}</td> 
//             <td class='cantidad-producto'>cantidad: ${producto.cantidad}</td> 
//             <td> 
//             <a href="#" class='eliminar-producto' data-id= ${producto.id}>x</a> 
//             </td>
//         `;
//         listaproductos.appendChild(row);
//         this.guardarproductosLs(producto);
//     }

//     eliminarproducto(e){
//         e.preventDefault();
//         let producto, productoID;
//         if (e.target.classList.contains('eliminar-producto')){
//             e.target.parentElement.parentElement.remove();
//             producto = e.target.parentElement.parentElement;
//             productoID = producto.querySelector('a').getAttribute('data-id');
//         }

//         this.eliminarproductoLs(productoID);
//     }

//     vaciarCarrito(e){
//         e.preventDefault();
//         while(listaproductos.firstChild){
//             listaproductos.removeChild(listaproductos.firstChild);
//         }
//         this.vaciarLs();

//         return false;
//     }

//     guardarproductosLs(producto){
//         let productos;
//         productos = this.obtenerproductosLs();
//         productos.push(producto);
//         localStorage.setItem('productos', JSON.stringify(productos));
//     }

//     obtenerproductosLs(){
//         let productosLs;

//         if(localStorage.getItem('productos') === null){
//             productosLs = [];
//         }
//         else{
//             productosLs = JSON.parse(localStorage.getItem('productos'));
//         }
//         return productosLs;
//     }

//     eliminarproductoLs(productoID){
//         let productosLs;
//         productosLs = this.obtenerproductosLs();
//         productosLs.forEach(function(productoLs, index){
//             if(productoLs.id === productoID){
//                 productosLs.splice(index, 1);
//             }
//         });

//         localStorage.setItem('productos', JSON.stringify(productosLs));
//     }

//     leerLs(){
//         let productosLs;
//         productosLs = this.obtenerproductosLs();
//         productosLs.forEach(function(producto){
//             const row = document.createElement('tr');  
//             row.innerHTML = ` 
//                 <td><img src= "${producto.imagen}" width=40></td>  
//                 <td> ${producto.titulo}</td> 
//                 <td>${producto.precio}</td> 
//                 <td> cantidad:${producto.cantidad}</td> 
//                 <td> 
//                 <a href="#" class= "eliminar-producto" data-id= "${producto.id}">X</a> 
//                 </td>
//             `;
//             listaproductos.appendChild(row);
//         });
//     }

//     vaciarLs(){
//         localStorage.clear();
//     }

//     procesarPedido(e){
//         e.preventDefault();
//         if(this.obtenerproductosLs().length === 0){
//             swal({  type: 'error',
//                     title: 'Oops...',
//                     text: 'No tienes productos en el carrito.',
//                     // icon: 'success',
//                     timer: 1500,
//                     showConfirmButton: false,
//                });
//         }else{
//             location.href = 'compra.html';
//         }
        
//     }

// }


const contenedorProductos = document.getElementById('lista-productos');
const contenedorCarrito = document.getElementById('carrito');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contador');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
const expandirCarrito = document.getElementById('carrito');
const close = document.getElementById('btn-cerrar');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        // actualizarCarrito()
    }
});

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
});

function openCart(){
            document.getElementById("cont-carrito").style.display = "block";
        }
        expandirCarrito.addEventListener('click', openCart);

function closeCart(){
            document.getElementById("cont-carrito").style.display = "none";
        }
        close.addEventListener('click', closeCart);

// Render de los prods en el HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <div class="card" id="menu">
            <img class="card-img" src=${producto.img} alt="hamburguesa">
            <div class="card-info">
                <h3 class="text-title">${producto.nombre}</h3>
                <p class="text-body">${producto.desc}</p>
            </div>
            <div class="card-footer">
                <span class="precio">${producto.precio}</span>
                <a href="" class="btn-agregar" id="agregar${producto.id}"><i class="fa-solid fa-cart-plus"></i></a>
            </div>
        </div>
    `
    contenedorProductos.appendChild(div);

    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)

    })
});

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some (prod => prod.id === prodId)
    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
                    swal({  type: 'success',
                    title: 'Exitoso',
                    text: `Tu pedido se agrego al carrito`,
                    timer: 2000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                });
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    console.log('agregarAlCarrito')
    
    actualizarCarrito()
};

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
};

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "",
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="eliminar-producto"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div);
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}