import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const dogs = [
      { id: 1, name: 'Buddy', breed: 'Golden Retriever', age: 3 },
      { id: 2, name: 'Charlie', breed: 'Labrador Retriever', age: 2 },
      { id: 3, name: 'Max', breed: 'German Shepherd', age: 4 },
      { id: 4, name: 'Oscar', breed: 'Beagle', age: 1 },
      { id: 5, name: 'Milo', breed: 'Bulldog', age: 5 },
      { id: 6, name: 'Archie', breed: 'Poodle', age: 2 },
      { id: 7, name: 'Bailey', breed: 'Shih Tzu', age: 3 },
      { id: 8, name: 'Teddy', breed: 'Dachshund', age: 4 },
      { id: 9, name: 'Toby', breed: 'Pug', age: 1 },
      { id: 10, name: 'Jack', breed: 'Chihuahua', age: 2 }
    ];
    return { dogs };
  }

  genId(dogs: Dog[]): number {
    return dogs.length > 0 ? Math.max(...dogs.map(dog => dog.id)) + 1 : 11;
  }
}
