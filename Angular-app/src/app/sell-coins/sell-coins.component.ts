import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sell-coins',
  templateUrl: './sell-coins.component.html',
  styleUrls: ['./sell-coins.component.css']
})
export class SellCoinsComponent implements OnInit {

  numbers: number;
  coins: number;
  sellNum = 0;
  insufficient = false;
  message = '';

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
  }

  getNumbers() {
    this.numbers = this._httpService.shareNumbers();
    this.coins = this._httpService.shareCoins();
  }

  sell() {
    console.log('this is the buyNum submited: ', this.sellNum);
    if (this.sellNum < 0) {
      this.insufficient = true;
      this.message = 'sell cannot be negative';
    } else if ( this.sellNum <= this.coins ) {
      this._httpService.sell(this.sellNum);
      this.insufficient = false;
      this.getNumbers();
      this.sellNum = 0;
    } else {
      this.insufficient = true;
      this.message = 'insufficient coins...';
    }
  }

}
