import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaskPipe } from 'ngx-mask';
import { Type } from 'src/app/shared/models/data.model';
import { DataService } from 'src/app/shared/services/data-service/data.service';
import { IonicEventsService } from 'src/app/shared/services/ionic-events/ionic-events.service';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
})
export class AddRegisterComponent implements OnInit {

  public form: FormGroup

  public mockedTypes = ['groceries', 'beer']
  public types:Type[]

  constructor(
    private formBuilder: FormBuilder,
    private ionicEvents: IonicEventsService,
    private maskPipe: MaskPipe,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.getAllTypes()

    this.form = this.formBuilder.group({
      value: [null, Validators.required],
      type: [null, Validators.required],
      description: [null],
    })

  }

  onSubmit() {

    if(!this.form.valid) {
      return this.ionicEvents.presentToast('Invalid Information', 'Please verify all fields and try again', 'danger')
    }

    let data = this.form.value
    data.value = Number(data.value.replaceAll(' ', ''))
    
    if(this.types.find(e => e.type === data.type).is_earning == 0) data.value = -data.value

    data.register_date = new Date()

    //Save on DB
    this.dataService.insert('register',data).then(() => {
      this.ionicEvents.presentToast('New Register Inserted!','', 'success')
    })
    
  }

  updateWithMask(event) {  
    this.form.controls.value.setValue(this.maskPipe.transform(event.currentTarget.value, 'separator.2'))
  }

  async getAllTypes() {
    this.types = await this.dataService.getAll('type') as Type[]
  }

}
