import { Component, OnDestroy, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Cat } from 'src/app/shared/models/Cat.model';
import { Subject, Subscription, debounce, debounceTime, filter } from 'rxjs';
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

  subject = new Subject<string>();

  constructor(private service: CatService){}

  ngOnInit(): void {

    this.getCats();

    this.setConfigSubject();

    // this.searchControl.valueChanges.subscribe((resp) =>{
    //   console.log(resp);
    // })

  }

  getCats(searchValue: string = ""):void{

    this.serviceSub = this.service.getCats(searchValue).subscribe((resp)=>{
      console.log(resp);
      this.dataSource = resp;
    })
  }

  setConfigSubject(): void {
    this.subject.pipe(
      debounceTime(1000))
    .subscribe((searchValue: string) => {
      this.getCats(searchValue);
    });
  }

  searchCats(searchValue: string): void{
    this.subject.next(searchValue);
  }


  ngOnDestroy(): void {
    this.serviceSub.unsubscribe();

  }

}
