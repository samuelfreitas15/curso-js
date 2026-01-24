function verificar() {
    let numero = Number(document.getElementById('txtnum').value)
    let res    = document.getElementById('res')

    res.innerHTML = `Analisando o número ${numero}, seu antecessor é ${numero-1} e seu sicessor é ${numero+1}`
    
}