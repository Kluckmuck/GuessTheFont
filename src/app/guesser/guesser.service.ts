import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GoogleFontResponse } from '../models/googlefontresponse';
import { Font } from '../models/font';

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

  getManual(): Observable<Font[]> {
    let myobs:Observable<Font[]> = of([
      { "family": "Playfair Display" },
      { "family": "Ubuntu" },
      { "family": "Lobster" },
      { "family": "Crimson Text" },
      { "family": "PT Sans" },
      { "family": "Raleway" },
      { "family": "Source Sans Pro" },
      { "family": "Open Sans" },
      { "family": "Roboto" },
      { "family": "Lato" },
      { "family": "Montserrat" },
      { "family": "Rubik" },
      { "family": "Barlow" },
      { "family": "Abril Fatface" },
      { "family": "Comfortaa" },
      { "family": "Lobster" },
      { "family": "Inconsolata" },
      { "family": "Source Code Pro" },
      { "family": "Oxygen Mono" },
      { "family": "Merriweather" },
      { "family": "Poppins" },
      { "family": "Libre Franklin" },
      { "family": "Barlow" },
      { "family": "Muli" },
      { "family": "Overpass" },
      { "family": "IBM Plex Sans" },
      { "family": "IBM Plex Mono" },
      { "family": "EB Garamond" },
      { "family": "Permanent Marker" },
      { "family": "Quicksand" },
      { "family": "Titillium Web" },
      { "family": "Inter" },
      { "family": "Libre Baskerville" },
      { "family": "Bebau Neue" },
      { "family": "Exo 2" },
      { "family": "Exo" },
    ])
    return myobs;
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
