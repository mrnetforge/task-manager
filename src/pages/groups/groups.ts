import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupPage } from '../groups/form/group'
/*
  Generated class for the Groups page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups: any;
  type: string = "my";
  constructor(public navCtrl: NavController) {
    this.groups = [
      {
        name: 'myGroup'
      },{
        name: 'myGroup2'
      }
    ];
  }
  openGroupForm(group){
    this.navCtrl.push(GroupPage, {group: group});
  }
  ionViewDidLoad() {
    console.log('Hello GroupsPage Page');
  }

}
