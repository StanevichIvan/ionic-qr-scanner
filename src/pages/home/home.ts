import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {GalleryPage} from "../gallery/gallery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private barcodeData: string = 'empty';

  constructor(public navCtrl: NavController, private  barCodeScanner: BarcodeScanner) {
  }

  scanQr() {
    this.barCodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
      console.log(barcodeData);
      this.barcodeData = barcodeData.text;
    }, (err) => {
      // An error occurred
      console.log(err);
    });
  }

  goToFileUpload() {
    this.navCtrl.push(GalleryPage);
  }

}
