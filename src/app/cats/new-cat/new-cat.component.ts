import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cat } from 'src/app/shared/models/Cat.model';
import { CatService } from '../cat.service';


@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit{


  formCat = new FormGroup({
    name: new FormControl('', Validators.required),
    length: new FormControl(null, Validators.required),
    weight: new FormControl(),
    race: new FormControl(),
  });

  editMode = false;
  selectedCat: Cat;
  serviceSub = new Subscription();


  constructor(private route: ActivatedRoute, private service: CatService) {}

  ngOnInit(): void {
    this.verifyRoute();
  }

  verifyRoute(): void {

    if(this.route.routeConfig.path.includes("edit")) {
      this.editMode = true;
      let catId = this.route.snapshot.params['id'];

      this.getCatById(catId)

    }

  }

  getCatById(id: number): void {
    this.serviceSub = this.service.getCatById(id).subscribe((resp) =>{
      this.fillForm(resp);
    })
  }

  fillForm(cat: Cat): void {

    this.formCat.patchValue({
      name: cat.name,
      length: cat.length,
      weight: cat.weight,
      race: cat.race
    });
  }

  createCat(): void {

  }

  updateCat() : void{

    // let index = this.dataSource.findIndex(
    //   (value) => value.id == this.selectedCat.id
    // );

    // this.dataSource[index] = {
    //   id: this.selectedCat.id,
    //   ...this.formCat.getRawValue(),
    // }

  }

}
