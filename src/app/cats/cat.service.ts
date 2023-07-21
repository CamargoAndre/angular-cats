import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../shared/models/Cat.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatService {

  private serverUrl = 'api/cats';

  constructor(private http: HttpClient) { }

  getCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.serverUrl);
  }

  postCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.serverUrl, cat);
  }

  getCatById(id: number): Observable<Cat>{
    return this.http.get<Cat>(`${this.serverUrl}/${id}`)
  }

  putCat() {}

  patchCat(){}

  deleteCat() {}


}
