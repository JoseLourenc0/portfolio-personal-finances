import { Injectable } from '@angular/core';

import { DefaultFilterOption } from '../../models/filters.model';
import { Register } from '../../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private intervalOptions: DefaultFilterOption[] =  [
    {
      value: 1,
      text: 'Current Month'
    },
    {
      value: 2,
      text: 'Last Month'
    }
  ]

  private filterOptions:DefaultFilterOption[] = [
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

  private mockRegistersData:Register[] = [
    {
      id: 1,
      description: '',
      type: '',
      value: 2,
      register_date: '2022-05-15 16:00:00'
    }
  ]

  constructor() { }

  getIntervalOptions() : DefaultFilterOption[] {
    return this.intervalOptions
  }

  getHomeFilterOptions() : DefaultFilterOption[] {
    return this.filterOptions
  }

  getRegisters() : Register[] {
    return this.mockRegistersData
  }

}
