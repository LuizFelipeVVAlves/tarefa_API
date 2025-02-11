document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = "script/modules/lobinhos.json";
    const fetchconfig = {
        "method": "GET"
    };

    fetch(url, fetchconfig)
        .then(response => response.json())
        .then(data => {
            var lobinho = data.find(lobinho => lobinho.id == id);
            if (lobinho == undefined) {
                document.title = "Lobinho não encontrado";
                document.querySelector('#lobinho-details').innerHTML = `
                    <section>
                        <h1>Lobinho não encontrado</h1>
                        <p>Este lobinho não foi encontrado em nossa base de dados.</p>
                    </section>
                `;
                return;
            }
            const { nome, idade, descricao, imagem } = lobinho;
            document.title = nome;
            document.querySelector('#lobinho-details').innerHTML = `
                <h1 class="lobinho-h1">${nome}</h1>
                <div  class="lobinho-container">
                    <div>
                        <img src="${imagem}" alt="Foto de ${nome}">
                        <a href="" class="adota-lobo">Adotar</a>
                        <a href="../lista-lobinhos.html" class="exclue-lobo">Excluir</a>

                    </div>
                    <div class="descricao">
                        <p>${descricao}</p>
                    </div>
                    
                </div>
            `;
        });
});