import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../shared/material.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpsertUserRegistrationComponent } from './upsert-user-registration/upsert-user-registration.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FtpManagementComponent } from './ftp-management/ftp-management.component';


@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    UserRegistrationComponent,
    UpsertUserRegistrationComponent,
    FtpManagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatExpansionModule,
    MatCardModule,
    FontAwesomeModule,
    MatStepperModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class AdminModule { }
