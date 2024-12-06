import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-branding-consultancy',
  templateUrl: './branding-consultancy.component.html',
  styleUrl: './branding-consultancy.component.scss'
})
export class BrandingConsultancyComponent {
  // @ViewChild('parallaxSection', { static: true }) parallaxSection!: ElementRef;
  // @ViewChild('videoElement', { static: true }) videoElement!: ElementRef;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(): void {
  //   const section = this.parallaxSection.nativeElement;
  //   const video = this.videoElement.nativeElement;

  //   // Get the section's position relative to the viewport
  //   const rect = section.getBoundingClientRect();
  //   const windowHeight = window.innerHeight;

  //   // Check if the section is in the viewport
  //   if (rect.top <= 0 && rect.bottom >= windowHeight) {
  //     // Section is fully visible in the viewport
  //     video.style.position = 'fixed';
  //     video.style.top = '0';
  //   } else {
  //     // Section is out of the viewport
  //     video.style.position = 'absolute';
  //     video.style.top = '0';
  //   }
  // }
}
