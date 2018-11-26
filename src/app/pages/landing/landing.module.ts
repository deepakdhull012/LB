import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { CoreModule } from 'src/app/modules/core/core.module';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { ContainerComponent } from './container/container.component';

import { landingRoutes } from './landing.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(landingRoutes),
    CoreModule
  ],
  declarations: [LandingPage, PostDetailComponent, ContainerComponent]
})
export class LandingPageModule {}
