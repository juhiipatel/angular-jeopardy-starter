import { Component, OnInit } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  questionInfo;
  totalScore = 0;
  answer;


  constructor(private DataService: DataService){}

  getQuestionInfo(){
    this.DataService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }


  submit(){


    if(this.answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.totalScore = this.totalScore + this.questionInfo.value;

    }

    else{
    this.totalScore = this.totalScore - this.questionInfo.value;
    }

    this.getQuestionInfo();
    this.answer="";

  }

  ngOnInit(){
    this.getQuestionInfo()
  }


}
