import { Component, OnInit } from '@angular/core';
import { LandingService } from './../../services/landing.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  posts:any = [];
  page: number = 1;
  pageSize: number = 20;
  searchText: string = '';
  loading = false;
  
  constructor(
    private landingService: LandingService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.showLoader();
    this.loading = true;
    this.landingService.fetchPosts(this.pageSize,this.page,this.searchText).subscribe((posts)=> {
      this.posts = [...this.posts,...posts];
      this.commonService.dismissLoader();
      this.loading = false;
      console.log('Initial',this.posts)
    });
  }

  loadMore(event) {  
    this.page++;
    this.landingService.fetchPosts(this.pageSize,this.page,this.searchText).subscribe((posts)=> {
      this.posts = [...this.posts,...posts];
      event.target.complete();
    });
  }

  search($event) {
    this.page = 1;
    this.searchText = $event.detail.value;
    this.landingService.fetchPosts(this.pageSize,this.page,this.searchText).subscribe((posts)=> {
      this.posts = [];
      this.posts = [...this.posts,...posts];
    });
  }

  searchClear() {
    this.page = 1;
    this.searchText = '';
  }

  getUserProfile(userId) {
    this.landingService.getUserProfile(userId).subscribe((userData)=>{
      console.log(userData);
    })
  }

}
