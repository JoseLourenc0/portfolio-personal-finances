import { Component, OnInit } from '@angular/core';
import { DefaultFilterOption } from 'src/app/shared/models/filters.model';

import { DataService } from 'src/app/shared/services/data-service/data.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public filterOptions: DefaultFilterOption[]

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterOptions = this.dataService.getIntervalOptions()
  }

}
