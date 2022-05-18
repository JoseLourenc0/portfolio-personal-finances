import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { OptionalDataToast } from '../../models/data.model';
import { DataService } from '../data-service/data.service';


@Injectable({
  providedIn: 'root'
})
export class IonicEventsService {

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private dataService: DataService
    ) { }

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

  async deleteItemNotification(key: string, id: number) {
    let done = false

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm to continue!',
      message: 'Are you sure you want to <strong>DELETE</strong> this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: () => {}
        }, {
          text: 'OK',
          id: 'confirm-button',
          handler: async () => {
            const t = await this.dataService.remove(key,id)
            if(t) {
              this.presentToast(`Item Successfully Deleted!`,'', 'success')
              done = true
            }
          }
        }
      ]
    });

    await alert.present()

    return done
  }

}
