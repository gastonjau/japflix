document.addEventListener("DOMContentLoaded", ()=>{
    let btnBuscar = document.getElementById("btnBuscar");
    fetch("https://japceibal.github.io/japflix_api/movies-data.json")
    .then(response=>response.json())
    .then(data =>{ btnBuscar.addEventListener("click", handleFunction )
        let buscar = document.getElementById("inputBuscar");
        let lista = document.getElementById("lista");


        function calificacion(score) {
          if (score == "8") {
            return `
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>`
              }
          if (score == "7") {
            return `
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>`
              }
          if (score == "6") {
            return `
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>`
              }
          if (score == "5") {
            return `
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star"></i>
                < i class="bi bi-star"><i/>
                <i class="bi bi-star"></i>
              `;
          } else if (score == "4") {
            return `
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
              `;
          } else if (score == "3") {
            return `
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
              `;
          } else if (score == "2") {
            return `
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
              `;
          } else if (score == "1") {
            return `
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
            <i class="bi bi-star"></i>
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
            let searchValue = buscar.value.toLowerCase(); 
            let peliculasFiltradas = data.filter(cosa => 
                                                {
                                                
                                                cosa.title.toLowerCase().startsWith(searchValue) ||
                                                cosa.tagline.toLowerCase().startsWith(searchValue)||
                                                cosa.genres.some((genre) => genre.name.toLowerCase().startsWith(searchValue)) ||
                                                cosa.overview.toLowerCase().startsWith(searchValue) ?
                                                lista.innerHTML +=
                                                `
                                                
                                                <div class="contenedorSeparo1">
                                                <li class="list-group-item text-center color1">${cosa.title} <br />${cosa.tagline}
                                                  <div class="amarillo mb-3">
                                                  <p>Calificacion: </p>${calificacion(Math.round(cosa.vote_average))}
                                                  </div>
                                                  <button class="btn btn-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Desplegar</button>


                                                  <div class="separo">
                                                  <div class="offcanvas offcanvas-top docanvas" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                                                  
                                                    <div class="offcanvas-header">
                                                      <h5 class="offcanvas-title" id="offcanvasTopLabel">Pelicula: ${cosa.title}</h5><br />
                                                      
                                                      
                                                      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>
                                                    <div class="offcanvas-body">
                                                    <h6>Reseña: ${cosa.overview}</h6>
                                                    <hr />
                                                    </div>
                                                    <div class="divSep">

                                                    <h6>Generos: ${cosa.genres[0].name +" - "+ cosa.genres[1].name +" - "+ cosa.genres[2].name}</h6>
                                                    <div class="dropdown">
                                                      <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown button
                                                      </button>
                                                      <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Year: ${cosa.release_date.slice(0,4)} </a></li>
                                                        <li><a class="dropdown-item" href="#">Runtime: ${cosa.runtime + "min"}</a></li>
                                                        <li><a class="dropdown-item" href="#">Budget: ${"$" + cosa.budget}</a></li>
                                                        <li><a class="dropdown-item" href="#">Revenue: ${"$" + cosa.revenue}</a></li>
                                                        
                                                      </ul>
                                                    </div>
                                                    </div>
                                                  

                                                    </div>
                                                  </div>
                                                  </div> 





                                                </li>
                                                ` : "" } )
                                                
                                                                        

            console.log(peliculasFiltradas)
        }})

       

    })