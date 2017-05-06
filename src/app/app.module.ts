import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule}   from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {KSSwiperModule} from 'angular2-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    KSSwiperModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
