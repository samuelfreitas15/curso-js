function calcular() {
    let altura = Number(document.getElementById('taltura').value)
    let largura = Number(document.getElementById('tlargura').value)
    let res = document.getElementById('res')
    let area = altura * largura
    let tinta = area / 2

    res.innerHTML = `Com a altura de ${altura}m e largura de ${largura}m temos ${area}m² e vamos gastar ${tinta}l de tinta`

}