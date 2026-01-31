function verificar() {
    let cidade = document.getElementById('tcidade').value
    let res    = document.getElementById('res')
    let cidadeModificada = ''

    cidade = cidade.toLowerCase()
    let verificador = false
    let c           = 0

    while (verificador == false && c < cidade.length) {
        if (cidadeModificada.length == 0 && cidade[c] != ' ') {
            cidadeModificada = cidade[c]
        } else if (cidadeModificada.length != 0 && cidade[c] != ' ') {
            cidadeModificada += cidade[c]
        } else if (cidadeModificada.length != 0 && cidade[c] == ' ') {
            verificador = true
        }
        c++
    }

    if (cidadeModificada == 'santo') {
        alert('A sua cidade começa com santo')
    } else {
        alert('A sua cidade não começa com santo')
    }
}