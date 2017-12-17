import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RoomProvider } from "../../providers/room/room";

/**
 * Generated class for the RoomNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-room-new",
  templateUrl: "room-new.html"
})
export class RoomNewPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public roomProvider: RoomProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RoomNewPage");
  }

  add(name) {
    this.roomProvider.addNewRoom(name).subscribe(
      (data: any) => {
        console.log(data);
        if (data.insert_status == 1) {
          this.navCtrl.pop();
        } else {
          alert(data.message);
        }
      },
      error => {
        alert(error.message);
      }
    );
  }
}
