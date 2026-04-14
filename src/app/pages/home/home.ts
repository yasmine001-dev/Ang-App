import { Component } from '@angular/core';
import { NgbdCarouselPause } from '../../components/home-carousel/home-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbdCarouselPause],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {}
