import { Component, OnInit } from '@angular/core';
import { LandingService } from './../../services/landing.service';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  posts: any = [];
  page: number = 1;
  pageSize: number = 20;
  searchText: string = '';
  loading = false;

  constructor(
    private landingService: LandingService,
    private commonService: CommonService,
    private router: Router,
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.posts = this.commonService.postList;
    if (this.posts.length === 0) {
      this.commonService.showLoader();
      this.loading = true;
      this.landingService.fetchPosts(this.pageSize, this.page, this.searchText).subscribe((posts) => {
        this.posts = [...this.posts, ...posts];
        this.commonService.dismissLoader();
        this.loading = false;
        this.commonService.postList = this.posts;
        console.log('Initial', this.posts)
      });
    }
  }

  loadMore(event) {
    this.page++;
    this.landingService.fetchPosts(this.pageSize, this.page, this.searchText).subscribe((posts) => {
      this.posts = [...this.posts, ...posts];
      event.target.complete();
    });
  }

  search($event) {
    this.page = 1;
    this.searchText = $event.detail.value;
    this.landingService.fetchPosts(this.pageSize, this.page, this.searchText).subscribe((posts) => {
      this.posts = [];
      this.posts = [...this.posts, ...posts];
    });
  }

  searchClear() {
    this.page = 1;
    this.searchText = '';
  }

  getUserProfile(userId) {
    this.landingService.getUserProfile(userId).subscribe((userData) => {
      console.log(userData);
    });
  }

  goToPostDetail(post) {
    this.router.navigate(['landing', 'postDetail']);
    this.commonService.data = post;
  }

  saveOffline(post) {
    let offlinePosts = [];
    this.nativeStorage.getItem('offlinePosts')
      .then((posts) => {
        offlinePosts = posts;
        if (!this.postAlreadySaved(offlinePosts, post)) {
          offlinePosts.push(post);
          this.nativeStorage.setItem('offlinePosts', offlinePosts)
            .then(
              () => console.log('Stored item!!', offlinePosts),
              error => console.error('Error storing item', error)
            );
        }

        console.log(offlinePosts)
      }).catch((err)=>{
        let initialState = [];
        initialState.push(post);
        this.nativeStorage.setItem('offlinePosts', initialState)
            .then(
              () => console.log('Initial State set'),
              error => console.error('Error storing item', error)
            );
      });

  }

  postAlreadySaved(offlinePosts, post) {
    let postExists = offlinePosts.filter((p) => {
      return post.id === p.id;
    });
    if (postExists.length > 0) {
      return true;
    }
    return false;
  }

}
