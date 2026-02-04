function calcular(){
    let casa = Number(document.getElementById('tcasa').value)
    let salario = Number(document.getElementById('tsalario').value)
    let anos = Number(document.getElementById('tanos').value)
    let res = document.querySelector('p#res')

    let tempo = anos * 12
    let parcela = casa / tempo

    if (parcela < salario*0.3){
        res.innerHTML = `Seu empréstimo foi APROVADO e sua parcela é de ${parcela.toFixed(2)}`
    } else {
        res.innerHTML = `Sem empréstimo foi NEGADO devido a parcela ser de ${parcela.toFixed(2)} e ultrapassar à 30% do seu salário`
    }
}