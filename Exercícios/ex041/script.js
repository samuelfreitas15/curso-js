function verificar() {
    let anoNascimento = Number(document.getElementById('tano').value)
    let res = document.getElementById('res')
    let anoAtual = new Date().getFullYear()
    let idade = anoAtual - anoNascimento
    let classificacao = ''

    if (idade <= 9) {
        classificacao = 'MIRIM'
    } else if (idade <= 14) {
        classificacao = 'INFANTIL'
    } else if (idade <= 19) {
        classificacao = 'JUNIOR'
    } else if (idade <= 25) {
        classificacao = 'SENIOR'
    } else {
        classificacao = 'MASTER'
    }

    res.innerHTML = `<p>O atleta tem ${idade} anos</p>
    <p>Sua classificação é ${classificacao}</p>`
}