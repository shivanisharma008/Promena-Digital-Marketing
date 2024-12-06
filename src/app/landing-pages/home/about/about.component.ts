import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  @ViewChild('progressContainer') progressContainer!: ElementRef;

  isInView: boolean = false;
  circleRadius: number = 16; // Radius of the circle
  circleStroke: number = 2 * Math.PI * this.circleRadius; // Calculate circumference

  ngAfterViewInit(): void {
    // Use IntersectionObserver to detect when the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isInView = true;
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    observer.observe(this.progressContainer.nativeElement);
  }
}
