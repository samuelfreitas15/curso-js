function verificar() {
    let nome = document.getElementById('tnome').value
    let res = document.getElementById('res')
    let contador = []

    nome = nome.toUpperCase()

    for (let c=0; c < nome.length; c++) {
        if (nome[c] == 'A') {
            contador.push(c)
        }
    }

    res.innerHTML += `
    <p>A letra A aparece ${contador.length} vezes </p>
    <p>Aparece a primeira vez na posição ${contador[0]+1}</p>
    <p>Aparece a ultima vez na posição ${contador[contador.length-1]+1}`

}