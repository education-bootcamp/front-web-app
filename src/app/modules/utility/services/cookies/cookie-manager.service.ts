import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) {
  }


  public createToken(value: any) {
    this.cookieService.set('my-token', value, 30, '/');
  }

  public isTokenExists(): boolean {
    return this.cookieService.check('my-token');
  }

  public removeToken() {
    if (this.isTokenExists()) {
      this.cookieService.delete('my-token');
    }
  }


}
