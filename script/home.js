let lista = JSON.parse(localStorage.getItem('lobos'));

let tamanho = lista.length;

function randint(tamanho) {
    return Math.floor(Math.random() * (tamanho + 1));
}

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
