import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {CartService} from '../../services/card.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {CartModelServer} from '../../models/card.model';
import {stringify} from '@angular/compiler/src/util';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
cartTotal: number;
cartData: CartModelServer;
  private total: number;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService,
                            ) { }
 ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe( data => this.cartData = data);
    this.cartService.cartTotal$.subscribe( total => this.cartTotal = total);

  }
  // tslint:disable-next-line:typedef
  onCheckout(){
    this.spinner.show();
    this.cartService.CheckoutFromCart(1 );
}
}
