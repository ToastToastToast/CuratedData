let x = this.xPos;
let y = this.yPos
   
class Vehicle{
  
  constructor(){
    this.xPos = random(50,width-100);
    this.yPos = random(50,height-100);
    this.color = random(0,255);
    this.type = Math.floor(Math.random() * 18);
  }
  
  //displays vehicle
  show(alpha){
    
    //shoes
    if(this.type == 0){
      //shoes
    
      //reposition
      let r = -20;
      
    push();
    translate(this.xPos, this.yPos);
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(255, 28, 28, alpha);
    
    beginShape();
    curveVertex(20+r,10+r);
    curveVertex(20+r,10+r);
    curveVertex(17+r,18+r);
    curveVertex(5+r,20+r);
    curveVertex(5+r,27+r);
    curveVertex(30+r,25+r);
    curveVertex(30+r,10+r);
    curveVertex(20+r,10+r);
    curveVertex(20+r,10+r);
    endShape();
   
    fill(255, 255, 255, alpha);
    strokeWeight(1);
    stroke(0, 0, 0, alpha);
    rect(3+r,25+r,30,3);
    
    noFill();
    strokeWeight(1.4);
    stroke(255, 255, 255, alpha);
    beginShape();
    curveVertex(20+r,14+r);
    curveVertex(20+r,14+r);
    curveVertex(8+r,16+r);
    curveVertex(12+r,10+r);
    curveVertex(22+r,18+r);
    curveVertex(22+r,18+r);
    endShape();

    beginShape();
    curveVertex(21+r,16+r);
    curveVertex(21+r,16+r);
    curveVertex(35+r,13+r);
    curveVertex(32+r,20+r);
    curveVertex(19+r,16+r);
    curveVertex(19+r,16+r);
    endShape();
      
      pop();
    }
    
    //surfboard
    if(this.type == 1){
       push();
      translate(this.xPos, this.yPos);
    
      //reposition
      let xr = -100;
      let yr = -35;
      
      strokeWeight(2);
      stroke(0, 0 ,0, alpha);
      fill(45, 236, 250, alpha);
    
      beginShape();
      curveVertex(30+xr,40+yr);
      curveVertex(30+xr,40+yr);
      curveVertex(95+xr,35+yr);
      curveVertex(160+xr,40+yr);
      curveVertex(160+xr,45+yr);
      curveVertex(95+xr,45+yr);
      curveVertex(30+xr,45+yr);
      curveVertex(30+xr,40+yr);
      curveVertex(30+xr,40+yr);
      endShape();
    
      strokeWeight(1);
      fill(255, 233, 33,alpha);
      beginShape();
      curveVertex(140+xr,40+yr);
      curveVertex(140+xr,40+yr);
      curveVertex(155+xr,25+yr);
      curveVertex(170+xr,27+yr);
      curveVertex(165+xr,30+yr);
      curveVertex(155+xr,40+yr);
      curveVertex(155+xr,40+yr);
      curveVertex(140+xr,40+yr);
      curveVertex(140+xr,40+yr);
      endShape();
    
      pop();
    }
    
    //bed
    if(this.type == 2){
      push();
    
      translate(this.xPos, this.yPos);
      
      //reposition
      let xr = -80;
      let yr = -50;
      
      strokeWeight(2);
      stroke(0, 0 ,0, alpha);
      fill(158, 101, 2, alpha); //brown
    
      rect(30+xr,30+yr,5,35);
      rect(120+xr,30+yr,5,35);
    
      fill(255, 28, 28, alpha); //red
      rect(35+xr,45+yr,85,20);
    
      fill(255,255,255,alpha);
      rect(105+xr,35+yr,15,10,15);
    
      pop();
    }
    
    //neon lights
    if(this.type == 3){
       push();
      let c1 = color(18, 231, 255,alpha);
      let c2 = color(50, 252, 199,alpha);
    
      translate(this.xPos, this.yPos);
    
      noFill();
      for (var y = -30; y < 30; y++) {
        var inter = map(y, -30, 30, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(30, y, 90, y);
      }
      pop();
    }
    
    //flame
    if(this.type == 4){
       push();
    
    translate(this.xPos, this.yPos);
    
    //reposition
      let xr = -40;
      let yr = -55;
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(252, 118, 0, alpha); //brown
    
    beginShape();
    curveVertex(30+xr,0+yr);
    curveVertex(30+xr,10+yr);
    curveVertex(20+xr,50+yr);
    curveVertex(25+xr,70+yr);
    curveVertex(50+xr,75+yr);
    curveVertex(60+xr,50+yr);
    curveVertex(40+xr,30+yr);
    curveVertex(30+xr,10+yr);
    curveVertex(30+xr,0+yr);
    endShape();
    
    strokeWeight(1);
    fill(252, 218, 0,alpha);
    beginShape();
    curveVertex(30+xr,0+yr);
    curveVertex(30+xr,30+yr);
    curveVertex(25+xr,60+yr);
    curveVertex(35+xr,75+yr);
    curveVertex(50+xr,75+yr);
    curveVertex(55+xr,50+yr);
    curveVertex(40+xr,40+yr);
    curveVertex(30+xr,30+yr);
    curveVertex(30+xr,0+yr);
    endShape();
    
    pop();
    }
    
    //skateboard
    if(this.type == 5){
      push();
      translate(this.xPos, this.yPos); 
      
      //reposition
      let xr = -50
      let yr = -35
        
      strokeWeight(3);
      stroke(0, 0, 0, alpha);
      noFill();
   
      beginShape();
      curveVertex(25+xr, 30+yr);
      curveVertex(25+xr, 30+yr);
      curveVertex(35+xr, 35+yr);
      curveVertex(65+xr, 35+yr);
      curveVertex(75+xr, 30+yr);
      curveVertex(75+xr, 30+yr);
      endShape();
    
      stroke(0,0,0,alpha);
      rect(40+xr,37+yr,1,4);
      rect(60+xr,37+yr,1,4);
    
      strokeWeight(2);
      fill(255,255,255,alpha);
      circle(40+xr,43+yr,6);
      circle(60+xr,43+yr,6);
    
      pop();
    }
    
   //magic wand
    if(this.type == 6){
       push();
    
      //reposition
    //translate(this.xPos, this.yPos);
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(176, 0, 252, alpha); //purple
    
    rect(this.xPos-2,this.yPos+4, 4, 20);
    
    fill(255,214, 50, alpha);
    beginShape();
    vertex(this.xPos, this.yPos-10);
    vertex(this.xPos+4, this.yPos - 2);
    vertex(this.xPos+10,this.yPos - 2);
    vertex(this.xPos+5,this.yPos + 2);
    vertex(this.xPos+10,this.yPos+10);
    vertex(this.xPos, this.yPos + 5);
    vertex(this.xPos - 10, this.yPos + 10);
    vertex(this.xPos - 5, this.yPos + 2);
    vertex(this.xPos - 10, this.yPos - 2);
    vertex(this.xPos - 4, this.yPos - 2);
    vertex(this.xPos, this.yPos - 10);
    endShape();
    
    fill(255,214, 50, alpha);
    strokeWeight(1);
    rect(this.xPos+10, this.yPos-10,3,3);
    rect(this.xPos-10, this.yPos-10,3,3);
    rect(this.xPos+5, this.yPos-20,3,3);
    pop();
    }
   
  //lantern
    if(this.type == 7){
      push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
      let xr = -35;
      let yr = -40;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(0, 0, 0, alpha); //black
    
    triangle(20+xr,30+yr, 50+xr,30+yr, 35+xr,20+yr);
    
    fill(252, 206, 0,alpha);
    beginShape();
    vertex(20+xr,30+yr);
    vertex(25+xr,60+yr);
    vertex(45+xr,60+yr);
    vertex(50+xr,30+yr);
    endShape();
    
    fill(0,0,0,alpha);
    rect(34+xr,30+yr, 1,30);
    
    noFill();
    curve(118+xr,139+yr, 23+xr,26+yr, 43+xr,26+yr, -20+xr,149+yr);
    
    pop();
    }
    
    //gas pump
    if(this.type == 8){
        push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
    let xr = -35;
    let yr = -50
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(230, 0, 1, alpha); 
    
    rect(30+xr,25+yr,30,50, 5,5,0,0);
    
    //handle
    beginShape();
    vertex(62+xr,26+yr);
    vertex(70+xr,20+yr);
    vertex(72+xr,26+yr);
    vertex(64+xr,33+yr);
    vertex(60+xr,39+yr);
    vertex(58+xr,32+yr);
    vertex(62+xr,26+yr);
    endShape();
    
     //panel
    strokeWeight(1);
    fill(225,225,225,alpha);
    rect(35+xr,32+yr,20,10);
    line(38+xr,35+yr,53+xr,35+yr);
    line(38+xr,39+yr,53+xr,39+yr);
    
    //lever and nozzle
    fill(150,150,150,alpha);
    quad(71+xr,20+yr, 80+xr,16+yr, 82+xr,20+yr, 72+xr,23+yr);
    strokeWeight(0.7);
    line(67+xr,31+yr, 66+xr,40+yr);
    line(61+xr,47+yr, 66+xr,40+yr);
    line(61+xr,47+yr, 59+xr,38+yr);
    line(60+xr,44+yr, 65+xr,37+yr);
    line(65+xr,37+yr, 66+xr,32+yr);
    strokeWeight(3);
    line(58+xr,35+yr, 50+xr,50+yr);
    
    //drips
    strokeWeight(0.3);
    fill(212, 170, 2,alpha);
    circle(84+xr,17+yr,4);
    circle(84+xr,25+yr,4);
    circle(84+xr,45+yr,4);
    circle(84+xr,67+yr,3);
    
    pop();
    }
 
    //ghost
    if(this.type == 9){
      push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
    let xr = -30;
    let yr = -50;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(245, 245, 245, alpha); 
    
    beginShape();
    curveVertex(30+xr,30+yr);
    curveVertex(30+xr,30+yr);
    curveVertex(20+xr,40+yr);
    curveVertex(15+xr,60+yr);
    curveVertex(5+xr,70+yr);
    curveVertex(15+xr,75+yr);
    curveVertex(20+xr,70+yr);
    curveVertex(25+xr,75+yr);
    curveVertex(30+xr,70+yr);
    curveVertex(35+xr,75+yr);
    curveVertex(40+xr,70+yr);
    curveVertex(45+xr,75+yr);
    curveVertex(50+xr,70+yr);
    curveVertex(55+xr,75+yr);
    curveVertex(60+xr,70+yr);
    curveVertex(45+xr,60+yr);
    curveVertex(40+xr,40+yr);
    curveVertex(30+xr,30+yr);
    curveVertex(30+xr,30+yr);
    endShape();
    
    fill(0,0,0,alpha);
    circle(25+xr,44+yr,4);
    circle(35+xr,44+yr,4);
    circle(30+xr,54+yr,4);
    pop();
    }
    
    //camper car
    if(this.type == 10){
       push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
      let xr= -80;
      let yr = -56;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(26, 148, 1, alpha); 
    
    beginShape();
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(40+xr,75+yr);
    curveVertex(50+xr,65+yr); //wheel1
    curveVertex(60+xr,75+yr);
    curveVertex(90+xr,75+yr);
    curveVertex(100+xr,65+yr); //wheel2
    curveVertex(110+xr,75+yr);
    curveVertex(130+xr,70+yr);
    //curveVertex(130,75);//bottom right
    curveVertex(130+xr,45+yr);//top right
    curveVertex(120+xr,35+yr);
    curveVertex(70+xr,35+yr);
    curveVertex(60+xr,36+yr);
    curveVertex(40+xr,50+yr);
    curveVertex(30+xr,50+yr);
    curveVertex(20+xr,55+yr);
    curveVertex(20+xr,70+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    endShape();
    
    fill(0,0,0,alpha);
    circle(50+xr,73+yr,15);
    circle(102+xr,73+yr,15);
    rect(131+xr,46+yr,5,17);
    
    strokeWeight(1);
    fill(255,0,0,alpha);
    rect(125+xr,55+yr,3,6);
    
    fill(252, 206, 0,alpha);
    rect(20+xr,55+yr,5,6, 10);
    
    fill(56, 56, 56,alpha);
    quad(57+xr,40+yr, 45+xr,48+yr, 63+xr,48+yr, 71+xr,40+yr);
    rect(80+xr,40+yr, 20,10, 2);
    
    stroke(108, 74, 1,alpha);
    fill(237, 181, 50, alpha);
    rect(75+xr,25+yr,35,10);
    noFill();
    rect(85+xr,25+yr,15,10);
    
    pop();
    }
    
      //car
    if(this.type == 11){
    push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
    let xr = -80;
    let yr = -56
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(245, 245, 245, alpha); 
    
    beginShape();
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(40+xr,75+yr);
    curveVertex(50+xr,65+yr); //wheel1
    curveVertex(60+xr,75+yr);
    curveVertex(90+xr,75+yr);
    curveVertex(100+xr,65+yr); //wheel2
    curveVertex(110+xr,75+yr);
    curveVertex(130+xr,70+yr);
    //curveVertex(130,75);//bottom right
    curveVertex(130+xr,45+yr);//top right
    curveVertex(120+xr,35+yr);
    curveVertex(70+xr,35+yr);
    curveVertex(60+xr,36+yr);
    curveVertex(40+xr,50+yr);
    curveVertex(30+xr,50+yr);
    curveVertex(20+xr,55+yr);
    curveVertex(20+xr,70+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    endShape();
    
    fill(0,0,0,alpha);
    circle(50+xr,73+yr,15);
    circle(102+xr,73+yr,15);
    
    strokeWeight(1);
    fill(255,0,0,alpha);
    rect(125+xr,55+yr,3,6);
    
    fill(252, 206, 0,alpha);
    rect(20+xr,55+yr,5,6, 10);
    
    fill(56, 56, 56,alpha);
    quad(57+xr,40+yr, 45+xr,48+yr, 63+xr,48+yr, 71+xr,40+yr);
    rect(80+xr,40+yr, 20,10, 2);
    
    pop();
    }
    
   //rock
    if(this.type == 12){
       push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
      let xr = -37;
      let yr = -38;
    
    strokeWeight(1);
    stroke(0, 0 ,0, alpha);
    fill(168, 107, 0, alpha); 
    
    beginShape();
    vertex(30+xr,30+yr);
    vertex(25+xr,35+yr);
    vertex(19+xr,45+yr);
    vertex(25+xr,58+yr);
    vertex(37+xr,56+yr);
    vertex(45+xr,62+yr);
    vertex(58+xr,48+yr);
    vertex(52+xr,39+yr);
    vertex(48+xr,27+yr);
    vertex(30+xr,30+yr);
    endShape();
    
    pop();
    }
    
    //star
    if(this.type == 13){
      push();
    
    strokeWeight(1);
    stroke(0, 0 ,0, alpha);
    fill(168, 107, 0, alpha); 
      
    
    
    fill(212, 255, 254, alpha);
    beginShape();
    vertex(this.xPos, this.yPos-10);
    vertex(this.xPos+4, this.yPos - 2);
    vertex(this.xPos+10,this.yPos - 2);
    vertex(this.xPos+5,this.yPos + 2);
    vertex(this.xPos+10,this.yPos+10);
    vertex(this.xPos, this.yPos + 5);
    vertex(this.xPos - 10, this.yPos + 10);
    vertex(this.xPos - 5, this.yPos + 2);
    vertex(this.xPos - 10, this.yPos - 2);
    vertex(this.xPos - 4, this.yPos - 2);
    vertex(this.xPos, this.yPos - 10);
    endShape();
    
    pop();
    }
    
    //scooter
    if(this.type ==14){
    push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
      let xr = -50;
      let yr = -40;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    noFill();
    
    beginShape();
    curveVertex(30+xr,30+yr);
    curveVertex(30+xr,30+yr);
    curveVertex(30+xr,50+yr);
    curveVertex(37+xr,55+yr);//bump
    curveVertex(40+xr,60+yr);
    curveVertex(60+xr,60+yr);
    curveVertex(70+xr,55+yr);
    curveVertex(80+xr,60+yr);
    curveVertex(80+xr,60+yr);
    endShape();
    
    fill(0,0,0,alpha);
    circle(30+xr,60+yr,10);
    circle(71+xr,62+yr,8);
    
    fill(255,0,0,alpha);
    rect(28+xr,25+yr,9,3);
    
    pop();
    }
    
    //clip
    if(this.type == 15){
   push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
      let xr =-55;
      let yr = -50;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(0,0,0,alpha);
    
    rect(30+xr,30+yr,50,40);
    quad(33+xr,29+yr, 80+xr,10+yr, 85+xr,15+yr, 40+xr,30+yr);
    
    //checkerbox
    strokeWeight(1);
    fill(255,255,255,alpha);
    rect(30+xr,30+yr,10,10);
    rect(50+xr,30+yr,10,10);
    rect(70+xr,30+yr,10,10);
    
    quad(61+xr,17+yr, 67+xr,14+yr, 72+xr,19+yr, 62+xr,23+yr);
    quad(44+xr,24+yr, 53+xr,20+yr, 54+xr,26+yr, 48+xr,29+yr);
    
    //lines
    strokeWeight(2);
    stroke(225,225,225,alpha);
    line(32+xr,50+yr, 78+xr,50+yr);
    line(32+xr,60+yr, 78+xr,60+yr);
    line(45+xr,60+yr, 45+xr,70+yr);
    line(65+xr,60+yr, 65+xr,70+yr);
    
    
    pop();
    }
    
    //lightning bolt
    if(this.type == 16){
      
     push();
    
    translate(this.xPos, this.yPos);
    strokeWeight(1);
    fill(255, 213, 0,alpha);
      
    //reposition
    let xr = -41;
    let yr = -47;
    
    beginShape();
    vertex(35+xr,68+yr);
    vertex(32+xr,86+yr);
    vertex(38+xr,86+yr);
    vertex(35+xr,108+yr); //tip
    vertex(45+xr,78+yr);
    vertex(41+xr,78+yr);
    vertex(47+xr,65+yr);
    endShape();
    
    strokeWeight(2);
    noStroke();
    fill(160,160,160,alpha);
    
    ellipse(30+xr,30+yr,50,40);
    ellipse(40+xr,30+yr,50,40);
    ellipse(40+xr,50+yr,50,40);
    ellipse(60+xr,42+yr,50,40);
    ellipse(64+xr,27+yr,50,40);
    ellipse(53+xr,23+yr,50,40);
    
    pop();
    }
    
    //bus
    if(this.type == 17){
      push();
    
    translate(this.xPos, this.yPos);
      
    //reposition
    let xr = -80;
    let yr = -56;
    
    strokeWeight(2);
    stroke(0, 0 ,0, alpha);
    fill(245, 245, 245, alpha); 
    
    beginShape();
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(40+xr,75+yr);
    curveVertex(50+xr,65+yr); //wheel1
    curveVertex(60+xr,75+yr);
    curveVertex(90+xr,75+yr);
    curveVertex(100+xr,65+yr); //wheel2
    curveVertex(110+xr,75+yr);
    curveVertex(130+xr,70+yr);
    curveVertex(130+xr,45+yr);//top right
    curveVertex(120+xr,35+yr);
    curveVertex(35+xr,32+yr);
    curveVertex(20+xr,50+yr);
    curveVertex(20+xr,70+yr);
    curveVertex(30+xr,75+yr);
    curveVertex(30+xr,75+yr);
    endShape();
    
    //wheels
    fill(0,0,0,alpha);
    circle(50+xr,73+yr,15);
    circle(102+xr,73+yr,15);
    circle(85+xr,73+yr,15);
    
    //back light
    strokeWeight(1);
    fill(255,0,0,alpha);
    rect(125+xr,55+yr,3,6);
    
    //light
    fill(252, 206, 0,alpha);
    rect(20+xr,55+yr,5,6, 10);
    
    //custom window
    fill(56, 56, 56,alpha);
    quad(27+xr,40+yr, 25+xr,48+yr, 36+xr,48+yr, 38+xr,40+yr);
    rect(80+xr,40+yr, 20,10, 2);
     rect(50+xr,40+yr, 20,10, 2);
    rect(110+xr,40+yr, 12,10, 2);
    
    pop();
    
    }
    
    
  }
  
  
  
  //returns type of vehicle
  getType(){
    return this.type;
  }
  
  getxPos(){
    return x;
  }
  
  getyPos(){
    return y;
  }
  
  //for shining light on vehicle
  found(px,py){
    let d = dist(px,py, this.xPos,this.yPos); 
    
    if(d < 20){
      alpha = 255;
      return true;
    }
    else if(d < 40){
      alpha = 200;
      return true;
     }
    else if(d < 60){
      alpha = 100;
      return true;
     }
    else if(d < 80){
      alpha = 30;
      return true;
     }
    else{
      alpha = 0;
      return false;
    }
  }
  
  
  //for clicking on vehicle
  clicked(px,py){
  let d = dist(px,py, this.xPos,this.yPos);
  if(d < 30){
      imageType = this.type;
       state = 'location';
     }
}
  
}
