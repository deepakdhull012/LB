import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { server, apiInitials} from './../consts/configuration';


@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) {

  }

  fetchPosts(noOfPosts,pageNo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(`${server}${apiInitials}posts?per_page=${noOfPosts}&_embed&page=${pageNo}`, httpOptions);
  }

  getUserProfile(userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.get<any>(`${server}${apiInitials}users/${userId}`, httpOptions);
  }
}
