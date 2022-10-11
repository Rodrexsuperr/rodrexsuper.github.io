var password= "1";

function passcheck () {
if(document.getElementById('pass1').value !=password) {
alert('Palavra passe errada, não tens acesso há página peço desculpa :/ ');
return false;
}

if(document.getElementById('pass1').value == password){
alert('Palavra passe Correta . Carrega ok para acederes há pagina');
}
}