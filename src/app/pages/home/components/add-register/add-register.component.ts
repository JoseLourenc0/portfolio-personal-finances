import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaskPipe } from 'ngx-mask';
import { IonicEventsService } from 'src/app/shared/services/ionic-events/ionic-events.service';

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss'],
})
export class AddRegisterComponent implements OnInit {

  public form: FormGroup

  public mockedTypes = ['groceries', 'beer']

  constructor(
    private formBuilder: FormBuilder,
    private ionicEvents: IonicEventsService,
    private maskPipe: MaskPipe
  ) { }

  ngOnInit() {

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

    this.form.value.value = this.form.value.value.replaceAll(' ', '')

    //Save on DB
    
  }

  updateWithMask(event) {  
    this.form.controls.value.setValue(this.maskPipe.transform(event.currentTarget.value, 'separator.2'))
  }

}
