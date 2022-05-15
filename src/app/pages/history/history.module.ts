import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryPageRoutingModule } from './history-routing.module';

import { HistoryPage } from './history.page';
import { SharedModule } from 'src/app/shared/shared.module';

import { ExpansableItemComponent } from './components/expansable-item/expansable-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryPageRoutingModule,
    SharedModule
  ],
  declarations: [HistoryPage, ExpansableItemComponent]
})
export class HistoryPageModule {}
