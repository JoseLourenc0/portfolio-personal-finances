import { Component, Input, OnInit } from '@angular/core';
import { Register, Type } from '../../models/data.model';

@Component({
  selector: 'shared-expansable-item-component',
  templateUrl: './expansable-item.component.html',
  styleUrls: ['./expansable-item.component.scss'],
})
export class ExpansableItemComponent implements OnInit {

  @Input() dataRegister: Register
  @Input() dataType: Type
  public isInfoShown = false

  constructor() { }

  ngOnInit() {}

}
