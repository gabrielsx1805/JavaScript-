function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       if(fsex[0].checked){
           genero = 'homem'
        } else if (fsex[1].checked){
            genero = 'mulher'
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
