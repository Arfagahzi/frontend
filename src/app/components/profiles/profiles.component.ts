import {Component, OnInit} from '@angular/core';
// @ts-ignore
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import {ResponseModel, UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
// tslint:disable-next-line:class-name
export class ProfilesComponent implements OnInit {
  myUser: any;

  constructor(private authService: SocialAuthService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
  console.log('debug ');
  this.userService.userData$
      .pipe(
        map((user) => {
          if (user instanceof SocialUser || 'type' in user && user.type === 'social') {
            return {
              ...user,
              email: 'test@test.com',

            };
          } else {
            return user;
          }
        })
      )
      .subscribe((data: ResponseModel | SocialUser) => {
        this.myUser = data;
      });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.userService.logout();

  }
}
