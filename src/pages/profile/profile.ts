import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthService} from '../../app/services/auth/auth';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(private auth: AuthService,public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

}
