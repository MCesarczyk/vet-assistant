import { Component } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs = dogs.slice(1, 5)));
  }
}
