import { Character } from '../models/character.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ListService } from '../list.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  character: Character = {
    name: '',
    status: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  };
  id: any = [];
  message = '';

  constructor(private listService: ListService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id') || ('[]'));
  }

  ngOnInit(): void {
    this.listService
      .get(this.id)
      .subscribe(
        result => {
          this.character = result;
        }
      );
  }

  updateCharacter(): void {
    this.message = '';
    this.listService.update(this.id, this.character)
      .subscribe(
        response => {
          this.message = response.message?response.message:"Message updated";
        },
        error => {
          console.log(error);
        }
      )
  }

  deleteCharacter(): void {
    this.listService.delete(this.id)
      .subscribe(
        response => {
          this.router.navigate(['/characters']);
        },
        error => {
          console.log(error);
        }
      )
  }

}
