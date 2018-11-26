import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  loader:any;
  data:any = null;
  postList = [];

  constructor(
    public loadingController: LoadingController
  ) { }

  async showLoader() {
    this.loader = await this.loadingController.create({
      message: 'Please wait...',
      translucent: true
    });
    return await this.loader.present();
  }

  dismissLoader(){
    this.loader.dismiss();
  }


}
