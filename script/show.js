document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');
    //localStorage.setItem('idDoLobo', id);

    var lobinhos = JSON.parse(localStorage.getItem('lobos')) || [];
    var lobinho = lobinhos.find(lobinho => lobinho.id == id);

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

    var { nome, idade, descricao, imagem } = lobinho;
    document.title = nome;
    if (lobinho.adotado) {
        document.querySelector('#lobinho-details').innerHTML = `
            <h1 class="lobinho-h1">${nome}</h1>
            <div class="lobinho-container">
                <div>
                    <img src="${imagem}" alt="Foto de ${nome}">
                    <a href="../lista-lobinhos.html" class="exclue-lobo" id="excluir-lobinho">Excluir</a>
                </div>
                <div class="descricao">
                    <p>${descricao}</p>
                    <p>Adotado por: ${lobinho.nomeDono}</p>
                    <p>Idade do dono: ${lobinho.idadeDono}</p>
                    <p>Email do dono: ${lobinho.emailDono}</p>
                </div>
            </div>
        `;
    } else {
        document.querySelector('#lobinho-details').innerHTML = `
            <h1 class="lobinho-h1">${nome}</h1>
            <div class="lobinho-container">
                <div>
                    <img src="${imagem}" alt="Foto de ${nome}">
                    <a href="../adotar-lobinho.html" class="adota-lobo">Adotar</a>
                    <a href="../lista-lobinhos.html" class="exclue-lobo" id="excluir-lobinho">Excluir</a>
                </div>
                <div class="descricao">
                    <p>${descricao}</p>
                </div>
            </div>
        `;
    }

    document.getElementById('excluir-lobinho').addEventListener('click', function() {
        var lobinhosAtualizados = lobinhos.filter(l => l.id != lobinho.id);
        localStorage.setItem('lobos', JSON.stringify(lobinhosAtualizados));
    });
});

