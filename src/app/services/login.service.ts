import {BaseService} from './base.service';
import {OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDto} from '../model/user-dto';

export class LoginService extends BaseService {

  constructor(private http: HttpClient,  private baseApi: BaseService) {
    super();
    /** sono oblicato a chiamare super è un obligo
     *
     * inietto httpclient responsabile della gestione delle chiamata http
     *
     */
  }

  doLogin(user: UserDto) {
    const url = this.baseApi.buildAPiUrl('login/');
    this.http.post(url, user).subscribe();
  }

}
