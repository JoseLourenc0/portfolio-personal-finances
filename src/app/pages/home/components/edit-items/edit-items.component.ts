import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaskPipe } from 'ngx-mask';
import { Register, Type } from 'src/app/shared/models/data.model';
import { DataService } from 'src/app/shared/services/data-service/data.service';
import { IonicEventsService } from 'src/app/shared/services/ionic-events/ionic-events.service';

@Component({
  selector: 'app-edit-items',
  templateUrl: './edit-items.component.html',
  styleUrls: ['./edit-items.component.scss'],
})
export class EditItemsComponent implements OnInit {

  public form: FormGroup
  public types

  public typeEdit:string
  private id: string | number

  private register_date: Date | string = new Date()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private maskPipe: MaskPipe,
    private ionicEvents: IonicEventsService,
  ) { }

  ngOnInit() {
    this.typeEdit = this.route.snapshot.paramMap.get('item_type')
    this.id = this.route.snapshot.paramMap.get('id')
    
    if((this.typeEdit !== 'type' && this.typeEdit !== 'register') || !this.id) return this.router.navigate(['/home'])
    
    if(this.typeEdit === 'type') {
  
      this.form = this.formBuilder.group({
        type: [null, Validators.required],
        is_earning: [null, Validators.required],
        register_date: [null, Validators.required]
      })

      this.dataService.getById(this.typeEdit, this.id as unknown as number).then((r: Type) => {
        this.register_date = r.register_date
        this.form.setValue({
          type: r.type,
          is_earning: r.is_earning,
          register_date: r.register_date
        })
      })
    }
    
    if(this.typeEdit === 'register') {
      
      this.getAllTypes()

      this.form = this.formBuilder.group({
        value: [null, Validators.required],
        type: [null, Validators.required],
        register_date: [null, Validators.required],
        description: [null],
      })
      
      this.dataService.getById('register', this.id as unknown as number).then((r: Register) => {
        this.register_date = r.register_date
        this.form.setValue({
          value: r.value,
          type: r.type,
          description: r.description,
          register_date: r.register_date
        })
      })

    }

  }

  async onSubmit() {

    if(!this.form.valid) {
      return this.ionicEvents.presentToast('Invalid Information', 'Please verify all fields and try again', 'danger')
    }

    let data = {...this.form.value}

    if(this.typeEdit === 'register' && isNaN(data.value)) {
      data.value = Number(data.value.replaceAll(' ', ''))
      
      if(this.types.find(e => e.type === data.type).is_earning == 0) data.value = -data.value
    }

    //Save on DB
    await this.updateItem(data)
    
  }

  updateWithMask(event) {  
    this.form.controls.value.setValue(this.maskPipe.transform(event.currentTarget.value, 'separator.2'))
  }

  async getAllTypes() {
    this.types = await this.dataService.getAll('type') as Type[]
  }

  async updateItem(data) {

    this.dataService.update(this.typeEdit, this.id as unknown as number, data).then(() => {
      this.ionicEvents.presentToast(`${this.typeEdit.toUpperCase()} Successfully Updated!`,'', 'success')
    })

  }

}
