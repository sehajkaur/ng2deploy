import { Component, OnInit } from '@angular/core';

import {CartoonCharacterService} from './cartoon-character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartoonCharacterService]
})
export class AppComponent {
  title = 'The Flintstones';
}