function mensagem(){
const msg = window.document.getElementById('msg');
const data = new Date();
const hora = data.getHours();


if(hora > 0 && hora < 12){
    //BOM 
    msg.innerText+=',Bom Dia';
}else if(hora >=12 && hora <= 18){
    //BOA TARDE
    msg.innerText+=',Boa Tarde';
}else{
    //BOA NOITE
    msg.innerText+=',Boa Noite';
  //  window.document.body.style.backgroundColor='#808080'
}
}