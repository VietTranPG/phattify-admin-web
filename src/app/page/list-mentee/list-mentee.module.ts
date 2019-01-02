import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMenteeComponent } from './list-mentee.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
const routes: Routes = [
  { path: '', component: ListMenteeComponent }
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SelectModule,
    FormsModule,
  ],
  declarations: [ListMenteeComponent]
})
export class ListMenteeModule { }
