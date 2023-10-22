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
                                                `<li class="list-group-item text-center color1">${cosa.title} <br />${cosa.tagline}
                                                  <div class="amarillo ">
                                                  <p>Calificacion: </p>${calificacion(Math.round(cosa.vote_average))}
                                                  </div>
                                                
                                                </li>
                                                ` : "" } )
            console.log(peliculasFiltradas)
        }})

    })