import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgApexchartsModule } from 'ng-apexcharts';

import { PageHeaderComponent } from './components/template/page-header/page-header.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule
  ],
  exports: [
    PageHeaderComponent,
    PieChartComponent
  ]
})
export class SharedModule { }
