import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Blog } from 'models/blog';
import { LiveBlogService } from 'services/BlogService/LiveBlogService';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  private blogs: Blog[];

  constructor(private blogService: LiveBlogService) { }

  ngOnInit() {
    this.blogService.getAll().subscribe(res => {
      this.blogs = res,
      console.log(res);
    })
  }

}
