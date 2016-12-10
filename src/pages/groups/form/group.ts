import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';

@Component({
  selector: 'page-group',
  templateUrl: 'group.html'
})
export class GroupPage {
  title: string;
  type: string = "basic";
  members: Array<Object>;
  edit: boolean;  
  group: FirebaseObjectObservable<any>;
  constructor(public af: AngularFire,private navParams: NavParams,public navCtrl: NavController) {
     let group_key: any = navParams.data.group_key;
     if(group_key) {
       this.af.database.object('/groups/' + group_key,{ preserveSnapshot: true }).subscribe(snapshot => {
         this.group = snapshot.val();
         var members = this.group['members'];
  
         if(members){
           this.group['membersList'] = [];
          for (var key in members) {
           let my_key = key;
            if(members[key]){
              this.af.database.object('/users/' + key,{ preserveSnapshot: true }).subscribe(snapshot => {
                let obj = snapshot.val();
                
                obj.uid = my_key;
                this.group['membersList'].push(obj);
              });
            }
          }
         }
         
       });
       //this.group = this.af.database.object('/groups/' + group_key);
       this.edit = true;
     } else {
       this.edit = false;
     }
  }

  ionViewDidLoad() {
    console.log('Hello GroupPage');
    this.type = "basic"; // set default type
  }

  canEdit(creatorUID){
    return false;
  }


}