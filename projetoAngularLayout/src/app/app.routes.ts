import { Routes } from "@angular/router"
import { AboutComponent } from "./about/about.component"
import { ContactComponent } from "./contact/contact.component"
import { HeaderComponent } from "./header/header.component"
import { ServiceComponent } from "./service/service.component"

export const ROUTES: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'service', component: ServiceComponent},
    {path: 'about', component: AboutComponent}
]