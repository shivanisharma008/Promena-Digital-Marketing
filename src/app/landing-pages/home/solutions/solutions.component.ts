import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.scss'
})
export class SolutionsComponent {
  services = [
    { id: 'branding', name: 'Branding', icon: 'assests/images/home/branding-icon.png', showButton: false },
    { id: 'content-creation', name: 'Content Creation', icon: 'assests/images/home/content-icon.png', showButton: false },
    { id: 'print-packaging', name: 'Print & Packaging Designs', icon: 'assests/images/home/print-icon.png', showButton: false },
    { id: 'web-design', name: 'Website - App Design & Development', icon: 'assests/images/home/web-app-icon.png', showButton: false },
    { id: 'photography', name: 'Photography & Videography', icon: 'assests/images/home/photography-icon.png', showButton: false },
    { id: 'social-media', name: 'Social Media Optimisation & Marketing', icon: 'assests/images/home/social-media-icon.png', showButton: false },
    { id: 'seo', name: 'Search Engine Optimisation & Marketing', icon: 'assests/images/home/seo-icon.png', showButton: false },
  ];

  constructor(private router: Router) { }

  // Show the button on hover
  showButton(serviceId: string) {
    const service = this.services.find((s) => s.id === serviceId);
    if (service) {
      service.showButton = true;
    }
  }

  // Hide the button on mouse leave
  hideButton(serviceId: string) {
    const service = this.services.find((s) => s.id === serviceId);
    if (service) {
      service.showButton = false;
    }
  }

  // Navigate to the services page
  navigateToService(serviceId: string) {
    this.router.navigate(['/landing-page/services'], { fragment: serviceId });
  }
}
