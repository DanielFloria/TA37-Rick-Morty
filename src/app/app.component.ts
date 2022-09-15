import { Component } from '@angular/core';
import { Character } from './models/character.model';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA37-Rick-Morty';
  characters: any = null;
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private listService: ListService) {}

  searchCharacter(): void {
    this.currentCharacter = {};
    this.currentIndex = -1;

    this.listService.findByName(this.name)
      .subscribe(
        data => {
          this.characters = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
  }
}
