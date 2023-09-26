import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayLotteryComponent } from './play-lottery.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PlayLotteryComponent,
    data: { title: 'Play-Lottery' }
  }
];

@NgModule({
  declarations: [
    PlayLotteryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayLotteryModule { }
