function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Verifique o ano novamente')        
    } else {
        var fSex = document.getElementsByName('rbsexo')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/menino.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/moco.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/homem.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/senhor.jpg')
            }
        }else if(fSex[1].checked) {
            genero = 'Mulher'
            if (idade < 12){
                //Criança
                img.setAttribute('src', 'imagens/menina.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/moca.jpg')
            }else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mulher.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'imagens/senhora.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}