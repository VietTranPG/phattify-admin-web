import { DateFormatPipe } from './../../date-format.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientManagementComponent } from './client-management.component';
import { SelectModule } from 'ng-select';
const routes: Routes = [
  { path: '', component: ClientManagementComponent }
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
  declarations: [ClientManagementComponent, DateFormatPipe,]
})
export class ClientManagementModule { }
