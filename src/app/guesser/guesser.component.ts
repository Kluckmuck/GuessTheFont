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

  constructor(private guesserService: GuesserService) { }

  ngOnInit(): void {
    this.guesserService.getPopular().subscribe(response => 
      this.fonts = response)
  }

  button(): void {
    //console.log(JSON.stringify(this.fonts))
    this.fonts.items.forEach(element => {
      console.log(element.family)
    });
  }
}
