/*Zdroj https://alligator.io/angular/firebase-authentication-angularfire2/*/
import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import { Toast } from '@ionic-native/toast/ngx';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {IUser} from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    user: Observable<firebase.User>;
    loggedInUser = null;
    id;
    private userLoggedIn = false;
    private usersCollection: AngularFirestoreCollection<IUser>;
    pouzivatel: IUser = {
        username: '',
        password: '',
        isAdmin: false,
        userId: '',
    };
    users;
    constructor(
        private afs: AngularFirestore,
        private firebaseAuth: AngularFireAuth,
        private toast: Toast,
        private router: Router,
    ) {
        this.user = firebaseAuth.authState;
        this.usersCollection = this.afs.collection<IUser>('users');
        this.users = this.usersCollection.snapshotChanges();
    }

    register(email: string, password: string) {
        this.pouzivatel.username = email;
        this.pouzivatel.password = password;
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then((value) => {
                this.pouzivatel.userId = value.user.uid;
                this.usersCollection.add(this.pouzivatel).then((done) => {
                    this.toast.show(`Boli ste úspešne registrovaný!`, '3000', 'bottom').subscribe(
                        toast => {
                            this.router.navigate(['/home']);
                        }
                    );
                })
                    .catch(err => {
                        this.toast.show(`Something went wrong!` + err, '3000', 'bottom').subscribe(
                            toast => {
                                this.router.navigate(['/home']);
                            }
                        );
                    });
            });
    }

    login(email: string, password: string) {
      if (this.userLoggedIn) {
          console.log('Uz ste prihlaseny!');
          this.toast.show(`Uz ste prihlásený!`, '3000', 'bottom').subscribe(
              toast => {
                  this.router.navigate(['/home']);
              }
          );
      } else {
          this.firebaseAuth
              .auth
              .signInWithEmailAndPassword(email, password)
              .then(value => {
                  const userID = value.user.uid;
                  const cartLS = JSON.parse(localStorage.getItem('cart'));
                  let tmpCart = {};
                  this.users.subscribe((pole) => {
                      const user = pole.filter(item => userID === item.payload.doc.data().userId)[0];
                      this.loggedInUser = user.payload.doc.data();
                      this.id = user.payload.doc.id;
                      tmpCart = this.loggedInUser.cart.concat(cartLS);
                      this.loggedInUser.cart = this.filterCart(tmpCart);
                      console.log('volam sa');
                      this.updateUser();

                      this.toast.show(`Prihlásený!`, '3000', 'bottom').subscribe(
                          toast => {
                              this.router.navigate(['/home']);
                          }
                      );
                  });
              })
              .catch(err => {
                  this.toast.show('Something went wrong!' + err, '3000', 'bottom').subscribe(
                      toast => {
                          this.router.navigate(['/register']);
                      }
                  );
              });
      }
    }

    logout() {
      if (this.isLoggedIn) {
          this.firebaseAuth
              .auth
              .signOut()
              .then((done) => {
                this.toast.show('Logged Out!', '3000', 'bottom').subscribe(
                    toast => {
                        this.router.navigate(['/home']);
                    }
                );
          });
          this.loggedInUser = null;
      }
    }

    filterCart(cart) {
        const  itemsObj = cart.reduce((acc, item) => {
            acc[item.item_id] = ++acc[item.item_id] || item.count;
            return acc;
        }, {});

        const cartArr = [];
        for(let id in itemsObj) {
            cartArr.push({
                item_id: id,
                count: itemsObj[id]
            });
        }

        return cartArr;
        /*console.log('old cart', cart);
        let equal;
        const newItem: {
            count: number,
            item_id: string,
        } = { count: 0, item_id: ''};
        cart.forEach((item) => {
            equal = cart.find(obj => {
                return obj.item_id === item.item_id;
            });
        });
        cart.forEach((item) => {
            if (item.item_id === equal.item_id) {
                newItem.count = item.count + equal.count;
                newItem.item_id = item.item_id;
            }
        });
        cart = cart.filter(function( obj ) {
            return obj.item_id !== equal.item_id;
        });
        console.log(cart);
        cart.push(newItem);
        console.log('Filtered cart', cart);
        return cart;*/
    }


    get isLoggedIn() {
        return !!this.loggedInUser;
    }

    get isAdmin() {
        if (this.isLoggedIn) {
            return this.loggedInUser.isAdmin;
        } else {
            return false;
        }
    }

    get isAdminUser() {
        return this.loggedInUser.isAdmin;
    }

    updateUser() {
        this.usersCollection.doc(this.id).update(this.loggedInUser);
    }
}
