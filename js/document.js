let libros=[];

function ObtenerDatos(){
  const URLGET= "https://api.itbook.store/1.0/new";
  fetch(URLGET)
     .then(resultado => resultado.json())
     .then(data => {
          console.log(data);
          libros=data.books;
          console.log(libros);
          libros.forEach((libro)=>{
            document.getElementById("Apis").innerHTML += `
                <tr>    
                    <td>${libro.title}</td>
                    <td><img src=${libro.image}></td>
                </tr>
            `
          })

     });
}

ObtenerDatos();

