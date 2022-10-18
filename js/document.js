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

const Procesadores = [
    {
     id:1,
     nombre:"I3 9gen",
     marca:"Intel",
     precio:"$900",
     stock:"Sin stock" // De momento
    },
    {
     id:2,
     nombre:"I3 10gen",
     marca:"Intel",
     precio:"$950",
     stock:"Sin stock" // De momento
    },
    {
     id:3,
     nombre:"I3 11gen",
     marca:"Intel",
     precio:"$1100",
     stock:"Sin stock" // De momento
    },
    {
     id:4,
     nombre:"I5 9gen",
     marca:"Intel",
     precio:"$1050",
     stock:"Sin stock" // De momento
    },
    {
     id:5,
     nombre:"I5 10gen",
     marca:"Intel",
     precio:"$1140",
     stock:"Sin stock" // De momento
    },
    {
     id:6,
     nombre:"I5 11gen",
     marca:"Intel",
     precio:"$1350",
     stock:"Sin stock" // De momento
    },
    {
     id:7,
     nombre:"Ryzen 3",
     marca:"AMD",
     precio:"$890",
     stock:"Sin stock" // De momento
    },
    {
     id:8,
     nombre:"Ryzen 5",
     marca:"AMD",
     precio:"$1250",
     stock:"Sin stock" // De momento
    },
    {
     id:9,
     nombre:"Ryzen 7",
     marca:"AMD",
     precio:"$1500",
     stock:"Sin stock" // De momento
    }
 ];

 Procesadores.forEach((Procesadores) => console.log(Procesadores.nombre, Procesadores.precio));

    let BuscarProcesador = prompt("Que producto estas buscando?")
    const resultado = Procesadores.filter((Procesador)=> Procesador.marca.includes("Intel"))
    if (resultado != undefined){
       console.log(resultado);
    }else{
       console.log("No se encuentra el procesador solicitado!");
    }

