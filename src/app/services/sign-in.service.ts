import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { server, apiInitials} from './../consts/configuration';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) {

  }

  loginUser(loginInfo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<any>(`${server}${apiInitials}login`, loginInfo, httpOptions);
  }
}
