
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


let ArticulosCard = document.getElementById("card");

ArticulosCard.innerHTML `
            <div class="card col-4">
                    <img src=../Imagenes/intel.jpg class="card-img-top" alt=Procesador>
                          <div class="card-body">
                          <h5 class="card-title">${Procesadores.nombre}</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href=Boton class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
`;