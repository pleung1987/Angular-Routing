import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  value = 0;
  coins = 0;
  alltransactions = [];

  shareNumbers() {
      return this.value;
  }
  shareCoins() {
    return this.coins;
  }

  showTransactions() {
    console.log('pulling all transactions: ', this.alltransactions);
    return this.alltransactions;
  }

  mine() {
      this.value++;
      console.log('value in service added: ', this.value);
      this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Mined', amount: 1, value: this.value });
  }

  buy(num) {
    console.log('number of coins added: ', num);
    this.coins += num;
    this.value -= num;
    this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Bought', amount: num, value: this.value });
  }

  sell(num) {
    console.log('number of coins deducted: ', num);
    this.coins -= num;
    this.value += num;
    this.alltransactions.push({transId: Math.floor(Math.random() * 10000), action: 'Sold', amount: num, value: this.value });
  }
}
