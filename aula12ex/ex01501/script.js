function verificar () {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')


if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente !')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')

   if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src','../imagens2/mas_bebe.png')
        } else if (idade >= 10 && idade <21) {
            //jovem
            img.setAttribute('src','../imagens2/BartSimpson.jpg')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src','../imagens2/mas_adulto.png')
        } else {
            //idoso
            img.setAttribute('src','../imagens2/masculinoidoso.jpg')
        }
   } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if (idade >=0 && idade < 10) {
            //criança
            img.setAttribute('src','../imagens2/fem_bebe.png')
        } else if (idade >= 10 && idade <21) {
            //jovem
            img.setAttribute('src','../imagens2/fem_kids.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src','../imagens2/fem_adulta.jpg')
        } else {
            //idoso
            img.setAttribute('src','../imagens2/fem_idosa.png')
        }
   }
   res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
   res.appendChild(img)
}
}