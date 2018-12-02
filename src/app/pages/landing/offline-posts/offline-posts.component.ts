import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-offline-posts',
  templateUrl: './offline-posts.component.html',
  styleUrls: ['./offline-posts.component.scss']
})
export class OfflinePostsComponent implements OnInit {
  posts = [];

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  ngOnInit() {
    this.nativeStorage.getItem('offlinePosts')
      .then((posts) => {
        console.log(posts)
        this.posts = posts;
      });
    }

    removeOffline(post) {
      let updatedList = this.posts.filter((p)=>{
        return p.id !== post.id;
      });
      this.nativeStorage.setItem('offlinePosts',updatedList)
      .then((posts) => {
        this.posts = posts;
      });
    }

}
