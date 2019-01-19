import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { MenuConfig } from './config/menu.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  categories  = [];
  public appPages = [
    {
      title: 'Home',
      url: '/landing',
      icon: 'home'
    },
  ];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.categories = MenuConfig.getMenuConfig();
    });
  }

  logout() {
    localStorage.setItem('loggedInUserId', null);
    this.router.navigate(['/verify']);
  }

  redirectTo(arr) {
    this.router.navigate(arr);
  }
}
