import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginDetails } from '../models/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 

  }

  login(loginData:loginDetails){
   return this.http.post("",loginData);
  }
}
