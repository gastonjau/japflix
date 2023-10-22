document.addEventListener("DOMContentLoaded", ()=>{
    let btnBuscar = document.getElementById("btnBuscar");
    fetch("https://japceibal.github.io/japflix_api/movies-data.json")
    .then(response=>response.json())
    .then(data =>{ btnBuscar.addEventListener("click", handleFunction )
        let buscar = document.getElementById("inputBuscar");
        let lista = document.getElementById("lista");
        function calificacion(score) {
            if (score == "5") {
              return `
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                `;
            } else if (score == "4") {
              return `
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                `;
            } else if (score == "3") {
              return `
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                `;
            } else if (score == "2") {
              return `
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                `;
            } else if (score == "1") {
              return `
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                `;
            } else if (score == "0") {
              return `
                  Sin calificación.
                `;
            }
            return "Puntuación no válida";
          }

          

        function handleFunction (){
            lista.innerHTML = "";
            let peliculasFiltradas = data.filter(cosa => 
                                                {
                                                
                                                cosa.title.toLowerCase().startsWith(buscar.value) ||
                                                cosa.tagline.toLowerCase().startsWith(buscar.value)||
                                                cosa.genres.some((genre) => genre.name.startsWith(buscar.value)) ||
                                                cosa.overview.toLowerCase().startsWith(buscar.value) ?
                                                lista.innerHTML +=
                                                `<li class="list-group-item text-center color1">${cosa.title} <br />${cosa.tagline}
                                                </li>
                                                ` : "" } )
            console.log(peliculasFiltradas)
        }})

    })