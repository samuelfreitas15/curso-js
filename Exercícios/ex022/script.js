function verificar() {
    let nome = document.getElementById('tnome').value
    let res  = document.getElementById('res')
    let nomeCortado = []
    let primeiroNome = []
    let validador = false

    for (let c = 0; c < nome.length; c++) { //Cria string sem os espaços
        if (nome[c] != ' ') {
            nomeCortado += nome[c]
            if (validador == false && nome[c] != ' ') {
                primeiroNome += nome[c]
            }
        } else {
            validador = true
        }
    }

    res.innerHTML = `
    <p>Seu nome em maiúsculas é ${nome.toUpperCase()}</p>
    <p>Seu nome em minúsculas é ${nome.toLowerCase()}</p>
    <p>Seu nome tem ao todo ${nomeCortado.length} letras</p>
    <p>Seu primeiro nome é ${primeiroNome} e tem ${primeiroNome.length}</p>`

}