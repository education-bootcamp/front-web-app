import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url='http://localhost:8001/api/v1/users/token'

  constructor(private http:HttpClient) { }

  public getToken():Observable<any>{
    return this.http.get(this.url);
  }
}
