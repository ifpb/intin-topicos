function load() {
    const fotos = document.querySelector("#fotos");
    fetch("https://jsonplaceholder.typicode.com/photos")
    .then(resposta => resposta.json().then(json => {
        for(foto of json) {
            const li = document.createElement("li");
            li.innerHTML = "<img src='"+foto.thumbnailUrl+"' />"+foto.title;
            fotos.appendChild(li);
        }
     }));
}