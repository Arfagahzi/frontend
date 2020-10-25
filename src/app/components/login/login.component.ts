import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
// @ts-ignore
import { SocialAuthService} from 'angularx-social-login';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  loginMessage: string;
  userRole: number;

  constructor(private authService: SocialAuthService,
              private router: Router,
              private userService: UserService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.userService.authState$.subscribe(authState => {
      if (authState) {
        this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl || '/profiles');

      } else {
        this.router.navigateByUrl('/login');
      }
    });


  }


  // tslint:disable-next-line:typedef
  signInWithGoogle() {
    this.userService.googleLogin();
  }
  // tslint:disable-next-line:typedef
  login(myform: NgForm) {
    const email = this.email;
    const password = this.password;

    if (myform.invalid) {
      return;
    }

    myform.reset();
    this.userService.loginUser(email, password);

    this.userService.loginMessage$.subscribe(msg => {
      this.loginMessage = msg;
      setTimeout(() => {
        this.loginMessage = '';
      }, 2000);
    });


  }
}
