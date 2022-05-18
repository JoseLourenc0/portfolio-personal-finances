import { Component, OnInit } from '@angular/core';

import { PieChart } from '../../shared/models/charts.model';
import { DataService } from 'src/app/shared/services/data-service/data.service';
import { DefaultFilterOption } from 'src/app/shared/models/filters.model';
import { Register } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  chartData: PieChart = {
    labels: ['groceries', 'beer'],
    series: [300, 200]
  }

  public registers: Register[]

  public filterOptions: DefaultFilterOption[]

  public filterIntervalOptions: DefaultFilterOption[]

  public totalFiltered = 32
  public typeFilter: number
  public intervalFilter: number

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterIntervalOptions = this.dataService.getIntervalOptions()
    this.filterOptions = this.dataService.getHomeFilterOptions()
    this.typeFilter = this.filterOptions[0].value
    this.intervalFilter = this.filterIntervalOptions[0].value
    this.getRegisters()
  }

  async getRegisters() {
    this.registers = await this.dataService.getAll('register') as Register[]
    this.filterData()
  }
  
  filterData() {

    if(!this.registers) return 

    let filteredData = [...this.registers]
    let targetMonth = new Date().getMonth()
    let total = 0
    let chartData: PieChart = {
      labels: [],
      series: []
    }

    //? If last month
    if(this.intervalFilter === 2) targetMonth = targetMonth - 1 

    //? If not all months
    if(this.intervalFilter !== 3) filteredData = filteredData.filter(data => new Date(data.register_date).getMonth() === targetMonth)

    switch(this.typeFilter) {
      case 2:
        filteredData = filteredData.filter(data => data.value < 0)
        filteredData.forEach(data => {
          total += data.value
          if(chartData.labels.indexOf(data.type) === -1) {
              chartData.labels.push(data.type)
              chartData.series.push(0)
          }
          chartData.series[chartData.labels.indexOf(data.type)] += Math.abs(data.value)
        })
        break
      case 3:
        filteredData = filteredData.filter(data => data.value >= 0)
        filteredData.forEach(data => {
          total += data.value
          if(chartData.labels.indexOf(data.type) === -1) {
              chartData.labels.push(data.type)
              chartData.series.push(0)
          }
          chartData.series[chartData.labels.indexOf(data.type)] += data.value
        })
        break
      default:
        chartData.labels = ['Expanses', 'Earnings']
        chartData.series = [0,0]
        filteredData.forEach(data => {
          total += data.value
          if(data.value < 0) chartData.series[0] += Math.abs(data.value)
          if(data.value >= 0) chartData.series[1] += data.value
        })
    }

    this.chartData = chartData
    this.totalFiltered = total

  }

}
