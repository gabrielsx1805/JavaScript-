function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date()
//var hora = data.getHours()
var hora = 15
var minuto = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
if (hora >= 0 && hora < 12){
    img.src = 'dia.png'
    document.body.style.background = '#BDE038'
} else if (hora >= 12 && hora <= 18) {
    img.src = 'tarde.png'
    window.document.body.style.background = '#10454F'
}else{
    img.src = 'noite.png'
    window.document.body.style.background = '#818274'
}
}
