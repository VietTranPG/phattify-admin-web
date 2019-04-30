import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToggleFullScreenDirective } from './fullscreen/toggle-fullscreen.directive';
import { AccordionAnchorDirective } from './accordion/accordionanchor.directive';
import { AccordionLinkDirective } from './accordion/accordionlink.directive';
import { AccordionDirective } from './accordion/accordion.directive';
import { HttpClientModule } from '@angular/common/http';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// import {TitleComponent} from '../layout/admin/title/title.component';
import { CardComponent } from './card/card.component';
import { CardToggleDirective } from './card/card-toggle.directive';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { DataFilterPipe } from './elements/data-filter.pipe';
import { FormatNumberPipe } from '../pipes/format-number.pipe';
import { ToastComponent } from './toast/toast.component';
import { ToastyService, ToastyModule } from 'ng2-toasty';
import { EmailComposeComponent } from './email-compose/email-compose.component';
import {QuillEditorModule} from 'ngx-quill-editor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ChipsComponent } from './chips/chips.component';
import { RoundInfoComponent } from './round-info/round-info.component';
import { RoudDetailTableComponent } from './round-info/roud-detail-table/roud-detail-table.component';
import { FormatTimeUtcPipe } from '../pipes/format-time-utc.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { FormatTimePipe } from '../pipes/format-time.pipe';
import { MeasurementTableComponent } from './round-info/measurement-table/measurement-table.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule,
    PerfectScrollbarModule,
    ClickOutsideModule,
    ToastyModule.forRoot(),
    QuillEditorModule,
    FormsModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  exports: [
    NgbModule,
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    HttpClientModule,
    PerfectScrollbarModule,
    // TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    ClickOutsideModule,
    DataFilterPipe,
    FormatNumberPipe,
    ToastComponent,
    EmailComposeComponent,
    RoundInfoComponent,FormatTimePipe
  ],
  declarations: [
    ToggleFullScreenDirective,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    CardToggleDirective,
    // TitleComponent,
    CardComponent,
    ModalBasicComponent,
    ModalAnimationComponent,
    SpinnerComponent,
    DataFilterPipe,
    FormatNumberPipe,
    ToastComponent,
    EmailComposeComponent,
    ChipsComponent,
    RoundInfoComponent,
    RoudDetailTableComponent,
    FormatTimeUtcPipe,
    FormatTimePipe,
    MeasurementTableComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule { }
