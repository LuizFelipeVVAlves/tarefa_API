let lista = JSON.parse(localStorage.getItem('lobos'));

const itensPorPagina = 4;
let pagina = 1;
let lado = true;

function gerarLista() {
    const lobosPaginados = lista.slice((pagina - 1) * itensPorPagina, pagina * itensPorPagina);
        
}

function gerarPaginacao() {
    const maximoPaginas = Math.ceil(lista.length/itensPorPagina);
    for(let i = 1; i <= maximoPaginas; i++) {

    }
}







