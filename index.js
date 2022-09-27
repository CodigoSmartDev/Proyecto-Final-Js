import searchFilters from "./Js/filtro_busqueda.js";
import hamburgerMenu from "./Js/menu_hamburguesa.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    
    searchFilters(".search", ".card");
     
    hamburgerMenu(".panel-btn", ".panel", ".menu ul a");

});


    // ---- Darck Mode ----
    
    const themeActual = localStorage.getItem(`theme`)
    const toggle = d.querySelector(`#toggle`);

    if (themeActual) {
        d.documentElement.setAttribute(`data-theme`, themeActual);
    }

    if (themeActual === `oscuro`) {
        toggle.checked = true;
    }

    const cambiarTheme = (e) =>{
        if (e.target.checked) {
            d.documentElement.setAttribute(`data-theme`, `oscuro`);
            localStorage.setItem(`theme`, `oscuro`);
        } else{
            d.documentElement.setAttribute(`data-theme`, null);
            localStorage.setItem(`theme`, null);
        }
    };

    toggle.addEventListener(`click`, cambiarTheme);

     // -----------------------



    // ----- Carrito -----

    let contenidoCarrito= document.querySelector('.productos'); 
    let contenidoCompra = document.querySelector('.items-carrito'); 
    let precioTotal = document.querySelector('.precio-total') 
    let cantidadProductos = document.querySelector('.contador'); 
     
     
    let compra = []; 
    let contadorProductos = 0; 
    let total = 0;
     
   
    loadEventListenrs(); 
    function loadEventListenrs(){ 
        contenidoCarrito.addEventListener('click', agregarProducto); 
    
        contenidoCompra.addEventListener('click', eliminarProducto); 
    } 
     
    function agregarProducto(e){ 
        e.preventDefault(); 
        if (e.target.classList.contains('btn-agregar')){ 
        const selectProducto = e.target.parentElement;
        cargarContenido(selectProducto); 
        } 
    } 
     
    function eliminarProducto(e){ 
        if (e.target.classList.contains('btn-eliminar')){ 
            const deleteId = e.target.getAttribute('data-id'); 
     
            compra.forEach(value => { 
                if (value.id == deleteId){ 
                let precioReduce = value.precio * value.cantidad; 
                total = total - precioReduce;  
                                    } 
            }); 
                compra = compra.filter(producto => producto.id !== deleteId); 
                contadorProductos--; 
            } 

                if (compra.length === 0){ 
                    document.getElementById('vacio').style.display = 'block';
                    precioTotal.innerHTML = 0; 
                    cantidadProductos.innerHTML = 0; 
                } 
                loadHtml(); 
        } 
     
        function cargarContenido(producto){ 
            const infoProducto = { 
                imagen: producto.querySelector('div img').src, 
                titulo: producto.querySelector('.text-title').textContent, 
                precio: producto.querySelector('span .precio').textContent, 
                id: producto.querySelector('a').getAttribute('data-id'), 
                cantidad: 1,
            } 
     
            total = total + infoProducto.precio; 
                
            const existe = compra.some(producto => producto.id === infoProducto.id); 
                if (existe){ 
                const prod = compra.map(producto => { 
                if (producto.id === infoProducto.id){ 
                    producto.cantidad++; 
                    return producto; 
                } else { 
                    return producto; 
                } 
            }); 
                compra = [...prod]; 
            } else { 
                compra = [...compra, infoProducto] 
                contadorProductos++; 
        } 
            loadHtml(); 
    
        } 
     
        function loadHtml(){ 
                    clearHtml(); 
                    compra.forEach(producto => { 
                    const {imagen, titulo, precio, cantidad, id} = producto; 
                    const row = document.createElement('div'); 
                    row.classList.add('item'); 
                    row.innerHTML = ` 
                    <img src= "${imagen}" alt="imagen"> 
                    <div class="item-content"> 
                     <h5> ${titulo}</h5> 
                     <h5 class= "carrito-precio">${precio}$</h5> 
                     <h6> cantidad:${cantidad}</h6> 
                    </div> 
                    <span class="btn-eliminar" data-id= "${id}">X</span> 
            `;                                                                                 
     
            contenidoCompra.appendChild(row); 
     
            precioTotal.innerHTML = total; 

            cantidadProductos.innerHTML = contadorProductos; 
        }); 
    } 
            function clearHtml(){ 
            contenidoCompra.innerHTML = ''; 
        }
        


        //  -------------------------



