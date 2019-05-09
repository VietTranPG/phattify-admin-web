import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StripeErrorMentorComponent } from './stripe-error-mentor.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
const routes: Routes = [
  { path: '', component: StripeErrorMentorComponent }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  declarations: [StripeErrorMentorComponent]
})
export class StripeErrorMentorModule { }
