localStorage.setItem("usuario","Martin Minuto")
localStorage.setItem("ano","2022")




/*let Teclado = 500;
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


 Procesadores.forEach((Procesadores) => console.log(Procesadores.nombre, Procesadores.precio));

    let BuscarProcesador = prompt("Que producto estas buscando?")
    const resultado = Procesadores.filter((Procesador)=> Procesador.marca.includes("Intel"))
    if (resultado != undefined){
       console.log(resultado);
    }else{
       console.log("No se encuentra el procesador solicitado!");
    }
*/

const Carrito = [];


const Procesador = 
    {
     id:1,
     nombre:"I3 9gen",
     marca:"Intel",
     precio:"$900",
     stock:"Sin stock", // De momento
     imagen:'./imagenes/intel.jpg'
    }

 
 
 let ArticulosCard = document.getElementById('card');
 
 ArticulosCard.innerHTML = `
             <div class="card col-4">
                     <img src=../Imagenes/intel.jpg class="card-img-top" alt=Procesador>
                           <div class="card-body">
                           <h5 class="card-title">${Procesador.nombre}</h5>
                           <p class="card-text">${Procesador.precio}</p>
                           <button id="Boton" class="btn">Comprar</button> 
                     </div>
                 </div>
 `;



 let Boton = document.getElementById("Boton");


 Boton.addEventListener("click",AgregarAlCarrito);

 function AgregarAlCarrito(){
    alert("Producto agregado al carrito");
    Carrito.push(Procesador);
    console.table(Carrito);
 }




 const PrecioTotal = Procesador.reduce((sumar,Procesador)=> sumar + Procesador.precio,0);
console.log("El total a abonar es $ "+ PrecioTotal);