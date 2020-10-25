import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../models/card.model';
import {CartService} from '../../services/card.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartData: CartModelServer;
  cartTotal: number;
  authState: boolean;

  constructor(public cartService: CartService,
              private userService: UserService  ) {

  }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.userService.authState$.subscribe(authState => this.authState = authState);
  }

}
