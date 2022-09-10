import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(private http: HttpClient) {}

  searchIcon(queryString?: string) {
    return this.http.get(`${environment.apiUrl}icon`);
  }

  addIcon(data: FormData) {
    return this.http.post(`${environment.apiUrl}icon`, data);
  }
}
