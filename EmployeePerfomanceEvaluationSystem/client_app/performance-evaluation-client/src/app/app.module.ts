import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { NgxBootstrapModule } from './ngx-bootstrap-module'
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { AppJWTModule } from './shared/jwt/jwt-module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared-module';
import { AccountsModule } from './accounts/accounts-module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RolesComponentComponent } from './roles-component/roles-component.component';
import { DepartmentsComponentComponent } from './departments-component/departments-component.component';
import { HomeComponent } from './home/home-component';
import { UnAuthorizedComponent } from './unauthorized/unauthorized-component';

import { HttpErrorInterceptor } from './shared/interceptors/error-interceptor';


@NgModule({
  declarations: [
        AppComponent,
        NavBarComponent,
        RolesComponentComponent,
        DepartmentsComponentComponent,
        HomeComponent,
        UnAuthorizedComponent
  ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        AppJWTModule,
        NgxBootstrapModule,
        NgxSpinnerModule,
        ToastrModule.forRoot({
          preventDuplicates: true,
          positionClass: 'toast-bottom-right',        
        }),
        SharedModule,
        AccountsModule,
        AppRoutingModule     
  ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
