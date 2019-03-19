import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {CartService} from '../cart.service';
import {Router} from '@angular/router';
import {Toast} from '@ionic-native/toast/ngx';
import {debug} from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() mode: string;

  cart = [];
  constructor(private auth: AuthService, private toast: Toast, private cartService: CartService, private router: Router) { }

  goToCart() {
      if (this.auth.isLoggedIn) {
          this.router.navigate(['/cart']);
      } else {
          this.router.navigate(['/register']);
          this.toast.show(`Prihlaste sa!`, '3000', 'bottom').subscribe(
              toast => {
                  this.router.navigate(['/register']);
              }
          );
      }
  }

}
