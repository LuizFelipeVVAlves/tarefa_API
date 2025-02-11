let lista = JSON.parse(localStorage.getItem('lobos'));

let id = localStorage.getItem('idDoLobo');

let lobo = lista.find((lobo)=>{
    return lobo.id == id;
})

let nome = lobo.nome;
let photo = lobo.imagem;


document.getElementById("nomeDoLobo").innerText = nome;
document.getElementById("idDoLobo").innerText = id;
document.getElementById("img__lobo").src = photo;


