import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskfiveComponent } from './taskfive/taskfive.component';
import { TaskfourComponent } from './taskfour/taskfour.component';
import { TaskoneComponent } from './taskone/taskone.component';
import { TaskthreeComponent } from './taskthree/taskthree.component';
import { TasktwoComponent } from './tasktwo/tasktwo.component';
const routes: Routes = [
  {
    path: 'taskone',
    component: TaskoneComponent,
    pathMatch: 'full'
  },
  {
    path: 'tasktwo',
    component: TasktwoComponent,
    pathMatch: 'full'
  },
  {
    path: 'taskthree',
    component: TaskthreeComponent,
    pathMatch: 'full'
  },
  {
    path: 'taskfour',
    component: TaskfourComponent,
    pathMatch: 'full'
  },
  {
    path: 'taskfive',
    component: TaskfiveComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
