import { Component } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrl: './dog-form.component.scss'
})
export class DogFormComponent {
  breeds = ['Labrador', 'Poodle', 'Bulldog', 'Beagle', 'Pug', 'Terrier', 'Chihuahua', 'Dachshund', 'Husky', 'Boxer'];

  model = new Dog(1, 'Rex', this.breeds[0], 3);

  submitted = false;

  onSubmit() { this.submitted = true; }

  crateNewDog() {
    this.model = new Dog(2, '', this.breeds[0], 0);
  }
}
