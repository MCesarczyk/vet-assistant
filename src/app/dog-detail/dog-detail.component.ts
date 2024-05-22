import { Component, Input } from '@angular/core';
import { Dog } from '../dog';

@Component({
  selector: 'app-dog-detail',
  templateUrl: './dog-detail.component.html',
  styleUrl: './dog-detail.component.scss'
})
export class DogDetailComponent {
  @Input() dog?: Dog;
}
