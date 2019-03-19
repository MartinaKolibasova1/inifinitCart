import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {CartService} from '../cart.service';
import {AuthService} from '../auth.service';
import {IPizza} from '../app.types';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

    private itemsCollection = [];
    cart = [];

    constructor(private afs: AngularFirestore, private cartService: CartService, private auth: AuthService) {}

    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.afs.collection<IPizza>('allpizzas')
            .snapshotChanges()
            .subscribe((items) => {
                this.itemsCollection = items.map((item) => {
                    const data = item.payload.doc.data();
                    const id = item.payload.doc.id;
                    return {
                        id, ...data
                    };
                });
            });
        console.log(this.itemsCollection);
    }
}
