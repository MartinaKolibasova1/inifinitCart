import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { Toast } from '@ionic-native/toast/ngx';
import {IPizza} from './app.types';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = [];
  constructor(private auth: AuthService, private toast: Toast) { }

  addProduct(product: IPizza) {
    const prod = {
      count: 1,
      item_id: product['id'],
    };
    let isInCart = false;
    if (this.auth.isLoggedIn) {
         const tmp = this.auth.loggedInUser.cart.map((item) => {
           if (product['id'] === item['item_id']) {
             item['count']++;
             isInCart = true;
           }
             return item;
         });
         if (isInCart) {
             this.auth.loggedInUser.cart = tmp;
         } else {
             this.auth.loggedInUser.cart.push(prod);
         }
        this.auth.updateUser();
    } else {
        const cartLS = JSON.parse(localStorage.getItem('cart'));
        console.log('cart', cartLS);
        if (cartLS && cartLS.length) {
            const tmp = cartLS.map((item) => {
                if (product['id'] === item['item_id']) {
                    item['count']++;
                    isInCart = true;
                }
                return item;
            });
            if (!isInCart) {
                cartLS.push(prod);
                localStorage.setItem('cart', JSON.stringify(cartLS));
            } else {
                localStorage.setItem('cart', JSON.stringify(tmp));
            }
        } else {
            this.cart.push(prod);
            localStorage.setItem('cart', JSON.stringify(this.cart));
            console.log('CART LOCALSTORAGE: ', localStorage.getItem('cart'));
        }
    }
  }

  getCart() {
      if (this.auth.isLoggedIn) {
        return this.auth.loggedInUser.cart;
      } else {
          const cartLS = JSON.parse(localStorage.getItem('cart'));
          if (cartLS && cartLS.length) {
              return cartLS;
          } else {
              return [];
          }
      }
  }

  getCartLength() {

    let length = 0;
    if (this.auth.isLoggedIn) {
        this.auth.loggedInUser.cart.forEach((item) => {
            length += item.count;
        });
    } else {
        const cartTmp = this.getCart();
        if (cartTmp && cartTmp.length) {
            cartTmp.forEach((item) => {
                length += item.count;
            });
        }
    }
    return length;
  }

  deleteCart() {
    this.auth.loggedInUser.cart = [];
    this.auth.updateUser();
  }
}
