import { Component, OnInit } from "@angular/core";
import { Blog } from "models/blog";
import { LiveBlogService } from "services/BlogService/LiveBlogService";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: 'app-show-blog',
    templateUrl: './show-blog.component.html',
    styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

    private id: number;
    private blog: Blog;

    constructor(private blogService: LiveBlogService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.blogService.get(this.id).subscribe(res => {
            this.blog = res;
            console.log(res);
        })
    }
}
