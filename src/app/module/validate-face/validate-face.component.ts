import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage } from 'ngx-webcam';
import { ValidateServiceService } from '../services/validate-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-validate-face',
  templateUrl: './validate-face.component.html',
  styleUrls: ['./validate-face.component.scss']
})
export class ValidateFaceComponent implements OnInit {

  @ViewChild('hiddenBtn') hiddenBtn : ElementRef;
  @Output() public pictureTaken = new EventEmitter<WebcamImage>();
  widthTemp: any ;
  isOpenCamera = false;
  webcamImage : any ;
  docFile: any;
  source : any = ''
  isLoading = false;


  //Popup Steps

  step = 1;

  constructor(public dialogRef: MatDialogRef<ValidateFaceComponent>, private validateService: ValidateServiceService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    
  }

  close() {
    this.dialogRef.close();
  }

  verifyAge() {
    this.step = 2;
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    this.submitConfirmImage()
  }

  goToHome(){
    this.dialogRef.close('home');
  }

  submitConfirmImage() {
    this.isLoading = true;
    const arr = this.webcamImage.imageAsDataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    this.docFile = new File([u8arr], 'doc.png', { type: this.webcamImage['_mimeType'] })
    const formData = new FormData();
    const param: any = {};
    formData.append('file', this.docFile);
    this.validateService.verifyAge(formData).subscribe((res: any) => {
      this.dialogRef.close(res)
    }, (err: any) => {
      
    })            
  }
}
