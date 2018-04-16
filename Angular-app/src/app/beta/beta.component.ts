import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {
  numbers: number;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
  }

  getNumbers() {
    this.numbers = this._httpService.shareNumbers();
  }

}
