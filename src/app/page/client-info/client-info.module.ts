import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientInfoComponent } from './client-info.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SelectModule } from 'ng-select';
import { TextMaskModule } from 'angular2-text-mask';
const routes: Routes = [
  { path: '', component: ClientInfoComponent }
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
  declarations: [ClientInfoComponent]
})
export class ClientInfoModule { }
