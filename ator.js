let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostrarAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentarAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
       yAtor += 3;  
    }
  }
  
  if(keyIsDown(LEFT_ARROW)){
    xAtor -= 3;
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 3;
  }
}

function verificarColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      somDaColisao.play();
      voltarParaOInicio();
      if(pontosMaiorQueZero()){
         meusPontos -= 1; 
      }
    }
  }
}

function voltarParaOInicio(){
  yAtor = 366;
}

function incluirPontos(){
  textAlign(CENTER);
  fill(color(255, 240, 60));
  textSize(25);
  text(meusPontos, width / 5, 27);
}

function marcarPontos(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    voltarParaOInicio();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor < 366;
}