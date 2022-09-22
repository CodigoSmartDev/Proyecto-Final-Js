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
    let cantidadproductos = document.querySelector('.contador'); 
     
     
    let compra= []; 
    let contadorProductos= 0; 
    let total = 0; 
     
   
    loadEventListenrs(); 
    function loadEventListenrs(){ 
        contenidoCarrito.addEventListener('click', agregarProductos); 
    
        contenidoCompra.addEventListener('click', eliminarProductos); 
    } 
     
    function agregarProductos(e){ 
        e.preventDefault(); 
        if(e.target.classList.contains('btn-agregar')){ 
        const selectproductos = e.target.parentElement;
        cargarContenido(selectproductos); 
        } 
    } 
     
    function eliminarProductos(e){ 
        if (e.target.classList.contains('btn-eliminar')){ 
            const deleteId = e.target.getAttribute('data-id'); 
     
            compra.forEach(value => { 
                if (value.id == deleteId){ 
                let precioReduce = precio * cantidad; 
                total = total - precioReduce;  
                                    } 
            }); 
                compra = compra.filter(productos => productos.id !== deleteId); 
                contadorProductos --; 
            } 

            // El contador se quedaba con "1" aunque hubiera 0 productoss 
                if (compra.length === 0){ 
                    precioTotal.innerHTML = 0; 
                    cantidadproductos.innerHTML = 0; 
                } 
                loadHtml(); 
        } 
     
        function cargarContenido(productos){ 
            const infoProductos = { 
                imagen: productos.querySelector('div img').src, 
                titulo: productos.querySelector('.text-title').textContent, 
                precio: productos.querySelector('span .precio').textContent, 
                id: productos.querySelector('a').getAttribute('data-id'), 
                cantidad: 1 
            } 
     
            total = total + infoProductos.precio; 
                
     
            const existe= compra.some(productos => productos.id === infoProductos.id); 
                if (existe){ 
                const prod = compra.map(productos => { 
                if (productos.id === infoProductos.id){ 
                    productos.cantidad ++; 
                    return productos; 
                }else{ 
                    return productos; 
                } 
            }); 
                compra = [...prod]; 
            }else{ 
                compra = [...compra, infoProductos] 
                contadorProductos ++; 
        } 
            loadHtml(); 
    
        } 
     
        function loadHtml(){ 
                    clearHtml(); 
                    compra.forEach(productos => { 
                    const {imagen, titulo, precio, cantidad, id} = productos; 
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

            cantidadproductos.innerHTML = contadorProductos; 
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

  
