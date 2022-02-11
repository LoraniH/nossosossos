//variáveis de arquivos//
var imagemlorrany;
var imgoi;
var imghemerson;
var imgnossosossos;
var imgfemur;
var imgcraniobranco;
var imgcraniopreto;
var imgesqueletoroxo;
var imgumero;
var imgclavicula;
var imgpatela;
var imgcaveirinhas;
var imgpatela;
var imgradio;
var imgescapula;
var imgtibia;
var imgulna;
var imgfibula;
var imgmandibula;
let correctsound;
let backgroundmusic;
let wrongsound;
let endgamemusic;
var imgendgame;
var imgendgame2;

//telas//
var tela = 0;
// 0=menu  1=instruções  2=créditos  3=niveis 4= resposta errada 5=resposta certa 6=fim de jogo //
var nivel = 1;


//botões//
var largurabotao1 = 165 
var alturabotao1 = 50 
var xMinBotao1 = 245
var xMaxBotao1 = xMinBotao1 + largurabotao1
var yMinBotao1 = 310
var yMaxBotao1 = yMinBotao1 + alturabotao1

var largurabotao2 = 165 
var alturabotao2 = 50 
var xMinBotao2 = 245
var xMaxBotao2 = xMinBotao2 + largurabotao2
var yMinBotao2 = 370
var yMaxBotao2 = yMinBotao2 + alturabotao2

var largurabotao3 = 165 
var alturabotao3 = 50 
var xMinBotao3 = 245
var xMaxBotao3 = xMinBotao3 + largurabotao3
var yMinBotao3 = 250
var yMaxBotao3 = yMinBotao3 + alturabotao3

var larguraBvoltar = 70 
var alturaBvoltar = 35 
var xMinBvoltar = 30
var xMaxBvoltar = xMinBvoltar + larguraBvoltar
var yMinBvoltar = 40
var yMaxBvoltar = yMinBvoltar + alturaBvoltar

var larguraAgain = 215 
var alturaAgain = 45 
var xMinAgain = 215
var xMaxAgain = xMinAgain + larguraAgain
var yMinAgain = 150
var yMaxAgain = yMinAgain + alturaAgain

var larguraNext = 215 
var alturaNext = 45 
var xMinNext = 215
var xMaxNext = xMinNext + larguraNext
var yMinNext = 255
var yMaxNext = yMinNext + alturaNext


//botões alternativas fases//

var alturaBFase1 = 45
var yMinBFase1 = 350
var yMaxBFase1 = yMinBFase1 + alturaBFase1

var larguraB1Fase1 = 100 
var xMinB1Fase1 = 120
var xMaxB1Fase1 = xMinB1Fase1 + larguraB1Fase1

var larguraB2Fase1 = 100 
var xMinB2Fase1 = 270
var xMaxB2Fase1 = xMinB2Fase1 + larguraB2Fase1

var larguraB3Fase1 = 100 
var xMinB3Fase1 = 420
var xMaxB3Fase1 = xMinB3Fase1 + larguraB3Fase1


//funções//
function telainstrucoes(){
  background("#FFE471");
  textSize(40)
  fill("#A74CE0")
  text("Instruções:",230,80)
  textSize(20)
  fill(10)
  text("- Utilize o mouse para selecionar qualquer opção;",40,160)
  textSize(20)
  text("- Clique em 'Voltar' ou 'Menu' para retornar ao menu principal;",40,200,[580])
  text("- Se retornar ao Menu, seu progresso será perdido e recomeçará da Fase 1. ",40,275,[580])

  textSize(40)
  fill("#A74CE0")
  text("Bom jogo!",234,400)
  
  
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
         }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10);
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Voltar",xMinBvoltar+5,yMinBvoltar+25);  
  
}

function telacreditos(){
  background("#FFE471");
  textSize(50);
  fill("#7817FF");
  text("Créditos", 220, 75);
  fill("#000000");
  textSize(20);
  fill("#7817FF");
  text("Lorrany Fagundes", 50, 150);
  fill("#000000");
  textSize(18);
  text("Função: Programadora", 50, 175);
  fill("#000000");
  textSize(16);
  text("Discente em Ciências e Tecnologias na Universidade Federal do Rio Grande do Norte. ",50, 188, [215]);
  fill("#000000");
  image(imagemlorrany, 65,300);
  image(imgoi, 265,175);
  //
  textSize(20);
  fill("#7817FF");
  text("Hemerson Nogueira", 420, 150);
  fill("#000000");
  textSize(18);
  text("Função: Educador", 420, 175);
  fill("#000000");
  textSize(16);
  text("Professor de Biologia da Rede Estadual de Ensino do Rio Grande do Norte.", 420, 188, [215]);
  fill("#000000");
  image(imghemerson, 435,300,[133],[118]);
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
         }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10);
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Voltar",xMinBvoltar+5,yMinBvoltar+25);
}

