


function total(){
    let precio = 0;
    let envio = 150;

        // Con el Array Menú hago la impreción en pantalla del pedido.
    let menu = [
    " ",
    " Hamburguesa Triple",
    " Hamburguesa Doble",
    " Hamburguesa Simple",
    " Aros de Cebolla",
    " Papas Fritas"
    ];


    // Ingreso de datos para la simulacion de compra.

 let pedido = parseInt(prompt(` Bienvenido a Burguer, Selecciona tu pedido
1 - Hamburguesa Triple 
2 - Hamburguesa Doble 
3 - Hamburguesa Simple 
4 - Aros de cebolla 
5 - Papas fritas
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
    precio = precio + 500
    alert(`Aros de cebollas crujientes con dos salsas. Su valor es de $500.`);

}else if(pedido === 5){
    precio = precio + 650
    alert(`Papas fritas con chedar y bacon. Su valor es de $650.`);
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

    document.write(`Tu pedido es el siguiente: ${cantidad}`);
    document.write( menu [ pedido ]);
}

total();

  
