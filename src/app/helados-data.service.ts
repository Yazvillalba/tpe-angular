import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helado } from './list/list';

const URL = 'https://60ca92fd772a760017206357.mockapi.io/v1/helados';
@Injectable({
  providedIn: 'root'
})
export class HeladosDataService {
  constructor(private http: HttpClient){}
  
  public getAll(): Observable<Helado[]>{
    return this.http.get<Helado[]>(URL);
  }
  
}
