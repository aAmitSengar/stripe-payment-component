import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdealBankComponent } from './ideal-bank/ideal-bank.component';
import { CardComponent } from './card/card.component';
import { IbanSourceComponent } from './iban-source/iban-source.component';

const routes: Routes = [
  {
    path:'ideal',
    component: IdealBankComponent
  },
  {
    path:'card',
    component: CardComponent
  },
  {
    path:'iban',
    component: IbanSourceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
