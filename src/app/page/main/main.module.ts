import { ConfirmDeactivateGuardService } from './../../services/confirm-deactivate-guard/confirm-deactivate-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { AuthGuardService } from '../../services/auth-guard-service/auth-guard.service';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuardService],
    canDeactivate:[ConfirmDeactivateGuardService],
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
      { path: 'client-management', loadChildren: '../client-management/client-management.module#ClientManagementModule' },
      { path: 'client-info', loadChildren: '../client-info/client-info.module#ClientInfoModule' },
    ]
  },

]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [MenuItems],
  declarations: [MainComponent]
})
export class MainModule { }
