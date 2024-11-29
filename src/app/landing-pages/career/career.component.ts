import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  @Input() items: { title: string; content: string }[] = [];
  activeIndex: number | null = null;
  uploadedFiles: any;

  toggleAccordion(index: number): void {
    if (this.activeIndex === index) {
      this.activeIndex = null; // Close the accordion if it's already open
    } else {
      this.activeIndex = index; // Open the clicked accordion
    }
  }

  accordionItems = [
    {
      title: 'Content Writer',
      para: '',
      respDesc: [
        'The ideal candidate is a creative team player, talented wordsmith, and grammar sleuth. You will be responsible for developing marketing and communications content that will separate us from the crowd.',
        'Collaborate with internal partners to interpret project briefs and develop relevant concepts into content Ensure that all products are proofed and ready for delivery or posting Prepare files and concept boards for client review and presentation.',

      ],
      quaList: [
        'Bachelor’s degree or equivalent experience in Advertising',
        '4+ years of experience in content writing or copywriting experience',
        'Excellent written and verbal communication skills',
        'Highly organized with excellent attention to detail',
      ],
    },
    {
      title: 'Motion Graphic Designer',
      para: '',
      respDesc: [
        'GIFs',
        'Informative Videos',
        'Logo Animation',
        'Product Marketing Videos',
        'Website UI Animation',
        'Marketing Demos',
        'Infographics',
        'Animated Icon Videos',
        'Corporate Videos',
        'White Board Animation Videos',
      ],
      quaList: [
        'The candidate must have 3-4 years of agency experience.',
        'And should be willing to work from the office.',
      ],
    },
    {
      title: 'Social Media Manager',
      para: 'The ideal candidate is a hard-working team player who will play a critical role in creating original digital content across various social media platforms and push the same organically.',
      respDesc: [
        'Develop social media strategy',
        'Create original content',
        'Provide data analysis and metric reporting for clients',
        'Perform different activities leading to organic growth',
      ],
      quaList: [
        'Proficiency in all social media platforms',
        'Should have worked in an agency in the past',
        'Fluency in Microsoft Office suite (Outlook, Excel, Word, PowerPoint, etc.)',
      ],
    },
    {
      title: 'Social Media Ad Specialist',
      para: 'We are looking for a Social Media Ads Specialist, someone who can plan and run different kinds of ads on all social channels.',
      respDesc: [
        'Develop integrated paid media strategies.'
        , 'Plan different ad campaigns with different goals and deliver promised results.',
        'Create and manage digital campaign budgets.',
        'Track digital campaign performance.',
        'Analyze campaign metrics, prepare performance reports, and provide recommendationsMonitor market trends and identify new digital opportunities.',
      ],
      quaList: [
        'Bachelor’s degree in communication, marketing, or advertising.',
        'At least 2-4 years of agency experience.',
        'Deep knowledge of Facebook ads, Instagram ads, Twitter ads, and LinkedIn ads.',
        'Strong communication and presentation skills.',
        'Analytical thinking and problem-solving abilities.',
        'Organizational and time management skills.',
      ],
    },
    {
      title: 'Head Of Operations',
      para: 'The ideal candidate is a hard-working team player who will play a critical role in creating original digital content across various social media platforms and push the same organically.',
      respDesc: [
        'Assist in Digital strategy and planning',
        'Manage the delivery of multiple Digital Marketing projects',
        'Work with stakeholders to define project scope and characteristics and coordinate with the project team, support functions, and external partners',
        'Track timing, milestones, and budget of individual projects',
        'Monitor existing processes and make recommendations to improve current processes that impact deliverables',
        'Create and maintain help documents and user manuals for tasks performed by both the digital team and key stakeholders',
        'Conduct training sessions for the operations team;',
      ],
      quaList: [
        'At least 5-6 years of agency experience',
        'Must understand Digital Marketing thoroughly (Social, Search, Website, Applications, Branding, Lead Generation, etc)',
        'Confident, professional team player who must be able to collaborate with stakeholders at all levels of the organization',
        'Strong project management experience and skills required.',
        'Proven ability to manage multiple projects concurrently under aggressive timelines in a dynamic fast-paced environment while maintaining communication and attention to detail',
        'Strong and effective verbal and written communication skills',
        'Ability to multi-task and prioritize responsibilities',
        'Demonstrate flexibility and willingness to independently navigate areas of unfamiliarity',
        'Positive and professional attitude',
      ],
    },
    {
      title: 'Google Ad Specialist',
      para: 'We are looking for a Google Ads Specialist to develop and implement Search Ads, Display Ads, Youtube Ads, etc.',
      respDesc: [
        'Develop integrated Google Adwords Campaign for better results.',
        'Create Ad Accounts and manage all the campaigns end to end.',
        'Track digital campaign performance.',
        'Analyze campaign metrics, prepare performance reports, and provide recommendations.',
        'Monitor market trends and identify new digital opportunities.',
      ],
      quaList: [
        'Bachelor’s degree in communication, marketing, or advertising.',
        'At least 2 - 4 years of agency experience.',
        'Experience with campaign management and ad serving technology.',
        'Deep knowledge of Search Ads, Display Ads, Youtube Ads, Performance Max, and Analytics.',
        'Strong communication and presentation skills.',
        'Analytical thinking and problem- solving abilities.',
        'Organizational and time management skills.',
      ],
    },
    {
      title: 'Business Development',
      para: 'The ideal candidate will lead initiatives to generate and engage with business partners to build new business for the company. They should be able to think critically when making plans and have a demonstrated ability to execute a particular strategy.',
      respDesc: [
        'Identify partnership opportunities and grow business to help the company expand.',
        'Should have a thorough understanding of Digital Marketing Services – Content Marketing, SEO, Performance Marketing, Social Media Marketing etc.',
        'Create proposals, ideate strategies, work on different pitches.',
        'Should have excellent presentation skills.',
      ],
      quaList: [
        'Bachelor’s degree or equivalent experience',
        '2-3 years of experience in Digital Marketing Strategies',
        'Strong communication and interpersonal skills',
        'Proven knowledge and execution of successful development strategies',
        'Focused and goal-oriented',
      ],
    },

  ];
  

  // onFileSelected(event: Event, field: 'resume' | 'coverLetter'): void {
  //   const input = event.target as HTMLInputElement;
  //   if (input?.files?.length) {
  //     this.uploadedFiles[field] = input.files[0].name; // Display the file name
  //   } else {
  //     this.uploadedFiles[field] = ''; // Reset if no file is selected
  //   }
  // }
  
}
