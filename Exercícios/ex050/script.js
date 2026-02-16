let numeros = []

function adicionar(){
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    let bot = document.getElementById('bot')

    if (num.value.length == 0) {
        alert('Digite um número válido')
    } else {
        let numConvertido = Number(num.value)
        let soma = 0
        numeros.push(numConvertido)

        if (numeros.length == 5) {
            bot.value = 'Calcular'
        }

        if (numeros.length == 6) {
            for (let c in numeros){
                if (numeros[c] % 2 == 0) {
                    soma += numeros[c]
                }
            }
            res.innerHTML = `A soma dos números pares digitados foi ${soma}`
        }

    }

    num.value = ''
    num.focus()

}