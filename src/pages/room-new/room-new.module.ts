import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomNewPage } from './room-new';

@NgModule({
  declarations: [
    RoomNewPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomNewPage),
  ],
})
export class RoomNewPageModule {}
