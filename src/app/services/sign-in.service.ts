import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { server, apiInitials, loginUrl} from './../consts/configuration';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) {

  }

  loginUser(loginInfo) {
    const httpOptions = {
      headers: new HttpHeaders({

        'content-type':"application/json"
      })
    };
    console.log(loginInfo)
    return this.http.post<any>(`${server}${loginUrl}`, loginInfo, httpOptions);
  }
}
