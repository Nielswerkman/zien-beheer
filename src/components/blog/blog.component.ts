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
  private updateModel: Blog;

  constructor(private blogService: LiveBlogService) { }

  ngOnInit() {
    this.blogService.getAll()
    .map(blogs => blogs.filter(blog => blog.accepted === false && blog.rejected === false))
    .subscribe(res => {
      this.blogs = res,
      console.log(res);
    })
  }

  rejectBlog(id: number){
    
    this.updateModel = this.blogs.filter(
      blog => blog.id == id,
    )[0]
    this.updateModel.rejected = true;
    console.log(this.updateModel);
    
    this.blogService.put(this.updateModel).subscribe(res => {
      console.log(res);
   });
    
  }

  acceptBlog(id: number){
    
    this.updateModel = this.blogs.filter(
      blog => blog.id == id,
    )[0]
    this.updateModel.accepted = true;
    console.log(this.updateModel);
    
    this.blogService.put(this.updateModel).subscribe(res => {
      console.log(res);
   });
    
  }

}
