import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-action-popup',
  templateUrl: './action-popup.component.html',
  styleUrls: ['./action-popup.component.scss']
})
export class ActionPopupComponent implements OnInit {
  type: any;
  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ActionPopupComponent>,) { }

  ngOnInit(): void {
    if(this.data.status == 'Ok') {
      this.type = this.data.verifyStatus;
    }
  }

  close() {
    this.dialogRef.close();
  }

}
