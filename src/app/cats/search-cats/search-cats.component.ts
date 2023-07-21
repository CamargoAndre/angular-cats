import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from 'src/app/shared/models/Cat.model';


@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'name', 'length', 'weight', 'race', 'actions'];

  dataSource : Cat[]= [];

  constructor(private service: CatService){}

  ngOnInit(): void {

    this.service.getCats().subscribe((resp)=>{
      console.log(resp);
      this.dataSource = resp;
    })
  }

}
