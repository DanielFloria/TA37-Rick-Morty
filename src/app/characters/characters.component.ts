import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: any = null;

  constructor(private listService: ListService ) {}

  ngOnInit() {
    this.listService
    .retornar().subscribe(result => {
        this.characters = result;
      },
      error => {
        console.log('No funciona');
      }
    );
  }

}
