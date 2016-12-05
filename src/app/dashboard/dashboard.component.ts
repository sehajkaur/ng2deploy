import { Component, OnInit } from '@angular/core';
import {CartoonCharacter} from '../cartoon-character';
import {CartoonCharacterService} from '../cartoon-character.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters: CartoonCharacter[];

  constructor(private cartoonService: CartoonCharacterService) { }

  ngOnInit() {
    this.cartoonService.getCartoonCharacters()
      .then(results => this.characters = results.slice(0, 4));
  }
}