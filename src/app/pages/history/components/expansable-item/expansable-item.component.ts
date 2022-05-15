import { Component, OnInit, Input } from '@angular/core';

import { Register } from 'src/app/shared/models/data.model';

@Component({
  selector: 'expansable-item-component',
  templateUrl: './expansable-item.component.html',
  styleUrls: ['./expansable-item.component.scss'],
})
export class ExpansableItemComponent implements OnInit {

  @Input() data:Register
  public isInfoShown = false

  constructor() { }

  ngOnInit() {}

}
