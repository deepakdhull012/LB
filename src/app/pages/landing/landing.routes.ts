import { Routes } from '@angular/router';

import { LandingPage } from './landing.page';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ContainerComponent } from './container/container.component';
import { OfflinePostsComponent } from './offline-posts/offline-posts.component';
import { CategoryPostsComponent } from './category-posts/category-posts.component';

export const landingRoutes: Routes = [
    {
      path: '',
      component: ContainerComponent,
      children: [
        {
          path: 'postLists',
          component: LandingPage
        },
        {
          path: 'offlinePosts',
          component: OfflinePostsComponent
        },
        {
          path: 'postDetail',
          component: PostDetailComponent
        },
        {
          path: 'categoryPosts/:id',
          component: CategoryPostsComponent
        },
        {
          path: '',
          redirectTo: 'postLists'
        }
      ]
    }
  ];
