var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage ("path.png");
  boyImg = loadAnimation ("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  //loadImage de path (camino)
  //loadAnimation de boy (niño)
 
}

function setup(){
  createCanvas(400,400);
  path = createSprite (200,200,20,20);
  path.addImage (pathImg);
  path.velocityY = 4;
path.scale=1.2;

//crear sprite de boy (niño)
//agregar animación para boy
boy = createSprite(180,340,20,20);
boy.addAnimation ("running",boyImg)
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo
leftBoundary.visible = false;
//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
