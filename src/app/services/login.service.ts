import {BaseService} from './base.service';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDto} from '../model/user-dto';

@Injectable()
export class LoginService extends BaseService {

  constructor(private http: HttpClient) {
    super();
    /** sono oblicato a chiamare super è un obligo
     *
     * inietto httpclient responsabile della gestione delle chiamata http
     *
     */
  }

  doLogin(user: UserDto) {
    const url = this.buildAPiUrl('login/');
    return this.http.post(url, user);
  }

}
