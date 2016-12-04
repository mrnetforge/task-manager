import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {
  title: string;  
  group: any;
  constructor(private navParams: NavParams,public navCtrl: NavController) {
     this.group = navParams.data.group; 
     this.title = (!this.group) ? 'Stwórz grupe' : this.group.name;
  }

  ionViewDidLoad() {
    console.log('Hello GroupPage');
  }

}