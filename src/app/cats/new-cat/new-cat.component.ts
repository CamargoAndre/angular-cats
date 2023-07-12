import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-cat',
  templateUrl: './new-cat.component.html',
  styleUrls: ['./new-cat.component.scss']
})
export class NewCatComponent implements OnInit{

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    if(this.route.routeConfig?.path?.includes("edit")) {
      console.log("preencher formulario");
      // preencher formulario
    }

    console.log(this.route.snapshot.params)

  }
}
