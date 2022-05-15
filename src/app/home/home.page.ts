import { Component, OnInit } from '@angular/core';

import { PieChart } from '../shared/models/charts.model';

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

  constructor() { }

  ngOnInit() {
  }

}
