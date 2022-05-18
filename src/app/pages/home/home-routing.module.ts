import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddRegisterComponent } from './components/add-register/add-register.component';
import { AddTypeComponent } from './components/add-type/add-type.component';
import { EditItemsComponent } from './components/edit-items/edit-items.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: '',
        component: HomePage
      },
      {
        path: 'add-register',
        component: AddRegisterComponent
      },
      {
        path: 'add-type',
        component: AddTypeComponent
      },
      {
        path: 'edit/:item_type/:id',
        component: EditItemsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
