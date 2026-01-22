let numeros = []
let res = document.getElementById('resposta')


function adicionar() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('slnum')
    let item = document.createElement('option')

    res.innerHTML = ''
    
    if (num.value.length == 0) {
        alert('Digite um número')        
    } else if (num.value > 100 || num.value < 1) {
        alert('Digite um número entre 1 e 100')
    } else {
        numeros.push(Number(num.value))
        item.innerHTML = `Valor ${numeros[numeros.length-1]} adicionado.`
        tab.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Você não adicionou números.')
    } else {
        res.innerHTML += `<p>Ao todo, temos ${numeros.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior número foi ${maior(numeros)}</p>`
        res.innerHTML += `<p>O menor número foi ${menor(numeros)}</p>`
        res.innerHTML += `<p/>A soma de todos os valores é ${soma(numeros)}</p>`
        res.innerHTML += `<p>A média de todos os valores é ${media(numeros)}</p>`
    }
}

function maior(num) {
    let x = 0
    for (let c in num) {
        if (num[c] > x) {
            x=num[c]
        }
    }
    return x
}

function menor(num) {
    let x = num[0]
    for (let c in num){
        if (num[c] < x){
            x = num[c]
        }
    }
    return x
}

function soma(num) {
    let x = 0
    for (let c in num) {
        x += num[c]
    }
    return x
}

function media(num) {
    let x = 0
    for (let c in num) {
        x += num[c]
    }
    x = x/num.length
    return x
}