import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard} from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShortcutComponent } from './shortcut/shortcut.component';

const routes: Routes = [
  {
    path: 'login', component:LoginComponent
  },
  {
  path: '', component:NavbarComponent, canActivate : [authGuard], children:[
    {
      path: 'home', component:HomeComponent
    },
    {
      path: 'shortcut', component:ShortcutComponent
    }
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
