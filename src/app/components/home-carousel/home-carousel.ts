import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap/carousel';

@Component({
	selector: 'ngbd-carousel-pause',
	standalone: true,
	imports: [NgbCarousel, NgbSlide],
	templateUrl: './home-carousel.html',
	styleUrl: './home-carousel.css',
})

export class NgbdCarouselPause {

  images: string[] = [
    'https://i.pinimg.com/1200x/9b/5e/9c/9b5e9cd9caf229b452ace90857fb0835.jpg',
    'https://i.pinimg.com/1200x/29/4a/3f/294a3ffac51e0ba04161073bca5dd904.jpg',
    'https://i.pinimg.com/1200x/2c/a9/cb/2ca9cb5cf78edadbd7fc981262d970ad.jpg'
  ];

  pauseOnHover = true;
  pauseOnFocus = true;

  onSlide(_event: NgbSlideEvent): void {
    // Hook for slide transition start; extend if needed (analytics, etc.)
  }
}
