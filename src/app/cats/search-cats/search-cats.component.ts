import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from 'src/app/shared/models/Cat.model';
import { Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-search-cats',
  templateUrl: './search-cats.component.html',
  styleUrls: ['./search-cats.component.scss']
})
export class SearchCatsComponent implements OnInit, OnDestroy{

  displayedColumns: string[] = ['id', 'name', 'length', 'weight', 'race', 'actions'];

  dataSource : Cat[]= [];

  serviceSub = new Subscription();


  searchControl = new FormControl<string>('');

  constructor(private service: CatService){}

  ngOnInit(): void {

    this.getCats();

    this.searchControl.valueChanges.subscribe((resp) =>{
      console.log(resp);
    })

  }

  getCats():void{

    this.serviceSub = this.service.getCats().subscribe((resp)=>{
      console.log(resp);
      this.dataSource = resp;
    })
  }



  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();

  }

}
