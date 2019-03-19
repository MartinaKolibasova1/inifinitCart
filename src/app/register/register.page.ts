import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Toast } from '@ionic-native/toast/ngx';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    constructor(
        private afs: AngularFireAuth,
        private toast: Toast,
        private router: Router,
        private auth: AuthService,
    ) { }

    ngOnInit() {
        console.log(this.afs.user);
    }
    register(form) {
        this.auth.register(form.controls.email.value, form.controls.password.value);
    }

    logIn(logForm) {
        if (!logForm.controls.email.value) {
            this.toast.show(`Zadajte email!`, '3000', 'bottom').subscribe(
                toast => {
                    this.router.navigate(['/register']);
                }
            );
            return;
        }
        this.auth.login(logForm.controls.email.value, logForm.controls.password.value);
        logForm.controls.email.value = logForm.controls.password.value = '';
    }
}
