import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShortcutComponent } from './shortcut/shortcut.component';

const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  {
  path: '', component:NavbarComponent, children:[
    {
      path: 'home', component:HomeComponent
    },
    {
      path: 'shortcut', component:ShortcutComponent
    }
  ]
}];
// canActivate:[AutoGuard]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
