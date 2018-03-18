import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Maths Quiz';
  questionHide = true;
  hideStart = false;
  isHidden = true;
  showHide= false;
  showTable = true;
  textboxHidden = true;
  scoreNCounter = true;
  disSub2 = false;
  score = 0;
  counter = 1;
  diff = 5;
  multiDiv = 1;
  operators = ['+', '-'];
  scoreboard= [];
  name1 ="";
  class = "";
  timer;

   //def 2 operators + they will change a around line 28
   with(){
     this.multiDiv = 2;
     alert("You have selected Multiplicaition and Division.\n You will be playing with all 4 operators. \n When using division, don't include remainders.");
   }
   without(){
     this.multiDiv = 1;
     alert("You have selected without Multiplicaition and Division.\n You will be playing with 2 operators: + and -.");
   }
   easy(){this.diff = 5;
     alert("Easy choice chosen! \n You will be playing with numbers between 1-5");
     if (this.multiDiv == 2){
       this.operators = ['+','-','DIV','*'];
     }
     else{
     this.operators = ['+', '-']
    }
  }
   med(){this.diff = 10;
     alert("Medium choice chosen! \n You will be playing with numbers between 1-10");
     if (this.multiDiv == 2){
       this.operators = ['+','-','DIV','*'];
     }
     else{
     this.operators = ['+', '-']
    }
   }
   hard(){this.diff = 20;
     alert("Hard choice chosen! \n You will be playing with numbers between 1-20");
     if (this.multiDiv == 2){
       this.operators = ['+','-','DIV','*'];
     }
     else{
     this.operators = ['+', '-']
    }
   }
   No1 = Math.floor(Math.random() * this.diff + 1);
   No2 = Math.floor(Math.random() * this.diff + 1);
   rand = this.operators[Math.floor(Math.random() * this.operators.length)];
//def questions + answer
   quest;
   answer;;
//def usersInput as nothing until entered.
   usersInput;
   number1;
   number2;
   timeString;
//random questions
  ngOnInit(){
//display in dev console
  console.log(this.quest,this.answer);}
start(){
  // this.counter20();
    this.isHidden = false;
    this.No1 = Math.floor(Math.random() * this.diff + 1);
    this.No2 = Math.floor(Math.random() * this.diff + 1);
    this.rand = this.operators[Math.floor(Math.random() * this.operators.length)];
 //def questions + answer
    this.quest = this.No1 + this.rand + this.No2;
    this.answer = eval(this.quest);
    if (this.answer % 1 !== 0){
      this.answer = eval(this.quest).toFixed(1)
    }
    this.answer = this.answer.toString();
        this.usersInput = "";
  }


    marking(){
      // this.counter20();

        if (this.usersInput == this.answer){
          this.score = this.score + 1;
        }
        if (this.counter > 19){
          this.timeString = "End of quiz, You have answered all questions";
          clearInterval(this.timer);
          this.isHidden = false;
          // document.getElementById("name").removeAttribute("hidden");
          // document.getElementById("nameSubmit").removeAttribute("hidden");
        }else{
          this.counter = this.counter + 1;
          this.No1 = Math.floor(Math.random() * this.diff + 1);
          this.No2 = Math.floor(Math.random() * this.diff + 1);
          this.rand = this.operators[Math.floor(Math.random() * this.operators.length)];
          //def questions + answer
          this.quest = this.No1 + this.rand + this.No2;
          this.answer = eval(this.quest);
          if (this.answer % 1 !== 0){
            this.answer = eval(this.quest).toFixed(1)
          }
          if (this.answer == 0){
            this.answer = eval(this.quest).toFixed(0)
          }
          this.answer = this.answer.toString();
          this.usersInput = "";
        }
      }
//input + submit
aClick(){
  this.marking();
//  document.getElementById("submit").setAttribute("submit.value" = "");
  }
  //adding to score

  createTimer(){
    var cd = 120; //<----That is how long the timer will be in seconds
    var countDown = new Date("July 23 , 2017 17:00:00").getTime();
    var a2 = this;
    a2.isHidden = false;
    a2.timer = setInterval(function() {
    var now = new Date().getTime();
    var minutes = Math.floor(cd / 60)
    var seconds  = cd % 60
    cd--;
    a2.timeString =  minutes + "m " + seconds + "s ";
    if (cd <= 0) {
      clearInterval(a2.timer);
      a2.timeString = "End of quiz, Your time has run out";
      a2.isHidden = true;
      // document.getElementById("textbox").setAttribute("hidden","hidden");
      // document.getElementById("name").removeAttribute("hidden");
      a2.showTable = true;
    }
    var distance = countDown - now;    // Find the distance between now and the count down date
    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);}, 1000);
    //unhide question
    a2.isHidden = false;
    a2.questionHide = false;
    a2.hideStart  = true;
    a2.scoreNCounter = false;
  }

    reset(){
      this.score = 0;
      this.counter = 1;
      // document.getElementById("time").outerHTML = "<p id=\"time\"></p>";
      // document.getElementById("name").setAttribute("hidden","hidden");
      // document.getElementById("nameSubmit").setAttribute("hidden","hidden");
      this.timeString = "";
      this.questionHide = true;
      this.hideStart = false;
      this.isHidden = true;
      this.showHide= false;
      this.showTable = true;
      this.textboxHidden = true;
      this.scoreNCounter = true;
      this.disSub2 = false;
      clearInterval(this.timer);
    }
    enter(event){
      console.log(event)
      if (event.keyCode == 13){
        this.aClick();
        this.usersInput = "";
      }
    }
  // name(){
  //   document.getElementById("nameSubmit").removeAttribute("hidden");
  //   console.log(this.usersInput);
  //   console.log(this.counter);
  //   console.log(this.score);
  //   }
    Sub2(){
      this.scoreboard.push({class:this.class , name1:this.name1 , score:this.score})
      console.log(this.scoreboard);
      console.log(this.name1);
      this.class = "";
      this.name1 = "";
      this.disSub2 = true;

    }
    showTable1(){
      this.isHidden = true;
      this.hideStart = true;
      this.showTable = false;

    }
  }

    //  myAdd (easy1,easy2){return easy1 + easy2; };
