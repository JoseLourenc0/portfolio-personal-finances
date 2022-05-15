import { Component, OnInit } from '@angular/core';

import { PieChart } from '../../shared/models/charts.model';
import { DataService } from 'src/app/shared/services/data-service/data.service';
import { DefaultFilterOption } from 'src/app/shared/models/filters.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mockData: PieChart = {
    labels: ['groceries', 'beer'],
    series: [300, 200]
  }

  public filterOptions: DefaultFilterOption[]

  public filterIntervalOptions: DefaultFilterOption[]

  public totalFiltered = 32

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterIntervalOptions = this.dataService.getIntervalOptions()
    this.filterOptions = this.dataService.getHomeFilterOptions()
  }

}
