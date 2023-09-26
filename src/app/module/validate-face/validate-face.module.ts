import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateFaceComponent } from './validate-face.component';
import { RouterModule, Routes } from '@angular/router';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from '../camera/camera.component';

const routes: Routes = [
  {
    path: '',
    component: ValidateFaceComponent,
    data: { title: 'validate-face' }
  }
];

@NgModule({
  declarations: [
    CameraComponent,
    ValidateFaceComponent
  ],
  imports: [
    CommonModule,
    WebcamModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CameraComponent
  ]
})
export class ValidateFaceModule { }
