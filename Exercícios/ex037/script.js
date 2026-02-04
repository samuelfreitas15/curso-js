function converter() {
    let numero = Number(document.getElementById('tnum').value)
    let res = document.getElementById('res')
    let tipoBase = document.getElementsByName('tipoBase')

    if (tipoBase[0].checked) {
        res.innerHTML = `${numero.toString(2)}`
    }else if (tipoBase[1].checked) {
        res.innerHTML = `${numero.toString(8)}`
    }else if (tipoBase[2].checked) {
        res.innerHTML = `${numero.toString(16)}`
    }

}