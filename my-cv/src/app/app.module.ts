import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactDetailsComponent } from './Components/Header/Components/contact-details/contact-details.component';
import { MainHeaderComponent } from './Components/Header/Components/main-header/main-header.component';
import { SummaryComponent } from './Components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDetailsComponent,
    MainHeaderComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