/*
function total(){
    let precio = 0;
    let envio = 150;

        // Con el Array Menú hago la impreción en pantalla del pedido.

    const carta = [
    "Hamburguesa triple", "Hamburguesa doble", "Hamburguesa simple", "Papas fritas",
    "Aros de cebolla"
    ];

    
    const menus = [
        {nombre: "Hamburguesa Triple", precio: 1250},
        {nombre: "Hamburguesa Doble", precio: 1100},
        {nombre:"Hamburguesa Simple", precio: 1000},
        {nombre: "Papas Fritas", precio: 650},
        {nombre: "Aros de Cebolla", precio: 500},
    ]

    let valor = parseInt(prompt(`Ingresá cuanto querés gastar y te decimos lo que tenés disponible.`));
    let filtrados = menus.filter(item => item.precio < valor);
    console.log(filtrados);


 let pedido = parseInt(prompt(` Bienvenido a Burguer, Selecciona tu pedido
1 - Hamburguesa Triple $1250
2 - Hamburguesa Doble $1100
3 - Hamburguesa Simple $1000
5 - Papas fritas $650
4 - Aros de cebolla $500
`));


if(pedido === 1){
    precio = precio + 1250
    alert( `Triple carne, extra chaddar, bacon y salsa. Incluyen papas y gaseosa. Su valor es de $1250.`);

}else if(pedido === 2){
    precio = precio + 1100
    alert(`Doble carne, extra cheddar, cebolla y salsa. Incluyen papas y gaseosa. Su valor es de $1100.`);

}else if(pedido === 3){
    precio = precio + 1000
    alert(`Hamburguesa de una sola carne mas cheddar, cebolla, lechuga, tomate y salsa. Incluyen papas y gaseosa. Su valor es de $1000.`);

}else if(pedido === 4){
    precio = precio + 650
    alert(`Papas fritas con chedar y bacon. Su valor es de $650.`);
    
}else if(pedido === 5){
    precio = precio + 500
    alert(`Aros de cebollas crujientes con dos salsas. Su valor es de $500.`);
}else{
    alert(`Su pedido es incorrecto`);
    total();
 }

    // Agregué DoWhile para ingresos erroneos.

 let cantidad;
 do {
    cantidad =parseInt(prompt(`Cuantas vas a pedir?`));
 } while (isNaN(cantidad));

    let costo = cantidad*precio;
    alert(`El costo de tu pedido es de $ ${costo}.`);

let delivery; 
do {
    delivery = prompt(`Querés que lo enviemos? Se aplicará un recargo de $150. (si/no)`);
} while (delivery != `si` && delivery != `no`);

if( delivery.toLocaleLowerCase() === "si"){

    let pago; 
    do {
        pago = parseInt(prompt(`Elegí la forma de pago
    1 - Efectivo
    2 - Pago virtual`));
    }while(pago != 1 && pago != 2);

        if(pago === 1){
            costoFinalConEnvio = costo+envio;
            alert(`El total es de $ ${costoFinalConEnvio}`);     

        }else if(pago === 2){
            costoFinalConEnvio = costo+envio;
            alert(`El total es de $ ${costoFinalConEnvio}, quedamos a la espera del comprobante para iniciar el pedido`);
        }
    }else if(delivery.toLocaleLowerCase() === "no"){
        costoFinalSinEnvio = costo;
        alert(`En 20 minutos estará listo. El total es de $ ${costoFinalSinEnvio}. Te esperamos, Gracias!!!`);
    }

    document.write(`Tu pedido es el siguiente: ${cantidad} `);
    document.write( carta [ pedido ]);
}

total();

*/

  
