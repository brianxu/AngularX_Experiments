import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsService } from './details.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [DetailsService]
})
export class CoreModule { }
