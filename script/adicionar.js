let button = document.querySelector('button');

button.addEventListener("click", ()=> {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let photo = document.getElementById("link").value;
    let description = document.getElementById("description").value;

    lobinhoAdd(name, age, photo, description);
    window.location.href = '../adicionar-lobinho.html'
})

async function lobinhoAdd(name, age, description, photo) {
    const response = await fetch('http://localhost:3000/lobos/', {
        method: 'POST',
        header: {
            'Content-type': 'aplication/json'
        },
        body: JSON.stringify ({
            "nome": `${name}`,
            "idade": `${age}`,
            "descricao": `${description}`,
            "imagem": `${photo}`,
            "adotado": false,
            "nomeDono": null,
            "idadeDono": null,
            "emailDono": null
        })
    })
}
