import { Component } from '@angular/core';
import { Dog } from '../dog';
import { DogService } from '../dog.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-dogs',
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
