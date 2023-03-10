import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataResolver } from '../shared/resolvers/data.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FtpManagementComponent } from './ftp-management/ftp-management.component';
import { IndexComponent } from './index/index.component';
import { UpsertUserRegistrationComponent } from './upsert-user-registration/upsert-user-registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    resolve: { data:  DataResolver},
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user-management',
        component: UserRegistrationComponent
      },
      {
        path: 'createUser',
        component: UpsertUserRegistrationComponent
      },
      {
        path: 'ftpManagement',
        component: FtpManagementComponent
      }
      ,
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
