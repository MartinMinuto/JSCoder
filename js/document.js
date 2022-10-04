
let Teclado = 500;
let Mouse = 300;
let Monitor = 600;
let MousePad = 50;
let Procesador = 500;
let Gabinete = 200;
let Auriculares = 150;
let Ventilador = 30;
let precio;

let Productos =prompt("Ingresar Articulo");
while (Productos != "Salir"){
    switch (Productos){
        case "Teclado":
         console.log("Vale $"+ Teclado);
         break;
        case "Mouse":
         console.log("Vale $"+ Mouse);
         break;
        case "Monitor":
         console.log("Vale $"+ Monitor);
         break;
         case "Mousepad":
         console.log("Vale $"+ MousePad);
         break;
         case "Procesardor":
         console.log("Vale $"+ Procesador);
         break;
         case "Gabinete":
         console.log("Vale $"+ Gabinete);
         break;
         case "Auriculares":
         console.log("Vale $"+ Auriculares);
         break;
         case "Ventilador":
         console.log("Vale $"+ Ventilador);
         break;
         default:
            console.log("El precio no se puede calcular");
            break;
    }
    Productos=prompt("Pregunta otro precio o escribi Salir");
    
}

let VerIVAProducto=parseFloat(prompt("ingresa precio para sacar el IVA"))

function CalIVA (precio){
    return precio *0.21;
}

let iva = CalIVA(VerIVAProducto);
console.log("El IVA es $"+iva);


function SumarPrecios(precio1, precio2){
    let resultado= precio1+precio2
    console.log("El Total es "+resultado);
}


  //Quiero hcer que esta funcion me devulva el total de los iteam que consulto por consola una ves esta termine!

  
/*
 let PrecioFinal =SumarPrecios;

    switch (PrecioFinal) {
        case (SumarPrecios(Teclado,Mouse)):
           console.log("Vale todo $800")
            break;
        case (SumarPrecios(Teclado,Monitor)):
           console.log("Vale todo $1100")
            break;
        case (SumarPrecios(Teclado,MousePad)):
           console.log("Vale todo $550")
            break;
         case (SumarPrecios(Teclado,Procesador)):
           console.log("Vale todo $1000")
            break;  
        case (SumarPrecios(Teclado,Gabinete)):
           console.log("Vale todo $700")
            break;  
                
    
        default:
            break;
    }

 console.log(PrecioFinal);
*/
