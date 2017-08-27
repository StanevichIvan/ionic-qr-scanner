import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the GalleryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})

export class GalleryPage {

  cameraSource: number = 1;
  cameraUrls= [];

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.cameraSource
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
  }

  startCamera() {

    this.options.sourceType = 1;

    this.camera.getPicture(this.options).then((imageData) => {
      this.cameraUrls.push(imageData);
    }, (err) => {
    });
  }

  loadFromGallery() {

    this.options.sourceType = 0;

    this.camera.getPicture(this.options).then((imageData) => {
      this.cameraUrls.push(imageData);
    }, (err) => {
    });
  }

}
