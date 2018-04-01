import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import {ZebraDirective} from '../../../../diretives/zebra.directive';


@NgModule({
  declarations: [
    AppComponent,
    ZebraDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
