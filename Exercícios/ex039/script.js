function verificar() {
    let anoNascimento = Number(document.getElementById('tdata').value)
    let res = document.getElementById('res')
    let anoAtual = new Date()

    let idade = anoAtual.getFullYear() - anoNascimento

    if (idade < 18) {
        res.innerHTML = `<p>Em ${anoAtual.getFullYear()} você tem ${idade} anos, e ainda faltam ${18 - idade} anos para você se alistar</p>`
    } else if (idade > 18) {
        res.innerHTML = `<p>Em ${anoAtual.getFullYear()} você tem ${idade} anos, e você deveria ter se alistado à ${idade - 18} anos atrás</p>`
    } else {
        res.innerHTML = `<p>Em ${anoAtual.getFullYear()} você tem ${idade} anos, vá se alistar imediatamente</p>`
    }
}