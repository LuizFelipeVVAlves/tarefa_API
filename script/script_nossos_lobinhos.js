

const inputSearch = document.querySelector(".search")
var num = 0
let main_div = document.querySelector(".main_div")
let lista = []
let currentPage = 1
const itemsPerPage = 50

inputSearch.oninput = () => {
     main_div.innerHTML = ""

     lista
        .filter((item) => 
            item[1].toLowerCase().includes(inputSearch.value.toLowerCase())
            )
        .forEach((item) => {
            if(input_checkbox.checked){
                criar_card_adotados(item[0],item[1],item[2],item[3],item[4],item[5])
            }else{
                criar_card_nao_adotados(item[0],item[1],item[2],item[3],item[4],item[5])
            }
        })
}

function criar_card_nao_adotados(imagem,nome,desc,idade,adotado,x){
   
    var link = `show-lobinho.html?id=${x}`
    if(adotado == false){
        
        if(num % 2 == 0){
            
            let main_wolf_div = document.createElement("div")
            let wolf_container_div = document.createElement("div")
            let img_wolf_div = document.createElement("div")
            let wolf_img = document.createElement("img")
            let wolf_stats_div = document.createElement("div")
            let wolf_name = document.createElement("p")
            let wolf_age = document.createElement("p")
            let wolf_desc = document.createElement("p")
            let adopt_button = document.createElement("a")
            let div_button = document.createElement("div")
            let div_adopt_button_p = document.createElement("div")
            
            div_button.id = "button1"
            div_adopt_button_p.classList.add("adopt_button_div")
            main_wolf_div.classList.add("main_div")
            wolf_container_div.classList.add("wolf_container")
            img_wolf_div.classList.add("wolf_img_div")
            img_wolf_div.id = "wolf_img1"
            wolf_img.classList.add("wolf_img")
            wolf_stats_div.classList.add("wolf_stats")
            wolf_name.classList.add("name")
            wolf_age.classList.add("age")
            wolf_desc.classList.add("desc")

            wolf_desc.innerText = desc
            wolf_age.innerText = idade
            wolf_name.innerText = nome
            wolf_img.setAttribute("src",imagem)
            adopt_button.setAttribute("href",link)
            adopt_button.innerHTML = "Adotar"

            //adopt_button.addEventListener("click",() =>{show_lobo(x)})
            

            img_wolf_div.append(wolf_img)
            wolf_container_div.append(img_wolf_div)
            div_button.append(adopt_button)
            div_adopt_button_p.append(wolf_name)
            div_adopt_button_p.append(div_button)
            wolf_stats_div.append(div_adopt_button_p)
            wolf_stats_div.append(wolf_age)
            wolf_stats_div.append(wolf_desc)
            wolf_container_div.append(wolf_stats_div)
            main_wolf_div.append(wolf_container_div)
            main_div.append(main_wolf_div)
            num += 1

        }else{
            
            let main_wolf_div = document.createElement("div")
            let wolf_container_div = document.createElement("div")
            let img_wolf_div = document.createElement("div")
            let wolf_img = document.createElement("img")
            let wolf_stats_div = document.createElement("div")
            let wolf_name = document.createElement("p")
            let wolf_age = document.createElement("p")
            let wolf_desc = document.createElement("p")
            let adopt_button = document.createElement("a")
            let div_button = document.createElement("div")
            let div_adopt_button_p = document.createElement("div")

            div_button.id = "button2"
            wolf_age.id = "age2"
            div_adopt_button_p.classList.add("adopt_button_div")
            main_wolf_div.classList.add("main_div")
            wolf_container_div.classList.add("wolf_container") //aqui
            img_wolf_div.classList.add("wolf_img_div")
            img_wolf_div.id = "wolf_img2"
            wolf_img.classList.add("wolf_img")
            wolf_stats_div.classList.add("wolf_stats")
            wolf_name.classList.add("name")
            wolf_age.classList.add("age")
            wolf_desc.classList.add("desc")

            wolf_desc.innerText = desc
            wolf_age.innerText = idade
            wolf_name.innerText = nome
            wolf_img.setAttribute("src",imagem)
            adopt_button.innerText = "Adotar"
            adopt_button.setAttribute("href",link)

            //adopt_button.addEventListener("click",() =>{show_lobo(x)})

            div_button.append(adopt_button)
            div_adopt_button_p.append(div_button)
            div_adopt_button_p.append(wolf_name)
            wolf_stats_div.append(div_adopt_button_p)
            wolf_stats_div.append(wolf_age)
            wolf_stats_div.append(wolf_desc)
            wolf_container_div.append(wolf_stats_div)
            img_wolf_div.append(wolf_img)
            wolf_container_div.append(img_wolf_div)
            main_wolf_div.append(wolf_container_div)
            main_div.append(main_wolf_div)
            num += 1
        
        
        
        }
    
    }
}

