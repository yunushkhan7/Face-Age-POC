import { Component } from "@angular/core";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ActionPopupComponent } from "src/app/popup/action-popup/action-popup.component";
import { ValidateFaceComponent } from "../validate-face/validate-face.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-buy-ticket",
  templateUrl: "./buy-ticket.component.html",
  styleUrls: ["./buy-ticket.component.scss"],
})
export class BuyTicketComponent {
  constructor(public dialog: MatDialog, private route: Router) {}
  openDialog() {
    const dialogRef = this.dialog.open(ValidateFaceComponent, {
      disableClose: true,
      panelClass: "verification_popup",
    });
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(`Dialog result: ${result}`);
      if(result !== 'home') {
        this.openActionPopup(result);
      } else {
        this.route.navigateByUrl('');
      }
      
    });
   
  }

  openActionPopup(result: any) {
    const dialogRef = this.dialog.open(ActionPopupComponent, {
      panelClass: "verification_popup",
      data: result
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
