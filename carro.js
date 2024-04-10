let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2, 5, 1, 4, 3, 4.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostrarCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro); 
  }
}

function movimentarCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];    
  }
}

function voltarPosicaoInicialCarro(){
    for(let i = 0; i < imagemCarros.length; i++){
      if(passouTodaATela(xCarros[i])){
       xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -40;
}