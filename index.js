// http://www.omdbapi.com/?i=tt3896198&apikey=1989ac72
 async function movieAPI() {
    const web = await fetch("http://www.omdbapi.com/?apikey=1989ac72&s=super")
    const movie = (await web.json())
    console.log (movie)
    console.log (movie.Search)
    const movieList = document.querySelector(".user-list")
         const movieCard = await (movie.Search)
     movieList.innerHTML = 
     movieCard.map((movie) => {
        return `<div class="user-card">
            <div class="user-card__container">
                <h3>${movie.Title}</h3>
                <p><b>Year</b> ${movie.Year}</p>
                <p><b>imdbID</b> ${movie.imdbID}</p>
                <p><b>Poster</b> <a href="${movie.Poster}" target="_blank">Movie Poster</a></p>
            </div>
            </div>`

        }).join("")
    } 
    
    
movieAPI()
