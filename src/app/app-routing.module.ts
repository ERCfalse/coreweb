import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
 {path: '', redirectTo: '/login', pathMatch: 'full'},
 {path: 'main', component: MainComponent},
 {path: 'login', component: LoginComponent},
 //{path:'start', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
