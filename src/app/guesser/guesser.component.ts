import { Component, OnInit } from '@angular/core';
import { GuesserService } from './guesser.service';
import { GoogleFontResponse } from '../models/googlefontresponse';

@Component({
  selector: 'app-guesser',
  templateUrl: './guesser.component.html',
  styleUrls: ['./guesser.component.scss']
})
export class GuesserComponent implements OnInit {

  fonts: GoogleFontResponse;
  font = null;
  fontPath = null;
  random = null;
  answer = '';
  result = null;
  points: number = 0;

  constructor(private guesserService: GuesserService) { }

  ngOnInit(): void {
    this.guesserService.getPopular().subscribe(response => {
      this.fonts = response;
      this.newGuess();
    })
  }

  onSubmit(value: string) {
    this.answer = value.trim();
    if (this.answer.toLowerCase() == this.font.toLowerCase()) {
      this.result = true;
      this.points = this.points + 100;
    }
    else this.result = false;
    this.newGuess();
  }

  newGuess(): void {
    this.random = this.GetRandom();
    this.fontPath = this.fonts.items[this.random].files.regular;
    this.font = this.fonts.items[this.random].family;
    this.fonts.items.splice(this.random, 1);
    }

  GetRandom(): number {
    return Math.floor(Math.random() * this.fonts.items.length);
  }

  button(): void {
    //console.log(JSON.stringify(this.fonts))
    //this.fonts.items.forEach(element => { console.log(element.family)});
    //this.fonts.items[0].files.forEach(element => { console.log(element)});
    //console.log(JSON.stringify(this.fonts.items[0].files.regular));
    //console.log(JSON.stringify(this.fontPath));
  }
}
