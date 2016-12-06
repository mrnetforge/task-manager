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
         console.log(this.group);
         if(this.group['members']){
           this.group['membersList'] = [];
          for (var key in this.group['members']) {
            if(this.group['members'][key]){
              this.af.database.object('/users/' + key,{ preserveSnapshot: true }).subscribe(snapshot => {
                this.group['membersList'].push(snapshot.val());
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
    this.members = [
      {
        name: 'test'
      },{
        name: 'test2'
      },{
        name: 'test3'
      },{
        name: 'test4'
      },{
        name: 'test5'
      },{
        name: 'test6'
      }
    ];
  }


  test(){
      
  }

}