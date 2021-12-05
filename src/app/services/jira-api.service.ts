import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../types';

@Injectable({
  providedIn: 'root',
})
export class JiraApiService {
  dataUrl: string = './assets/sample_data.json';

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.http.get<IResponse>(this.dataUrl);
  }
}
