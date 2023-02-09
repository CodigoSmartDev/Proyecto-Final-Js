
const contenedorProductos = document.getElementById('section1');
const contenedorCarrito = document.getElementById('cont-pedidos');
const botonVaciar = document.getElementById('vaciar-carrito');
const contadorCarrito = document.getElementById('contador');
const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');
const expandirCarrito = document.getElementById('carrito');
const close = document.getElementById('btn-cerrar');

let carrito = [];

function openCart(){
    document.getElementById("cont-carrito").style.display = "block";
}
expandirCarrito.addEventListener('click', openCart);

function closeCart(){
    document.getElementById("cont-carrito").style.display = "none";
}
close.addEventListener('click', closeCart);

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
    carrito = JSON.parse(localStorage.getItem('carrito'))
    actualizarCarrito();
    }
});

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito();
    vaciarLs();
});

// Render de los productos en el HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
        <div class="card" id="menu">
            <img class="card-img" src="${producto.img}" alt="hamburguesa">
            <div class="card-info">
                <h3 class="text-title">${producto.nombre}</h3>
                <p class="text-body">${producto.desc}</p>
            </div>
            <div class="card-footer">
                <span class="precio">$ ${producto.precio}</span>
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
        prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++;
                    swal({  
                    type: 'success',
                    title: 'Exitoso',
                    text: `Tu pedido se agrego al carrito`,
                    timer: 3000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end',
                });
            }
        })
    } else {
        const item = stockProductos.find( prod => prod.id === prodId)
        carrito.push(item)
    }
    
    actualizarCarrito()
};

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const tr = document.createElement('tr');
        tr.className = ('productoEnCarrito');
        tr.innerHTML = `
        <td><img class="img-carrito" src="${prod.img}"><td>
        <td class="nombre">${prod.nombre}<td>
        <td class="precio">$${prod.precio}<td>
        <td class="cantidad"><span id="cantidad">${prod.cantidad}</span><td>
        <button onclick="eliminarDelCarrito(${prod.id})" class="eliminar-producto"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(tr);
        
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()

};

function vaciarLs() {
    localStorage.clear();  
} 