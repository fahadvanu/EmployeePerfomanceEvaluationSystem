import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponentComponent } from './roles-component/roles-component.component'
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';
import { HomeComponent } from './home/home-component';
import { UnAuthorizedComponent } from './unauthorized/unauthorized-component';
import { AuthGuardService } from './shared/guards/check-user-authenticated-guard';

const routes: Routes = [

    { path: 'roles', component: RolesComponentComponent, canActivate: [AuthGuardService]  },
    { path: 'departments', component: DepartmentsComponentComponent, canActivate: [AuthGuardService]  },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]  },
    { path: 'need-help', loadChildren: () => import('./accounts/need-help/need-help-module').then(m => m.NeedHelpModule) },
    { path: 'unauthorized', component: UnAuthorizedComponent  },
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: '*', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
