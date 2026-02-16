let qtd18     = 0
let qtdHomem  = 0
let qtdMulher = 0

function adicionar() {
    let dIdade = document.getElementById('idade')
    let sexo = document.getElementsByName('sexo')

    let idade = Number(dIdade.value)

    if (idade > 18) {
        qtd18 ++
    }

    if (sexo[0].checked) {
        qtdHomem++
    }

    if (sexo[1].checked && idade < 20) {
        qtdMulher++
    }

    dIdade.value = ''
    dIdade.focus()
}

function analizar() {
    let res = document.getElementById('res')

    res.innerHTML = `Ao todo tivemos ${qtd18} pessoas com mais de 18 anos, ${qtdHomem} homens e ${qtdMulher} mulheres com menos de 20 anos`
}