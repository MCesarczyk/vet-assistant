import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
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
