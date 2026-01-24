function media(){
    let nota1 = Number(document.getElementById('txtnum1').value)
    let nota2 = Number(document.getElementById('txtnum2').value)
    let res = document.getElementById('res')

    res.innerHTML = `A média entre ${nota1} e ${nota2} é ${(nota1 + nota2)/2}`
}