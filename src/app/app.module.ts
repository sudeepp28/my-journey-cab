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













@NgModule({
    declarations:[AppComponent,
        HomeComponent,HeaderComponent,SidebarComponent,TestimonialComponent,FooterComponent
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