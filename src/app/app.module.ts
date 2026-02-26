import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './shared/components/users/users.component';
import { NoPageReloadComponent } from './shared/components/no-page-reload/no-page-reload.component';
import { UsersDashboardComponent } from './shared/components/users-dashboard/users-dashboard.component';
import { UsersDetailComponent } from './shared/components/users-detail/users-detail.component';
import { UsersFormComponent } from './shared/components/users-form/users-form.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    FairsComponent,
    UsersComponent,
    NoPageReloadComponent,
    UsersDashboardComponent,
    UsersDetailComponent,
    UsersFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
