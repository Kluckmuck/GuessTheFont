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

  constructor(private guesserService: GuesserService) { }

  ngOnInit(): void {
    this.random = this.GetRandom();
    this.guesserService.getPopular().subscribe(response => {
      this.fonts = response;
      this.fontPath = this.fonts.items[this.random].files.regular;
      this.font = this.fonts.items[this.random].family;
    })
  }

  onSubmit(value: string) {
    this.answer = value.trim();
    if (this.answer.toLowerCase() == this.font.toLowerCase()) {
      this.result = true;
      console.log('is correct!');
    }
    else this.result = false;
  }

  newGuess(): void {
    
  }

  GetRandom(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

  setFont() {
    this.font = this.font === 'Roboto, Helvetica, sans-serif' ? 'Ariel' : 'Roboto, Helvetica, sans-serif'
  }

  button(): void {
    //console.log(JSON.stringify(this.fonts))
    //this.fonts.items.forEach(element => { console.log(element.family)});
    //this.fonts.items[0].files.forEach(element => { console.log(element)});
    //console.log(JSON.stringify(this.fonts.items[0].files.regular));
    console.log(JSON.stringify(this.fontPath));
  }
}
