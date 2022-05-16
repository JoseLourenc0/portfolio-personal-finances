import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { NgApexchartsModule } from 'ng-apexcharts';

import { PageHeaderComponent } from './components/template/page-header/page-header.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { NumberColorDirective } from './directives/number-color/number-color.directive';
import { TextIconButtonDirective } from './directives/text-icon-button/text-icon-button.directive';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PieChartComponent,
    NumberColorDirective,
    TextIconButtonDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgApexchartsModule
  ],
  exports: [
    PageHeaderComponent,
    PieChartComponent,
    NumberColorDirective,
    TextIconButtonDirective
  ]
})
export class SharedModule { }
