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
      { path: 'coach-management', loadChildren: '../coach-management/coach-management.module#CoachManagementModule' },
      { path: 'client-info/:id', loadChildren: '../client-info/client-info.module#ClientInfoModule' },
      { path: 'mentor-info/:id', loadChildren: '../coach-info/coach-info.module#CoachInfoModule' },
      { path: 'configs', loadChildren: '../configs/configs.module#ConfigsModule' },
      { path: 'error-mentor', loadChildren: '../stripe-error-mentor/stripe-error-mentor.module#StripeErrorMentorModule' }
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
