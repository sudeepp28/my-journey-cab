import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ExploreComponent } from './explore/explore.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Optional router configuration
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // scroll to top on navigation
  anchorScrolling: 'enabled',           // enables #anchor links if used
  onSameUrlNavigation: 'reload'
};

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'explore/:city', component: ExploreComponent },
  { path: 'contact', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
