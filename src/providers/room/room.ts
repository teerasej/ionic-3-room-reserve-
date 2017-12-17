import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RoomProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RoomProvider {

  baseUrl = "http://localhost:8888/api/index.php";

  constructor(public http: HttpClient) {
    console.log('Hello RoomProvider Provider');
  }

  getAllRooms(){
    return this.http.get(this.baseUrl + '/rooms');
  }

  addNewRoom(name){

    let jsonData = {
      "roomName": name
    };

    console.log(jsonData);

    return this.http.post(this.baseUrl + '/rooms/new', jsonData );
  }

}
