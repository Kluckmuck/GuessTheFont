import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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

  getPopular(): Observable<GoogleFontResponse> {
    return this.http.get<GoogleFontResponse>(this.API_URL + this.GOOGLE_KEY + '&sort=popularity');
  }

  getPangrams(): Observable<string[]> {
    let myobs:Observable<string[]> = of([
      "Waxy and quivering, jocks fumble the pizza.",
      "Waltz, nymph, for quick jigs vex Bud",
      "Sphinx of black quartz, judge my vow.",
      "Pack my box with five dozen liquor jugs.",
      "Glib jocks quiz nymph to vex dwarf.",
      "Jackdaws love my big sphinx of quartz.",
      "The five boxing wizards jump quickly.",
      "How vexingly quick daft zebras jump!",
      "Quick zephyrs blow, vexing daft Jim.",
      "Two driven jocks help fax my big quiz.",
      "The jay, pig, fox, zebra and my wolves quack!",
      "Sympathizing would fix Quaker objectives.",
      "A wizard's job is to vex chumps quickly in fog.",
      "Watch 'Jeopardy!' Alex Trebek's fun TV quiz game.",
      "By Jove, my quick study of lexicography won a prize!"
    ]);
    return myobs;
  }
}
