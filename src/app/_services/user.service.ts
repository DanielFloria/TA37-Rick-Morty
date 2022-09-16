import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://master.d19jemh0ek19bl.amplifyapp.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'characters', {responseType: 'text'});
  }

  /*getUserBoard(): Observable<any> {
    return this.http.get()
  }*/


}
