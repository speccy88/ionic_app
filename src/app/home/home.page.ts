import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private ble: BLE){
    console.log("Constructor")
  }

  text1: string = "";
  connect(){
    console.log("connect");
    console.log(this.text1)
  }
}
