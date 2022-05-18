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
  registers: Register[]

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filterOptions = this.dataService.getIntervalOptions()
    this.getRegisters()
  }

  async getRegisters() {
    this.registers = await this.dataService.getAll('register') as Register[]
  }

}
