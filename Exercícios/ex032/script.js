function verificar() {
    let ano = Number(document.getElementById('ano').value)
    let res = document.getElementById('res')

    let data = new Date()

    if (ano == 0) {
        ano = data.getFullYear()
    }

    if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
            alert(`O ano de ${ano} é bissexto`)
    } else {
        alert(`O ano de ${ano} não é bissexto`)
    }
}