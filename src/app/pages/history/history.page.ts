import { Component, OnInit } from '@angular/core';
import { DefaultFilterOption } from 'src/app/shared/models/filters.model';

import { DataService } from 'src/app/shared/services/data-service/data.service';
import { Register } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  public filterOptions: DefaultFilterOption[]
  private registers: Register[]
  public filteredRegisters: Register[]
  public intervalFilter: number = 3

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterOptions = this.dataService.getIntervalOptions()
    this.getRegisters()
  }

  async getRegisters() {
    this.registers = await this.dataService.getAll('register') as Register[]
    this.filterData()
  }

  filterData() {
    let targetMonth = new Date().getMonth()
    let filteredData = [...this.registers]

    //? If last month
    if(this.intervalFilter === 2) targetMonth = targetMonth - 1 

    //? If not all months
    if(this.intervalFilter !== 3) filteredData = filteredData.filter(data => new Date(data.register_date).getMonth() === targetMonth)

    this.filteredRegisters = filteredData

  }

}
