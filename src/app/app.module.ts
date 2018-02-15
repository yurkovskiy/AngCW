import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApidataComponent } from './apidata/apidata.component';
import { HttpClientModule } from '@angular/common/http';
import {HttpapiService} from './httpapi.service';


@NgModule({
  declarations: [
    AppComponent,
    ApidataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
