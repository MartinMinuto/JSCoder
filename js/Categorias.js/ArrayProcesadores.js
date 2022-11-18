const carrito = [];



const Procesadores = [
  {
   id:1,
   nombre:"I3 9gen",
   marca:"Intel",
   precio:"$900",
   stock:"Sin stock", // De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
   id:2,
   nombre:"I3 10gen",
   marca:"Intel",
   precio:"$950",
   stock:"Sin stock", // De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
   id:3,
   nombre:"I3 11gen",
   marca:"Intel",
   precio:"$1100",
   stock:"Sin stock", // De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
   id:4,
   nombre:"I5 9gen",
   marca:"Intel",
   precio:"$1050",
   stock:"Sin stock",// De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
   id:5,
   nombre:"I5 10gen",
   marca:"Intel",
   precio:"$1140",
   stock:"Sin stock", // De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
   id:6,
   nombre:"I5 11gen",
   marca:"Intel",
   precio:"$1350",
   stock:"Sin stock", // De momento
   imagen:'./imagenes/intel.jpg'
  },
  {
    id:7,
    nombre:"Ryzen 3",
    marca:"AMD",
    precio:"$890",
    stock:"Sin stock", // De momento
    imagen:'./imagenes/intel.jpg'
   },
   {
    id:8,
    nombre:"Ryzen 5",
    marca:"AMD",
    precio:"$1250",
    stock:"Sin stock", // De momento
    imagen:'./imagenes/intel.jpg'
   },
   {
    id:9,
    nombre:"Ryzen 7",
    marca:"AMD",
    precio:"$1500",
    stock:"Sin stock", // De momento
    imagen:'./imagenes/intel.jpg'
   }
];

let ArticulosCard = document.getElementById('carta');
function Productos(){
for (const Procesador of Procesadores){
  let card = document.createElement('div');
  card.className ="card col-3"
  card.innerHTML += `
              <div class="card">
                   <img src=../Imagenes/intel.jpg class="card-img-top" alt=Procesador>
                         <div class="card-body">
                            <h5 class="card-title">${Procesador.nombre}</h5>
                            <p class="card-text">${Procesador.precio}</p>
                            <button id='Boton${Procesador.id}' class="btn">Comprar</button> 
                         </div>
             </div>
  
  `;
  ArticulosCard.append(card);
}
}

Productos();

Procesadores.forEach((Procesador) => {
  document.getElementById(`Boton${Procesador.id}`).addEventListener("click",function(){
    AgregarAlCarrito(Procesador);
  })
  
});

function AgregarAlCarrito(ProcesadorAComprar){
   carrito.push(ProcesadorAComprar);
   console.table(carrito);
   Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Producto agregado al carrito!',
    showConfirmButton: false,
    timer: 1500
  });
   document.getElementById("TablaBody").innerHTML +=`
      <tr>
          <td>${ProcesadorAComprar.id}<td>
          <td>${ProcesadorAComprar.nombre}<td>
          <td>${ProcesadorAComprar.precio}<td>
      <tr>
   `;
   let total = carrito.reduce((acumulador,prod)=> acumulador + prod.precio,0)
   document.getElementById("total").innerText="Total a Pagar $: "+total;
}


const GuardoLocal = JSON.parse(localStorage,getItem("Procesadores")) || [];

GuardoLocal("Procesadores", JSON,stringify(Procesador));