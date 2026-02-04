function calcular() {
    let salario = Number(document.getElementById('tsalario').value)
    let res = document.getElementById('res')
    let salarioNovo = 0

    if (salario < 2000) {
        salarioNovo = salario * 1.15
    } else {
        salarioNovo = salario * 1.1
    }

    res.innerHTML = `O seu novo salário é R$${salarioNovo.toFixed(2)}`
}