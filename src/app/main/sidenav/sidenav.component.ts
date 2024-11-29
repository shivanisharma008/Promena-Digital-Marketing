import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @Output() toggle = new EventEmitter<void>();

  constructor(private route:Router){}

  close() {
    this.toggle.emit();
  }

  // clearEffectVisible = false;
  // clearEffectTop = 0;
  // clearEffectLeft = 0;

  // // Function to handle mouse movement
  // onMouseMove(event: MouseEvent) {
  //   // Show the clear effect
  //   this.clearEffectVisible = true;

  //   // Set the position of the clear effect based on mouse position
  //   this.clearEffectTop = event.clientY - 50; // Center the effect
  //   this.clearEffectLeft = event.clientX - 50; // Center the effect

  //   // Hide the clear effect after animation ends
  //   setTimeout(() => {
  //     this.clearEffectVisible = false;
  //   }, 300); // Timeout duration matches animation duration
  // }


  aboutRoute(){
    this.route.navigate(['/about']);
  }
}
