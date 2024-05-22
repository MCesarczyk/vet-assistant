import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DOGS } from '../mock-dogs';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {
  dogs = DOGS;

  selectedDog?: Dog;
  onSelect(dog: Dog): void {
    this.selectedDog = dog;
  }
}
