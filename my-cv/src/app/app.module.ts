import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ContactDetailsComponent } from './Components/Header/Components/contact-details/contact-details.component';
import { MainHeaderComponent } from './Components/Header/Components/main-header/main-header.component';
import { SummaryComponent } from './Components/summary/summary.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { JobComponent } from './Components/experience/components/job/job.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxAccordionModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactDetailsComponent,
    MainHeaderComponent,
    SummaryComponent,
    SkillsComponent,
    ExperienceComponent,
    JobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
