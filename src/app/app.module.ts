import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopPorsheLogoComponent } from './top-porshe-logo/top-porshe-logo.component';
import { ModelsComponent } from './models/models.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HelloComponent, TopPorsheLogoComponent, ModelsComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
  
})
export class AppModule { }
