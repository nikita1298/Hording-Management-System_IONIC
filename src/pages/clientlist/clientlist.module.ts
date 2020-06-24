import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientlistPage } from './clientlist';

@NgModule({
  declarations: [
    ClientlistPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientlistPage),
  ],
})
export class ClientlistPageModule {}
