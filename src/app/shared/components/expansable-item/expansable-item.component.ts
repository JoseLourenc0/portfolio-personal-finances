import { Component, Input, OnInit } from '@angular/core';
import { Register, Type } from '../../models/data.model';
import { IonicEventsService } from '../../services/ionic-events/ionic-events.service';

@Component({
  selector: 'shared-expansable-item-component',
  templateUrl: './expansable-item.component.html',
  styleUrls: ['./expansable-item.component.scss'],
})
export class ExpansableItemComponent implements OnInit {

  @Input() dataRegister: Register
  @Input() dataType: Type
  @Input() editRouterLink: string
  public isInfoShown = false

  constructor(
    private ionicEventsService: IonicEventsService
  ) { }

  ngOnInit() {}

  async removeItem() {
    await this.ionicEventsService.deleteItemNotification(this.dataType ? 'type' : 'register', this.dataType ? (this.dataType.id as number) : (this.dataRegister.id as number) )

  }

}
