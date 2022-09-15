import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../app/models/character.model';
import { Observable } from 'rxjs';

const baseUrl = "https://ta41-server-danielfloria.herokuapp.com/characters"

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  retornar(): Observable<Character[]> {
    return this.http.get<Character[]>(baseUrl);
  }

  get(id: any): Observable<Character> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<Character[]> {
    return this.http.get<Character[]>(`${baseUrl}?name=${name}`)
  }
}
