import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { AlPkComponent } from './parent-comp/al-pk.component';
import { AlMnComponent } from './parent-comp/al-mn.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentCompComponent,
    AlPkComponent,
    AlMnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
