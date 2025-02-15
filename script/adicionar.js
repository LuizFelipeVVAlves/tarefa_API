

let button = document.querySelector('button');

button.addEventListener("click", ()=> {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let photo = document.getElementById("link").value;
    let description = document.getElementById("description").value;

    lobinhoAdd(name, age, photo, description);
    window.location.href = '../adicionar-lobinho.html'
})

function lobinhoAdd(name, age, photo, description) {
    try {
        let id = parseInt(localStorage.getItem('id'));
        let lobinho = {
            id: id,
            nome: name,
            idade: age,
            descricao: description,
            imagem: photo,
            adotado: false,
            nomeDono: null,
            idadeDono: null,
            emailDono: null,
        }
        console.log(lista)
        lista.push(lobinho);
    } catch (error) {
        console.error(error);
    }
}
