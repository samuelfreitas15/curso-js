function jogar() {
    let num = Number(document.getElementById('num').value)
    let esq = document.getElementsByName('poi')
    let res = document.getElementById('res')

    let maq = Math.floor(Math.random() * 2)
    let som = num + maq

    //res.innerHTML = `${num} e ${maq}. `

    if(som % 2 == 0) {
        if (esq[0].checked) {
            res.innerHTML += `Você ganhou!!!`
        } else {
            res.innerHTML += 'Você perdeu!!!'
        }
    }else {
        if (esq[0].checked) {
            res.innerHTML += `Você perdeu!!!`
        } else {
            res.innerHTML += 'Você ganhou!!!'
        }
    }
}