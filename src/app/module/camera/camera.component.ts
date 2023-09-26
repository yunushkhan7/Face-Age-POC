import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {
  @ViewChild('hiddenBtn') hiddenBtn : ElementRef;
  @Output() public pictureTaken = new EventEmitter<WebcamImage>();
  widthTemp: any ;

  // toggle webcam on/off
  public showWebcam = true;
  public allowCameraSwitch = true;
  public multipleWebcamsAvailable = false;
  public deviceId: string = '';
  // public videoOptions: MediaTrackConstraints = {
  //   // width: {ideal: 1024},
  //   // height: {ideal: 576}
  // };
  public errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  webcamImage: WebcamImage | undefined ;


  constructor() {

  }
  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
       if(window.innerWidth < 767) {
        this.widthTemp = 300;
       } else if(window.innerWidth >= 767 && window.innerWidth < 1199) {
        this.widthTemp = 570;
       } else {
        this.widthTemp = 400
       }
      // setTimeout(()=> this.hiddenBtn.nativeElement.click(), 5000);

  }

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean | string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.pictureTaken.emit(webcamImage);
  }

  public cameraWasSwitched(deviceId: string): void {
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }

  public width: number = 0;
  public height: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    const win = !!event ? (event.target as Window) : window;
    this.width = win.innerWidth;
    this.height = win.innerHeight;
    if(this.width < 767) {
      this.widthTemp = 300;
     } else if(this.width >= 767 && this.width < 1199) {
      this.widthTemp = 570;
     } else {
      this.widthTemp = 400
     }
  }

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints/facingMode
  // facingMode: string = 'environment';// Set rear camera
  facingMode: string = 'user';  //Set front camera

  public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
      result.facingMode = { ideal: this.facingMode };
    }
    return result;
  }

}
