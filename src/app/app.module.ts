import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CountDownModule } from  'ng6-countdown/dist/ng6-countdown-lib';

import { AppComponent } from './app.component';
import { BearComponent } from './bear/bear.component';

@NgModule({
  declarations: [
    AppComponent,
    BearComponent
  ],
  imports: [
    BrowserModule,
    CountDownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
