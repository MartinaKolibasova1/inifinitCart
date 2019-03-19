import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [HeaderComponent],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule
    ],
    exports: [HeaderComponent],
})
export class HeaderModule { }