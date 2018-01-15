import { Component, OnInit } from "@angular/core";
import { Blog } from "models/blog";
import { LiveBlogService } from "services/BlogService/LiveBlogService";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Internship } from "models/Internship";
import { LiveInternshipService } from "services/InternshipService/LiveInternshipService";

@Component({
    selector: 'app-show-blog',
    templateUrl: './show-blog.component.html',
    styleUrls: ['./show-blog.component.css']
})
export class ShowBlogComponent implements OnInit {

    private id: number;
    private blog: Blog;
    private internship: Internship;

    constructor(private blogService: LiveBlogService, private internshipService: LiveInternshipService, 
        private router: Router, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.blogService.get(this.id).subscribe(res => {
            this.blog = res;
            console.log(res);
        })
    }
}
