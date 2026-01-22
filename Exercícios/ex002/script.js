function verificar() {
    let nome = document.getElementById('txtnome')
    let res = document.getElementById('res')

    res.innerHTML = `Seja bem vindo ${nome.value}`
}