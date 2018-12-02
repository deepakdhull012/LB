import { Component, OnInit , Input} from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post:any = null;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.post = this.commonService.data;
    
  }

}
