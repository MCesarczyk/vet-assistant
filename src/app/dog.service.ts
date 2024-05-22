import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';
import { DOGS } from './mock-dogs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private messageService: MessageService) { }

  getDogs(): Observable<Dog[]> {
    const dogs = of(DOGS);
    this.messageService.add('DogService: dogs fetched successfully!');
    return dogs;
  }

  getDog(id: number): Observable<Dog> {
    const dog = DOGS.find(dog => dog.id === id)!;
    this.messageService.add(`DogService: fetched dog id=${id}`);
    return of(dog);
  }
}
