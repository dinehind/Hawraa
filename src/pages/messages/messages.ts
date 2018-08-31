import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  segmento: String = "inbox";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
