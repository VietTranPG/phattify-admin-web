import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigsComponent } from './configs.component';
import { Routes, RouterModule } from '@angular/router';
import { QuillEditorModule } from 'ngx-quill-editor';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SafePipe } from '../../pipes/safe.pipe';
const routes: Routes = [
  { path: '', component: ConfigsComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    QuillEditorModule,
    SharedModule,
  ],
  declarations: [ConfigsComponent,SafePipe]
})
export class ConfigsModule { }
