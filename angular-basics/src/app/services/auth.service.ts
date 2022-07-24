import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDetails } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  URL = "http://localhost:8000";
  httpPostOptions = {
    headers: new HttpHeaders({
      'Content-Type': ' application/x-www-form-urlencoded, json, text/plain */*',
      "Access-Control-Allow-Origin": "*"
    })
  };
  constructor(private http: HttpClient) { 

  }

  testAPI(){
   return this.http.get(this.URL);
  }

  onLogin(loginData:loginDetails){
    let body = {
      username:"abc",
    }
    const LOGIN_URL = "/api/login";
   return this.http.post(LOGIN_URL,body,this.httpPostOptions);
  }
}
