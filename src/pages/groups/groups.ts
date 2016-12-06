import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GroupPage } from '../groups/form/group'
import {AngularFire, FirebaseListObservable} from 'angularfire2';


@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  groups: FirebaseListObservable<any[]>;
  groups_dummy: Array<Object>;
  type: string = "my";
  myInput: string = "";
  constructor(public af: AngularFire,public navCtrl: NavController) {
    let uid = this.af.auth.getAuth().uid;
    this.groups_dummy = [
      {
        name: 'My Group1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mauris dignissim, aliquam mi sed.',
        isPublic: true,
        creator: this.af.auth.getAuth().uid,
        date_created: new Date().getTime()
      },
      {
        name: 'My Group1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a mauris dignissim, aliquam mi sed.',
        isPublic: false,
        creator: this.af.auth.getAuth().uid,
        date_created: new Date().getTime()
      }
    ];
    this.groups = af.database.list('/groups');
    /*
    this.groups.remove();
    this.groups_dummy.forEach(function(e,i){
      this.groups.push(e);
    }.bind(this));
    */

  }
  openGroupForm(group_key){
    this.navCtrl.push(GroupPage, {group_key: group_key});
  }
  ionViewDidLoad() {
    console.log('Hello GroupsPage Page');
  }

}
