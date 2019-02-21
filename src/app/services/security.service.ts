import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProfilerConstants} from '../_utils/profiler-constants';
import {BaseService} from './base.service';

@Injectable()
export class SecurityService extends BaseService {


  constructor(private http: HttpClient) {
    super();
  }

  authorize(username, password) {
    /** perche ha messo api??? ... non possiamo mettere login? */
    const url = ProfilerConstants.API_URL_PREFIX + 'api/';
    /*
        const h =  'application/x-www-form-urlencoded';
        const headers: Headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append('Content-Type', h);
     */
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(url, JSON.stringify({ username: username, password: password }), { headers } );
  }

  loadRoles() {
    const url = ProfilerConstants.API_URL_PREFIX + 'roles/';
    return this.http.get(url);
  }
}
