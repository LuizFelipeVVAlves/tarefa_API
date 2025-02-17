async function lobinhoAdotar(nameOwner, ageOwner, emailOwner, wolfId) {
    const update = {
        "adotado": true,
        "nomeDono": nameOwner,
        "idadeDono": ageOwner,
        "emailDono": emailOwner
    }

    console.log(`"Adotante: ${nameOwner}", ${ageOwner}, ${emailOwner}`);

    await fetch(`http://localhost:3000/lobos/${wolfId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
}

document.addEventListener('DOMContentLoaded', async function() {

    const urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    const response = await fetch(`http://localhost:3000/lobos/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const lobo = await response.json()
    
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

        console.log(`nameOwner: ${nameOwner}, ageOwner: ${ageOwner}, emailOwner: ${emailOwner}`);
    
        lobinhoAdotar(nameOwner, ageOwner, emailOwner, id);
        window.location.href = '../lista-lobinhos.html'
    })
})












