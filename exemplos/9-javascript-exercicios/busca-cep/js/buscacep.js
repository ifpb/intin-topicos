const botao = document.querySelector("button");
botao.addEventListener('click', function() {
    let api = "https://viacep.com.br/ws/[cep]/json/";
    const cep = document.querySelector(".cep").value;
    console.log("CEP "+ cep);
    api = api.replace("[cep]", cep);
    console.log("API: "+api);
    fetch(api).then( resultado => resultado.json().then(json => {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = '';
        const table = document.createElement("table");

        // const bairroLinha = document.createElement("tr");
        // const bairroTitulo = document.createElement("td");
        // bairroTitulo.innerHTML = 'Bairro';
        // const bairroValor = document.createElement("td");
        // bairroValor.innerHTML = json.bairro;
        // bairroLinha.appendChild(bairroTitulo);
        // bairroLinha.appendChild(bairroValor);
        // table.appendChild(bairroLinha);
        table.innerHTML += "<tr><td>Bairro</td><td>"+json.bairro+"</td></tr>";

        // const cidadeLinha = document.createElement("tr");
        // const cidadeTitulo = document.createElement("td");
        // cidadeTitulo.innerHTML = 'Cidade';
        // const cidadeValor = document.createElement("td");
        // cidadeValor.innerHTML = json.localidade;
        // cidadeLinha.appendChild(cidadeTitulo);
        // cidadeLinha.appendChild(cidadeValor);
        // table.appendChild(cidadeLinha);
        table.innerHTML += "<tr><td>Cidade</td><td>"+json.localidade+"</td></tr>"


        resultado.append(table);

    }));
});