function menu(){
    background(imgnossosossos,70);
    if(mouseX>xMinBotao1 && mouseX <xMaxBotao1 && mouseY>yMinBotao1 && mouseY <yMaxBotao1){
      fill("#CBC1F5");
    }else{
      noFill();
         }
    stroke("#A74CE0");
    rect(xMinBotao1, yMinBotao1, largurabotao1, alturabotao1, 10);
    textSize(28);
    textFont('cursive');
    noStroke();
    fill("#7817FF");
    text("Instruções",xMinBotao1+12, yMinBotao1+14,largurabotao1,alturabotao1);    
    
  
    if(mouseX>xMinBotao2 && mouseX <xMaxBotao2 && mouseY>yMinBotao2 && mouseY <yMaxBotao2){
      fill("#CBC1F5");
    }else{
      noFill();
         }
    stroke("#A74CE0");
    rect(xMinBotao2, yMinBotao2, largurabotao2, alturabotao2, 10);
    textSize(28);
    textFont('cursive');
    noStroke();
    fill("#7817FF");
    text("Créditos",xMinBotao2+24, yMinBotao2+14, largurabotao2,   alturabotao2);    
  
    if(mouseX>xMinBotao3 && mouseX <xMaxBotao3 && mouseY>yMinBotao3 && mouseY <yMaxBotao3){
      fill("#CBC1F5");
    }else{
      noFill();
         }
    stroke("#A74CE0");
    rect(xMinBotao3, yMinBotao3, largurabotao3, alturabotao3, 10);
    textSize(28);
    textFont('cursive'); 
    noStroke();
    fill("#7817FF");
    text("Jogar",xMinBotao3+45, yMinBotao3+14, largurabotao3,   alturabotao3);
  
}

function respostaerrada(){
  
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Resposta errada :(",210,80);
  
  if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      fill("#CBC1F5");
     }else{noFill();
          }
  
  stroke("#A74CE0");
  rect(xMinAgain,yMinAgain,larguraAgain,alturaAgain,10)
  fill("#000000");
  textSize(24);
  noStroke();
  textFont('cursive');
  text("Tentar novamente",xMinAgain+8,yMinAgain+30);
  image(imgcraniobranco,39,350);
  image(imgcraniobranco,286,350);
  image(imgcraniobranco,537,350);

}

function respostacerta(){
  
  background("#FFE471");
  textSize(33);
  fill(10);
  fill("#7817FF");
  text("Resposta Certa :)",190,180);
 
  
  if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      fill("#CBC1F5");
     }else{noFill();
          }
  
  stroke("#A74CE0");
  rect(xMinNext,yMinNext,larguraNext,alturaNext,10)
  fill("#000000");
  textSize(24);
  noStroke();
  textFont('cursive');
  text("Próxima Fase",xMinNext+34,yMinNext+30);
 
  image(imgcaveirinhas,200,40);
  image(imgcraniopreto,285,340);
 
}

function endgame(){
  
  background(imgendgame2);
  textSize(33);
  fill("#7817FF");
  text(" Parabéns!",400,125);
 
  backgroundmusic.stop();
  
  textSize(29);
  textFont('cursive');
  text("Você concluiu",xMinNext+60,yMinNext+34);
  text(" o meu jogo!",xMinNext+65,yMinNext+65)
 
   if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10);
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  

}

function correctSound(){
  correctsound.play();
  correctsound.setVolume(0.5)
  
  
}

function wrongSound(){
  wrongsound.play();
  wrongsound.setVolume(0.5)
  
}

function backgroundMusic(){
  backgroundmusic.play();
  backgroundmusic.loop();
  backgroundmusic.setVolume(0.4)
  userStartAudio();
  
}

function endgameMusic(){
  endgamemusic.play();
  endgamemusic.loop();
  endgamemusic.setVolume(0.4)
  
}

function fase1(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 1",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome deste osso?",170,80);
  image(imgfemur,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Rádio",xMinB1Fase1+20,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Fêmur",xMinB2Fase1+19,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Tíbia",xMinB3Fase1+20,yMinBFase1+30);
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10);
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}
    
