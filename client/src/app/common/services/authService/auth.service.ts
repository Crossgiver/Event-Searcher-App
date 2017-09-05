import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AUTH_API_URL } from './../../services/authService/auth.url';
import {CookieService} from "angular2-cookie/core";

@Injectable()
export class AuthService {

  domain = "http://localhost:8000";
  authToken;
  user;
  options;

  constructor(
    private http: Http,
    private _cookieService: CookieService
  ) { }

  createAuthenticationHeaders() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');
  }

  registerUser(user) {
    return this.http.post(this.domain + AUTH_API_URL.register, user).map(res => res.json());
  }

  login(user) {
    return this.http.post(this.domain + AUTH_API_URL.login, user).map(res => res.json());
  }

  public logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    this._cookieService.remove('token');
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  public accessToken() {
    return localStorage.getItem('token') || this._cookieService.get('token');
  }

  public isAuthenticated() : boolean {
    var token = this.accessToken();
    if(token) {
      return true;
    }
    return false;
  }

  getProfile() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + AUTH_API_URL.authProfile, this.options).map(res => res.json());
  }

}
