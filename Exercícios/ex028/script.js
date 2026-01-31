let res = document.getElementById('res')

function verificar() {
    let numero = Number(document.getElementById('tnumero').value)
    let sorteio = Math.floor(Math.random() * 6)
    res.innerHTML = ''
    if (numero == sorteio) {
        res.innerHTML += `
        <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>
        <p>Estou pensando em um número. Tente adivinhar</p>
        <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>
        <p>Parabens. Eu pensei em ${sorteio} e você acertou</p>`
    } else {
        res.innerHTML += `
        <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>
        <p>Estou pensando em um número. Tente adivinhar</p>
        <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>
        <p>Sinto muito. Eu pensei em ${sorteio} e você Errou</p>`
    }
    
}

function analisar() {
    res.innerHTML = ''
    res.innerHTML += `
    <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>
    <p>Estou pensando em um número. Tente adivinhar</p>
    <p>-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-</p>`
}