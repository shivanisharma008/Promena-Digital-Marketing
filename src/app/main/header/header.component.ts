import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,

  ){}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof window !== 'undefined') {
        const headers = document.querySelectorAll('.header');
        headers.forEach((header) => {
          if (window.scrollY > 0) {
            this.renderer.addClass(header, 'scrolled');
          } else {
            this.renderer.removeClass(header, 'scrolled');
          }
        });
      }
    }
  }
}
