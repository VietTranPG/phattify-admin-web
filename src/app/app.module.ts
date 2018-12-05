import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

// Modules
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './components/home/home.module';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Interceptor
import { CommonHttpInterceptor } from './interceptor/common.interceptor';

// Redux
import { NgRedux, NgReduxModule } from 'ng2-redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

// Services
import { ConfigService } from './services/config-service/config.service';
import { HelperService } from './services/helper-service/helper.service';
import { ApiService } from './services/api-service/api.service';
import { AuthGuardService } from './services/auth-guard-service/auth-guard.service';
import { ConfirmDeactivateGuardService } from './services/confirm-deactivate-guard/confirm-deactivate-guard.service';

// Directives

// Components
import { AppComponent } from './app.component';



@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    BrowserAnimationsModule,
    CommonModule,
    SharedModule,
    HomeModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent    
  ],
  providers: [
    ConfigService,
    HelperService,
    AuthGuardService,
    ConfirmDeactivateGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: CommonHttpInterceptor,
  },
    ApiService,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
