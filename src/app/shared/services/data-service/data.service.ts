import { Injectable } from '@angular/core';

import { DefaultFilterOption } from '../../models/filters.model';

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

  constructor() { }

  getIntervalOptions() : DefaultFilterOption[] {
    return this.intervalOptions
  }

  getHomeFilterOptions() : DefaultFilterOption[] {
    return this.filterOptions
  }

}
