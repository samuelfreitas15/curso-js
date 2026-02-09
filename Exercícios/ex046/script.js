function contar() {
    let num = Number(document.getElementById('tnum').value)
    let res = document.getElementById('res')

    let contador = setInterval(function(){
        if (num < 0){
            res.innerHTML += `<p>BUM BUM BUM</p>`
            clearInterval(contador)
        } else {
           res.innerHTML += `<p>${num}</p>`
           num -= 1
        }

    },1000)

}