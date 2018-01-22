import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Blog } from 'models/blog';

import { LiveBlogService } from 'services/BlogService/LiveBlogService';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  private blogs: Blog[];
  private updateModel: Blog;

  constructor(private blogService: LiveBlogService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentAdmin') === 'null') {
      this.router.navigate(['/login'])
    }
    this.blogService.getAll()
      .map(blogs => blogs.filter(blog => blog.accepted === false && blog.rejected === false
        && (blog.content !== null && blog.title !== null)))
      .subscribe(res => {
        this.blogs = res;
        console.log(res);
      });
  }

  rejectBlog(id: number) {

    this.updateModel = this.blogs.filter(
      blog => blog.id === id,
    )[0]
    this.updateModel.rejected = true;

    this.blogService.put(this.updateModel).subscribe(
      () => window.location.reload()
    );

  }

  acceptBlog(id: number) {

    this.updateModel = this.blogs.filter(
      blog => blog.id === id,
    )[0]
    this.updateModel.accepted = true;

    this.blogService.put(this.updateModel).subscribe(
      () => window.location.reload()
    );

  }

  showBlog(id: number) {
    this.router.navigate(['../blog/show', id]);
  }

}
