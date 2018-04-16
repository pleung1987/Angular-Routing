import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-buy-coins',
  templateUrl: './buy-coins.component.html',
  styleUrls: ['./buy-coins.component.css']
})
export class BuyCoinsComponent implements OnInit {

  buyNum = 0;
  numbers: number;
  coins: number;
  message = '';
  insufficient = false;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNumbers();
    console.log(`getting numbers: ${this.numbers} and coins: ${this.coins}  from buy-coin component:`);
  }

  getNumbers() {
    this.numbers = this._httpService.shareNumbers();
    this.coins = this._httpService.shareCoins();
  }

  buy() {
    console.log('this is the buyNum submited: ', this.buyNum);
    if (this.buyNum < 0) {
      this.insufficient = true;
      this.message = 'purchase cannot be negative';
    } else if ( this.buyNum <= this.numbers) {
      this._httpService.buy(this.buyNum);
      this.insufficient = false;
      this.getNumbers();
      this.buyNum = 0;
    } else {
      this.insufficient = true;
      this.message = 'insufficient fund...';
    }
  }

}
