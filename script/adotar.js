


let lobo = lista.find((lobo)=>{
    return lobo.id == id;
})

let nome = lobo.nome;
let photo = lobo.imagem;

document.getElementById("nomeDoLobo").innerText = nome;
document.getElementById("idDoLobo").innerText = id;
document.getElementById("img__lobo").src = photo;

let button = document.getElementById('botao__adotar');

button.addEventListener("click", ()=> {
    let nameOwner = document.getElementById("name").value;
    let ageOwner = parseInt(document.getElementById("age").value);
    let emailOwner = document.getElementById("email").value;

    lobinhoAdotar(nameOwner, ageOwner, emailOwner);
    window.location.href = '../lista-lobinhos.html'
})

function lobinhoAdotar(nameOwner, ageOwner, emailOwner) {
    try {
        let index = lista.indexOf(lobo);
        console.log(index);
        lista[index].adotado = true;
        lista[index].nomeDono = nameOwner;
        lista[index].idadeDono = ageOwner;
        lista[index].emailDono = emailOwner;

    } catch (error) {
        console.error(error);
    }
}





