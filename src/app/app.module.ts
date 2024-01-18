import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/shared-component/navbar/navbar.component';
import { FooterComponent } from './component/shared-component/footer/footer.component';
import { RouterLinkActive, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';
import { OurportfolioComponent } from './component/ourportfolio/ourportfolio.component';
import { CareerComponent } from './component/career/career.component';
import { ContactusComponent } from './component/contactus/contactus.component';

const route:Routes = [
  
  {path:'home' ,component: HomeComponent},
  {path:'' ,redirectTo:'/home',pathMatch:'full'},
  {path:'aboutus' ,component: AboutusComponent},
  {path:'portfolio' ,component:OurportfolioComponent},
  {path:'career' ,component: CareerComponent},
  {path:'contactus' ,component: ContactusComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    OurportfolioComponent,
    CareerComponent,
    ContactusComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLinkActive,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
