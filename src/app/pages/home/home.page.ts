import { Component, OnInit } from '@angular/core';

import { PieChart } from '../../shared/models/charts.model';

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

  public filterOptions = [
    {
      value: 1,
      text: 'General'
    },
    {
      value: 2,
      text: 'Expanses'
    },
    {
      value: 3,
      text: 'Earnings'
    }
  ]

  public filterIntervalOptions = [
    {
      value: 1,
      text: 'Current Month'
    },
    {
      value: 2,
      text: 'Last Month'
    }
  ]

  public totalFiltered = 32

  constructor() { }

  ngOnInit() {
  }

}
