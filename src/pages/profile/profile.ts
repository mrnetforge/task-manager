import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  constructor(public af: AngularFire,public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

  logout(){
     this.af.auth.logout();
     this.navCtrl.setRoot(LoginPage);
  }

}
