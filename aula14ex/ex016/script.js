function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Não foi possível contar!!!'
        window.alert('[ERRO] faltam dados!')
        
    }else {
        res.innerHTML = `Contando: <br>`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido ! Considerando passo 1')
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for(let c = i ; c <= f ; c += p) {
                res.innerHTML += `${c} &#128073 `
            }
            res.innerHTML += `&#x2705;`
        } else {
            //contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#128073 `
            }
            res.innerHTML += `&#x2705;`
        }
         
    }
}