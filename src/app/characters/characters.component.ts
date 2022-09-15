import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { Character } from '../models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters?: Character[];
  currentCharacter: Character = {};
  currentIndex = -1;
  name = '';

  constructor(private listService: ListService ) {}

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.listService.retornar()
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

  refreshList(): void {
    this.retrieveCharacters();
    this.currentCharacter = {};
    this.currentIndex = -1;
  }

  setActiveCharacter(character: Character, index: number): void {
    this.currentCharacter = character;
    this.currentIndex = index;
  }

  removeAllCharacters(): void {
    this.listService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        }
      );
  }

  searchName(): void {
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
