import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'validate-face',
    loadChildren: () => import('./module/validate-face/validate-face.module').then(m => m.ValidateFaceModule),
    data: { title: 'Validate Face' },
  },
  {
    path: 'home',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' },
  },
  {
    path: 'play-lottery',
    loadChildren: () => import('./module/play-lottery/play-lottery.module').then(m => m.PlayLotteryModule),
    data: { title: 'Play Lottery' },
  },
  {
    path: 'buy-ticket',
    loadChildren: () => import('./module/buy-ticket/buy-ticket.module').then(m => m.BuyTicketModule),
    data: { title: 'Buy Ticket' },
  },
  {
    path: '',
    loadChildren: () => import('./module/home/home.module').then(m => m.HomeModule),
    data: { title: 'Home' },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
