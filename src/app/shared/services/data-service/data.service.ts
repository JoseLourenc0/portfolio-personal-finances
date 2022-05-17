import { Injectable } from '@angular/core';

import { Storage } from '@capacitor/storage';

import { DefaultFilterOption } from '../../models/filters.model';
import { Register, Type } from '../../models/data.model';

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

  //? STORAGE METHODS

  async getAll(key: string) :Promise<Type[] | Register[]> {
    const result = await Storage.get({key})
    const parsedResult = result ? JSON.parse((result.value as unknown as string)) : ''
    return parsedResult
  }

  async getById(key: string, id: number) {

  }

  async insert(key: string, value: Type | Register) {

    let result = await this.getAll(key)

    if(!result) {
      let r = {...value}
      r.id = 0
      return await Storage.set({
        key,
        value: JSON.stringify([r])
      })
    }

    result = ([...result] as Type[] | Register[])
    value.id = (result[result.length-1].id as number) + 1
    result.push(value as Type & Register)
    return await Storage.set({
      key,
      value: JSON.stringify(result)
    })

  }

  async update(key: string, id: number, value: Type | Register) {

    let result = await this.getAll(key)
    let rVal = {...value}
    rVal.id = id

    result = ([...result] as Type[] | Register[])
    result[id] = rVal

    await Storage.set({
      key,
      value: JSON.stringify(rVal)
    })

    return rVal

  }

  async remove(key: string, id: number) {

  }

}
