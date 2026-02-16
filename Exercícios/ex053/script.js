function verificar() {
    let frase = document.getElementById('frase').value
    let res = document.getElementById('res')
    let frasePali = ''
    let fraseInve = ''

    //Retira os espaços
    /*
    for (let c in frase){
        if (frase[c] != ' '){
            frasePali += frase[c]
        }
    }
    */
   frasePali = frase.replace(/\s+/g, '')
    //Inverte a frase
    for (let d = frasePali.length - 1; d >= 0; d--){
        //alert(frasePali[d])
        fraseInve += frasePali[d]
    }

    if (frasePali.toUpperCase == fraseInve.toUpperCase) {
        res.innerHTML = `<p>A frase ${frasePali} e ${fraseInve} são palíndromo`
    } else {
        res.innerHTML = `<p>A frase ${frasePali} e ${fraseInve} NÃO são palíndromo`
    }

}