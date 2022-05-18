import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTitleSubtitle
} from "ng-apexcharts"

import { PieChart } from 'src/app/shared/models/charts.model';

export type ChartOptions = {
  series: ApexNonAxisChartSeries
  chart: ApexChart
  responsive: ApexResponsive[]
  labels: any
  title: ApexTitleSubtitle
}

@Component({
  selector: 'shared-pie-chart-component',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent
  public chartOptions: Partial<ChartOptions>

  @Input() chartData:PieChart

  constructor() { }

  ngOnChanges(changes) {
    if(changes) {
      this.ngOnInit()
    }
  }

  ngOnInit() {
    this.chartOptions = {
      series: this.chartData.series,
      chart: {
        width: 380,
        type: "pie"
      },
      labels: this.chartData.labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      title: {
        text: this.chartData.title,
        align: "left"
      }
    }
  }

}
