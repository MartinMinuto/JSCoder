const CarritoDeCompra =[]



const PrecioTotal = Procesador.reduce((sumar,Procesador)=> sumar + Procesador.precio,0);
console.log("El total a abonar es $ "+ PrecioTotal);
