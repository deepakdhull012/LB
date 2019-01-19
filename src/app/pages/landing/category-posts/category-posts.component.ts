import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { LandingService } from './../../../services/landing.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-posts',
  templateUrl: './category-posts.component.html',
  styleUrls: ['./category-posts.component.scss']
})
export class CategoryPostsComponent implements OnInit {
  posts: any = [];
  loading = false;
  page: number = 1;
  pageSize: number = 10;
  catId : number;

  constructor(
    private landingService: LandingService,
    private commonService: CommonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.catId = +params['id']; 
      this.commonService.showLoader();
      this.loading = true;
      setTimeout(()=>{
        this.landingService.fetchCategoryPosts(this.pageSize, this.page, this.catId).subscribe((posts) => {
          this.posts = [...this.posts, ...posts];
          this.commonService.dismissLoader();
          this.loading = false;
          this.commonService.postList = this.posts;
        });
      },0);
   });
  }

  loadMore(event) {
    this.page++;
    this.landingService.fetchCategoryPosts(this.pageSize, this.page, this.catId).subscribe((posts) => {
      this.posts = [...this.posts, ...posts];
      event.target.complete();
    });
  }

  goToPostDetail(post) {
    this.router.navigate(['landing', 'postDetail']);
    this.commonService.data = post;
  }

}
