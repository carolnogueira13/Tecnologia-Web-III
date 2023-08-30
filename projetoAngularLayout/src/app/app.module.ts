import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    NavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
