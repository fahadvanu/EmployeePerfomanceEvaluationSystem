import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolesComponentComponent } from './roles-component/roles-component.component'
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';
import { GoalsComponentComponent } from './goals/goals-component';
import { HomeComponent } from './home/home-component';
import { UnAuthorizedComponent } from './unauthorized/unauthorized-component';
import { ForbiddenComponent } from './forbidden/forbidden-component';
import { AuthGuardService } from './shared/guards/check-user-authenticated-guard';

const routes: Routes = [

    { path: 'roles', component: RolesComponentComponent, canActivate: [AuthGuardService]  },
    { path: 'departments', component: DepartmentsComponentComponent, canActivate: [AuthGuardService] },
    { path: 'goals', component: GoalsComponentComponent, canActivate: [AuthGuardService] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuardService]  },
    { path: 'need-help', loadChildren: () => import('./accounts/need-help/need-help-module').then(m => m.NeedHelpModule) },
    { path: 'iterations', loadChildren: () => import('./iteration/iteration-module').then(m => m.IterationModule) },
    { path: 'iteration-details', loadChildren: () => import('./employee-iteration-details/employee-iteration-details-module').then(m => m.EmployeeIterationDetailsModule) },
    { path: 'iteration-result', loadChildren: () => import('./employee-iteration-result/employee-iteration-result-module').then(m => m.EmployeeIterationResultModule) },
    { path: 'unauthorized', component: UnAuthorizedComponent },
    { path: 'forbidden', component: ForbiddenComponent  },
    { path: '', redirectTo: 'login', pathMatch:'full' },
    { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
