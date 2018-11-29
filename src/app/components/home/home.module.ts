import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';

// Services
import { HomeService } from './home.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
