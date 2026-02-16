function sacar() {
    let valor = Number(document.getElementById('valor').value)
    let res = document.getElementById('res')

    let nota50 = 0
    let nota20 = 0
    let nota10 = 0
    let nota01 = 0

    nota50 = Math.floor(valor/50)
    valor  -= nota50 * 50
    nota20 = Math.floor(valor/20)
    valor  -= nota20 * 20
    nota10 = Math.floor(valor/10)
    valor -= nota10 * 10
    nota01 = Math.floor(valor)

    res.innerHTML = `Você vai receber ${nota50} notas de R$50, ${nota20} notas de R$20, ${nota10} notas de R$10 e ${nota01} notas de R$1`
}