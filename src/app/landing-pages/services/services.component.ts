import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  brandingAndDesignCards = [
    {
      icon: 'assests/images/services/services_card1.png',
      name: 'Brand Identity',
      desc: 'We give a brand its ideal visual identity through our innovative ideas and extensive research.'
    },
    {
      icon: 'assests/images/services/services_card2.png',
      name: 'Logo & Packaging',
      desc: 'Each component of an interactive user interface is finalised with research and teamwork to provide satisfactory UI design services.'
    },
    {
      icon: 'assests/images/services/services_card3.png',
      name: 'UI Design',
      desc: 'Each component of an interactive user interface is finalised with research and teamwork to provide satisfactory UI design services.'
    },
    {
      icon: 'assests/images/services/services_card4.png',
      name: 'Search Engine Optimization',
      desc: 'Our professional SEO services provide all necessary strategies for website growth. We begin from the beginning and never overlook a minor region to cover.'
    },
    {
      icon: 'assests/images/services/services_card5.png',
      name: 'Social Media Optimization',
      desc: 'We cater to the most appealing catalogs with precise color engineering and catalog layout design.'
    },
    {
      icon: 'assests/images/services/services_card6.png',
      name: 'Print & Outdoor',
      desc: 'When we print for you, color and quality always stay on top of mind.'
    },
    {
      icon: 'assests/images/services/services_card7.png',
      name: 'Catalogue Design',
      desc: 'We cater to the most appealing catalogs with precise color engineering and catalog layout design.'
    },
  ]


  developmentCards = [
    {
      icon: 'assests/images/services/services_card8.png',
      name: 'Website Development',
      desc: 'From scratch to success, our developers work relentlessly with full coordination with the clients to design the ideal website focused on audience engagement and traffic building. We never fall short in our web development services.'
    },
    {
      icon: 'assests/images/services/services_card9.png',
      name: 'App Development',
      desc: 'When we offer app development services, our developers not only pay close attention to the UI but also spend a lot of time optimizing it.'
    },

  ]
  contentCreationCards = [
    {
      icon: 'assests/images/services/services_card10.png',
      name: 'Photography',
      desc: 'In todays era brands identity can be maintained through photography in order to be consistent with the brands creative direction and positioning on social media'
    },
    {
      icon: 'assests/images/services/services_card11.png',
      name: 'Videography',
      desc: 'In todays era brands identity can be maintained through videography in order to be consistent with the brands creative direction and positioning on social media'
    },

  ]

  MarketingCards = [
    {
      icon: 'assests/images/services/services_card12.png',
      name: 'Performance Marketing',
      desc: 'Our E-Commerce marketing services provide client satisfaction. We eliminate any space for failure with the unwavering efforts of our team'
    },
    {
      icon: 'assests/images/services/services_card13.webp',
      name: 'Social Media Marketing',
      desc: 'We cater to the most appealing catalogs with precise color engineering and catalog layout design.'
    },
    {
      icon: 'assests/images/services/services_card14.png',
      name: 'Search Engine Marketing',
      desc: 'In todays era brands identity can be maintained through photography and videography in order to be consistent with the brand creative direction and positioning on social media'
    },

  ]
}
