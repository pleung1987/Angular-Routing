import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent implements OnInit {
  numbers: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
    console.log('at the Alpha(home) componenet getting numbers:', this.numbers);
  }

  getNumbers() {
    this.numbers = this._httpService.shareNumbers();
  }
}
