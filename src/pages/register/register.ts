import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  username: string;
  password: string;
  constructor(public af: AngularFire,public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello RegisterPage Page');
  }

  register(username, password){
    let navCtrl = this.navCtrl;
    let user = {
      email: username,
      password: password
    };
    this.af.auth.createUser(user).then(function(data){
        navCtrl.setRoot(HomePage);
    }).catch(function(data){
        console.log(data);
    });
  }

}
