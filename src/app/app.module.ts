import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { ProfilePage } from '../pages/profile/profile';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { GroupsPage } from '../pages/groups/groups';
import { GroupPage } from '../pages/groups/form/group';
@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    RegisterPage,
    HomePage,
    LoginPage,
    GroupsPage,
    GroupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAr5Bjhl1Rb8hDKfEVZQ6rfuiz2HGxwYXY",
      authDomain: "todo-manager-13f73.firebaseapp.com",
      databaseURL: "https://todo-manager-13f73.firebaseio.com",
      storageBucket: "todo-manager-13f73.appspot.com"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    ProfilePage,
    RegisterPage,
    HomePage,
    LoginPage,
    GroupsPage,
    GroupPage
  ],
  providers: [
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    }
    ]
})
export class AppModule {}
