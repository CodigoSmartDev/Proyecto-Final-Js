

let precio = 0;
let envio = 0;
let costo = precio * cantidad;
let costoFinalConEnvio = costo + envio;
let costoFinalSinEnvio = costo;

let pedido = parseInt(prompt(` Hola, gracias por elegirnos.Selecciona tu pedido
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
}else if(pedido != [1,2,3,4,5]){
    alert(`Su pedido es incorrecto`);
    return;
}

let cantidad = parseInt(prompt(`Cuantas vas a pedir?`));

if(cantidad >= 1){
    alert(`Listo, tu pedio esta en marcha. El costo de tu pedido es ${costoFinalSinEnvio}.`);
}

let delivery = prompt(`Querés que lo enviemos? Se aplicará un recargo de $150.`);

if( delivery.tolocalLowerCase() === "si"){
    envio = envio + 150;
    alert(`Tu pedido llegarrá en 40 minutos. Te estaremos avisando cuando salga. El total es de ${costoFinalConEnvio}`);
}else{
    alert(`Pasá a retirarlo por el local. En 20 minutos estará listo. El total es de ${costoFinalSinEnvio}`);
}

let pago = parseInt(prompt(`Elegí la forma de pago
1 - Efectivo
2 - Pago virtual`));

if(pago === 1){
    alert(`Con cúanto abonas, asi te enviamos el vuelto? El total es de ${costoFinalConEnvio}`);
 }else{
    alert(`El total es de ${costoFinalConEnvio}`);
 }

