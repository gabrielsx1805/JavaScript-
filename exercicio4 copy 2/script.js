var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true 
  } else{
    return false
  }

}
function inLista(n, l){
  if(l.indexOF(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
      window.alert('TUDO OK')
    } else{
      window.alert('VALOR INVALIDO OU JA ENCONTRADO')
    }
    num.value = ``
    num.focus()
}