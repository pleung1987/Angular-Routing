import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import { BuyCoinsComponent } from './buy-coins/buy-coins.component';
import { SellCoinsComponent } from './sell-coins/sell-coins.component';
import { BrowseLedgerComponent } from './browse-ledger/browse-ledger.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: AlphaComponent },
  { path: 'mine', component: BetaComponent },
  { path: 'buy', component: BuyCoinsComponent },
  { path: 'sell', component: SellCoinsComponent },
  { path: 'browse', component: BrowseLedgerComponent },
  { path: '', pathMatch: 'full', redirectTo: '/alpha'},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
