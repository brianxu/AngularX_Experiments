import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from './details.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DefaultInterceptor } from './interceptors/default.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultInterceptor,
      multi: true,
    },
    DetailsService]
})
export class CoreModule { }
