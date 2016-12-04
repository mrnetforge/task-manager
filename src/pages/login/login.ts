import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  username: string;
  password: string;
  constructor(public af: AngularFire,public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login(username, password){
    let navCtrl = this.navCtrl;
     this.af.auth.login({
        email: username,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
    }).then(function(data){
      navCtrl.setRoot(HomePage);
    }).catch(function(data){
      console.log(data);
    })
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }


}
