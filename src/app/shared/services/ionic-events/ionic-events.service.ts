import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { OptionalDataToast } from '../../models/data.model';


@Injectable({
  providedIn: 'root'
})
export class IonicEventsService {

  constructor(public toastController: ToastController) { }

  async presentToast(header = '', message = '', color = '' , optionalData: OptionalDataToast = {duration: 3000, position: 'bottom', icon: 'information-circle'}) {
    const toast = await this.toastController.create({
      header: header,
      message: message,
      color,
      icon: optionalData.icon,
      position: optionalData.position,
      duration : optionalData.duration
    });
    return await toast.present()
  }

}
