import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-b-main',
  templateUrl: './b-main.component.html',
  styleUrls: ['./b-main.component.css']
})
export class BMainComponent implements OnInit {

  numbers: number;
  // tslint:disable-next-line:max-line-length
  questions: string[] =  ['What is the 7th Fibonacci Sequence Number?', 'What is the 2nd question?' , 'What is the 3rd question?', 'What is the 4th question?', 'What is the 5th question?', 'What is the 6th question?', 'What is the 7th question?', 'What is the 8th question?'];
  randNum: number = Math.floor(this.questions.length * Math.random());
  randQuestion = this.questions[this.randNum];

  answers: number[] = [10, 20 , 30, 40, 50, 60, 70, 80];
  randAnswer = this.answers[this.randNum];
  newNum: any;
  correct = false;
  incorrect = false;
  message = '';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
    console.log('at B-main Components serving numbers from service: ', this.numbers);
    this.newNum = 0;
  }

  getQuestion() {
    this.randNum =  Math.floor(this.questions.length * Math.random());
    this.randQuestion = this.questions[this.randNum];
  }

  getNumbers() {
    this.numbers = this._httpService.shareNumbers();
  }

  mine() {
    console.log('this is the num submited: ', this.newNum);
    if (this.newNum === this.answers[this.randNum]) {
      this._httpService.mine();
      this.incorrect = false;
      this.correct = true;
      this.message = 'Mined!';
      this.getQuestion();
    } else {
      this.incorrect = true;
      this.correct = false;
      this.message = 'wrong answer, please try again';
    }
    this.newNum = 0;
  }

}
