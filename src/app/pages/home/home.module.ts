import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgxMaskModule, IConfig, MaskPipe } from 'ngx-mask'
export let options: Partial<IConfig> | (() => Partial<IConfig>)

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SharedModule } from '../../shared/shared.module';
import { AddRegisterComponent } from './components/add-register/add-register.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { EditItemsComponent } from './components/edit-items/edit-items.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    HomePageRoutingModule,
    SharedModule
  ],
  declarations: [HomePage, AddRegisterComponent, AddTypeComponent, EditItemsComponent],
  providers: [MaskPipe]
})
export class HomePageModule {}
