import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-browse-ledger',
  templateUrl: './browse-ledger.component.html',
  styleUrls: ['./browse-ledger.component.css']
})
export class BrowseLedgerComponent implements OnInit {

  transactions: any;
  detailPressed = false;
  detail = { transNumber : '', action : '' };

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactions = this._httpService.showTransactions();
    console.log('obtaining transactions: ', this.transactions);
  }

  getTransDetails(Id) {
    console.log('transaction ID clicked: ', Id);
    console.log('All Ids: ', this.transactions[0].transId);

    for (const trans of this.transactions) {
      if (Id === trans.transId) {
        this.detail.transNumber = trans.transId;
        this.detail.action = `${trans.action} ${trans.amount}`;
      }
    }

    this.detailPressed = true;
  }
}
