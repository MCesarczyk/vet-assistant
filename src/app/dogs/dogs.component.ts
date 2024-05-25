import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  template: `
    <h2 class="text-3xl text-red-700 mb-4">My dogs</h2>
    <ul class="flex flex-col gap-2 max-w-96">
      <li *ngFor="let dog of dogs" class="cursor-pointer hover:translate-x-1 flex justify-between bg-white rounded-xl shadow">
        <a routerLink="/dog/{{dog.id}}" class="grow flex">
          <div class="w-16 rounded-tl-xl rounded-bl-xl bg-gray-600 text-white text-xl grid place-items-center">{{dog.id}}</div>
          <div class="p-4">{{dog.name}}</div>
        </a>
        <button type="button" class="w-16 bg-transparent grid place-items-center text-xl hover:text-red-600 hover:font-bold" (click)="delete(dog)">x</button>
      </li>
    </ul>
  `,
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs = dogs));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.dogService.createDog({ name } as Dog).subscribe(dog => {
      this.dogs.push(dog);
    });
  }

  delete(dog: Dog): void {
    this.dogs = this.dogs.filter(d => d !== dog);
    this.dogService.deleteDog(dog).subscribe();
  }
}
