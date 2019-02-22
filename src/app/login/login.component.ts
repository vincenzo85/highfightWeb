import {Component, Input, OnInit} from '@angular/core';
import {UserDto} from '../model/user-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass', './login.component.css']
})
export class LoginComponent implements OnInit {
  private userdto: UserDto;
  @Input() set user(user: UserDto){
    this.userdto = user;
  }
  constructor() { }

  ngOnInit() {



  }

}
