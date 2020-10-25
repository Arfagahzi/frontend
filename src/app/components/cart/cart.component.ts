import { Component, OnInit } from '@angular/core';
import {CartModelServer} from '../../models/card.model';
import {CartService} from '../../services/card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: CartModelServer;
  carTotal: number;
  subTotal: number;
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartDataObs$.subscribe((data ) => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.carTotal = total);
  }

  // tslint:disable-next-line:typedef
  ChangeQuantity(index: number, increase: boolean) {
    this.cartService.UpdateCartData(index, increase);
  }
}
