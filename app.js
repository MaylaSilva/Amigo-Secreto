let amigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
    adicionar = document.querySelector('input').value;
    if (adicionar == '') {
        return alert('Campo em branco. Por favor, digite um nome antes de adicionar o amigo');
    }
    if (amigos.includes(adicionar.toUpperCase())) {
        return alert('O nome já foi incluído. Altere o nome ou inclua o sobrenome');
    } else {
        amigos.push(adicionar.toUpperCase());
        limparCampo();
        listarAmigos();
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        return alert('Precisa incluir os amigos antes de sortear');
    }

    if (amigosSorteados.length == amigos.length) {
        alert("Todos os amigos já foram sorteados! A lista será reiniciada.")
        amigosSorteados = [];
    }
    let amigoSorteado;
    do {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSorteado = amigos[numeroAleatorio];
    } while (amigosSorteados.includes(amigoSorteado))
    amigosSorteados.push(amigoSorteado);
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    let exibirResultado = document.getElementById('resultado');
    exibirResultado.innerHTML = `<li> O amigo sorteado é ${amigoSorteado}</li>`;
}

function limparCampo() {
    let limpar = document.querySelector('input');
    limpar.value = '';
}

function listarAmigos() {
    let exibirLista = document.getElementById('listaAmigos');
    exibirLista.innerHTML = ''; //Limpando a lista antes de iterar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo; //Aqui é onde é incluso o nome na lista do HTML
        exibirLista.appendChild(li);
    });
}

function limparLista() {
    let limparListaFeita = document.getElementById('listaAmigos');
    limparListaFeita.innerHTML = '';
    amigos = [];
    let limparResultado = document.getElementById('resultado');
    limparResultado.innerHTML = '';
}