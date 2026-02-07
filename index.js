// http://www.omdbapi.com/?i=tt3896198&apikey=1989ac72
 async function movieAPI() {
    const web = "http://www.omdbapi.com/?apikey=1989ac72&s=super"
    const movie = (await fetch(web)).json()
    console.log (await (movie))
}
movieAPI()
