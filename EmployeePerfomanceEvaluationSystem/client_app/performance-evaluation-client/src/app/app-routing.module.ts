import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponentComponent } from './roles-component/roles-component.component'
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';

const routes: Routes = [

    { path: '', component: RolesComponentComponent },
    { path: 'roles', component: RolesComponentComponent },
    { path: 'departments', component: DepartmentsComponentComponent },
    { path: '*', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
