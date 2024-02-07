import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingStatusService {

  public loadingState=new BehaviorSubject(true);
  constructor() { }
}
