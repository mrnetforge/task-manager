import { NgModule, ErrorHandler } from '@angular/core';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {Http} from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import {AuthService} from './services/auth/auth';
export function getAuthHttp(http) {
  return new AuthHttp(new AuthConfig(), http);
}
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProfilePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProfilePage
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: getAuthHttp,
      deps: [Http]
    },
    AuthService,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
    ]
})
export class AppModule {}
