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


@NgModule({
  declarations: [
    IndexComponent,
    DashboardComponent,
    UserRegistrationComponent
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
    MatCardModule
  ]
})
export class AdminModule { }