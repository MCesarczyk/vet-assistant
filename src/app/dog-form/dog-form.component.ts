import { Component, EventEmitter, Output } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
})
export class DogFormComponent {
  @Output() onFormFinish = new EventEmitter<void>();

  breeds = ['Labrador', 'Poodle', 'Bulldog', 'Beagle', 'Pug', 'Terrier', 'Chihuahua', 'Dachshund', 'Husky', 'Boxer'];
  model = new Dog(1, '', '', 0);

  onSubmit() {
    this.onFormFinish.emit();
    console.table(this.model);
  }

  onCancel() {
    this.onFormFinish.emit();
  }
}
