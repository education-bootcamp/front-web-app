import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar: MatSnackBar) {
  }

  public openSuccessSnackbar(
    message: any,
    action: any
  ) {
    this.snackbar.open(message, action, {
      duration: 5000
    })
  }
  public openWarningSnackbar(
    message: any,
    action: any
  ) {
    this.snackbar.open(message, action, {
      duration: 5000
    })
  }
}
