function verificar() {
    let nome = document.getElementById('tnome').value
    let res = document.getElementById('res')

    nome = nome.toLowerCase()

    if (nome.indexOf('silva') != -1) {
        res.innerHTML = 'Se nome tem Silva'
    } else {
        res.innerHTML = 'Ser nome não tem silva'
    }
}