import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'home//13716.101', component: HomeComponent
  },
  {
    path: 'home/:value', component: HomeComponent
  },
  {
    path: 'list', component:ListComponent
  }
 /* {
    path: 'login',
    component:LoginComponent
  }*/
/*  {
    path: '**', redirectTo: "/home"
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
