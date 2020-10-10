import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GoogleFontResponse } from '../models/googlefontresponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GuesserService {

  GOOGLE_KEY = 'AIzaSyD88pIQmP6lKiCo6zCaVqQk4ZtnLvyVask'
  API_URL = 'https://www.googleapis.com/webfonts/v1/webfonts?key='

  constructor(private http: HttpClient) { }

  getPopular(): Observable<GoogleFontResponse>{
    return this.http.get<GoogleFontResponse>(this.API_URL + this.GOOGLE_KEY + '&sort=popularity');
  }
}
