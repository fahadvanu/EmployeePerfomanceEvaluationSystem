import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponentComponent } from './roles-component/roles-component.component'

const routes: Routes = [

    { path: '', component: RolesComponentComponent },
    { path: '*', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