function criar_card_adotados(imagem,nome,desc,idade,adotado,x){
  
    var link = `show-lobinho.html?id=${x}`
    if(adotado == true){
        
        if(num % 2 == 0){
            
            let main_wolf_div = document.createElement("div")
            let wolf_container_div = document.createElement("div")
            let img_wolf_div = document.createElement("div")
            let wolf_img = document.createElement("img")
            let wolf_stats_div = document.createElement("div")
            let wolf_name = document.createElement("p")
            let wolf_age = document.createElement("p")
            let wolf_desc = document.createElement("p")
            let adopt_button = document.createElement("a")
            let div_button = document.createElement("div")
            let div_adopt_button_p = document.createElement("div")

            div_button.id = "button1"
            div_adopt_button_p.classList.add("adopt_button_div")
            main_wolf_div.classList.add("main_div")
            wolf_container_div.classList.add("wolf_container")
            img_wolf_div.classList.add("wolf_img_div")
            img_wolf_div.id = "wolf_img1"
            wolf_img.classList.add("wolf_img")
            wolf_stats_div.classList.add("wolf_stats")
            wolf_name.classList.add("name")
            wolf_age.classList.add("age")
            wolf_desc.classList.add("desc")

            wolf_desc.innerText = desc
            wolf_age.innerText = idade
            wolf_name.innerText = nome
            wolf_img.setAttribute("src",imagem)
            adopt_button.setAttribute("href",link)
            adopt_button.innerText = "Adotado"

            img_wolf_div.append(wolf_img)
            wolf_container_div.append(img_wolf_div)
            div_button.append(adopt_button)
            div_adopt_button_p.append(wolf_name)
            div_adopt_button_p.append(div_button)
            wolf_stats_div.append(div_adopt_button_p)
            wolf_stats_div.append(wolf_age)
            wolf_stats_div.append(wolf_desc)
            wolf_container_div.append(wolf_stats_div)
            main_wolf_div.append(wolf_container_div)
            main_div.append(main_wolf_div)
            num += 1

        }else{
            
            let main_wolf_div = document.createElement("div")
            let wolf_container_div = document.createElement("div")
            let img_wolf_div = document.createElement("div")
            let wolf_img = document.createElement("img")
            let wolf_stats_div = document.createElement("div")
            let wolf_name = document.createElement("p")
            let wolf_age = document.createElement("p")
            let wolf_desc = document.createElement("p")
            let adopt_button = document.createElement("a")
            let div_button = document.createElement("div")
            let div_adopt_button_p = document.createElement("div")

            div_button.id = "button2"
            wolf_age.id = "age2"
            div_adopt_button_p.classList.add("adopt_button_div")
            main_wolf_div.classList.add("main_div")
            wolf_container_div.classList.add("wolf_container") //aqui
            img_wolf_div.classList.add("wolf_img_div")
            img_wolf_div.id = "wolf_img2"
            wolf_img.classList.add("wolf_img")
            wolf_stats_div.classList.add("wolf_stats")
            wolf_name.classList.add("name")
            wolf_age.classList.add("age")
            wolf_desc.classList.add("desc")

            wolf_desc.innerText = desc
            wolf_age.innerText = idade
            wolf_name.innerText = nome
            wolf_img.setAttribute("src",imagem)
            adopt_button.innerText = "Adotado"
            adopt_button.setAttribute("href",link)

            
            div_button.append(adopt_button)
            div_adopt_button_p.append(div_button)
            div_adopt_button_p.append(wolf_name)
            wolf_stats_div.append(div_adopt_button_p)
            wolf_stats_div.append(wolf_age)
            wolf_stats_div.append(wolf_desc)
            wolf_container_div.append(wolf_stats_div)
            img_wolf_div.append(wolf_img)
            wolf_container_div.append(img_wolf_div)
            main_wolf_div.append(wolf_container_div)
            main_div.append(main_wolf_div)
            num += 1
        
        
        
        }
    }
}


async function get_msg_adopted(){
    main_div.innerHTML = ""

    await fetch("http://localhost:3000/lobos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        var start = (currentPage - 1) * itemsPerPage
        var end = start + itemsPerPage
        var paginatedItems = data.slice(start, end)
        paginatedItems.forEach((elemento, indice) => {
            if (elemento.adotado) {
                criar_card_adotados(elemento.imagem, elemento.nome, elemento.descricao, elemento.idade, elemento.adotado, elemento.id);
            }
        });
        renderPaginationButtons(data)


        
    })
    .catch((error) => console.error(error))


}

async function get_msg_not_adopted(){
    main_div.innerHTML = ""

    await fetch("http://localhost:3000/lobos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        var start = (currentPage - 1) * itemsPerPage
        var end = start + itemsPerPage
        var paginatedItems = data.slice(start, end)
        paginatedItems.forEach((elemento, indice) => {
            lista.push([elemento.imagem, elemento.nome, elemento.descricao, elemento.idade, elemento.adotado, indice]);
            if (!elemento.adotado) {
                criar_card_nao_adotados(elemento.imagem, elemento.nome, elemento.descricao, elemento.idade, elemento.adotado, elemento.id);
            }
        });
        renderPaginationButtons(data)

    }
    
    
    
    )
    .catch((error) => console.error(error))

    
    
}



function renderPaginationButtons(lobinhos) {
    var paginationDiv = document.querySelector(".pagination")
    paginationDiv.innerHTML = ""
    var totalPages = Math.ceil(lobinhos.length / itemsPerPage)

    for (let i = 1; i <= totalPages; i++) {
        var button = document.createElement("button")
        button.innerText = i
        if (i === currentPage) {
            button.classList.add("active")
        }
        button.addEventListener("click", () => {
            currentPage = i
            checked()
        })
        paginationDiv.appendChild(button)
    }
}


function checked(){
    console.log("oieeeee")
    if(input_checkbox.checked){
        main_div.innerHTML = ""
        get_msg_adopted()
    }else{
        main_div.innerHTML = ""
        get_msg_not_adopted()
    }
}

let input_checkbox = document.querySelector(".checkbox")
let check_button = document.querySelector(".check")

check_button.addEventListener("click",checked)

get_msg_not_adopted()