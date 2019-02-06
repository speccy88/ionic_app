import { Component } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';

var arduino = {
    serviceUUID: '19B10000-E8F2-537E-4F6C-D104768A1214',
    LEDCharacteristic: '19B10001-E8F2-537E-4F6C-D104768A1214'
    };


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
    console.log(this.text1);
    this.ble.scan([arduino.serviceUUID], 5, this.onDiscoverDevice, this.onError);
  }

  onDiscoverDevice(){
    console.log("discover")
  }

  onError(){

  }
}
