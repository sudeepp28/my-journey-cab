import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactUsComponent } from './contact-us/contact-us.component';







const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {path:'about', component:AboutComponent},
  {path:'services', component:ServiceComponent},
  {path:'explore/:city', component:ExploreComponent},
  {path:'contact', component:ContactUsComponent}

   
   
  // <-- new route
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
