const botao = document.querySelector("button");
botao.addEventListener('click', function() {
    let api = "https://viacep.com.br/ws/[cep]/json/";
    const cep = document.querySelector(".cep").value;
    api = api.replace("[cep]", cep);
    fetch(api).then( resultado => resultado.json().then(json => {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = '';
        const table = document.createElement("table");
        table.innerHTML += "<tr><td>Bairro</td><td>"+json.bairro+"</td></tr>";
        table.innerHTML += "<tr><td>Cidade</td><td>"+json.localidade+"</td></tr>"
        resultado.append(table);
    }));
});


