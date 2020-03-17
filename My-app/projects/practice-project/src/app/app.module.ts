import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalWebsiteComponent } from './personal-website/personal-website.component';
import { PageBodyComponent } from './personal-website/page-body.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalWebsiteComponent,
    PageBodyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
