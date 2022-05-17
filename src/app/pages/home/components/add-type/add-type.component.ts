import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicEventsService } from 'src/app/shared/services/ionic-events/ionic-events.service';

@Component({
  selector: 'app-add-type',
  templateUrl: './add-type.component.html',
  styleUrls: ['./add-type.component.scss'],
})
export class AddTypeComponent implements OnInit {

  public form: FormGroup

  public mockedTypes = ['groceries', 'beer']

  constructor(
    private formBuilder: FormBuilder,
    private ionicEvents: IonicEventsService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      type: [null, Validators.required],
      is_earning: [null, Validators.required],
    })

  }

  onSubmit() {

    if(!this.form.valid) {
      return this.ionicEvents.presentToast('Invalid Information', 'Please verify all fields and try again', 'danger')
    }

    this.form.value.value = this.form.value.value.replaceAll(' ', '')

    //Save on DB
    
  }

}
