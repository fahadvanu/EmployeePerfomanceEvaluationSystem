import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponentComponent } from './roles-component/roles-component.component'
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';
import { HomeComponent } from './home/home-component';

const routes: Routes = [

    { path: 'roles', component: RolesComponentComponent },
    { path: 'departments', component: DepartmentsComponentComponent },
    { path: 'home', component: HomeComponent },
    { path: 'need-help', loadChildren: () => import('./accounts/need-help/need-help-module').then(m => m.NeedHelpModule) },
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
