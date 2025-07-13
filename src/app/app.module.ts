import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


import { AppRoutingModule } from "./app.routing-module";


import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TestimonialComponent } from "./home/testimonial/testimonial.component";
import { FooterComponent } from "./footer/footer.component";
import { HfirstComponent } from "./home/hfirst/hfirst.component";
import { HsecondComponent } from "./home/hsecond/hsecond.component";
import { HthirdComponent } from "./home/hthird/hthird.component";
import { HfourthComponent } from "./home/hfourth/hfourth.component";
import { HjourneyBannerComponent } from "./home/hjourney-banner/hjourney-banner.component";
import { HpartnerSecitonComponent } from "./home/hpartner-seciton/hpartner-seciton.component";
import { AboutComponent } from "./about/about.component";
import { AfirstComponent } from "./about/afirst/afirst.component";
import { AsecondComponent } from "./about/asecond/asecond.component";
import { ServiceComponent } from "./service/service.component";
import { SFirstComponent } from "./service/s-first/s-first.component";
import { SSecondComponent } from "./service/s-second/s-second.component";
import { SthirdComponent } from "./service/sthird/sthird.component";
import { ApartnerComponent } from "./about/apartner/apartner.component";
import { CallNowComponent } from "./call-now/call-now.component";
import { ExploreComponent } from "./explore/explore.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";














@NgModule({
    declarations:[AppComponent,
        HomeComponent,HeaderComponent,SidebarComponent,TestimonialComponent,FooterComponent,HfirstComponent,HsecondComponent,HthirdComponent,HfourthComponent,HjourneyBannerComponent,HpartnerSecitonComponent,
        AboutComponent,AfirstComponent,AsecondComponent,ApartnerComponent,
        ServiceComponent,SFirstComponent,SSecondComponent,SthirdComponent,
        CallNowComponent,ExploreComponent,ContactUsComponent
       ],
    bootstrap:[AppComponent],
    imports: [FormsModule,
         BrowserModule,
         CommonModule
         ,AppRoutingModule,
        ReactiveFormsModule,
    HttpClientModule]
})

export class AppModule{}