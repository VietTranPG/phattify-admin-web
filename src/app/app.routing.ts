import { ConfirmDeactivateGuardService } from './services/confirm-deactivate-guard/confirm-deactivate-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', loadChildren: './page/main/main.module#MainModule' },
  { path: 'login', loadChildren: './page/login/login.module#LoginModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
