import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dog } from '../dog';
import { DogDetailComponent } from '../dog-detail/dog-detail.component';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, FormsModule, DogDetailComponent],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {
  dogs: Dog[] = [];
  selectedDog?: Dog;

  constructor(private dogService: DogService) {}

  getDogs(): void {
    this.dogs = this.dogService.getDogs();
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }

  ngOnInit() {
    this.getDogs();
  }
}
