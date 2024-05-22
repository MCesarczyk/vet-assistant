import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dog } from '../dog';
import { DogDetailComponent } from '../dog-detail/dog-detail.component';
import { DogService } from '../dog.service';
import { MessageService } from '../message.service';

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

  constructor(private dogService: DogService, private messageService: MessageService) { }

  ngOnInit() {
    this.getDogs();
  }

  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => (this.dogs = dogs));
  }

  onSelect(dog: Dog): void {
    this.selectedDog = dog;
    this.messageService.add(`DogsComponent: Selected dog id=${dog.id}`);
  }
}
