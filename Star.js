class Star{
  constructor(){
    this.xPos = random(width);
    this.yPos = random(height);
    this.speed = random(0.5,1);
    this.color = 255;
  }

  move(){
    this.yPos = this.yPos + this.speed;
    if(this.yPos > height + 10){
      this.yPos=0;
    }
  }

  show(){
    fill(this.color,214, 50);
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
    //circle(this.xPos, this.yPos, this.radius);
  }

  randomPos(x){
    if(this.yPos > height){
      this.xPos = x;
    }


  }
}
