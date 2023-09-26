import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BuyTicketComponent,
    data: { title: 'Buy Tikcet' }
  }
];

@NgModule({
  declarations: [
    BuyTicketComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BuyTicketModule { }
