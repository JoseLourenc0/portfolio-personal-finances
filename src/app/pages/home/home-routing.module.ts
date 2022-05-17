import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AddRegisterComponent } from './components/add-register/add-register.component';
import { AddTypeComponent } from './components/add-type/add-type.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
