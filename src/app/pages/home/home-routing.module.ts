import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRegisterComponent } from './components/add-register/add-register.component';

import { HomePage } from './home.page';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
