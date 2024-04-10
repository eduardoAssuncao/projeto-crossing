function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostrarAtor();
  mostrarCarro();
  movimentarCarro();
  movimentarAtor();
  voltarPosicaoInicialCarro();
  verificarColisao();
  incluirPontos();
  marcarPontos();
}
