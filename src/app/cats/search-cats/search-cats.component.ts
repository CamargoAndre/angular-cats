import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'length', 'weight', 'race', 'actions'];

  dataSource = [
    {id:1, name: 'Cesar', length: 0.3, weight: 4.0, race: 'Ciamês' },
    {id:2, name: 'Augusto', length: 0.5, weight: 2.0, race: 'Persa'},
    {id:3, name: 'Ronaldo', length: 0.1, weight: 3.5, race: 'Burmê' },
    {id:4, name: 'Gato', length: 0.2, weight: 6.0, race: 'Bengal' },
    {id:5, name: 'Farofa', length: 0.8, weight: 1.0, race: 'Abissinio'},
  ];



  constructor(private service: CatService){}

  ngOnInit(): void {
  }

}
