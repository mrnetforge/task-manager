import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';
import { LoginPage } from '../login/login';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public af: AngularFire,public navCtrl: NavController) {
    this.af.auth.subscribe(auth => {
      if(!auth) {
        this.navCtrl.setRoot(LoginPage);
      } else {
        
      }
    }
    );
  }

  ionViewDidLoad() {
    console.log('Hello HomePage Page');
  }




}
