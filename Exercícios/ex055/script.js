let listaPeso = []
let cont = 1
let nPessoas = 5

function adicionar() {
    let info = document.getElementById('info')
    let pesoDigit = document.getElementById('peso')
    let btAdd = document.getElementById('btAdd')

    if (pesoDigit.value.length == 0) {
        alert('Digite um peso válido')
    } else {
        listaPeso.push(Number(pesoDigit.value))
        cont++
        info.innerHTML = `${cont}ª pessoa:`
    }

    if(listaPeso.length == nPessoas - 1){
        btAdd.value = 'Calcular'
    }

    if (listaPeso.length == nPessoas) {
        calcular()
    }

    pesoDigit.value = ''
    pesoDigit.focus()
}

function calcular(){
    let res = document.getElementById('res')
    let maiorPeso = listaPeso[0]
    let menorPeso = listaPeso[0]

    for (let c in listaPeso){
        //Mais pesado
        if (listaPeso[c] > maiorPeso) {
            maiorPeso = listaPeso[c]
        }
        //Mais leve
        if (listaPeso[c] < menorPeso) {
            menorPeso = listaPeso[c]
        }
    }

    res.innerHTML = `<p>Os pesos digitados foram ${listaPeso}. A pessoa mais pesada foi ${maiorPeso} e a pessoa mais leve tem ${menorPeso}</p>`
}