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
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { FooterComponent } from "./footer/footer.component";
import { HfirstComponent } from "./home/hfirst/hfirst.component";
import { HsecondComponent } from "./home/hsecond/hsecond.component";
import { HthirdComponent } from "./home/hthird/hthird.component";
import { HfourthComponent } from "./home/hfourth/hfourth.component";
import { HjourneyBannerComponent } from "./home/hjourney-banner/hjourney-banner.component";
import { HpartnerSecitonComponent } from "./home/hpartner-seciton/hpartner-seciton.component";













@NgModule({
    declarations:[AppComponent,
        HomeComponent,HeaderComponent,SidebarComponent,TestimonialComponent,FooterComponent,HfirstComponent,HsecondComponent,HthirdComponent,HfourthComponent,HjourneyBannerComponent,HpartnerSecitonComponent
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