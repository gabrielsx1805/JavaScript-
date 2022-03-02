function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora sao ${hora} horas`
if(hora >= 0 && hora < 12){
    img.src = 'dia.png'
    //BOM DIA!
}else if(hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'tarde.png'
}else{
    img.src = 'noite.png'
    //BOA NOITE!
    }
}

