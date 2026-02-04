function verificar() {
    let numeros = []
    numeros[0] = Number(document.getElementById('tnum1').value)
    numeros[1] = Number(document.getElementById('tnum2').value)
    numeros[2] = Number(document.getElementById('tnum3').value)
    let res = document.getElementById('res')

    let menor = numeros[0]
    let maior = numeros[0]
    
    for (let c = 0; c < numeros.length; c++){
        if (numeros[c] > maior){ // verificar o maior número
            maior = numeros[c]
        }

        if (numeros[c] < menor){ // verificar o menor número
            menor = numeros[c]
        }
    }

    res.innerHTML = `<p>O menor número é ${menor}</p>
    <p>O maior número ${maior}</p>`
}