import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
})
export class RoomDetailPage {

  room;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.room = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailPage');
  }

}
