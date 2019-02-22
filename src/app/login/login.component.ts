import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../model/user-dto';
import {User} from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', './login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserDto;
  constructor() {
    this.user = new UserDto();
  }

  ngOnInit() {

  }

  login() {
    // attivare la chiamata al servizio
    alert('login!!!');
  }
}
