import { Component, OnInit } from '@angular/core';
import { LandingService } from './../../services/landing.service';
import { imagesUrl } from './../../consts/configuration';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  posts:any = [];
  page: number = 1;
  pageSize: number = 2;
  constructor(
    private landingService: LandingService
  ) { }

  ngOnInit() {
    this.landingService.fetchPosts(this.pageSize,this.page).subscribe((posts)=> {
      this.posts = [...this.posts,...posts];
      console.log('Initial',this.posts)
    });
  }

  loadMore(event) {  
    this.page++;
    this.landingService.fetchPosts(this.pageSize,this.page).subscribe((posts)=> {
      this.posts = [...this.posts,...posts];
      event.target.complete();
    });
  }

  getUserProfile(userId) {
    this.landingService.getUserProfile(userId).subscribe((userData)=>{
      console.log(userData);
    })
  }

}
