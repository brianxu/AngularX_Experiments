import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import {TransferHttpCacheModule} from '@nguniversal/common';


@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
