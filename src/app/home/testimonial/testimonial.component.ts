import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone:false,
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit, OnDestroy {
  testimonials = [
    {
      text: "I booked a luxury car for my wedding from My Journey Cabs...",
      name: "Swati Gupta, Delhi",
      location: "Customer, rented a BMW",
      image: "assets/user.png"
    },
    {
      text: "We used their SUV service for a family trip to Manali...",
      name: "Amit Gulati, Mumbai",
      location: "Customer, rented an SUV",
      image: "assets/user.png"
    },
    {
      text: "Affordable sedan, on-time pickup, and courteous service...",
      name: "Prena Singh",
      location: "Customer, rented a Sedan",
      image: "assets/user.png"
    }
  ];

  currentSlide = 0;
  interval: any;

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
   
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
}
