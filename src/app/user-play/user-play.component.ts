import { Component } from '@angular/core';

@Component({
  selector: 'app-user-play',
  templateUrl: './user-play.component.html',
  styleUrls: ['./user-play.component.css']
})
export class UserPlayComponent {
  user : string="stone";
  userScore: number=0;

  computer : string="stone";
  compScore:number=0;

  dataArray : string[] =['stone','paper','scissor'];

  playerComputer(){
    const randomChoice = Math.floor(Math.random() * this.dataArray.length);
    // window.alert(this.dataArray[randomChoice])
    this.computer=this.dataArray[randomChoice]; 
  }

  stonePaperScissor(){
    
    // if (this.user==="stone" && this.computer==="paper"){
    //   this.compScore+=1;
    // }else if (this.user==="stone" && this.computer==="scissor"){
    //   this.userScore+=1;
    // }else {}

    // if (this.user==="paper" && this.computer==="scissor"){
    //   this.compScore+=1;
    // }else if (this.user==="paper" && this.computer==="stone"){
    //   this.userScore+=1;
    // }else {}

    // if (this.user==="scissor" && this.computer==="stone"){
    //   this.compScore+=1;
    // }else if (this.user==="scissor" && this.computer==="paper"){
    //   this.userScore+=1;
    // }else {}

    if(this.compScore===5 || this.userScore===5){
      return;
    }else if (this.user === "stone" && this.computer === "paper") {
      this.compScore += 1;
    } else if (this.user === "stone" && this.computer === "scissor") {
      this.userScore += 1;
    } else if (this.user === "paper" && this.computer === "scissor") {
      this.compScore += 1;
    } else if (this.user === "paper" && this.computer === "stone") {
      this.userScore += 1;
    } else if (this.user === "scissor" && this.computer === "stone") {
      this.compScore += 1;
    } else if (this.user === "scissor" && this.computer === "paper") {
      this.userScore += 1;
    }
  }

  onStoneClick(){
    this.user="stone";
    this.playerComputer();
    this.stonePaperScissor()
  }
  onPaperClick(){
    this.user="paper";
    this.playerComputer();
    this.stonePaperScissor()
  }
  onScissorClick(){
    this.user="scissor";
    this.playerComputer();
    this.stonePaperScissor()
  }
  reset() {
    this.userScore = 0;
    this.compScore = 0;
    // Reset any other necessary properties or variables
  }
}