function fase2(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 2",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgumero,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Úmero",xMinB1Fase1+16,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Escápula",xMinB2Fase1+5,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Ulna",xMinB3Fase1+24,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase3(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 3",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgclavicula,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Clavícula",xMinB1Fase1+4,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Patela",xMinB2Fase1+17,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Escápula",xMinB3Fase1+4,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase4(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 4",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgpatela,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Tíbia",xMinB1Fase1+21,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Carpo",xMinB2Fase1+19,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Patela",xMinB3Fase1+18,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase5(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 5",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome deste osso?",170,80);
  image(imgradio,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Falange",xMinB1Fase1+10,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Ílio",xMinB2Fase1+29,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10)
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Rádio",xMinB3Fase1+20,yMinBFase1+30);
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10);
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase6(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 6",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgescapula,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Escápula",xMinB1Fase1+4,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Clavícula",xMinB2Fase1+4,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Úmero",xMinB3Fase1+16,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}
    
function fase7(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 7",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgtibia,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Tíbia",xMinB1Fase1+21,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Tarso",xMinB2Fase1+18,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Ulna",xMinB3Fase1+24,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase8(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 8",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgulna,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Fíbula",xMinB1Fase1+17,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Ulna",xMinB2Fase1+25,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Sacro",xMinB3Fase1+18,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase9(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 9",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgfibula,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Tíbia",xMinB1Fase1+21,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1,yMinBFase1,larguraB2Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Fíbula",xMinB2Fase1+19,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Esterno",xMinB3Fase1+10,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function fase10(){
  background("#FFE471");
  textSize(27);
  fill(10);
  fill("#7817FF");
  text("Fase 10",278,50);
  textSize(25);
  fill("#000000");
  text("Qual o nome desse osso?",170,80);
  image(imgmandibula,160,100,310,220);
  
  if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB1Fase1,yMinBFase1,larguraB1Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Maxilar",xMinB1Fase1+10,yMinBFase1+30);
  
  if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB2Fase1-9,yMinBFase1,larguraB2Fase1+15,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Mandíbula",xMinB2Fase1-5,yMinBFase1+30);
  
  if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      fill("#CBC1F5");
  }else{noFill();}
  
  stroke("#A74CE0");
  rect(xMinB3Fase1,yMinBFase1,larguraB3Fase1,alturaBFase1,10);
  fill("#000000");
  textSize(23);
  noStroke();
  textFont('cursive');
  text("Falange",xMinB3Fase1+11,yMinBFase1+30)
  
  if(mouseX>xMinBvoltar && mouseX <xMaxBvoltar && mouseY>yMinBvoltar && mouseY <yMaxBvoltar){
      fill("#CBC1F5");
    }else{
      noFill();
    }
  
  stroke("#A74CE0");
  rect(xMinBvoltar,yMinBvoltar,larguraBvoltar,alturaBvoltar,10)
  fill("#000000");
  textSize(20);
  noStroke();
  textFont('cursive');
  text("Menu",xMinBvoltar+9,yMinBvoltar+25);
  
}

function preload(){
  imgnossosossos = loadImage("Nossos Ossos.png");
  imagemlorrany = loadImage("lorrany.png");
  imgoi=loadImage("oi.jpg");
  imghemerson=loadImage("hemerson.jpeg"); 
  imgfemur=loadImage("femur.png");
  imgcraniopreto=loadImage("craniopreto.png");
  imgcraniobranco=loadImage("craniobranco.png");
  imgesqueletoroxo=loadImage("esqueletoroxo.png");
  imgumero=loadImage("umero.png");
  imgclavicula= loadImage("clavícula.png");
  imgpatela= loadImage("patela.png");
  imgcaveirinhas= loadImage("caveirinhas.png")
  imgpatela=loadImage("patela.png");
  imgradio=loadImage("radio.png")
  imgescapula=loadImage("escapula.png")
  imgtibia=loadImage("tibia.png")
  imgulna=loadImage("ulna.png")
  imgfibula=loadImage("fibula.png")
  imgmandibula=loadImage("mandibula.png")
  correctsound=loadSound("correctsong.mp3")
  backgroundmusic=loadSound("backgroundmusic.mp3")
  imgendgame=loadImage("endgame.png")
  imgendgame2=loadImage("endgame2.png")
  wrongsound=loadSound("wrongsound.mp3")
  endgamemusic=loadSound("endgamemusic.mp3")
}

function setup() {
  createCanvas(650, 450);
  backgroundMusic();
}

function draw() {
  
if(tela==0){menu()}
if(tela==1){telainstrucoes()}
if(tela==2){telacreditos()}
if(tela==3){
  if(nivel==1){fase1()}
  if(nivel==2){fase2()}
  if(nivel==3){fase3()}
  if(nivel==4){fase4()}
  if(nivel==5){fase5()}
  if(nivel==6){fase6()}
  if(nivel==7){fase7()}
  if(nivel==8){fase8()}
  if(nivel==9){fase9()}
  if(nivel==10){fase10()}

}
if(tela==4){respostaerrada()}
if(tela==5){respostacerta()}
if(tela==6){endgame()}

}

function mouseClicked(){
  
  if(tela==0){
    if(mouseY>yMinBotao1 && mouseY<yMaxBotao1 && mouseX>xMinBotao1 && mouseX<xMaxBotao1){
      console.log("Botão 1")   
      tela = 1;
  }else{
    if(mouseY>yMinBotao2 && mouseY<yMaxBotao2 && mouseX>xMinBotao2 && mouseX<xMaxBotao2){
      console.log("Botão 2")   
      tela = 2;
  }else{
     if(mouseY>yMinBotao3 && mouseY<yMaxBotao3 && mouseX>xMinBotao3 && mouseX<xMaxBotao3){
      console.log("Botão 3")   
      tela = 3;
      nivel= 1;
}}}}
  if(tela==1){
    if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar 1")   
      tela = 0;
}}
  if(tela==2){
    if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar 2")   
      tela = 0;
}}
  
  if(tela==3){
    if(nivel==1){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 2")
      tela=5;
      correctSound(); 
      }
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    } 
  }
  if(tela==3){
    if(nivel==2){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 3")
      tela=5;
      correctSound();  
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    }     

  }
  if(tela==3){
     if(nivel==3){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 4")
      tela=5;
      correctSound()  
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    } 
  }
  if(tela==3){
    if(nivel==4){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 5")
      tela=5;
      correctSound()  
      }
    } 
  }
  if(tela==3){
     if(nivel==5){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 6")
      tela=5;
      correctSound();
      }
    } 
  }
  if(tela==3){
     if(nivel==6){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 7")
      tela=5;
      correctSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    }
  }
  if(tela==3){
    if(nivel==7){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 8")
      tela=5;
      correctSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }   
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    }
  }
  if(tela==3){
    if(nivel==8){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 9")
      tela=5;
     correctSound();
      }
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    } 
  }
  if(tela==3){
     if(nivel==9){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 10")
      tela=5;
      correctSound();
      }
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    } 
  }
  if(tela==3){
    if(nivel==10){
      if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      }
      if(mouseX>xMinB1Fase1 && mouseX <xMaxB1Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
      if(mouseX>xMinB2Fase1 && mouseX <xMaxB2Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("next fase 10")
      tela=6;
      endgameMusic();
 
      }
      if(mouseX>xMinB3Fase1 && mouseX <xMaxB3Fase1 && mouseY>yMinBFase1 && mouseY <yMaxBFase1){
      console.log("tela resposta errada")
      tela=4;
      wrongSound();
      }
    } 
  }
  
  if(tela==4){
    if(nivel==1){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 1")   
      tela = 3
      nivel = 1}  
}
    if(nivel==2){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 2")   
      tela = 3
      nivel = 2}            
}
    if(nivel==3){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 3")   
      tela = 3
      nivel = 3}} 
    if(nivel==4){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 4")   
      tela = 3
      nivel = 4}} 
    if(nivel==5){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 5")   
      tela = 3
      nivel = 5}  
}
    if(nivel==6){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 6")   
      tela = 3
      nivel = 6}            
}
    if(nivel==7){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 7")   
      tela = 3
      nivel = 7}} 
    if(nivel==8){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 8")   
      tela = 3
      nivel = 8}}   
    if(nivel==9){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 9")   
      tela = 3
      nivel = 9}} 
    if(nivel==10){
    if(mouseX>xMinAgain && mouseX <xMaxAgain && mouseY>yMinAgain && mouseY <yMaxAgain){
      console.log("Botão tentar novamente p fase 10")   
      tela = 3
      nivel = 10}}  
    
  }
  
  if(tela==5){
    if(nivel==1){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 2")   
      tela = 3
      nivel = 2}  
}}
  if(tela==5){
    if(nivel==2){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 3")   
      tela = 3
      nivel = 3}         
}}
  if(tela==5){
    if(nivel==3){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 4")   
      tela = 3
      nivel = 4}         
}}
  if(tela==5){
    if(nivel==4){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 5")   
      tela = 3
      nivel = 5}    
}}
  if(tela==5){
    if(nivel==5){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 6")   
      tela = 3
      nivel = 6}    
}}
  if(tela==5){
    if(nivel==6){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 7")   
      tela = 3
      nivel = 7}  
}}
  if(tela==5){
    if(nivel==7){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 8")   
      tela = 3
      nivel = 8}         
}}
  if(tela==5){
    if(nivel==8){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 9")   
      tela = 3
      nivel = 9}         
}}
  if(tela==5){
    if(nivel==9){
    if(mouseX>xMinNext && mouseX <xMaxNext && mouseY>yMinNext && mouseY <yMaxNext){
      console.log("próxima fase 10")   
      tela = 3
      nivel = 10}    
}}
 
  if(tela==6){
     if(mouseY>yMinBvoltar && mouseY<yMaxBvoltar && mouseX>xMinBvoltar && mouseX<xMaxBvoltar){
      console.log("Botão Voltar Menu")   
      tela = 0;
      backgroundmusic.play();
      endgamemusic.stop();
      }
  }
}
  





