import { Injectable } from '@angular/core';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor() { }

  getDogs(): Dog[] {
    return DOGS;
  }
}
