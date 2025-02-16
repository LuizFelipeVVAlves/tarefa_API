function randint(tamanho) {
    return Math.floor(Math.random() * (tamanho + 1));
}

document.addEventListener('DOMContentLoaded', async function() {

    await fetch('http://localhost:3000/lobos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    .then(response => response.json())
    
    .then(lista => {
        let tamanho = lista.length;
        let lobo1 = lista[randint(tamanho)];

        document.getElementById("img_lobo1").src = lobo1.imagem;
        document.getElementById("nome_lobo1").innerText = lobo1.nome;
        document.getElementById("id_lobo1").innerText = `Idade: ${lobo1.idade}`;
        document.getElementById("descricao_lobo1").innerText = lobo1.descricao;
    
        do {
            lobo2 = lista[randint(tamanho)];
        } while (lobo1 == lobo2);
    
        document.getElementById("img_lobo2").src = lobo2.imagem;
        document.getElementById("nome_lobo2").innerText = lobo2.nome;
        document.getElementById("id_lobo2").innerText = `Idade: ${lobo2.idade}`;
        document.getElementById("descricao_lobo2").innerText = lobo2.descricao;
    })
    
    .catch(error => console.log(error));

    

   







})


