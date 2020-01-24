import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: Login = new Login();
  invalidLogin: boolean;
  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    localStorage.removeItem('jwt');
    this.loginService.login(this.login).subscribe(res => {
      const token = (res as any).data;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['liga']);
    }, error => {
      this.invalidLogin = true;
    });
  }
  logOut() {
    localStorage.removeItem('jwt');
 }
}
