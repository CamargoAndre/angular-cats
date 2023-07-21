import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cats';

  constructor(private router: Router) {}

  // goToSearch() : void {

  //   this.router.navigate(['/cats/search']);

  // }
}
