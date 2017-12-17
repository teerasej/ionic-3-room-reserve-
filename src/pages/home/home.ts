import { RoomProvider } from './../../providers/room/room';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  roomArray;

  constructor(public navCtrl: NavController, public roomProvider: RoomProvider) {
    this.roomProvider.getAllRooms()
      .subscribe(
        (data) => { 
          console.log(data);
          this.roomArray = data; 
        }
        , (error) => { alert(error.message) }
      )
  }

  viewDetail(room){
    this.navCtrl.push('RoomDetailPage', room);
  }

}
