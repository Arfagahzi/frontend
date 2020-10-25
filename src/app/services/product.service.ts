import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductModelServer, ServerResponse} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private http: HttpClient) {}
/* this is to fetch all products from the backend server*/
  // tslint:disable-next-line:typedef
 getAllProducts(numberOfResult = 10): Observable<ServerResponse>{
   return this.http.get<ServerResponse>(this.SERVER_URL + '/products', {
     params: {
       limit: numberOfResult.toString()
     }
   });
}


/* get service product from server */
  getSingleProduct(id: number): Observable<ProductModelServer>{
return  this.http.get<ProductModelServer>(this.SERVER_URL + '/products/' + id);
  }
/*Get Products From One Category*/
  getProductsFromCategory(catName: string): Observable<ProductModelServer[]>  {
    return this.http.get<ProductModelServer[]>(this.SERVER_URL + '/products/category/' + catName);
}

}
