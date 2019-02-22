import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../model/user-dto';

import {LoginService} from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../services/security.service';
import {ResponseMessage} from '../model/responsemessage';
import {User} from '../model/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', './login.component.css']
})
export class LoginComponent implements OnInit {
  userdto: UserDto;
  loginservice: LoginService;
  responseMessage: ResponseMessage;
  user: User;
  code: string;
    ngOnInit() {
  }
  constructor(_loginservice: LoginService, private route: ActivatedRoute, private secService: SecurityService, private router: Router ) {
    this.userdto = new UserDto();
    this.loginservice = _loginservice;
  }
  login() {
    // attivare la chiamata al servizio
    alert( this.userdto.username );
    this.loginservice.doLogin(this.userdto).subscribe(
      response => {
        this.responseMessage = (<ResponseMessage>response);
        console.log(this.responseMessage);
        this.code = this.responseMessage.code;
        if (this.code === '200') {
          this.user = <User>this.responseMessage.body;
        } else {
          this.router.navigateByUrl('/dashboard');
        }
        /** gestore del componente ... mi dichiara... la variabile */
      },
      error => this.router.navigateByUrl('/dashboard')
    );
    }
}
