let anoAtual = new Date().getFullYear()
let anoNasci = []
let cont = 1
let nPessoas = 7

function adicionar() {
    let info = document.getElementById('info')
    let anoDigit = document.getElementById('ano')
    let btAdd = document.getElementById('btAdd')

    if (anoDigit.value.length == 0 || anoDigit.value > anoAtual) {
        alert('Digite uma data válida')
    } else {
        anoNasci.push(Number(anoDigit.value))
        cont++
        info.innerHTML = `${cont}ª pessoa:`
    }

    if(anoNasci.length == nPessoas - 1){
        btAdd.value = 'Calcular'
    }

    if (anoNasci.length == nPessoas) {
        calcular()
    }

    anoDigit.value = ''
    anoDigit.focus()
}

function calcular(){
    let res = document.getElementById('res')
    let idade = []
    let maiorIdade = 0
    let menorIdade = 0

    for (let c in anoNasci){
        idade[c] = anoAtual - anoNasci[c]
        if (idade [c] >= 18) {
            maiorIdade++
        } else {
            menorIdade++
        }
    }

    res.innerHTML = `<p>As idades digitadas foram ${idade}. Ao total tivemos ${maiorIdade} maiores e ${menorIdade} menores</p>`
}