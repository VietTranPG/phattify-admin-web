import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachManagementComponent } from './coach-management.component';
import { SelectModule } from 'ng-select';
const routes: Routes = [
  { path: '', component: CoachManagementComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forChild(routes),
    SelectModule
  ],
  declarations: [CoachManagementComponent]
})
export class CoachManagementModule { }
