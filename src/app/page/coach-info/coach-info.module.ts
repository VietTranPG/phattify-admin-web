import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoachInfoComponent } from './coach-info.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { MentorDetailComponent } from './mentor-detail/mentor-detail.component';
import { ListMenteeComponent } from './list-mentee/list-mentee.component';
import { TextMaskModule } from 'angular2-text-mask';
const routes: Routes = [
  { path: '', component: CoachInfoComponent }
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SelectModule,
    FormsModule,
    TextMaskModule
  ],
  declarations: [CoachInfoComponent, MentorDetailComponent, ListMenteeComponent]
})
export class CoachInfoModule { }
