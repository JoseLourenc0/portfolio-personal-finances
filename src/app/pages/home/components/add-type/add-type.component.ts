import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicEventsService } from 'src/app/shared/services/ionic-events/ionic-events.service';
import { DataService } from 'src/app/shared/services/data-service/data.service';
import { Type } from 'src/app/shared/models/data.model';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
})
export class AddTypeComponent implements OnInit {

  public form: FormGroup

  public types

  constructor(
    private formBuilder: FormBuilder,
    private ionicEvents: IonicEventsService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    
    this.getAllTypes()

    this.form = this.formBuilder.group({
      type: [null, Validators.required],
      is_earning: [null, Validators.required],
    })

  }

  async onSubmit() {

    if(!this.form.valid) {
      return this.ionicEvents.presentToast('Invalid Information', 'Please verify all fields and try again', 'danger')
    }

    let data = {...this.form.value}
    data.register_date = new Date()

    //Save on DB
    await this.insertNewType(data)
    await this.getAllTypes()

    this.ionicEvents.presentToast('New Type Inserted!','', 'success')
    
  }

  async getAllTypes () {
    const allTypes = await this.dataService.getAll('type')
    this.types = allTypes
    return allTypes
  }

  async insertNewType(value: Type) {
    return await this.dataService.insert('type', value)
  }

  shouldRefresh($event) {
    this.ngOnInit()
    $event.target.complete()
  }

}
