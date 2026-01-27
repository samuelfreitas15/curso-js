let nomes = []

function adicionar() {
    let nome = document.getElementById('tnome')
    let res  = document.getElementById('tabela')

    if (nome.value.length == 0) {
        alert('Digite um nome')
    } else if (nomes.indexOf(nome.value) != -1) {
        alert('Esse nome já esta na lista')
    } else {
        nomes.push(nome.value)
        
        let item = document.createElement('option')
        item.innerHTML += nome.value
        res.setAttribute('size', nomes.length)
        res.appendChild(item)
    }
    nome.value = ''
    nome.focus()
}

function sorteio() {
    if (nomes.length == 0) {
        alert('Você não digitou nenhum nome')
    } else {
        let sorteio = document.getElementById('sorteio')
        let numeroAleatorio = Math.floor(Math.random() * nomes.length)
        sorteio.innerHTML = `O nome sorteado foi ${nomes[numeroAleatorio]}`
    }

}
