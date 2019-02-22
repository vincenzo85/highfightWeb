import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../model/user-dto';
import {User} from '../model/user';
import {LoginService} from '../services/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SecurityService} from '../services/security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', './login.component.css']
})
export class LoginComponent implements OnInit {
  userdto: UserDto;

  loginservice: LoginService;
    ngOnInit() {
  }
  constructor(_loginservice: LoginService, private route: ActivatedRoute, private secService: SecurityService, private router: Router ) {
    this.userdto = new UserDto();
    this.loginservice = _loginservice;
  }
  login() {
    // attivare la chiamata al servizio
    alert( this.userdto.username );
    this.loginservice.doLogin(this.userdto);
    }
}
