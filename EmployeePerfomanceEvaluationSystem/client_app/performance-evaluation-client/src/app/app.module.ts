import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { NgxBootstrapModule } from './ngx-bootstrap-module'
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared-module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RolesComponentComponent } from './roles-component/roles-component.component';


@NgModule({
  declarations: [
        AppComponent,
        NavBarComponent,
        RolesComponentComponent
  ],
  imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxBootstrapModule,
        SharedModule,
        AppRoutingModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
