import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }

  getDogs(): Observable<Dog[]> {
    const dogs = of(DOGS);
    return dogs;
  }
}
