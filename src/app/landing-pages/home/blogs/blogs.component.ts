import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {

  blogs = [
    {
      img:'assests/images/home/blog-1.jpg',
      comments:'0',
      date:'Sep 6, 2024',
      title:'Importers achieve savings through the First Sale rule!'
    },
    {
      img:'assests/images/home/blog-1.jpg',
      comments:'0',
      date:'Sep 6, 2024',
      title:'Is now the right time to invest in an enterprise'
    },
    {
      img:'assests/images/home/blog-1.jpg',
      comments:'0',
      date:'Sep 6, 2024',
      title:'Focus logistics secure new landmark Contracts'
    },
    {
      img:'assests/images/home/blog-1.jpg',
      comments:'0',
      date:'Sep 6, 2024',
      title:'Transid Named a Finalist For Year’ 25 Best Choice'
    },
  ]
}
