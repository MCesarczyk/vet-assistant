import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2 class="text-3xl text-red-700">Top dogs</h2>
    <ul class="flex flex-col md:flex-row gap-4 justify-stretch w-full p-4 flex-wrap">
      <li *ngFor="let dog of dogs" class="grow">
        <a routerLink="/dog/{{dog.id}}" class="bg-slate-600 hover:bg-slate-800 text-white py-4 px-6 rounded-lg block text-center">
          {{dog.name}}
        </a>
      </li>
    </ul>
    <app-dog-search></app-dog-search>
  `,
})
export class DashboardComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs = dogs.slice(1, 5)));
  }
}
