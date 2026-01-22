function calcular(){
    let num1 = document.getElementById('txtnum1')
    let num2 = document.getElementById('txtnum2')
    let res = document.querySelector('div#res')

    res.innerHTML = Number(num1.value) + Number(num2.value)
}

