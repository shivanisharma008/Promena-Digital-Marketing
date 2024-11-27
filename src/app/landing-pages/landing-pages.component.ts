import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-pages',
  templateUrl: './landing-pages.component.html',
  styleUrl: './landing-pages.component.scss'
})
export class LandingPagesComponent {
  @ViewChild('drawer', { static: false }) drawer: ElementRef | undefined;
}
