import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskoneComponent } from './taskone/taskone.component';
import { TasktwoComponent } from './tasktwo/tasktwo.component';
import { TaskthreeComponent } from './taskthree/taskthree.component';
import { TaskfourComponent } from './taskfour/taskfour.component';
import { TaskfiveComponent } from './taskfive/taskfive.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskoneComponent,
    TasktwoComponent,
    TaskthreeComponent,
    TaskfourComponent,
    TaskfiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
