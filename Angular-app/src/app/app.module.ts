import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BMainComponent } from './beta/b-main/b-main.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    PagenotfoundComponent,
    BMainComponent,
    BuyCoinsComponent,
    SellCoinsComponent,
    BrowseLedgerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
