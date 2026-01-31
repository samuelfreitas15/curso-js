function verificar () {
    let nome = document.getElementById('tnome').value
    let res = document.getElementById('res')
    let nomes = []
    let nomeTemporario = []

    if (nome.length == 0){
        alert('Digite um nome')
    } else {

        let c = false
        let i = 0

        while (c == false && i < nome.length){
            if (nome[i] != ' ') { // verifica se o caractere é vazio
                nomeTemporario += nome[i]
            } else if (nome[i] == ' ' && nomeTemporario.length > 0){ // verifica a troca entre os nomes
                nomes.push(nomeTemporario)
                nomeTemporario = ''
                //c = true
            }
            
            if ( i == nome.length-1 && nome[i] != ' ') { // verifica quando o nome acabou
                nomes.push(nomeTemporario)
                nomeTemporario = ''
            }

            i++
        }
    }

    res.innerHTML = `
    <p>Seu nome é ${nome}</p>
    <p>Seu primeiro nome é ${nomes[0]}</p>
    <p>Seu último nome é ${nomes[nomes.length-1]}</p>`
}