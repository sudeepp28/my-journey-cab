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
      image: "assets/user 1.jpg"
    },
    {
      text: "We used their SUV service for a family trip to Manali...",
      name: "Amit Gulati, Mumbai",
      location: "Customer, rented an SUV",
      image: "assets/user 2.jpg"
    },
    {
      text: "Affordable sedan, on-time pickup, and courteous service...",
      name: "Prena Singh",
      location: "Customer, rented a Sedan",
      image: "assets/user 3.jpg"
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
  this.resetAutoplay();
}

prevSlide() {
  this.currentSlide = (this.currentSlide - 1 + this.testimonials.length) % this.testimonials.length;
  this.resetAutoplay();
}

goToSlide(index: number) {
  this.currentSlide = index;
  this.resetAutoplay();
}
resetAutoplay() {
  clearInterval(this.interval); // stop current interval
  this.startAutoplay();         // start new interval
}


  startAutoplay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }
}
